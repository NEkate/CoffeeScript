
<!-- saved from url=(0059)http://requirejs.org/docs/release/2.1.9/minified/require.js -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1251"><style type="text/css">#lleo_dialog, #lleo_dialog * {
    margin: 0 !important;
	padding: 0 !important;
	background: none !important;
	border: none 0 !important;
	position: static !important;
	vertical-align: baseline !important;
	font: normal 13px Arial, Helvetica !important;
	line-height: 15px !important;
	color: #000 !important;
	overflow: visible !important;
	width: auto !important;
	height: auto !important;
	float: none !important;
	visibility: visible !important;
	text-align: left !important;
	border-collapse: separate !important;
	border-spacing: 2px !important;
}

#lleo_dialog iframe {
	height: 0 !important;
	width: 0 !important;
}

#lleo_dialog {
    position: absolute !important;
    background: #fff !important;
    border: solid 1px #ccc !important;
    padding: 7px 0 0 !important;
    left: -999px;
    top: -999px;
	/*max-width: 450px !important;*/
    width: 440px !important;
    overflow: hidden;
    display: block !important;
    z-index: 999999999 !important;
    opacity: 0 !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18) !important;
	-moz-border-radius: 3px !important;
	-webkit-border-radius: 3px !important;
	border-radius: 3px !important;
}
#lleo_dialog.lleo_show {
    opacity: 1 !important;
    -webkit-transition: opacity 0.3s !important;
}
#lleo_dialog input::-webkit-input-placeholder {
    color: #aaa !important;
}
#lleo_dialog .lleo_has_pic #lleo_word {
	margin-right: 80px !important;
}
#lleo_dialog #lleo_translationsCopntainer1 {
	position: relative !important;
}
#lleo_dialog #lleo_translationsCopntainer2 {
	padding: 7px 0 0 !important;
	vertical-align: middle !important;
}
#lleo_dialog #lleo_word {
    color: #000 !important;
    margin: 0 5px 2px 0 !important;
    /*float: left !important;*/
}
#lleo_dialog .lleo_has_sound #lleo_word {
    margin-left: 17px !important;
}
#lleo_dialog #lleo_text {
    font-weight: bold !important;
    color: #d56e00 !important;
    text-decoration: none !important;
    cursor: default !important;
}
#lleo_dialog #lleo_text.lleo_known {
    cursor: pointer !important;
    text-decoration: underline !important;
}
#lleo_dialog #lleo_closeBtn {
    position: absolute !important;
    right: 6px !important;
    top: 5px !important;
    line-height: 1px !important;
    text-decoration: none !important;
    font-weight: bold !important;
    font-size: 0 !important;
    color: #aaa !important;
    display: block !important;
    padding: 2px !important;
	z-index: 9999999999 !important;
	width: 7px !important;
	height: 7px !important;
	padding: 0  !important;
	margin: 0   !important;
}

#lleo_dialog #lleo_optionsBtn {
    position: absolute !important; 
    right: 1px !important;
    top: 12px !important;
    line-height: 1px !important;
    text-decoration: none !important;
    font-weight: bold !important;
    font-size: 13px !important;
    color: #aaa !important;
    padding: 2px !important;
	display: none;
}
#lleo_dialog #lleo_optionsBtn img{
	width: 12px !important;
	height: 12px !important;
}
#lleo_dialog #lleo_sound {
    float: left !important;
    width: 16px !important;
    height: 16px !important;
    margin-left: 12px !important;
    background: 0 0 no-repeat !important;
    cursor: pointer !important;
    display: none !important;
}
#lleo_dialog .lleo_has_sound #lleo_sound {
    display: block !important;
}
#lleo_dialog #lleo_picOuter {
    position: absolute !important;
    float: right !important;
    right: 29px;
    top: 0;
    display: none !important;
    z-index: 9 !important;
}
#lleo_dialog .lleo_has_pic #lleo_picOuter {
    display: block !important;
}
#lleo_dialog #lleo_picOuter:hover {
    z-index: 11 !important;
}
#lleo_dialog #lleo_pic,
#lleo_dialog #lleo_picBig {
    position: absolute !important;
    top: 0 !important;
    right: 0 !important;
    border: solid 2px #fff !important;
    -moz-border-radius: 2px !important;
	-webkit-border-radius: 2px !important;
	border-radius: 2px !important;
    z-index: 1 !important;
}
#lleo_dialog #lleo_pic {
	position: relative !important;
    border: none !important;
	width: 34px !important;
}
#lleo_dialog #lleo_picBig {
    box-shadow: -1px 2px 4px rgba(0,0,0,0.3);
    z-index: 2 !important;
    opacity: 0 !important;
    visibility: hidden !important;
}
#lleo_dialog #lleo_picOuter:hover #lleo_picBig {
    visibility: visible !important;
    opacity: 1 !important;
    -webkit-transition: opacity 0.3s !important;
    -webkit-transition-delay: 0.3s !important;
}
#lleo_dialog #lleo_transcription {
    color: #486D85 !important;
    margin: 0 0 4px 29px !important;
    color: #aaaaaa !important;
}
#lleo_dialog .lleo_no_trans {
    color: #aaa !important;
}






#lleo_dialog .ll-translation-counter {
	float: right !important;
    font-size: 11px !important;
    color: #aaa !important;
    padding: 2px 2px 1px 10px !important;
}

#lleo_dialog .ll-translation-text {
	float: left !important;
	width: 80% !important;
}

#lleo_dialog #lleo_trans a {
    color: #3F669F !important;
    padding: 1px 4px !important;
    text-decoration: none !important;
    text-overflow: ellipsis !important;
    overflow: hidden !important;
}

#lleo_dialog .ll-translation-item {
	width: 100% !important;
	float: left !important; 
	padding:1px 4px;
	color: #3F669F !important;
	padding: 3px !important;
	border: solid 1px white !important;
	-moz-border-radius: 2px !important;
	-webkit-border-radius: 2px !important;
	border-radius: 2px !important;
}

#lleo_dialog .ll-translation-item:hover {
	border: solid 1px #9FC2C9 !important;
    background: #EDF4F6 !important;
	cursor: pointer !important;
}

#lleo_dialog .ll-translation-marker {
	margin: 0px 5px 2px 2px !important;
}





#lleo_dialog #lleo_icons {
    margin: 10px 0 7px !important;
    color: #aaa !important;
    line-height: 20px !important;
    font-size: 11px !important;
    clear: both !important;
    padding-left: 16px !important;
}
#lleo_icons a {
    display: inline-block !important;
    width: 16px !important;
    height: 16px !important;
    margin: 0 0 -2px 3px !important;
    text-decoration: none !important;
    background: 0 0 no-repeat !important;
    opacity: 0.5 !important;
}
#lleo_icons a:hover {
    opacity: 1 !important;
}
#lleo_icons a.lleo_google     {background-position:-34px 0 !important;}
#lleo_icons a.lleo_multitran  {background-position:-64px 0 !important;}
#lleo_icons a.lleo_lingvo     {background-position:-51px 0 !important; width: 12px !important;}
#lleo_icons a.lleo_dict       {background-position:-17px 0 !important;}
#lleo_icons a.lleo_linguee    {background-position:-81px 0 !important;}
#lleo_icons a.lleo_michaelis  {background-position:-98px 0 !important;}




#lleo_dialog #lleo_contextContainer {
    margin: 0 !important;
    padding: 3px 15px 3px 10px !important;
    background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#eee)) !important;
    border-bottom: solid 1px #ddd !important;
    border-top-left-radius: 3px !important;
    border-top-right-radius: 3px !important;
    display: none !important;
    overflow: hidden !important;
}
#lleo_dialog .lleo_has_context #lleo_contextContainer {
    display: block !important;
}
#lleo_dialog #lleo_context {
    color: #444 !important;
    text-shadow: 1px 1px 0 #f4f4f4 !important;
    line-height: 12px !important;
    font-size: 11px !important;
    margin-left: 2px !important;
}
#lleo_dialog #lleo_context b {
    line-height: 12px !important;
    color: #000 !important;
    font-weight: bold !important;
    font-size: 11px !important;
}
#lleo_dialog #lleo_gBrand {
    color: #aaa !important;
    font-size: 10px !important;
    /*padding-right: 52px !important;*/
    padding-bottom: 14px !important;
    margin: -3px 4px 0 4px !important;
    background: left bottom no-repeat !important;
    display: inline-block !important;
    float: right !important;
}
#lleo_dialog #lleo_gBrand.hidden {
    display: none !important;
}
#lleo_dialog #lleo_translateContextLink {
    color: #444 !important;
    text-shadow: 1px 1px 0 #f4f4f4 !important;
    background: -webkit-gradient(linear, left top, left bottom, from(#f4f4f4), to(#ddd)) !important;
    border: solid 1px !important;
    box-shadow: 1px 1px 0 #f6f6f6 !important;
    border-color: #999 #aaa #aaa #999 !important;
    -moz-border-radius: 2px !important;
	-webkit-border-radius: 2px !important;
	border-radius: 2px !important;
    padding: 0 3px !important;
    font-size: 11px !important;
    text-decoration: none !important;
    margin: 1px 5px 0 !important;
    display: inline-block !important;
    white-space: nowrap !important;
}
#lleo_dialog #lleo_translateContextLink:hover {
    background: #f8f8f8 !important;
}

#lleo_dialog #lleo_setTransForm {
    display: block !important;
    margin-top: 3px !important;
    padding-top: 5px !important;
    /* Set position and background because the form might be overlapped by an image when no translations */
    position: relative !important;
    background: #fff !important;
    z-index: 10 !important;
    padding-bottom: 10px !important;
    padding-left: 16px !important;
}
#lleo_dialog .lleo-custom-translation {
    padding: 4px 5px !important;
    border: solid 1px #ddd !important;
    -moz-border-radius: 2px !important;
	-webkit-border-radius: 2px !important;
	border-radius: 2px !important;
    width: 90% !important;
    min-width: 270px !important;
    background: -webkit-gradient(linear, 0 0, 0 20, from(#f1f1f1), to(#fff)) !important;
	font: normal 13px Arial, Helvetica !important;
	line-height: 15px !important;
}
#lleo_dialog .lleo-custom-translation:hover {
    border: solid 1px #aaa !important;
}
#lleo_dialog .lleo-custom-translation:focus {
    background: #FFFEC9 !important;
}

#lleo_dialog *.hidden {
    display: none !important;
}

#lleo_dialog .infinitive{
    color: #D56E00 !important;
    text-decoration: none;
    border-bottom: 1px dotted #D56E00 !important;
}
#lleo_dialog .infinitive:hover{
    border: none !important;
}


#lleo_dialog #lleo_trans{
    zoom: 1;
    border-top: 1px solid #eeeeee !important;
    margin: 10px 0 0 !important;
    padding: 5px 30px 0 14px !important;
}

#lleo_dialog .lleo_clearfix {
	display: block !important;
	clear: both !important;
	visibility: hidden !important;
	height: 0 !important;
	font-size: 0 !important;
}

#lleo_dialog #lleo_markBlock {
    background: #eeeeee !important;
	cursor: pointer !important; 
	border-bottom-left-radius: 3px !important;
	border-bottom-right-radius: 3px !important;
	border-collapse: separate !important;
	border-spacing: 2px !important; 
}

#lleo_dialog #lleo_markBlock img{
	width: 14px !important;
	height: 14px !important;
}

#lleo_dialog #lleo_markBlock .icon-cell {
	padding: 5px 2px 5px 16px !important;
	height: 17px !important;
}

#lleo_dialog #lleo_markBlock .wide-cell {
	width: 100% !important;
}

#lleo_dialog #lleo_markBlock .text-cell {
	color: #999999 !important; 
    font: normal 13px Arial, Helvetica !important;
    text-shadow: 0 1px #fff !important; 
}

#lleo_dialog #lleo_markBlock td {
	vertical-align: middle !important;
	border-collapse: separate !important;
	border-spacing: 2px !important;
}


#lleo_dialog #lleo_picOuter table{
    width: 44px !important;
    position: absolute !important;
    right: 0 !important;
    vertical-align: middle !important;
}

#lleo_dialog #lleo_picOuter td{
    width: 38px !important;
    height: 38px !important;
    border: 1px solid #eeeeee !important;
    vertical-align: middle !important;
    text-align: center !important;
}

#lleo_dialog #lleo_picOuter td div {
	height: 38px !important;
	overflow: hidden !important;
}</style><style type="text/css">
.ll-content-notification *{
	letter-spacing: normal !important;
	margin: 0 !important;
    padding: 0 !important;
	background: none !important;
	border: 0 !important;
	float: none !important;
	text-align: left !important;
	text-decoration: none !important;
    font: normal 15px 'Lucida Grande', 'Lucida Sans Unicode', Lucida, Arial, Helvetica, sans-serif !important;
}


.ll-content-notification {
    vertical-align: baseline !important;
    color: #000 !important;
    overflow: visible !important;
    visibility: visible !important;
    margin: 0 !important;
    padding: 0 !important;
    position: fixed !important;
    background: #fff !important;
    border: solid 1px #AAA !important;
	/*
    left: -999px;
    top: -999px;
	*/
    width: auto;
    /* width: 300px !important; */
    display: block;
    z-index: 999999999 !important;
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18) !important;
    -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18) !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18) !important;
    -webkit-border-radius: 3px !important;
    -moz-border-radius: 3px !important;
    border-radius: 3px !important;
    overflow: hidden !important;
    /* opacity: 0 !important; */
    transition: opacity 0.8s !important;
    -moz-transition: opacity 0.8s !important; /* Firefox 4 */
    -webkit-transition: opacity 0.8s !important; /* Safari and Chrome */
    -o-transition: opacity 0.8s !important; /* Opera */
    cursor: default !important;
}

.ll-content-notification-shown {
    opacity: 1 !important;
    transition: opacity 0.8s !important;
    -moz-transition: opacity 0.8s !important; /* Firefox 4 */
    -webkit-transition: opacity 0.8s !important; /* Safari and Chrome */
    -o-transition: opacity 0.8s !important; /* Opera */
}

.ll-content-notification-header {
	border: 0 !important;
	margin: 0 !important;
    background: url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAIAAABsYngUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAABJJREFUGFdjePHmCxw9e/UZjgAVYhYtk8xZqAAAAABJRU5ErkJggg==) !important;
    border-bottom: solid 1px #CCC !important;
    padding: 1px 4px !important;
	min-height: 18px !important;
	width: 100% !important;
	-webkit-border-top-left-radius: 3px !important;
    -webkit-border-top-right-radius: 3px !important;
    -moz-border-radius-topleft: 3px !important;
    -moz-border-radius-topright: 3px !important;
    border-top-left-radius: 3px !important;
    border-top-right-radius: 3px !important;
	border-collapse: collapse !important;
	border-spacing: 0 !important;
}

.ll-content-notification-header-pic {
	border: 0 !important;
	margin: 0 !important;
	padding: 3px 0 0 3px !important;
	width: 20px !important;
	vertical-align: top !important;
	line-height: 1px !important;
}

.ll-content-notification-header-pic img{
	border: 0 !important;
	padding: 0 !important;
	margin: 0 !important;
	line-height: 1px !important;
}


.ll-content-notification-header-caption {
    font: normal 13px 'Lucida Grande', 'Lucida Sans Unicode', Lucida, Arial, Helvetica, sans-serif !important;
	font-weight: bold !important;
    line-height: 15px !important;
    color: #555 !important;
    float: left !important;
    text-shadow: none !important;
    letter-spacing: normal !important;
	white-space: normal !important;
	padding: 3px !important;
	margin: 0 !important;
}

.ll-content-notification-header-close {
    width: 15px !important;
	vertical-align: top !important;
	text-align: right !important;
	padding: 6px 5px 0 0 !important;
	margin: 0 !important;
	line-height: 1px !important;
}

.ll-content-notification-header-close img {
	border: 0 !important;
    width: 7px !important;
    height: 7px !important;
    margin: 0 !important;
	padding: 0 !important;
}

.ll-content-notification-content {
    margin: 0 !important;
    padding: 8px !important;
    float: left !important;
    overflow: hidden !important;
    width: auto !important;
}

.ll-content-notification-content-logo {
    float: left !important;
	height: 48px !important;
	width: 48px !important;
}

.ll-content-notification-content-main {
    margin-left: 60px !important;
    overflow: hidden !important;
    padding: 0 0 2px 0 !important;
    color: #333 !important;
    text-align: left !important;
    text-shadow: none !important;
    letter-spacing: normal !important;
    font: normal 13px 'Lucida Grande', 'Lucida Sans Unicode', Lucida, Arial, Helvetica, sans-serif !important;
    line-height: 15px !important;
    width: auto !important;
}

.ll-content-notification-content-header {
	text-align: left !important;
	text-decoration: none !important;
    font: bold 15px 'Lucida Grande', 'Lucida Sans Unicode', Lucida, Arial, Helvetica, sans-serif !important;
    line-height: 19px !important;
    margin: 0 0 4px 0 !important;
    padding: 0 !important;
    border: 0 !important;
    color: #333 !important;
    text-shadow: none !important;
    letter-spacing: normal !important;
    display: block !important;
    top: 0 !important;
    left: 0 !important;
}

.ll-content-notification-word {
    color: #d56e00 !important;
    font-weight: bold !important;
    font-size: 14px !important;
}
</style></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">/*
 RequireJS 2.1.9 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(Z){function H(b){return"[object Function]"===L.call(b)}function I(b){return"[object Array]"===L.call(b)}function y(b,c){if(b){var e;for(e=0;e&lt;b.length&amp;&amp;(!b[e]||!c(b[e],e,b));e+=1);}}function M(b,c){if(b){var e;for(e=b.length-1;-1&lt;e&amp;&amp;(!b[e]||!c(b[e],e,b));e-=1);}}function t(b,c){return ga.call(b,c)}function l(b,c){return t(b,c)&amp;&amp;b[c]}function F(b,c){for(var e in b)if(t(b,e)&amp;&amp;c(b[e],e))break}function Q(b,c,e,h){c&amp;&amp;F(c,function(c,j){if(e||!t(b,j))h&amp;&amp;"string"!==typeof c?(b[j]||(b[j]={}),Q(b[j],
c,e,h)):b[j]=c});return b}function u(b,c){return function(){return c.apply(b,arguments)}}function aa(b){throw b;}function ba(b){if(!b)return b;var c=Z;y(b.split("."),function(b){c=c[b]});return c}function A(b,c,e,h){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=h;e&amp;&amp;(c.originalError=e);return c}function ha(b){function c(a,f,b){var d,m,c,g,e,h,j,i=f&amp;&amp;f.split("/");d=i;var n=k.map,p=n&amp;&amp;n["*"];if(a&amp;&amp;"."===a.charAt(0))if(f){d=l(k.pkgs,f)?i=[f]:i.slice(0,i.length-
1);f=a=d.concat(a.split("/"));for(d=0;f[d];d+=1)if(m=f[d],"."===m)f.splice(d,1),d-=1;else if(".."===m)if(1===d&amp;&amp;(".."===f[2]||".."===f[0]))break;else 0&lt;d&amp;&amp;(f.splice(d-1,2),d-=2);d=l(k.pkgs,f=a[0]);a=a.join("/");d&amp;&amp;a===f+"/"+d.main&amp;&amp;(a=f)}else 0===a.indexOf("./")&amp;&amp;(a=a.substring(2));if(b&amp;&amp;n&amp;&amp;(i||p)){f=a.split("/");for(d=f.length;0&lt;d;d-=1){c=f.slice(0,d).join("/");if(i)for(m=i.length;0&lt;m;m-=1)if(b=l(n,i.slice(0,m).join("/")))if(b=l(b,c)){g=b;e=d;break}if(g)break;!h&amp;&amp;(p&amp;&amp;l(p,c))&amp;&amp;(h=l(p,c),j=d)}!g&amp;&amp;
h&amp;&amp;(g=h,e=j);g&amp;&amp;(f.splice(0,e,g),a=f.join("/"))}return a}function e(a){z&amp;&amp;y(document.getElementsByTagName("script"),function(f){if(f.getAttribute("data-requiremodule")===a&amp;&amp;f.getAttribute("data-requirecontext")===i.contextName)return f.parentNode.removeChild(f),!0})}function h(a){var f=l(k.paths,a);if(f&amp;&amp;I(f)&amp;&amp;1&lt;f.length)return f.shift(),i.require.undef(a),i.require([a]),!0}function $(a){var f,b=a?a.indexOf("!"):-1;-1&lt;b&amp;&amp;(f=a.substring(0,b),a=a.substring(b+1,a.length));return[f,a]}function n(a,f,
b,d){var m,B,g=null,e=f?f.name:null,h=a,j=!0,k="";a||(j=!1,a="_@r"+(L+=1));a=$(a);g=a[0];a=a[1];g&amp;&amp;(g=c(g,e,d),B=l(r,g));a&amp;&amp;(g?k=B&amp;&amp;B.normalize?B.normalize(a,function(a){return c(a,e,d)}):c(a,e,d):(k=c(a,e,d),a=$(k),g=a[0],k=a[1],b=!0,m=i.nameToUrl(k)));b=g&amp;&amp;!B&amp;&amp;!b?"_unnormalized"+(M+=1):"";return{prefix:g,name:k,parentMap:f,unnormalized:!!b,url:m,originalName:h,isDefine:j,id:(g?g+"!"+k:k)+b}}function q(a){var f=a.id,b=l(p,f);b||(b=p[f]=new i.Module(a));return b}function s(a,f,b){var d=a.id,m=l(p,
d);if(t(r,d)&amp;&amp;(!m||m.defineEmitComplete))"defined"===f&amp;&amp;b(r[d]);else if(m=q(a),m.error&amp;&amp;"error"===f)b(m.error);else m.on(f,b)}function v(a,f){var b=a.requireModules,d=!1;if(f)f(a);else if(y(b,function(f){if(f=l(p,f))f.error=a,f.events.error&amp;&amp;(d=!0,f.emit("error",a))}),!d)j.onError(a)}function w(){R.length&amp;&amp;(ia.apply(G,[G.length-1,0].concat(R)),R=[])}function x(a){delete p[a];delete T[a]}function E(a,f,b){var d=a.map.id;a.error?a.emit("error",a.error):(f[d]=!0,y(a.depMaps,function(d,c){var g=d.id,
e=l(p,g);e&amp;&amp;(!a.depMatched[c]&amp;&amp;!b[g])&amp;&amp;(l(f,g)?(a.defineDep(c,r[g]),a.check()):E(e,f,b))}),b[d]=!0)}function C(){var a,f,b,d,m=(b=1E3*k.waitSeconds)&amp;&amp;i.startTime+b&lt;(new Date).getTime(),c=[],g=[],j=!1,l=!0;if(!U){U=!0;F(T,function(b){a=b.map;f=a.id;if(b.enabled&amp;&amp;(a.isDefine||g.push(b),!b.error))if(!b.inited&amp;&amp;m)h(f)?j=d=!0:(c.push(f),e(f));else if(!b.inited&amp;&amp;(b.fetched&amp;&amp;a.isDefine)&amp;&amp;(j=!0,!a.prefix))return l=!1});if(m&amp;&amp;c.length)return b=A("timeout","Load timeout for modules: "+c,null,c),b.contextName=
i.contextName,v(b);l&amp;&amp;y(g,function(a){E(a,{},{})});if((!m||d)&amp;&amp;j)if((z||da)&amp;&amp;!V)V=setTimeout(function(){V=0;C()},50);U=!1}}function D(a){t(r,a[0])||q(n(a[0],null,!0)).init(a[1],a[2])}function J(a){var a=a.currentTarget||a.srcElement,b=i.onScriptLoad;a.detachEvent&amp;&amp;!W?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=i.onScriptError;(!a.detachEvent||W)&amp;&amp;a.removeEventListener("error",b,!1);return{node:a,id:a&amp;&amp;a.getAttribute("data-requiremodule")}}function K(){var a;for(w();G.length;){a=
G.shift();if(null===a[0])return v(A("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));D(a)}}var U,X,i,N,V,k={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},p={},T={},Y={},G=[],r={},S={},L=1,M=1;N={require:function(a){return a.require?a.require:a.require=i.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?a.exports:a.exports=r[a.map.id]={}},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){var b=
l(k.pkgs,a.map.id);return(b?l(k.config,a.map.id+"/"+b.main):l(k.config,a.map.id))||{}},exports:r[a.map.id]}}};X=function(a){this.events=l(Y,a.id)||{};this.map=a;this.shim=l(k.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};X.prototype={init:function(a,b,c,d){d=d||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&amp;&amp;(c=u(this,function(a){this.emit("error",a)}));this.depMaps=a&amp;&amp;a.slice(0);this.errback=c;this.inited=!0;
this.ignore=d.ignore;d.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;i.startTime=(new Date).getTime();var a=this.map;if(this.shim)i.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=
this.map.url;S[a]||(S[a]=!0,i.load(this.map.id,a))},check:function(){if(this.enabled&amp;&amp;!this.enabling){var a,b,c=this.map.id;b=this.depExports;var d=this.exports,m=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1&gt;this.depCount&amp;&amp;!this.defined){if(H(m)){if(this.events.error&amp;&amp;this.map.isDefine||j.onError!==aa)try{d=i.execCb(c,m,b,d)}catch(e){a=e}else d=i.execCb(c,m,b,d);this.map.isDefine&amp;&amp;((b=this.module)&amp;&amp;void 0!==b.exports&amp;&amp;b.exports!==
this.exports?d=b.exports:void 0===d&amp;&amp;this.usingExports&amp;&amp;(d=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",v(this.error=a)}else d=m;this.exports=d;if(this.map.isDefine&amp;&amp;!this.ignore&amp;&amp;(r[c]=d,j.onResourceLoad))j.onResourceLoad(i,this.map,this.depMaps);x(c);this.defined=!0}this.defining=!1;this.defined&amp;&amp;!this.defineEmitted&amp;&amp;(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=
!0)}}else this.fetch()}},callPlugin:function(){var a=this.map,b=a.id,e=n(a.prefix);this.depMaps.push(e);s(e,"defined",u(this,function(d){var m,e;e=this.map.name;var g=this.map.parentMap?this.map.parentMap.name:null,h=i.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(d.normalize&amp;&amp;(e=d.normalize(e,function(a){return c(a,g,!0)})||""),d=n(a.prefix+"!"+e,this.map.parentMap),s(d,"defined",u(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),
e=l(p,d.id)){this.depMaps.push(d);if(this.events.error)e.on("error",u(this,function(a){this.emit("error",a)}));e.enable()}}else m=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),m.error=u(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];F(p,function(a){0===a.map.id.indexOf(b+"_unnormalized")&amp;&amp;x(a.map.id)});v(a)}),m.fromText=u(this,function(d,c){var e=a.name,g=n(e),B=O;c&amp;&amp;(d=c);B&amp;&amp;(O=!1);q(g);t(k.config,b)&amp;&amp;(k.config[e]=k.config[b]);try{j.exec(d)}catch(ca){return v(A("fromtexteval",
"fromText eval for "+b+" failed: "+ca,ca,[b]))}B&amp;&amp;(O=!0);this.depMaps.push(g);i.completeLoad(e);h([e],m)}),d.load(a.name,h,m,k)}));i.enable(e,this);this.pluginMaps[e.id]=e},enable:function(){T[this.map.id]=this;this.enabling=this.enabled=!0;y(this.depMaps,u(this,function(a,b){var c,d;if("string"===typeof a){a=n(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=l(N,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;s(a,"defined",u(this,function(a){this.defineDep(b,
a);this.check()}));this.errback&amp;&amp;s(a,"error",u(this,this.errback))}c=a.id;d=p[c];!t(N,c)&amp;&amp;(d&amp;&amp;!d.enabled)&amp;&amp;i.enable(a,this)}));F(this.pluginMaps,u(this,function(a){var b=l(p,a.id);b&amp;&amp;!b.enabled&amp;&amp;i.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){y(this.events[a],function(a){a(b)});"error"===a&amp;&amp;delete this.events[a]}};i={config:k,contextName:b,registry:p,defined:r,urlFetched:S,defQueue:G,Module:X,makeModuleMap:n,
nextTick:j.nextTick,onError:v,configure:function(a){a.baseUrl&amp;&amp;"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&amp;&amp;(a.baseUrl+="/");var b=k.pkgs,c=k.shim,d={paths:!0,config:!0,map:!0};F(a,function(a,b){d[b]?"map"===b?(k.map||(k.map={}),Q(k[b],a,!0,!0)):Q(k[b],a,!0):k[b]=a});a.shim&amp;&amp;(F(a.shim,function(a,b){I(a)&amp;&amp;(a={deps:a});if((a.exports||a.init)&amp;&amp;!a.exportsFn)a.exportsFn=i.makeShimExports(a);c[b]=a}),k.shim=c);a.packages&amp;&amp;(y(a.packages,function(a){a="string"===typeof a?{name:a}:a;b[a.name]={name:a.name,
location:a.location||a.name,main:(a.main||"main").replace(ja,"").replace(ea,"")}}),k.pkgs=b);F(p,function(a,b){!a.inited&amp;&amp;!a.map.unnormalized&amp;&amp;(a.map=n(b))});if(a.deps||a.callback)i.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&amp;&amp;(b=a.init.apply(Z,arguments));return b||a.exports&amp;&amp;ba(a.exports)}},makeRequire:function(a,f){function h(d,c,e){var g,k;f.enableBuildCallback&amp;&amp;(c&amp;&amp;H(c))&amp;&amp;(c.__requireJsBuild=!0);if("string"===typeof d){if(H(c))return v(A("requireargs",
"Invalid require call"),e);if(a&amp;&amp;t(N,d))return N[d](p[a.id]);if(j.get)return j.get(i,d,a,h);g=n(d,a,!1,!0);g=g.id;return!t(r,g)?v(A("notloaded",'Module name "'+g+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):r[g]}K();i.nextTick(function(){K();k=q(n(null,a));k.skipMap=f.skipMap;k.init(d,c,e,{enabled:!0});C()});return h}f=f||{};Q(h,{isBrowser:z,toUrl:function(b){var f,e=b.lastIndexOf("."),g=b.split("/")[0];if(-1!==e&amp;&amp;(!("."===g||".."===g)||1&lt;e))f=b.substring(e,b.length),b=
b.substring(0,e);return i.nameToUrl(c(b,a&amp;&amp;a.id,!0),f,!0)},defined:function(b){return t(r,n(b,a,!1,!0).id)},specified:function(b){b=n(b,a,!1,!0).id;return t(r,b)||t(p,b)}});a||(h.undef=function(b){w();var c=n(b,a,!0),f=l(p,b);e(b);delete r[b];delete S[c.url];delete Y[b];f&amp;&amp;(f.events.defined&amp;&amp;(Y[b]=f.events),x(b))});return h},enable:function(a){l(p,a.id)&amp;&amp;q(a).enable()},completeLoad:function(a){var b,c,d=l(k.shim,a)||{},e=d.exports;for(w();G.length;){c=G.shift();if(null===c[0]){c[0]=a;if(b)break;b=
!0}else c[0]===a&amp;&amp;(b=!0);D(c)}c=l(p,a);if(!b&amp;&amp;!t(r,a)&amp;&amp;c&amp;&amp;!c.inited){if(k.enforceDefine&amp;&amp;(!e||!ba(e)))return h(a)?void 0:v(A("nodefine","No define call for "+a,null,[a]));D([a,d.deps||[],d.exportsFn])}C()},nameToUrl:function(a,b,c){var d,e,h,g,i,n;if(j.jsExtRegExp.test(a))g=a+(b||"");else{d=k.paths;e=k.pkgs;g=a.split("/");for(i=g.length;0&lt;i;i-=1)if(n=g.slice(0,i).join("/"),h=l(e,n),n=l(d,n)){I(n)&amp;&amp;(n=n[0]);g.splice(0,i,n);break}else if(h){a=a===h.name?h.location+"/"+h.main:h.location;g.splice(0,i,
a);break}g=g.join("/");g+=b||(/^data\:|\?/.test(g)||c?"":".js");g=("/"===g.charAt(0)||g.match(/^[\w\+\.\-]+:/)?"":k.baseUrl)+g}return k.urlArgs?g+((-1===g.indexOf("?")?"?":"&amp;")+k.urlArgs):g},load:function(a,b){j.load(i,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ka.test((a.currentTarget||a.srcElement).readyState))P=null,a=J(a),i.completeLoad(a.id)},onScriptError:function(a){var b=J(a);if(!h(b.id))return v(A("scripterror","Script error for: "+b.id,
a,[b.id]))}};i.require=i.makeRequire();return i}var j,w,x,C,J,D,P,K,q,fa,la=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ma=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,ea=/\.js$/,ja=/^\.\//;w=Object.prototype;var L=w.toString,ga=w.hasOwnProperty,ia=Array.prototype.splice,z=!!("undefined"!==typeof window&amp;&amp;"undefined"!==typeof navigator&amp;&amp;window.document),da=!z&amp;&amp;"undefined"!==typeof importScripts,ka=z&amp;&amp;"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,W="undefined"!==typeof opera&amp;&amp;
"[object Opera]"===opera.toString(),E={},s={},R=[],O=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(H(requirejs))return;s=requirejs;requirejs=void 0}"undefined"!==typeof require&amp;&amp;!H(require)&amp;&amp;(s=require,require=void 0);j=requirejs=function(b,c,e,h){var q,n="_";!I(b)&amp;&amp;"string"!==typeof b&amp;&amp;(q=b,I(c)?(b=c,c=e,e=h):b=[]);q&amp;&amp;q.context&amp;&amp;(n=q.context);(h=l(E,n))||(h=E[n]=j.s.newContext(n));q&amp;&amp;h.configure(q);return h.require(b,c,e)};j.config=function(b){return j(b)};j.nextTick="undefined"!==
typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=j);j.version="2.1.9";j.jsExtRegExp=/^\/|:|\?|\.js$/;j.isBrowser=z;w=j.s={contexts:E,newContext:ha};j({});y(["toUrl","undef","defined","specified"],function(b){j[b]=function(){var c=E._;return c.require[b].apply(c,arguments)}});if(z&amp;&amp;(x=w.head=document.getElementsByTagName("head")[0],C=document.getElementsByTagName("base")[0]))x=w.head=C.parentNode;j.onError=aa;j.createNode=function(b){var c=b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml",
"html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};j.load=function(b,c,e){var h=b&amp;&amp;b.config||{};if(z)return h=j.createNode(h,c,e),h.setAttribute("data-requirecontext",b.contextName),h.setAttribute("data-requiremodule",c),h.attachEvent&amp;&amp;!(h.attachEvent.toString&amp;&amp;0&gt;h.attachEvent.toString().indexOf("[native code"))&amp;&amp;!W?(O=!0,h.attachEvent("onreadystatechange",b.onScriptLoad)):(h.addEventListener("load",b.onScriptLoad,!1),h.addEventListener("error",
b.onScriptError,!1)),h.src=e,K=h,C?x.insertBefore(h,C):x.appendChild(h),K=null,h;if(da)try{importScripts(e),b.completeLoad(c)}catch(l){b.onError(A("importscripts","importScripts failed for "+c+" at "+e,l,[c]))}};z&amp;&amp;!s.skipDataMain&amp;&amp;M(document.getElementsByTagName("script"),function(b){x||(x=b.parentNode);if(J=b.getAttribute("data-main"))return q=J,s.baseUrl||(D=q.split("/"),q=D.pop(),fa=D.length?D.join("/")+"/":"./",s.baseUrl=fa),q=q.replace(ea,""),j.jsExtRegExp.test(q)&amp;&amp;(q=J),s.deps=s.deps?s.deps.concat(q):
[q],!0});define=function(b,c,e){var h,j;"string"!==typeof b&amp;&amp;(e=c,c=b,b=null);I(c)||(e=c,c=null);!c&amp;&amp;H(e)&amp;&amp;(c=[],e.length&amp;&amp;(e.toString().replace(la,"").replace(ma,function(b,e){c.push(e)}),c=(1===e.length?["require"]:["require","exports","module"]).concat(c)));if(O){if(!(h=K))P&amp;&amp;"interactive"===P.readyState||M(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return P=b}),h=P;h&amp;&amp;(b||(b=h.getAttribute("data-requiremodule")),j=E[h.getAttribute("data-requirecontext")])}(j?
j.defQueue:R).push([b,c,e])};define.amd={jQuery:!0};j.exec=function(b){return eval(b)};j(s)}})(this);
</pre></body></html>