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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CourseModuleForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Card,TextField!=!@mui/material */ \"__barrel_optimize__?names=Card,TextField!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CourseModuleForm(param) {\n    let { formState, degree, course, modules, modulesHandler, formData } = param;\n    _s();\n    const [moduleData, setModuleData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [authToken, setauthToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [formEditable, setFormEditable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [confirmCourseEdit, setConfirmCourseEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setauthToken(localStorage.getItem(\"token\"));\n    }, []);\n    const addModule = async ()=>{\n        modulesHandler([\n            ...modules,\n            moduleData\n        ]);\n        await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8000//api/v1/coursemodule\", moduleData, {\n            headers: {\n                Authorization: \"token \".concat(authToken)\n            }\n        }).then((response)=>react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Course addedd successfully\")).catch((error)=>{\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Error adding course\");\n            console.log(error.response);\n        });\n        // close the form\n        formState(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setModuleData({\n            ...moduleData,\n            degree: degree,\n            course: course\n        });\n        if (formData) {\n            setFormEditable(true);\n            setModuleData(formData);\n        }\n    }, []);\n    const editModuleHandler = ()=>{};\n    const editModule = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.Card, {\n        className: \"p-5\",\n        style: {\n            marginBottom: 40\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                id: \"moduleName\",\n                name: \"moduleName\",\n                label: \"Module name\",\n                color: \"success\",\n                required: true,\n                className: \"mb-4 col-6 col-md-6\",\n                // value={courseData?.CourseName || \"\"}\n                // inputProps={!formEditable && { readOnly: true }}\n                contentEditable: false,\n                onChange: (event)=>setModuleData({\n                        ...moduleData,\n                        name: event.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                        type: \"number\",\n                        required: true,\n                        label: \"Course units\",\n                        className: \"mr-5\",\n                        onChange: (event)=>setModuleData({\n                                ...moduleData,\n                                courseUnits: parseInt(event.target.value)\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                        id: \"coursecode\",\n                        name: \"coursecode\",\n                        label: \"Course code\",\n                        required: true,\n                        color: \"success\",\n                        className: \"mb-4\",\n                        onChange: (event)=>setModuleData({\n                                ...moduleData,\n                                courseCode: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            !confirmCourseEdit && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"it-btn large\",\n                onClick: ()=>{\n                    formData ? editModuleHandler() : addModule();\n                },\n                children: formData ? \"Edit\" : \"Add\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this),\n            confirmCourseEdit && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"it-btn large\",\n                onClick: ()=>editModule(),\n                children: \"Edit Course\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(CourseModuleForm, \"8y7yiRwFOSQDDAtn4npEFQlkouY=\");\n_c = CourseModuleForm;\nvar _c;\n$RefreshReg$(_c, \"CourseModuleForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRtaW4vQ291cnNlTW9kdWxlRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNsQztBQUNrQjtBQUNMO0FBU3hCLFNBQVNNLGlCQUFpQixLQUE4RDtRQUE5RCxFQUFDQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLGNBQWMsRUFBRUMsUUFBUSxFQUFDLEdBQTlEOztJQUN2QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUE7SUFDMUMsTUFBTSxDQUFDYSxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDZSxtQkFBbUJDLHFCQUFxQixHQUFHaEIsK0NBQVFBLENBQUM7SUFDM0RELGdEQUFTQSxDQUFDO1FBQ1JhLGFBQWFLLGFBQWFDLE9BQU8sQ0FBQztJQUNwQyxHQUFHLEVBQUU7SUFFTCxNQUFNQyxZQUFZO1FBQ2hCWixlQUFlO2VBQUlEO1lBQVNHO1NBQVc7UUFDdkMsTUFBTVgsa0RBQVUsQ0FBQyw4Q0FBOENXLFlBQVk7WUFDekVZLFNBQVM7Z0JBQ1BDLGVBQWUsU0FBbUIsT0FBVlg7WUFDMUI7UUFDRixHQUNDWSxJQUFJLENBQUMsQ0FBQ0MsV0FBWXZCLGlEQUFLQSxDQUFDd0IsT0FBTyxDQUFDLCtCQUNoQ0MsS0FBSyxDQUFDLENBQUNDO1lBQVcxQixpREFBS0EsQ0FBQzBCLEtBQUssQ0FBQztZQUF1QkMsUUFBUUMsR0FBRyxDQUFDRixNQUFNSCxRQUFRO1FBQUM7UUFDakYsaUJBQWlCO1FBQ2pCckIsVUFBVTtJQUNaO0lBQ0FKLGdEQUFTQSxDQUFDO1FBQU9XLGNBQWM7WUFBQyxHQUFHRCxVQUFVO1lBQUVMLFFBQVFBO1lBQVFDLFFBQVFBO1FBQU07UUFDN0UsSUFBR0csVUFBUztZQUNWTSxnQkFBZ0I7WUFDaEJKLGNBQWNGO1FBQ2hCO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsTUFBTXNCLG9CQUFvQixLQUUxQjtJQUNBLE1BQU1DLGFBQWEsS0FFbkI7SUFDRSxxQkFDRSw4REFBQ25DLG9GQUFJQTtRQUFDb0MsV0FBVTtRQUFNQyxPQUFPO1lBQUVDLGNBQWM7UUFBRzs7MEJBQzlDLDhEQUFDckMseUZBQVNBO2dCQUNSc0MsSUFBRztnQkFDSEMsTUFBSztnQkFDTEMsT0FBTTtnQkFDTkMsT0FBTTtnQkFDTkMsUUFBUTtnQkFDUlAsV0FBVTtnQkFDVix1Q0FBdUM7Z0JBQ3ZDLG1EQUFtRDtnQkFDbkRRLGlCQUFpQjtnQkFDakJDLFVBQVUsQ0FBQ0MsUUFBVWhDLGNBQWM7d0JBQUMsR0FBR0QsVUFBVTt3QkFBRTJCLE1BQU1NLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztvQkFBQTs7Ozs7OzBCQUU3RSw4REFBQ0M7Z0JBQUliLFdBQVU7O2tDQUNiLDhEQUFDbkMseUZBQVNBO3dCQUFDaUQsTUFBSzt3QkFBU1AsUUFBUTt3QkFBQ0YsT0FBTTt3QkFBZUwsV0FBVTt3QkFBT1MsVUFBVSxDQUFDQyxRQUFTaEMsY0FBYztnQ0FBQyxHQUFHRCxVQUFVO2dDQUFFc0MsYUFBYUMsU0FBU04sTUFBTUMsTUFBTSxDQUFDQyxLQUFLOzRCQUFDOzs7Ozs7a0NBQ25LLDhEQUFDL0MseUZBQVNBO3dCQUNSc0MsSUFBRzt3QkFDSEMsTUFBSzt3QkFDTEMsT0FBTTt3QkFDTkUsUUFBUTt3QkFDUkQsT0FBTTt3QkFDTk4sV0FBVTt3QkFDVlMsVUFBVSxDQUFDQyxRQUFVaEMsY0FBYztnQ0FBQyxHQUFHRCxVQUFVO2dDQUFFd0MsWUFBWVAsTUFBTUMsTUFBTSxDQUFDQyxLQUFLOzRCQUFBOzs7Ozs7Ozs7Ozs7WUFHcEYsQ0FBQzdCLG1DQUNBLDhEQUFDbUM7Z0JBQ0NsQixXQUFVO2dCQUNWbUIsU0FBUztvQkFDUDNDLFdBQVdzQixzQkFBc0JYO2dCQUNuQzswQkFFQ1gsV0FBVyxTQUFTOzs7Ozs7WUFHeEJPLG1DQUNDLDhEQUFDbUM7Z0JBQU9sQixXQUFVO2dCQUFlbUIsU0FBUyxJQUFNcEI7MEJBQWM7Ozs7Ozs7Ozs7OztBQU10RTtHQTVFd0I3QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRtaW4vQ291cnNlTW9kdWxlRm9ybS50c3g/Mjc2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBUZXh0RmllbGQsIElucHV0TGFiZWwgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmludGVyZmFjZSBtb2R1bGVTdGF0ZSAge1xyXG4gIG5hbWU6IHN0cmluZyxcclxuICBkZWdyZWU6IG51bWJlcixcclxuICBjb3Vyc2U6IG51bWJlcixcclxuICBjb3Vyc2VDb2RlOiBzdHJpbmcsXHJcbiAgY291cnNlVW5pdHM6IG51bWJlclxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdXJzZU1vZHVsZUZvcm0oe2Zvcm1TdGF0ZSwgZGVncmVlLCBjb3Vyc2UsIG1vZHVsZXMsIG1vZHVsZXNIYW5kbGVyLCBmb3JtRGF0YX0pIHtcclxuICBjb25zdCBbbW9kdWxlRGF0YSwgc2V0TW9kdWxlRGF0YV0gPSB1c2VTdGF0ZTxtb2R1bGVTdGF0ZT4oKVxyXG4gIGNvbnN0IFthdXRoVG9rZW4sIHNldGF1dGhUb2tlbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XHJcbiAgY29uc3QgW2Zvcm1FZGl0YWJsZSwgc2V0Rm9ybUVkaXRhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjb25maXJtQ291cnNlRWRpdCwgc2V0Q29uZmlybUNvdXJzZUVkaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRhdXRoVG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBhZGRNb2R1bGUgPSBhc3luYygpID0+IHtcclxuICAgIG1vZHVsZXNIYW5kbGVyKFsuLi5tb2R1bGVzLCBtb2R1bGVEYXRhXSlcclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8vYXBpL3YxL2NvdXJzZW1vZHVsZScsIG1vZHVsZURhdGEsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGB0b2tlbiAke2F1dGhUb2tlbn1gLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKT0+IHRvYXN0LnN1Y2Nlc3MoJ0NvdXJzZSBhZGRlZGQgc3VjY2Vzc2Z1bGx5JykpXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7dG9hc3QuZXJyb3IoJ0Vycm9yIGFkZGluZyBjb3Vyc2UnKTtjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSl9KVxyXG4gICAgLy8gY2xvc2UgdGhlIGZvcm1cclxuICAgIGZvcm1TdGF0ZShmYWxzZSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtzZXRNb2R1bGVEYXRhKHsuLi5tb2R1bGVEYXRhLCBkZWdyZWU6IGRlZ3JlZSwgY291cnNlOiBjb3Vyc2V9KVxyXG4gIGlmKGZvcm1EYXRhKXtcclxuICAgIHNldEZvcm1FZGl0YWJsZSh0cnVlKVxyXG4gICAgc2V0TW9kdWxlRGF0YShmb3JtRGF0YSlcclxuICB9XHJcbn0sIFtdKVxyXG5jb25zdCBlZGl0TW9kdWxlSGFuZGxlciA9ICgpID0+IHtcclxuXHJcbn1cclxuY29uc3QgZWRpdE1vZHVsZSA9ICgpID0+IHtcclxuXHJcbn1cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwicC01XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0MCB9fT5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGlkPVwibW9kdWxlTmFtZVwiXHJcbiAgICAgICAgbmFtZT1cIm1vZHVsZU5hbWVcIlxyXG4gICAgICAgIGxhYmVsPVwiTW9kdWxlIG5hbWVcIlxyXG4gICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICBjbGFzc05hbWU9XCJtYi00IGNvbC02IGNvbC1tZC02XCJcclxuICAgICAgICAvLyB2YWx1ZT17Y291cnNlRGF0YT8uQ291cnNlTmFtZSB8fCBcIlwifVxyXG4gICAgICAgIC8vIGlucHV0UHJvcHM9eyFmb3JtRWRpdGFibGUgJiYgeyByZWFkT25seTogdHJ1ZSB9fVxyXG4gICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZmFsc2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TW9kdWxlRGF0YSh7Li4ubW9kdWxlRGF0YSwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgPFRleHRGaWVsZCB0eXBlPVwibnVtYmVyXCIgcmVxdWlyZWQgbGFiZWw9XCJDb3Vyc2UgdW5pdHNcIiBjbGFzc05hbWU9XCJtci01XCIgb25DaGFuZ2U9eyhldmVudCk9PiBzZXRNb2R1bGVEYXRhKHsuLi5tb2R1bGVEYXRhLCBjb3Vyc2VVbml0czogcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKX0pfSAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwiY291cnNlY29kZVwiXHJcbiAgICAgICAgICBuYW1lPVwiY291cnNlY29kZVwiXHJcbiAgICAgICAgICBsYWJlbD1cIkNvdXJzZSBjb2RlXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItNFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRNb2R1bGVEYXRhKHsuLi5tb2R1bGVEYXRhLCBjb3Vyc2VDb2RlOiBldmVudC50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyFjb25maXJtQ291cnNlRWRpdCAmJiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaXQtYnRuIGxhcmdlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgZm9ybURhdGEgPyBlZGl0TW9kdWxlSGFuZGxlcigpIDogYWRkTW9kdWxlKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtmb3JtRGF0YSA/IFwiRWRpdFwiIDogXCJBZGRcIn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAge2NvbmZpcm1Db3Vyc2VFZGl0ICYmIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIml0LWJ0biBsYXJnZVwiIG9uQ2xpY2s9eygpID0+IGVkaXRNb2R1bGUoKX0+XHJcbiAgICAgICAgICBFZGl0IENvdXJzZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJUZXh0RmllbGQiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidG9hc3QiLCJDb3Vyc2VNb2R1bGVGb3JtIiwiZm9ybVN0YXRlIiwiZGVncmVlIiwiY291cnNlIiwibW9kdWxlcyIsIm1vZHVsZXNIYW5kbGVyIiwiZm9ybURhdGEiLCJtb2R1bGVEYXRhIiwic2V0TW9kdWxlRGF0YSIsImF1dGhUb2tlbiIsInNldGF1dGhUb2tlbiIsImZvcm1FZGl0YWJsZSIsInNldEZvcm1FZGl0YWJsZSIsImNvbmZpcm1Db3Vyc2VFZGl0Iiwic2V0Q29uZmlybUNvdXJzZUVkaXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkTW9kdWxlIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwic3VjY2VzcyIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZWRpdE1vZHVsZUhhbmRsZXIiLCJlZGl0TW9kdWxlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJpZCIsIm5hbWUiLCJsYWJlbCIsImNvbG9yIiwicmVxdWlyZWQiLCJjb250ZW50RWRpdGFibGUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJ0eXBlIiwiY291cnNlVW5pdHMiLCJwYXJzZUludCIsImNvdXJzZUNvZGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Dashboard/Admin/CourseModuleForm.tsx\n"));

/***/ })

});