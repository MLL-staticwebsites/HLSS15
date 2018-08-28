!function(n,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("lodash"),require("coreUtilsLib"),require("color")):"function"==typeof define&&define.amd?define(["lodash","coreUtilsLib","color"],r):"object"==typeof exports?exports["skin-utils"]=r(require("lodash"),require("coreUtilsLib"),require("color")):n["skin-utils"]=r(n.lodash,n.coreUtilsLib,n.color)}(this,function(n,r,t){return function(n){var r={};function t(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var i in n)t.d(e,i,function(r){return n[r]}.bind(null,i));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=8)}([function(r,t){r.exports=n},function(n,r,t){"use strict";var e=t(0),i=t(6),o=t(5).checkIsParamAnAliasAndGetUnaliasedValue,u={brightness:function(n,r){return n.value(r*n.hsv().v)},alpha:function(n,r){return n.alpha(r*n.alpha())},decrease:function(n,r){return e.parseInt(n)-e.parseInt(r)},increase:function(n,r){return e.parseInt(n)+e.parseInt(r)},multiply:function(n,r){return e.parseInt(n)*parseFloat(r)},max:function(n,r){return Math.max(e.parseInt(n),e.parseInt(r))},eval:function(n,r,t){return t[r](n)}};function a(n,r,t,e){return t&&t[n]?function(n,r,t){return u[r.type]?u[r.type](n,r.value,t):n}(r,t[n],e):r}function c(n,r,t){var i=e.isUndefined(r[n])?t[n]:r[n];if(!e.isArray(i))return i;if(1===i.length)return r[i[0]]||t[i[0]];var o="";return i=e.reduce(i,function(n,i){var u,a,c=r[i]||t[i];return o=o||(u=c,a=e.parseInt(u).toString(),u=u.toString(),isNaN(a)||u===a?"":u.substr(u.indexOf(a)+a.length)),n+e.parseInt(c)},0),"x"===o&&(o="px"),i+o}n.exports={renderParam:function(n,r,t,f,s){if(!r.params)return"";var l=o(r.params[n]),O=c(n,t,r.paramsDefaults);if(void 0===O||!l)return"";switch(l){case"BG_COLOR":case"COLOR":case"COLOR_ALPHA":O=function(n,r,t,i){var o="alpha-"+(Array.isArray(t[r])&&t[r][0]||r),a=e.isUndefined(i[o])?t[o]:i[o];return e.isUndefined(a)||(n=u.alpha(n,parseFloat(a))),n}(O=function(n,r){var t=n.split("color_");return 2===t.length&&(n=r[e.parseInt(t[1])]),e.includes(n,",")&&!e.includes(n,"rgb")&&(n="rgba("+n+")"),i(n)}(O,f),n,r.paramsDefaults,t);break;case"BORDER_RADIUS":t[n]&&(O=function(n){var r="";return e.forEach(n.replace(/px/g,"").split(" "),function(n){var t=Math.min(e.parseInt(n),99999);r+=" "+t+(0===t?"":"px")}),n=r.substring(1)}(O));break;case"BOX_SHADOW":if(function(n,r,t){var e="boxShadowToggleOn-"+n;return"false"===(r[e]||t[e])}(n,t,r.paramsDefaults))return""}return{type:l,value:O=a(n,O,r.paramsMutators,s)}}}},function(n,r,t){"use strict";var e=t(0);n.exports={identity:e.identity}},function(n,t){n.exports=r},function(n,r,t){"use strict";var e=t(0),i=t(3).fonts;function o(n){var r=n,t=i.getFontFallback(n);return t&&(r=r+","+t),r=r.replace(/[^,]*[^\w,\d\-][^,]*/g,function(n){return"'"+n.replace(/\+/g," ")+"'"})}n.exports={fontToCSSWithoutColor:function(n,r){return function(n){var r=n;e.includes(r,"#")&&(r=r.slice(0,r.indexOf("#"))),r=r.replace(/\{color_\d+\}/,"");var t=i.getFontFamily(r),u=o(t);return r.replace(t,u)+";"}(function(n,r){if(e.startsWith(n,"font_")){var t=n.split("font_");if(2===t.length)return r.font[t[1]]}return n}(n,r))},getFullFontFamily:o}},function(n,r,t){"use strict";var e=t(0),i=["BORDER_SIZE","BORDER_TOP_SIZE","BORDER_BOTTOM_SIZE","BORDER_LEFT_SIZE","BORDER_RIGHT_SIZE","PADDING_SIZE","PADDING_TOP_SIZE","PADDING_BOTTOM_SIZE","PADDING_LEFT_SIZE","PADDING_RIGHT_SIZE","MARGIN_SIZE","MARGIN_TOP_SIZE","MARGIN_BOTTOM_SIZE","MARGIN_LEFT_SIZE","MARGIN_RIGHT_SIZE","BG_SIZE","WIDTH_SIZE","HEIGHT_SIZE","TOP_SIZE","BOTTOM_SIZE","LEFT_SIZE","RIGHT_SIZE","TEXT_SIZE"],o=["TEXT_COLOR","BORDER_COLOR"],u=["BORDER_COLOR_ALPHA","BOX_SHADOW_COLOR_ALPHA","TEXT_COLOR_LEGACY_ALPHA"],a=["BG_COLOR_ALPHA"],c={};e.forEach(i,function(n){c[n]="SIZE"}),e.forEach(o,function(n){c[n]="COLOR"}),e.forEach(u,function(n){c[n]="COLOR_ALPHA"}),e.forEach(a,function(n){c[n]="BG_COLOR"});n.exports={checkIsParamAnAliasAndGetUnaliasedValue:function(n){return c[n]?c[n]:n},PARAM_ALIAS_MAP:c,SIZE_ALIASES:i,COLOR_ALIASES:o,COLOR_ALPHA_ALIASES:u,BG_COLOR_ALIASES:a}},function(n,r){n.exports=t},function(n,r,t){"use strict";var e=t(0),i=t(1),o=t(4),u=t(2);function a(n){return isNaN(n)?n:n+"px"}var c={BORDER_RADIUS:function(n){return"border-radius:"+n+";"},BOX_SHADOW:function(n){return"box-shadow:"+n+";"},FONT:function(n){return"font:"+n},FONT_FAMILY:function(n){return"font-family:"+n+";"},TRANSITION:function(n){return"transition:"+n+";"},INVERTED_ZOOM:function(n){return"zoom:"+n+";"},INVERTED_ZOOM_FIXED:function(n){return"zoom:"+n+";"},ORIENTATION_ZOOM_FIX:function(n){return"zoom:"+n+";"},ZOOM_BY_SCREEN_PROPERTIES:function(n){return"zoom:"+n+";"},DEFAULT:e.identity},f={BORDER_RADIUS:e.identity,TRANSITION:e.identity,ALPHA:e.identity,BORDER_SIDES:e.constant(""),ICON_TYPE:e.constant(""),BOX_SHADOW:a,SIZE:a,FONT:function(n,r){return o.fontToCSSWithoutColor(n,r)},FONT_FAMILY:function(n){return o.getFullFontFamily(n)},COLOR:function(n){return n.hexString()},BG_COLOR:function(n){return n.alpha()>0?n.rgbaString():"transparent"},COLOR_ALPHA:function(n){return n.alpha()>0?n.rgbaString():"transparent"},INVERTED_ZOOM:function(n,r,t){return t.siteZoomRatio},INVERTED_ZOOM_FIXED:function(n,r,t){return t.invertedZoomRatio},ORIENTATION_ZOOM_FIX:function(n,r,t){return t.orientationZoomFix},ZOOM_BY_SCREEN_PROPERTIES:function(n,r,t){return t.mobileZoom},URL:function(n,r,t){return"BASE_THEME_DIRECTORY"===n?t.baseThemeUrl:"WEB_THEME_DIRECTORY"===n?t.webThemeUrl:n},DEFAULT:e.identity};function s(n,r,t,i){var o=i.renderingEnv;return e.isNil(n)?"":(c[r]||c.DEFAULT)((f[r]||f.DEFAULT)(n,t,o))}function l(n,r,t,o,u){var a=i.renderParam(n,r,t,o.color,u.evals),c="SIZE"===a.type&&e.isString(a.value)?e.map(a.value.split(" "),function(n){return{value:n,type:"SIZE"}}):[a];return e.map(c,function(n){return s(n.value,n.type,o,u)})}function O(n,r,t,o,a){return n.$render(function(n){return"."+n}(o),function(n,r,t,o){return e.mapValues(n.params,function(u,a){var c=i.renderParam(a,n,r,t.color,o.evals);return function(n,r,t,i){var o=i.renderingEnv;if(e.isNil(n))return"";return(f[r]||f.DEFAULT)(n,t,o)}(c.value,c.type,t,o)})}(n,r,t,a),u)}function _(n,r,t,o,u){return e.map(n.css,function(a,c){var f="@"===c[0]?o+"_":"."+o;return(c=c.replace(/%/g,f))+" {"+(a=function(n,r){return n.replace(/((-webkit-)?animation(-name)?: ?)/gim,"$1"+r+"_")}(a=function(n,r,t,e,o){return n.replace(/\[(.*?)\]/g,function(n,u){var a=i.renderParam(u,r,t,e.color,o.evals);return s(a.value,a.type,e,o)})}(a=function(n,r,t,i,o){return n.replace(/calc\(\[([\w\d]+)\] ([-+*\/]) \[([\w\d]+)\]\)/g,function(n,u,a,c){for(var f=l(u,r,t,i,o),s=l(c,r,t,i,o),O=e.template("calc(${p1} ${sign} ${p2})"),_=[],p=0;p<Math.max(f.length,s.length);p++)_.push(O({p1:f[p]||f[0],p2:s[p]||s[0],sign:a}));return _.join(" ")})}(a,n,r,t,u),n,r,t,u),o))+"}"}).join("\n")}function p(n,r,t,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{evals:{}};return function(n){return"function"==typeof n.$render}(n)?O(n,r,t,i,o):_(n,r,t,i,o)+function(n,r,t,i){return n.mediaQueries&&n.mediaQueries.length?e.map(n.mediaQueries,function(n){var e=p({css:n.css},r,t,i);return[n.query,"{",e,"}"].join("")}).join("\n"):""}(n,r,t,i)}n.exports=p},function(n,r,t){"use strict";n.exports={createSkinCss:t(7),renderParam:t(1).renderParam}}])});
//# sourceMappingURL=skin-utils.js.map