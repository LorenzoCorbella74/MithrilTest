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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mithril/mithril.js":
/*!*****************************************!*\
  !*** ./node_modules/mithril/mithril.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Lorenzo\\\\Desktop\\\\mithril\\\\node_modules\\\\mithril\\\\mithril.js'\\n    at Error (native)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9taXRocmlsLmpzLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/mithril/mithril.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/mithril.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ \"./src/models.js\");\n/* harmony import */ var _child__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child */ \"./src/child.js\");\n\r\n\r\n  // importazione componente\r\n\r\nconst root = document.body;\r\n\r\n/* \r\n    m.render: renderizza un singolo vnode:\r\n\r\n    m.render(root, m(\".container\", [\r\n        m(\"h1\", {class: \"header\"}, \"Mithril test\"),\r\n        m(\"p\", \"Learning environment...\"),\r\n    ])); \r\n*/\r\n\r\nconst firstLabel = 'test handler'\r\nlet count = 0;  // dati ESTERNI al componente (modificabili)\r\n\r\nlet HelloWorldComponent = {\r\n    // dati 'privati' del componente (modificabili) - Component state\r\n    secretData:{\r\n        profession:\"haker\",\r\n        skill:5\r\n    },\r\n    secret: \"fake\",\r\n    // la vista\r\n    view: function (componente) {\r\n        console.log('Passed: ', componente);    // il componente è un vnode\r\n        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\".container\", [\r\n            mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"h1\", {class: \"header\"}, \"Mithril test\"),\r\n            mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"h3\", {class: \"lead\"}, \"componente Padre\"),\r\n            mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"p\", [\"Learning environment for the FE Framework \", mithril__WEBPACK_IMPORTED_MODULE_0___default()('span',[mithril__WEBPACK_IMPORTED_MODULE_0___default()('a',{href:'https://mithril.js.org/'},'Mithril')])]),\r\n            mithril__WEBPACK_IMPORTED_MODULE_0___default()('button.btn.btn-primary',{onclick: function() {\r\n                count++;\r\n                componente.state.secretData.skill++;\r\n            }}, !count? firstLabel: \"skill \" + componente.state.secretData.skill),\r\n            mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"hr\"),\r\n            mithril__WEBPACK_IMPORTED_MODULE_0___default()('p',[\r\n                \"Dati passati dal componente alla vista: \",\r\n                mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"span.badge.badge-primary\", componente.state.secretData.profession),\r\n                mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"span.badge.badge-warning\", componente.state.secret),\r\n            ]),\r\n            mithril__WEBPACK_IMPORTED_MODULE_0___default()('p',[\"Dati passati da obj globale alla vista: \" , mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"span.badge.badge-info\", _models__WEBPACK_IMPORTED_MODULE_1__[\"store\"].nome)]),\r\n            mithril__WEBPACK_IMPORTED_MODULE_0___default()('button.btn.btn-primary',{onclick: function() {\r\n                _models__WEBPACK_IMPORTED_MODULE_1__[\"store\"].age++;\r\n            }}, \"Modifica oggetto globale: \"+_models__WEBPACK_IMPORTED_MODULE_1__[\"store\"].age),\r\n            mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"hr\"),\r\n            mithril__WEBPACK_IMPORTED_MODULE_0___default()(_child__WEBPACK_IMPORTED_MODULE_2__[\"ChildComponent\"],{secret:  componente.state.secret})    // si passano i dati al componente figlio !!!\r\n            \r\n            \r\n        ]);\r\n    }\r\n}\r\n\r\n// Monta un componente su un elemento del DOM, \r\n// abilitando l'autoredraw da eventi dell'utente.\r\nmithril__WEBPACK_IMPORTED_MODULE_0___default.a.mount(root, HelloWorldComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XHJcbmltcG9ydCB7c3RvcmV9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5pbXBvcnQge0NoaWxkQ29tcG9uZW50fSBmcm9tXCIuL2NoaWxkXCI7ICAvLyBpbXBvcnRhemlvbmUgY29tcG9uZW50ZVxyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4vKiBcclxuICAgIG0ucmVuZGVyOiByZW5kZXJpenphIHVuIHNpbmdvbG8gdm5vZGU6XHJcblxyXG4gICAgbS5yZW5kZXIocm9vdCwgbShcIi5jb250YWluZXJcIiwgW1xyXG4gICAgICAgIG0oXCJoMVwiLCB7Y2xhc3M6IFwiaGVhZGVyXCJ9LCBcIk1pdGhyaWwgdGVzdFwiKSxcclxuICAgICAgICBtKFwicFwiLCBcIkxlYXJuaW5nIGVudmlyb25tZW50Li4uXCIpLFxyXG4gICAgXSkpOyBcclxuKi9cclxuXHJcbmNvbnN0IGZpcnN0TGFiZWwgPSAndGVzdCBoYW5kbGVyJ1xyXG5sZXQgY291bnQgPSAwOyAgLy8gZGF0aSBFU1RFUk5JIGFsIGNvbXBvbmVudGUgKG1vZGlmaWNhYmlsaSlcclxuXHJcbmxldCBIZWxsb1dvcmxkQ29tcG9uZW50ID0ge1xyXG4gICAgLy8gZGF0aSAncHJpdmF0aScgZGVsIGNvbXBvbmVudGUgKG1vZGlmaWNhYmlsaSkgLSBDb21wb25lbnQgc3RhdGVcclxuICAgIHNlY3JldERhdGE6e1xyXG4gICAgICAgIHByb2Zlc3Npb246XCJoYWtlclwiLFxyXG4gICAgICAgIHNraWxsOjVcclxuICAgIH0sXHJcbiAgICBzZWNyZXQ6IFwiZmFrZVwiLFxyXG4gICAgLy8gbGEgdmlzdGFcclxuICAgIHZpZXc6IGZ1bmN0aW9uIChjb21wb25lbnRlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Bhc3NlZDogJywgY29tcG9uZW50ZSk7ICAgIC8vIGlsIGNvbXBvbmVudGUgw6ggdW4gdm5vZGVcclxuICAgICAgICByZXR1cm4gbShcIi5jb250YWluZXJcIiwgW1xyXG4gICAgICAgICAgICBtKFwiaDFcIiwge2NsYXNzOiBcImhlYWRlclwifSwgXCJNaXRocmlsIHRlc3RcIiksXHJcbiAgICAgICAgICAgIG0oXCJoM1wiLCB7Y2xhc3M6IFwibGVhZFwifSwgXCJjb21wb25lbnRlIFBhZHJlXCIpLFxyXG4gICAgICAgICAgICBtKFwicFwiLCBbXCJMZWFybmluZyBlbnZpcm9ubWVudCBmb3IgdGhlIEZFIEZyYW1ld29yayBcIiwgbSgnc3BhbicsW20oJ2EnLHtocmVmOidodHRwczovL21pdGhyaWwuanMub3JnLyd9LCdNaXRocmlsJyldKV0pLFxyXG4gICAgICAgICAgICBtKCdidXR0b24uYnRuLmJ0bi1wcmltYXJ5Jyx7b25jbGljazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ZS5zdGF0ZS5zZWNyZXREYXRhLnNraWxsKys7XHJcbiAgICAgICAgICAgIH19LCAhY291bnQ/IGZpcnN0TGFiZWw6IFwic2tpbGwgXCIgKyBjb21wb25lbnRlLnN0YXRlLnNlY3JldERhdGEuc2tpbGwpLFxyXG4gICAgICAgICAgICBtKFwiaHJcIiksXHJcbiAgICAgICAgICAgIG0oJ3AnLFtcclxuICAgICAgICAgICAgICAgIFwiRGF0aSBwYXNzYXRpIGRhbCBjb21wb25lbnRlIGFsbGEgdmlzdGE6IFwiLFxyXG4gICAgICAgICAgICAgICAgbShcInNwYW4uYmFkZ2UuYmFkZ2UtcHJpbWFyeVwiLCBjb21wb25lbnRlLnN0YXRlLnNlY3JldERhdGEucHJvZmVzc2lvbiksXHJcbiAgICAgICAgICAgICAgICBtKFwic3Bhbi5iYWRnZS5iYWRnZS13YXJuaW5nXCIsIGNvbXBvbmVudGUuc3RhdGUuc2VjcmV0KSxcclxuICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgIG0oJ3AnLFtcIkRhdGkgcGFzc2F0aSBkYSBvYmogZ2xvYmFsZSBhbGxhIHZpc3RhOiBcIiAsIG0oXCJzcGFuLmJhZGdlLmJhZGdlLWluZm9cIiwgc3RvcmUubm9tZSldKSxcclxuICAgICAgICAgICAgbSgnYnV0dG9uLmJ0bi5idG4tcHJpbWFyeScse29uY2xpY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuYWdlKys7XHJcbiAgICAgICAgICAgIH19LCBcIk1vZGlmaWNhIG9nZ2V0dG8gZ2xvYmFsZTogXCIrc3RvcmUuYWdlKSxcclxuICAgICAgICAgICAgbShcImhyXCIpLFxyXG4gICAgICAgICAgICBtKENoaWxkQ29tcG9uZW50LHtzZWNyZXQ6ICBjb21wb25lbnRlLnN0YXRlLnNlY3JldH0pICAgIC8vIHNpIHBhc3Nhbm8gaSBkYXRpIGFsIGNvbXBvbmVudGUgZmlnbGlvICEhIVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1vbnRhIHVuIGNvbXBvbmVudGUgc3UgdW4gZWxlbWVudG8gZGVsIERPTSwgXHJcbi8vIGFiaWxpdGFuZG8gbCdhdXRvcmVkcmF3IGRhIGV2ZW50aSBkZWxsJ3V0ZW50ZS5cclxubS5tb3VudChyb290LCBIZWxsb1dvcmxkQ29tcG9uZW50KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/child.js":
/*!**********************!*\
  !*** ./src/child.js ***!
  \**********************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChildComponent\", function() { return ChildComponent; });\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ \"./node_modules/mithril/mithril.js\");\n/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n// componente figlio (ogni componente un file)\r\n// si esporta con: exports.component = {\r\n// si importa con: var ChildComponent = require('./child').component\r\nlet ChildComponent = {\r\n    view: function(vnode){\r\n        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(\".container.bg-faded\",[\r\n            mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"h3\",{class: \"lead\"},\"Componente figlio\"),\r\n            mithril__WEBPACK_IMPORTED_MODULE_0___default()('p',[\"Dati passati dal componente padre: \" , mithril__WEBPACK_IMPORTED_MODULE_0___default()(\"span.badge.badge-info\", vnode.attrs.secret)]) // si leggono i dati dal componente padre!!\r\n        ]);\r\n    }\r\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hpbGQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2hpbGQuanM/ZDBlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbSBmcm9tIFwibWl0aHJpbFwiO1xyXG5cclxuLy8gY29tcG9uZW50ZSBmaWdsaW8gKG9nbmkgY29tcG9uZW50ZSB1biBmaWxlKVxyXG4vLyBzaSBlc3BvcnRhIGNvbjogZXhwb3J0cy5jb21wb25lbnQgPSB7XHJcbi8vIHNpIGltcG9ydGEgY29uOiB2YXIgQ2hpbGRDb21wb25lbnQgPSByZXF1aXJlKCcuL2NoaWxkJykuY29tcG9uZW50XHJcbmV4cG9ydCBsZXQgQ2hpbGRDb21wb25lbnQgPSB7XHJcbiAgICB2aWV3OiBmdW5jdGlvbih2bm9kZSl7XHJcbiAgICAgICAgcmV0dXJuIG0oXCIuY29udGFpbmVyLmJnLWZhZGVkXCIsW1xyXG4gICAgICAgICAgICBtKFwiaDNcIix7Y2xhc3M6IFwibGVhZFwifSxcIkNvbXBvbmVudGUgZmlnbGlvXCIpLFxyXG4gICAgICAgICAgICBtKCdwJyxbXCJEYXRpIHBhc3NhdGkgZGFsIGNvbXBvbmVudGUgcGFkcmU6IFwiICwgbShcInNwYW4uYmFkZ2UuYmFkZ2UtaW5mb1wiLCB2bm9kZS5hdHRycy5zZWNyZXQpXSkgLy8gc2kgbGVnZ29ubyBpIGRhdGkgZGFsIGNvbXBvbmVudGUgcGFkcmUhIVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/child.js\n");

/***/ }),

/***/ "./src/models.js":
/*!***********************!*\
  !*** ./src/models.js ***!
  \***********************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\nconst store = {\r\n    nome: \"Lorenzo\",\r\n    age: 44,\r\n    sposato: true\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy5qcz8zMjQyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdG9yZSA9IHtcclxuICAgIG5vbWU6IFwiTG9yZW56b1wiLFxyXG4gICAgYWdlOiA0NCxcclxuICAgIHNwb3NhdG86IHRydWVcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/models.js\n");

/***/ })

/******/ });