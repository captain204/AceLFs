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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Card,CardContent,FormControl,InputLabel,MenuItem,Select!=!@mui/material */ \"__barrel_optimize__?names=Card,CardContent,FormControl,InputLabel,MenuItem,Select!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst StepForm = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const [selectedDegree, setSelectedDegree] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        slug: \"\",\n        category: \"\",\n        description: \"\",\n        coursesCount: 0,\n        duration: \"\",\n        id: \"\"\n    });\n    const { degrees } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.degrees);\n    console.log(degrees);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {\n        raised: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                    sx: {\n                        m: 1,\n                        width: \"25ch\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {\n                            id: \"degreeType-label\",\n                            children: \"Degree Type\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_3__.Select, {\n                            labelId: \"degreeType-label\",\n                            id: \"degreeType\",\n                            name: \"degreeType\",\n                            //   value={formik.values.degreeType}\n                            onChange: (event)=>{\n                                const selectedId = event.target.value;\n                                const degree = degrees.find((d)=>d.id === selectedId);\n                                if (degree) {\n                                    setSelectedDegree({\n                                        name: degree.name,\n                                        slug: degree.slug,\n                                        category: degree.category,\n                                        description: degree.description,\n                                        coursesCount: degree.coursesCount,\n                                        duration: degree.duration,\n                                        id: degree.id\n                                    });\n                                }\n                            },\n                            label: \"Degree Type\",\n                            children: degrees && degrees.map((degree)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CardContent_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                                    value: degree.id,\n                                    children: degree.name\n                                }, degree.id, false, {\n                                    fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModules.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StepForm, \"D4ehGoE2lE7HMC/Uvfamo0bq+Ow=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = StepForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StepForm);\nvar _c;\n$RefreshReg$(_c, \"StepForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRtaW4vQ291cnNlTW9kdWxlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBZ0I1QjtBQUdnQztBQW9CdkQsTUFBTVUsV0FBVzs7SUFFZixNQUFNQyxXQUF3Qkgsd0RBQVdBO0lBRXpDLE1BQU0sQ0FBQ0ksZ0JBQWdCQyxrQkFBa0IsR0FBR1osK0NBQVFBLENBQUM7UUFDbkRhLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsY0FBYztRQUNkQyxVQUFVO1FBQ1ZDLElBQUk7SUFDTjtJQUVBLE1BQU0sRUFBQ0MsT0FBTyxFQUFDLEdBQUdaLHdEQUFXQSxDQUFDLENBQUNhLFFBQXFCQSxNQUFNRCxPQUFPO0lBQ2pFRSxRQUFRQyxHQUFHLENBQUNIO0lBRVoscUJBQ0UsOERBQUNuQiw2SEFBSUE7UUFBQ3VCLFFBQVE7a0JBQ1osNEVBQUN0QixvSUFBV0E7c0JBQ1YsNEVBQUN1QjswQkFDRCw0RUFBQ3BCLG9JQUFXQTtvQkFBQ3FCLElBQUk7d0JBQUVDLEdBQUc7d0JBQUdDLE9BQU87b0JBQU87O3NDQUN2Qyw4REFBQ3pCLG1JQUFVQTs0QkFBQ2dCLElBQUc7c0NBQW1COzs7Ozs7c0NBQ2xDLDhEQUFDYiwrSEFBTUE7NEJBQ0x1QixTQUFROzRCQUNSVixJQUFHOzRCQUNITixNQUFLOzRCQUNQLHFDQUFxQzs0QkFDbkNpQixVQUFVLENBQUNDO2dDQUNULE1BQU1DLGFBQWFELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztnQ0FDckMsTUFBTUMsU0FBU2YsUUFBUWdCLElBQUksQ0FBQyxDQUFDQyxJQUFXQSxFQUFFbEIsRUFBRSxLQUFLYTtnQ0FDakQsSUFBSUcsUUFBUTtvQ0FDVnZCLGtCQUFrQjt3Q0FDaEJDLE1BQU1zQixPQUFPdEIsSUFBSTt3Q0FDakJDLE1BQU1xQixPQUFPckIsSUFBSTt3Q0FDakJDLFVBQVVvQixPQUFPcEIsUUFBUTt3Q0FDekJDLGFBQWFtQixPQUFPbkIsV0FBVzt3Q0FDL0JDLGNBQWNrQixPQUFPbEIsWUFBWTt3Q0FDakNDLFVBQVVpQixPQUFPakIsUUFBUTt3Q0FDekJDLElBQUlnQixPQUFPaEIsRUFBRTtvQ0FDZjtnQ0FDRjs0QkFDRjs0QkFDQW1CLE9BQU07c0NBRUxsQixXQUNDQSxRQUFRbUIsR0FBRyxDQUFDLENBQUNKLHVCQUNYLDhEQUFDL0IsaUlBQVFBO29DQUFpQjhCLE9BQU9DLE9BQU9oQixFQUFFOzhDQUN2Q2dCLE9BQU90QixJQUFJO21DQURDc0IsT0FBT2hCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVdEM7R0F6RE1WOztRQUUwQkYsb0RBQVdBO1FBWXZCQyxvREFBV0E7OztLQWR6QkM7QUEyRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkL0FkbWluL0NvdXJzZU1vZHVsZXMudHN4P2IzMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybWlrLCBGb3JtaWssIEZvcm0gfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIFRleHRGaWVsZCxcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIElucHV0TGFiZWwsXHJcbiAgTWVudUl0ZW0sXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgU2VsZWN0LFxyXG4gIEJ1dHRvbixcclxuICBTdGVwcGVyLFxyXG4gIFN0ZXAsXHJcbiAgU3RlcExhYmVsLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tIFwiQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlclwiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcIkBtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL0dsb2JhbHMvc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IHsgVGh1bmtEaXNwYXRjaCwgVW5rbm93bkFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IGdldEFsbENvdXJzZXMgfSBmcm9tIFwiLi4vLi4vLi4vR2xvYmFscy9TbGljZXMvRGVncmVlL0NvdXJzZXNTbGljZVwiO1xyXG5pbXBvcnQgeyBnZXRBbGxEZWdyZWVzIH0gZnJvbSBcIi4uLy4uLy4uL0dsb2JhbHMvU2xpY2VzL0RlZ3JlZS9EZWdyZWVzU2xpY2VcIjtcclxuaW1wb3J0IHsgc3VibWl0RW1lcmdlbmN5Rm9ybSB9IGZyb20gXCIuLi8uLi8uLi9HbG9iYWxzL1NsaWNlcy9BcHBsaWNhdGlvblNsaWNlL0VtZXJnZW5jeVwiO1xyXG5pbXBvcnQgeyBzdWJtaXRSZWZlcmVlRm9ybSB9IGZyb20gXCIuLi8uLi8uLi9HbG9iYWxzL1NsaWNlcy9BcHBsaWNhdGlvblNsaWNlL1JlZmVyZWVcIjtcclxuaW1wb3J0IHsgc3VibWl0Rmlyc3RGb3JtIH0gZnJvbSBcIi4uLy4uLy4uL0dsb2JhbHMvU2xpY2VzL0FwcGxpY2F0aW9uU2xpY2UvRmlyc3RGb3JtU2xpY2VcIjtcclxuXHJcbnR5cGUgQXBwRGlzcGF0Y2ggPSBUaHVua0Rpc3BhdGNoPFJvb3RTdGF0ZSwgdW5rbm93biwgVW5rbm93bkFjdGlvbj47XHJcblxyXG5pbnRlcmZhY2UgUGVyc29uYWxJbmZvRm9ybVByb3BzIHtcclxuICBmb3JtaWs6IGFueTsgLy8gQWRqdXN0IHRoZSB0eXBlIGlmIG5lZWRlZFxyXG4gIHNlbGVjdGVkRGVncmVlOiBhbnk7XHJcbiAgc2V0U2VsZWN0ZWREZWdyZWU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGFueT4+O1xyXG4gIHNlbGVjdGVkQ291cnNlOiBhbnk7XHJcbiAgc2V0U2VsZWN0ZWRDb3Vyc2U6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGFueT4+O1xyXG59XHJcblxyXG5cclxuY29uc3QgU3RlcEZvcm0gPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoOiBBcHBEaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZERlZ3JlZSwgc2V0U2VsZWN0ZWREZWdyZWVdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHNsdWc6IFwiXCIsXHJcbiAgICBjYXRlZ29yeTogXCJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgY291cnNlc0NvdW50OiAwLFxyXG4gICAgZHVyYXRpb246IFwiXCIsXHJcbiAgICBpZDogXCJcIixcclxuICB9KTtcclxuICBcclxuICBjb25zdCB7ZGVncmVlc30gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuZGVncmVlcyk7XHJcbiAgY29uc29sZS5sb2coZGVncmVlcylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIHJhaXNlZD17dHJ1ZX0+XHJcbiAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICA8Zm9ybSA+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IG06IDEsIHdpZHRoOiBcIjI1Y2hcIiB9fT5cclxuICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlZ3JlZVR5cGUtbGFiZWxcIj5EZWdyZWUgVHlwZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBsYWJlbElkPVwiZGVncmVlVHlwZS1sYWJlbFwiXHJcbiAgICAgICAgICBpZD1cImRlZ3JlZVR5cGVcIlxyXG4gICAgICAgICAgbmFtZT1cImRlZ3JlZVR5cGVcIlxyXG4gICAgICAgIC8vICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZGVncmVlVHlwZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgZGVncmVlID0gZGVncmVlcy5maW5kKChkOiBhbnkpID0+IGQuaWQgPT09IHNlbGVjdGVkSWQpO1xyXG4gICAgICAgICAgICBpZiAoZGVncmVlKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWREZWdyZWUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogZGVncmVlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBzbHVnOiBkZWdyZWUuc2x1ZyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkZWdyZWUuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVncmVlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgY291cnNlc0NvdW50OiBkZWdyZWUuY291cnNlc0NvdW50LFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGRlZ3JlZS5kdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIGlkOiBkZWdyZWUuaWQsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBsYWJlbD1cIkRlZ3JlZSBUeXBlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZGVncmVlcyAmJlxyXG4gICAgICAgICAgICBkZWdyZWVzLm1hcCgoZGVncmVlOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtkZWdyZWUuaWR9IHZhbHVlPXtkZWdyZWUuaWR9PlxyXG4gICAgICAgICAgICAgICAge2RlZ3JlZS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RlcEZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiSW5wdXRMYWJlbCIsIk1lbnVJdGVtIiwiRm9ybUNvbnRyb2wiLCJTZWxlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiU3RlcEZvcm0iLCJkaXNwYXRjaCIsInNlbGVjdGVkRGVncmVlIiwic2V0U2VsZWN0ZWREZWdyZWUiLCJuYW1lIiwic2x1ZyIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJjb3Vyc2VzQ291bnQiLCJkdXJhdGlvbiIsImlkIiwiZGVncmVlcyIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsInJhaXNlZCIsImZvcm0iLCJzeCIsIm0iLCJ3aWR0aCIsImxhYmVsSWQiLCJvbkNoYW5nZSIsImV2ZW50Iiwic2VsZWN0ZWRJZCIsInRhcmdldCIsInZhbHVlIiwiZGVncmVlIiwiZmluZCIsImQiLCJsYWJlbCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Dashboard/Admin/CourseModules.tsx\n"));

/***/ })

});