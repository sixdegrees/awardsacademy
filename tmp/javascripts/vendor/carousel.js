/*
 * responsive-carousel
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */
(function(e){var t="carousel",n="."+t,r="data-transition",i=t+"-transitioning",s=t+"-item",o=t+"-active",u=t+"-in",a=t+"-out",f=t+"-nav",l=function(){var e="webkit Moz O Ms".split(" "),t=!1,n;while(e.length){n=e.shift()+"Transition";if(n in document.documentElement.style!==undefined&&n in document.documentElement.style!=0){t=!0;break}}return t}(),c={_create:function(){e(this).trigger("beforecreate."+t)[t]("_init")[t]("_addNextPrev").trigger("create."+t)},_init:function(){var n=e(this).attr(r);return n||(l=!1),e(this).addClass(t+" "+(n?t+"-"+n:"")+" ").children().addClass(s).first().addClass(o)},next:function(){e(this)[t]("goTo","+1")},prev:function(){e(this)[t]("goTo","-1")},goTo:function(n){var i=e(this),f=i.attr(r),c=" "+t+"-"+f+"-reverse";e(this).find("."+s).removeClass([a,u,c].join(" "));var h=e(this).find("."+o),p=h.index(),d=(p<0?0:p)+1,v=typeof n=="number"?n:d+parseFloat(n),m=e(this).find(".carousel-item").eq(v-1),g=typeof n=="string"&&!parseFloat(n)||v>d?"":c;m.length||(m=e(this).find("."+s)[g.length?"last":"first"]()),l?i[t]("_transitionStart",h,m,g):(m.addClass(o),i[t]("_transitionEnd",h,m,g)),i.trigger("goto."+t,m)},update:function(){return e(this).children().not("."+f).addClass(s),e(this).trigger("update."+t)},_transitionStart:function(n,r,i){var s=e(this);r.one(navigator.userAgent.indexOf("AppleWebKit")>-1?"webkitTransitionEnd":"transitionend otransitionend",function(){s[t]("_transitionEnd",n,r,i)}),e(this).addClass(i),n.addClass(a),r.addClass(u)},_transitionEnd:function(t,n,r){e(this).removeClass(r),t.removeClass(a+" "+o),n.removeClass(u).addClass(o)},_bindEventListeners:function(){var n=e(this).bind("click",function(r){var i=e(r.target).closest("a[href='#next'],a[href='#prev']");i.length&&(n[t](i.is("[href='#next']")?"next":"prev"),r.preventDefault())});return this},_addNextPrev:function(){return e(this).append("<nav class='"+f+"'><a href='#prev' class='prev' aria-hidden='true' title='Previous'>Prev</a><a href='#next' class='next' aria-hidden='true' title='Next'>Next</a></nav>")[t]("_bindEventListeners")},destroy:function(){}};e.fn[t]=function(n,r,i,s){return this.each(function(){if(n&&typeof n=="string")return e.fn[t].prototype[n].call(this,r,i,s);if(e(this).data(t+"data"))return e(this);e(this).data(t+"active",!0),e.fn[t].prototype._create.call(this)})},e.extend(e.fn[t].prototype,c),e(function(){e(n)[t]()})})(jQuery),function(e,t){var n="carousel",r="."+n+"[data-paginate]",i=n+"-pagination",s=n+"-active-page",o={_createPagination:function(){var t=e(this).find("."+n+"-nav"),r=e(this).find("."+n+"-item"),s=e("<ol class='"+i+"'></ol>"),o;t.find("."+i).remove();for(var u=0,a=r.length;u<a;u++)o=u+1,s.append("<li><a href='#"+o+"' title='Go to slide "+o+"'>"+o+"</a>");t.addClass(n+"-nav-paginated").find("a").first().after(s)},_bindPaginationEvents:function(){e(this).bind("click",function(t){var r=e(t.target).closest("a"),s=r.attr("href");r.closest("."+i).length&&s&&(e(this)[n]("goTo",parseFloat(s.split("#")[1])),t.preventDefault())}).bind("goto."+n,function(t,n){var r=n?e(n).index():0;e(this).find("ol."+i+" li").removeClass(s).eq(r).addClass(s)}).trigger("goto."+n)}};e.extend(e.fn[n].prototype,o),e(r).live("create."+n,function(){e(this)[n]("_createPagination")[n]("_bindPaginationEvents")}).live("update."+n,function(){e(this)[n]("_createPagination")})}(jQuery);