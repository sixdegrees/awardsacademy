(function(){var e,t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};e=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return n(t,e),t.prototype.initialize=function(){},t.prototype.render=function(){var e,t,n,r,i;return this.model.paramType==="body"&&(this.model.isBody=!0),this.model.dataType==="file"&&(this.model.isFile=!0),i=this.template(),$(this.el).html(i(this.model)),n={sampleJSON:this.model.sampleJSON,isParam:!0,signature:this.model.signature},this.model.sampleJSON?(r=new SignatureView({model:n,tagName:"div"}),$(".model-signature",$(this.el)).append(r.render().el)):$(".model-signature",$(this.el)).html(this.model.signature),e={isParam:!0,supportedContentTypes:this.model.supportedContentTypes},t=new ContentTypeView({model:e}),$(".content-type",$(this.el)).append(t.render().el),this},t.prototype.template=function(){return this.model.isList?Handlebars.templates.param_list:this.options.readOnly?this.model.required?Handlebars.templates.param_readonly_required:Handlebars.templates.param_readonly:this.model.required?Handlebars.templates.param_required:Handlebars.templates.param},t}(Backbone.View),window.ParameterView=e}).call(this);