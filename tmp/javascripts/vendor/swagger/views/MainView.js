(function(){var e,t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};e=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return n(t,e),t.prototype.initialize=function(){},t.prototype.render=function(){var e,t,n,r;$(this.el).html(Handlebars.templates.main(this.model)),r=this.model.resourcesArray;for(t=0,n=r.length;t<n;t++)e=r[t],this.addResource(e);return this},t.prototype.addResource=function(e){var t;return t=new ResourceView({model:e,tagName:"section",id:"resource_"+e.name,className:"resource divider-section"}),$("#resources").append(t.render().el)},t.prototype.clear=function(){return $(this.el).html("")},t}(Backbone.View),window.MainView=e}).call(this);