!function(n){var r={};function e(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return n[t].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var a in n)e.d(t,a,function(r){return n[r]}.bind(null,a));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=11)}([function(n,r,e){"use strict";e.r(r),r.default=e.p+"8e541c86b36cd85d62b01b105de1c66e.gif"},function(n,r,e){"use strict";var t,a=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),o=[];function s(n){for(var r=-1,e=0;e<o.length;e++)if(o[e].identifier===n){r=e;break}return r}function l(n,r){for(var e={},t=[],a=0;a<n.length;a++){var i=n[a],l=r.base?i[0]+r.base:i[0],c=e[l]||0,d="".concat(l," ").concat(c);e[l]=c+1;var u=s(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:d,updater:g(p,r),references:1}),t.push(d)}return t}function c(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var a=e.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var o=i(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}return r}var d,u=(d=[],function(n,r){return d[n]=r,d.filter(Boolean).join("\n")});function p(n,r,e,t){var a=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=u(r,a);else{var i=document.createTextNode(a),o=n.childNodes;o[r]&&n.removeChild(o[r]),o.length?n.insertBefore(i,o[r]):n.appendChild(i)}}function h(n,r,e){var t=e.css,a=e.media,i=e.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var m=null,f=0;function g(n,r){var e,t,a;if(r.singleton){var i=f++;e=m||(m=c(r)),t=p.bind(null,e,i,!1),a=p.bind(null,e,i,!0)}else e=c(r),t=h.bind(null,e,r),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else a()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=a());var e=l(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var a=s(e[t]);o[a].references--}for(var i=l(n,r),c=0;c<e.length;c++){var d=s(e[c]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}e=i}}}},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var a=(o=t,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([a]).join("\n")}var o,s,l;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(t)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&a[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),r.push(l))}},r}},function(n,r,e){var t=e(1),a=e(4);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},o=(t(a,i),a.locals?a.locals:{});n.exports=o},function(n,r,e){var t=e(2),a=e(5),i=e(6),o=e(7),s=e(8),l=e(0);r=t(!1);var c=a(i),d=a(o),u=a(s),p=a(l);r.push([n.i,'html { box-sizing: border-box; }\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  transition-duration: 0.25s;\r\n}\r\n\r\nbody {\r\n  font-size:100%;\r\n  font-family:"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif;\r\n  background-color: rgb(25,25,25);\r\n  background-image: url('+c+");\r\n  background-position: center;\r\n  background-repeat: repeat;\r\n  background-attachment: fixed;\r\n}\r\n\r\nh2 { margin: 6px 0;}\r\n\r\n.authors {\r\n  font-family:  Tahoma, sans-serif;\r\n  font-size: 18px;\r\n  color: wheat;\r\n}\r\n\r\n#StartGame{\r\n  width:50%;\r\n  margin:0 auto;\r\n  padding:12px;\r\n  font-size:2.5em;\r\n  box-shadow: 2px 6px 18px rgba(0,0,0,0.5);\r\n}\r\n\r\n#playAgainBtn{ \r\n  pointer-events: all;\r\n  cursor: pointer;\r\n  font-size: 5vw;\r\n  color: aliceblue;\r\n  border: 8px solid #FFF;\r\n  border-radius: 8px;\r\n  background: #b8e675;\r\n}\r\n\r\n.center {\r\n  margin: 0 auto;\r\n}\r\n\r\n.padt-2 {padding-top: 2em;}\r\n.pad-12 {padding: 12px;}\r\n.mb-2 {margin-bottom: 2em;}\r\n\r\n.bottombar\r\n{\r\n    border-bottom:6px solid grey;\r\n}\r\n.bottombar-black\r\n{\r\n    border-bottom:6px solid black;\r\n}\r\n.bottombar-2\r\n{\r\n    border-bottom:2px solid grey;\r\n}\r\n.bottombar-2-black\r\n{\r\n    border-bottom:2px solid black;\r\n    border-radius: 15px 35px;\r\n}\r\n/*Console Related CSS*/\r\n.GameTitle\r\n{\r\n  font-family:fantasy;\r\n  text-align:center;\r\n  font-size: 5em;\r\n  letter-spacing: 3px;\r\n  color: orange;\r\n  margin-top:0.4em;\r\n}\r\n\r\n.menuHeader{\r\n  width:55%;\r\n  padding-top:3em;\r\n  margin:0 auto;\r\n}\r\n\r\n.Menu\r\n{\r\n  padding-top: 1em;\r\n  padding-bottom: 1em;\r\n  width: 40vw;\r\n  background-color: rgba(0,0,0,0);\r\n  border-radius: 35px 35px;\r\n  border-bottom-left-radius: 35px;\r\n  border-bottom-right-radius: 35px;\r\n  box-shadow: 4px 6px 12px black;\r\n  margin: 0 auto;\r\n}\r\n\r\n.menuOption\r\n{\r\n  font-family:fantasy;\r\n  font-size: 2em;\r\n  font-weight: 100;\r\n  color: cadetblue;\r\n  text-align:center;\r\n  margin-top:0.4em;\r\n  border-radius: 15px 15px;\r\n  margin-bottom: 10px;\r\n}\r\n.menuOption:hover\r\n{\r\n    color:darkkhaki;\r\n    cursor:pointer;\r\n}\r\n\r\n.ShipCounter\r\n{\r\n  position: relative;\r\n  text-align: center;\r\n  color: black;\r\n  width: 30%;\r\n  margin: 0 auto;\r\n  font-size: 1.4em;\r\n  padding-top: 0.5em;\r\n  padding-bottom: 0.5em;\r\n  background-color: aliceblue;\r\n  border: solid rgba(75,75,75,0.8);\r\n  border-radius: 5px;\r\n  border-top-left-radius: 25px;\r\n  border-top-right-radius: 25px;\r\n  box-shadow: 0px 0px 12px aliceblue;\r\n}\r\n\r\n.board-container {\r\n  text-align: center;\r\n}\r\n.divider{\r\n  width:100%;\r\n  height:40px;\r\n  background-color:rgba(50,50,50,0.3);\r\n  box-shadow:0px 0px 52px;  \r\n  margin: 40px 0;\r\n}\r\n\r\n.text-white{color: #FFF;}\r\n.text-red{color: #A22;}\r\n.text-grey{color: #888;}\r\n\r\n#PlayerBoard, #EnemyBoard {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  max-width: 640px;\r\n  outline: 1px solid black;\r\n  background-image: url("+d+");\r\n  background-repeat: repeat;\r\n  background-color:rgb(50,90,180);\r\n  background-attachment: fixed;\r\n  border: 2px solid white;\r\n  border-radius: 12px 12px;\r\n  animation: backgroundScroll 80s linear infinite;\r\n}\r\n\r\n.cell {\r\n  position: relative;\r\n  flex: 1 0 9.5%;\r\n  width: 50px;\r\n  height: 62px;\r\n  line-height: 54px;\r\n  outline: 1px solid rgba(0,0,0,0.1);\r\n  cursor: pointer;\r\n  text-align: center;\r\n  color: rgba(0,0,0,0.20);\r\n  font-weight: bold;\r\n  background-size: cover;\r\n}\r\n.cell:before{ position: absolute;left: 0; width: 100%; height: 100%; content: '';}\r\n.cell:hover:before{\r\n  border-style: solid;\r\n  border-color: rgba(255, 204, 0, 0.3);\r\n  background-color: rgba(255,255,255,0.6)!important;\r\n}\r\n\r\n.ship{\r\n  border: 1px solid #ffbf00;\r\n  background-color: rgba(255, 128, 0, 0.8);\r\n}\r\n\r\n.hit {\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  background-image: url("+u+");\r\n  background-position: center;\r\n  border: 1px solid rgba(255,0,0,0.3);\r\n}\r\n\r\n.missed {\r\n  background-color: rgba(0, 110, 255, 0.7);\r\n  background-image: url("+p+");\r\n}\r\n\r\n/*Grid Related CSS*/\r\n#background\r\n{\r\n    z-index: -1;\r\n    position:absolute;\r\n    width: 99%;\r\n    height: 75%;\r\n    opacity: 0.5;\r\n}\r\n\r\n.glowText\r\n{\r\n    text-shadow:0px 0px 12px;;\r\n}\r\n.glowText-black\r\n{\r\n    text-shadow:0px 0px 2px black;;\r\n}\r\n\r\n.glowText-white\r\n{\r\n    text-shadow:0px 0px 2px white;\r\n}\r\n\r\n.text-center{\r\n    text-align: center;\r\n}\r\n.inline\r\n{\r\n    display: inline-block;\r\n}\r\n\r\n.splash\r\n{\r\n  position: absolute;\r\n  display:block;\r\n  margin:auto;\r\n  left: 50%;\r\n  margin-left: -180px;\r\n  top: 0;\r\n  height: 360px;\r\n  width: 360px;\r\n}\r\n\r\n\r\n#enemyCannon\r\n{\r\n    display: none;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    left: 50%;\r\n    margin-left: -250px;\r\n    top: 0;\r\n    width: 500px;\r\n    height: 500px;\r\n}\r\n\r\n#playerCannon\r\n{\r\n    display: none;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    left: 50%;\r\n    margin-left: -250px;\r\n    top: 0;\r\n    width: 500px;\r\n    height: 500px;\r\n}\r\n.cannonMissile\r\n{\r\n  display: none;\r\n  position: absolute;\r\n  top: 500%;\r\n  left: 50%;\r\n  margin-left: -60px;\r\n  pointer-events: none;\r\n  background-color: #000;\r\n  width: 120px;\r\n  opacity: 0.7;\r\n  padding-bottom: 120px;\r\n  box-shadow: 0px 0px 15px #000;\r\n  border-radius: 125px;\r\n  border-radius: 50%;\r\n  transform-origin: center;\r\n}\r\n.missileFalling\r\n{\r\n    animation-name: missile;\r\n    animation-duration: 1.4s;\r\n    animation-iteration-count: 1;\r\n    animation-timing-function: ease-in;\r\n    animation-fill-mode: forwards;\r\n}\r\n.cannon\r\n{\r\n    animation-name: cannonFire;\r\n    animation-duration: 2s;\r\n    animation-iteration-count: 1;\r\n    animation-timing-function: ease-in;\r\n    animation-fill-mode: forwards;\r\n}\r\n.shake\r\n{\r\n    position: relative;\r\n    overflow-x: hidden;\r\n    animation-name: screenShake;\r\n    animation-duration: 0.75s;\r\n    animation-iteration-count: 1;\r\n    animation-timing-function: linear;\r\n}\r\n.flash\r\n{\r\n    animation-name: screenFlash;\r\n    animation-duration: 1s;\r\n    animation-iteration-count: 1;\r\n    animation-timing-function: linear;\r\n}\r\n/*Animations*/\r\n\r\n@keyframes backgroundScroll {\r\nfrom {background-position: 0 0;}\r\nto {background-position: -1000px -1000px;}\r\n}\r\n       \r\n@keyframes cannonFire {\r\n    15%   {height: 400px;top:180px;}\r\n    30%  {height: 600px;top:-100px;}\r\n    45%  {height: 500px;top:0px;}\r\n    100% {opacity: 0;}\r\n}\r\n       \r\n@keyframes screenShake {\r\n    15%   {left: 0px;top:50px;}\r\n    30%  {left: 30px;top:0px;}\r\n    45%  {left: 0px;bottom:35px;}\r\n    60%  {left: 0px;bottom:0px;}\r\n}\r\n      \r\n@keyframes screenFlash {\r\n    50%   {background-color: rgba(255,180,25,1)!important;}\r\n    100%   {background-color: rgba(0,0,0,0.8);}\r\n}\r\n       \r\n@keyframes missile {\r\n    0%   {transform: scale(1);}\r\n    50%   {transform: scale(5);}\r\n    100%  {transform: scale(1);}\r\n}\r\n",""]),n.exports=r},function(n,r,e){"use strict";n.exports=function(n,r){return r||(r={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,r,e){"use strict";e.r(r),r.default=e.p+"ffec46aacd8ed2ae48f28c6e25742343.jpg"},function(n,r,e){"use strict";e.r(r),r.default=e.p+"e8c96a8f6b9712d05549a63b130ac43e.png"},function(n,r,e){"use strict";e.r(r),r.default=e.p+"552d15290ffebb0ba67639a1937ed176.gif"},function(n,r,e){var t=e(1),a=e(10);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},o=(t(a,i),a.locals?a.locals:{});n.exports=o},function(n,r,e){(r=e(2)(!1)).push([n.i,"/*Custom Modal*/\r\n.aa-modal{\r\n  pointer-events: none;\r\n  position:fixed;\r\n  display: none;\r\n  z-index: 10;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding-top: 5%;\r\n  left: 0;\r\n  top: 0;\r\n  margin: auto;\r\n  overflow: hidden;\r\n  background-color: #000;\r\n  background-color: rgba(0,0,0,0.8);\r\n}\r\n\r\n.hide { display: none!important; }\r\n.show { display: block!important; }\r\n\r\n/*Animations*/\r\n.fade\r\n{\r\n    -webkit-animation-name: fade;\r\n    -webkit-animation-duration: 2s;\r\n    -webkit-animation-fill-mode: forwards;\r\n    animation-name: fade;\r\n    animation-duration: 2s;   \r\n    animation-fill-mode: forwards;\r\n}\r\n.fade-5\r\n{\r\n    -webkit-animation-name: fade5;\r\n    -webkit-animation-duration: 5s;\r\n    -webkit-animation-fill-mode: forwards;\r\n    animation-name: fade5;\r\n    animation-duration: 5s;   \r\n    animation-fill-mode: forwards;\r\n}\r\n.fadein\r\n{\r\n    -webkit-animation-name: fadein;\r\n    -webkit-animation-duration: 1s;\r\n    -webkit-animation-fill-mode: forwards;\r\n    animation-name: fadein;\r\n    animation-duration: 1s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from{opacity: 0;}\r\n    to  {opacity: 1;}\r\n}\r\n@keyframes fadein {\r\n    from{opacity: 0;}\r\n    to  {opacity: 1;}\r\n}\r\n@-webkit-keyframes fade {\r\n    0%  {opacity: 0;}\r\n    50% {opacity: 1;}\r\n    100%{opacity: 0;}\r\n}\r\n@keyframes fade {\r\n    0%  {opacity: 0;}\r\n    50% {opacity: 1;}\r\n    100%{opacity: 0;}\r\n}\r\n@-webkit-keyframes fade5 {\r\n    0%  {opacity: 0;}\r\n    15% {opacity: 1;}\r\n    75% {opacity: 0.8;}\r\n    100%{opacity: 0;}\r\n}\r\n@keyframes fade5 {\r\n    0%  {opacity: 0;}\r\n    15% {opacity: 1;}\r\n    75% {opacity: 0.8;}\r\n    100%{opacity: 0;}\r\n}\r\n.aa-modal-content{\r\n  position: relative;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  font-size: 4em;\r\n  padding:25px;\r\n  outline:0;\r\n  color: white;\r\n  background-color: rgba(0,0,0,0);\r\n  width: auto;\r\n}\r\n\r\n",""]),n.exports=r},function(n,r,e){"use strict";e.r(r);e(3),e(9);var t=n=>{const r=Math.random().toString(36).substr(2,9);let e=n;return{id:r,length:n,hit:()=>{e-=1},isSunk:()=>e<=0}};class a{constructor(n=10){this.size=n,this.board=Array(n).fill(Array(n).fill()).map(n=>n.map(()=>({shipId:null,hit:!1}))),this.ships=[]}receiveAttack(n){const r=this.board[n.x][n.y];return r.hit?null:(r.hit=!0,r.shipId?(this.getShip(r.shipId).hit(),"hit"):"missed")}allShipsSunk(){return this.ships.every(n=>n.isSunk())}getShip(n){return this.ships.find(r=>r.id===n)}placeShip(n,r,e,t){if(r>this.size-1)return!1;if(e>this.size-1)return!1;if(n.length>this.size)return!1;if(!a.getShipOrientations().includes(t))return!1;const{finalX:i,finalY:o}=(()=>{switch(t){case"U":return{finalX:r,finalY:e-(n.length-1)};case"D":return{finalX:r,finalY:e+(n.length-1)};case"L":return{finalX:r-(n.length-1),finalY:e};default:return{finalX:r+(n.length-1),finalY:e}}})();if(i>this.size-1||i<0)return!1;if(o>this.size-1||o<0)return!1;const{startX:s,finishX:l}=r<i?{startX:r,finishX:i}:{startX:i,finishX:r},{startY:c,finishY:d}=e<o?{startY:e,finishY:o}:{startY:o,finishY:e};for(let n=s;n<=l;n+=1)for(let r=c;r<=d;r+=1)if(this.board[n][r].shipId)return!1;for(let r=s;r<=l;r+=1)for(let e=c;e<=d;e+=1)this.board[r][e].shipId=n.id,this.ships.push(n);return!0}placeAllShips(){a.getDefaultShips().forEach(n=>{let r=!1;do{const e=Math.floor(Math.random()*this.size),t=Math.floor(Math.random()*this.size),i=a.getShipOrientations()[Math.floor(4*Math.random())];r=this.placeShip(n,e,t,i)}while(!r)})}static getShipOrientations(){return["U","D","L","R"]}static getDefaultShips(){return[5,4,3,3,2].map(n=>t(n))}}var i=a;var o=class{constructor(n,r,e=10){this.player1={name:n,targetBoard:new i(e)},this.player2={name:r,targetBoard:new i(e)},this.turnsTaken=1,this.over=!1,this.cutscene=!1,this.transitionsEnabled=!0,this.winner=null,this.currentPlayer=this.player1}play(n){if(!this.over){const r=this.currentPlayer.targetBoard.receiveAttack(n);return this.currentPlayer.targetBoard.allShipsSunk()?(this.over=!0,this.winner=this.currentPlayer):"missed"===r&&(this.transitionsEnabled?setTimeout(()=>this.switchTurns(),5e3):this.switchTurns()),r}return null}switchTurns(){this.currentPlayer=this.currentPlayer===this.player1?this.player2:this.player1}},s=e.p+"61d02c50493f2b5dc6968396c4f5f527.png",l=e.p+"c8595a4dc2247ebb178671faf1e4851d.png",c=e(0),d=e.p+"3ee01c3566d3875da7c87af880baffad.gif";class u{constructor(n=10){this.size=n,this.game=new o("You","Enemy",n),this.game.player1.targetBoard.placeAllShips(),this.game.player2.targetBoard.placeAllShips(),this.playerBoardNode=document.getElementById("PlayerBoard"),this.enemyBoardNode=document.getElementById("EnemyBoard"),this.page=document.querySelector("body"),this.modal=document.querySelector(".aa-modal"),this.modalContent=document.querySelector(".aa-modal-content"),this.enemyMoves=[...Array(this.size**2).keys()],this.lastEnemyMove=null}run(n=!1,r=!0){this.game.transitionsEnabled=r,u.renderBoard(this.playerBoardNode,this.game.player2.targetBoard.board),u.renderBoard(this.enemyBoardNode,this.game.player1.targetBoard.board,!0,n),this.enemyBoardNode.childNodes.forEach(n=>{n.addEventListener("click",()=>{if(!this.game.over&&!this.game.cutscene&&this.game.currentPlayer===this.game.player1){const r=this.playerPlay(n);this.game.transitionsEnabled||"missed"!==r||this.enemyPlay(),this.game.over&&("You"===this.game.winner.name?this.gameOver("Congratulations, You Won!"):this.gameOver("You Lost all your Ships!"))}})})}SwitchTurns(){const{modal:n,modalContent:r,game:e}=this;let{turnsTaken:t}=e;const a=e.currentPlayer===e.player1?"Player":"Enemy";"Player"===a?(t+=1,this.enemyBoardNode.scrollIntoView({behavior:"smooth",block:"center"})):this.playerBoardNode.scrollIntoView({behavior:"smooth",block:"center"}),n.classList.remove("fade","fade-5"),n.classList.add("fade"),r.innerHTML=`<p class='glowText'>Round: ${t} </p><p class='glowText'>${a}'s Turn<p>`,setTimeout(()=>this.CloseModal(!0),2e3)}CloseModal(n){if(!this.game.over){const{modal:r,modalContent:e}=this;r.classList.toggle("show"),e.innerHTML="",n?this.enemyPlay():this.game.currentPlayer===this.game.player2&&setTimeout(()=>{this.enemyPlay()},100),this.game.cutscene=!1}}playerPlay(n){const{game:r}=this;if(r.currentPlayer!==r.player1)return null;const e=this.game.play(n.dataset);return e&&(r.transitionsEnabled?this.CannonFireTransitions(n,e):n.classList.add(e)),e}randomizeMove(){const n=Math.floor(Math.random()*this.enemyMoves.length);return this.enemyMoves[n]}enemyPlay(){const{game:n}=this,{lastEnemyMove:r}=this;if(n.currentPlayer!==n.player2)return;let e;r?(e=this.enemyMoves.find(n=>n===r+10||n===r-10||n===r-1||n===r+1),e?this.enemyMoves=this.enemyMoves.filter(n=>n!==e):(this.lastEnemyMove=null,e=this.randomizeMove(),this.enemyMoves=this.enemyMoves.filter(n=>n!==e))):(e=this.randomizeMove(),this.enemyMoves=this.enemyMoves.filter(n=>n!==e));const t={x:Math.floor(e/this.size),y:e%this.size},a=this.game.play(t),i=this.playerBoardNode.querySelector(`[data-x="${t.x}"][data-y="${t.y}"]`);n.transitionsEnabled?this.CannonFireTransitions(i,a):i.classList.add(a),"hit"===a&&(this.lastEnemyMove=e,this.game.transitionsEnabled||this.enemyPlay())}CannonFireTransitions(n,r){const{modal:e,page:t,modalContent:a,game:i}=this;clearInterval(this.timer),i.cutscene=!0,e.classList.remove("fade"),e.classList.add("fade-5"),e.classList.toggle("show"),a.innerHTML=`<img id='playerCannon' src='${s}'><img id='enemyCannon' src='${l}'><div class='cannonMissile missileFalling'></div>`;const o=document.getElementById("playerCannon"),u=document.getElementById("enemyCannon"),p=document.querySelector(".cannonMissile");i.currentPlayer===i.player1&&(o.classList.toggle("show"),o.classList.add("cannon")),i.currentPlayer===i.player2&&(u.classList.toggle("show"),u.classList.add("cannon")),this.timer=setTimeout(()=>{"missed"===r&&this.SwitchTurns(),"hit"===r&&this.CloseModal()},5e3),this.timer=setTimeout(()=>{t.classList.add("shake"),e.classList.add("flash")},500),this.timer=setTimeout(()=>{p.style.display="block"},1500),this.timer=setTimeout(()=>{n.classList.add(r),"missed"===r&&(a.innerHTML=`<img class='splash' src='${c.default}'>`),"hit"===r&&(a.innerHTML=`<img class='splash' src='${d}'>`),i.currentPlayer===i.player1&&o.classList.remove("cannon","show"),i.currentPlayer===i.player2&&u.classList.remove("cannon","show"),t.classList.remove("shake"),e.classList.remove("flash")},3e3)}static renderBoard(n,r,e=!1,t=!1){const a=["A","B","C","D","E","F","G","H","I","J"];r.forEach((i,o)=>{i.forEach((i,s)=>{const l=document.createElement("div");l.classList.add("cell"),l.setAttribute("data-x",o),l.setAttribute("data-y",s),l.textContent=`${a[o]}${s+1}`,(!e&&r[o][s].shipId||t&&r[o][s].shipId)&&l.classList.add("ship"),n.appendChild(l)})})}gameOver(n){const{modal:r,modalContent:e}=this;r.classList.remove("fade"),r.classList.add("fadein"),r.style.display="block",e.innerHTML=`<p class='glowText'>${n}</p><br>\n                            <button id='playAgainBtn' type='button' onclick='window.location.reload()' >Play Again?</button>`}}let p=!1,h=!0;const m=new u,f=document.querySelector("#MenuContainer"),g=document.querySelector("#WholeBoard"),b=document.querySelector("#ShowAll"),y=document.querySelector("#Transitions"),x=document.querySelector("#StartGame");b.addEventListener("click",()=>{p=!p;const n=p?"red":"grey";b.innerHTML=`Reveal Enemies <span class="text-${n}">(${p})</span>`}),y.addEventListener("click",()=>{h=!h;const n=h?"grey":"red";y.innerHTML=`Enable Transitions <span class="text-${n}">(${h})</span>`}),x.addEventListener("click",()=>{f.classList.toggle("hide"),g.classList.toggle("hide"),m.run(p,h)})}]);