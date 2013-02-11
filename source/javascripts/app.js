//= require main


// Launchrock
if( window.LrInstance !== undefined){
  // How else Are we supposed to alter the button's text…
  LrInstance.prototype.render = function() {
    return [
    '<div id="lrcontent-' + this.site.SID + '" class="site lrcontent">', '<h2 id="site-title-' + this.site.SID + '" class="site-title"></h2>', '<div id="site-logo-' + this.site.SID + '" class="site-logo" style="display: block; "><span></span></div>', '<h3 id="site-tagline-' + this.site.SID + '" class="site-tagline"></h3>', '<div id="inviteform' + this.site.SID + '" class="inviteform">', '<p id="site-desc-' + this.site.SID + '" class="site-desc">', '</p>', '<form action="" method="post" id="signupform-' + this.site.SID + '">', '<label id="instructions-' + this.site.SID + '"></label>', '<input type="text" title="email@address.com" value="email@address.com" autocorrect="off" autocapitalize="off" data-initial="email@address.com" id="email-' + this.site.SID + '" class="field blink" />', '<input type="hidden" value="0" id="refid-' + this.site.SID + '">', '<input type="hidden" value="" id="urlPrefix-' + this.site.SID + '">', '<input type="hidden" value="" id="apiKey-' + this.site.SID + '">', '<input type="hidden" value="" id="lrDomain-' + this.site.SID + '">', '<input type="submit" name="submit" id="submit-' + this.site.SID + '"  title="Signup" value="Signup" class="submit btn primary" />', '<div class="cl">&nbsp;</div>', '<label id="signupError-' + this.site.SID + '" class="signup_error" style="padding-top: 5px; font-weight: bold; color: red; text-align: left; padding-left: 49px;display:none;"></label>', '</form>', '</div>', '<div id="information-' + this.site.SID + '"></div>',
    '<div class="lrhidden lrcontent" id="dlrpagesubmit-' + this.site.SID + '"></div>', '<div class="site-powered-by">', 'powered by <a href="http://launchrock.com" style="text-indent: -9000px; ">launchrock</a>', '</div>', '</div>',
    '<div class="clear"></div>'
    ].join("");
  };
}

var uvOptions = {};
(function() {
  var uv = document.createElement('script'); uv.type = 'text/javascript'; uv.async = true;
  uv.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'widget.uservoice.com/WxSDhvhy17ywg0tu9NRcQA.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(uv, s);
})();
