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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CourseModuleForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Card_InputLabel_TextField_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Card,InputLabel,TextField,TextareaAutosize!=!@mui/material */ \"__barrel_optimize__?names=Card,InputLabel,TextField,TextareaAutosize!=!./node_modules/@mui/material/index.js\");\n\n\nfunction CourseModuleForm() {\n    const courseData = {\n        coursename: \"\",\n        details: \"\"\n    };\n    const handleFormChange = (courseData)=>{\n        console.log(courseData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_InputLabel_TextField_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        className: \"p-5\",\n        style: {\n            marginBottom: 40\n        },\n        raised: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_InputLabel_TextField_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                id: \"courseName\",\n                name: \"courseName\",\n                label: \"Course name\",\n                color: \"success\",\n                className: \"mb-4\",\n                // value={formik.values.firstName}\n                onChange: (event)=>handleFormChange({\n                        ...courseData,\n                        coursename: event.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_InputLabel_TextField_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_InputLabel_TextField_TextareaAutosize_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextareaAutosize, {\n                id: \"description\",\n                name: \"description\",\n                \"aria-label\": \"Description\",\n                maxRows: 5,\n                minRows: 3,\n                className: \"border\",\n                onChange: (event)=>handleFormChange({\n                        ...courseData,\n                        coursename: event.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"it-btn large\",\n                type: \"submit\",\n                onClick: ()=>{},\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = CourseModuleForm;\nvar _c;\n$RefreshReg$(_c, \"CourseModuleForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRtaW4vQ291cnNlTW9kdWxlRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEU7QUFPL0QsU0FBU0k7SUFFdEIsTUFBTUMsYUFBd0I7UUFDMUJDLFlBQVk7UUFDWkMsU0FBUztJQUNiO0lBQ0EsTUFBTUMsbUJBQW1CLENBQUNIO1FBQ3hCSSxRQUFRQyxHQUFHLENBQUNMO0lBQ2Q7SUFDQSxxQkFDRSw4REFBQ0YsZ0hBQUlBO1FBQUNRLFdBQVU7UUFBTUMsT0FBTztZQUFFQyxjQUFjO1FBQUc7UUFBR0MsTUFBTTs7MEJBQ3ZELDhEQUFDZCxxSEFBU0E7Z0JBQ1JlLElBQUc7Z0JBQ0hDLE1BQUs7Z0JBQ0xDLE9BQU07Z0JBQ05DLE9BQU07Z0JBQ05QLFdBQVU7Z0JBQ1Ysa0NBQWtDO2dCQUNsQ1EsVUFBVSxDQUFDQyxRQUFVWixpQkFBaUI7d0JBQUMsR0FBR0gsVUFBVTt3QkFBRUMsWUFBWWMsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO29CQUFBOzs7Ozs7MEJBS3RGLDhEQUFDcEIsc0hBQVVBOzBCQUFDOzs7Ozs7MEJBQ1osOERBQUNELDRIQUFnQkE7Z0JBQ2ZjLElBQUc7Z0JBQ0hDLE1BQUs7Z0JBQ0xPLGNBQVc7Z0JBQ1hDLFNBQVM7Z0JBQ1RDLFNBQVM7Z0JBQ1RkLFdBQVU7Z0JBQ1ZRLFVBQVUsQ0FBQ0MsUUFBVVosaUJBQWlCO3dCQUFDLEdBQUdILFVBQVU7d0JBQUVDLFlBQVljLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztvQkFBQTs7Ozs7OzBCQUV0Riw4REFBQ0k7Z0JBQ0NmLFdBQVU7Z0JBQ1ZnQixNQUFLO2dCQUNMQyxTQUFTLEtBQU87MEJBQ2pCOzs7Ozs7Ozs7Ozs7QUFLUDtLQTFDd0J4QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRtaW4vQ291cnNlTW9kdWxlRm9ybS50c3g/Mjc2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmllbGQsIFRleHRhcmVhQXV0b3NpemUsIElucHV0TGFiZWwsIENhcmQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcblxyXG5pbnRlcmZhY2UgQ291cnNlSW5mbyB7XHJcbiAgY291cnNlbmFtZTogc3RyaW5nO1xyXG4gIGRldGFpbHM6IHN0cmluZztcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VNb2R1bGVGb3JtKCkge1xyXG5cclxuICBjb25zdCBjb3Vyc2VEYXRhOkNvdXJzZUluZm8gPSB7XHJcbiAgICAgIGNvdXJzZW5hbWU6IFwiXCIsXHJcbiAgICAgIGRldGFpbHM6IFwiXCJcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRm9ybUNoYW5nZSA9IChjb3Vyc2VEYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjb3Vyc2VEYXRhKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwicC01XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0MCB9fSByYWlzZWQ+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBpZD1cImNvdXJzZU5hbWVcIlxyXG4gICAgICAgIG5hbWU9XCJjb3Vyc2VOYW1lXCJcclxuICAgICAgICBsYWJlbD1cIkNvdXJzZSBuYW1lXCJcclxuICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTRcIlxyXG4gICAgICAgIC8vIHZhbHVlPXtmb3JtaWsudmFsdWVzLmZpcnN0TmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGb3JtQ2hhbmdlKHsuLi5jb3Vyc2VEYXRhLCBjb3Vyc2VuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAvLyBlcnJvcj17Zm9ybWlrLnRvdWNoZWQuZmlyc3ROYW1lICYmIEJvb2xlYW4oZm9ybWlrLmVycm9ycy5maXJzdE5hbWUpfVxyXG4gICAgICAgIC8vIGhlbHBlclRleHQ9e2Zvcm1pay50b3VjaGVkLmZpcnN0TmFtZSAmJiBmb3JtaWsuZXJyb3JzLmZpcnN0TmFtZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxJbnB1dExhYmVsPkRlc2NyaXB0aW9uPC9JbnB1dExhYmVsPlxyXG4gICAgICA8VGV4dGFyZWFBdXRvc2l6ZVxyXG4gICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICBtYXhSb3dzPXs1fVxyXG4gICAgICAgIG1pblJvd3M9ezN9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyXCJcclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGb3JtQ2hhbmdlKHsuLi5jb3Vyc2VEYXRhLCBjb3Vyc2VuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KX1cclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cIml0LWJ0biBsYXJnZVwiXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgID5cclxuICAgICAgICBBZGRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiVGV4dEZpZWxkIiwiVGV4dGFyZWFBdXRvc2l6ZSIsIklucHV0TGFiZWwiLCJDYXJkIiwiQ291cnNlTW9kdWxlRm9ybSIsImNvdXJzZURhdGEiLCJjb3Vyc2VuYW1lIiwiZGV0YWlscyIsImhhbmRsZUZvcm1DaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJyYWlzZWQiLCJpZCIsIm5hbWUiLCJsYWJlbCIsImNvbG9yIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYXJpYS1sYWJlbCIsIm1heFJvd3MiLCJtaW5Sb3dzIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Dashboard/Admin/CourseModuleForm.tsx\n"));

/***/ })

});