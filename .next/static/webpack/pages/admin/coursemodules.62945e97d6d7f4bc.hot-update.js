"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/coursemodules",{

/***/ "./src/components/Dashboard/Admin/CourseModuleForm.tsx":
/*!*************************************************************!*\
  !*** ./src/components/Dashboard/Admin/CourseModuleForm.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CourseModuleForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Card_InputLabel_TextField_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Card,InputLabel,TextField,TextareaAutosize!=!@mui/material */ \"__barrel_optimize__?names=Card,InputLabel,TextField,TextareaAutosize!=!./node_modules/@mui/material/index.js\");\n\n\nfunction CourseModuleForm() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_InputLabel_TextField_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        className: \"px-5 py-3\",\n        style: {\n            marginBottom: 40\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_InputLabel_TextField_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                id: \"courseName\",\n                name: \"courseName\",\n                label: \"Course name\",\n                color: \"success\",\n                className: \"mb-4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_InputLabel_TextField_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_InputLabel_TextField_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextareaAutosize, {\n                id: \"description\",\n                name: \"description\",\n                \"aria-label\": \"Description\",\n                maxRows: 3,\n                minRows: 3,\n                maxLength: 5,\n                className: \"border\",\n                onChange: (event)=>console.log(event.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = CourseModuleForm;\nvar _c;\n$RefreshReg$(_c, \"CourseModuleForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRtaW4vQ291cnNlTW9kdWxlRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEU7QUFFL0QsU0FBU0k7SUFDdEIscUJBQ0UsOERBQUNELGdIQUFJQTtRQUFDRSxXQUFVO1FBQVlDLE9BQU87WUFBQ0MsY0FBYztRQUFFOzswQkFDbEQsOERBQUNQLHFIQUFTQTtnQkFDUlEsSUFBRztnQkFDSEMsTUFBSztnQkFDTEMsT0FBTTtnQkFDTkMsT0FBTTtnQkFDTk4sV0FBVTs7Ozs7OzBCQU1kLDhEQUFDSCxzSEFBVUE7MEJBQUM7Ozs7OzswQkFDViw4REFBQ0QsNEhBQWdCQTtnQkFDZk8sSUFBRztnQkFDSEMsTUFBSztnQkFDTEcsY0FBVztnQkFDWEMsU0FBUztnQkFDVEMsU0FBUztnQkFDVEMsV0FBVztnQkFDWFYsV0FBVTtnQkFDVlcsVUFBVSxDQUFDQyxRQUFVQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7O0FBSTNEO0tBM0J3QmpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9BZG1pbi9Db3Vyc2VNb2R1bGVGb3JtLnRzeD8yNzY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWVsZCwgVGV4dGFyZWFBdXRvc2l6ZSwgSW5wdXRMYWJlbCwgQ2FyZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VNb2R1bGVGb3JtKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJweC01IHB5LTNcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogNDB9fT5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGlkPVwiY291cnNlTmFtZVwiXHJcbiAgICAgICAgbmFtZT1cImNvdXJzZU5hbWVcIlxyXG4gICAgICAgIGxhYmVsPVwiQ291cnNlIG5hbWVcIlxyXG4gICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItNFwiXHJcbiAgICAgICAgLy8gdmFsdWU9e2Zvcm1pay52YWx1ZXMuZmlyc3ROYW1lfVxyXG4gICAgICAgIC8vIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8vIGVycm9yPXtmb3JtaWsudG91Y2hlZC5maXJzdE5hbWUgJiYgQm9vbGVhbihmb3JtaWsuZXJyb3JzLmZpcnN0TmFtZSl9XHJcbiAgICAgICAgLy8gaGVscGVyVGV4dD17Zm9ybWlrLnRvdWNoZWQuZmlyc3ROYW1lICYmIGZvcm1pay5lcnJvcnMuZmlyc3ROYW1lfVxyXG4gICAgICAvPlxyXG4gICAgPElucHV0TGFiZWw+RGVzY3JpcHRpb248L0lucHV0TGFiZWw+XHJcbiAgICAgIDxUZXh0YXJlYUF1dG9zaXplXHJcbiAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgIG1heFJvd3M9ezN9XHJcbiAgICAgICAgbWluUm93cz17M31cclxuICAgICAgICBtYXhMZW5ndGg9ezV9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyXCJcclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpfSBcclxuICAgICAgLz5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJUZXh0RmllbGQiLCJUZXh0YXJlYUF1dG9zaXplIiwiSW5wdXRMYWJlbCIsIkNhcmQiLCJDb3Vyc2VNb2R1bGVGb3JtIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJpZCIsIm5hbWUiLCJsYWJlbCIsImNvbG9yIiwiYXJpYS1sYWJlbCIsIm1heFJvd3MiLCJtaW5Sb3dzIiwibWF4TGVuZ3RoIiwib25DaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Dashboard/Admin/CourseModuleForm.tsx\n"));

/***/ })

});