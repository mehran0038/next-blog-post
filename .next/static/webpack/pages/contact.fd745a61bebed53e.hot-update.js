"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./components/ui/notification.js":
/*!***************************************!*\
  !*** ./components/ui/notification.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.module.css */ \"./components/ui/notification.module.css\");\n/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_notification_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Notification(props) {\n    const { title, message, status } = props;\n    let statusClasses = \"\";\n    if (status === \"success\") {\n        statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_2___default().success);\n    }\n    if (status === \"error\") {\n        statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_2___default().error);\n    }\n    const cssClasses = \"\".concat((_notification_module_css__WEBPACK_IMPORTED_MODULE_2___default().notification), \" \").concat(statusClasses);\n    return /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: cssClasses,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"H:\\\\xampp\\\\htdocs\\\\codewithmaximilian - nextjs\\\\blog-project\\\\components\\\\ui\\\\notification.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"H:\\\\xampp\\\\htdocs\\\\codewithmaximilian - nextjs\\\\blog-project\\\\components\\\\ui\\\\notification.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\xampp\\\\htdocs\\\\codewithmaximilian - nextjs\\\\blog-project\\\\components\\\\ui\\\\notification.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this), document.getElementById(\"notifications\"));\n}\n_c = Notification;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notification);\nvar _c;\n$RefreshReg$(_c, \"Notification\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL25vdGlmaWNhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNlO0FBRWhELFNBQVNFLGFBQWFDLEtBQUs7SUFDekIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFLEdBQUdIO0lBRW5DLElBQUlJLGdCQUFnQjtJQUVwQixJQUFJRCxXQUFXLFdBQVc7UUFDeEJDLGdCQUFnQk4seUVBQWU7SUFDakM7SUFFQSxJQUFJSyxXQUFXLFNBQVM7UUFDdEJDLGdCQUFnQk4sdUVBQWE7SUFDL0I7SUFFQSxNQUFNUyxhQUFhLEdBQTJCSCxPQUF4Qk4sOEVBQW9CLEVBQUMsS0FBaUIsT0FBZE07SUFFOUMscUJBQVFQLDZEQUFxQixlQUMzQiw4REFBQ2E7UUFBSUMsV0FBV0o7OzBCQUNkLDhEQUFDSzswQkFBSVg7Ozs7OzswQkFDTCw4REFBQ1k7MEJBQUdYOzs7Ozs7Ozs7OztjQUVOWSxTQUFTQyxjQUFjLENBQUM7QUFFNUI7S0F0QlNoQjtBQXdCVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL25vdGlmaWNhdGlvbi5qcz84MDY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIE5vdGlmaWNhdGlvbihwcm9wcykge1xyXG4gIGNvbnN0IHsgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cyB9ID0gcHJvcHM7XHJcblxyXG4gIGxldCBzdGF0dXNDbGFzc2VzID0gJyc7XHJcblxyXG4gIGlmIChzdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG4gICAgc3RhdHVzQ2xhc3NlcyA9IGNsYXNzZXMuc3VjY2VzcztcclxuICB9XHJcblxyXG4gIGlmIChzdGF0dXMgPT09ICdlcnJvcicpIHtcclxuICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLmVycm9yO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3NzQ2xhc3NlcyA9IGAke2NsYXNzZXMubm90aWZpY2F0aW9ufSAke3N0YXR1c0NsYXNzZXN9YDtcclxuXHJcbiAgcmV0dXJuICBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ2xhc3Nlc30+XHJcbiAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgPHA+e21lc3NhZ2V9PC9wPlxyXG4gICAgPC9kaXY+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmaWNhdGlvbnMnKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjsiXSwibmFtZXMiOlsiUmVhY3RET00iLCJjbGFzc2VzIiwiTm90aWZpY2F0aW9uIiwicHJvcHMiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJzdGF0dXNDbGFzc2VzIiwic3VjY2VzcyIsImVycm9yIiwiY3NzQ2xhc3NlcyIsIm5vdGlmaWNhdGlvbiIsImNyZWF0ZVBvcnRhbCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/notification.js\n"));

/***/ })

});