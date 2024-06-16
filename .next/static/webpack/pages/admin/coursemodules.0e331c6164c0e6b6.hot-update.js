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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CourseModuleForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Card,TextField!=!@mui/material */ \"__barrel_optimize__?names=Card,TextField!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CourseModuleForm(param) {\n    let { formState, degree, course, modules, modulesHandler } = param;\n    _s();\n    const [moduleData, setModuleData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [authToken, setauthToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setauthToken(localStorage.getItem(\"token\"));\n    }, []);\n    const addModule = async ()=>{\n        modulesHandler([\n            ...mo\n        ]);\n        await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8000//api/v1/coursemodule\", moduleData, {\n            headers: {\n                Authorization: \"token \".concat(authToken)\n            }\n        }).then((response)=>react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Course addedd successfully\")).catch((error)=>{\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Error adding course\");\n            console.log(error.response);\n        });\n        // close the form\n        formState(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setModuleData({\n            ...moduleData,\n            degree: degree,\n            course: course\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, {\n        className: \"p-5\",\n        style: {\n            marginBottom: 40\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                id: \"moduleName\",\n                name: \"moduleName\",\n                label: \"Module name\",\n                color: \"success\",\n                required: true,\n                className: \"mb-4 col-6 col-md-6\",\n                // value={courseData?.CourseName || \"\"}\n                // inputProps={!formEditable && { readOnly: true }}\n                contentEditable: false,\n                onChange: (event)=>setModuleData({\n                        ...moduleData,\n                        name: event.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                        type: \"number\",\n                        required: true,\n                        label: \"Course units\",\n                        className: \"mr-5\",\n                        onChange: (event)=>setModuleData({\n                                ...moduleData,\n                                courseUnits: parseInt(event.target.value)\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                        id: \"coursecode\",\n                        name: \"coursecode\",\n                        label: \"Course code\",\n                        required: true,\n                        color: \"success\",\n                        className: \"mb-4\",\n                        onChange: (event)=>setModuleData({\n                                ...moduleData,\n                                courseCode: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"it-btn\",\n                onClick: ()=>addModule(),\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(CourseModuleForm, \"XalPiPDCMSMq/Nv8gW3Op4Ujqy0=\");\n_c = CourseModuleForm;\nvar _c;\n$RefreshReg$(_c, \"CourseModuleForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRtaW4vQ291cnNlTW9kdWxlRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNsQztBQUNrQjtBQUNMO0FBU3hCLFNBQVNNLGlCQUFpQixLQUFvRDtRQUFwRCxFQUFDQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLGNBQWMsRUFBQyxHQUFwRDs7SUFDdkMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQTtJQUM1QyxNQUFNLENBQUNVLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBO0lBQzFDRCxnREFBU0EsQ0FBQztRQUNSWSxhQUFhQyxhQUFhQyxPQUFPLENBQUM7SUFDcEMsR0FBRyxFQUFFO0lBRUwsTUFBTUMsWUFBWTtRQUNoQlAsZUFBZTtlQUFJUTtTQUFHO1FBQ3RCLE1BQU1qQixrREFBVSxDQUFDLDhDQUE4Q1UsWUFBWTtZQUN6RVMsU0FBUztnQkFDUEMsZUFBZSxTQUFtQixPQUFWUjtZQUMxQjtRQUNGLEdBQ0NTLElBQUksQ0FBQyxDQUFDQyxXQUFZbkIsaURBQUtBLENBQUNvQixPQUFPLENBQUMsK0JBQ2hDQyxLQUFLLENBQUMsQ0FBQ0M7WUFBV3RCLGlEQUFLQSxDQUFDc0IsS0FBSyxDQUFDO1lBQXVCQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1ILFFBQVE7UUFBQztRQUNqRixpQkFBaUI7UUFDakJqQixVQUFVO0lBQ1o7SUFDQUosZ0RBQVNBLENBQUM7UUFBT1UsY0FBYztZQUFDLEdBQUdELFVBQVU7WUFBRUosUUFBUUE7WUFBUUMsUUFBUUE7UUFBTTtJQUFFLEdBQUcsRUFBRTtJQUNwRixxQkFDRSw4REFBQ1Qsb0ZBQUlBO1FBQUM4QixXQUFVO1FBQU1DLE9BQU87WUFBRUMsY0FBYztRQUFHOzswQkFDOUMsOERBQUMvQix5RkFBU0E7Z0JBQ1JnQyxJQUFHO2dCQUNIQyxNQUFLO2dCQUNMQyxPQUFNO2dCQUNOQyxPQUFNO2dCQUNOQyxRQUFRO2dCQUNSUCxXQUFVO2dCQUNWLHVDQUF1QztnQkFDdkMsbURBQW1EO2dCQUNuRFEsaUJBQWlCO2dCQUNqQkMsVUFBVSxDQUFDQyxRQUFVM0IsY0FBYzt3QkFBQyxHQUFHRCxVQUFVO3dCQUFFc0IsTUFBTU0sTUFBTUMsTUFBTSxDQUFDQyxLQUFLO29CQUFBOzs7Ozs7MEJBRTdFLDhEQUFDQztnQkFBSWIsV0FBVTs7a0NBQ2IsOERBQUM3Qix5RkFBU0E7d0JBQUMyQyxNQUFLO3dCQUFTUCxRQUFRO3dCQUFDRixPQUFNO3dCQUFlTCxXQUFVO3dCQUFPUyxVQUFVLENBQUNDLFFBQVMzQixjQUFjO2dDQUFDLEdBQUdELFVBQVU7Z0NBQUVpQyxhQUFhQyxTQUFTTixNQUFNQyxNQUFNLENBQUNDLEtBQUs7NEJBQUM7Ozs7OztrQ0FDbkssOERBQUN6Qyx5RkFBU0E7d0JBQ1JnQyxJQUFHO3dCQUNIQyxNQUFLO3dCQUNMQyxPQUFNO3dCQUNORSxRQUFRO3dCQUNSRCxPQUFNO3dCQUNOTixXQUFVO3dCQUNWUyxVQUFVLENBQUNDLFFBQVUzQixjQUFjO2dDQUFDLEdBQUdELFVBQVU7Z0NBQUVtQyxZQUFZUCxNQUFNQyxNQUFNLENBQUNDLEtBQUs7NEJBQUE7Ozs7Ozs7Ozs7OzswQkFHckYsOERBQUNNO2dCQUFPSixNQUFLO2dCQUFTZCxXQUFVO2dCQUFTbUIsU0FBUyxJQUFNL0I7MEJBQWE7Ozs7Ozs7Ozs7OztBQUczRTtHQWpEd0JaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9BZG1pbi9Db3Vyc2VNb2R1bGVGb3JtLnRzeD8yNzY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQsIFRleHRGaWVsZCwgSW5wdXRMYWJlbCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuaW50ZXJmYWNlIG1vZHVsZVN0YXRlICB7XHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIGRlZ3JlZTogbnVtYmVyLFxyXG4gIGNvdXJzZTogbnVtYmVyLFxyXG4gIGNvdXJzZUNvZGU6IHN0cmluZyxcclxuICBjb3Vyc2VVbml0czogbnVtYmVyXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291cnNlTW9kdWxlRm9ybSh7Zm9ybVN0YXRlLCBkZWdyZWUsIGNvdXJzZSwgbW9kdWxlcywgbW9kdWxlc0hhbmRsZXJ9KSB7XHJcbiAgY29uc3QgW21vZHVsZURhdGEsIHNldE1vZHVsZURhdGFdID0gdXNlU3RhdGU8bW9kdWxlU3RhdGU+KClcclxuICBjb25zdCBbYXV0aFRva2VuLCBzZXRhdXRoVG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nPigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRhdXRoVG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBhZGRNb2R1bGUgPSBhc3luYygpID0+IHtcclxuICAgIG1vZHVsZXNIYW5kbGVyKFsuLi5tb10pXHJcbiAgICBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvL2FwaS92MS9jb3Vyc2Vtb2R1bGUnLCBtb2R1bGVEYXRhLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHthdXRoVG9rZW59YCxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSk9PiB0b2FzdC5zdWNjZXNzKCdDb3Vyc2UgYWRkZWRkIHN1Y2Nlc3NmdWxseScpKVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge3RvYXN0LmVycm9yKCdFcnJvciBhZGRpbmcgY291cnNlJyk7Y29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpfSlcclxuICAgIC8vIGNsb3NlIHRoZSBmb3JtXHJcbiAgICBmb3JtU3RhdGUoZmFsc2UpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7c2V0TW9kdWxlRGF0YSh7Li4ubW9kdWxlRGF0YSwgZGVncmVlOiBkZWdyZWUsIGNvdXJzZTogY291cnNlfSl9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwicC01XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0MCB9fT5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGlkPVwibW9kdWxlTmFtZVwiXHJcbiAgICAgICAgbmFtZT1cIm1vZHVsZU5hbWVcIlxyXG4gICAgICAgIGxhYmVsPVwiTW9kdWxlIG5hbWVcIlxyXG4gICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICBjbGFzc05hbWU9XCJtYi00IGNvbC02IGNvbC1tZC02XCJcclxuICAgICAgICAvLyB2YWx1ZT17Y291cnNlRGF0YT8uQ291cnNlTmFtZSB8fCBcIlwifVxyXG4gICAgICAgIC8vIGlucHV0UHJvcHM9eyFmb3JtRWRpdGFibGUgJiYgeyByZWFkT25seTogdHJ1ZSB9fVxyXG4gICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZmFsc2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TW9kdWxlRGF0YSh7Li4ubW9kdWxlRGF0YSwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgPFRleHRGaWVsZCB0eXBlPVwibnVtYmVyXCIgcmVxdWlyZWQgbGFiZWw9XCJDb3Vyc2UgdW5pdHNcIiBjbGFzc05hbWU9XCJtci01XCIgb25DaGFuZ2U9eyhldmVudCk9PiBzZXRNb2R1bGVEYXRhKHsuLi5tb2R1bGVEYXRhLCBjb3Vyc2VVbml0czogcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKX0pfSAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwiY291cnNlY29kZVwiXHJcbiAgICAgICAgICBuYW1lPVwiY291cnNlY29kZVwiXHJcbiAgICAgICAgICBsYWJlbD1cIkNvdXJzZSBjb2RlXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItNFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRNb2R1bGVEYXRhKHsuLi5tb2R1bGVEYXRhLCBjb3Vyc2VDb2RlOiBldmVudC50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiaXQtYnRuXCIgb25DbGljaz17KCkgPT4gYWRkTW9kdWxlKCl9PkFkZDwvYnV0dG9uPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJUZXh0RmllbGQiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidG9hc3QiLCJDb3Vyc2VNb2R1bGVGb3JtIiwiZm9ybVN0YXRlIiwiZGVncmVlIiwiY291cnNlIiwibW9kdWxlcyIsIm1vZHVsZXNIYW5kbGVyIiwibW9kdWxlRGF0YSIsInNldE1vZHVsZURhdGEiLCJhdXRoVG9rZW4iLCJzZXRhdXRoVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkTW9kdWxlIiwibW8iLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImlkIiwibmFtZSIsImxhYmVsIiwiY29sb3IiLCJyZXF1aXJlZCIsImNvbnRlbnRFZGl0YWJsZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsInR5cGUiLCJjb3Vyc2VVbml0cyIsInBhcnNlSW50IiwiY291cnNlQ29kZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Dashboard/Admin/CourseModuleForm.tsx\n"));

/***/ })

});