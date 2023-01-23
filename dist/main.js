/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/close.png */ \"./src/images/close.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/damage.png */ \"./src/images/damage.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/battleship.png */ \"./src/images/battleship.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    font-family: Arial, Helvetica, sans-serif;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.row {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.playerGrid, .compGrid {\\r\\n    height: 40px;\\r\\n    width: 40px;\\r\\n    border: 2px solid black;\\r\\n}\\r\\n\\r\\n.boards {\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n}\\r\\n\\r\\n#playerBoard {\\r\\n    background-color: darkseagreen;\\r\\n}\\r\\n\\r\\n#computerBoard {\\r\\n    background-color: lightblue;\\r\\n}\\r\\n\\r\\n.missed {\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-size: 40px 40px;\\r\\n}\\r\\n\\r\\n.hit {\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n    background-size: 40px 40px;\\r\\n}\\r\\n\\r\\n.columnHeader, .flexRow {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.columnHeader {\\r\\n    margin-left: 12px;\\r\\n}\\r\\n\\r\\n.columnLabel {\\r\\n    width: 44px;\\r\\n    text-align: center;\\r\\n    padding: 5px 0 5px 0;\\r\\n}\\r\\n\\r\\n.rowLabel {\\r\\n    height: 44px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    padding: 0 5px 0 5px;\\r\\n}\\r\\n\\r\\n.shipHealth {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.health {\\r\\n    padding-left: 1em;\\r\\n}\\r\\n\\r\\n.ship {\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n    background-size: 40px 40px;\\r\\n}\\r\\n\\r\\n.destroyerEnemy, .submarineEnemy, .cruiserEnemy, .battleshipEnemy, .carrierEnemy {\\r\\n    color: gray;\\r\\n}\\r\\n\\r\\n.playerHealth, .enemyHealth {\\r\\n    background-color: beige;\\r\\n    border-radius: 8px;\\r\\n    border: 2px solid black;\\r\\n    text-align: center;\\r\\n    width: 200px;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    margin-top: 10px;\\r\\n}\\r\\n\\r\\n.boardTitle {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.healthTitle {\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\n.winDisplay {\\r\\n    background-color: white;\\r\\n    border-radius: 8px;\\r\\n    border: 2px solid black;\\r\\n    height: auto;\\r\\n    width: 400px;\\r\\n    margin-bottom: 20px;\\r\\n    position: absolute;\\r\\n    top: 50px;\\r\\n    display: none;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.winText {\\r\\n    padding: 10px 0 10px 0;\\r\\n}\\r\\n\\r\\n.restart {\\r\\n    padding: 4px 4px 4px 4px;\\r\\n    margin-bottom: 10px;\\r\\n    border-radius: 12px;\\r\\n    border: none;\\r\\n}\\r\\n\\r\\n.restart:hover {\\r\\n    background-color: lightblue;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM/UI.js":
/*!***********************!*\
  !*** ./src/DOM/UI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ \"./src/controller.js\");\n/* harmony import */ var _createPlayerBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPlayerBoard */ \"./src/DOM/createPlayerBoard.js\");\n/* harmony import */ var _createComputerBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createComputerBoard */ \"./src/DOM/createComputerBoard.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction addListener() {\r\n    window.addEventListener('click', handleClick);\r\n}\r\n\r\nfunction handleClick(event) {\r\n    if (event.target.className.includes('playerGrid') || event.target.id === \"\") {\r\n        return;\r\n    }\r\n    if (___WEBPACK_IMPORTED_MODULE_0__.player.turn) {\r\n        (0,_controller__WEBPACK_IMPORTED_MODULE_1__.controller)(event.target.id);\r\n    }\r\n};\r\n\r\nconst UI = () => {\r\n    addListener();\r\n    (0,_createPlayerBoard__WEBPACK_IMPORTED_MODULE_2__.createBoard)();\r\n    (0,_createComputerBoard__WEBPACK_IMPORTED_MODULE_3__.createCompBoard)();\r\n};\r\n\r\n\r\n\r\n/*\r\ncredits:\r\n<a href=\"https://www.flaticon.com/free-icons/damage\" title=\"damage icons\">Damage icons created by Febrian Hidayat - Flaticon</a>\r\n<a href=\"https://www.flaticon.com/free-icons/close\" title=\"close icons\">Close icons created by Pixel perfect - Flaticon</a>\r\n<a href=\"https://www.flaticon.com/free-icons/battleship\" title=\"battleship icons\">Battleship icons created by Darius Dan - Flaticon</a>\r\n*/\n\n//# sourceURL=webpack://battleship/./src/DOM/UI.js?");

/***/ }),

/***/ "./src/DOM/createComputerBoard.js":
/*!****************************************!*\
  !*** ./src/DOM/createComputerBoard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCompBoard\": () => (/* binding */ createCompBoard)\n/* harmony export */ });\nlet gameboard = document.querySelector(\"#computerBoard\");\r\n\r\nfunction createCompBoard() {\r\n  const rows = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\r\n  for (let i = 0; i < rows.length; i++) {\r\n    let row = document.createElement(\"div\");\r\n    row.classList.add(\"row\");\r\n    makeColumns(row, rows[i]);\r\n    gameboard.appendChild(row);\r\n  }\r\n}\r\n\r\nfunction makeColumns(row, letter) {\r\n  for (let i = 1; i < 11; i++) {\r\n    var cell = document.createElement(\"div\");\r\n    cell.classList.add(\"compGrid\");\r\n    cell.classList.add(letter + i);\r\n    cell.setAttribute('id', letter + i);\r\n    row.appendChild(cell);\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/DOM/createComputerBoard.js?");

/***/ }),

/***/ "./src/DOM/createPlayerBoard.js":
/*!**************************************!*\
  !*** ./src/DOM/createPlayerBoard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBoard\": () => (/* binding */ createBoard)\n/* harmony export */ });\nlet gameboard = document.querySelector('#playerBoard');\r\n\r\nfunction createBoard() {\r\n    const rows = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\r\n    for (let i = 0; i < rows.length; i++) {\r\n        let row = document.createElement(\"div\");\r\n        row.classList.add('row');\r\n        makeColumns(row, rows[i]);\r\n        gameboard.appendChild(row);\r\n    };\r\n};\r\n\r\nfunction makeColumns(row, letter) {\r\n    for (let i = 1; i < 11; i++) {\r\n        var cell = document.createElement('div');\r\n        cell.classList.add('playerGrid');\r\n        cell.classList.add(letter+i);\r\n        cell.setAttribute(\"id\", letter + i);\r\n        row.appendChild(cell);\r\n    };\r\n};\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/DOM/createPlayerBoard.js?");

/***/ }),

/***/ "./src/DOM/displayAttacks.js":
/*!***********************************!*\
  !*** ./src/DOM/displayAttacks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMove\": () => (/* binding */ displayMove)\n/* harmony export */ });\nfunction displayMove(board, coordinates, boolean) {\r\n    let target = findGridTarget(board, coordinates);\r\n    if (boolean) {\r\n        target.classList.remove('ship');\r\n        target.classList.add('hit');\r\n    } else target.classList.add('missed');\r\n}\r\n\r\nfunction findGridTarget(board, coordinates) {\r\n    let list = document.getElementsByClassName(board + \" \" + coordinates);\r\n    return list[0];\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/DOM/displayAttacks.js?");

/***/ }),

/***/ "./src/DOM/sunkEnemyShips.js":
/*!***********************************!*\
  !*** ./src/DOM/sunkEnemyShips.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findSunkShips\": () => (/* binding */ findSunkShips)\n/* harmony export */ });\nfunction findSunkShips(ships) {\r\n    for (let i = 0; i < 5; i++) {\r\n      if (ships[i].ship.isSunk() === true) {\r\n        displayName(ships[i].name);\r\n      }\r\n    }\r\n}\r\n\r\nfunction displayName(name) {\r\n    let div = document.getElementsByClassName(name+'Enemy');\r\n    div[0].style.color = \"red\"\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/DOM/sunkEnemyShips.js?");

/***/ }),

/***/ "./src/DOM/winnerDisplay.js":
/*!**********************************!*\
  !*** ./src/DOM/winnerDisplay.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"winnerDisplay\": () => (/* binding */ winnerDisplay)\n/* harmony export */ });\nconst winnerDisplay = (win) => {\r\n    let div = document.querySelector('.winDisplay');\r\n    div.style.display = 'block';\r\n    if (win) {\r\n        document.querySelector(\".winText\").innerHTML = \"you win!\";\r\n    } else {\r\n        document.querySelector(\".winText\").innerHTML = \"all your ships have sunk\";\r\n}\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/DOM/winnerDisplay.js?");

/***/ }),

/***/ "./src/attackShip.js":
/*!***************************!*\
  !*** ./src/attackShip.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attackShip\": () => (/* binding */ attackShip),\n/* harmony export */   \"findShip\": () => (/* binding */ findShip),\n/* harmony export */   \"upateHealth\": () => (/* binding */ upateHealth)\n/* harmony export */ });\nfunction findShip(coordinates, myShips) {\r\n  for (let i = 0; i < myShips.length; i++) {\r\n    for (let j = 0; j < myShips[i].location.length; j++) {\r\n      if (myShips[i].location[j] === coordinates) {\r\n        return myShips[i];\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction attackShip(myShip) {\r\n  myShip.ship.hits = myShip.ship.hit();\r\n  console.log(myShip.ship.hits);\r\n}\r\n\r\nfunction upateHealth(ship) {\r\n    let div = document.getElementById(ship.name + 'HealthPlayer');\r\n    let total = ship.ship.size;\r\n    let health = total - ship.ship.hits;\r\n    div.innerHTML = health + '/' + total;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/attackShip.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"controller\": () => (/* binding */ controller),\n/* harmony export */   \"enemyTurn\": () => (/* binding */ enemyTurn)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _enemyShipPlacement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemyShipPlacement */ \"./src/enemyShipPlacement.js\");\n/* harmony import */ var _moves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moves */ \"./src/moves.js\");\n/* harmony import */ var _DOM_displayAttacks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/displayAttacks */ \"./src/DOM/displayAttacks.js\");\n/* harmony import */ var _attackShip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attackShip */ \"./src/attackShip.js\");\n/* harmony import */ var _DOM_sunkEnemyShips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOM/sunkEnemyShips */ \"./src/DOM/sunkEnemyShips.js\");\n/* harmony import */ var _DOM_winnerDisplay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOM/winnerDisplay */ \"./src/DOM/winnerDisplay.js\");\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction controller(coordinates) {\r\n  if (___WEBPACK_IMPORTED_MODULE_0__.computer.turn) {\r\n    let attack = ___WEBPACK_IMPORTED_MODULE_0__.playerBoard.receiveAttack(coordinates);\r\n    ___WEBPACK_IMPORTED_MODULE_0__.computer.addMove(coordinates);\r\n    (0,_DOM_displayAttacks__WEBPACK_IMPORTED_MODULE_4__.displayMove)(\r\n      \"playerGrid\",\r\n      coordinates,\r\n      attack\r\n    );\r\n    if (attack) {\r\n      (0,_attackShip__WEBPACK_IMPORTED_MODULE_5__.upateHealth)( (0,_attackShip__WEBPACK_IMPORTED_MODULE_5__.findShip)(coordinates, ___WEBPACK_IMPORTED_MODULE_0__.playerBoard.myShips) );\r\n    }\r\n    if (___WEBPACK_IMPORTED_MODULE_0__.playerBoard.allShipsSunk()) {\r\n      return endGame(false);\r\n    }\r\n    changeTurn();\r\n  }\r\n  else {\r\n    if (___WEBPACK_IMPORTED_MODULE_0__.player.addMove(coordinates) === false) {\r\n      return (0,_moves__WEBPACK_IMPORTED_MODULE_3__.duplicateMove)();\r\n    }\r\n    ___WEBPACK_IMPORTED_MODULE_0__.player.addMove(coordinates);\r\n    (0,_DOM_displayAttacks__WEBPACK_IMPORTED_MODULE_4__.displayMove)( 'compGrid', coordinates, ___WEBPACK_IMPORTED_MODULE_0__.computerBoard.receiveAttack(coordinates) );\r\n    (0,_DOM_sunkEnemyShips__WEBPACK_IMPORTED_MODULE_6__.findSunkShips)(___WEBPACK_IMPORTED_MODULE_0__.computerBoard.myShips);\r\n    if (___WEBPACK_IMPORTED_MODULE_0__.computerBoard.allShipsSunk() === true) {\r\n      return endGame(true);\r\n    }\r\n    changeTurn();\r\n    setTimeout(controller, 1000, checkEnemyTurn());\r\n  }\r\n}\r\n\r\nfunction changeTurn() {\r\n  ___WEBPACK_IMPORTED_MODULE_0__.player.turn = !___WEBPACK_IMPORTED_MODULE_0__.player.turn;\r\n  ___WEBPACK_IMPORTED_MODULE_0__.computer.turn = !___WEBPACK_IMPORTED_MODULE_0__.computer.turn;\r\n}\r\n\r\nfunction enemyTurn() {\r\n  let move = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)().board[(0,_enemyShipPlacement__WEBPACK_IMPORTED_MODULE_2__.randomInt)()][(0,_enemyShipPlacement__WEBPACK_IMPORTED_MODULE_2__.randomInt)()];\r\n  return move;\r\n}\r\n\r\nfunction checkEnemyTurn() {\r\n  let move;\r\n  do { move = enemyTurn();\r\n  } while (___WEBPACK_IMPORTED_MODULE_0__.computer.addMove(move) === false);\r\n  return move;\r\n}\r\n\r\nfunction endGame(win) {\r\n  ___WEBPACK_IMPORTED_MODULE_0__.player.turn = false;\r\n  ___WEBPACK_IMPORTED_MODULE_0__.computer.turn = false;\r\n  (0,_DOM_winnerDisplay__WEBPACK_IMPORTED_MODULE_7__.winnerDisplay)(win);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/controller.js?");

/***/ }),

/***/ "./src/createBoard.js":
/*!****************************!*\
  !*** ./src/createBoard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBoard\": () => (/* binding */ createBoard)\n/* harmony export */ });\nfunction createBoard(board, rows, columns) {\r\n  for (let i = 0; i < 10; i++) {\r\n    board[i] = [];\r\n    for (let j = 0; j < 10; j++) {\r\n      board[i][j] = rows[i] + columns[j];\r\n    }\r\n  }\r\n  return board;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/createBoard.js?");

/***/ }),

/***/ "./src/enemyShipPlacement.js":
/*!***********************************!*\
  !*** ./src/enemyShipPlacement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findEnemyLocations\": () => (/* binding */ findEnemyLocations),\n/* harmony export */   \"randomInt\": () => (/* binding */ randomInt)\n/* harmony export */ });\n\r\nfunction randomInt() {\r\n  let number = Math.floor(Math.random() * 10);\r\n  return number;\r\n}\r\n\r\nfunction pickDirection(ship, row, column, board, shipPlacements) {\r\n  let randomNumber = Math.floor(Math.random() * 4);\r\n  switch (randomNumber) {\r\n    case 0:\r\n      return moveLeft(ship, row, column, board, shipPlacements);\r\n    case 1:\r\n      return moveRight(ship, row, column, board, shipPlacements);\r\n    case 2:\r\n      return moveUp(ship, row, column, board, shipPlacements);\r\n    case 3:\r\n      return moveDown(ship, row, column, board, shipPlacements);\r\n  }\r\n}\r\n\r\nfunction moveLeft(ship, row, column, board) {\r\n  let coordinates = [];\r\n  for (let i = 0; i < ship.size; i++) {\r\n    coordinates[i] = board[row][column];\r\n    column--;\r\n  }\r\n  return coordinates;\r\n}\r\n\r\nfunction moveRight(ship, row, column, board) {\r\n  let coordinates = [];\r\n  for (let i = 0; i < ship.size; i++) {\r\n    coordinates[i] = board[row][column];\r\n    column++;\r\n  }\r\n  return coordinates;\r\n}\r\n\r\nfunction moveUp(ship, row, column, board, shipPlacements) {\r\n  let coordinates = [];\r\n  for (let i = 0; i < ship.size; i++) {\r\n    if (board[row] === undefined) {\r\n      return findValidCoordinates(board, shipPlacements, ship);\r\n    } else {\r\n      coordinates[i] = board[row][column];\r\n    }\r\n    row--;\r\n  }\r\n  return coordinates;\r\n}\r\n\r\nfunction moveDown(ship, row, column, board, shipPlacements) {\r\n  let coordinates = [];\r\n  for (let i = 0; i < ship.size; i++) {\r\n    if (board[row] === undefined) {\r\n      return findValidCoordinates(board, shipPlacements, ship);\r\n    } else {\r\n      coordinates[i] = board[row][column];\r\n    }\r\n    row++;\r\n  }\r\n  return coordinates;\r\n}\r\n\r\nfunction checkCoordinates(coordinates) {\r\n  for (let i = 0; i < coordinates.length; i++) {\r\n    if (coordinates[i] === undefined) {\r\n      return false;\r\n    }\r\n  }\r\n  return coordinates;\r\n}\r\n\r\nfunction findValidCoordinates(board, shipPlacements, ship) {\r\n  let coordinates;\r\n  do {\r\n    coordinates = checkCoordinates(\r\n      pickDirection(ship, randomInt(), randomInt(), board, shipPlacements)\r\n    );\r\n  } while (\r\n    coordinates === false ||\r\n    isLocationOccupied(coordinates, shipPlacements)\r\n  );\r\n  return coordinates;\r\n}\r\n\r\nfunction isLocationOccupied(coordinates, shipPlacements) {\r\n  for (let i = 0; i < shipPlacements.length; i++) {\r\n    for (let j = 0; j < coordinates.length; j++) {\r\n      if (shipPlacements[i] === coordinates[j]) {\r\n        return true;\r\n      }\r\n    }\r\n  }\r\n  return false;\r\n}\r\n\r\nfunction findEnemyLocations(board, shipPlacements, enemyShips) {\r\n  for (let i = 0; i < enemyShips.length; i++) {\r\n    enemyShips[i].location = findValidCoordinates(\r\n      board,\r\n      shipPlacements,\r\n      enemyShips[i].ship\r\n    );\r\n    addEnemyLocations(shipPlacements, enemyShips[i]);\r\n  }\r\n}\r\n\r\nfunction addEnemyLocations(shipPlacements, enemy) {\r\n  for (let i = 0; i < enemy.location.length; i++) {\r\n    shipPlacements.push(enemy.location[i]);\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/enemyShipPlacement.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard),\n/* harmony export */   \"fakePlayerGameboard\": () => (/* binding */ fakePlayerGameboard)\n/* harmony export */ });\n/* harmony import */ var _createBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBoard */ \"./src/createBoard.js\");\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n/* harmony import */ var _attackShip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attackShip */ \"./src/attackShip.js\");\n\r\n\r\n\r\n\r\nconst Gameboard = () => {\r\n  const rows = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\r\n  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\r\n  let board = (0,_createBoard__WEBPACK_IMPORTED_MODULE_0__.createBoard)([], rows, columns);\r\n  let missedAttacks = [];\r\n  let myShips = [\r\n    { name: \"destroyer\", ship: (0,_ships__WEBPACK_IMPORTED_MODULE_1__.Ship)(2, 0), location: [] },\r\n    { name: \"submarine\", ship: (0,_ships__WEBPACK_IMPORTED_MODULE_1__.Ship)(3, 0), location: [] },\r\n    { name: \"cruiser\", ship: (0,_ships__WEBPACK_IMPORTED_MODULE_1__.Ship)(3, 0), location: [] },\r\n    { name: \"battleship\", ship: (0,_ships__WEBPACK_IMPORTED_MODULE_1__.Ship)(4, 0), location: [] },\r\n    { name: \"carrier\", ship: (0,_ships__WEBPACK_IMPORTED_MODULE_1__.Ship)(5, 0), location: [] },\r\n  ];\r\n  let shipPlacements = [];\r\n  const receiveAttack = (coordinates) => {\r\n    for (let i = 0; i < shipPlacements.length; i++) {\r\n      if (coordinates === shipPlacements[i]) {\r\n        (0,_attackShip__WEBPACK_IMPORTED_MODULE_2__.attackShip)( (0,_attackShip__WEBPACK_IMPORTED_MODULE_2__.findShip)(coordinates, myShips) );\r\n        return true;\r\n      }\r\n    }\r\n    missedAttacks.push(coordinates);\r\n    return false;\r\n  };\r\n  const allShipsSunk = () => {\r\n    let sunkShips = 0;\r\n    for (let i = 0; i < 5; i++) {\r\n      if (myShips[i].ship.isSunk()) {\r\n        sunkShips++;\r\n      }\r\n    }\r\n    if (sunkShips === 5) {\r\n      return true;\r\n    } else return false;\r\n  };\r\n  return { board, shipPlacements, myShips, missedAttacks, receiveAttack, allShipsSunk };\r\n};\r\n\r\n\r\nconst fakePlayerGameboard = () => {\r\n  const rows = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\r\n  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\r\n  let board = (0,_createBoard__WEBPACK_IMPORTED_MODULE_0__.createBoard)([], rows, columns);\r\n  let missedAttacks = [];\r\n  let myShips = [\r\n    { name: \"destroyer\", ship: (0,_ships__WEBPACK_IMPORTED_MODULE_1__.Ship)(2, 0), location: ['A1', 'A2'] },\r\n    { name: \"submarine\", ship: (0,_ships__WEBPACK_IMPORTED_MODULE_1__.Ship)(3, 0), location: ['B2', 'B3', 'B4'] },\r\n    { name: \"cruiser\", ship: (0,_ships__WEBPACK_IMPORTED_MODULE_1__.Ship)(3, 0), location: ['D4', 'D5', 'D6'] },\r\n    { name: \"battleship\", ship: (0,_ships__WEBPACK_IMPORTED_MODULE_1__.Ship)(4, 0), location: ['E2', 'E3', 'E4', 'E5'] },\r\n    { name: \"carrier\", ship: (0,_ships__WEBPACK_IMPORTED_MODULE_1__.Ship)(5, 0), location: ['J5', 'J6', 'J7', 'J8', 'J9'] },\r\n  ];\r\n  let shipPlacements = ['A1', 'A2', 'B2', 'B3', 'B4', 'D4', 'D5', 'D6', 'E2', 'E3', 'E4', 'E5', 'J5', 'J6', 'J7', 'J8', 'J9'];\r\n  const receiveAttack = (coordinates) => {\r\n    for (let i = 0; i < shipPlacements.length; i++) {\r\n      if (coordinates === shipPlacements[i]) {\r\n        (0,_attackShip__WEBPACK_IMPORTED_MODULE_2__.attackShip)((0,_attackShip__WEBPACK_IMPORTED_MODULE_2__.findShip)(coordinates, myShips));\r\n        return true;\r\n      }\r\n    }\r\n     missedAttacks.push(coordinates);\r\n     return false;\r\n   };\r\n  const allShipsSunk = () => {\r\n    let sunkShips = 0;\r\n    for (let i = 0; i < 5; i++) {\r\n      if (myShips[i].ship.isSunk() === true) {\r\n        sunkShips++;\r\n      }\r\n    }\r\n    if (sunkShips === 5) {\r\n      return true;\r\n    } else return false;\r\n  };\r\n  return {\r\n    board,\r\n    shipPlacements,\r\n    myShips,\r\n    missedAttacks,\r\n    receiveAttack,\r\n    allShipsSunk,\r\n  };\r\n};\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computer\": () => (/* binding */ computer),\n/* harmony export */   \"computerBoard\": () => (/* binding */ computerBoard),\n/* harmony export */   \"player\": () => (/* binding */ player),\n/* harmony export */   \"playerBoard\": () => (/* binding */ playerBoard)\n/* harmony export */ });\n/* harmony import */ var _DOM_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/UI */ \"./src/DOM/UI.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _DOM_winnerDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/winnerDisplay */ \"./src/DOM/winnerDisplay.js\");\n/* harmony import */ var _enemyShipPlacement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enemyShipPlacement */ \"./src/enemyShipPlacement.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_DOM_UI__WEBPACK_IMPORTED_MODULE_0__.UI)();\r\n\r\nlet player = (0,_player__WEBPACK_IMPORTED_MODULE_2__.Player)();\r\nlet computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.Player)();\r\nlet playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.fakePlayerGameboard)();\r\nlet computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();\r\nplayer.turn = true;\r\n\r\n\r\n(0,_enemyShipPlacement__WEBPACK_IMPORTED_MODULE_5__.findEnemyLocations)(computerBoard.board, computerBoard.shipPlacements, computerBoard.myShips);\r\n\r\n// winnerDisplay(false);\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/moves.js":
/*!**********************!*\
  !*** ./src/moves.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"duplicateMove\": () => (/* binding */ duplicateMove)\n/* harmony export */ });\nfunction duplicateMove() {\r\n    console.log('please choose new coordinates');\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/moves.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nconst Player = () => {\r\n    let turn = false;\r\n    let moves = [];\r\n    function addMove(coordinates) {\r\n        for (let i=0; i < moves.length; i++) {\r\n            if (coordinates === moves[i]) {\r\n                return false;\r\n            }\r\n        }\r\n        moves.push(coordinates);\r\n    };\r\n    return { turn, moves, addMove }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nconst Ship = (size, hits) => {\r\n  \r\n  const hit = () => {\r\n    hits++;\r\n    return hits;\r\n  };\r\n  const isSunk = () => {\r\n    if (hits === size) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  };\r\n  return { size, hits, isSunk, hit };\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/ships.js?");

/***/ }),

/***/ "./src/images/battleship.png":
/*!***********************************!*\
  !*** ./src/images/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"796821ec767fcc970017.png\";\n\n//# sourceURL=webpack://battleship/./src/images/battleship.png?");

/***/ }),

/***/ "./src/images/close.png":
/*!******************************!*\
  !*** ./src/images/close.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ffdafe3f0eceab67b7c2.png\";\n\n//# sourceURL=webpack://battleship/./src/images/close.png?");

/***/ }),

/***/ "./src/images/damage.png":
/*!*******************************!*\
  !*** ./src/images/damage.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a7fecc3eebeda5a02b23.png\";\n\n//# sourceURL=webpack://battleship/./src/images/damage.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;