(function(){return this.JST||(this.JST={}),this.JST["vendor/swagger/templates/content_type"]=Handlebars.template(function(e,t,n,r,i){function f(e,t){var r="",i;r+="\n    ",i=n.each.call(e,e.supportedContentTypes,{hash:{},inverse:a.noop,fn:a.program(2,l,t),data:t});if(i||i===0)r+=i;return r+="\n",r}function l(e,t){var n="",r;n+='\n	<option value="',r=typeof e===u?e.apply(e):e;if(r||r===0)n+=r;n+='">',r=typeof e===u?e.apply(e):e;if(r||r===0)n+=r;return n+="</option>\n	",n}function c(e,t){return'\n    <option value="application/json">application/json</option>\n'}n=n||e.helpers,i=i||{};var s="",o,u="function",a=this;s+='<label for="contentType"></label>\n<select name="contentType">\n',o=n["if"].call(t,t.supportedContentTypes,{hash:{},inverse:a.program(4,c,i),fn:a.program(1,f,i),data:i});if(o||o===0)s+=o;return s+="\n</select>\n",s}),this.JST["vendor/swagger/templates/content_type"]}).call(this),function(){return this.JST||(this.JST={}),this.JST["vendor/swagger/templates/main"]=Handlebars.template(function(e,t,n,r,i){return n=n||e.helpers,i=i||{},"<div id='resources' class='container'></div>\n"}),this.JST["vendor/swagger/templates/main"]}.call(this),function(){return this.JST||(this.JST={}),this.JST["vendor/swagger/templates/operation"]=Handlebars.template(function(e,t,n,r,i){function l(e,t){var r="",i;r+="\n          <div class=\"section\">\n            <h2 class='title'>Implementation Notes</h2>\n            <p class='notes'>",(i=n.notes)?i=i.call(e,{hash:{},data:t}):(i=e.notes,i=typeof i===u?i.apply(e):i);if(i||i===0)r+=i;return r+="</p>\n          </div>\n        ",r}function c(e,t){return'\n          <div class="section">\n            <h2 class=\'title\'>Response Class</h2>\n            <p><span class="model-signature" /></p>\n            <div class="content-type" />\n          </div>\n        '}function h(e,t){return"\n              <div style='margin:0;padding:0;display:inline'></div>\n              <h2 class='title'>Status Codes</h2>\n              <table class='fullwidth'>\n                  <thead>\n                  <tr>\n                      <th style=\"width: 410px; max-width:410px\">HTTP Status Code</th>\n                      <th>Reason</th>\n                  </tr>\n                  </thead>\n                  <tbody class=\"operation-status\">\n                  \n                  </tbody>\n              </table>\n            "}function p(e,t){return"\n              "}function d(e,t){return"\n              <div class='sandbox_header row'>\n                <div class=\"cell-12\">\n                  <input class='submit btn primary' name='commit' type='button' value='Try it out!' />\n                  <a href='#' class='response_hider' style='display:none'>Hide Response</a>\n                  <span class=\"response_throbber\"></span>\n                </div>\n              </div>\n            "}n=n||e.helpers,i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+="<ul class='operations' >\n  <li class='",(o=n.httpMethod)?o=o.call(t,{hash:{},data:i}):(o=t.httpMethod,o=typeof o===u?o.apply(t):o),s+=a(o)+" operation' id='",(o=n.resourceName)?o=o.call(t,{hash:{},data:i}):(o=t.resourceName,o=typeof o===u?o.apply(t):o),s+=a(o)+"_",(o=n.nickname)?o=o.call(t,{hash:{},data:i}):(o=t.nickname,o=typeof o===u?o.apply(t):o),s+=a(o)+"_",(o=n.httpMethod)?o=o.call(t,{hash:{},data:i}):(o=t.httpMethod,o=typeof o===u?o.apply(t):o),s+=a(o)+"_",(o=n.number)?o=o.call(t,{hash:{},data:i}):(o=t.number,o=typeof o===u?o.apply(t):o),s+=a(o)+"'>\n\n\n    <div class=\"row\">\n      <div class='cell-12'>\n        <a href='#!/",(o=n.resourceName)?o=o.call(t,{hash:{},data:i}):(o=t.resourceName,o=typeof o===u?o.apply(t):o),s+=a(o)+"/",(o=n.nickname)?o=o.call(t,{hash:{},data:i}):(o=t.nickname,o=typeof o===u?o.apply(t):o),s+=a(o)+"_",(o=n.httpMethod)?o=o.call(t,{hash:{},data:i}):(o=t.httpMethod,o=typeof o===u?o.apply(t):o),s+=a(o)+"_",(o=n.number)?o=o.call(t,{hash:{},data:i}):(o=t.number,o=typeof o===u?o.apply(t):o),s+=a(o)+"' class=\"toggleOperation label http_method ",(o=n.httpMethod)?o=o.call(t,{hash:{},data:i}):(o=t.httpMethod,o=typeof o===u?o.apply(t):o),s+=a(o)+'">',(o=n.httpMethod)?o=o.call(t,{hash:{},data:i}):(o=t.httpMethod,o=typeof o===u?o.apply(t):o),s+=a(o)+"</a>\n        <span class='path'>\n          <a href='#!/",(o=n.resourceName)?o=o.call(t,{hash:{},data:i}):(o=t.resourceName,o=typeof o===u?o.apply(t):o),s+=a(o)+"/",(o=n.nickname)?o=o.call(t,{hash:{},data:i}):(o=t.nickname,o=typeof o===u?o.apply(t):o),s+=a(o)+"_",(o=n.httpMethod)?o=o.call(t,{hash:{},data:i}):(o=t.httpMethod,o=typeof o===u?o.apply(t):o),s+=a(o)+"_",(o=n.number)?o=o.call(t,{hash:{},data:i}):(o=t.number,o=typeof o===u?o.apply(t):o),s+=a(o)+'\' class="toggleOperation">',(o=n.path)?o=o.call(t,{hash:{},data:i}):(o=t.path,o=typeof o===u?o.apply(t):o),s+=a(o)+'</a>\n        </span>\n        <p class="operation_description float-right align-right">\n          <a href=\'#!/',(o=n.resourceName)?o=o.call(t,{hash:{},data:i}):(o=t.resourceName,o=typeof o===u?o.apply(t):o),s+=a(o)+"/",(o=n.nickname)?o=o.call(t,{hash:{},data:i}):(o=t.nickname,o=typeof o===u?o.apply(t):o),s+=a(o)+"_",(o=n.httpMethod)?o=o.call(t,{hash:{},data:i}):(o=t.httpMethod,o=typeof o===u?o.apply(t):o),s+=a(o)+"_",(o=n.number)?o=o.call(t,{hash:{},data:i}):(o=t.number,o=typeof o===u?o.apply(t):o),s+=a(o)+'\' class="toggleOperation">',(o=n.summary)?o=o.call(t,{hash:{},data:i}):(o=t.summary,o=typeof o===u?o.apply(t):o);if(o||o===0)s+=o;s+="</a>\n        </p>\n      </div>\n    </div>\n\n\n    <div class='container' id='",(o=n.resourceName)?o=o.call(t,{hash:{},data:i}):(o=t.resourceName,o=typeof o===u?o.apply(t):o),s+=a(o)+"_",(o=n.nickname)?o=o.call(t,{hash:{},data:i}):(o=t.nickname,o=typeof o===u?o.apply(t):o),s+=a(o)+"_",(o=n.httpMethod)?o=o.call(t,{hash:{},data:i}):(o=t.httpMethod,o=typeof o===u?o.apply(t):o),s+=a(o)+"_",(o=n.number)?o=o.call(t,{hash:{},data:i}):(o=t.number,o=typeof o===u?o.apply(t):o),s+=a(o)+"_content' style='display:none'>\n\n\n        ",o=n["if"].call(t,t.notes,{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+="\n\n\n        ",o=n["if"].call(t,t.responseClass,{hash:{},inverse:f.noop,fn:f.program(3,c,i),data:i});if(o||o===0)s+=o;s+="\n\n\n        <form accept-charset='UTF-8' class='sandbox section'>\n            <div style='margin:0;padding:0;display:inline'></div>\n            <h2 class='title'>Parameters</h2>\n            <table class='fullwidth'>\n                <thead>\n                <tr>\n                    <th style=\"width: 100px; max-width: 100px\"><p>Parameter</p></th>\n                    <th style=\"width: 310px; max-width: 310px\"><p>Value</p></th>\n                    <th style=\"width: 200px; max-width: 200px\"><p>Description</p></th>\n                    <th style=\"width: 320px; max-width: 330px\"><p>Data Type</p></th>\n                </tr>\n                </thead>\n                <tbody class=\"operation-params\">\n                </tbody>\n            </table>\n\n            ",o=n["if"].call(t,t.errorResponses,{hash:{},inverse:f.noop,fn:f.program(5,h,i),data:i});if(o||o===0)s+=o;s+="\n            ",o=n["if"].call(t,t.isReadOnly,{hash:{},inverse:f.program(9,d,i),fn:f.program(7,p,i),data:i});if(o||o===0)s+=o;return s+="\n        </form>\n\n\n        <div class='response section' style='display:none'>\n            <h4 class='title'>Request URL</h4>\n            <div class='block request_url'></div>\n            <h4 class='title'>Response Body</h4>\n            <div class='block response_body'></div>\n            <h4 class='title'>Response Code</h4>\n            <div class='block response_code'></div>\n            <h4 class='title'>Response Headers</h4>\n            <div class='block response_headers'></div>\n        </div>\n\n\n    </div>\n    </li>\n</ul>\n",s}),this.JST["vendor/swagger/templates/operation"]}.call(this),function(){return this.JST||(this.JST={}),this.JST["vendor/swagger/templates/param"]=Handlebars.template(function(e,t,n,r,i){function l(e,t){var r="",i;r+="\n		",i=n["if"].call(e,e.isFile,{hash:{},inverse:f.program(4,h,t),fn:f.program(2,c,t),data:t});if(i||i===0)r+=i;return r+="\n	",r}function c(e,t){var r="",i;return r+='\n			<input type="file" name=\'',(i=n.name)?i=i.call(e,{hash:{},data:t}):(i=e.name,i=typeof i===u?i.apply(e):i),r+=a(i)+"'/>\n		",r}function h(e,t){var r="",i;r+="\n			",i=n["if"].call(e,e.defaultValue,{hash:{},inverse:f.program(7,d,t),fn:f.program(5,p,t),data:t});if(i||i===0)r+=i;return r+="\n		",r}function p(e,t){var r="",i;return r+="\n				<textarea class='body-textarea' name='",(i=n.name)?i=i.call(e,{hash:{},data:t}):(i=e.name,i=typeof i===u?i.apply(e):i),r+=a(i)+"'>",(i=n.defaultValue)?i=i.call(e,{hash:{},data:t}):(i=e.defaultValue,i=typeof i===u?i.apply(e):i),r+=a(i)+"</textarea>\n			",r}function d(e,t){var r="",i;return r+="\n				<textarea class='body-textarea' name='",(i=n.name)?i=i.call(e,{hash:{},data:t}):(i=e.name,i=typeof i===u?i.apply(e):i),r+=a(i)+'\'></textarea>\n				<br />\n				<div class="content-type" />\n			',r}function v(e,t){var r="",i;r+="\n		",i=n["if"].call(e,e.defaultValue,{hash:{},inverse:f.program(12,g,t),fn:f.program(10,m,t),data:t});if(i||i===0)r+=i;return r+="\n	",r}function m(e,t){var r="",i;return r+="\n			<input minlength='0' name='",(i=n.name)?i=i.call(e,{hash:{},data:t}):(i=e.name,i=typeof i===u?i.apply(e):i),r+=a(i)+"' placeholder='' type='text' value='",(i=n.defaultValue)?i=i.call(e,{hash:{},data:t}):(i=e.defaultValue,i=typeof i===u?i.apply(e):i),r+=a(i)+"'/>\n		",r}function g(e,t){var r="",i;return r+="\n			<input minlength='0' name='",(i=n.name)?i=i.call(e,{hash:{},data:t}):(i=e.name,i=typeof i===u?i.apply(e):i),r+=a(i)+"' placeholder='' type='text' value=''/>\n		",r}n=n||e.helpers,i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+="<td class=''>\n	<code>\n		",(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===u?o.apply(t):o),s+=a(o)+"\n	</code>\n</td>\n\n<td>\n\n	",o=n["if"].call(t,t.isBody,{hash:{},inverse:f.program(9,v,i),fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+="\n\n</td>\n<td>",(o=n.description)?o=o.call(t,{hash:{},data:i}):(o=t.description,o=typeof o===u?o.apply(t):o);if(o||o===0)s+=o;return s+='</td>\n<td>\n	<span class="model-signature"></span>\n</td>\n\n',s}),this.JST["vendor/swagger/templates/param"]}.call(this),function(){return this.JST||(this.JST={}),this.JST["vendor/swagger/templates/param_list"]=Handlebars.template(function(e,t,n,r,i){function c(e,t){return"\n        "}function h(e,t){var r="",i;r+="\n            ",i=n["if"].call(e,e.defaultValue,{hash:{},inverse:a.program(6,d,t),fn:a.program(4,p,t),data:t});if(i||i===0)r+=i;return r+="\n        ",r}function p(e,t){return"\n            "}function d(e,t){return"\n                <option selected=\"\" value=''></option>\n            "}function v(e,t){var r="",i;r+="\n            ",i=n["if"].call(e,e.isDefault,{hash:{},inverse:a.program(11,g,t),fn:a.program(9,m,t),data:t});if(i||i===0)r+=i;return r+="\n        ",r}function m(e,t){var r="",i;return r+="\n                <option value='",(i=n.value)?i=i.call(e,{hash:{},data:t}):(i=e.value,i=typeof i===f?i.apply(e):i),r+=l(i)+"'>",(i=n.value)?i=i.call(e,{hash:{},data:t}):(i=e.value,i=typeof i===f?i.apply(e):i),r+=l(i)+" (default)</option>\n            ",r}function g(e,t){var r="",i;return r+="\n                <option value='",(i=n.value)?i=i.call(e,{hash:{},data:t}):(i=e.value,i=typeof i===f?i.apply(e):i),r+=l(i)+"'>",(i=n.value)?i=i.call(e,{hash:{},data:t}):(i=e.value,i=typeof i===f?i.apply(e):i),r+=l(i)+"</option>\n            ",r}n=n||e.helpers,i=i||{};var s="",o,u,a=this,f="function",l=this.escapeExpression;s+="<td class=''>\n    <code>\n        ",(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===f?o.apply(t):o),s+=l(o)+"\n    </code>\n</td>\n<td>\n    <select name='",(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===f?o.apply(t):o),s+=l(o)+"'>\n        ",o=n["if"].call(t,t.required,{hash:{},inverse:a.program(3,h,i),fn:a.program(1,c,i),data:i});if(o||o===0)s+=o;s+="\n        ",u=n.each.call(t,(o=t.allowableValues,o==null||o===!1?o:o.descriptiveValues),{hash:{},inverse:a.noop,fn:a.program(8,v,i),data:i});if(u||u===0)s+=u;s+="\n    </select>\n</td>\n<td>",(u=n.description)?u=u.call(t,{hash:{},data:i}):(u=t.description,u=typeof u===f?u.apply(t):u);if(u||u===0)s+=u;return s+='</td>\n<td><span class="model-signature"></span></td>\n',s}),this.JST["vendor/swagger/templates/param_list"]}.call(this),function(){return this.JST||(this.JST={}),this.JST["vendor/swagger/templates/param_readonly"]=Handlebars.template(function(e,t,n,r,i){function l(e,t){var r="",i;return r+="\n        <textarea class='body-textarea' readonly='readonly' name='",(i=n.name)?i=i.call(e,{hash:{},data:t}):(i=e.name,i=typeof i===u?i.apply(e):i),r+=a(i)+"'>",(i=n.defaultValue)?i=i.call(e,{hash:{},data:t}):(i=e.defaultValue,i=typeof i===u?i.apply(e):i),r+=a(i)+"</textarea>\n    ",r}function c(e,t){var r="",i;return r+="\n        ",(i=n.defaultValue)?i=i.call(e,{hash:{},data:t}):(i=e.defaultValue,i=typeof i===u?i.apply(e):i),r+=a(i)+"\n    ",r}n=n||e.helpers,i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+="<td class=''>\n  <code>\n    ",(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===u?o.apply(t):o),s+=a(o)+"\n  </code>\n</td>\n<td>\n    ",o=n["if"].call(t,t.isBody,{hash:{},inverse:f.program(3,c,i),fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+="\n</td>\n<td>",(o=n.description)?o=o.call(t,{hash:{},data:i}):(o=t.description,o=typeof o===u?o.apply(t):o);if(o||o===0)s+=o;return s+='</td>\n<td><span class="model-signature"></span></td>\n',s}),this.JST["vendor/swagger/templates/param_readonly"]}.call(this),function(){return this.JST||(this.JST={}),this.JST["vendor/swagger/templates/param_readonly_required"]=Handlebars.template(function(e,t,n,r,i){function l(e,t){var r="",i;return r+="\n        <textarea class='body-textarea'  readonly='readonly' placeholder='(required)' name='",(i=n.name)?i=i.call(e,{hash:{},data:t}):(i=e.name,i=typeof i===u?i.apply(e):i),r+=a(i)+"'>",(i=n.defaultValue)?i=i.call(e,{hash:{},data:t}):(i=e.defaultValue,i=typeof i===u?i.apply(e):i),r+=a(i)+"</textarea>\n    ",r}function c(e,t){var r="",i;return r+="\n        ",(i=n.defaultValue)?i=i.call(e,{hash:{},data:t}):(i=e.defaultValue,i=typeof i===u?i.apply(e):i),r+=a(i)+"\n    ",r}n=n||e.helpers,i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+="<td class=''>\n  <code class='required'>\n    ",(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===u?o.apply(t):o),s+=a(o)+"\n  </code>\n</td>\n<td>\n    ",o=n["if"].call(t,t.isBody,{hash:{},inverse:f.program(3,c,i),fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+="\n</td>\n<td>",(o=n.description)?o=o.call(t,{hash:{},data:i}):(o=t.description,o=typeof o===u?o.apply(t):o);if(o||o===0)s+=o;return s+='</td>\n<td><span class="model-signature"></span></td>\n',s}),this.JST["vendor/swagger/templates/param_readonly_required"]}.call(this),function(){return this.JST||(this.JST={}),this.JST["vendor/swagger/templates/param_required"]=Handlebars.template(function(e,t,n,r,i){function l(e,t){var r="",i;r+="\n		",i=n["if"].call(e,e.isFile,{hash:{},inverse:f.program(4,h,t),fn:f.program(2,c,t),data:t});if(i||i===0)r+=i;return r+="\n	",r}function c(e,t){var r="",i;return r+='\n			<input type="file" name=\'',(i=n.name)?i=i.call(e,{hash:{},data:t}):(i=e.name,i=typeof i===u?i.apply(e):i),r+=a(i)+"'/>\n		",r}function h(e,t){var r="",i;r+="\n			",i=n["if"].call(e,e.defaultValue,{hash:{},inverse:f.program(7,d,t),fn:f.program(5,p,t),data:t});if(i||i===0)r+=i;return r+="\n		",r}function p(e,t){var r="",i;return r+="\n				<textarea class='body-textarea' placeholder='(required)' name='",(i=n.name)?i=i.call(e,{hash:{},data:t}):(i=e.name,i=typeof i===u?i.apply(e):i),r+=a(i)+"'>",(i=n.defaultValue)?i=i.call(e,{hash:{},data:t}):(i=e.defaultValue,i=typeof i===u?i.apply(e):i),r+=a(i)+"</textarea>\n			",r}function d(e,t){var r="",i;return r+="\n				<textarea class='body-textarea' placeholder='(required)' name='",(i=n.name)?i=i.call(e,{hash:{},data:t}):(i=e.name,i=typeof i===u?i.apply(e):i),r+=a(i)+'\'></textarea>\n				<br />\n				<div class="content-type" />\n			',r}n=n||e.helpers,i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+="<td class=''>\n	<code class='required'>\n		",(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===u?o.apply(t):o),s+=a(o)+"\n	</code>\n</td>\n<td>\n	",o=n["if"].call(t,t.isBody,{hash:{},inverse:f.program(1,l,i),fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+="\n</td>\n<td>\n	<strong>",(o=n.description)?o=o.call(t,{hash:{},data:i}):(o=t.description,o=typeof o===u?o.apply(t):o);if(o||o===0)s+=o;return s+='</strong>\n</td>\n<td><span class="model-signature"></span></td>\n',s}),this.JST["vendor/swagger/templates/param_required"]}.call(this),function(){return this.JST||(this.JST={}),this.JST["vendor/swagger/templates/resource"]=Handlebars.template(function(e,t,n,r,i){n=n||e.helpers,i=i||{};var s="",o,u="function",a=this.escapeExpression;return s+='<header class="heading-alt row">\n  <div class="cell-6">\n    <h1 class=\'title\'> <a href=\'#!/',(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===u?o.apply(t):o),s+=a(o)+"' onclick=\"Docs.toggleEndpointListForResource('",(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===u?o.apply(t):o),s+=a(o)+"');\">/",(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===u?o.apply(t):o),s+=a(o)+"</a></h1>\n  </div>\n  <div class=\"cell-6 align-right\">\n    <ul class='options'>\n        <a class='btn primary small' href='#!/",(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===u?o.apply(t):o),s+=a(o)+"' id='endpointListTogger_",(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===u?o.apply(t):o),s+=a(o)+"' onclick=\"Docs.toggleEndpointListForResource('",(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===u?o.apply(t):o),s+=a(o)+"');\">Show/Hide</a>\n        <a class='btn small' href='#' onclick=\"Docs.collapseOperationsForResource('",(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===u?o.apply(t):o),s+=a(o)+"'); return false;\"> List Operations </a>\n        <a class='btn small' href='#' onclick=\"Docs.expandOperationsForResource('",(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===u?o.apply(t):o),s+=a(o)+"'); return false;\"> Expand Operations </a>\n        <a class='btn small transparent' href='",(o=n.url)?o=o.call(t,{hash:{},data:i}):(o=t.url,o=typeof o===u?o.apply(t):o),s+=a(o)+"'>Raw</a>\n    </ul>\n  </div>\n</header>\n<ul class='endpoints features row' id='",(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===u?o.apply(t):o),s+=a(o)+"_endpoint_list' style='display:none'></ul>\n",s}),this.JST["vendor/swagger/templates/resource"]}.call(this),function(){return this.JST||(this.JST={}),this.JST["vendor/swagger/templates/signature"]=Handlebars.template(function(e,t,n,r,i){n=n||e.helpers,i=i||{};var s="",o,u="function",a=this.escapeExpression;s+='<p class=\'toggle_signature\'> <a class="description-link" href="#">Model</a> |  <a class="snippet-link" href="#">Model Schema</a> </p>\n\n<div class="signature-container">\n    <div class="description">\n      <p>\n        ',(o=n.signature)?o=o.call(t,{hash:{},data:i}):(o=t.signature,o=typeof o===u?o.apply(t):o);if(o||o===0)s+=o;return s+='\n      </p>\n    </div>\n\n    <div class="snippet">\n      <pre><code>',(o=n.sampleJSON)?o=o.call(t,{hash:{},data:i}):(o=t.sampleJSON,o=typeof o===u?o.apply(t):o),s+=a(o)+'</code></pre>\n      <small class="notice label"></small>\n    </div>\n</div>\n\n',s}),this.JST["vendor/swagger/templates/signature"]}.call(this),function(){return this.JST||(this.JST={}),this.JST["vendor/swagger/templates/status_code"]=Handlebars.template(function(e,t,n,r,i){n=n||e.helpers,i=i||{};var s="",o,u="function",a=this.escapeExpression;s+="<td width='25%'>\n  <code>",(o=n.code)?o=o.call(t,{hash:{},data:i}):(o=t.code,o=typeof o===u?o.apply(t):o),s+=a(o)+"</code>\n</td>\n<td>",(o=n.reason)?o=o.call(t,{hash:{},data:i}):(o=t.reason,o=typeof o===u?o.apply(t):o);if(o||o===0)s+=o;return s+="</td>\n\n",s}),this.JST["vendor/swagger/templates/status_code"]}.call(this);