"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/posts/post-detail/post-content.js":
/*!******************************************************!*\
  !*** ./components/posts/post-detail/post-content.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _post_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-header */ \"./components/posts/post-detail/post-header.js\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-content.module.css */ \"./components/posts/post-detail/post-content.module.css\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_post_content_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism */ \"./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js\");\n\n\n\n\n\n\n\nfunction PostContent(props) {\n    const { post } = props;\n    const imagePath = \"/images/posts/\".concat(post.slug, \"/\").concat(post.image);\n    const customRenderers = {\n        image (image) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/images/posts/\".concat(post.slug, \"/\").concat(image.src),\n                alt: image.alt,\n                width: 600,\n                height: 300\n            }, void 0, false, {\n                fileName: \"H:\\\\xampp\\\\htdocs\\\\codewithmaximilian - nextjs\\\\blog-project\\\\components\\\\posts\\\\post-detail\\\\post-content.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this);\n        },\n        paragraph (paragraph) {\n            const { node } = paragraph;\n            if (node.children[0].type === \"image\") {\n                const image = node.children[0];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_post_content_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/images/posts/\".concat(post.slug, \"/\").concat(image.url),\n                        alt: image.alt,\n                        width: 600,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"H:\\\\xampp\\\\htdocs\\\\codewithmaximilian - nextjs\\\\blog-project\\\\components\\\\posts\\\\post-detail\\\\post-content.js\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"H:\\\\xampp\\\\htdocs\\\\codewithmaximilian - nextjs\\\\blog-project\\\\components\\\\posts\\\\post-detail\\\\post-content.js\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, this);\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: paragraph.children\n            }, void 0, false, {\n                fileName: \"H:\\\\xampp\\\\htdocs\\\\codewithmaximilian - nextjs\\\\blog-project\\\\components\\\\posts\\\\post-detail\\\\post-content.js\",\n                lineNumber: 44,\n                columnNumber: 14\n            }, this);\n        },\n        code (code) {\n            const { language, value } = code;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__.Prism, {\n                style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5__.atomDark,\n                language: language,\n                children: value\n            }, void 0, false, {\n                fileName: \"H:\\\\xampp\\\\htdocs\\\\codewithmaximilian - nextjs\\\\blog-project\\\\components\\\\posts\\\\post-detail\\\\post-content.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (_post_content_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_post_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            title: post.title,\n            image: imagePath\n        }, void 0, false, {\n            fileName: \"H:\\\\xampp\\\\htdocs\\\\codewithmaximilian - nextjs\\\\blog-project\\\\components\\\\posts\\\\post-detail\\\\post-content.js\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"H:\\\\xampp\\\\htdocs\\\\codewithmaximilian - nextjs\\\\blog-project\\\\components\\\\posts\\\\post-detail\\\\post-content.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_c = PostContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostContent);\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzL3Bvc3QtZGV0YWlsL3Bvc3QtY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNaO0FBRVE7QUFDUztBQUVzQjtBQUNJO0FBRTFFLFNBQVNPLFlBQVlDLEtBQUs7SUFDeEIsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0Q7SUFFakIsTUFBTUUsWUFBWSxpQkFBOEJELE9BQWJBLEtBQUtFLElBQUksRUFBQyxLQUFjLE9BQVhGLEtBQUtHLEtBQUs7SUFFMUQsTUFBTUMsa0JBQWtCO1FBQ3RCRCxPQUFNQSxLQUFLO1lBQ1QscUJBQ0UsOERBQUNYLG1EQUFLQTtnQkFDSmEsS0FBSyxpQkFBOEJGLE9BQWJILEtBQUtFLElBQUksRUFBQyxLQUFhLE9BQVZDLE1BQU1FLEdBQUc7Z0JBQzVDQyxLQUFLSCxNQUFNRyxHQUFHO2dCQUNkQyxPQUFPO2dCQUNQQyxRQUFROzs7Ozs7UUFHZDtRQUNBQyxXQUFVQSxTQUFTO1lBQ2pCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdEO1lBRWpCLElBQUlDLEtBQUtDLFFBQVEsQ0FBQyxFQUFFLENBQUNDLElBQUksS0FBSyxTQUFTO2dCQUNyQyxNQUFNVCxRQUFRTyxLQUFLQyxRQUFRLENBQUMsRUFBRTtnQkFFOUIscUJBQ0UsOERBQUNFO29CQUFJQyxXQUFXcEIsdUVBQWE7OEJBQzNCLDRFQUFDRixtREFBS0E7d0JBQ0phLEtBQUssaUJBQThCRixPQUFiSCxLQUFLRSxJQUFJLEVBQUMsS0FBYSxPQUFWQyxNQUFNWSxHQUFHO3dCQUM1Q1QsS0FBS0gsTUFBTUcsR0FBRzt3QkFDZEMsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7WUFJaEI7WUFFQSxxQkFBTyw4REFBQ1E7MEJBQUdQLFVBQVVFLFFBQVE7Ozs7OztRQUMvQjtRQUNBTSxNQUFLQSxJQUFJO1lBQ1AsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRSxHQUFHRjtZQUM1QixxQkFDRSw4REFBQ3JCLDJEQUFpQkE7Z0JBQ2hCd0IsT0FBT3ZCLG9GQUFRQTtnQkFDZnFCLFVBQVVBO2dCQUNWUCxVQUFVUTs7Ozs7O1FBR2hCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFBUVAsV0FBV3BCLHlFQUFlO2tCQUNqQyw0RUFBQ0Qsb0RBQVVBO1lBQUM4QixPQUFPdkIsS0FBS3VCLEtBQUs7WUFBRXBCLE9BQU9GOzs7Ozs7Ozs7OztBQUk1QztLQXREU0g7QUF3RFQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy9wb3N0LWRldGFpbC9wb3N0LWNvbnRlbnQuanM/ZDhiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmltcG9ydCBQb3N0SGVhZGVyIGZyb20gJy4vcG9zdC1oZWFkZXInO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3Bvc3QtY29udGVudC5tb2R1bGUuY3NzJztcclxuXHJcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSAncmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyJztcclxuaW1wb3J0IHsgYXRvbURhcmsgfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtJztcclxuXHJcbmZ1bmN0aW9uIFBvc3RDb250ZW50KHByb3BzKSB7XHJcbiAgY29uc3QgeyBwb3N0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgaW1hZ2VQYXRoID0gYC9pbWFnZXMvcG9zdHMvJHtwb3N0LnNsdWd9LyR7cG9zdC5pbWFnZX1gO1xyXG5cclxuICBjb25zdCBjdXN0b21SZW5kZXJlcnMgPSB7XHJcbiAgICBpbWFnZShpbWFnZSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtgL2ltYWdlcy9wb3N0cy8ke3Bvc3Quc2x1Z30vJHtpbWFnZS5zcmN9YH1cclxuICAgICAgICAgIGFsdD17aW1hZ2UuYWx0fVxyXG4gICAgICAgICAgd2lkdGg9ezYwMH1cclxuICAgICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgcGFyYWdyYXBoKHBhcmFncmFwaCkge1xyXG4gICAgICBjb25zdCB7IG5vZGUgfSA9IHBhcmFncmFwaDtcclxuXHJcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuWzBdLnR5cGUgPT09ICdpbWFnZScpIHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5vZGUuY2hpbGRyZW5bMF07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvcG9zdHMvJHtwb3N0LnNsdWd9LyR7aW1hZ2UudXJsfWB9XHJcbiAgICAgICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezYwMH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiA8cD57cGFyYWdyYXBoLmNoaWxkcmVufTwvcD47XHJcbiAgICB9LFxyXG4gICAgY29kZShjb2RlKSB7XHJcbiAgICAgIGNvbnN0IHsgbGFuZ3VhZ2UsIHZhbHVlIH0gPSBjb2RlO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTeW50YXhIaWdobGlnaHRlclxyXG4gICAgICAgICAgc3R5bGU9e2F0b21EYXJrfVxyXG4gICAgICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxyXG4gICAgICAgICAgY2hpbGRyZW49e3ZhbHVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgIDxQb3N0SGVhZGVyIHRpdGxlPXtwb3N0LnRpdGxlfSBpbWFnZT17aW1hZ2VQYXRofSAvPlxyXG4gICAgICB7LyogPFJlYWN0TWFya2Rvd24gcmVuZGVyZXJzPXtjdXN0b21SZW5kZXJlcnN9Pntwb3N0LmNvbnRlbnR9PC9SZWFjdE1hcmtkb3duPiAqL31cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q29udGVudDsiXSwibmFtZXMiOlsiUmVhY3RNYXJrZG93biIsIkltYWdlIiwiUG9zdEhlYWRlciIsImNsYXNzZXMiLCJQcmlzbSIsIlN5bnRheEhpZ2hsaWdodGVyIiwiYXRvbURhcmsiLCJQb3N0Q29udGVudCIsInByb3BzIiwicG9zdCIsImltYWdlUGF0aCIsInNsdWciLCJpbWFnZSIsImN1c3RvbVJlbmRlcmVycyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicGFyYWdyYXBoIiwibm9kZSIsImNoaWxkcmVuIiwidHlwZSIsImRpdiIsImNsYXNzTmFtZSIsInVybCIsInAiLCJjb2RlIiwibGFuZ3VhZ2UiLCJ2YWx1ZSIsInN0eWxlIiwiYXJ0aWNsZSIsImNvbnRlbnQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/posts/post-detail/post-content.js\n"));

/***/ })

});