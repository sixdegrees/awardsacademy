/**
 * BxSlider v4.0 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2012, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */
(function(e){var t={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,touchEnabled:!0,swipeThreshold:50,video:!1,useCSS:!0,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};e.fn.bxSlider=function(r){if(this.length==0)return;if(this.length>1)return this.each(function(){e(this).bxSlider(r)}),this;var s={},o=this;t.el=this;var u=function(){s.settings=e.extend({},n,r),s.children=o.children(s.settings.slideSelector),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.animProp=s.settings.mode=="vertical"?"top":"left",s.usingCSS=s.settings.useCSS&&s.settings.mode!="fade"&&function(){var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(e.style[t[n]]!==undefined)return s.cssPrefix=t[n].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),s.settings.mode=="vertical"&&(s.settings.maxSlides=s.settings.minSlides),a()},a=function(){o.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.loader=e('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:s.settings.mode=="horizontal"?s.children.length*215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing"),s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.children.css({"float":s.settings.mode=="horizontal"?"left":"none",listStyle:"none"}),s.children.width(l()),s.settings.mode=="horizontal"&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),s.settings.mode=="vertical"&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),s.settings.mode=="fade"&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:50,display:"block"})),s.controls.el=e('<div class="bx-controls" />'),s.settings.captions&&w();if(s.settings.infiniteLoop&&s.settings.mode!="fade"&&!s.settings.ticker){var t=s.settings.mode=="vertical"?s.settings.minSlides:s.settings.maxSlides,n=s.children.slice(0,t).clone().addClass("bx-clone"),r=s.children.slice(-t).clone().addClass("bx-clone");o.append(n).prepend(r)}s.active.last=s.settings.startSlide==h()-1,s.settings.video&&o.fitVids(),s.settings.ticker||(s.settings.pager&&g(),s.settings.controls&&y(),s.settings.auto&&s.settings.autoControls&&b(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),o.children().imagesLoaded(function(){s.loader.remove(),d(),s.settings.mode=="vertical"&&(s.settings.adaptiveHeight=!0),s.viewport.height(f()),s.settings.onSliderLoad(s.active.index),s.settings.auto&&s.settings.autoStart&&O(),s.settings.ticker&&M(),s.settings.pager&&C(s.settings.startSlide),s.settings.controls&&A(),s.settings.touchEnabled&&!s.settings.ticker&&D()})},f=function(){var t=0,n=e();if(s.settings.mode!="vertical"&&!s.settings.adaptiveHeight)n=s.children;else if(!s.carousel)n=s.children.eq(s.active.index);else{var r=s.settings.moveSlides==1?s.active.index:s.active.index*p();n=s.children.eq(r);for(i=1;i<=s.settings.maxSlides-1;i++)r+i>=s.children.length?n=n.add(s.children.eq(i-1)):n=n.add(s.children.eq(r+i))}return s.settings.mode=="vertical"?(n.each(function(n){t+=e(this).outerHeight()}),s.settings.slideMargin>0&&(t+=s.settings.slideMargin*(s.settings.minSlides-1))):t=Math.max.apply(Math,n.map(function(){return e(this).outerHeight(!1)}).get()),t},l=function(){var e=s.settings.slideWidth,t=s.viewport.width();return s.settings.slideWidth==0?e=t:t>s.maxThreshold?e=(t-s.settings.slideMargin*(s.settings.maxSlides-1))/s.settings.maxSlides:t<s.minThreshold&&(e=(t-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides),e},c=function(){var e=1;if(s.settings.mode=="horizontal")if(s.viewport.width()<s.minThreshold)e=s.settings.minSlides;else if(s.viewport.width()>s.maxThreshold)e=s.settings.maxSlides;else{var t=s.children.first().width();e=Math.floor(s.viewport.width()/t)}else s.settings.mode=="vertical"&&(e=s.settings.minSlides);return e},h=function(){var e=0;if(s.settings.moveSlides>0)if(s.settings.infiniteLoop)e=s.children.length/p();else{var t=0,n=0;while(t<s.children.length)++e,t=n+c(),n+=s.settings.moveSlides<=c()?s.settings.moveSlides:c()}else e=Math.ceil(s.children.length/c());return e},p=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=c()?s.settings.moveSlides:c()},d=function(){if(s.active.last){if(s.settings.mode=="horizontal"){var e=s.children.last(),t=e.position();v(-(t.left-(s.viewport.width()-e.width())),"reset",0)}else if(s.settings.mode=="vertical"){var n=s.children.length-s.settings.minSlides,t=s.children.eq(n).position();v(-t.top,"reset",0)}}else{var t=s.children.eq(s.active.index*p()).position();s.active.index==h()-1&&(s.active.last=!0),t!=undefined&&(s.settings.mode=="horizontal"?v(-t.left,"reset",0):s.settings.mode=="vertical"&&v(-t.top,"reset",0))}},v=function(e,t,n,r){if(s.usingCSS){var i=s.settings.mode=="vertical"?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";o.css("-"+s.cssPrefix+"-transition-duration",n/1e3+"s"),t=="slide"?(o.css(s.animProp,i),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),k()})):t=="reset"?o.css(s.animProp,i):t=="ticker"&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,i),o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),v(r.resetValue,"reset",0),_()}))}else{var u={};u[s.animProp]=e,t=="slide"?o.animate(u,n,s.settings.easing,function(){k()}):t=="reset"?o.css(s.animProp,e):t=="ticker"&&o.animate(u,speed,"linear",function(){v(r.resetValue,"reset",0),_()})}},m=function(){var t="";pagerQty=h();for(var n=0;n<pagerQty;n++){var r="";s.settings.buildPager&&e.isFunction(s.settings.buildPager)?(r=s.settings.buildPager(n),s.pagerEl.addClass("bx-custom-pager")):(r=n+1,s.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+n+'" class="bx-pager-link">'+r+"</a></div>"}s.pagerEl.html(t)},g=function(){s.settings.pagerCustom?s.pagerEl=e(s.settings.pagerCustom):(s.pagerEl=e('<div class="bx-pager" />'),s.settings.pagerSelector?e(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),m()),s.pagerEl.delegate("a","click",N)},y=function(){s.controls.next=e('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=e('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click",E),s.controls.prev.bind("click",S),s.settings.nextSelector&&e(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&e(s.settings.prevSelector).append(s.controls.prev),!s.settings.nextSelector&&!s.settings.prevSelector&&(s.controls.directionEl=e('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},b=function(){s.controls.start=e('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=e('<div class="bx-controls-auto" />'),s.controls.autoEl.delegate(".bx-start","click",x),s.controls.autoEl.delegate(".bx-stop","click",T),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?e(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),L(s.settings.autoStart?"stop":"start")},w=function(){s.children.each(function(t){var n=e(this).find("img:first").attr("title");n!=undefined&&e(this).append('<div class="bx-caption"><span>'+n+"</span></div>")})},E=function(e){s.settings.auto&&o.stopAuto(),o.goToNextSlide(),e.preventDefault()},S=function(e){s.settings.auto&&o.stopAuto(),o.goToPrevSlide(),e.preventDefault()},x=function(e){o.startAuto(),e.preventDefault()},T=function(e){o.stopAuto(),e.preventDefault()},N=function(t){s.settings.auto&&o.stopAuto();var n=e(t.currentTarget),r=parseInt(n.attr("data-slide-index"));r!=s.active.index&&o.goToSlide(r),t.preventDefault()},C=function(e){if(s.settings.pagerType=="short"){s.pagerEl.html(e+1+s.settings.pagerShortSeparator+s.children.length);return}s.pagerEl.find("a").removeClass("active"),s.pagerEl.find("a").eq(e).addClass("active")},k=function(){if(s.settings.infiniteLoop){var e="";s.active.index==0?e=s.children.eq(0).position():s.active.index==h()-1&&s.carousel?e=s.children.eq((h()-1)*p()).position():s.active.index==s.children.length-1&&(e=s.children.eq(s.children.length-1).position()),s.settings.mode=="horizontal"?v(-e.left,"reset",0):s.settings.mode=="vertical"&&v(-e.top,"reset",0)}s.working=!1,s.settings.onSlideAfter(s.children.eq(s.active.index),s.oldIndex,s.active.index)},L=function(e){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[e]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+e+")").addClass("active"))},A=function(){!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(s.active.index==0?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index==h()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},O=function(){if(s.settings.autoDelay>0)var e=setTimeout(o.startAuto,s.settings.autoDelay);else o.startAuto();s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},M=function(){var t=0;if(s.settings.autoDirection=="next")o.append(s.children.clone().addClass("bx-clone"));else{o.prepend(s.children.clone().addClass("bx-clone"));var n=s.children.first().position();t=s.settings.mode=="horizontal"?-n.left:-n.top}v(t,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&!s.usingCSS&&s.viewport.hover(function(){o.stop()},function(){var t=0;s.children.each(function(n){t+=s.settings.mode=="horizontal"?e(this).outerWidth(!0):e(this).outerHeight(!0)});var n=s.settings.speed/t,r=s.settings.mode=="horizontal"?"left":"top",i=n*(t-Math.abs(parseInt(o.css(r))));_(i)}),_()},_=function(e){speed=e?e:s.settings.speed;var t={left:0,top:0},n={left:0,top:0};s.settings.autoDirection=="next"?t=o.find(".bx-clone").first().position():n=s.children.first().position();var r=s.settings.mode=="horizontal"?-t.left:-t.top,i=s.settings.mode=="horizontal"?-n.left:-n.top,u={resetValue:i};v(r,"ticker",speed,u)},D=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart",P)},P=function(e){if(s.working)e.preventDefault();else{s.touch.originalPos=o.position();var t=e.originalEvent;s.touch.start.x=t.changedTouches[0].pageX,s.touch.start.y=t.changedTouches[0].pageY,s.viewport.bind("touchmove",H),s.viewport.bind("touchend",B)}},H=function(e){e.preventDefault();if(s.settings.mode!="fade"){var t=e.originalEvent,n=0;if(s.settings.mode=="horizontal"){var r=t.changedTouches[0].pageX-s.touch.start.x;n=s.touch.originalPos.left+r}else{var r=t.changedTouches[0].pageY-s.touch.start.y;n=s.touch.originalPos.top+r}v(n,"reset",0)}},B=function(e){s.viewport.unbind("touchmove",H);var t=e.originalEvent,n=0;s.touch.end.x=t.changedTouches[0].pageX,s.touch.end.y=t.changedTouches[0].pageY;if(s.settings.mode=="fade"){var r=Math.abs(s.touch.start.x-s.touch.end.x);r>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto())}else{var r=0;s.settings.mode=="horizontal"?(r=s.touch.end.x-s.touch.start.x,n=s.touch.originalPos.left):(r=s.touch.end.y-s.touch.start.y,n=s.touch.originalPos.top),!s.settings.infiniteLoop&&(s.active.index==0&&r>0||s.active.last&&r<0)?v(n,"reset",200):Math.abs(r)>=s.settings.swipeThreshold?(r<0?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):v(n,"reset",200)}s.viewport.unbind("touchend",B)};o.goToSlide=function(t,n){if(s.working||s.active.index==t)return;s.working=!0,s.oldIndex=s.active.index,t<0?s.active.index=h()-1:t>=h()?s.active.index=0:s.active.index=t,s.settings.onSlideBefore(s.children.eq(s.active.index),s.oldIndex,s.active.index),n=="next"?s.settings.onSlideNext(s.children.eq(s.active.index),s.oldIndex,s.active.index):n=="prev"&&s.settings.onSlidePrev(s.children.eq(s.active.index),s.oldIndex,s.active.index),s.active.last=s.active.index>=h()-1,s.settings.pager&&C(s.active.index),s.settings.controls&&A();if(s.settings.mode=="fade")s.settings.adaptiveHeight&&s.viewport.height()!=f()&&s.viewport.animate({height:f()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",51).fadeIn(s.settings.speed,function(){e(this).css("zIndex",50),k()});else{s.settings.adaptiveHeight&&s.viewport.height()!=f()&&s.viewport.animate({height:f()},s.settings.adaptiveHeightSpeed);var r=0,i={left:0,top:0};if(!s.settings.infiniteLoop&&s.carousel&&s.active.last)if(s.settings.mode=="horizontal"){var u=s.children.eq(s.children.length-1);i=u.position(),r=s.viewport.width()-u.width()}else{var a=s.children.length-s.settings.minSlides;i=s.children.eq(a).position()}else if(s.carousel&&s.active.last&&n=="prev"){var l=s.settings.moveSlides==1?s.settings.maxSlides-p():(h()-1)*p()-(s.children.length-s.settings.maxSlides),u=o.children(".bx-clone").eq(l);i=u.position()}else if(n=="next"&&s.active.index==0)i=o.find(".bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1;else if(t>=0){var c=t*p();i=s.children.eq(c).position()}var d=s.settings.mode=="horizontal"?-(i.left-r):-i.top;v(d,"slide",s.settings.speed)}},o.goToNextSlide=function(){if(!s.settings.infiniteLoop&&s.active.last)return;var e=s.active.index+1;o.goToSlide(e,"next")},o.goToPrevSlide=function(){if(!s.settings.infiniteLoop&&s.active.index==0)return;var e=s.active.index-1;o.goToSlide(e,"prev")},o.startAuto=function(e){if(s.interval)return;s.interval=setInterval(function(){s.settings.autoDirection=="next"?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.autoControls&&e!=1&&L("stop")},o.stopAuto=function(e){if(!s.interval)return;clearInterval(s.interval),s.interval=null,s.settings.autoControls&&e!=1&&L("start")},o.getCurrentSlide=function(){return s.active.index},o.getSlideCount=function(){return s.children.length};var j=e(window).width(),F=e(window).height();return e(window).resize(function(){var t=e(window).width(),n=e(window).height();if(j!=t||F!=n)j=t,F=n,s.children.add(o.find(".bx-clone")).width(l()),s.viewport.css("height",f()),s.active.last&&(s.active.index=h()-1),s.active.index>=h()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(m(),C(s.active.index)),s.settings.ticker||d()}),u(),this}})(jQuery),function(e,t){var n="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e.fn.imagesLoaded=function(r){function i(){var t=e(p),n=e(d);u&&(d.length?u.reject(f,t,n):u.resolve(f)),e.isFunction(r)&&r.call(o,f,t,n)}function s(t,r){t.src===n||-1!==e.inArray(t,h)||(h.push(t),r?d.push(t):p.push(t),e.data(t,"imagesLoaded",{isBroken:r,src:t.src}),a&&u.notifyWith(e(t),[r,f,e(p),e(d)]),f.length===h.length&&(setTimeout(i),f.unbind(".imagesLoaded")))}var o=this,u=e.isFunction(e.Deferred)?e.Deferred():0,a=e.isFunction(u.notify),f=o.find("img").add(o.filter("img")),h=[],p=[],d=[];return e.isPlainObject(r)&&e.each(r,function(e,t){"callback"===e?r=t:u&&u[e](t)}),f.length?f.bind("load.imagesLoaded error.imagesLoaded",function(e){s(e.target,"error"===e.type)}).each(function(r,i){var o=i.src,u=e.data(i,"imagesLoaded");if(u&&u.src===o)s(i,u.isBroken);else if(i.complete&&i.naturalWidth!==t)s(i,0===i.naturalWidth||0===i.naturalHeight);else if(i.readyState||i.complete)i.src=n,i.src=o}):i(),u?u.promise(o):o}}(jQuery);