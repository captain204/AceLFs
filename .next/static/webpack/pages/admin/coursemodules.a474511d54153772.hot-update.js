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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Card,CardContent,FormControl,InputLabel,MenuItem,Select!=!@mui/material */ \"__barrel_optimize__?names=Card,CardContent,FormControl,InputLabel,MenuItem,Select!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _Globals_Slices_Degree_CoursesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Globals/Slices/Degree/CoursesSlice */ \"./src/Globals/Slices/Degree/CoursesSlice.ts\");\n/* harmony import */ var _Globals_Slices_Degree_DegreesSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Globals/Slices/Degree/DegreesSlice */ \"./src/Globals/Slices/Degree/DegreesSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DegreesForm = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const [selectedDegree, setSelectedDegree] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        slug: \"\",\n        category: \"\",\n        description: \"\",\n        coursesCount: 0,\n        duration: \"\",\n        id: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_Globals_Slices_Degree_CoursesSlice__WEBPACK_IMPORTED_MODULE_2__.getAllCourses)());\n        dispatch((0,_Globals_Slices_Degree_DegreesSlice__WEBPACK_IMPORTED_MODULE_3__.getAllDegrees)());\n    }, [\n        dispatch\n    ]);\n    const { degrees } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.degrees);\n    const handleDegreeChange = (event)=>{\n        const selectedId = event.target.value;\n        const degree = degrees.find((d)=>d.id === selectedId);\n        if (degree) {\n            setSelectedDegree({\n                name: degree.name,\n                slug: degree.slug,\n                category: degree.category,\n                description: degree.description,\n                coursesCount: degree.coursesCount,\n                duration: degree.duration,\n                id: degree.id\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        selectedDegree\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {\n        raised: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                        sx: {\n                            m: 1,\n                            width: \"25ch\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__.InputLabel, {\n                                id: \"degreeType-label\",\n                                children: \"Degree Type\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__.Select, {\n                                labelId: \"degreeType-label\",\n                                id: \"degreeType\",\n                                name: \"degreeType\",\n                                //   value={formik.values.degreeType}\n                                onChange: (event)=>{\n                                    handleDegreeChange(event);\n                                },\n                                label: \"Degree Type\",\n                                children: degrees && degrees.map((degree)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {\n                                        value: degree.id,\n                                        children: degree.name\n                                    }, degree.id, false, {\n                                        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DegreesForm, \"K8sQC7FaZXSSGFNI/9akShfLSeI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = DegreesForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DegreesForm);\nvar _c;\n$RefreshReg$(_c, \"DegreesForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRtaW4vQ291cnNlTW9kdWxlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFnQjVCO0FBR2dDO0FBR3FCO0FBQ0E7QUFlNUUsTUFBTWEsY0FBK0M7O0lBQ25ELE1BQU1DLFdBQXdCTCx3REFBV0E7SUFFekMsTUFBTSxDQUFDTSxnQkFBZ0JDLGtCQUFrQixHQUFHZCwrQ0FBUUEsQ0FBQztRQUNuRGUsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsYUFBYTtRQUNiQyxjQUFjO1FBQ2RDLFVBQVU7UUFDVkMsSUFBSTtJQUNOO0lBRUF0QixnREFBU0EsQ0FBQztRQUNSYSxTQUFTSCxrRkFBYUE7UUFDdEJHLFNBQVNGLGtGQUFhQTtJQUN4QixHQUFHO1FBQUNFO0tBQVM7SUFFYixNQUFNLEVBQUVVLE9BQU8sRUFBRSxHQUFHZCx3REFBV0EsQ0FBQyxDQUFDZSxRQUFxQkEsTUFBTUQsT0FBTztJQUVuRSxNQUFNRSxxQkFBcUIsQ0FBQ0M7UUFDMUIsTUFBTUMsYUFBYUQsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO1FBQ3JDLE1BQU1DLFNBQVNQLFFBQVFRLElBQUksQ0FBQyxDQUFDQyxJQUFXQSxFQUFFVixFQUFFLEtBQUtLO1FBQ2pELElBQUlHLFFBQVE7WUFDVmYsa0JBQWtCO2dCQUNoQkMsTUFBTWMsT0FBT2QsSUFBSTtnQkFDakJDLE1BQU1hLE9BQU9iLElBQUk7Z0JBQ2pCQyxVQUFVWSxPQUFPWixRQUFRO2dCQUN6QkMsYUFBYVcsT0FBT1gsV0FBVztnQkFDL0JDLGNBQWNVLE9BQU9WLFlBQVk7Z0JBQ2pDQyxVQUFVUyxPQUFPVCxRQUFRO2dCQUN6QkMsSUFBSVEsT0FBT1IsRUFBRTtZQUNmO1FBQ0Y7SUFDRjtJQUVBdEIsZ0RBQVNBLENBQUMsS0FFVixHQUFHO1FBQUNjO0tBQWU7SUFFbkIscUJBQ0UsOERBQUNaLDZIQUFJQTtRQUFDK0IsUUFBUTs7MEJBQ1osOERBQUM5QixvSUFBV0E7MEJBQ1YsNEVBQUMrQjs4QkFDQyw0RUFBQzVCLG9JQUFXQTt3QkFBQzZCLElBQUk7NEJBQUVDLEdBQUc7NEJBQUdDLE9BQU87d0JBQU87OzBDQUNyQyw4REFBQ2pDLG1JQUFVQTtnQ0FBQ2tCLElBQUc7MENBQW1COzs7Ozs7MENBQ2xDLDhEQUFDZiwrSEFBTUE7Z0NBQ0wrQixTQUFRO2dDQUNSaEIsSUFBRztnQ0FDSE4sTUFBSztnQ0FDTCxxQ0FBcUM7Z0NBQ3JDdUIsVUFBVSxDQUFDYjtvQ0FBV0QsbUJBQW1CQztnQ0FBTTtnQ0FDL0NjLE9BQU07MENBRUxqQixXQUNDQSxRQUFRa0IsR0FBRyxDQUFDLENBQUNYLHVCQUNYLDhEQUFDekIsaUlBQVFBO3dDQUFpQndCLE9BQU9DLE9BQU9SLEVBQUU7a0RBQ3ZDUSxPQUFPZCxJQUFJO3VDQURDYyxPQUFPUixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRcEMsOERBQUNvQjs7Ozs7Ozs7Ozs7QUFHUDtHQW5FTTlCOztRQUMwQkosb0RBQVdBO1FBaUJyQkMsb0RBQVdBOzs7S0FsQjNCRztBQXFFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRtaW4vQ291cnNlTW9kdWxlcy50c3g/YjMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWssIEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgVGV4dEZpZWxkLFxyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBNZW51SXRlbSxcclxuICBGb3JtQ29udHJvbCxcclxuICBTZWxlY3QsXHJcbiAgQnV0dG9uLFxyXG4gIFN0ZXBwZXIsXHJcbiAgU3RlcCxcclxuICBTdGVwTGFiZWwsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gXCJAbXVpL3gtZGF0ZS1waWNrZXJzL0xvY2FsaXphdGlvblByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwiQG11aS94LWRhdGUtcGlja2Vycy9EYXRlUGlja2VyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vR2xvYmFscy9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoLCBVbmtub3duQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgZ2V0QWxsQ291cnNlcyB9IGZyb20gXCIuLi8uLi8uLi9HbG9iYWxzL1NsaWNlcy9EZWdyZWUvQ291cnNlc1NsaWNlXCI7XHJcbmltcG9ydCB7IGdldEFsbERlZ3JlZXMgfSBmcm9tIFwiLi4vLi4vLi4vR2xvYmFscy9TbGljZXMvRGVncmVlL0RlZ3JlZXNTbGljZVwiO1xyXG5pbXBvcnQgeyBzdWJtaXRFbWVyZ2VuY3lGb3JtIH0gZnJvbSBcIi4uLy4uLy4uL0dsb2JhbHMvU2xpY2VzL0FwcGxpY2F0aW9uU2xpY2UvRW1lcmdlbmN5XCI7XHJcbmltcG9ydCB7IHN1Ym1pdFJlZmVyZWVGb3JtIH0gZnJvbSBcIi4uLy4uLy4uL0dsb2JhbHMvU2xpY2VzL0FwcGxpY2F0aW9uU2xpY2UvUmVmZXJlZVwiO1xyXG5pbXBvcnQgeyBzdWJtaXRGaXJzdEZvcm0gfSBmcm9tIFwiLi4vLi4vLi4vR2xvYmFscy9TbGljZXMvQXBwbGljYXRpb25TbGljZS9GaXJzdEZvcm1TbGljZVwiO1xyXG5cclxudHlwZSBBcHBEaXNwYXRjaCA9IFRodW5rRGlzcGF0Y2g8Um9vdFN0YXRlLCB1bmtub3duLCBVbmtub3duQWN0aW9uPjtcclxuXHJcbmludGVyZmFjZSBQZXJzb25hbEluZm9Gb3JtUHJvcHMge1xyXG4gIGZvcm1pazogYW55OyAvLyBBZGp1c3QgdGhlIHR5cGUgaWYgbmVlZGVkXHJcbiAgc2VsZWN0ZWREZWdyZWU6IGFueTtcclxuICBzZXRTZWxlY3RlZERlZ3JlZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248YW55Pj47XHJcbiAgc2VsZWN0ZWRDb3Vyc2U6IGFueTtcclxuICBzZXRTZWxlY3RlZENvdXJzZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248YW55Pj47XHJcbn1cclxuXHJcbmNvbnN0IERlZ3JlZXNGb3JtOiBSZWFjdC5GQzxQZXJzb25hbEluZm9Gb3JtUHJvcHM+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoOiBBcHBEaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZERlZ3JlZSwgc2V0U2VsZWN0ZWREZWdyZWVdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHNsdWc6IFwiXCIsXHJcbiAgICBjYXRlZ29yeTogXCJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgY291cnNlc0NvdW50OiAwLFxyXG4gICAgZHVyYXRpb246IFwiXCIsXHJcbiAgICBpZDogXCJcIixcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGdldEFsbENvdXJzZXMoKSk7XHJcbiAgICBkaXNwYXRjaChnZXRBbGxEZWdyZWVzKCkpO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCB7IGRlZ3JlZXMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5kZWdyZWVzKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVncmVlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZElkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc3QgZGVncmVlID0gZGVncmVlcy5maW5kKChkOiBhbnkpID0+IGQuaWQgPT09IHNlbGVjdGVkSWQpO1xyXG4gICAgaWYgKGRlZ3JlZSkge1xyXG4gICAgICBzZXRTZWxlY3RlZERlZ3JlZSh7XHJcbiAgICAgICAgbmFtZTogZGVncmVlLm5hbWUsXHJcbiAgICAgICAgc2x1ZzogZGVncmVlLnNsdWcsXHJcbiAgICAgICAgY2F0ZWdvcnk6IGRlZ3JlZS5jYXRlZ29yeSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGVncmVlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGNvdXJzZXNDb3VudDogZGVncmVlLmNvdXJzZXNDb3VudCxcclxuICAgICAgICBkdXJhdGlvbjogZGVncmVlLmR1cmF0aW9uLFxyXG4gICAgICAgIGlkOiBkZWdyZWUuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBcclxuICB9LCBbc2VsZWN0ZWREZWdyZWVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgcmFpc2VkPXt0cnVlfT5cclxuICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IG06IDEsIHdpZHRoOiBcIjI1Y2hcIiB9fT5cclxuICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZWdyZWVUeXBlLWxhYmVsXCI+RGVncmVlIFR5cGU8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBsYWJlbElkPVwiZGVncmVlVHlwZS1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZWdyZWVUeXBlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZGVncmVlVHlwZVwiXHJcbiAgICAgICAgICAgICAgLy8gICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5kZWdyZWVUeXBlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtoYW5kbGVEZWdyZWVDaGFuZ2UoZXZlbnQpfX1cclxuICAgICAgICAgICAgICBsYWJlbD1cIkRlZ3JlZSBUeXBlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkZWdyZWVzICYmXHJcbiAgICAgICAgICAgICAgICBkZWdyZWVzLm1hcCgoZGVncmVlOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17ZGVncmVlLmlkfSB2YWx1ZT17ZGVncmVlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGVncmVlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPGRpdj57fTwvZGl2PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWdyZWVzRm9ybTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJJbnB1dExhYmVsIiwiTWVudUl0ZW0iLCJGb3JtQ29udHJvbCIsIlNlbGVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJnZXRBbGxDb3Vyc2VzIiwiZ2V0QWxsRGVncmVlcyIsIkRlZ3JlZXNGb3JtIiwiZGlzcGF0Y2giLCJzZWxlY3RlZERlZ3JlZSIsInNldFNlbGVjdGVkRGVncmVlIiwibmFtZSIsInNsdWciLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwiY291cnNlc0NvdW50IiwiZHVyYXRpb24iLCJpZCIsImRlZ3JlZXMiLCJzdGF0ZSIsImhhbmRsZURlZ3JlZUNoYW5nZSIsImV2ZW50Iiwic2VsZWN0ZWRJZCIsInRhcmdldCIsInZhbHVlIiwiZGVncmVlIiwiZmluZCIsImQiLCJyYWlzZWQiLCJmb3JtIiwic3giLCJtIiwid2lkdGgiLCJsYWJlbElkIiwib25DaGFuZ2UiLCJsYWJlbCIsIm1hcCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Dashboard/Admin/CourseModules.tsx\n"));

/***/ })

});