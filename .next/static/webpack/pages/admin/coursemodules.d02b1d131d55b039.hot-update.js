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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CourseModuleForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Card,TextField!=!@mui/material */ \"__barrel_optimize__?names=Card,TextField!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CourseModuleForm(param) {\n    let { formState, degree, course } = param;\n    _s();\n    const [moduleData, setModuleData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const addModule = async ()=>{\n        await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8000//api/v1/coursemodule\", moduleData).then((response)=>react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Course addedd successfully\")).catch((error)=>{\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Error adding course\");\n            console.log(error.response);\n        });\n        // close the form\n        formState(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setModuleData({\n            ...moduleData,\n            degree: degree,\n            course: course\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, {\n        className: \"p-5\",\n        style: {\n            marginBottom: 40\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                    id: \"moduleName\",\n                    name: \"moduleName\",\n                    label: \"Module name\",\n                    color: \"success\",\n                    required: true,\n                    className: \"mb-4 col-6 col-md-6\",\n                    // value={courseData?.CourseName || \"\"}\n                    // inputProps={!formEditable && { readOnly: true }}\n                    contentEditable: false,\n                    onChange: (event)=>setModuleData({\n                            ...moduleData,\n                            name: event.target.value\n                        })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                            type: \"number\",\n                            required: true,\n                            label: \"Course units\",\n                            className: \"mr-5\",\n                            onChange: (event)=>setModuleData({\n                                    ...moduleData,\n                                    courseUnits: parseInt(event.target.value)\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                            id: \"coursecode\",\n                            name: \"coursecode\",\n                            label: \"Course code\",\n                            required: true,\n                            color: \"success\",\n                            className: \"mb-4\",\n                            onChange: (event)=>setModuleData({\n                                    ...moduleData,\n                                    courseCode: event.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"it-btn\",\n                    onClick: ()=>addModule(),\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(CourseModuleForm, \"70Ot19+9coGJNQ8vhbgEvfrLAag=\");\n_c = CourseModuleForm;\nvar _c;\n$RefreshReg$(_c, \"CourseModuleForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRtaW4vQ291cnNlTW9kdWxlRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNsQztBQUNrQjtBQUNMO0FBU3hCLFNBQVNNLGlCQUFpQixLQUEyQjtRQUEzQixFQUFDQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFDLEdBQTNCOztJQUN2QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBO0lBRTVDLE1BQU1RLFlBQVk7UUFDaEIsTUFBTVYsa0RBQVUsQ0FBQyw4Q0FBOENRLFlBQzlESSxJQUFJLENBQUMsQ0FBQ0MsV0FBWVYsaURBQUtBLENBQUNXLE9BQU8sQ0FBQywrQkFDaENDLEtBQUssQ0FBQyxDQUFDQztZQUFXYixpREFBS0EsQ0FBQ2EsS0FBSyxDQUFDO1lBQXVCQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1ILFFBQVE7UUFBQztRQUNqRixpQkFBaUI7UUFDakJSLFVBQVU7SUFDWjtJQUNBSixnREFBU0EsQ0FBQztRQUFPUSxjQUFjO1lBQUMsR0FBR0QsVUFBVTtZQUFFRixRQUFRQTtZQUFRQyxRQUFRQTtRQUFNO0lBQUUsR0FBRyxFQUFFO0lBQ3BGLHFCQUNFLDhEQUFDVCxvRkFBSUE7UUFBQ3FCLFdBQVU7UUFBTUMsT0FBTztZQUFFQyxjQUFjO1FBQUc7a0JBQzlDLDRFQUFDQzs7OEJBQ0QsOERBQUN2Qix5RkFBU0E7b0JBQ1J3QixJQUFHO29CQUNIQyxNQUFLO29CQUNMQyxPQUFNO29CQUNOQyxPQUFNO29CQUNOQyxRQUFRO29CQUNSUixXQUFVO29CQUNWLHVDQUF1QztvQkFDdkMsbURBQW1EO29CQUNuRFMsaUJBQWlCO29CQUNqQkMsVUFBVSxDQUFDQyxRQUFVckIsY0FBYzs0QkFBQyxHQUFHRCxVQUFVOzRCQUFFZ0IsTUFBTU0sTUFBTUMsTUFBTSxDQUFDQyxLQUFLO3dCQUFBOzs7Ozs7OEJBRTdFLDhEQUFDQztvQkFBSWQsV0FBVTs7c0NBQ2IsOERBQUNwQix5RkFBU0E7NEJBQUNtQyxNQUFLOzRCQUFTUCxRQUFROzRCQUFDRixPQUFNOzRCQUFlTixXQUFVOzRCQUFNVSxVQUFVLENBQUNDLFFBQVNyQixjQUFjO29DQUFDLEdBQUdELFVBQVU7b0NBQUUyQixhQUFhQyxTQUFTTixNQUFNQyxNQUFNLENBQUNDLEtBQUs7Z0NBQUM7Ozs7OztzQ0FDbEssOERBQUNqQyx5RkFBU0E7NEJBQ1J3QixJQUFHOzRCQUNIQyxNQUFLOzRCQUNMQyxPQUFNOzRCQUNORSxRQUFROzRCQUNSRCxPQUFNOzRCQUNOUCxXQUFVOzRCQUNWVSxVQUFVLENBQUNDLFFBQVVyQixjQUFjO29DQUFDLEdBQUdELFVBQVU7b0NBQUU2QixZQUFZUCxNQUFNQyxNQUFNLENBQUNDLEtBQUs7Z0NBQUE7Ozs7Ozs7Ozs7Ozs4QkFHckYsOERBQUNNO29CQUFPSixNQUFLO29CQUFTZixXQUFVO29CQUFTb0IsU0FBUyxJQUFNN0I7OEJBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNFO0dBMUN3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkL0FkbWluL0NvdXJzZU1vZHVsZUZvcm0udHN4PzI3NjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgVGV4dEZpZWxkLCBJbnB1dExhYmVsIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5pbnRlcmZhY2UgbW9kdWxlU3RhdGUgIHtcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgZGVncmVlOiBudW1iZXIsXHJcbiAgY291cnNlOiBudW1iZXIsXHJcbiAgY291cnNlQ29kZTogc3RyaW5nLFxyXG4gIGNvdXJzZVVuaXRzOiBudW1iZXJcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VNb2R1bGVGb3JtKHtmb3JtU3RhdGUsIGRlZ3JlZSwgY291cnNlfSkge1xyXG4gIGNvbnN0IFttb2R1bGVEYXRhLCBzZXRNb2R1bGVEYXRhXSA9IHVzZVN0YXRlPG1vZHVsZVN0YXRlPigpXHJcblxyXG4gIGNvbnN0IGFkZE1vZHVsZSA9IGFzeW5jKCkgPT4ge1xyXG4gICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwLy9hcGkvdjEvY291cnNlbW9kdWxlJywgbW9kdWxlRGF0YSlcclxuICAgIC50aGVuKChyZXNwb25zZSk9PiB0b2FzdC5zdWNjZXNzKCdDb3Vyc2UgYWRkZWRkIHN1Y2Nlc3NmdWxseScpKVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge3RvYXN0LmVycm9yKCdFcnJvciBhZGRpbmcgY291cnNlJyk7Y29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpfSlcclxuICAgIC8vIGNsb3NlIHRoZSBmb3JtXHJcbiAgICBmb3JtU3RhdGUoZmFsc2UpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7c2V0TW9kdWxlRGF0YSh7Li4ubW9kdWxlRGF0YSwgZGVncmVlOiBkZWdyZWUsIGNvdXJzZTogY291cnNlfSl9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwicC01XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0MCB9fT5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBpZD1cIm1vZHVsZU5hbWVcIlxyXG4gICAgICAgIG5hbWU9XCJtb2R1bGVOYW1lXCJcclxuICAgICAgICBsYWJlbD1cIk1vZHVsZSBuYW1lXCJcclxuICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItNCBjb2wtNiBjb2wtbWQtNlwiXHJcbiAgICAgICAgLy8gdmFsdWU9e2NvdXJzZURhdGE/LkNvdXJzZU5hbWUgfHwgXCJcIn1cclxuICAgICAgICAvLyBpbnB1dFByb3BzPXshZm9ybUVkaXRhYmxlICYmIHsgcmVhZE9ubHk6IHRydWUgfX1cclxuICAgICAgICBjb250ZW50RWRpdGFibGU9e2ZhbHNlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE1vZHVsZURhdGEoey4uLm1vZHVsZURhdGEsIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgIDxUZXh0RmllbGQgdHlwZT1cIm51bWJlclwiIHJlcXVpcmVkIGxhYmVsPVwiQ291cnNlIHVuaXRzXCIgY2xhc3NOYW1lPVwibXItNVwib25DaGFuZ2U9eyhldmVudCk9PiBzZXRNb2R1bGVEYXRhKHsuLi5tb2R1bGVEYXRhLCBjb3Vyc2VVbml0czogcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKX0pfSAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwiY291cnNlY29kZVwiXHJcbiAgICAgICAgICBuYW1lPVwiY291cnNlY29kZVwiXHJcbiAgICAgICAgICBsYWJlbD1cIkNvdXJzZSBjb2RlXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItNFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRNb2R1bGVEYXRhKHsuLi5tb2R1bGVEYXRhLCBjb3Vyc2VDb2RlOiBldmVudC50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiaXQtYnRuXCIgb25DbGljaz17KCkgPT4gYWRkTW9kdWxlKCl9PkFkZDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQ2FyZCIsIlRleHRGaWVsZCIsImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsIkNvdXJzZU1vZHVsZUZvcm0iLCJmb3JtU3RhdGUiLCJkZWdyZWUiLCJjb3Vyc2UiLCJtb2R1bGVEYXRhIiwic2V0TW9kdWxlRGF0YSIsImFkZE1vZHVsZSIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImZvcm0iLCJpZCIsIm5hbWUiLCJsYWJlbCIsImNvbG9yIiwicmVxdWlyZWQiLCJjb250ZW50RWRpdGFibGUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJ0eXBlIiwiY291cnNlVW5pdHMiLCJwYXJzZUludCIsImNvdXJzZUNvZGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Dashboard/Admin/CourseModuleForm.tsx\n"));

/***/ })

});