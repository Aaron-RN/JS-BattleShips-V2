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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/water.png */ \"./src/images/water.png\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../images/ship.png */ \"./src/images/ship.png\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../images/hit.gif */ \"./src/images/hit.gif\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../images/missed.gif */ \"./src/images/missed.gif\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\n// Module\nexports.push([module.i, \"html { box-sizing: border-box; }\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n* {\\r\\n  transition-duration: 0.25s;\\r\\n}\\r\\n\\r\\n#PlayerBoard, #EnemyBoard {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  max-width: 500px;\\r\\n  outline: 1px solid black;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: repeat;\\r\\n  background-color:rgb(50,90,180);\\r\\n  animation: backgroundScroll 80s linear infinite;\\r\\n}\\r\\n\\r\\n.cell {\\r\\n  flex: 1 0 9.5%;\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  border: 1px solid royalblue;\\r\\n  cursor: pointer;\\r\\n  text-align: center;\\r\\n  color: red;\\r\\n  font-weight: bold;\\r\\n  background-size: cover;\\r\\n}\\r\\n\\r\\n.cell:hover{\\r\\n  border-style: dotted;\\r\\n  border-color: goldenrod;\\r\\n}\\r\\n.ship{\\r\\n  border: 1px solid green;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n\\r\\n.hit {\\r\\n  background-color: rgba(255, 0, 0, 0.7);\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n\\r\\n.missed {\\r\\n  background-color: rgba(0, 110, 255, 0.7);\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\r\\n}\\r\\n\\r\\n/*Animations*/\\r\\n@keyframes backgroundScroll {\\r\\nfrom {background-position: 0 0;}\\r\\nto {background-position: -1000px -1000px;}\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/images/hit.gif":
/*!****************************!*\
  !*** ./src/images/hit.gif ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"08ab53e393b4f3b6ed1eb7863673d5e4.gif\");\n\n//# sourceURL=webpack:///./src/images/hit.gif?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/gameboard */ \"./src/models/gameboard.js\");\n/* harmony import */ var _views_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/gameboard */ \"./src/views/gameboard.js\");\n/* harmony import */ var _models_gamelogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/gamelogic */ \"./src/models/gamelogic.js\");\n\r\n\r\n\r\n\r\nconst mainBoard = document.querySelector('#GameBoard');\r\n\r\nconst BattleShips = new _models_gamelogic__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/gameboard.js":
/*!*********************************!*\
  !*** ./src/models/gameboard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/models/ship.js\");\n/* harmony import */ var _views_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/gameboard */ \"./src/views/gameboard.js\");\n\r\n\r\n\r\nclass GameBoard {\r\n  constructor(gameLogic, boardNode, size, isPlayer = false) {\r\n    this.isPlayer = isPlayer;\r\n    this.size = size;\r\n    this.gameLogic = gameLogic;\r\n    this.view = new _views_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, boardNode);\r\n    this.board = Array(size).fill(Array(size).fill())\r\n      .map((row, i) => row.map((cell, j) => ({\r\n        shipId: null,\r\n        hit: false,\r\n        node: this.view.newCell(j, i),\r\n      })));\r\n    this.ships = [5, 4, 3, 3, 2].map(i => Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i));\r\n    this.placeAllShips();\r\n  }\r\n\r\n  getBoard() { return this.board; }\r\n\r\n  getShip(shipId) {\r\n    return this.ships.find(ship => ship.id === shipId);\r\n  }\r\n\r\n  placeAllShips() {\r\n    this.ships.forEach(ship => {\r\n      let result = false;\r\n      do {\r\n        const randX = Math.floor(Math.random() * this.size);\r\n        const randY = Math.floor(Math.random() * this.size);\r\n        const randDirection = ['U', 'D', 'L', 'R'][Math.floor(Math.random() * 4)];\r\n        result = this.placeShip(ship, randX, randY, randDirection);\r\n      } while (!result);\r\n    });\r\n  }\r\n\r\n  placeShip(ship, x, y, direction) {\r\n    if (x > this.size - 1) { return false; }\r\n    if (y > this.size - 1) { return false; }\r\n    if (ship.length > this.size) { return false; }\r\n\r\n    // Final coordinates of the ship\r\n    const { finalX, finalY } = (() => {\r\n      switch (direction) {\r\n        case 'U':\r\n          return { finalX: x, finalY: y - (ship.length - 1) };\r\n        case 'D':\r\n          return { finalX: x, finalY: y + (ship.length - 1) };\r\n        case 'L':\r\n          return { finalX: x - (ship.length - 1), finalY: y };\r\n        case 'R':\r\n          return { finalX: x + (ship.length - 1), finalY: y };\r\n        default:\r\n          throw new Error('Invalid direction');\r\n      }\r\n    })();\r\n\r\n    // Check if final coordinates are out of bounds\r\n    if (finalX > this.size - 1 || finalX < 0) { return false; }\r\n    if (finalY > this.size - 1 || finalY < 0) { return false; }\r\n\r\n    // Check the board for already placed ships\r\n    const { startX, finishX } = x < finalX\r\n      ? { startX: x, finishX: finalX }\r\n      : { startX: finalX, finishX: x };\r\n    const { startY, finishY } = y < finalY\r\n      ? { startY: y, finishY: finalY }\r\n      : { startY: finalY, finishY: y };\r\n\r\n    for (let i = startX; i <= finishX; i += 1) {\r\n      for (let j = startY; j <= finishY; j += 1) {\r\n        if (this.board[j][i].shipId) {\r\n          return false;\r\n        }\r\n      }\r\n    }\r\n\r\n    // Place the ship in the board\r\n    for (let i = startX; i <= finishX; i += 1) {\r\n      for (let j = startY; j <= finishY; j += 1) {\r\n        this.board[j][i].shipId = ship.id;\r\n        if (this.isPlayer) {this.view.placeShip(this.board[j][i]);}\r\n      }\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  receiveAttack(coords) {\r\n    if (this.gameLogic.gameOver) {return;}\r\n    const cell = this.board[coords.y][coords.x];\r\n    if (cell.hit) { return null; }\r\n\r\n\r\n    cell.hit = true;\r\n    if (cell.shipId) {\r\n      this.getShip(cell.shipId).hit();\r\n      this.gameLogic.isGameOver();\r\n      this.view.addEffects(cell, 'hit');\r\n      this.gameLogic.setTurn(true);\r\n    }\r\n    else{\r\n      this.gameLogic.setTurn();\r\n      this.view.addEffects(cell, 'missed');\r\n    }\r\n  }\r\n\r\n  allShipsSunk() { return this.ships.every(ship => ship.isSunk()); }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameBoard);\r\n\r\n\n\n//# sourceURL=webpack:///./src/models/gameboard.js?");

/***/ }),

/***/ "./src/models/gamelogic.js":
/*!*********************************!*\
  !*** ./src/models/gamelogic.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/models/gameboard.js\");\n\r\n\r\nclass GameLogic {\r\n  constructor(size = 10) {\r\n    this.size = size;\r\n    this.gameOver = false;\r\n    this.playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, '#PlayerBoard', size, true);\r\n    this.enemyBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, '#EnemyBoard', size);\r\n    this.whosTurn = 'Player';\r\n  }\r\n  \r\n  setTurn(same = false) {\r\n    if (!same){\r\n      this.whosTurn = (this.whosTurn === 'Player' ? 'Enemy' : 'Player');\r\n    }\r\n    console.log(this.whosTurn);\r\n    if(this.whosTurn === 'Enemy'){this.enemyFire()};\r\n  }\r\n  \r\n  isGameOver() {\r\n    if (this.playerBoard.allShipsSunk() || this.enemyBoard.allShipsSunk()){\r\n      this.gameOver = true;\r\n      console.log(this.whosTurn + ' Won');\r\n    }\r\n  }\r\n  \r\n  enemyFire() {\r\n    const randX = Math.floor(Math.random() * this.size);\r\n    const randY = Math.floor(Math.random() * this.size);\r\n    console.log(randX);\r\n    console.log(randY);\r\n    \r\n    this.playerBoard.receiveAttack({x: randX, y: randY});\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameLogic);\n\n//# sourceURL=webpack:///./src/models/gamelogic.js?");

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

/***/ "./src/views/gameboard.js":
/*!********************************!*\
  !*** ./src/views/gameboard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nclass GameBoardView {\r\n  constructor(model, selector) {\r\n    this.model = model;\r\n    this.boardNode = document.querySelector(selector);\r\n  }\r\n\r\n  newCell(x, y) {\r\n    const cellNode = document.createElement('div');\r\n    cellNode.classList.add('cell');\r\n    cellNode.setAttribute('data-x', x);\r\n    cellNode.setAttribute('data-y', y);\r\n    if (!this.model.isPlayer){\r\n      cellNode.addEventListener('click', () => {\r\n        console.log(x + \" \" + y);\r\n        this.model.receiveAttack({ x, y });\r\n  //      if (result) { cellNode.classList.add(result); }\r\n      });\r\n    }\r\n    this.boardNode.appendChild(cellNode);\r\n    return cellNode;\r\n  }\r\n\r\n  addEffects(cell, effect) {\r\n    cell.node.classList.add(effect);\r\n  }\r\n  \r\n  placeShip(ship) {\r\n    ship.node.classList.add('ship');\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameBoardView);\r\n\n\n//# sourceURL=webpack:///./src/views/gameboard.js?");

/***/ })

/******/ });