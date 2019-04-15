!function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";"function"==typeof Symbol&&Symbol.iterator;function o(e){return"string"==typeof e}function n(e){var t,i,n,s;if(o(e))i=this.getDOM(e),t={width:window.innerWidth,height:window.innerHeight,isWindow:!0};else{if(s=e,"[object Object]"!==Object.prototype.toString.call(s)||!e.el)return;i=o(e.el)?this.getDOM(e.el):e.el,n=o(e.scopeEl)?this.getDOM(e.scopeEl):e.scopeEl,(t={width:e.width||window.innerWidth,height:e.height||window.innerHeight,scopeEl:e.scopeEl||null,isWindow:void 0===e.isWindow||e.isWindow,origin:e.origin||!1}).scopeEl&&(t.scopeEl=n.length?n[0]:n,t.width=this.getCss(t.scopeEl,"width"),t.height=this.getCss(t.scopeEl,"height")),e.axis&&(t.axis=e.axis)}return this.beforeInit(i,t),this.config=t,this}n.prototype.beforeInit=function(e,t){if(e&&e.length>0)for(var i=0,o=e.length;i<o;i++)this.init(this.assign(t,{el:e[i]})),this.resize(this,this.assign(t,{el:e[i]}));else t.el=e,this.init(t),this.resize(this,t)},n.prototype.getDOM=function(e){var t,i=e.slice(0,1),o=e.slice(1);return/^[#\.]/.test(i)?"#"==i?t=document.getElementById(o):"."==i&&(t=document.getElementsByClassName(o)):t=document.getElementsByTagName(e),t},n.prototype.resize=function(e,t){window.onresize=function(){t.width=window.innerWidth,t.height=window.innerHeight,e.init(t)}},n.prototype.init=function(e){e.width=parseInt(e.width)<=parseInt(this.getCss(e.el,"width"))?window.innerWidth:parseInt(e.width),e.height=parseInt(e.height)<=parseInt(this.getCss(e.el,"height"))?window.innerHeight:parseInt(e.height),this.onMouseDown(e)},n.prototype.assign=function(e,t){if(null!==e){if(Object.assign)return Object.assign(e,t);for(var i=Object(e),o=1;o<arguments.length;o++){var n=arguments[o];if(n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=n[s])}return i}},n.prototype.getCss=function(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle(e,null)[t]},n.prototype.onMouseDown=function(e){var t=e.el,i=this.getCss(t,"position");t.onmousedown=function(o){var n=o.clientX-t.offsetLeft,s=o.clientY-t.offsetTop;t.style.cursor="move",this.onMouseMove(t,i,e,n,s),this.onMouseUp(t,e)}.bind(this)},n.prototype.onMouseMove=function(e,t,i,o,n){document.onmousemove=function(s){e.style.cssText=t.indexOf("static")>-1?"position:absolute;margin:0;":"margin:0;";var r=s.clientX-o,l=i.width-e.offsetWidth,u=s.clientY-n,f=i.height-e.offsetHeight;if(i.axis)if(i.axis.toLowerCase().indexOf("x")>-1)this.moveLeft(e,i,r,l);else{if(!(i.axis.toLowerCase().indexOf("y")>-1))throw new Error("a Invalid value of axis!");this.moveTop(e,i,u,f)}else this.moveLeft(e,i,r,l),this.moveTop(e,i,u,f)}.bind(this)},n.prototype.restoreX=function(e){var t=null,i=parseInt(e.style.left);e.style.transition="left .3s ease-out .1s";!function o(){i-=50,t&&i<=0?(e.style.left="",clearTimeout(t)):t=setTimeout(o,100)}()},n.prototype.restoreY=function(e){var t=null,i=parseInt(e.style.top);e.style.transition="left .3s ease-out .1s";!function o(){i-=50,t&&i<=0?(e.style.top="",clearTimeout(t)):t=setTimeout(o,100)}()},n.prototype.moveLeft=function(e,t,i,o){var n=i<=0&&t.isWindow?0:i>=o&&t.isWindow?o:i,s=parseInt(this.getCss(e,"left")),r=0,l=this.getCss(e,"position").indexOf("relative")>-1,u=t.scopeEl.children,f=function(e){if(e.length)return Array.prototype.slice.call(e)}(u).indexOf(e);if(f>0&&s>0&&l){for(var a=0;a<f;a++)r+=u[a].offsetWidth;e.style.left=n-r-4*f+"px"}else e.style.left=n+"px"},n.prototype.moveTop=function(e,t,i,o){e.style.top=i<=0&&t.isWindow?0:i>=o&&t.isWindow?o+"px":i+"px"},n.prototype.onMouseUp=function(e,t){document.onmouseup=function(){if(document.onmousemove=document.onmouseup=null,t.origin){if(t.axis)if(t.axis.toLowerCase().indexOf("x")>-1)this.restoreX(e);else{if(!(t.axis.toLowerCase().indexOf("y")>-1))throw new Error("a Invalid value of axis!");this.restoreY(e)}else this.restoreX(e),this.restoreY(e);e.style.cssText='margin:0;position:"";'}}.bind(this)},window.ewDrag=n}]);