(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"html {\n    box-sizing: border-box;\n}\n*, *:before, *:after {\n    box-sizing: inherit;\n}\nbody {\n    overflow: hidden;\n    margin: 0;\n    padding: 0;\n}\n\n#head {\n    width: 30%;\n}\n\n#home {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nbutton {\n    margin-right: 30px;\n}\n\nfooter {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n    \n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],u=i[s]||0,p="".concat(s," ").concat(u);i[s]=u+1;var l=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)n[l].references++,n[l].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=r(e,o),s=0;s<i.length;s++){var u=t(i[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"974c204b1446696a3bd1.png",n=function(){const n=document.getElementById("main");return n.textContent="",n.appendChild(function(){const n=new Image;n.src=e,n.setAttribute("id","head");const t=document.createElement("div");t.setAttribute("id","home");const r=document.createElement("h3");r.innerText="Best Dressed Pork in Town";const o=document.createElement("p");return o.innerText="Va ya nen igyo i Dondo!",t.appendChild(r),t.appendChild(o),t.appendChild(n),t}()),n};var r=t(379),o=t.n(r),i=t(795),a=t.n(i),c=t(569),d=t.n(c),s=t(565),u=t.n(s),p=t(216),l=t.n(p),m=t(589),f=t.n(m),h=t(426),v={};function y(){const e=document.createElement("header"),t=document.createElement("h1");return t.innerText="Igyo-Dondo",e.appendChild(t),e.appendChild(function(){const e=document.createElement("nav"),t=(document.createElement("ul"),document.createElement("button"));t.innerText="Home",t.addEventListener("click",(function(){n()}));const r=document.createElement("button");r.innerText="Menu",r.addEventListener("click",(function(){!function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");for(let n=0;n<4;n++){const t=document.createElement("div"),r=document.createElement("p"),o=document.createElement("h3");0===n?(r.innerText="yam, red oil, pork, tatashe",o.innerText="Luam",t.appendChild(o),t.appendChild(r)):1===n?(r.innerText="yam, red oil, pork, tatashe",o.innerText="Kwese sha kamu",t.appendChild(o),t.appendChild(r)):2===n?(r.innerText="yam, red oil, pork, tatashe",o.innerText="Ikyegh sha shwa",t.appendChild(o),t.appendChild(r)):3===n&&(r.innerText="yam, red oil, pork, tatashe",o.innerText="Ahom a igyoo",t.appendChild(o),t.appendChild(r)),e.appendChild(t)}return e}())}()}));const o=document.createElement("button");return o.innerText="Contact",o.addEventListener("click",(function(){!function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div"),n=document.createElement("p");return n.innerText="+234 80 695 751 75",e.appendChild(n),e}())}()})),e.appendChild(t),e.appendChild(r),e.appendChild(o),e}()),e}v.styleTagTransform=f(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals,function(){const t=document.getElementById("content"),r=document.body;t.appendChild(y()),t.appendChild(function(){const n=new Image;n.src=e,n.setAttribute("id","head");const t=document.createElement("main");t.setAttribute("id","main");const r=document.createElement("h3");r.innerText="Best Dressed Pork in Town";const o=document.createElement("p");return o.innerText="Va ya nen igyo i Dondo!",t.appendChild(r),t.appendChild(o),t.appendChild(n),t}()),t.appendChild(function(){const e=document.createElement("footer"),n=document.createElement("p");return n.innerText="Copyright &copy; 2023 Sedondo",e.appendChild(n),e}()),r.appendChild(t),n()}()})()})();