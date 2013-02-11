#= require_tree .

Hull.templates = Hull.templates || {}
_.filter _.keys(JST), (tpl)->
  if /^widgets/.test(tpl)
    tplName = tpl.replace(/^widgets\//, '')
    Hull.templates[tplName] = JST[tpl]