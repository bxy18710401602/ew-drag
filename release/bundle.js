!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function i(t){if(this.isObject(t)&&t.el){var e={width:t.width||window.innerWidth,height:t.height||window.innerHeight,scopeEl:t.el||null,isWindow:void 0===t.isWindow||t.isWindow};if(e.scopeEl&&(e.scopeEl=e.scopeEl.length?e.scopeEl[0]:e.scopeEl,e.width=this.getCss(e.scopeEl,"width"),e.height=this.getCss(e.scopeEl,"height"),console.log(e)),t.el.length>0)for(var n=0;n<t.el.length;n++)this.init(this.assign(e,{el:t.el[n]})),this.resize(this,this.assign(e,{el:t.el[n]}));else e.el=t.el,this.init(e),this.resize(this,e);return this}}i.prototype.isObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)},i.prototype.resize=function(t,e){window.onresize=function(){e.width=window.innerWidth,e.height=window.innerHeight,t.init(e)}},i.prototype.init=function(t){t.width=parseInt(t.width)<=parseInt(this.getCss(t.el,"width"))?window.innerWidth:parseInt(t.width),t.height=parseInt(t.height)<=parseInt(this.getCss(t.el,"height"))?window.innerHeight:parseInt(t.height),this.onMouseDown(t)},i.prototype.assign=function(t,e){if(null!==t){if(Object.assign)return Object.assign(t,e);for(var n=Object(t),i=1;i<arguments.length;i++){var o=arguments[i];if(o)for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])}return n}},i.prototype.getCss=function(t,e){return t.currentStyle?t.currentStyle[e]:window.getComputedStyle(t,null)[e]},i.prototype.onMouseDown=function(t){var e=t.el,n=e.style,i=this.getCss(e,"position");e.onmousedown=function(o){var s=o.clientX-e.offsetLeft,r=o.clientY-e.offsetTop;n.cursor="move",this.onMouseMove(e,i,t,s,r),this.onMouseUp()}.bind(this)},i.prototype.onMouseMove=function(t,e,n,i,o){document.onmousemove=function(s){t.style.position=-1===e.indexOf("absolute")?"absolute":e;var r=s.clientX-i,u=n.width-t.offsetWidth,l=s.clientY-o,h=n.height-t.offsetHeight;t.style.left=r<=0&&this.isWindow?0:r>=u&&this.isWindow?u+"px":r+"px",t.style.top=l<=0&&this.isWindow?0:l>=h&&this.isWindow?h+"px":l+"px"}.bind(this)},i.prototype.onMouseUp=function(){document.onmouseup=function(){document.onmousemove=document.onmouseup=null}},window.ewDrag=i}]);