/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/ExampleReactComponent.js":
/*!**********************************************!*\
  !*** ./src/scripts/ExampleReactComponent.js ***!
  \**********************************************/
/***/ (function() {

// import { React, useState } from 'react'

// function ExampleReactComponent() {
//   const [slide, setSlide] = useState(0)
//   const images = ['sploot.jpg', 'waterfall.jpg', 'penguins.jpg']
//   const arrow = {
//     enabled: {
//       bg: 'bg-orange',
//       stroke: '#FFF',
//       strokeOpacity: '1',
//     },
//     disabled: {
//       bg: 'bg-gray/50',
//       stroke: 'rgba(33, 33, 33, 0.65)',
//       strokeOpacity: '0.65',
//     },
//   }

//   return (
//     <div
//       className="bg-cover bg-top w-screen relative"
//       style={{
//         backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.6) 92.6%), url('/wp-content/themes/sploot_theme/images/${images[slide]}')`,
//         height: '720px',
//       }}
//     >
//       <button
//         className={`h-12 w-12 rounded-full ${
//           slide > 0 ? arrow.enabled.bg : arrow.disabled.bg
//         } absolute top-1/2 left-16 -translate-y-1/2`}
//         onClick={() => {
//           if (slide > 0) {
//             setSlide(slide - 1)
//           }
//         }}
//       >
//         <svg
//           width="13"
//           height="21"
//           viewBox="0 0 13 21"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="translate-x-4"
//         >
//           <path
//             d="M11.5 19.5L3.48522 13.3068C1.95826 12.1268 1.92633 9.83301 3.41985 8.61103L11.5 2"
//             stroke={slide > 0 ? arrow.enabled.stroke : arrow.disabled.stroke}
//             stroke-opacity={
//               slide > 0
//                 ? arrow.enabled.strokeOpacity
//                 : arrow.disabled.strokeOpacity
//             }
//             stroke-width="3"
//             stroke-linecap="round"
//           />
//         </svg>
//       </button>
//       <div className="mx-44 text-white">
//         <div className="absolute top-1/2 -translate-y-1/2">
//           <div className="max-w-5xl font-forum text-6xl mb-8">
//             No matter what tools you use to create, the true instrument is you.
//           </div>
//           <div className="text-3xl mb-8">
//             And through you, the universe that surrounds us all comes into
//             focus.
//           </div>
//           <a href="#" className="mb-8">
//             <button className="h-12 w-48 bg-black/100 rounded-full">
//               About the team
//             </button>
//           </a>
//         </div>
//       </div>
//       <button
//         className={`h-12 w-12 rounded-full ${
//           slide < images.length - 1 ? arrow.enabled.bg : arrow.disabled.bg
//         } absolute top-1/2 right-16 -translate-y-1/2`}
//         onClick={() => {
//           if (slide < images.length - 1) {
//             setSlide(slide + 1)
//           }
//         }}
//       >
//         <svg
//           width="13"
//           height="21"
//           viewBox="0 0 13 21"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="translate-x-5"
//         >
//           <path
//             d="M1.5 2L9.51478 8.19324C11.0417 9.37316 11.0737 11.667 9.58015 12.889L1.5 19.5"
//             stroke={
//               slide < images.length - 1
//                 ? arrow.enabled.stroke
//                 : arrow.disabled.stroke
//             }
//             stroke-opacity={
//               slide < images.length - 1
//                 ? arrow.enabled.strokeOpacity
//                 : arrow.disabled.strokeOpacity
//             }
//             stroke-width="3"
//             stroke-linecap="round"
//           />
//         </svg>
//       </button>
//       <div className="flex gap-2 absolute bottom-6 left-1/2 -translate-x-1/2">
//         {images.map((imgPath, i) => (
//           <div
//             key={imgPath}
//             className={`h-3 w-3 border-white rounded-full border-2 ${
//               slide === i ? 'bg-darkGray' : 'bg-white'
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ExampleReactComponent

/***/ }),

/***/ "./src/scripts/Person.js":
/*!*******************************!*\
  !*** ./src/scripts/Person.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Person {
  constructor(name) {
    this.name = name;
    this.greet();
  }
  greet() {
    console.log(`Hey ${this.name} 👋`);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Person);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Person */ "./src/scripts/Person.js");
/* harmony import */ var _scripts_ExampleReactComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/ExampleReactComponent */ "./src/scripts/ExampleReactComponent.js");
/* harmony import */ var _scripts_ExampleReactComponent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_ExampleReactComponent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);





new _scripts_Person__WEBPACK_IMPORTED_MODULE_1__["default"]('Dom');
if (document.querySelector('#render-react-here')) {
  react_dom__WEBPACK_IMPORTED_MODULE_4___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_scripts_ExampleReactComponent__WEBPACK_IMPORTED_MODULE_2___default()), null), document.querySelector('#render-react-here'));
}
}();
/******/ })()
;
//# sourceMappingURL=index.js.map