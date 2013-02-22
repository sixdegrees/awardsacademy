# Avoid `console` errors in browsers that lack a console.
unless window.console and console.log
  (->
    noop = ->

    methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "markTimeline", "table", "time", "timeEnd", "timeStamp", "trace", "warn"]
    length = methods.length
    console = window.console = {}
    console[methods[length]] = noop  while length--
  )()

class Oahu.Apps.LoginRedirect extends Oahu.Apps.Identity
  namespace:'login_redirect'
  attrs: ["game", "game_name", 'image']
  logon: (e, ev, opts)->
    href=$(e).attr('href')+'?v='+Math.floor(Math.random()*10000000)
    ev.preventDefault()
    Oahu.login 'facebook', {}, (res)->
      if Oahu.account && res=='facebook:connect:success'
        window.location.href= href

class Oahu.Apps.CaQuiz extends Oahu.Apps.Quiz
  namespace:'ca_quiz'
  self: 'Quiz'
  other: 'Quiz'
  thumb: ''
  templates: ["quiz", "quiz_answer", "quiz_description", "quiz_entries", "quiz_entry", "quiz_footer", "quiz_header", "quiz_shares", "quiz_intro", "quiz_intro_message_logged_in", "quiz_intro_message_logged_out", "quiz_pagination", "quiz_resource", "quiz_submitted", "quiz_finished", "quiz_profile", 'quiz_printable']

  onstart: ()=>
    super
    $(".pagination").show()

  go_to_other: ()=>
    window.location.href = if @other is "Cesar" then "/cesar" else "/oscars"

  share: ()=>
    name = if Oahu.account?.name then "#{Oahu.account.name} a rendu son verdict !" else "l'Award Academy 2013"
    caption = if Oahu.account?.name and @self? then "#{Oahu.account.name} a pronostiqué les #{@self}. Jouez vous aussi et voyez si vous êtes meilleur que lui" else "Jouez à l'Award Academy !"

    Oahu.ui.share 'facebook'
      link: 'https://www.facebook.com/AgenceSilenzio/app_140923659406143'
      name: name
      source: @thumb
      caption: caption
    ,(p) =>
      b = Oahu.account.player.badges
      other = _.reject b, (v,i) -> i==@id
      @go_to_other() unless other.length
      Oahu.track("quiz", "share", @id, { provider: 'facebook' }) if p

  invite: ()->
    Oahu.ui.request 'facebook', (e)->
      console.log "Request", arguments

  onaftersubmit: ()=>
    _.delay(@share, 1000);

  do_print: ()->
    window.print()

  show_printable: ()-> 
    my_answers = @result.answers
    @answers_details = _.map @entries, (entry)=>
      selected = my_answers[entry.id]
      response = _.find entry.answers, (answer)=>
        answer.id==selected
      {
        name: entry.name
        response: response
      }

    @renderSection('printable')
    @do_print()

class Oahu.Apps.OscarQuiz extends Oahu.Apps.CaQuiz
  namespace:'cesar_quiz'
  message: "Vous pourrez modifier votre pronostic jusqu'au Dimanche 24 à 18h"
  self: 'Oscars'
  other:'Cesar'
  thumb: 'http://app-staging.oahu.fr/img/511e4add873b0c4e5f007a95/medium'

class Oahu.Apps.CesarQuiz extends Oahu.Apps.CaQuiz
  namespace:'oscar_quiz'
  message: "Vous pourrez modifier votre pronostic jusqu'au Vendredi 22 à 18h"
  self: 'Cesar'
  other:'Oscars'
  thumb: 'http://app-staging.oahu.fr/img/511e514b873b0c4f55007cff/medium'

class Oahu.Apps.Leaders extends Oahu.Apps.Identity
  namespace      : 'leaders'
  templates      : ['leaders']
  refresh_events: ['oahu:account:success','push:player:badge:update']
  attrs:['method', 'limit']

  limit:25

  getData: (cb)->
    if Oahu.account
      Oahu.app.getLeaderboard {id:@id, method:@method, limit:@limit}, (leaderboard)=>
        @leaderboard = leaderboard
        @leaderboard.players = _.select @leaderboard.players, (players)->
          player?.score > 0 
        cb.call(@)
    else
      cb.call(@)

class Oahu.Apps.Answers extends Oahu.Apps.Identity
  namespace      : 'answers'
  templates      : ['answers', 'quiz_answer', 'quiz_resource', 'quiz_description']
  refresh_events: ['oahu:account:success','push:player:badge:update']


  initialize: ->
    @achievement = Oahu.app.achievements[@id]
    Oahu.bind "push:app:achievement:update:#{@id}", (msg, data)=>
      @achievement = data
      @render()

  getData: (cb)->
    if Oahu.account
      @answers = @achievement.entries
      @distribution = @achievement.answers_distribution
      @selection = Oahu.account.player.badges[@id].data.answers
      @my_answers = _.map @answers, (entry)=>
        my_selection = @selection[entry.id]
        distribution = @distribution[entry.id]
        sum = _.reduce distribution, (memo, val, key)=>
          memo + val
        , 0

        winner = _.max entry.answers, (answer)-> answer.weight
        winner = null unless winner.weight > 0
        _.each entry.answers, (answer)-> answer.rate = Math.round((distribution[answer.id]/sum)*100)

        selected = _.find entry.answers, (answer)=> answer.id==my_selection
        {
          name     : entry.name
          answers  : entry.answers
          selected : selected
          winner   : winner
        }
      cb.call(@)
    else
      cb.call(@)

