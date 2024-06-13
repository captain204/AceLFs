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

/***/ "./src/components/Dashboard/Admin/CourseModules.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Dashboard/Admin/CourseModules.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Card,CardContent,FormControl,InputLabel,MenuItem,Select!=!@mui/material */ \"__barrel_optimize__?names=Card,CardContent,FormControl,InputLabel,MenuItem,Select!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _Globals_Slices_Degree_CoursesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Globals/Slices/Degree/CoursesSlice */ \"./src/Globals/Slices/Degree/CoursesSlice.ts\");\n/* harmony import */ var _Globals_Slices_Degree_DegreesSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Globals/Slices/Degree/DegreesSlice */ \"./src/Globals/Slices/Degree/DegreesSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DegreesForm = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const [selectedDegree, setSelectedDegree] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        slug: \"\",\n        category: \"\",\n        description: \"\",\n        coursesCount: 0,\n        duration: \"\",\n        id: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_Globals_Slices_Degree_CoursesSlice__WEBPACK_IMPORTED_MODULE_2__.getAllCourses)());\n        dispatch((0,_Globals_Slices_Degree_DegreesSlice__WEBPACK_IMPORTED_MODULE_3__.getAllDegrees)());\n    }, [\n        dispatch\n    ]);\n    const { degrees } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.degrees);\n    const courses = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.courses) || [];\n    const [degreeCourses, setDegreeCourses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleDegreeChange = (event)=>{\n        const selectedId = event.target.value;\n        const degree = degrees.find((d)=>d.id === selectedId);\n        if (degree) {\n            setSelectedDegree({\n                name: degree.name,\n                slug: degree.slug,\n                category: degree.category,\n                description: degree.description,\n                coursesCount: degree.coursesCount,\n                duration: degree.duration,\n                id: degree.id\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { slug } = selectedDegree;\n        setDegreeCourses(courses.filter((course)=>{\n            var _course_degreeType;\n            return (course === null || course === void 0 ? void 0 : (_course_degreeType = course.degreeType) === null || _course_degreeType === void 0 ? void 0 : _course_degreeType.slug) === slug;\n        }));\n    }, [\n        selectedDegree\n    ]);\n    console.log(degreeCourses);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {\n        raised: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                        sx: {\n                            m: 1,\n                            width: \"25ch\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__.InputLabel, {\n                                id: \"degreeType-label\",\n                                children: \"Degree Type\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__.Select, {\n                                labelId: \"degreeType-label\",\n                                id: \"degreeType\",\n                                name: \"degreeType\",\n                                //   value={formik.values.degreeType}\n                                onChange: (event)=>{\n                                    handleDegreeChange(event);\n                                },\n                                label: \"Degree Type\",\n                                children: degrees && degrees.map((degree)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {\n                                        value: degree.id,\n                                        children: degree.name\n                                    }, degree.id, false, {\n                                        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DegreesForm, \"OkQiDnE7rBpzipdm8wJddMH58u4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = DegreesForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DegreesForm);\nvar _c;\n$RefreshReg$(_c, \"DegreesForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRtaW4vQ291cnNlTW9kdWxlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFnQjVCO0FBR2dDO0FBR3FCO0FBQ0E7QUFlNUUsTUFBTWEsY0FBK0M7O0lBQ25ELE1BQU1DLFdBQXdCTCx3REFBV0E7SUFFekMsTUFBTSxDQUFDTSxnQkFBZ0JDLGtCQUFrQixHQUFHZCwrQ0FBUUEsQ0FBQztRQUNuRGUsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsYUFBYTtRQUNiQyxjQUFjO1FBQ2RDLFVBQVU7UUFDVkMsSUFBSTtJQUNOO0lBRUF0QixnREFBU0EsQ0FBQztRQUNSYSxTQUFTSCxrRkFBYUE7UUFDdEJHLFNBQVNGLGtGQUFhQTtJQUN4QixHQUFHO1FBQUNFO0tBQVM7SUFFYixNQUFNLEVBQUVVLE9BQU8sRUFBRSxHQUFHZCx3REFBV0EsQ0FBQyxDQUFDZSxRQUFxQkEsTUFBTUQsT0FBTztJQUNuRSxNQUFPRSxVQUFXaEIsd0RBQVdBLENBQUMsQ0FBQ2UsUUFBcUJBLE1BQU1DLE9BQU8sS0FBSyxFQUFFO0lBQ3hFLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUcxQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJELE1BQU0yQixxQkFBcUIsQ0FBQ0M7UUFDMUIsTUFBTUMsYUFBYUQsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO1FBQ3JDLE1BQU1DLFNBQVNWLFFBQVFXLElBQUksQ0FBQyxDQUFDQyxJQUFXQSxFQUFFYixFQUFFLEtBQUtRO1FBQ2pELElBQUlHLFFBQVE7WUFDVmxCLGtCQUFrQjtnQkFDaEJDLE1BQU1pQixPQUFPakIsSUFBSTtnQkFDakJDLE1BQU1nQixPQUFPaEIsSUFBSTtnQkFDakJDLFVBQVVlLE9BQU9mLFFBQVE7Z0JBQ3pCQyxhQUFhYyxPQUFPZCxXQUFXO2dCQUMvQkMsY0FBY2EsT0FBT2IsWUFBWTtnQkFDakNDLFVBQVVZLE9BQU9aLFFBQVE7Z0JBQ3pCQyxJQUFJVyxPQUFPWCxFQUFFO1lBQ2Y7UUFDRjtJQUNGO0lBRUF0QixnREFBU0EsQ0FBQztRQUNSLE1BQU0sRUFBRWlCLElBQUksRUFBRSxHQUFHSDtRQUNqQmEsaUJBQ0VGLFFBQVFXLE1BQU0sQ0FBQyxDQUFDQztnQkFBV0E7bUJBQUFBLENBQUFBLG1CQUFBQSw4QkFBQUEscUJBQUFBLE9BQVFDLFVBQVUsY0FBbEJELHlDQUFBQSxtQkFBb0JwQixJQUFJLE1BQUtBOztJQUU1RCxHQUFHO1FBQUNIO0tBQWU7SUFFbkJ5QixRQUFRQyxHQUFHLENBQUNkO0lBQ1oscUJBQ0UsOERBQUN4Qiw2SEFBSUE7UUFBQ3VDLFFBQVE7OzBCQUNaLDhEQUFDdEMsb0lBQVdBOzBCQUNWLDRFQUFDdUM7OEJBQ0MsNEVBQUNwQyxvSUFBV0E7d0JBQUNxQyxJQUFJOzRCQUFFQyxHQUFHOzRCQUFHQyxPQUFPO3dCQUFPOzswQ0FDckMsOERBQUN6QyxtSUFBVUE7Z0NBQUNrQixJQUFHOzBDQUFtQjs7Ozs7OzBDQUNsQyw4REFBQ2YsK0hBQU1BO2dDQUNMdUMsU0FBUTtnQ0FDUnhCLElBQUc7Z0NBQ0hOLE1BQUs7Z0NBQ0wscUNBQXFDO2dDQUNyQytCLFVBQVUsQ0FBQ2xCO29DQUNURCxtQkFBbUJDO2dDQUNyQjtnQ0FDQW1CLE9BQU07MENBRUx6QixXQUNDQSxRQUFRMEIsR0FBRyxDQUFDLENBQUNoQix1QkFDWCw4REFBQzVCLGlJQUFRQTt3Q0FBaUIyQixPQUFPQyxPQUFPWCxFQUFFO2tEQUN2Q1csT0FBT2pCLElBQUk7dUNBRENpQixPQUFPWCxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRcEMsOERBQUM0Qjs7Ozs7Ozs7Ozs7QUFLUDtHQTdFTXRDOztRQUMwQkosb0RBQVdBO1FBaUJyQkMsb0RBQVdBO1FBQ2JBLG9EQUFXQTs7O0tBbkJ6Qkc7QUErRU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkL0FkbWluL0NvdXJzZU1vZHVsZXMudHN4P2IzMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybWlrLCBGb3JtaWssIEZvcm0gfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIFRleHRGaWVsZCxcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIElucHV0TGFiZWwsXHJcbiAgTWVudUl0ZW0sXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgU2VsZWN0LFxyXG4gIEJ1dHRvbixcclxuICBTdGVwcGVyLFxyXG4gIFN0ZXAsXHJcbiAgU3RlcExhYmVsLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tIFwiQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlclwiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcIkBtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL0dsb2JhbHMvc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IHsgVGh1bmtEaXNwYXRjaCwgVW5rbm93bkFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IGdldEFsbENvdXJzZXMgfSBmcm9tIFwiLi4vLi4vLi4vR2xvYmFscy9TbGljZXMvRGVncmVlL0NvdXJzZXNTbGljZVwiO1xyXG5pbXBvcnQgeyBnZXRBbGxEZWdyZWVzIH0gZnJvbSBcIi4uLy4uLy4uL0dsb2JhbHMvU2xpY2VzL0RlZ3JlZS9EZWdyZWVzU2xpY2VcIjtcclxuaW1wb3J0IHsgc3VibWl0RW1lcmdlbmN5Rm9ybSB9IGZyb20gXCIuLi8uLi8uLi9HbG9iYWxzL1NsaWNlcy9BcHBsaWNhdGlvblNsaWNlL0VtZXJnZW5jeVwiO1xyXG5pbXBvcnQgeyBzdWJtaXRSZWZlcmVlRm9ybSB9IGZyb20gXCIuLi8uLi8uLi9HbG9iYWxzL1NsaWNlcy9BcHBsaWNhdGlvblNsaWNlL1JlZmVyZWVcIjtcclxuaW1wb3J0IHsgc3VibWl0Rmlyc3RGb3JtIH0gZnJvbSBcIi4uLy4uLy4uL0dsb2JhbHMvU2xpY2VzL0FwcGxpY2F0aW9uU2xpY2UvRmlyc3RGb3JtU2xpY2VcIjtcclxuXHJcbnR5cGUgQXBwRGlzcGF0Y2ggPSBUaHVua0Rpc3BhdGNoPFJvb3RTdGF0ZSwgdW5rbm93biwgVW5rbm93bkFjdGlvbj47XHJcblxyXG5pbnRlcmZhY2UgUGVyc29uYWxJbmZvRm9ybVByb3BzIHtcclxuICBmb3JtaWs6IGFueTsgLy8gQWRqdXN0IHRoZSB0eXBlIGlmIG5lZWRlZFxyXG4gIHNlbGVjdGVkRGVncmVlOiBhbnk7XHJcbiAgc2V0U2VsZWN0ZWREZWdyZWU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGFueT4+O1xyXG4gIHNlbGVjdGVkQ291cnNlOiBhbnk7XHJcbiAgc2V0U2VsZWN0ZWRDb3Vyc2U6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGFueT4+O1xyXG59XHJcblxyXG5jb25zdCBEZWdyZWVzRm9ybTogUmVhY3QuRkM8UGVyc29uYWxJbmZvRm9ybVByb3BzPiA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaDogQXBwRGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBbc2VsZWN0ZWREZWdyZWUsIHNldFNlbGVjdGVkRGVncmVlXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBzbHVnOiBcIlwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgIGNvdXJzZXNDb3VudDogMCxcclxuICAgIGR1cmF0aW9uOiBcIlwiLFxyXG4gICAgaWQ6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChnZXRBbGxDb3Vyc2VzKCkpO1xyXG4gICAgZGlzcGF0Y2goZ2V0QWxsRGVncmVlcygpKTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgeyBkZWdyZWVzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuZGVncmVlcyk7XHJcbiAgY29uc3QgIGNvdXJzZXMgID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmNvdXJzZXMpIHx8IFtdO1xyXG4gIGNvbnN0IFtkZWdyZWVDb3Vyc2VzLCBzZXREZWdyZWVDb3Vyc2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVncmVlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZElkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc3QgZGVncmVlID0gZGVncmVlcy5maW5kKChkOiBhbnkpID0+IGQuaWQgPT09IHNlbGVjdGVkSWQpO1xyXG4gICAgaWYgKGRlZ3JlZSkge1xyXG4gICAgICBzZXRTZWxlY3RlZERlZ3JlZSh7XHJcbiAgICAgICAgbmFtZTogZGVncmVlLm5hbWUsXHJcbiAgICAgICAgc2x1ZzogZGVncmVlLnNsdWcsXHJcbiAgICAgICAgY2F0ZWdvcnk6IGRlZ3JlZS5jYXRlZ29yeSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGVncmVlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGNvdXJzZXNDb3VudDogZGVncmVlLmNvdXJzZXNDb3VudCxcclxuICAgICAgICBkdXJhdGlvbjogZGVncmVlLmR1cmF0aW9uLFxyXG4gICAgICAgIGlkOiBkZWdyZWUuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHNlbGVjdGVkRGVncmVlO1xyXG4gICAgc2V0RGVncmVlQ291cnNlcyhcclxuICAgICAgY291cnNlcy5maWx0ZXIoKGNvdXJzZSkgPT4gY291cnNlPy5kZWdyZWVUeXBlPy5zbHVnID09PSBzbHVnKVxyXG4gICAgKTtcclxuICB9LCBbc2VsZWN0ZWREZWdyZWVdKTtcclxuXHJcbiAgY29uc29sZS5sb2coZGVncmVlQ291cnNlcylcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgcmFpc2VkPXt0cnVlfT5cclxuICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IG06IDEsIHdpZHRoOiBcIjI1Y2hcIiB9fT5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZWdyZWVUeXBlLWxhYmVsXCI+RGVncmVlIFR5cGU8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBsYWJlbElkPVwiZGVncmVlVHlwZS1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZWdyZWVUeXBlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZGVncmVlVHlwZVwiXHJcbiAgICAgICAgICAgICAgLy8gICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5kZWdyZWVUeXBlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZURlZ3JlZUNoYW5nZShldmVudCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBsYWJlbD1cIkRlZ3JlZSBUeXBlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkZWdyZWVzICYmXHJcbiAgICAgICAgICAgICAgICBkZWdyZWVzLm1hcCgoZGVncmVlOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17ZGVncmVlLmlkfSB2YWx1ZT17ZGVncmVlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGVncmVlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPGRpdj5cclxuICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVncmVlc0Zvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiSW5wdXRMYWJlbCIsIk1lbnVJdGVtIiwiRm9ybUNvbnRyb2wiLCJTZWxlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZ2V0QWxsQ291cnNlcyIsImdldEFsbERlZ3JlZXMiLCJEZWdyZWVzRm9ybSIsImRpc3BhdGNoIiwic2VsZWN0ZWREZWdyZWUiLCJzZXRTZWxlY3RlZERlZ3JlZSIsIm5hbWUiLCJzbHVnIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsImNvdXJzZXNDb3VudCIsImR1cmF0aW9uIiwiaWQiLCJkZWdyZWVzIiwic3RhdGUiLCJjb3Vyc2VzIiwiZGVncmVlQ291cnNlcyIsInNldERlZ3JlZUNvdXJzZXMiLCJoYW5kbGVEZWdyZWVDaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkSWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRlZ3JlZSIsImZpbmQiLCJkIiwiZmlsdGVyIiwiY291cnNlIiwiZGVncmVlVHlwZSIsImNvbnNvbGUiLCJsb2ciLCJyYWlzZWQiLCJmb3JtIiwic3giLCJtIiwid2lkdGgiLCJsYWJlbElkIiwib25DaGFuZ2UiLCJsYWJlbCIsIm1hcCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Dashboard/Admin/CourseModules.tsx\n"));

/***/ })

});