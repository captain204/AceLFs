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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CourseModuleForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Card,TextField!=!@mui/material */ \"__barrel_optimize__?names=Card,TextField!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction CourseModuleForm(param) {\n    let { formState, degree, course } = param;\n    _s();\n    const [moduleData, setModuleData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const addModule = ()=>{\n        console.log(moduleData);\n        // close the form\n        formState(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setModuleData({\n            ...moduleData,\n            degree: degree,\n            course: course\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        className: \"p-5\",\n        style: {\n            marginBottom: 40\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                id: \"moduleName\",\n                name: \"moduleName\",\n                label: \"Module name\",\n                color: \"success\",\n                required: true,\n                className: \"mb-4 col-6 col-md-6\",\n                // value={courseData?.CourseName || \"\"}\n                // inputProps={!formEditable && { readOnly: true }}\n                contentEditable: false,\n                onChange: (event)=>setModuleData({\n                        ...moduleData,\n                        name: event.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                        type: \"number\",\n                        required: true,\n                        label: \"Course units\",\n                        className: \"mr-5\",\n                        onChange: (event)=>setModuleData({\n                                ...moduleData,\n                                courseUnits: parseInt(event.target.value)\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                        id: \"coursecode\",\n                        name: \"coursecode\",\n                        label: \"Course code\",\n                        required: true,\n                        color: \"success\",\n                        className: \"mb-4\",\n                        onChange: (event)=>setModuleData({\n                                ...moduleData,\n                                courseCode: event.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"it-btn\",\n                onClick: ()=>addModule(),\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ademi\\\\OneDrive - Dundalk Institute of Technology\\\\acedhars\\\\AceLFs\\\\src\\\\components\\\\Dashboard\\\\Admin\\\\CourseModuleForm.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(CourseModuleForm, \"70Ot19+9coGJNQ8vhbgEvfrLAag=\");\n_c = CourseModuleForm;\nvar _c;\n$RefreshReg$(_c, \"CourseModuleForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRtaW4vQ291cnNlTW9kdWxlRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDaEI7QUFTN0IsU0FBU0ksaUJBQWlCLEtBQTJCO1FBQTNCLEVBQUNDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUMsR0FBM0I7O0lBQ3ZDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUE7SUFDNUMsTUFBTU8sWUFBWTtRQUNoQkMsUUFBUUMsR0FBRyxDQUFDSjtRQUNaLGlCQUFpQjtRQUNqQkgsVUFBVTtJQUNaO0lBQ0FILGdEQUFTQSxDQUFDO1FBQU9PLGNBQWM7WUFBQyxHQUFHRCxVQUFVO1lBQUVGLFFBQVFBO1lBQVFDLFFBQVFBO1FBQU07SUFBRSxHQUFHLEVBQUU7SUFDcEYscUJBQ0UsOERBQUNQLG9GQUFJQTtRQUFDYSxXQUFVO1FBQU1DLE9BQU87WUFBRUMsY0FBYztRQUFHOzswQkFDOUMsOERBQUNkLHlGQUFTQTtnQkFDUmUsSUFBRztnQkFDSEMsTUFBSztnQkFDTEMsT0FBTTtnQkFDTkMsT0FBTTtnQkFDTkMsUUFBUTtnQkFDUlAsV0FBVTtnQkFDVix1Q0FBdUM7Z0JBQ3ZDLG1EQUFtRDtnQkFDbkRRLGlCQUFpQjtnQkFDakJDLFVBQVUsQ0FBQ0MsUUFBVWQsY0FBYzt3QkFBQyxHQUFHRCxVQUFVO3dCQUFFUyxNQUFNTSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7b0JBQUE7Ozs7OzswQkFFN0UsOERBQUNDO2dCQUFJYixXQUFVOztrQ0FDYiw4REFBQ1oseUZBQVNBO3dCQUFDMEIsTUFBSzt3QkFBU1AsUUFBUTt3QkFBQ0YsT0FBTTt3QkFBZUwsV0FBVTt3QkFBTVMsVUFBVSxDQUFDQyxRQUFTZCxjQUFjO2dDQUFDLEdBQUdELFVBQVU7Z0NBQUVvQixhQUFhQyxTQUFTTixNQUFNQyxNQUFNLENBQUNDLEtBQUs7NEJBQUM7Ozs7OztrQ0FDbEssOERBQUN4Qix5RkFBU0E7d0JBQ1JlLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLE9BQU07d0JBQ05FLFFBQVE7d0JBQ1JELE9BQU07d0JBQ05OLFdBQVU7d0JBQ1ZTLFVBQVUsQ0FBQ0MsUUFBVWQsY0FBYztnQ0FBQyxHQUFHRCxVQUFVO2dDQUFFc0IsWUFBWVAsTUFBTUMsTUFBTSxDQUFDQyxLQUFLOzRCQUFBOzs7Ozs7Ozs7Ozs7MEJBR3JGLDhEQUFDTTtnQkFBT0osTUFBSztnQkFBU2QsV0FBVTtnQkFBU21CLFNBQVMsSUFBTXRCOzBCQUFhOzs7Ozs7Ozs7Ozs7QUFHM0U7R0FyQ3dCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRtaW4vQ291cnNlTW9kdWxlRm9ybS50c3g/Mjc2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBUZXh0RmllbGQsIElucHV0TGFiZWwgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgbW9kdWxlU3RhdGUgIHtcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgZGVncmVlOiBudW1iZXIsXHJcbiAgY291cnNlOiBudW1iZXIsXHJcbiAgY291cnNlQ29kZTogc3RyaW5nLFxyXG4gIGNvdXJzZVVuaXRzOiBudW1iZXJcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VNb2R1bGVGb3JtKHtmb3JtU3RhdGUsIGRlZ3JlZSwgY291cnNlfSkge1xyXG4gIGNvbnN0IFttb2R1bGVEYXRhLCBzZXRNb2R1bGVEYXRhXSA9IHVzZVN0YXRlPG1vZHVsZVN0YXRlPigpXHJcbiAgY29uc3QgYWRkTW9kdWxlID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobW9kdWxlRGF0YSlcclxuICAgIC8vIGNsb3NlIHRoZSBmb3JtXHJcbiAgICBmb3JtU3RhdGUoZmFsc2UpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7c2V0TW9kdWxlRGF0YSh7Li4ubW9kdWxlRGF0YSwgZGVncmVlOiBkZWdyZWUsIGNvdXJzZTogY291cnNlfSl9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwicC01XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0MCB9fT5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGlkPVwibW9kdWxlTmFtZVwiXHJcbiAgICAgICAgbmFtZT1cIm1vZHVsZU5hbWVcIlxyXG4gICAgICAgIGxhYmVsPVwiTW9kdWxlIG5hbWVcIlxyXG4gICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICBjbGFzc05hbWU9XCJtYi00IGNvbC02IGNvbC1tZC02XCJcclxuICAgICAgICAvLyB2YWx1ZT17Y291cnNlRGF0YT8uQ291cnNlTmFtZSB8fCBcIlwifVxyXG4gICAgICAgIC8vIGlucHV0UHJvcHM9eyFmb3JtRWRpdGFibGUgJiYgeyByZWFkT25seTogdHJ1ZSB9fVxyXG4gICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZmFsc2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TW9kdWxlRGF0YSh7Li4ubW9kdWxlRGF0YSwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgPFRleHRGaWVsZCB0eXBlPVwibnVtYmVyXCIgcmVxdWlyZWQgbGFiZWw9XCJDb3Vyc2UgdW5pdHNcIiBjbGFzc05hbWU9XCJtci01XCJvbkNoYW5nZT17KGV2ZW50KT0+IHNldE1vZHVsZURhdGEoey4uLm1vZHVsZURhdGEsIGNvdXJzZVVuaXRzOiBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpfSl9IC8+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgaWQ9XCJjb3Vyc2Vjb2RlXCJcclxuICAgICAgICAgIG5hbWU9XCJjb3Vyc2Vjb2RlXCJcclxuICAgICAgICAgIGxhYmVsPVwiQ291cnNlIGNvZGVcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi00XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE1vZHVsZURhdGEoey4uLm1vZHVsZURhdGEsIGNvdXJzZUNvZGU6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJpdC1idG5cIiBvbkNsaWNrPXsoKSA9PiBhZGRNb2R1bGUoKX0+QWRkPC9idXR0b24+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQ2FyZCIsIlRleHRGaWVsZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ291cnNlTW9kdWxlRm9ybSIsImZvcm1TdGF0ZSIsImRlZ3JlZSIsImNvdXJzZSIsIm1vZHVsZURhdGEiLCJzZXRNb2R1bGVEYXRhIiwiYWRkTW9kdWxlIiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJjb2xvciIsInJlcXVpcmVkIiwiY29udGVudEVkaXRhYmxlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwidHlwZSIsImNvdXJzZVVuaXRzIiwicGFyc2VJbnQiLCJjb3Vyc2VDb2RlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Dashboard/Admin/CourseModuleForm.tsx\n"));

/***/ })

});