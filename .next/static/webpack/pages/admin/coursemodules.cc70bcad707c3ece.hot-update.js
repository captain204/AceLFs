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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CourseModuleForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Card,TextField!=!@mui/material */ \"__barrel_optimize__?names=Card,TextField!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction CourseModuleForm(param) {\n    let { formState, degree, course } = param;\n    _s();\n    const [moduleData, setModuleData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const addModule = ()=>{\n        console.log(moduleData);\n        // close the form\n        formState(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setModuleData({\n            ...moduleData,\n            degree: degree,\n            course: course\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        className: \"p-5\",\n        style: {\n            marginBottom: 40\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                id: \"moduleName\",\n                name: \"moduleName\",\n                label: \"Module name\",\n                color: \"success\",\n                className: \"mb-4 col-6 col-md-6\",\n                // value={courseData?.CourseName || \"\"}\n                // inputProps={!formEditable && { readOnly: true }}\n                contentEditable: false,\n                onChange: (event)=>setModuleData({\n                        ...moduleData,\n                        name: event.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                        type: \"number\",\n                        label: \"Course units\",\n                        className: \"mr-5\",\n                        onChange: (event)=>setModuleData({\n                                ...moduleData,\n                                courseUnits: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                        id: \"coursecode\",\n                        name: \"coursecode\",\n                        label: \"Course code\",\n                        color: \"success\",\n                        className: \"mb-4\",\n                        onChange: (event)=>setModuleData({\n                                ...moduleData,\n                                courseCode: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"it-btn\",\n                onClick: ()=>addModule(),\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(CourseModuleForm, \"70Ot19+9coGJNQ8vhbgEvfrLAag=\");\n_c = CourseModuleForm;\nvar _c;\n$RefreshReg$(_c, \"CourseModuleForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRtaW4vQ291cnNlTW9kdWxlRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDaEI7QUFTN0IsU0FBU0ksaUJBQWlCLEtBQTJCO1FBQTNCLEVBQUNDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUMsR0FBM0I7O0lBQ3ZDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUE7SUFDNUMsTUFBTU8sWUFBWTtRQUNoQkMsUUFBUUMsR0FBRyxDQUFDSjtRQUNaLGlCQUFpQjtRQUNqQkgsVUFBVTtJQUNaO0lBQ0FILGdEQUFTQSxDQUFDO1FBQU9PLGNBQWM7WUFBQyxHQUFHRCxVQUFVO1lBQUVGLFFBQVFBO1lBQVFDLFFBQVFBO1FBQU07SUFBRSxHQUFHLEVBQUU7SUFDcEYscUJBQ0UsOERBQUNQLG9GQUFJQTtRQUFDYSxXQUFVO1FBQU1DLE9BQU87WUFBRUMsY0FBYztRQUFHOzswQkFDOUMsOERBQUNkLHlGQUFTQTtnQkFDUmUsSUFBRztnQkFDSEMsTUFBSztnQkFDTEMsT0FBTTtnQkFDTkMsT0FBTTtnQkFDTk4sV0FBVTtnQkFDVix1Q0FBdUM7Z0JBQ3ZDLG1EQUFtRDtnQkFDbkRPLGlCQUFpQjtnQkFDakJDLFVBQVUsQ0FBQ0MsUUFBVWIsY0FBYzt3QkFBQyxHQUFHRCxVQUFVO3dCQUFFUyxNQUFNSyxNQUFNQyxNQUFNLENBQUNDLEtBQUs7b0JBQUE7Ozs7OzswQkFFN0UsOERBQUNDO2dCQUFJWixXQUFVOztrQ0FDYiw4REFBQ1oseUZBQVNBO3dCQUFDeUIsTUFBSzt3QkFBU1IsT0FBTTt3QkFBZUwsV0FBVTt3QkFBTVEsVUFBVSxDQUFDQyxRQUFTYixjQUFjO2dDQUFDLEdBQUdELFVBQVU7Z0NBQUVtQixhQUFhTCxNQUFNQyxNQUFNLENBQUNDLEtBQUs7NEJBQUE7Ozs7OztrQ0FDL0ksOERBQUN2Qix5RkFBU0E7d0JBQ1JlLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLE9BQU07d0JBQ05DLE9BQU07d0JBQ05OLFdBQVU7d0JBQ1ZRLFVBQVUsQ0FBQ0MsUUFBVWIsY0FBYztnQ0FBQyxHQUFHRCxVQUFVO2dDQUFFb0IsWUFBWU4sTUFBTUMsTUFBTSxDQUFDQyxLQUFLOzRCQUFBOzs7Ozs7Ozs7Ozs7MEJBR3JGLDhEQUFDSztnQkFBT2hCLFdBQVU7Z0JBQVNpQixTQUFTLElBQU1wQjswQkFBYTs7Ozs7Ozs7Ozs7O0FBRzdEO0dBbkN3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkL0FkbWluL0NvdXJzZU1vZHVsZUZvcm0udHN4PzI3NjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgVGV4dEZpZWxkLCBJbnB1dExhYmVsIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIG1vZHVsZVN0YXRlICB7XHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIGRlZ3JlZTogbnVtYmVyLFxyXG4gIGNvdXJzZTogbnVtYmVyLFxyXG4gIGNvdXJzZUNvZGU6IHN0cmluZyxcclxuICBjb3Vyc2VVbml0czogbnVtYmVyXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291cnNlTW9kdWxlRm9ybSh7Zm9ybVN0YXRlLCBkZWdyZWUsIGNvdXJzZX0pIHtcclxuICBjb25zdCBbbW9kdWxlRGF0YSwgc2V0TW9kdWxlRGF0YV0gPSB1c2VTdGF0ZTxtb2R1bGVTdGF0ZT4oKVxyXG4gIGNvbnN0IGFkZE1vZHVsZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG1vZHVsZURhdGEpXHJcbiAgICAvLyBjbG9zZSB0aGUgZm9ybVxyXG4gICAgZm9ybVN0YXRlKGZhbHNlKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge3NldE1vZHVsZURhdGEoey4uLm1vZHVsZURhdGEsIGRlZ3JlZTogZGVncmVlLCBjb3Vyc2U6IGNvdXJzZX0pfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT1cInAtNVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNDAgfX0+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBpZD1cIm1vZHVsZU5hbWVcIlxyXG4gICAgICAgIG5hbWU9XCJtb2R1bGVOYW1lXCJcclxuICAgICAgICBsYWJlbD1cIk1vZHVsZSBuYW1lXCJcclxuICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTQgY29sLTYgY29sLW1kLTZcIlxyXG4gICAgICAgIC8vIHZhbHVlPXtjb3Vyc2VEYXRhPy5Db3Vyc2VOYW1lIHx8IFwiXCJ9XHJcbiAgICAgICAgLy8gaW5wdXRQcm9wcz17IWZvcm1FZGl0YWJsZSAmJiB7IHJlYWRPbmx5OiB0cnVlIH19XHJcbiAgICAgICAgY29udGVudEVkaXRhYmxlPXtmYWxzZX1cclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRNb2R1bGVEYXRhKHsuLi5tb2R1bGVEYXRhLCBuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICA8VGV4dEZpZWxkIHR5cGU9XCJudW1iZXJcIiBsYWJlbD1cIkNvdXJzZSB1bml0c1wiIGNsYXNzTmFtZT1cIm1yLTVcIm9uQ2hhbmdlPXsoZXZlbnQpPT4gc2V0TW9kdWxlRGF0YSh7Li4ubW9kdWxlRGF0YSwgY291cnNlVW5pdHM6IGV2ZW50LnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwiY291cnNlY29kZVwiXHJcbiAgICAgICAgICBuYW1lPVwiY291cnNlY29kZVwiXHJcbiAgICAgICAgICBsYWJlbD1cIkNvdXJzZSBjb2RlXCJcclxuICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi00XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE1vZHVsZURhdGEoey4uLm1vZHVsZURhdGEsIGNvdXJzZUNvZGU6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIml0LWJ0blwiIG9uQ2xpY2s9eygpID0+IGFkZE1vZHVsZSgpfT5BZGQ8L2J1dHRvbj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJDYXJkIiwiVGV4dEZpZWxkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb3Vyc2VNb2R1bGVGb3JtIiwiZm9ybVN0YXRlIiwiZGVncmVlIiwiY291cnNlIiwibW9kdWxlRGF0YSIsInNldE1vZHVsZURhdGEiLCJhZGRNb2R1bGUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJpZCIsIm5hbWUiLCJsYWJlbCIsImNvbG9yIiwiY29udGVudEVkaXRhYmxlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwidHlwZSIsImNvdXJzZVVuaXRzIiwiY291cnNlQ29kZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Dashboard/Admin/CourseModuleForm.tsx\n"));

/***/ })

});