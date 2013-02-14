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
  attrs: ["game", "game_name"]
  logon: (e, ev, opts)->
    href=$(e).attr('href')
    ev.preventDefault()
    Oahu.login 'facebook', {}, (res)->
      if Oahu.account && res=='facebook:connect:success'
        window.location.href= href


class Oahu.Apps.CaQuiz extends Oahu.Apps.Quiz
  namespace:'ca_quiz'

  onstart: ()=>
    super
    $(".pagination").show()

  go_to_other: ()=>
    window.location.href = if @namespace is "cesar_quiz" then "/oscars" else "/cesars"

  share: ()->
    console.log "Sharing"

  onafterfinish = ()->
    _.delay(@share, 1000);


class Oahu.Apps.OscarQuiz extends Oahu.Apps.CaQuiz
  namespace:'cesar_quiz'
  other:'Cesars'

class Oahu.Apps.CesarQuiz extends Oahu.Apps.CaQuiz
  namespace:'oscar_quiz'
  other:'Oscars'

  share: ()=>
    Oahu.ui.share 'facebook'
      link: "link"
      title: 'Title'
      name: 'Name'
      source: ""
      caption: "#{Oahu.account.facebook.name} a participé aux Cesar Academy"
      description: "Participez et voyez si vous êtes meilleur que lui !"
    ,(p) =>
      console.log @
      b = Oahu.account.player.badges
      other = _.reject b, (v,i) -> i==@id
      @go_to_other() unless other.length
      Oahu.track("quiz", "share", @id, { provider: 'facebook' }) if p
