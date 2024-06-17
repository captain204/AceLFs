"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/Globals/Slices/ApplicationSlice/Referee.ts":
/*!********************************************************!*\
  !*** ./src/Globals/Slices/ApplicationSlice/Referee.ts ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resetRefereeFormState: function() { return /* binding */ resetRefereeFormState; },\n/* harmony export */   submitRefereeForm: function() { return /* binding */ submitRefereeForm; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Interceptor */ \"./src/Globals/Interceptor.ts\");\n\n\n\n\nconst initialState = {\n    loading: false,\n    success: false,\n    error: null,\n    response: null\n};\nconst submitRefereeForm = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)(\"refereeForm/submitRefereeForm\", async (formData, param)=>{\n    let { rejectWithValue } = param;\n    try {\n        const response = await _Interceptor__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/v1/admissions/referee\", formData);\n        if (response.status >= 200 && response.status < 300) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(\"referee submitted successfully\");\n            console.log(response);\n            return response.data;\n        }\n    } catch (error) {\n        var _error_response, _error_response_data, _error_response1;\n        console.log(error);\n        if ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) {\n            const errorMessages = Object.values(error.response.data);\n            errorMessages.forEach((errorMessage)=>{\n                react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(errorMessage);\n            });\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(\"An error occurred\");\n        }\n        return rejectWithValue(((_error_response1 = error.response) === null || _error_response1 === void 0 ? void 0 : (_error_response_data = _error_response1.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.error) || \"An error occurred\");\n    }\n});\nconst refereeFormSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({\n    name: \"refereeForm\",\n    initialState,\n    reducers: {\n        resetRefereeFormState: (state)=>{\n            state.loading = false;\n            state.success = false;\n            state.error = null;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(submitRefereeForm.pending, (state)=>{\n            state.loading = true;\n            state.success = false;\n            state.error = null;\n        }).addCase(submitRefereeForm.fulfilled, (state, action)=>{\n            state.loading = false;\n            state.success = true;\n            state.error = null;\n            state.response = action.payload;\n        }).addCase(submitRefereeForm.rejected, (state, action)=>{\n            state.loading = false;\n            state.success = false;\n            state.error = action.payload;\n        });\n    }\n});\nconst { resetRefereeFormState } = refereeFormSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (refereeFormSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvR2xvYmFscy9TbGljZXMvQXBwbGljYXRpb25TbGljZS9SZWZlcmVlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUU7QUFDMUI7QUFDUTtBQUVEO0FBaUI5QyxNQUFNSSxlQUFpQztJQUNyQ0MsU0FBUztJQUNUQyxTQUFTO0lBQ1RDLE9BQU87SUFDUEMsVUFBVTtBQUNaO0FBRU8sTUFBTUMsb0JBQW9CUixrRUFBZ0JBLENBQy9DLGlDQUNBLE9BQU9TO1FBQTJCLEVBQUVDLGVBQWUsRUFBRTtJQUNuRCxJQUFJO1FBQ0YsTUFBTUgsV0FBVyxNQUFNTCx5REFBa0IsQ0FDdkMsOEJBQ0FPO1FBRUYsSUFBSUYsU0FBU0ssTUFBTSxJQUFJLE9BQU9MLFNBQVNLLE1BQU0sR0FBRyxLQUFLO1lBQ25EWCxpREFBS0EsQ0FBQ0ksT0FBTyxDQUFDO1lBQ2RRLFFBQVFDLEdBQUcsQ0FBQ1A7WUFDWixPQUFPQSxTQUFTUSxJQUFJO1FBQ3RCO0lBQ0YsRUFBRSxPQUFPVCxPQUFZO1lBRWZBLGlCQVNGQSxzQkFBQUE7UUFWQU8sUUFBUUMsR0FBRyxDQUFDUjtRQUNkLEtBQUlBLGtCQUFBQSxNQUFNQyxRQUFRLGNBQWRELHNDQUFBQSxnQkFBZ0JTLElBQUksRUFBRTtZQUN4QixNQUFNQyxnQkFBZ0JDLE9BQU9DLE1BQU0sQ0FBQ1osTUFBTUMsUUFBUSxDQUFDUSxJQUFJO1lBQ3ZEQyxjQUFjRyxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ3JCbkIsaURBQUtBLENBQUNLLEtBQUssQ0FBQ2M7WUFDZDtRQUNGLE9BQU87WUFDTG5CLGlEQUFLQSxDQUFDSyxLQUFLLENBQUM7UUFDZDtRQUNBLE9BQU9JLGdCQUNMSixFQUFBQSxtQkFBQUEsTUFBTUMsUUFBUSxjQUFkRCx3Q0FBQUEsdUJBQUFBLGlCQUFnQlMsSUFBSSxjQUFwQlQsMkNBQUFBLHFCQUFzQkEsS0FBSyxLQUFJO0lBRW5DO0FBQ0YsR0FDQTtBQUVGLE1BQU1lLG1CQUFtQnRCLDZEQUFXQSxDQUFDO0lBQ25DdUIsTUFBTTtJQUNObkI7SUFDQW9CLFVBQVU7UUFDUkMsdUJBQXVCLENBQUNDO1lBQ3RCQSxNQUFNckIsT0FBTyxHQUFHO1lBQ2hCcUIsTUFBTXBCLE9BQU8sR0FBRztZQUNoQm9CLE1BQU1uQixLQUFLLEdBQUc7UUFDaEI7SUFDRjtJQUNBb0IsZUFBZSxDQUFDQztRQUNkQSxRQUNHQyxPQUFPLENBQUNwQixrQkFBa0JxQixPQUFPLEVBQUUsQ0FBQ0o7WUFDbkNBLE1BQU1yQixPQUFPLEdBQUc7WUFDaEJxQixNQUFNcEIsT0FBTyxHQUFHO1lBQ2hCb0IsTUFBTW5CLEtBQUssR0FBRztRQUNoQixHQUNDc0IsT0FBTyxDQUFDcEIsa0JBQWtCc0IsU0FBUyxFQUFFLENBQUNMLE9BQU9NO1lBQzVDTixNQUFNckIsT0FBTyxHQUFHO1lBQ2hCcUIsTUFBTXBCLE9BQU8sR0FBRztZQUNoQm9CLE1BQU1uQixLQUFLLEdBQUc7WUFDZG1CLE1BQU1sQixRQUFRLEdBQUd3QixPQUFPQyxPQUFPO1FBQ2pDLEdBQ0NKLE9BQU8sQ0FBQ3BCLGtCQUFrQnlCLFFBQVEsRUFBRSxDQUFDUixPQUFPTTtZQUMzQ04sTUFBTXJCLE9BQU8sR0FBRztZQUNoQnFCLE1BQU1wQixPQUFPLEdBQUc7WUFDaEJvQixNQUFNbkIsS0FBSyxHQUFHeUIsT0FBT0MsT0FBTztRQUM5QjtJQUNKO0FBQ0Y7QUFFTyxNQUFNLEVBQUVSLHFCQUFxQixFQUFFLEdBQUdILGlCQUFpQmEsT0FBTyxDQUFDO0FBQ2xFLCtEQUFlYixpQkFBaUJjLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvR2xvYmFscy9TbGljZXMvQXBwbGljYXRpb25TbGljZS9SZWZlcmVlLnRzPzRlMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcbmltcG9ydCBheGlvc0luc3RhbmNlQXV0aCBmcm9tIFwiLi4vLi4vSW50ZXJjZXB0b3JBdXRoXCI7XG5pbXBvcnQgYXhpb3NJbnN0YW5jZSBmcm9tIFwiLi4vLi4vSW50ZXJjZXB0b3JcIjtcblxuaW50ZXJmYWNlIFJlZmVyZWVGb3JtRGF0YSB7XG4gIGZpcnN0bmFtZTogc3RyaW5nO1xuICBsYXN0bmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBjb250YWN0QWRkcmVzczogc3RyaW5nO1xuICBwaG9uZU51bWJlcjogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUmVmZXJlZUZvcm1TdGF0ZSB7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIGVycm9yOiBzdHJpbmcgfCBudWxsO1xuICByZXNwb25zZTogYW55IHwgbnVsbDtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBSZWZlcmVlRm9ybVN0YXRlID0ge1xuICBsb2FkaW5nOiBmYWxzZSxcbiAgc3VjY2VzczogZmFsc2UsXG4gIGVycm9yOiBudWxsLFxuICByZXNwb25zZTogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBzdWJtaXRSZWZlcmVlRm9ybSA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwicmVmZXJlZUZvcm0vc3VibWl0UmVmZXJlZUZvcm1cIixcbiAgYXN5bmMgKGZvcm1EYXRhOiBSZWZlcmVlRm9ybURhdGEsIHsgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0luc3RhbmNlLnBvc3QoXG4gICAgICAgIFwiL2FwaS92MS9hZG1pc3Npb25zL3JlZmVyZWVcIixcbiAgICAgICAgZm9ybURhdGFcbiAgICAgICk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcInJlZmVyZWUgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2U/LmRhdGEpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IE9iamVjdC52YWx1ZXMoZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIGVycm9yTWVzc2FnZXMuZm9yRWFjaCgoZXJyb3JNZXNzYWdlOmFueSkgPT4ge1xuICAgICAgICAgIHRvYXN0LmVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZFwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoXG4gICAgICAgIGVycm9yLnJlc3BvbnNlPy5kYXRhPy5lcnJvciB8fCBcIkFuIGVycm9yIG9jY3VycmVkXCJcbiAgICAgICk7XG4gICAgfVxuICB9XG4pO1xuXG5jb25zdCByZWZlcmVlRm9ybVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInJlZmVyZWVGb3JtXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICByZXNldFJlZmVyZWVGb3JtU3RhdGU6IChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgIH0sXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlclxuICAgICAgLmFkZENhc2Uoc3VibWl0UmVmZXJlZUZvcm0ucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZShzdWJtaXRSZWZlcmVlRm9ybS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcbiAgICAgICAgc3RhdGUucmVzcG9uc2UgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZShzdWJtaXRSZWZlcmVlRm9ybS5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQgYXMgc3RyaW5nO1xuICAgICAgfSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgcmVzZXRSZWZlcmVlRm9ybVN0YXRlIH0gPSByZWZlcmVlRm9ybVNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCByZWZlcmVlRm9ybVNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwidG9hc3QiLCJheGlvc0luc3RhbmNlIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsInN1Y2Nlc3MiLCJlcnJvciIsInJlc3BvbnNlIiwic3VibWl0UmVmZXJlZUZvcm0iLCJmb3JtRGF0YSIsInJlamVjdFdpdGhWYWx1ZSIsInBvc3QiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yTWVzc2FnZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiZXJyb3JNZXNzYWdlIiwicmVmZXJlZUZvcm1TbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInJlc2V0UmVmZXJlZUZvcm1TdGF0ZSIsInN0YXRlIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Globals/Slices/ApplicationSlice/Referee.ts\n"));

/***/ })

});