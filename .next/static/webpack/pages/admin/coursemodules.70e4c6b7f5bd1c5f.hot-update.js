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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CourseModuleForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Card,TextField!=!@mui/material */ \"__barrel_optimize__?names=Card,TextField!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction CourseModuleForm(param) {\n    let { formState, degree, course } = param;\n    _s();\n    const [moduleData, setModuleData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const addModule = ()=>{\n        // close the form\n        formState(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setModuleData(...moduleData, de);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        className: \"p-5\",\n        style: {\n            marginBottom: 40\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                id: \"moduleName\",\n                name: \"moduleName\",\n                label: \"Module name\",\n                color: \"success\",\n                className: \"mb-4 col-6 col-md-6\",\n                // value={courseData?.CourseName || \"\"}\n                // inputProps={!formEditable && { readOnly: true }}\n                contentEditable: false\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                        type: \"number\",\n                        label: \"Course units\",\n                        className: \"mr-5\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                        id: \"coursecode\",\n                        name: \"coursecode\",\n                        label: \"Course code\",\n                        color: \"success\",\n                        className: \"mb-4\",\n                        onChange: (event)=>setModuleData({\n                                ...moduleData,\n                                courseCode: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"it-btn\",\n                onClick: ()=>addModule(),\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(CourseModuleForm, \"70Ot19+9coGJNQ8vhbgEvfrLAag=\");\n_c = CourseModuleForm;\nvar _c;\n$RefreshReg$(_c, \"CourseModuleForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRtaW4vQ291cnNlTW9kdWxlRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDaEI7QUFVN0IsU0FBU0ksaUJBQWlCLEtBQTJCO1FBQTNCLEVBQUNDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUMsR0FBM0I7O0lBQ3ZDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUE7SUFDNUMsTUFBTU8sWUFBWTtRQUNoQixpQkFBaUI7UUFDakJMLFVBQVU7SUFDWjtJQUNBSCxnREFBU0EsQ0FBQztRQUFPTyxpQkFBaUJELFlBQVlHO0lBQUcsR0FBRyxFQUFFO0lBQ3RELHFCQUNFLDhEQUFDWCxvRkFBSUE7UUFBQ1ksV0FBVTtRQUFNQyxPQUFPO1lBQUVDLGNBQWM7UUFBRzs7MEJBQzlDLDhEQUFDYix5RkFBU0E7Z0JBQ1JjLElBQUc7Z0JBQ0hDLE1BQUs7Z0JBQ0xDLE9BQU07Z0JBQ05DLE9BQU07Z0JBQ05OLFdBQVU7Z0JBQ1YsdUNBQXVDO2dCQUN2QyxtREFBbUQ7Z0JBQ25ETyxpQkFBaUI7Ozs7OzswQkFLbkIsOERBQUNDO2dCQUFJUixXQUFVOztrQ0FDYiw4REFBQ1gseUZBQVNBO3dCQUFDb0IsTUFBSzt3QkFBU0osT0FBTTt3QkFBZUwsV0FBVTs7Ozs7O2tDQUN4RCw4REFBQ1gseUZBQVNBO3dCQUNSYyxJQUFHO3dCQUNIQyxNQUFLO3dCQUNMQyxPQUFNO3dCQUNOQyxPQUFNO3dCQUNOTixXQUFVO3dCQUNWVSxVQUFVLENBQUNDLFFBQVVkLGNBQWM7Z0NBQUMsR0FBR0QsVUFBVTtnQ0FBRWdCLFlBQVlELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSzs0QkFBQTs7Ozs7Ozs7Ozs7OzBCQUdyRiw4REFBQ0M7Z0JBQU9mLFdBQVU7Z0JBQVNnQixTQUFTLElBQU1sQjswQkFBYTs7Ozs7Ozs7Ozs7O0FBRzdEO0dBcEN3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkL0FkbWluL0NvdXJzZU1vZHVsZUZvcm0udHN4PzI3NjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgVGV4dEZpZWxkLCBJbnB1dExhYmVsIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBudW1iZXIgfSBmcm9tIFwieXVwXCI7XHJcblxyXG5pbnRlcmZhY2UgbW9kdWxlU3RhdGUgIHtcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgZGVncmVlOiBudW1iZXIsXHJcbiAgY291cnNlOiBudW1iZXIsXHJcbiAgY291cnNlQ29kZTogc3RyaW5nLFxyXG4gIGNvdXJzZVVuaXRzOiBudW1iZXJcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VNb2R1bGVGb3JtKHtmb3JtU3RhdGUsIGRlZ3JlZSwgY291cnNlfSkge1xyXG4gIGNvbnN0IFttb2R1bGVEYXRhLCBzZXRNb2R1bGVEYXRhXSA9IHVzZVN0YXRlPG1vZHVsZVN0YXRlPigpXHJcbiAgY29uc3QgYWRkTW9kdWxlID0gKCkgPT4ge1xyXG4gICAgLy8gY2xvc2UgdGhlIGZvcm1cclxuICAgIGZvcm1TdGF0ZShmYWxzZSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtzZXRNb2R1bGVEYXRhKC4uLm1vZHVsZURhdGEsIGRlKX0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJwLTVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQwIH19PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgaWQ9XCJtb2R1bGVOYW1lXCJcclxuICAgICAgICBuYW1lPVwibW9kdWxlTmFtZVwiXHJcbiAgICAgICAgbGFiZWw9XCJNb2R1bGUgbmFtZVwiXHJcbiAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJtYi00IGNvbC02IGNvbC1tZC02XCJcclxuICAgICAgICAvLyB2YWx1ZT17Y291cnNlRGF0YT8uQ291cnNlTmFtZSB8fCBcIlwifVxyXG4gICAgICAgIC8vIGlucHV0UHJvcHM9eyFmb3JtRWRpdGFibGUgJiYgeyByZWFkT25seTogdHJ1ZSB9fVxyXG4gICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZmFsc2V9XHJcbiAgICAgICAgLy8gdmFsdWU9e2Zvcm1pay52YWx1ZXMuZmlyc3ROYW1lfVxyXG4gICAgICAgIC8vIGVycm9yPXtmb3JtaWsudG91Y2hlZC5maXJzdE5hbWUgJiYgQm9vbGVhbihmb3JtaWsuZXJyb3JzLmZpcnN0TmFtZSl9XHJcbiAgICAgICAgLy8gaGVscGVyVGV4dD17Zm9ybWlrLnRvdWNoZWQuZmlyc3ROYW1lICYmIGZvcm1pay5lcnJvcnMuZmlyc3ROYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgIDxUZXh0RmllbGQgdHlwZT1cIm51bWJlclwiIGxhYmVsPVwiQ291cnNlIHVuaXRzXCIgY2xhc3NOYW1lPVwibXItNVwiIC8+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJjb3Vyc2Vjb2RlXCJcclxuICAgICAgICAgIG5hbWU9XCJjb3Vyc2Vjb2RlXCJcclxuICAgICAgICAgIGxhYmVsPVwiQ291cnNlIGNvZGVcIlxyXG4gICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TW9kdWxlRGF0YSh7Li4ubW9kdWxlRGF0YSwgY291cnNlQ29kZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaXQtYnRuXCIgb25DbGljaz17KCkgPT4gYWRkTW9kdWxlKCl9PkFkZDwvYnV0dG9uPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJUZXh0RmllbGQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvdXJzZU1vZHVsZUZvcm0iLCJmb3JtU3RhdGUiLCJkZWdyZWUiLCJjb3Vyc2UiLCJtb2R1bGVEYXRhIiwic2V0TW9kdWxlRGF0YSIsImFkZE1vZHVsZSIsImRlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJpZCIsIm5hbWUiLCJsYWJlbCIsImNvbG9yIiwiY29udGVudEVkaXRhYmxlIiwiZGl2IiwidHlwZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjb3Vyc2VDb2RlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Dashboard/Admin/CourseModuleForm.tsx\n"));

/***/ })

});