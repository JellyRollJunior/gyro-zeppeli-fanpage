(()=>{"use strict";var n={365:(n,A,e)=>{e.d(A,{A:()=>b});var t=e(354),o=e.n(t),i=e(314),r=e.n(i),a=e(417),p=e.n(a),l=new URL(e(366),e.b),c=new URL(e(251),e.b),s=new URL(e(907),e.b),d=new URL(e(476),e.b),E=new URL(e(569),e.b),g=new URL(e(32),e.b),B=r()(o()),C=p()(l),h=p()(c),f=p()(s),m=p()(d),u=p()(E),x=p()(g);B.push([n.id,`*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nhtml {\n  font-size: 20px;\n}\n\nbody {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  background-position: 50% -70%;\n  background-image: url(${C});\n}\n\nbody:before{\n  content: '';\n  width: 100%; \n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.7);\n  z-index: -1;\n}\n\n/* General styles */\n.shadow {\n  box-shadow: 2px 2px 8px rgb(60, 60, 60);\n}\n\n/* pinwheel */\n.pinwheel-holder {\n  --skew: -23.5deg;\n\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 700px;\n  width: 100%;  \n  z-index: -1;\n}\n\n.pinwheel {\n  height: 100%;\n  transform: skewY(var(--skew));\n  transform-origin: bottom left;\n}\n\n.pinwheel.layer-one {\n  background-color: #ddbda9;\n}\n\n.pinwheel.layer-two {\n  background-color: #6f794b;\n}\n\n.pinwheel.layer-three {\n  background-color: #6f3582;\n}\n\n.wrapper {\n  max-width: 1800px;\n}\n\n/* header */\nheader,\nsection {\n  padding: 32px 42px;\n}\n\n.frame {\n  position: relative;\n  \n  margin: 12px;\n}\n\n.frame > img {\n  width: 100%;\n}\n\nh1 {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n\n  color: white;\n  font-size: 2.8rem;\n  line-height: 1.1;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n  text-shadow: 5px 5px 5px black;\n}\n\n.about {\n  margin-top: 32px;\n  padding: 1px 24px;\n  background-color: white;\n}\n\n.about > * {\n  margin: 18px 0;\n}\n\nh2 {\n  margin-top: 28px;\n  text-align: center;\n  font-size: 2.3rem;\n}\n\n.link-holder {\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n}\n\na.link {\n  --link-button-size: 40px;\n  width: var(--link-button-size);\n  height: var(--link-button-size);\n  padding: 0;\n  border: none;\n  background-color: inherit;\n  background-size: cover;\n}\n\na.link.icon-github {\n  background-image: url(${h});\n}\n\na.link.icon-linkedin {\n  background-image: url(${f});\n}\n\na.link.icon-instagram {\n  background-image: url(${m});\n}\n\na.link.icon-open-in-new {\n  --link-button-size: 32px;\n  background-image: url(${u});\n}\n\n/* gallery */\nsection {\n  margin-bottom: 42px;\n}\n\nsection h2 {\n  color: white;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n  text-shadow: 5px 5px 5px black;\n}\n\n.gallery {\n  display: grid;\n  gap: 70px 54px;\n\n  margin-top: 18px;\n}\n\n/* card */\n.card {\n  display: flex;\n  flex-direction: column;\n}\n\n.card.height-2 {\n  grid-row: span 2;\n}\n\n.card.width-end {\n  grid-column-start: 1;\n  grid-column-end: -1;\n}\n\n.card > img {\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.card > .info {\n  flex: 1;\n\n  padding: 16px 20px 45px 20px;\n  background-color: white;\n}\n\nh3 {\n  font-size: 1.5rem;\n  margin-left: 12px;\n}\n\n.card-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  margin-bottom: 12px;\n}\n\n.card-title a {\n  display: inline-block;\n}\n\n/* footer */\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  gap: 24px;\n  width: 100vw;\n  padding: 42px 42px 64px 42px;\n  background-color: #e8e2f8;\n}\n\n.contact-info {\n  max-width: 420px;\n}\n\n.contact-info > * {\n  margin-left: 0;\n}\n\nfooter h2 {\n  margin-top: 0;\n  font-size: 2rem;\n}\n\nfooter h3 {\n  margin-top: 32px;\n  font-weight: normal;\n  font-size: 1rem;\n}\n\nfooter .link-holder {\n  margin-top: 24px;\n  margin-bottom: 48px;\n}\n\nfooter img {\n  width: min(100vw - 20px, 550px);\n}\n\n/* Tablet styling */\n@media (min-width: 760px) and (max-width: 1099px) {\n  .pinwheel-holder {\n    height: 500px;\n  }\n\n  body {\n    background-image: url(${x});\n    background-position: 40% 0%;\n  }\n\n  h1 {\n    font-size: 2.8rem;\n    top: 12px;\n    left: calc(var(--frame-width) - 55px);\n    white-space: nowrap;\n  }\n\n  .frame {\n    --frame-width: 330px;\n\n    width: var(--frame-width);\n    margin-right: 24px;\n    float: left;\n  }\n\n  .frame > img {\n    height: 100%;\n    object-fit: cover;\n    object-position: 0 20%;\n  }\n\n  .about {\n    margin-top: 100px;\n    margin-left: 60px;\n  }\n\n  h2 {\n    font-size: 2.5rem;\n    margin-top: 70px;\n  }\n\n  section > h2 {\n    font-size: 3rem;\n  }\n\n  header p {\n    font-size: 1rem;\n  }\n\n  .gallery {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  footer * {\n    text-align: center;\n  }\n\n  footer .link-holder {\n    justify-content: center;\n  }\n}\n\n/* Tablet AND desktop styling */\n@media (min-width: 760px) {\n  .pinwheel-holder {\n    --skew: -15deg;\n  }\n\n  .link-holder {\n    justify-content: end;\n  }\n\n  .card.width-2 {\n    grid-column: span 2;\n  }\n\n  footer {\n    flex-direction: row;\n    gap: 64px;\n  }\n\n  footer img {\n    width: min(50vw - 20px, 550px);\n  }\n}\n\n/* Desktop styling */\n@media (min-width: 1100px) {\n  .pinwheel-holder {\n    height: 800px;\n  }\n\n  body {\n    background-position: 15% 0%;\n    background-image: url(${x});\n  }\n\n  header {\n    display: flex;\n    align-items: center;\n    padding: 42px 56px;\n  }\n\n  h1 {\n    font-size: 5rem;\n  }\n\n  .frame {\n    min-width: 500px;\n    margin: 0;\n  }\n\n  .about {\n    min-height: 550px;\n    text-align: left;\n  }\n\n  .about > h2 {\n    text-align: left;\n  }\n\n  .gallery {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  footer {\n    flex-direction: row;\n    gap: 64px;\n  }\n\n  footer h2 {\n    text-align: left;\n  }\n\n  footer .link-holder {\n    justify-content: start;\n  }\n}\n`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"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",sourcesContent:["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nhtml {\n  font-size: 20px;\n}\n\nbody {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  background-position: 50% -70%;\n  background-image: url(./images/gyro-floral-tall.jpg);\n}\n\nbody:before{\n  content: '';\n  width: 100%; \n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.7);\n  z-index: -1;\n}\n\n/* General styles */\n.shadow {\n  box-shadow: 2px 2px 8px rgb(60, 60, 60);\n}\n\n/* pinwheel */\n.pinwheel-holder {\n  --skew: -23.5deg;\n\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 700px;\n  width: 100%;  \n  z-index: -1;\n}\n\n.pinwheel {\n  height: 100%;\n  transform: skewY(var(--skew));\n  transform-origin: bottom left;\n}\n\n.pinwheel.layer-one {\n  background-color: #ddbda9;\n}\n\n.pinwheel.layer-two {\n  background-color: #6f794b;\n}\n\n.pinwheel.layer-three {\n  background-color: #6f3582;\n}\n\n.wrapper {\n  max-width: 1800px;\n}\n\n/* header */\nheader,\nsection {\n  padding: 32px 42px;\n}\n\n.frame {\n  position: relative;\n  \n  margin: 12px;\n}\n\n.frame > img {\n  width: 100%;\n}\n\nh1 {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n\n  color: white;\n  font-size: 2.8rem;\n  line-height: 1.1;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n  text-shadow: 5px 5px 5px black;\n}\n\n.about {\n  margin-top: 32px;\n  padding: 1px 24px;\n  background-color: white;\n}\n\n.about > * {\n  margin: 18px 0;\n}\n\nh2 {\n  margin-top: 28px;\n  text-align: center;\n  font-size: 2.3rem;\n}\n\n.link-holder {\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n}\n\na.link {\n  --link-button-size: 40px;\n  width: var(--link-button-size);\n  height: var(--link-button-size);\n  padding: 0;\n  border: none;\n  background-color: inherit;\n  background-size: cover;\n}\n\na.link.icon-github {\n  background-image: url(./icons/icons8-github-60.png);\n}\n\na.link.icon-linkedin {\n  background-image: url(./icons/icons8-linkedin-50.png);\n}\n\na.link.icon-instagram {\n  background-image: url(./icons/icons8-instagram-60.png);\n}\n\na.link.icon-open-in-new {\n  --link-button-size: 32px;\n  background-image: url(./icons/open-in-new.png);\n}\n\n/* gallery */\nsection {\n  margin-bottom: 42px;\n}\n\nsection h2 {\n  color: white;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n  text-shadow: 5px 5px 5px black;\n}\n\n.gallery {\n  display: grid;\n  gap: 70px 54px;\n\n  margin-top: 18px;\n}\n\n/* card */\n.card {\n  display: flex;\n  flex-direction: column;\n}\n\n.card.height-2 {\n  grid-row: span 2;\n}\n\n.card.width-end {\n  grid-column-start: 1;\n  grid-column-end: -1;\n}\n\n.card > img {\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.card > .info {\n  flex: 1;\n\n  padding: 16px 20px 45px 20px;\n  background-color: white;\n}\n\nh3 {\n  font-size: 1.5rem;\n  margin-left: 12px;\n}\n\n.card-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  margin-bottom: 12px;\n}\n\n.card-title a {\n  display: inline-block;\n}\n\n/* footer */\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  gap: 24px;\n  width: 100vw;\n  padding: 42px 42px 64px 42px;\n  background-color: #e8e2f8;\n}\n\n.contact-info {\n  max-width: 420px;\n}\n\n.contact-info > * {\n  margin-left: 0;\n}\n\nfooter h2 {\n  margin-top: 0;\n  font-size: 2rem;\n}\n\nfooter h3 {\n  margin-top: 32px;\n  font-weight: normal;\n  font-size: 1rem;\n}\n\nfooter .link-holder {\n  margin-top: 24px;\n  margin-bottom: 48px;\n}\n\nfooter img {\n  width: min(100vw - 20px, 550px);\n}\n\n/* Tablet styling */\n@media (min-width: 760px) and (max-width: 1099px) {\n  .pinwheel-holder {\n    height: 500px;\n  }\n\n  body {\n    background-image: url(./images/gyro-floral.png);\n    background-position: 40% 0%;\n  }\n\n  h1 {\n    font-size: 2.8rem;\n    top: 12px;\n    left: calc(var(--frame-width) - 55px);\n    white-space: nowrap;\n  }\n\n  .frame {\n    --frame-width: 330px;\n\n    width: var(--frame-width);\n    margin-right: 24px;\n    float: left;\n  }\n\n  .frame > img {\n    height: 100%;\n    object-fit: cover;\n    object-position: 0 20%;\n  }\n\n  .about {\n    margin-top: 100px;\n    margin-left: 60px;\n  }\n\n  h2 {\n    font-size: 2.5rem;\n    margin-top: 70px;\n  }\n\n  section > h2 {\n    font-size: 3rem;\n  }\n\n  header p {\n    font-size: 1rem;\n  }\n\n  .gallery {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  footer * {\n    text-align: center;\n  }\n\n  footer .link-holder {\n    justify-content: center;\n  }\n}\n\n/* Tablet AND desktop styling */\n@media (min-width: 760px) {\n  .pinwheel-holder {\n    --skew: -15deg;\n  }\n\n  .link-holder {\n    justify-content: end;\n  }\n\n  .card.width-2 {\n    grid-column: span 2;\n  }\n\n  footer {\n    flex-direction: row;\n    gap: 64px;\n  }\n\n  footer img {\n    width: min(50vw - 20px, 550px);\n  }\n}\n\n/* Desktop styling */\n@media (min-width: 1100px) {\n  .pinwheel-holder {\n    height: 800px;\n  }\n\n  body {\n    background-position: 15% 0%;\n    background-image: url(./images/gyro-floral.png);\n  }\n\n  header {\n    display: flex;\n    align-items: center;\n    padding: 42px 56px;\n  }\n\n  h1 {\n    font-size: 5rem;\n  }\n\n  .frame {\n    min-width: 500px;\n    margin: 0;\n  }\n\n  .about {\n    min-height: 550px;\n    text-align: left;\n  }\n\n  .about > h2 {\n    text-align: left;\n  }\n\n  .gallery {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  footer {\n    flex-direction: row;\n    gap: 64px;\n  }\n\n  footer h2 {\n    text-align: left;\n  }\n\n  footer .link-holder {\n    justify-content: start;\n  }\n}\n"],sourceRoot:""}]);const b=B},314:n=>{n.exports=function(n){var A=[];return A.toString=function(){return this.map((function(A){var e="",t=void 0!==A[5];return A[4]&&(e+="@supports (".concat(A[4],") {")),A[2]&&(e+="@media ".concat(A[2]," {")),t&&(e+="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {")),e+=n(A),t&&(e+="}"),A[2]&&(e+="}"),A[4]&&(e+="}"),e})).join("")},A.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(t)for(var a=0;a<this.length;a++){var p=this[a][0];null!=p&&(r[p]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);t&&r[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),A.push(c))}},A}},417:n=>{n.exports=function(n,A){return A||(A={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),A.hash&&(n+=A.hash),/["'() \t\n]|(%20)/.test(n)||A.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var A=n[1],e=n[3];if(!e)return A;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[A].concat([i]).join("\n")}return[A].join("\n")}},72:n=>{var A=[];function e(n){for(var e=-1,t=0;t<A.length;t++)if(A[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},r=[],a=0;a<n.length;a++){var p=n[a],l=t.base?p[0]+t.base:p[0],c=i[l]||0,s="".concat(l," ").concat(c);i[l]=c+1;var d=e(s),E={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==d)A[d].references++,A[d].updater(E);else{var g=o(E,t);t.byIndex=a,A.splice(a,0,{identifier:s,updater:g,references:1})}r.push(s)}return r}function o(n,A){var e=A.domAPI(A);return e.update(n),function(A){if(A){if(A.css===n.css&&A.media===n.media&&A.sourceMap===n.sourceMap&&A.supports===n.supports&&A.layer===n.layer)return;e.update(n=A)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var a=e(i[r]);A[a].references--}for(var p=t(n,o),l=0;l<i.length;l++){var c=e(i[l]);0===A[c].references&&(A[c].updater(),A.splice(c,1))}i=p}}},659:n=>{var A={};n.exports=function(n,e){var t=function(n){if(void 0===A[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}A[n]=e}return A[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},540:n=>{n.exports=function(n){var A=document.createElement("style");return n.setAttributes(A,n.attributes),n.insert(A,n.options),A}},56:(n,A,e)=>{n.exports=function(n){var A=e.nc;A&&n.setAttribute("nonce",A)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var A=n.insertStyleElement(n);return{update:function(e){!function(n,A,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),A.styleTagTransform(t,n,A.options)}(A,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(A)}}}},113:n=>{n.exports=function(n,A){if(A.styleSheet)A.styleSheet.cssText=n;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(n))}}},251:(n,A,e)=>{n.exports=e.p+"3379329c5a67d1edcc1c.png"},476:(n,A,e)=>{n.exports=e.p+"0cd4637598f117a2ba31.png"},907:(n,A,e)=>{n.exports=e.p+"a2f5bf46a80b9b03c87c.png"},569:(n,A,e)=>{n.exports=e.p+"f379747cc140ca3aa6a4.png"},366:(n,A,e)=>{n.exports=e.p+"71553822f0b0c12fde88.jpg"},32:(n,A,e)=>{n.exports=e.p+"cb41de9da78bdd56d8da.png"}},A={};function e(t){var o=A[t];if(void 0!==o)return o.exports;var i=A[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return e.d(A,{a:A}),A},e.d=(n,A)=>{for(var t in A)e.o(A,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:A[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var A=e.g.document;if(!n&&A&&(A.currentScript&&"SCRIPT"===A.currentScript.tagName.toUpperCase()&&(n=A.currentScript.src),!n)){var t=A.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var t=e(72),o=e.n(t),i=e(825),r=e.n(i),a=e(659),p=e.n(a),l=e(56),c=e.n(l),s=e(540),d=e.n(s),E=e(113),g=e.n(E),B=e(365),C={};C.styleTagTransform=g(),C.setAttributes=c(),C.insert=p().bind(null,"head"),C.domAPI=r(),C.insertStyleElement=d(),o()(B.A,C),B.A&&B.A.locals&&B.A.locals,console.log("hello world")})();
//# sourceMappingURL=main.js.map