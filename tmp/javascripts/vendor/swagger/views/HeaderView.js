(function(){var e,t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};e=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return n(t,e),t.prototype.events={"click #show-pet-store-icon":"showPetStore","click #show-wordnik-dev-icon":"showWordnikDev","click #explore":"showCustom","keyup #input_baseUrl":"showCustomOnKeyup","keyup #input_apiKey":"showCustomOnKeyup"},t.prototype.initialize=function(){},t.prototype.showPetStore=function(e){return this.trigger("update-swagger-ui",{discoveryUrl:"http://petstore.swagger.wordnik.com/api/api-docs.json",apiKey:"special-key"})},t.prototype.showWordnikDev=function(e){return this.trigger("update-swagger-ui",{discoveryUrl:"http://api.wordnik.com/v4/resources.json",apiKey:""})},t.prototype.showCustomOnKeyup=function(e){if(e.keyCode===13)return this.showCustom()},t.prototype.showCustom=function(e){return e!=null&&e.preventDefault(),this.trigger("update-swagger-ui",{discoveryUrl:$("#input_baseUrl").val(),apiKey:$("#input_apiKey").val()})},t.prototype.update=function(e,t,n){n==null&&(n=!1),$("#input_baseUrl").val(e),$("#input_apiKey").val(t);if(n)return this.trigger("update-swagger-ui",{discoveryUrl:e,apiKey:t})},t}(Backbone.View),window.HeaderView=e}).call(this);