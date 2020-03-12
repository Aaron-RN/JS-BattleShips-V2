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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/background_2.jpg */ \"./src/images/background_2.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../images/water.png */ \"./src/images/water.png\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../images/slowburn.gif */ \"./src/images/slowburn.gif\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../images/missed.gif */ \"./src/images/missed.gif\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\n// Module\nexports.push([module.i, \"html { box-sizing: border-box; }\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n* {\\r\\n  transition-duration: 0.25s;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-size:100%;\\r\\n  font-family:\\\"Trebuchet MS\\\", \\\"Lucida Grande\\\", \\\"Lucida Sans Unicode\\\", \\\"Lucida Sans\\\", Tahoma, sans-serif;\\r\\n  background-color: rgb(25,25,25);\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-position: center;\\r\\n  background-repeat: repeat;\\r\\n  background-attachment: fixed;\\r\\n}\\r\\n\\r\\nh2 { margin: 6px 0;}\\r\\n\\r\\n.authors {\\r\\n  font-family:  Tahoma, sans-serif;\\r\\n  font-size: 18px;\\r\\n  color: wheat;\\r\\n}\\r\\n\\r\\n#StartGame{\\r\\n  width:50%;\\r\\n  margin:0 auto;\\r\\n  padding:12px;\\r\\n  font-size:2.5em;\\r\\n  box-shadow: 2px 6px 18px rgba(0,0,0,0.5);\\r\\n}\\r\\n\\r\\n#playAgainBtn{ \\r\\n  pointer-events: all;\\r\\n  cursor: pointer;\\r\\n  font-size: 5vw;\\r\\n  color: aliceblue;\\r\\n  border: 8px solid #FFF;\\r\\n  border-radius: 8px;\\r\\n  background: #b8e675;\\r\\n}\\r\\n\\r\\n.center {\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.padt-2 {padding-top: 2em;}\\r\\n.pad-12 {padding: 12px;}\\r\\n.mb-2 {margin-bottom: 2em;}\\r\\n\\r\\n.bottombar\\r\\n{\\r\\n    border-bottom:6px solid grey;\\r\\n}\\r\\n.bottombar-black\\r\\n{\\r\\n    border-bottom:6px solid black;\\r\\n}\\r\\n.bottombar-2\\r\\n{\\r\\n    border-bottom:2px solid grey;\\r\\n}\\r\\n.bottombar-2-black\\r\\n{\\r\\n    border-bottom:2px solid black;\\r\\n    border-radius: 15px 35px;\\r\\n}\\r\\n/*Console Related CSS*/\\r\\n.GameTitle\\r\\n{\\r\\n  font-family:fantasy;\\r\\n  text-align:center;\\r\\n  font-size: 5em;\\r\\n  letter-spacing: 3px;\\r\\n  color: orange;\\r\\n  margin-top:0.4em;\\r\\n}\\r\\n\\r\\n.menuHeader{\\r\\n  width:55%;\\r\\n  padding-top:3em;\\r\\n  margin:0 auto;\\r\\n}\\r\\n\\r\\n.Menu\\r\\n{\\r\\n  padding-top: 1em;\\r\\n  padding-bottom: 1em;\\r\\n  width: 40vw;\\r\\n  background-color: rgba(0,0,0,0);\\r\\n  border-radius: 35px 35px;\\r\\n  border-bottom-left-radius: 35px;\\r\\n  border-bottom-right-radius: 35px;\\r\\n  box-shadow: 4px 6px 12px black;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.menuOption\\r\\n{\\r\\n  font-family:fantasy;\\r\\n  font-size: 2em;\\r\\n  font-weight: 100;\\r\\n  color: cadetblue;\\r\\n  text-align:center;\\r\\n  margin-top:0.4em;\\r\\n  border-radius: 15px 15px;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n.menuOption:hover\\r\\n{\\r\\n    color:darkkhaki;\\r\\n    cursor:pointer;\\r\\n}\\r\\n\\r\\n.ShipCounter\\r\\n{\\r\\n  position: relative;\\r\\n  text-align: center;\\r\\n  color: black;\\r\\n  width: 30%;\\r\\n  margin: 0 auto;\\r\\n  font-size: 1.4em;\\r\\n  padding-top: 0.5em;\\r\\n  padding-bottom: 0.5em;\\r\\n  background-color: aliceblue;\\r\\n  border: solid rgba(75,75,75,0.8);\\r\\n  border-radius: 5px;\\r\\n  border-top-left-radius: 25px;\\r\\n  border-top-right-radius: 25px;\\r\\n  box-shadow: 0px 0px 12px aliceblue;\\r\\n}\\r\\n\\r\\n.board-container {\\r\\n  text-align: center;\\r\\n}\\r\\n.divider{\\r\\n  width:100%;\\r\\n  height:40px;\\r\\n  background-color:rgba(50,50,50,0.3);\\r\\n  box-shadow:0px 0px 52px;  \\r\\n  margin: 40px 0;\\r\\n}\\r\\n\\r\\n.text-white{color: #FFF;}\\r\\n.text-red{color: #A22;}\\r\\n.text-grey{color: #888;}\\r\\n\\r\\n#PlayerBoard, #EnemyBoard {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  max-width: 640px;\\r\\n  outline: 1px solid black;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-repeat: repeat;\\r\\n  background-color:rgb(50,90,180);\\r\\n  background-attachment: fixed;\\r\\n  border: 2px solid white;\\r\\n  border-radius: 12px 12px;\\r\\n  animation: backgroundScroll 80s linear infinite;\\r\\n}\\r\\n\\r\\n.cell {\\r\\n  position: relative;\\r\\n  flex: 1 0 9.5%;\\r\\n  width: 50px;\\r\\n  height: 62px;\\r\\n  line-height: 54px;\\r\\n  outline: 1px solid rgba(0,0,0,0.1);\\r\\n  cursor: pointer;\\r\\n  text-align: center;\\r\\n  color: rgba(0,0,0,0.20);\\r\\n  font-weight: bold;\\r\\n  background-size: cover;\\r\\n}\\r\\n.cell:before{ position: absolute;left: 0; width: 100%; height: 100%; content: '';}\\r\\n.cell:hover:before{\\r\\n  border-style: solid;\\r\\n  border-color: rgba(255, 204, 0, 0.3);\\r\\n  background-color: rgba(255,255,255,0.6)!important;\\r\\n}\\r\\n\\r\\n.ship{\\r\\n  border: 1px solid #ffbf00;\\r\\n  background-color: rgba(255, 128, 0, 0.8);\\r\\n}\\r\\n\\r\\n.hit {\\r\\n  background-color: rgba(0, 0, 0, 0.6);\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n  background-position: center;\\r\\n  border: 1px solid rgba(255,0,0,0.3);\\r\\n}\\r\\n\\r\\n.missed {\\r\\n  background-color: rgba(0, 110, 255, 0.7);\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\r\\n}\\r\\n\\r\\n/*Grid Related CSS*/\\r\\n#background\\r\\n{\\r\\n    z-index: -1;\\r\\n    position:absolute;\\r\\n    width: 99%;\\r\\n    height: 75%;\\r\\n    opacity: 0.5;\\r\\n}\\r\\n\\r\\n.glowText\\r\\n{\\r\\n    text-shadow:0px 0px 12px;;\\r\\n}\\r\\n.glowText-black\\r\\n{\\r\\n    text-shadow:0px 0px 2px black;;\\r\\n}\\r\\n\\r\\n.glowText-white\\r\\n{\\r\\n    text-shadow:0px 0px 2px white;\\r\\n}\\r\\n\\r\\n.text-center{\\r\\n    text-align: center;\\r\\n}\\r\\n.inline\\r\\n{\\r\\n    display: inline-block;\\r\\n}\\r\\n\\r\\n.splash\\r\\n{\\r\\n  position: absolute;\\r\\n  display:block;\\r\\n  margin:auto;\\r\\n  left: 50%;\\r\\n  margin-left: -180px;\\r\\n  top: 0;\\r\\n  height: 360px;\\r\\n  width: 360px;\\r\\n}\\r\\n\\r\\n\\r\\n#enemyCannon\\r\\n{\\r\\n    display: none;\\r\\n    position: absolute;\\r\\n    pointer-events: none;\\r\\n    left: 50%;\\r\\n    margin-left: -250px;\\r\\n    top: 0;\\r\\n    width: 500px;\\r\\n    height: 500px;\\r\\n}\\r\\n\\r\\n#playerCannon\\r\\n{\\r\\n    display: none;\\r\\n    position: absolute;\\r\\n    pointer-events: none;\\r\\n    left: 50%;\\r\\n    margin-left: -250px;\\r\\n    top: 0;\\r\\n    width: 500px;\\r\\n    height: 500px;\\r\\n}\\r\\n.cannonMissile\\r\\n{\\r\\n  display: none;\\r\\n  position: absolute;\\r\\n  top: 500%;\\r\\n  left: 50%;\\r\\n  margin-left: -60px;\\r\\n  pointer-events: none;\\r\\n  background-color: #000;\\r\\n  width: 120px;\\r\\n  opacity: 0.7;\\r\\n  padding-bottom: 120px;\\r\\n  box-shadow: 0px 0px 15px #000;\\r\\n  border-radius: 125px;\\r\\n  border-radius: 50%;\\r\\n  transform-origin: center;\\r\\n}\\r\\n.missileFalling\\r\\n{\\r\\n    animation-name: missile;\\r\\n    animation-duration: 1.4s;\\r\\n    animation-iteration-count: 1;\\r\\n    animation-timing-function: ease-in;\\r\\n    animation-fill-mode: forwards;\\r\\n}\\r\\n.cannon\\r\\n{\\r\\n    animation-name: cannonFire;\\r\\n    animation-duration: 2s;\\r\\n    animation-iteration-count: 1;\\r\\n    animation-timing-function: ease-in;\\r\\n    animation-fill-mode: forwards;\\r\\n}\\r\\n.shake\\r\\n{\\r\\n    position: relative;\\r\\n    overflow-x: hidden;\\r\\n    animation-name: screenShake;\\r\\n    animation-duration: 0.75s;\\r\\n    animation-iteration-count: 1;\\r\\n    animation-timing-function: linear;\\r\\n}\\r\\n.flash\\r\\n{\\r\\n    animation-name: screenFlash;\\r\\n    animation-duration: 1s;\\r\\n    animation-iteration-count: 1;\\r\\n    animation-timing-function: linear;\\r\\n}\\r\\n/*Animations*/\\r\\n\\r\\n@keyframes backgroundScroll {\\r\\nfrom {background-position: 0 0;}\\r\\nto {background-position: -1000px -1000px;}\\r\\n}\\r\\n       \\r\\n@keyframes cannonFire {\\r\\n    15%   {height: 400px;top:180px;}\\r\\n    30%  {height: 600px;top:-100px;}\\r\\n    45%  {height: 500px;top:0px;}\\r\\n    100% {opacity: 0;}\\r\\n}\\r\\n       \\r\\n@keyframes screenShake {\\r\\n    15%   {left: 0px;top:50px;}\\r\\n    30%  {left: 30px;top:0px;}\\r\\n    45%  {left: 0px;bottom:35px;}\\r\\n    60%  {left: 0px;bottom:0px;}\\r\\n}\\r\\n      \\r\\n@keyframes screenFlash {\\r\\n    50%   {background-color: rgba(255,180,25,1)!important;}\\r\\n    100%   {background-color: rgba(0,0,0,0.8);}\\r\\n}\\r\\n       \\r\\n@keyframes missile {\\r\\n    0%   {transform: scale(1);}\\r\\n    50%   {transform: scale(5);}\\r\\n    100%  {transform: scale(1);}\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*Custom Modal*/\\r\\n.aa-modal{\\r\\n  pointer-events: none;\\r\\n  position:fixed;\\r\\n  display: none;\\r\\n  z-index: 10;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  padding-top: 5%;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  margin: auto;\\r\\n  overflow: hidden;\\r\\n  background-color: #000;\\r\\n  background-color: rgba(0,0,0,0.8);\\r\\n}\\r\\n\\r\\n.hide { display: none!important; }\\r\\n.show { display: block!important; }\\r\\n\\r\\n/*Animations*/\\r\\n.fade\\r\\n{\\r\\n    -webkit-animation-name: fade;\\r\\n    -webkit-animation-duration: 2s;\\r\\n    -webkit-animation-fill-mode: forwards;\\r\\n    animation-name: fade;\\r\\n    animation-duration: 2s;   \\r\\n    animation-fill-mode: forwards;\\r\\n}\\r\\n.fade-5\\r\\n{\\r\\n    -webkit-animation-name: fade5;\\r\\n    -webkit-animation-duration: 5s;\\r\\n    -webkit-animation-fill-mode: forwards;\\r\\n    animation-name: fade5;\\r\\n    animation-duration: 5s;   \\r\\n    animation-fill-mode: forwards;\\r\\n}\\r\\n.fadein\\r\\n{\\r\\n    -webkit-animation-name: fadein;\\r\\n    -webkit-animation-duration: 1s;\\r\\n    -webkit-animation-fill-mode: forwards;\\r\\n    animation-name: fadein;\\r\\n    animation-duration: 1s;\\r\\n    animation-fill-mode: forwards;\\r\\n}\\r\\n\\r\\n@-webkit-keyframes fadein {\\r\\n    from{opacity: 0;}\\r\\n    to  {opacity: 1;}\\r\\n}\\r\\n@keyframes fadein {\\r\\n    from{opacity: 0;}\\r\\n    to  {opacity: 1;}\\r\\n}\\r\\n@-webkit-keyframes fade {\\r\\n    0%  {opacity: 0;}\\r\\n    50% {opacity: 1;}\\r\\n    100%{opacity: 0;}\\r\\n}\\r\\n@keyframes fade {\\r\\n    0%  {opacity: 0;}\\r\\n    50% {opacity: 1;}\\r\\n    100%{opacity: 0;}\\r\\n}\\r\\n@-webkit-keyframes fade5 {\\r\\n    0%  {opacity: 0;}\\r\\n    15% {opacity: 1;}\\r\\n    75% {opacity: 0.8;}\\r\\n    100%{opacity: 0;}\\r\\n}\\r\\n@keyframes fade5 {\\r\\n    0%  {opacity: 0;}\\r\\n    15% {opacity: 1;}\\r\\n    75% {opacity: 0.8;}\\r\\n    100%{opacity: 0;}\\r\\n}\\r\\n.aa-modal-content{\\r\\n  position: relative;\\r\\n  text-align: center;\\r\\n  margin: 0 auto;\\r\\n  font-size: 4em;\\r\\n  padding:25px;\\r\\n  outline:0;\\r\\n  color: white;\\r\\n  background-color: rgba(0,0,0,0);\\r\\n  width: auto;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/modal.css?./node_modules/css-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sfx_fx_fire_ogg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sfx/fx_fire.ogg */ \"./src/audio/sfx/fx_fire.ogg\");\n// Sounds\n// const snd_gui_open = new Audio('./gui_open.wav');\n\n// const snd_fire = new Audio('./fx_fire.ogg');\n// const snd_fire2 = new Audio('./fx_fire2.ogg');\n// const snd_fire3 = new Audio('./fx_fire3.ogg');\n// const snd_Hit = new Audio('./fx_shipHit.wav');\n// const snd_Miss = new Audio('./fx_splash.wav');\n// const snd_shipDestroyed = new Audio('./fx_shipDestroyed.wav');\n// const snd_shipDestroyed2 = new Audio('./fx_shipDestroyed2.wav');\n// const snd_reload = new Audio('./fx_cannonReload.wav');\n//\n// const snd_music_fail = new Audio('./music_fail_trombone.wav');\n// const snd_music_fail2 = new Audio('./music_fail_trombone2.wav');\n\n\nfunction playSound(snd) {\n  if (snd === 'fire') {\n    const snd = new Audio(_sfx_fx_fire_ogg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    snd.play();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (playSound);\n\n//# sourceURL=webpack:///./src/audio/audio.js?");

/***/ }),

/***/ "./src/audio/sfx/fx_fire.ogg":
/*!***********************************!*\
  !*** ./src/audio/sfx/fx_fire.ogg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"58bdcfe579af6ed4f3c0986a8366ad32.ogg\");\n\n//# sourceURL=webpack:///./src/audio/sfx/fx_fire.ogg?");

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

/***/ "./src/images/kboom.gif":
/*!******************************!*\
  !*** ./src/images/kboom.gif ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3ee01c3566d3875da7c87af880baffad.gif\");\n\n//# sourceURL=webpack:///./src/images/kboom.gif?");

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

/***/ "./src/images/slowburn.gif":
/*!*********************************!*\
  !*** ./src/images/slowburn.gif ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"552d15290ffebb0ba67639a1937ed176.gif\");\n\n//# sourceURL=webpack:///./src/images/slowburn.gif?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/modal.css */ \"./src/css/modal.css\");\n/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_modal_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/game */ \"./src/views/game.js\");\n\n\n\n\nlet showEnemies = false;\nlet transitionsEnabled = true;\nconst app = new _views_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst menuNode = document.querySelector('#MenuContainer');\nconst wholeBoard = document.querySelector('#WholeBoard');\nconst showEnemiesBtn = document.querySelector('#ShowAll');\nconst transitionsBtn = document.querySelector('#Transitions');\nconst startGameBtn = document.querySelector('#StartGame');\n\nshowEnemiesBtn.addEventListener('click', () => {\n  showEnemies = !showEnemies;\n  const color = showEnemies ? 'red' : 'grey';\n  showEnemiesBtn.innerHTML = `Reveal Enemies <span class=\"text-${color}\">(${showEnemies})</span>`;\n});\n\ntransitionsBtn.addEventListener('click', () => {\n  transitionsEnabled = !transitionsEnabled;\n  const color = transitionsEnabled ? 'grey' : 'red';\n  transitionsBtn.innerHTML = `Enable Transitions <span class=\"text-${color}\">(${transitionsEnabled})</span>`;\n});\n\nstartGameBtn.addEventListener('click', () => {\n  menuNode.classList.toggle('hide');\n  wholeBoard.classList.toggle('hide');\n  app.run(showEnemies, transitionsEnabled);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/board.js":
/*!*****************************!*\
  !*** ./src/models/board.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/models/ship.js\");\n\n\nclass Board {\n  constructor(size = 10) {\n    this.size = size;\n    this.board = Array(size).fill(Array(size).fill())\n      .map(row => row.map(() => ({ shipId: null, hit: false })));\n    this.ships = [];\n  }\n\n  receiveAttack(coords) {\n    const cell = this.board[coords.x][coords.y];\n    if (!cell.hit) {\n      cell.hit = true;\n      if (cell.shipId) {\n        this.getShip(cell.shipId).hit();\n        return 'hit';\n      }\n      return 'missed';\n    }\n    return null;\n  }\n\n  allShipsSunk() {\n    return this.ships.every(ship => ship.isSunk());\n  }\n\n  getShip(shipId) {\n    return this.ships.find(ship => ship.id === shipId);\n  }\n\n  placeShip(ship, x, y, orientation) {\n    if (x > this.size - 1) { return false; }\n    if (y > this.size - 1) { return false; }\n    if (ship.length > this.size) { return false; }\n    if (!Board.getShipOrientations().includes(orientation)) { return false; }\n\n    // Final coordinates of the ship\n    const { finalX, finalY } = (() => {\n      switch (orientation) {\n        case 'U':\n          return { finalX: x, finalY: y - (ship.length - 1) };\n        case 'D':\n          return { finalX: x, finalY: y + (ship.length - 1) };\n        case 'L':\n          return { finalX: x - (ship.length - 1), finalY: y };\n        default:\n          return { finalX: x + (ship.length - 1), finalY: y };\n      }\n    })();\n\n    // Check if final coordinates are out of bounds\n    if (finalX > this.size - 1 || finalX < 0) { return false; }\n    if (finalY > this.size - 1 || finalY < 0) { return false; }\n\n    // Check the board for already placed ships\n    const { startX, finishX } = x < finalX\n      ? { startX: x, finishX: finalX }\n      : { startX: finalX, finishX: x };\n    const { startY, finishY } = y < finalY\n      ? { startY: y, finishY: finalY }\n      : { startY: finalY, finishY: y };\n\n    for (let i = startX; i <= finishX; i += 1) {\n      for (let j = startY; j <= finishY; j += 1) {\n        if (this.board[i][j].shipId) {\n          return false;\n        }\n      }\n    }\n\n    // Place the ship in the board\n    for (let i = startX; i <= finishX; i += 1) {\n      for (let j = startY; j <= finishY; j += 1) {\n        this.board[i][j].shipId = ship.id;\n        this.ships.push(ship);\n      }\n    }\n\n    return true;\n  }\n\n  placeAllShips() {\n    Board.getDefaultShips().forEach(ship => {\n      let placed = false;\n      do {\n        const randX = Math.floor(Math.random() * this.size);\n        const randY = Math.floor(Math.random() * this.size);\n        const randOrientation = Board.getShipOrientations()[Math.floor(Math.random() * 4)];\n        placed = this.placeShip(ship, randX, randY, randOrientation);\n      } while (!placed);\n    });\n  }\n\n  static getShipOrientations() {\n    return ['U', 'D', 'L', 'R'];\n  }\n\n  static getDefaultShips() {\n    return [5, 4, 3, 3, 2].map(size => Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(size));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n\n//# sourceURL=webpack:///./src/models/board.js?");

/***/ }),

/***/ "./src/models/game.js":
/*!****************************!*\
  !*** ./src/models/game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/models/board.js\");\n\n\nclass Game {\n  constructor(player1Name, player2Name, size = 10) {\n    this.player1 = { name: player1Name, targetBoard: new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](size) };\n    this.player2 = { name: player2Name, targetBoard: new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](size) };\n    this.turnsTaken = 1;\n    this.over = false;\n    this.cutscene = false;\n    this.transitionsEnabled = true;\n    this.winner = null;\n    this.currentPlayer = this.player1;\n  }\n\n  play(coords) {\n    if (!this.over) {\n      const attackResult = this.currentPlayer.targetBoard.receiveAttack(coords);\n      if (this.currentPlayer.targetBoard.allShipsSunk()) {\n        this.over = true;\n        this.winner = this.currentPlayer;\n      } else if (attackResult === 'missed') {\n        if (this.transitionsEnabled) {\n          setTimeout(() => this.switchTurns(), 5000);\n        } else { this.switchTurns(); }\n      }\n\n      return attackResult;\n    }\n    return null;\n  }\n\n  switchTurns() {\n    this.currentPlayer = this.currentPlayer === this.player1\n      ? this.player2\n      : this.player1;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/models/game.js?");

/***/ }),

/***/ "./src/models/ship.js":
/*!****************************!*\
  !*** ./src/models/ship.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// ShipFactory takes one argument, maxHP\n// maxHP determines the length of the ship\n// hp is set to equal maxHP and once a ship is hit()\n// 1 is subtracted from the hp of the ship\n\nconst Ship = (length) => {\n  const id = Math.random().toString(36).substr(2, 9);\n  let hp = length;\n  const isSunk = () => hp <= 0;\n  const hit = () => { hp -= 1; };\n\n  return {\n    id, length, hit, isSunk,\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);\n\n\n//# sourceURL=webpack:///./src/models/ship.js?");

/***/ }),

/***/ "./src/views/game.js":
/*!***************************!*\
  !*** ./src/views/game.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/game */ \"./src/models/game.js\");\n/* harmony import */ var _images_ship_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/ship.png */ \"./src/images/ship.png\");\n/* harmony import */ var _images_cannonDown_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/cannonDown.png */ \"./src/images/cannonDown.png\");\n/* harmony import */ var _images_missed_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/missed.gif */ \"./src/images/missed.gif\");\n/* harmony import */ var _images_kboom_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/kboom.gif */ \"./src/images/kboom.gif\");\n/* harmony import */ var _audio_audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../audio/audio */ \"./src/audio/audio.js\");\n\n\n\n\n\n\n\nclass GameView {\n  constructor(size = 10) {\n    this.size = size;\n    this.game = new _models_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('You', 'Enemy', size);\n    this.game.player1.targetBoard.placeAllShips();\n    this.game.player2.targetBoard.placeAllShips();\n    this.playerBoardNode = document.getElementById('PlayerBoard');\n    this.enemyBoardNode = document.getElementById('EnemyBoard');\n    this.page = document.querySelector('body');\n    this.modal = document.querySelector('.aa-modal');\n    this.modalContent = document.querySelector('.aa-modal-content');\n    this.enemyMoves = [...Array(this.size ** 2).keys()];\n    this.lastEnemyMove = null;\n  }\n\n  run(showEnemies = false, enableTransitions = true) {\n    this.game.transitionsEnabled = enableTransitions;\n\n    GameView.renderBoard(this.playerBoardNode, this.game.player2.targetBoard.board);\n    GameView.renderBoard(this.enemyBoardNode, this.game.player1.targetBoard.board,\n      true, showEnemies);\n\n    this.enemyBoardNode.childNodes.forEach(cell => {\n      cell.addEventListener('click', () => {\n        if (!this.game.over && !this.game.cutscene\n            && this.game.currentPlayer === this.game.player1) {\n          const result = this.playerPlay(cell);\n          if (!this.game.transitionsEnabled && result === 'missed') { this.enemyPlay(); }\n\n\n          if (this.game.over) {\n            if (this.game.winner.name === 'You') this.gameOver('Congratulations, You Won!');\n            else { this.gameOver('You Lost all your Ships!'); }\n          }\n        }\n      });\n    });\n  }\n\n  SwitchTurns() {\n    const { modal, modalContent, game } = this;\n    let { turnsTaken } = game;\n    const player = game.currentPlayer === game.player1 ? 'Player' : 'Enemy';\n    if (player === 'Player') {\n      turnsTaken += 1;\n      this.enemyBoardNode.scrollIntoView({ behavior: 'smooth', block: 'center' });\n    } else { this.playerBoardNode.scrollIntoView({ behavior: 'smooth', block: 'center' }); }\n    modal.classList.remove('fade', 'fade-5');\n    modal.classList.add('fade');\n    modalContent.innerHTML = `<p class='glowText'>Round: ${turnsTaken} </p><p class='glowText'>${player}'s Turn<p>`;\n    // snd_gui_open.play();\n    setTimeout(() => this.CloseModal(true), 2000);\n  }\n\n  CloseModal(switched) {\n    if (!this.game.over) {\n      const { modal, modalContent } = this;\n      modal.classList.toggle('show');\n      modalContent.innerHTML = '';\n\n      if (switched) { this.enemyPlay(); } else if (this.game.currentPlayer === this.game.player2) {\n        setTimeout(() => { this.enemyPlay(); }, 100);\n      }\n      this.game.cutscene = false;\n    }\n  }\n\n  playerPlay(cell) {\n    const { game } = this;\n\n    if (game.currentPlayer !== game.player1) { return null; }\n    const result = this.game.play(cell.dataset);\n    if (result) {\n      if (game.transitionsEnabled) {\n        this.CannonFireTransitions(cell, result);\n      } else { cell.classList.add(result); }\n    }\n\n    return result;\n  }\n\n  randomizeMove() {\n    const randIndex = Math.floor(Math.random() * this.enemyMoves.length);\n    const move = this.enemyMoves[randIndex];\n    return move;\n  }\n\n  enemyPlay() {\n    const { game } = this;\n    const { lastEnemyMove } = this;\n    if (game.currentPlayer !== game.player2) { return; }\n    let move;\n    if (lastEnemyMove) {\n      move = this.enemyMoves.find(i => i === lastEnemyMove + 10\n                                       || i === lastEnemyMove - 10\n                                       || i === lastEnemyMove - 1\n                                       || i === lastEnemyMove + 1);\n      if (move) { this.enemyMoves = this.enemyMoves.filter(i => i !== move); } else {\n        this.lastEnemyMove = null;\n        move = this.randomizeMove();\n        this.enemyMoves = this.enemyMoves.filter(i => i !== move);\n      }\n    } else {\n      move = this.randomizeMove();\n      this.enemyMoves = this.enemyMoves.filter(i => i !== move);\n    }\n    const coords = { x: Math.floor(move / this.size), y: move % this.size };\n    const result = this.game.play(coords);\n    const cell = this.playerBoardNode\n      .querySelector(`[data-x=\"${coords.x}\"][data-y=\"${coords.y}\"]`);\n\n    if (game.transitionsEnabled) {\n      this.CannonFireTransitions(cell, result);\n    } else { cell.classList.add(result); }\n\n    if (result === 'hit') {\n      this.lastEnemyMove = move;\n      if (!this.game.transitionsEnabled) { this.enemyPlay(); }\n    }\n  }\n\n  CannonFireTransitions(cell, result) {\n    const {\n      modal, page, modalContent, game,\n    } = this;\n    clearInterval(this.timer);\n\n    game.cutscene = true;\n    modal.classList.remove('fade');\n    modal.classList.add('fade-5');\n    modal.classList.toggle('show');\n    modalContent.innerHTML = `<img id='playerCannon' src='${_images_ship_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}'><img id='enemyCannon' src='${_images_cannonDown_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}'><div class='cannonMissile missileFalling'></div>`;\n    const playerCannon = document.getElementById('playerCannon');\n    const enemyCannon = document.getElementById('enemyCannon');\n    const missile = document.querySelector('.cannonMissile');\n    if (game.currentPlayer === game.player1) {\n      playerCannon.classList.toggle('show');\n      playerCannon.classList.add('cannon');\n    }\n    if (game.currentPlayer === game.player2) {\n      enemyCannon.classList.toggle('show');\n      enemyCannon.classList.add('cannon');\n    }\n    this.timer = setTimeout(() => {\n      if (result === 'missed') { this.SwitchTurns(); }\n      if (result === 'hit') { this.CloseModal(); }\n    }, 5000);\n    // This occurs in line with the firing animation of the cannon\n    this.timer = setTimeout(() => {\n      page.classList.add('shake');\n      modal.classList.add('flash');\n      Object(_audio_audio__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('fire');\n    }, 500);\n    // Displays the falling missile animation\n    this.timer = setTimeout(() => {\n      missile.style.display = 'block';\n    }, 1500);\n\n    this.timer = setTimeout(() => {\n      cell.classList.add(result);\n      if (result === 'missed') {\n        modalContent.innerHTML = `<img class='splash' src='${_images_missed_gif__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}'>`;\n      }\n      if (result === 'hit') {\n        modalContent.innerHTML = `<img class='splash' src='${_images_kboom_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"]}'>`;\n      }\n      if (game.currentPlayer === game.player1) { playerCannon.classList.remove('cannon', 'show'); }\n      if (game.currentPlayer === game.player2) { enemyCannon.classList.remove('cannon', 'show'); }\n      page.classList.remove('shake');\n      modal.classList.remove('flash');\n    }, 3000);\n  }\n\n  static renderBoard(boardNode, board, enemy = false, showEnemies = false) {\n    const boardLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];\n    board.forEach((row, i) => {\n      row.forEach((cell, j) => {\n        const cellNode = document.createElement('div');\n        cellNode.classList.add('cell');\n        cellNode.setAttribute('data-x', i);\n        cellNode.setAttribute('data-y', j);\n        cellNode.textContent = `${boardLetters[i]}${j + 1}`;\n        if ((!enemy && board[i][j].shipId) || (showEnemies && board[i][j].shipId)) {\n          cellNode.classList.add('ship');\n        }\n        boardNode.appendChild(cellNode);\n      });\n    });\n  }\n\n\n  gameOver(message) {\n    const { modal, modalContent } = this;\n    modal.classList.remove('fade');\n    modal.classList.add('fadein');\n    modal.style.display = 'block';\n    modalContent.innerHTML = `<p class='glowText'>${message}</p><br>\n                            <button id='playAgainBtn' type='button' onclick='window.location.reload()' >Play Again?</button>`;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n\n//# sourceURL=webpack:///./src/views/game.js?");

/***/ })

/******/ });