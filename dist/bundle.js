/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/background_2.jpg */ \"./src/images/background_2.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../images/water.png */ \"./src/images/water.png\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../images/missed.gif */ \"./src/images/missed.gif\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\n// Module\nexports.push([module.i, \"html { box-sizing: border-box; }\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n* {\\r\\n  transition-duration: 0.25s;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-size:100%;\\r\\n  font-family:\\\"Trebuchet MS\\\", \\\"Lucida Grande\\\", \\\"Lucida Sans Unicode\\\", \\\"Lucida Sans\\\", Tahoma, sans-serif;\\r\\n  background-color: rgb(25,25,25);\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-position: center;\\r\\n  background-repeat: repeat;\\r\\n  background-attachment: fixed;\\r\\n}\\r\\n\\r\\n.authors {\\r\\n  font-family:  Tahoma, sans-serif;\\r\\n  font-size: 18px;\\r\\n  color: wheat;\\r\\n}\\r\\n\\r\\n#StartGame{\\r\\n  width:50%;\\r\\n  margin:0 auto;\\r\\n  padding:4px;\\r\\n  font-size:2em;\\r\\n  box-shadow: 2px 6px 18px rgba(0,0,0,0.5);\\r\\n}\\r\\n\\r\\n#header {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#header p {\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\n#header button {\\r\\n  font-size: 20px;\\r\\n  background: dodgerblue;\\r\\n  border: none;\\r\\n  border-radius: 10px;\\r\\n  padding: 10px;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n.center {\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.board-container {\\r\\n  text-align: center;\\r\\n}\\r\\n.divider{\\r\\n  width:100%;\\r\\n  height:40px;\\r\\n  background-color:rgba(50,50,50,0.3);\\r\\n  box-shadow:0px 0px 52px;  \\r\\n  margin: 40px 0;\\r\\n}\\r\\n.padtop-1{padding-top: 1em;}\\r\\n\\r\\n.text-white{color: #FFF;}\\r\\n\\r\\n#PlayerBoard, #EnemyBoard {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  max-width: 580px;\\r\\n  outline: 1px solid black;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-repeat: repeat;\\r\\n  background-color:rgb(50,90,180);\\r\\n  background-attachment: fixed;\\r\\n  border: 2px solid white;\\r\\n  border-radius: 12px 12px;\\r\\n  animation: backgroundScroll 80s linear infinite;\\r\\n}\\r\\n\\r\\n.cell {\\r\\n  position: relative;\\r\\n  flex: 1 0 9.5%;\\r\\n  width: 50px;\\r\\n  height: 54px;\\r\\n  line-height: 54px;\\r\\n  outline: 1px solid rgba(0,0,0,0.2);\\r\\n  cursor: pointer;\\r\\n  text-align: center;\\r\\n  color: rgba(0,0,0,0.25);\\r\\n  font-weight: bold;\\r\\n  background-size: cover;\\r\\n}\\r\\n.cell:before{ position: absolute;left: 0; width: 100%; height: 100%; content: '';}\\r\\n.cell:hover:before{\\r\\n  border-style: solid;\\r\\n  border-color: rgba(255, 204, 0, 0.3);\\r\\n  background-color: rgba(255,255,255,0.6)!important;\\r\\n}\\r\\n\\r\\n.ship{\\r\\n  border: 1px solid #ffbf00;\\r\\n  background-color: rgba(255, 128, 0, 0.8);\\r\\n}\\r\\n\\r\\n.hit {\\r\\n  background-color: rgba(0, 0, 0, 0.6);\\r\\n  border: 1px solid darkred;\\r\\n}\\r\\n\\r\\n.missed {\\r\\n  background-color: rgba(0, 110, 255, 0.7);\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n}\\r\\n\\r\\n/*Animations*/\\r\\n@keyframes backgroundScroll {\\r\\nfrom {background-position: 0 0;}\\r\\nto {background-position: -1000px -1000px;}\\r\\n}\\r\\n\\r\\n/*Grid Related CSS*/\\r\\n#background\\r\\n{\\r\\n    z-index: -1;\\r\\n    position:absolute;\\r\\n    width: 99%;\\r\\n    height: 75%;\\r\\n    opacity: 0.5;\\r\\n}\\r\\n\\r\\n.glowText\\r\\n{\\r\\n    text-shadow:0px 0px 12px;;\\r\\n}\\r\\n.glowText-black\\r\\n{\\r\\n    text-shadow:0px 0px 2px black;;\\r\\n}\\r\\n\\r\\n.glowText-white\\r\\n{\\r\\n    text-shadow:0px 0px 2px white;\\r\\n}\\r\\n\\r\\n.text-center{\\r\\n    text-align: center;\\r\\n}\\r\\n.inline\\r\\n{\\r\\n    display: inline-block;\\r\\n}\\r\\n\\r\\n.splash\\r\\n{\\r\\n    display:block;\\r\\n    margin:auto;\\r\\n    height: 100%;\\r\\n    width: auto;\\r\\n}\\r\\n\\r\\n\\r\\n#enemyCannon\\r\\n{\\r\\n    display: none;\\r\\n    position: absolute;\\r\\n    margin: 0 auto;\\r\\n    pointer-events: none;\\r\\n    left: 32.5%;\\r\\n    top: 200px;\\r\\n    width: 500px;\\r\\n    height: 500px;\\r\\n}\\r\\n\\r\\n#playerCannon\\r\\n{\\r\\n    display: none;\\r\\n    position: absolute;\\r\\n    margin: 0 auto;\\r\\n    pointer-events: none;\\r\\n    left: 32.5%;\\r\\n    top: 200px;\\r\\n    width: 500px;\\r\\n    height: 500px;\\r\\n}\\r\\n.cannonMissile\\r\\n{\\r\\n  display: none;\\r\\n  position: absolute;\\r\\n  margin: 0 auto;\\r\\n  pointer-events: none;\\r\\n  background-color: #000;\\r\\n  left: 45%;\\r\\n  top: 300px;\\r\\n  width: 120px;\\r\\n  opacity: 0.7;\\r\\n  padding-bottom: 120px;\\r\\n  box-shadow: 0px 0px 15px #000;\\r\\n  -webkit-box-shadow: 0px 0px 20px #000;\\r\\n  border-radius: 125px;\\r\\n  border-radius: 50%;\\r\\n  transform-origin: center;\\r\\n}\\r\\n.missileFalling\\r\\n{\\r\\n    -webkit-animation-name: missile;\\r\\n    -webkit-animation-duration: 1.4s;\\r\\n    -webkit-animation-iteration-count: 1;\\r\\n    -webkit-animation-timing-function: ease-in;\\r\\n    -webkit-animation-fill-mode: forwards;\\r\\n    animation-name: missile;\\r\\n    animation-duration: 1.4s;\\r\\n    animation-iteration-count: 1;\\r\\n    animation-timing-function: ease-in;\\r\\n    animation-fill-mode: forwards;\\r\\n}\\r\\n.cannon\\r\\n{\\r\\n    -webkit-animation-name: cannonFire;\\r\\n    -webkit-animation-duration: 2s;\\r\\n    -webkit-animation-iteration-count: 1;\\r\\n    -webkit-animation-timing-function: ease-in;\\r\\n    -webkit-animation-fill-mode: forwards;\\r\\n    animation-name: cannonFire;\\r\\n    animation-duration: 2s;\\r\\n    animation-iteration-count: 1;\\r\\n    animation-timing-function: ease-in;\\r\\n    animation-fill-mode: forwards;\\r\\n}\\r\\n.shake\\r\\n{\\r\\n    position: relative;\\r\\n    overflow-x: hidden;\\r\\n    -webkit-animation-name: screenShake;\\r\\n    -webkit-animation-duration: 0.75s;\\r\\n    -webkit-animation-iteration-count: 1;\\r\\n    -webkit-animation-timing-function: linear;\\r\\n    animation-name: screenShake;\\r\\n    animation-duration: 0.75s;\\r\\n    animation-iteration-count: 1;\\r\\n    animation-timing-function: linear;\\r\\n}\\r\\n.flash\\r\\n{\\r\\n    -webkit-animation-name: screenFlash;\\r\\n    -webkit-animation-duration: 1s;\\r\\n    -webkit-animation-iteration-count: 1;\\r\\n    -webkit-animation-timing-function: linear;\\r\\n    animation-name: screenFlash;\\r\\n    animation-duration: 1s;\\r\\n    animation-iteration-count: 1;\\r\\n    animation-timing-function: linear;\\r\\n}\\r\\n/*Animations*/\\r\\n@-webkit-keyframes cannonFire {\\r\\n    15%   {height: 400px;top:380px;}\\r\\n    30%  {height: 600px;top:180px;}\\r\\n    45%  {height: 500px;top:200px;}\\r\\n    100% {opacity: 0;}\\r\\n}\\r\\n        \\r\\n@keyframes cannonFire {\\r\\n    15%   {height: 400px;top:380px;}\\r\\n    30%  {height: 600px;top:100px;}\\r\\n    45%  {height: 500px;top:200px;}\\r\\n    100% {opacity: 0;}\\r\\n}\\r\\n\\r\\n@-webkit-keyframes screenShake {\\r\\n    15%   {left: 0px;top:50px;}\\r\\n    30%  {left: 30px;top:0px;}\\r\\n    45%  {left: 0px;bottom:35px;}\\r\\n    60%  {left: 0px;bottom:0px;}\\r\\n}\\r\\n        \\r\\n@keyframes screenShake {\\r\\n    15%   {left: 0px;top:50px;}\\r\\n    30%  {left: 30px;top:0px;}\\r\\n    45%  {left: 0px;bottom:35px;}\\r\\n    60%  {left: 0px;bottom:0px;}\\r\\n}\\r\\n@-webkit-keyframes screenFlash {\\r\\n    50%   {background-color: rgba(255,180,25,1)!important;}\\r\\n    100%   {background-color: rgba(0,0,0,0.8);}\\r\\n}\\r\\n        \\r\\n@keyframes screenFlash {\\r\\n    50%   {background-color: rgba(255,180,25,1)!important;}\\r\\n    100%   {background-color: rgba(0,0,0,0.8);}\\r\\n}\\r\\n@-webkit-keyframes missile {\\r\\n    0%   {transform: scale(1);}\\r\\n    50%   {transform: scale(5);}\\r\\n    100%  {transform: scale(1);}\\r\\n}\\r\\n        \\r\\n@keyframes missile {\\r\\n    0%   {transform: scale(1);}\\r\\n    50%   {transform: scale(5);}\\r\\n    100%  {transform: scale(1);}\\r\\n}\\r\\n.grid\\r\\n{\\r\\n    margin: 0 auto;\\r\\n    padding: 8px;\\r\\n    border: 2px solid white;\\r\\n    border-radius: 12px 12px;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n    background-repeat: repeat;\\r\\n    background-color:rgb(50,90,180);\\r\\n    -webkit-animation: backgroundScroll 80s linear infinite;\\r\\n    animation: backgroundScroll 80s linear infinite;\\r\\n    width: 35%;\\r\\n    height: 35%;\\r\\n    box-shadow: 2px 4px 12px black;\\r\\n}\\r\\n\\r\\n\\r\\n/*Animations*/\\r\\n@-webkit-keyframes backgroundScroll {\\r\\nfrom {background-position: 0 0;}\\r\\nto {background-position: -1000px -1000px;}\\r\\n}\\r\\n        \\r\\n@keyframes backgroundScroll {\\r\\nfrom {background-position: 0 0;}\\r\\nto {background-position: -1000px -1000px;}\\r\\n}\\r\\n\\r\\n/*Console Related CSS*/\\r\\n.Menu\\r\\n{\\r\\n    background-color: rgba(0,0,0,0);\\r\\n    width: 100%;\\r\\n    border-radius: 35px 35px;\\r\\n    border-bottom-left-radius: 35px;\\r\\n    border-bottom-right-radius: 35px;\\r\\n    box-shadow: 4px 6px 12px black;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n\\r\\n#ShipCounter\\r\\n{\\r\\n  position: relative;\\r\\n  text-align: center;\\r\\n  color: black;\\r\\n  width: 30%;\\r\\n  margin: 0 auto;\\r\\n  font-size: 1.4em;\\r\\n  padding-top: 0.5em;\\r\\n  padding-bottom: 0.5em;\\r\\n  background-color: aliceblue;\\r\\n  border: solid rgba(75,75,75,0.8);\\r\\n  border-radius: 5px;\\r\\n  border-top-left-radius: 25px;\\r\\n  border-top-right-radius: 25px;\\r\\n  box-shadow: 0px 0px 12px aliceblue;\\r\\n}\\r\\n\\r\\n#Console\\r\\n{\\r\\n    background-color: aliceblue;\\r\\n    height:280px;\\r\\n    width: 60%;\\r\\n    border:2px solid white;\\r\\n    border-bottom-left-radius: 35px;\\r\\n    border-bottom-right-radius: 35px;\\r\\n    box-shadow: 4px 6px 12px black;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n\\r\\n#ConsoleText\\r\\n{\\r\\n    height: 70%;\\r\\n    overflow-y: auto;\\r\\n    padding-left: 10px;\\r\\n    border-top: 1px solid black;\\r\\n}\\r\\n\\r\\n\\r\\n.bottombar\\r\\n{\\r\\n    border-bottom:6px solid grey;\\r\\n}\\r\\n.bottombar-black\\r\\n{\\r\\n    border-bottom:6px solid black;\\r\\n}\\r\\n.bottombar-2\\r\\n{\\r\\n    border-bottom:2px solid grey;\\r\\n}\\r\\n.bottombar-2-black\\r\\n{\\r\\n    border-bottom:2px solid black;\\r\\n}\\r\\n.GameTitle\\r\\n{\\r\\n    font-family:fantasy;\\r\\n    text-align:center;\\r\\n    font-size: 5em;\\r\\n    letter-spacing: 3px;\\r\\n    color: orange;\\r\\n    margin-top:0.4em;\\r\\n    border-radius: 15px 35px;\\r\\n}\\r\\n.consoleTitle\\r\\n{\\r\\n    font-family:fantasy;\\r\\n    text-align:center;\\r\\n    margin-top:0.4em;\\r\\n    border-radius: 15px 35px;\\r\\n}\\r\\n.menuOption\\r\\n{\\r\\n    font-family:fantasy;\\r\\n    font-size: 1.8em;\\r\\n    font-weight: 100;\\r\\n    color: cadetblue;\\r\\n    text-align:center;\\r\\n    margin-top:0.4em;\\r\\n    border-radius: 15px 15px;\\r\\n}\\r\\n.menuOption:hover\\r\\n{\\r\\n    color:darkkhaki;\\r\\n    cursor:pointer;\\r\\n}\\r\\n.Hit\\r\\n{\\r\\n    color:rgb(255,175,25);\\r\\n    font-variant: small-caps;\\r\\n    font-size: 1em;\\r\\n    font-weight: 600;\\r\\n}\\r\\n.Miss\\r\\n{\\r\\n    color:darkgrey;\\r\\n    font-variant: small-caps;\\r\\n    font-size: 1em;\\r\\n    font-weight: 400;\\r\\n    font-style: italic;\\r\\n}\\r\\n.Sink\\r\\n{\\r\\n    color:black;\\r\\n    font-variant: small-caps;\\r\\n    font-size: 1em;\\r\\n    font-weight: 600;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*Custom Modal*/\\r\\n.aa-modal{\\r\\n    z-index: 97;\\r\\n    display: none;\\r\\n    position: fixed;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    margin: 0 auto;\\r\\n    padding-top: 5%; \\r\\n    overflow: hidden;\\r\\n    background-color: #000;\\r\\n    background-color: rgba(0,0,0,0.8);\\r\\n}\\r\\n\\r\\n.show { display: block; }\\r\\n\\r\\n/*Animations*/\\r\\n.fade\\r\\n{\\r\\n    -webkit-animation-name: fade;\\r\\n    -webkit-animation-duration: 2s;\\r\\n    -webkit-animation-fill-mode: forwards;\\r\\n    animation-name: fade;\\r\\n    animation-duration: 2s;   \\r\\n    animation-fill-mode: forwards;\\r\\n}\\r\\n.fade-5\\r\\n{\\r\\n    -webkit-animation-name: fade5;\\r\\n    -webkit-animation-duration: 5s;\\r\\n    -webkit-animation-fill-mode: forwards;\\r\\n    animation-name: fade5;\\r\\n    animation-duration: 5s;   \\r\\n    animation-fill-mode: forwards;\\r\\n}\\r\\n.fadein\\r\\n{\\r\\n    -webkit-animation-name: fadein;\\r\\n    -webkit-animation-duration: 1s;\\r\\n    -webkit-animation-fill-mode: forwards;\\r\\n    animation-name: fadein;\\r\\n    animation-duration: 1s;\\r\\n    animation-fill-mode: forwards;\\r\\n}\\r\\n\\r\\n@-webkit-keyframes fadein {\\r\\n    from{opacity: 0;}\\r\\n    to  {opacity: 1;}\\r\\n}\\r\\n@keyframes fadein {\\r\\n    from{opacity: 0;}\\r\\n    to  {opacity: 1;}\\r\\n}\\r\\n@-webkit-keyframes fade {\\r\\n    0%  {opacity: 0;}\\r\\n    50% {opacity: 1;}\\r\\n    100%{opacity: 0;}\\r\\n}\\r\\n@keyframes fade {\\r\\n    0%  {opacity: 0;}\\r\\n    50% {opacity: 1;}\\r\\n    100%{opacity: 0;}\\r\\n}\\r\\n@-webkit-keyframes fade5 {\\r\\n    0%  {opacity: 0;}\\r\\n    15% {opacity: 1;}\\r\\n    75% {opacity: 0.8;}\\r\\n    100%{opacity: 0;}\\r\\n}\\r\\n@keyframes fade5 {\\r\\n    0%  {opacity: 0;}\\r\\n    15% {opacity: 1;}\\r\\n    75% {opacity: 0.8;}\\r\\n    100%{opacity: 0;}\\r\\n}\\r\\n.aa-modal-content{\\r\\n    text-align: center;\\r\\n    margin: 0 auto;\\r\\n    font-size: 4em;\\r\\n    padding:25px;\\r\\n    outline:0;\\r\\n    color: white;\\r\\n    background-color: rgba(0,0,0,0);\\r\\n    width: auto;\\r\\n}\\r\\n.aa-modal-content-portrait{\\r\\n    margin: auto;\\r\\n    padding:25px;\\r\\n    outline:0;\\r\\n    border: 1px solid #888;\\r\\n    color: white;\\r\\n    background-color: white;\\r\\n    background-color: rgba(0,0,0,0);\\r\\n    width: auto;\\r\\n    height: 90%;\\r\\n}\\r\\n.aa-modal-content-landscape{\\r\\n    margin: auto;\\r\\n    padding:25px;\\r\\n    outline:0;\\r\\n    border: 1px solid #888;\\r\\n    background-color: white;\\r\\n    width: 70%;\\r\\n    height: auto;\\r\\n}\\r\\n@media only screen and (max-width: 768px) and (orientation: portrait) {\\r\\n    .aa-modal-content{\\r\\n        margin: auto;\\r\\n        padding:10px;\\r\\n        outline:0;\\r\\n        border: 1px solid #888;\\r\\n        background-color: white;\\r\\n        width: auto;\\r\\n        height: auto;\\r\\n    }\\r\\n    .aa-modal-content-landscape{\\r\\n        margin: auto;\\r\\n        padding:10px;\\r\\n        outline:0;\\r\\n        border: 1px solid #888;\\r\\n        background-color: white;\\r\\n        width: 100%;\\r\\n        height: auto;\\r\\n    }\\r\\n    .aa-modal-content-portrait{\\r\\n        margin: auto;\\r\\n        padding:10px;\\r\\n        outline:0;\\r\\n        border: 1px solid #888;\\r\\n        background-color: white;\\r\\n        width: 50%;\\r\\n        height: auto;\\r\\n    }\\r\\n}\\r\\n@media only screen and (max-width: 700px) and (orientation: portrait){\\r\\n    .aa-modal-content{\\r\\n        margin: auto;\\r\\n        padding:10px;\\r\\n        outline:0;\\r\\n        border: 1px solid #888;\\r\\n        background-color: white;\\r\\n        width: 100%;\\r\\n        height: auto;\\r\\n    }\\r\\n    .aa-modal-content-portrait{\\r\\n        margin: auto;\\r\\n        padding:10px;\\r\\n        outline:0;\\r\\n        border: 1px solid #888;\\r\\n        background-color: white;\\r\\n        width: 95%;\\r\\n        height: auto;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 768px) and (orientation: landscape) {\\r\\n    .aa-modal-content{\\r\\n        margin: auto;\\r\\n        padding:10px;\\r\\n        outline:0;\\r\\n        border: 1px solid #888;\\r\\n        background-color: white;\\r\\n        width: auto;\\r\\n        height: 100%;\\r\\n    }\\r\\n    .aa-modal-content-landscape{\\r\\n        margin: auto;\\r\\n        padding:10px;\\r\\n        outline:0;\\r\\n        border: 1px solid #888;\\r\\n        background-color: white;\\r\\n        width: 100%;\\r\\n        height: auto;\\r\\n    }\\r\\n    .aa-modal-content-portrait{\\r\\n        margin: auto;\\r\\n        padding:10px;\\r\\n        outline:0;\\r\\n        border: 1px solid #888;\\r\\n        background-color: white;\\r\\n        width: auto;\\r\\n        height: 100%;\\r\\n    }\\r\\n}\\r\\n@media only screen and (max-width: 700px) and (orientation: landscape){\\r\\n    .aa-modal-content{\\r\\n        margin: auto;\\r\\n        padding:10px;\\r\\n        outline:0;\\r\\n        border: 1px solid #888;\\r\\n        background-color: white;\\r\\n        width: auto;\\r\\n        height: auto;\\r\\n    }\\r\\n    .aa-modal-content-portrait{\\r\\n        margin: auto;\\r\\n        padding:10px;\\r\\n        outline:0;\\r\\n        border: 1px solid #888;\\r\\n        background-color: white;\\r\\n        width: auto;\\r\\n        height: 100%;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/audio/audio.js":
/*!****************************!*\
  !*** ./src/audio/audio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//Sounds\r\n//const snd_gui_open = new Audio('./gui_open.wav');\r\n//const snd_fire = new Audio('./fx_fire.ogg');\r\n//const snd_fire2 = new Audio('./fx_fire2.ogg');\r\n//const snd_fire3 = new Audio('./fx_fire3.ogg');\r\n//const snd_Hit = new Audio('./fx_shipHit.wav');\r\n//const snd_Miss = new Audio('./fx_splash.wav');\r\n//const snd_shipDestroyed = new Audio('./fx_shipDestroyed.wav');\r\n//const snd_shipDestroyed2 = new Audio('./fx_shipDestroyed2.wav');\r\n//const snd_reload = new Audio('./fx_cannonReload.wav');\r\n//\r\n//const snd_music_fail = new Audio('./music_fail_trombone.wav');\r\n//const snd_music_fail2 = new Audio('./music_fail_trombone2.wav');\r\n \r\n\r\nfunction playSound(snd){\r\n  if (snd === 'fire'){\r\n//    audioPlayer.play('fx_fire.ogg');\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (playSound);\n\n//# sourceURL=webpack:///./src/audio/audio.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./modal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/modal.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/modal.css?");

/***/ }),

/***/ "./src/images/background_2.jpg":
/*!*************************************!*\
  !*** ./src/images/background_2.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ffec46aacd8ed2ae48f28c6e25742343.jpg\");\n\n//# sourceURL=webpack:///./src/images/background_2.jpg?");

/***/ }),

/***/ "./src/images/cannonDown.png":
/*!***********************************!*\
  !*** ./src/images/cannonDown.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c8595a4dc2247ebb178671faf1e4851d.png\");\n\n//# sourceURL=webpack:///./src/images/cannonDown.png?");

/***/ }),

/***/ "./src/images/missed.gif":
/*!*******************************!*\
  !*** ./src/images/missed.gif ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"8e541c86b36cd85d62b01b105de1c66e.gif\");\n\n//# sourceURL=webpack:///./src/images/missed.gif?");

/***/ }),

/***/ "./src/images/ship.png":
/*!*****************************!*\
  !*** ./src/images/ship.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"61d02c50493f2b5dc6968396c4f5f527.png\");\n\n//# sourceURL=webpack:///./src/images/ship.png?");

/***/ }),

/***/ "./src/images/water.png":
/*!******************************!*\
  !*** ./src/images/water.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e8c96a8f6b9712d05549a63b130ac43e.png\");\n\n//# sourceURL=webpack:///./src/images/water.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/modal.css */ \"./src/css/modal.css\");\n/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_modal_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/game */ \"./src/views/game.js\");\n\r\n\r\n\r\n\r\nconst app = new _views_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\napp.run();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/board.js":
/*!*****************************!*\
  !*** ./src/models/board.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/models/ship.js\");\n\r\n\r\nclass Board {\r\n  constructor(size = 10) {\r\n    this.size = size;\r\n    this.board = Array(size).fill(Array(size).fill())\r\n      .map(row => row.map(() => ({ shipId: null, hit: false })));\r\n    this.ships = [];\r\n  }\r\n\r\n  receiveAttack(coords) {\r\n    const cell = this.board[coords.x][coords.y];\r\n    if (!cell.hit) {\r\n      cell.hit = true;\r\n      if (cell.shipId) {\r\n        this.getShip(cell.shipId).hit();\r\n        return 'hit';\r\n      }\r\n      return 'missed';\r\n    }\r\n    return null;\r\n  }\r\n\r\n  allShipsSunk() {\r\n    return this.ships.every(ship => ship.isSunk());\r\n  }\r\n\r\n  getShip(shipId) {\r\n    return this.ships.find(ship => ship.id === shipId);\r\n  }\r\n\r\n  placeShip(ship, x, y, orientation) {\r\n    if (x > this.size - 1) { return false; }\r\n    if (y > this.size - 1) { return false; }\r\n    if (ship.length > this.size) { return false; }\r\n    if (!Board.getShipOrientations().includes(orientation)) { return false; }\r\n\r\n    // Final coordinates of the ship\r\n    const { finalX, finalY } = (() => {\r\n      switch (orientation) {\r\n        case 'U':\r\n          return { finalX: x, finalY: y - (ship.length - 1) };\r\n        case 'D':\r\n          return { finalX: x, finalY: y + (ship.length - 1) };\r\n        case 'L':\r\n          return { finalX: x - (ship.length - 1), finalY: y };\r\n        default:\r\n          return { finalX: x + (ship.length - 1), finalY: y };\r\n      }\r\n    })();\r\n\r\n    // Check if final coordinates are out of bounds\r\n    if (finalX > this.size - 1 || finalX < 0) { return false; }\r\n    if (finalY > this.size - 1 || finalY < 0) { return false; }\r\n\r\n    // Check the board for already placed ships\r\n    const { startX, finishX } = x < finalX\r\n      ? { startX: x, finishX: finalX }\r\n      : { startX: finalX, finishX: x };\r\n    const { startY, finishY } = y < finalY\r\n      ? { startY: y, finishY: finalY }\r\n      : { startY: finalY, finishY: y };\r\n\r\n    for (let i = startX; i <= finishX; i += 1) {\r\n      for (let j = startY; j <= finishY; j += 1) {\r\n        if (this.board[i][j].shipId) {\r\n          return false;\r\n        }\r\n      }\r\n    }\r\n\r\n    // Place the ship in the board\r\n    for (let i = startX; i <= finishX; i += 1) {\r\n      for (let j = startY; j <= finishY; j += 1) {\r\n        this.board[i][j].shipId = ship.id;\r\n        this.ships.push(ship);\r\n      }\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  placeAllShips() {\r\n    Board.getDefaultShips().forEach(ship => {\r\n      let placed = false;\r\n      do {\r\n        const randX = Math.floor(Math.random() * this.size);\r\n        const randY = Math.floor(Math.random() * this.size);\r\n        const randOrientation = Board.getShipOrientations()[Math.floor(Math.random() * 4)];\r\n        placed = this.placeShip(ship, randX, randY, randOrientation);\r\n      } while (!placed);\r\n    });\r\n  }\r\n\r\n  static getShipOrientations() {\r\n    return ['U', 'D', 'L', 'R'];\r\n  }\r\n\r\n  static getDefaultShips() {\r\n    return [5, 4, 3, 3, 2].map(size => Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(size));\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\r\n\n\n//# sourceURL=webpack:///./src/models/board.js?");

/***/ }),

/***/ "./src/models/game.js":
/*!****************************!*\
  !*** ./src/models/game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/models/board.js\");\n\r\n\r\nclass Game {\r\n  constructor(player1Name, player2Name, size = 10) {\r\n    this.player1 = { name: player1Name, targetBoard: new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](size) };\r\n    this.player2 = { name: player2Name, targetBoard: new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](size) };\r\n    this.over = false;\r\n    this.cutscene = false;\r\n    this.winner = null;\r\n    this.currentPlayer = this.player1;\r\n  }\r\n\r\n  play(coords) {\r\n    if (!this.over && !this.cutscene) {\r\n      const attackResult = this.currentPlayer.targetBoard.receiveAttack(coords);\r\n\r\n      if (this.currentPlayer.targetBoard.allShipsSunk()) {\r\n        this.over = true;\r\n        this.winner = this.currentPlayer;\r\n      } else if (attackResult === 'missed') {\r\n        this.switchTurns();\r\n      }\r\n\r\n      return attackResult;\r\n    }\r\n    return null;\r\n  }\r\n\r\n  switchTurns() {\r\n    this.currentPlayer = this.currentPlayer === this.player1\r\n      ? this.player2\r\n      : this.player1;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\r\n\n\n//# sourceURL=webpack:///./src/models/game.js?");

/***/ }),

/***/ "./src/models/ship.js":
/*!****************************!*\
  !*** ./src/models/ship.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// ShipFactory takes one argument, maxHP\r\n// maxHP determines the length of the ship\r\n// hp is set to equal maxHP and once a ship is hit()\r\n// 1 is subtracted from the hp of the ship\r\n\r\nconst Ship = (length) => {\r\n  const id = Math.random().toString(36).substr(2, 9);\r\n  let hp = length;\r\n  const isSunk = () => hp <= 0;\r\n  const hit = () => { hp -= 1; };\r\n\r\n  return {\r\n    id, length, hit, isSunk,\r\n  };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);\r\n\n\n//# sourceURL=webpack:///./src/models/ship.js?");

/***/ }),

/***/ "./src/views/game.js":
/*!***************************!*\
  !*** ./src/views/game.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/game */ \"./src/models/game.js\");\n/* harmony import */ var _images_ship_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/ship.png */ \"./src/images/ship.png\");\n/* harmony import */ var _images_cannonDown_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/cannonDown.png */ \"./src/images/cannonDown.png\");\n/* harmony import */ var _audio_audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../audio/audio */ \"./src/audio/audio.js\");\n\r\n\r\n\r\n\r\n\r\nclass GameView {\r\n  constructor(size = 10) {\r\n    this.size = size;\r\n    this.game = new _models_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('You', 'Enemy', size);\r\n    this.game.player1.targetBoard.placeAllShips();\r\n    this.game.player2.targetBoard.placeAllShips();\r\n    this.playerBoardNode = document.getElementById('PlayerBoard');\r\n    this.enemyBoardNode = document.getElementById('EnemyBoard');\r\n    this.page = document.querySelector('body');\r\n    this.modal = document.querySelector('.aa-modal');\r\n    this.modalContent = document.querySelector(\".aa-modal-content\");\r\n    this.turnsTaken = 0;\r\n    this.enemyMoves = [...Array(this.size ** 2).keys()];\r\n    this.initHeader();\r\n  }\r\n\r\n  run() {\r\n    GameView.renderBoard(this.playerBoardNode, this.game.player2.targetBoard.board);\r\n    GameView.renderBoard(this.enemyBoardNode, this.game.player1.targetBoard.board, true);\r\n\r\n    this.enemyBoardNode.childNodes.forEach(cell => {\r\n      cell.addEventListener('click', () => {\r\n        if (!this.game.over && !this.game.cutscene) {\r\n          const playerResult = this.playerPlay(cell);\r\n          if (playerResult === 'missed') {\r\n            let enemyResult = null;\r\n            do {\r\n              enemyResult = this.enemyPlay();\r\n            } while (enemyResult === 'hit' && !this.game.over && !this.game.cutscene);\r\n          }\r\n\r\n          if (this.game.over) {\r\n            if (this.game.winner.name === 'You') this.gameOver('Congratulations, you win!');\r\n            else {\r\n              this.gameOver('Uh oh, the Enemy wins!');\r\n            }\r\n          }\r\n        }\r\n      });\r\n    });\r\n  }\r\n  SwitchTurns(){\r\n    let {modal, modalContent, turnsTaken, game} = this;\r\n    const playerCannon = document.getElementById(\"playerCannon\");\r\n    const enemyCannon = document.getElementById(\"enemyCannon\");\r\n    if(game.currentPlayer===game.player2){\r\n      turnsTaken++\r\n      enemyCannon.classList.toggle(\"show\");\r\n      playerCannon.classList.toggle(\"show\");\r\n\r\n      modal.classList.remove(\"fade\",\"fade-5\");\r\n      modal.classList.add(\"fade\");\r\n      modal.classList.toggle(\"show\");\r\n      modalContent.innerHTML=\"<p class='glowText'>Round:\"+turnsTaken+\"</p><p class='glowText'>Player's Turn<p>\"\r\n      //snd_gui_open.play();\r\n      setTimeout(() => this.CloseModal(true), 2000);\r\n    }else{\r\n      playerCannon.classList.toggle(\"show\");\r\n      enemyCannon.classList.toggle(\"show\");\r\n      \r\n      modal.classList.remove(\"fade\",\"fade-5\");\r\n      modal.classList.add(\"fade\");\r\n      modal.classList.toggle(\"show\");\r\n      modalContent.innerHTML=\"<p class='glowText'>Round:\"+turnsTaken+\"</p><p class='glowText'>Enemy's Turn<p>\"\r\n      //snd_gui_open.play();\r\n      setTimeout(() => this.CloseModal(), 2000);\r\n    }\r\n  }\r\n  \r\n  CloseModal(Switch){\r\n    if(!this.game.over){\r\n      let {modal, modalContent, whosTurn} = this;\r\n      modal.classList.toggle(\"show\");\r\n      modalContent.innerHTML=`<img id='playerCannon' src='${_images_ship_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}'><img id='enemyCannon' src='${_images_cannonDown_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}'>`;\r\n\r\n//      if(!Switch && whosTurn===\"Enemy\"){AI();}\r\n      if(Switch){this.SwitchTurns();}\r\n    }\r\n  }\r\n  \r\n  playerPlay(cell) {\r\n    const result = this.game.play(cell.dataset);\r\n    if (result) { \r\n      let {modal, page, modalContent, game} = this;\r\n      game.cutscene = true;\r\n      modal.classList.remove(\"fade\");\r\n      modal.classList.add(\"fade-5\");\r\n      modal.classList.toggle(\"show\");\r\n      modalContent.innerHTML=`<img id='playerCannon' src='${_images_ship_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}'><img id='enemyCannon' src='${_images_cannonDown_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}'><div class='cannonMissile missileFalling'></div>`;\r\n      const playerCannon = document.getElementById(\"playerCannon\");\r\n      const enemyCannon = document.getElementById(\"enemyCannon\");\r\n      const missile = document.querySelector(\".cannonMissile\");\r\n      if(game.currentPlayer===game.player1)\r\n      {\r\n          playerCannon.classList.toggle(\"show\");\r\n          playerCannon.classList.add(\"cannon\");\r\n      }\r\n      if(game.currentPlayer===game.player2)\r\n      {\r\n          enemyCannon.classList.toggle(\"show\");\r\n          enemyCannon.classList.add(\"cannon\");\r\n      }\r\n      setTimeout(() => this.CloseModal(true), 5000);\r\n      //This occurs in line with the firing animation of the cannon\r\n      setTimeout(function(){\r\n          page.classList.add(\"shake\");\r\n          modal.classList.add(\"flash\");\r\n      },500);\r\n      //Displays the falling missile animation\r\n      setTimeout(function(){\r\n          missile.style.display=\"block\";\r\n      },1500);\r\n      \r\n      setTimeout(function(){\r\n        cell.classList.add(result); \r\n        if(game.currentPlayer===game.player1){playerCannon.classList.remove(\"cannon\");}\r\n        if(game.currentPlayer===game.player2){enemyCannon.classList.remove(\"cannon\");}\r\n        page.classList.remove(\"shake\");\r\n        modal.classList.remove(\"flash\");\r\n        game.cutscene = false;\r\n      },3000);\r\n    }\r\n\r\n    return result;\r\n  }\r\n\r\n  enemyPlay() {\r\n    const move = this.enemyMoves.splice(Math.floor(Math.random() * this.enemyMoves.length), 1)[0];\r\n    const coords = { x: Math.floor(move / this.size), y: move % this.size };\r\n    const result = this.game.play(coords);\r\n    const cell = this.playerBoardNode\r\n      .querySelector(`[data-x=\"${coords.x}\"][data-y=\"${coords.y}\"]`);\r\n    cell.classList.add(result);\r\n\r\n    return result;\r\n  }\r\n\r\n  static renderBoard(boardNode, board, enemy = false) {\r\n    board.forEach((row, i) => {\r\n      row.forEach((cell, j) => {\r\n        const cellNode = document.createElement('div');\r\n        cellNode.classList.add('cell');\r\n        cellNode.setAttribute('data-x', i);\r\n        cellNode.setAttribute('data-y', j);\r\n        cellNode.textContent=i+j;\r\n        if (!enemy && board[i][j].shipId) {\r\n          cellNode.classList.add('ship');\r\n        }\r\n        boardNode.appendChild(cellNode);\r\n      });\r\n    });\r\n  }\r\n\r\n  initHeader() {\r\n    const headerNode = document.getElementById('header');\r\n    this.messageContainer = document.createElement('div');\r\n    this.messageContainer.classList.toggle('hidden');\r\n    this.message = document.createElement('p');\r\n    const button = document.createElement('button');\r\n    button.innerHTML = 'Play again?';\r\n    button.addEventListener('click', () => { window.location.reload(); });\r\n    this.messageContainer.appendChild(this.message);\r\n    this.messageContainer.appendChild(button);\r\n\r\n    headerNode.appendChild(this.messageContainer);\r\n  }\r\n\r\n  gameOver(message) {\r\n    this.message.innerHTML = message;\r\n    this.messageContainer.classList.toggle('hidden');\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\r\n\n\n//# sourceURL=webpack:///./src/views/game.js?");

/***/ })

/******/ });