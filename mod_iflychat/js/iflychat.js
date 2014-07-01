
/**
 * @package iFlyChat
 * @copyright Copyright (C) 2014 iFlyChat. All rights reserved.
 * @license GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html
 * @author iFlyChat Team
 * @link https://iflychat.com
 */
LazyLoad=function(k){function p(b,a){var g=k.createElement(b),c;for(c in a)a.hasOwnProperty(c)&&g.setAttribute(c,a[c]);return g}function l(b){var a=m[b],c,f;if(a)c=a.callback,f=a.urls,f.shift(),h=0,f.length||(c&&c.call(a.context,a.obj),m[b]=null,n[b].length&&j(b))}function w(){var b=navigator.userAgent;c={async:k.createElement("script").async===!0};(c.webkit=/AppleWebKit\//.test(b))||(c.ie=/MSIE/.test(b))||(c.opera=/Opera/.test(b))||(c.gecko=/Gecko\//.test(b))||(c.unknown=!0)}function j(b,a,g,f,h){var j=
function(){l(b)},o=b==="css",q=[],d,i,e,r;c||w();if(a)if(a=typeof a==="string"?[a]:a.concat(),o||c.async||c.gecko||c.opera)n[b].push({urls:a,callback:g,obj:f,context:h});else{d=0;for(i=a.length;d<i;++d)n[b].push({urls:[a[d]],callback:d===i-1?g:null,obj:f,context:h})}if(!m[b]&&(r=m[b]=n[b].shift())){s||(s=k.head||k.getElementsByTagName("head")[0]);a=r.urls;d=0;for(i=a.length;d<i;++d)g=a[d],o?e=c.gecko?p("style"):p("link",{href:g,rel:"stylesheet"}):(e=p("script",{src:g}),e.async=!1),e.className="lazyload",
e.setAttribute("charset","utf-8"),c.ie&&!o?e.onreadystatechange=function(){if(/loaded|complete/.test(e.readyState))e.onreadystatechange=null,j()}:o&&(c.gecko||c.webkit)?c.webkit?(r.urls[d]=e.href,t()):(e.innerHTML='@import "'+g+'";',u(e)):e.onload=e.onerror=j,q.push(e);d=0;for(i=q.length;d<i;++d)s.appendChild(q[d])}}function u(b){var a;try{a=!!b.sheet.cssRules}catch(c){h+=1;h<200?setTimeout(function(){u(b)},50):a&&l("css");return}l("css")}function t(){var b=m.css,a;if(b){for(a=v.length;--a>=0;)if(v[a].href===
b.urls[0]){l("css");break}h+=1;b&&(h<200?setTimeout(t,50):l("css"))}}var c,s,m={},h=0,n={css:[],js:[]},v=k.styleSheets;return{css:function(b,a,c,f){j("css",b,a,c,f)},js:function(b,a,c,f){j("js",b,a,c,f)}}}(this.document);

function iflychat_js_init() {
  (function($){
    $(document).ready(function(){
      $.post(Drupal.settings.drupalchat.exurl, function(data) {
        if(data) {
  	      if(data && (typeof data.css != "undefined") && (typeof data.key != "undefined")) {
  		      LazyLoad.css(Drupal.settings.drupalchat.external_a_host + ':' + Drupal.settings.drupalchat.external_a_port + '/i/' + data.css + '/cache.css', function () {
  		        Drupal.settings.drupalchat.session_key = data.key;
  		        if(typeof data.name != "undefined") {
  		          Drupal.settings.drupalchat.username = data.name;
  		        }
  		        if(typeof data.uid != "undefined") {
  		          Drupal.settings.drupalchat.uid = data.uid;
  		        }
              if(typeof data.is_admin != "undefined") {
  		          Drupal.settings.drupalchat.admin = ((data.is_admin)?"1":"0");
  		        }
              if(typeof data.up != "undefined") {
  		          Drupal.settings.drupalchat.up = data.up;
  		        }
              if(typeof data.upl != "undefined") {
  		          Drupal.settings.drupalchat.upl = data.upl;
  		        }
  		        //LazyLoad.js(['https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js'], function() {
  		        //jQuery.noConflict();
  		        LazyLoad.js([Drupal.settings.drupalchat.external_a_host + ':' + Drupal.settings.drupalchat.external_a_port + '/j/cache.js', Drupal.settings.drupalchat.external_a_host + ':' + Drupal.settings.drupalchat.external_a_port + '/h/'+ data.css + '/cache.js'], function () {
              });
              //});
            });
  		    }
        }
  	  });
    });
  })(jQuery);
}

window.onload = function(){
  var my_var_handle = window.my_var_handle || null;
  if(typeof(jQuery) === 'undefined') {
    LazyLoad.js([my_var_handle + "/js/jquery.min.js", my_var_handle + "/js/jquery.titlealert.min.js", my_var_handle + "/js/ba-emotify.js"], function() {
      iflychat_js_init();
    });
  }
  else {
    LazyLoad.js([my_var_handle + "/js/jquery.titlealert.min.js", my_var_handle + "/js/ba-emotify.js"], function() {
      iflychat_js_init();
    });
  }
};