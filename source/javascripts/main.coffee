# Avoid `console` errors in browsers that lack a console.

unless window.console and console.log
  (->
    noop = ->

    methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "markTimeline", "table", "time", "timeEnd", "timeStamp", "trace", "warn"]
    length = methods.length
    console = window.console = {}
    console[methods[length]] = noop  while length--
  )()


class App

  constructor: ()->

  stopEvent: (e)->
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
    false

  capitalize: (str) -> str.charAt(0).toUpperCase() + str.slice(1)

  joinWithAnd: (rest..., last)-> "#{rest.join(', ')} and #{last}"

Oahu.Apps.Quiz.prototype.share = ()->
  Oahu.ui.share 'facebook'
    link: "link"
    title: 'Title'
    name: 'Name'
    source: ""
    caption: "#{Oahu.account.facebook.name} a participé aux Cesar Academy"
    description: "Participez et voyez si vous êtes meilleur que lui !"
  ,(p) =>
    Oahu.track("quiz", "share", @id, { provider: 'facebook' }) if p

Oahu.Apps.Quiz.prototype.onfinish = ()->
  alert("Shared !")
  _.delay(@share, 3000);


$ () -> app = new App()
