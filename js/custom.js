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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@vanillaforums/theme-boilerplate/src/js/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vanillaforums/theme-boilerplate/src/js/index.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mobileNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobileNavigation */ \"./node_modules/@vanillaforums/theme-boilerplate/src/js/mobileNavigation.js\");\n/*!\n * @author Isis (igraziatto) Graziatto <isis.g@vanillaforums.com>\n * @copyright 2009-2018 Vanilla Forums Inc.\n * @license GPL-2.0-only\n */\n\n\n\n$(function () {\n  if (!window.gdn.getMeta(\"featureFlags.DataDrivenTitleBar.Enabled\", false)) {\n    Object(_mobileNavigation__WEBPACK_IMPORTED_MODULE_0__[\"setupMobileNavigation\"])();\n  }\n\n  $(\"select\").wrap('<div class=\"SelectWrapper\"></div>');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhbmlsbGFmb3J1bXMvdGhlbWUtYm9pbGVycGxhdGUvc3JjL2pzL2luZGV4LmpzP2UzMWIiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsImdkbiIsImdldE1ldGEiLCJzZXR1cE1vYmlsZU5hdmlnYXRpb24iLCJ3cmFwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFBQTs7Ozs7QUFLQTs7QUFFQTtBQUVBQSxDQUFDLENBQUMsWUFBTTtBQUNKLE1BQUksQ0FBQ0MsTUFBTSxDQUFDQyxHQUFQLENBQVdDLE9BQVgsQ0FBbUIseUNBQW5CLEVBQThELEtBQTlELENBQUwsRUFBMkU7QUFDdkVDLElBQUEsK0VBQXFCO0FBQ3hCOztBQUNESixHQUFDLENBQUMsUUFBRCxDQUFELENBQVlLLElBQVosQ0FBaUIsbUNBQWpCO0FBQ0gsQ0FMQSxDQUFEIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0B2YW5pbGxhZm9ydW1zL3RoZW1lLWJvaWxlcnBsYXRlL3NyYy9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQGF1dGhvciBJc2lzIChpZ3JhemlhdHRvKSBHcmF6aWF0dG8gPGlzaXMuZ0B2YW5pbGxhZm9ydW1zLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwOS0yMDE4IFZhbmlsbGEgRm9ydW1zIEluYy5cbiAqIEBsaWNlbnNlIEdQTC0yLjAtb25seVxuICovXG5cInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgeyBzZXR1cE1vYmlsZU5hdmlnYXRpb24gfSBmcm9tIFwiLi9tb2JpbGVOYXZpZ2F0aW9uXCI7XG5cbiQoKCkgPT4ge1xuICAgIGlmICghd2luZG93Lmdkbi5nZXRNZXRhKFwiZmVhdHVyZUZsYWdzLkRhdGFEcml2ZW5UaXRsZUJhci5FbmFibGVkXCIsIGZhbHNlKSkge1xuICAgICAgICBzZXR1cE1vYmlsZU5hdmlnYXRpb24oKTtcbiAgICB9XG4gICAgJChcInNlbGVjdFwiKS53cmFwKCc8ZGl2IGNsYXNzPVwiU2VsZWN0V3JhcHBlclwiPjwvZGl2PicpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@vanillaforums/theme-boilerplate/src/js/index.js\n");

/***/ }),

/***/ "./node_modules/@vanillaforums/theme-boilerplate/src/js/mobileNavigation.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vanillaforums/theme-boilerplate/src/js/mobileNavigation.js ***!
  \**********************************************************************************/
/*! exports provided: setupMobileNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupMobileNavigation\", function() { return setupMobileNavigation; });\n/*!\n * @author Isis (igraziatto) Graziatto <isis.g@vanillaforums.com>\n * @copyright 2009-2018 Vanilla Forums Inc.\n * @license GPL-2.0-only\n */\n\n\nvar INIT_CLASS = \"needsInitialization\";\nvar CALC_HEIGHT_ATTR = \"data-height\";\nvar COLLAPSED_HEIGHT = \"0px\";\n/**\n * @param {HTMLElement} element\n */\n\nfunction collapseElement(element) {\n  element.style.height = COLLAPSED_HEIGHT;\n}\n/**\n *\n * @param {HTMLElement} element\n */\n\n\nfunction expandElement(element) {\n  element.style.height = element.getAttribute(CALC_HEIGHT_ATTR) + \"px\";\n}\n/**\n * Get the calculated height of an element and\n *\n * @param {HTMLElement} element\n */\n\n\nfunction prepareElement(element) {\n  if (!!element && element.classList) {\n    element.classList.add(INIT_CLASS);\n    element.style.height = \"auto\";\n    var calcedHeight = element.getBoundingClientRect().height; // Visual hide the element.`\n\n    element.setAttribute(CALC_HEIGHT_ATTR, calcedHeight.toString());\n    collapseElement(element);\n    element.classList.remove(INIT_CLASS);\n  }\n}\n\nfunction setupMobileNavigation() {\n  var menuButton = document.querySelector(\"#menu-button\");\n  /** @type {HTMLElement} */\n\n  var navdrawer = document.querySelector(\".js-nav\");\n  /** @type {HTMLElement} */\n\n  var mobileMebox = document.querySelector(\".js-mobileMebox\");\n  var mobileMeBoxBtn = document.querySelector(\".mobileMeBox-button\");\n  var mobileMeboxBtnClose = document.querySelector(\".mobileMebox-buttonClose\");\n  var mainHeader = document.querySelector(\"#MainHeader\");\n  /**\n   * @param {HTMLElement} element\n   */\n\n  function toggleElement(element) {\n    if (element.style.height === COLLAPSED_HEIGHT) {\n      expandElement(element);\n    } else {\n      collapseElement(element);\n    }\n  } // Calculate the values initially.\n\n\n  prepareElement(mobileMebox);\n  prepareElement(navdrawer); // Update the calculated values on resize.\n\n  window.addEventListener(\"resize\", function () {\n    requestAnimationFrame(function () {\n      prepareElement(mobileMebox);\n      prepareElement(navdrawer);\n    });\n  });\n\n  if (menuButton) {\n    menuButton.addEventListener(\"click\", function () {\n      menuButton.classList.toggle(\"isToggled\");\n      mainHeader.classList.toggle(\"hasOpenNavigation\");\n      collapseElement(mobileMebox);\n      toggleElement(navdrawer);\n    });\n  }\n\n  mobileMeBoxBtn && mobileMeBoxBtn.addEventListener(\"click\", function () {\n    mobileMeBoxBtn.classList.toggle(\"isToggled\");\n    mainHeader.classList.remove(\"hasOpenNavigation\");\n    menuButton.classList.remove(\"isToggled\");\n    collapseElement(navdrawer);\n    toggleElement(mobileMebox);\n  });\n  mobileMeboxBtnClose && mobileMeboxBtnClose.addEventListener(\"click\", function () {\n    collapseElement(mobileMebox);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhbmlsbGFmb3J1bXMvdGhlbWUtYm9pbGVycGxhdGUvc3JjL2pzL21vYmlsZU5hdmlnYXRpb24uanM/ZDk1YiJdLCJuYW1lcyI6WyJJTklUX0NMQVNTIiwiQ0FMQ19IRUlHSFRfQVRUUiIsIkNPTExBUFNFRF9IRUlHSFQiLCJjb2xsYXBzZUVsZW1lbnQiLCJlbGVtZW50Iiwic3R5bGUiLCJoZWlnaHQiLCJleHBhbmRFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwicHJlcGFyZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYWxjZWRIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsInJlbW92ZSIsInNldHVwTW9iaWxlTmF2aWdhdGlvbiIsIm1lbnVCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZkcmF3ZXIiLCJtb2JpbGVNZWJveCIsIm1vYmlsZU1lQm94QnRuIiwibW9iaWxlTWVib3hCdG5DbG9zZSIsIm1haW5IZWFkZXIiLCJ0b2dnbGVFbGVtZW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQUE7Ozs7O0FBTUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLHFCQUFuQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGFBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsS0FBekI7QUFDQTs7OztBQUdBLFNBQVNDLGVBQVQsQ0FBeUJDLE9BQXpCLEVBQWtDO0FBQzlCQSxTQUFPLENBQUNDLEtBQVIsQ0FBY0MsTUFBZCxHQUF1QkosZ0JBQXZCO0FBQ0g7QUFFRDs7Ozs7O0FBSUEsU0FBU0ssYUFBVCxDQUF1QkgsT0FBdkIsRUFBZ0M7QUFDNUJBLFNBQU8sQ0FBQ0MsS0FBUixDQUFjQyxNQUFkLEdBQXVCRixPQUFPLENBQUNJLFlBQVIs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SSxnQkFBcEIsQ0FBcUMsT0FBckMsRUFBOEMsWUFBTTtBQUN2RXpCLG1CQUFlLENBQUNtQixXQUFELENBQWY7QUFDSCxHQUZzQixDQUF2QjtBQUdIIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0B2YW5pbGxhZm9ydW1zL3RoZW1lLWJvaWxlcnBsYXRlL3NyYy9qcy9tb2JpbGVOYXZpZ2F0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBAYXV0aG9yIElzaXMgKGlncmF6aWF0dG8pIEdyYXppYXR0byA8aXNpcy5nQHZhbmlsbGFmb3J1bXMuY29tPlxuICogQGNvcHlyaWdodCAyMDA5LTIwMTggVmFuaWxsYSBGb3J1bXMgSW5jLlxuICogQGxpY2Vuc2UgR1BMLTIuMC1vbmx5XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCJcbmNvbnN0IElOSVRfQ0xBU1MgPSBcIm5lZWRzSW5pdGlhbGl6YXRpb25cIjtcbmNvbnN0IENBTENfSEVJR0hUX0FUVFIgPSBcImRhdGEtaGVpZ2h0XCI7XG5jb25zdCBDT0xMQVBTRURfSEVJR0hUID0gXCIwcHhcIjtcbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICovXG5mdW5jdGlvbiBjb2xsYXBzZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gQ09MTEFQU0VEX0hFSUdIVDtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICovXG5mdW5jdGlvbiBleHBhbmRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKENBTENfSEVJR0hUX0FUVFIpICsgXCJweFwiO1xufVxuXG4vKipcbiAqIEdldCB0aGUgY2FsY3VsYXRlZCBoZWlnaHQgb2YgYW4gZWxlbWVudCBhbmRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHByZXBhcmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoISFlbGVtZW50ICYmIGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChJTklUX0NMQVNTKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgY29uc3QgY2FsY2VkSGVpZ2h0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAgICAgLy8gVmlzdWFsIGhpZGUgdGhlIGVsZW1lbnQuYFxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShDQUxDX0hFSUdIVF9BVFRSLCBjYWxjZWRIZWlnaHQudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKElOSVRfQ0xBU1MpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTW9iaWxlTmF2aWdhdGlvbigpIHtcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKTtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICAgIGNvbnN0IG5hdmRyYXdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtbmF2XCIpO1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG4gICAgY29uc3QgbW9iaWxlTWVib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1vYmlsZU1lYm94XCIpO1xuICAgIGNvbnN0IG1vYmlsZU1lQm94QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGVNZUJveC1idXR0b25cIik7XG4gICAgY29uc3QgbW9iaWxlTWVib3hCdG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlTWVib3gtYnV0dG9uQ2xvc2VcIik7XG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTWFpbkhlYWRlclwiKTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0b2dnbGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID09PSBDT0xMQVBTRURfSEVJR0hUKSB7XG4gICAgICAgICAgICBleHBhbmRFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sbGFwc2VFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSB2YWx1ZXMgaW5pdGlhbGx5LlxuICAgIHByZXBhcmVFbGVtZW50KG1vYmlsZU1lYm94KTtcbiAgICBwcmVwYXJlRWxlbWVudChuYXZkcmF3ZXIpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBjYWxjdWxhdGVkIHZhbHVlcyBvbiByZXNpemUuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgcHJlcGFyZUVsZW1lbnQobW9iaWxlTWVib3gpO1xuICAgICAgICAgICAgcHJlcGFyZUVsZW1lbnQobmF2ZHJhd2VyKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIGlmIChtZW51QnV0dG9uKSB7XG4gICAgICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImlzVG9nZ2xlZFwiKTtcbiAgICAgICAgICAgIG1haW5IZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhhc09wZW5OYXZpZ2F0aW9uXCIpO1xuICAgICAgICAgICAgY29sbGFwc2VFbGVtZW50KG1vYmlsZU1lYm94KTtcbiAgICAgICAgICAgIHRvZ2dsZUVsZW1lbnQobmF2ZHJhd2VyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW9iaWxlTWVCb3hCdG4gJiYgbW9iaWxlTWVCb3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbW9iaWxlTWVCb3hCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImlzVG9nZ2xlZFwiKTtcbiAgICAgICAgbWFpbkhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzT3Blbk5hdmlnYXRpb25cIik7XG4gICAgICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImlzVG9nZ2xlZFwiKTtcbiAgICAgICAgY29sbGFwc2VFbGVtZW50KG5hdmRyYXdlcik7XG4gICAgICAgIHRvZ2dsZUVsZW1lbnQobW9iaWxlTWVib3gpO1xuICAgIH0pO1xuXG4gICAgbW9iaWxlTWVib3hCdG5DbG9zZSAmJiBtb2JpbGVNZWJveEJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudChtb2JpbGVNZWJveCk7XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@vanillaforums/theme-boilerplate/src/js/mobileNavigation.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vanillaforums_theme_boilerplate_src_js_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@vanillaforums/theme-boilerplate/src/js/index */ \"./node_modules/@vanillaforums/theme-boilerplate/src/js/index.js\");\n/*!\n * @author Isis (igraziatto) Graziatto <isis.g@vanillaforums.com>\n * @copyright 2009-2018 Vanilla Forums Inc.\n * @license GPL-2.0-only\n */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQGF1dGhvciBJc2lzIChpZ3JhemlhdHRvKSBHcmF6aWF0dG8gPGlzaXMuZ0B2YW5pbGxhZm9ydW1zLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwOS0yMDE4IFZhbmlsbGEgRm9ydW1zIEluYy5cbiAqIEBsaWNlbnNlIEdQTC0yLjAtb25seVxuICovXG5cbmltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9AdmFuaWxsYWZvcnVtcy90aGVtZS1ib2lsZXJwbGF0ZS9zcmMvanMvaW5kZXhcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });