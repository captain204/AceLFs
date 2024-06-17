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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resetRefereeFormState: function() { return /* binding */ resetRefereeFormState; },\n/* harmony export */   submitRefereeForm: function() { return /* binding */ submitRefereeForm; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Interceptor */ \"./src/Globals/Interceptor.ts\");\n\n\n\n\nconst initialState = {\n    loading: false,\n    success: false,\n    error: null,\n    response: null\n};\nconst submitRefereeForm = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)(\"refereeForm/submitRefereeForm\", async (formData, param)=>{\n    let { rejectWithValue } = param;\n    try {\n        const response = await _Interceptor__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/v1/admissions/referee\", formData);\n        if (response.status >= 200 && response.status < 300) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(\"referee submitted successfully\");\n            console;\n            return response.data;\n        }\n    } catch (error) {\n        var _error_response, _error_response_data, _error_response1;\n        console.log(error);\n        if ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) {\n            const errorMessages = Object.values(error.response.data);\n            errorMessages.forEach((errorMessage)=>{\n                react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(errorMessage);\n            });\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(\"An error occurred\");\n        }\n        return rejectWithValue(((_error_response1 = error.response) === null || _error_response1 === void 0 ? void 0 : (_error_response_data = _error_response1.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.error) || \"An error occurred\");\n    }\n});\nconst refereeFormSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({\n    name: \"refereeForm\",\n    initialState,\n    reducers: {\n        resetRefereeFormState: (state)=>{\n            state.loading = false;\n            state.success = false;\n            state.error = null;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(submitRefereeForm.pending, (state)=>{\n            state.loading = true;\n            state.success = false;\n            state.error = null;\n        }).addCase(submitRefereeForm.fulfilled, (state, action)=>{\n            state.loading = false;\n            state.success = true;\n            state.error = null;\n            state.response = action.payload;\n        }).addCase(submitRefereeForm.rejected, (state, action)=>{\n            state.loading = false;\n            state.success = false;\n            state.error = action.payload;\n        });\n    }\n});\nconst { resetRefereeFormState } = refereeFormSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (refereeFormSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvR2xvYmFscy9TbGljZXMvQXBwbGljYXRpb25TbGljZS9SZWZlcmVlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUU7QUFDMUI7QUFDUTtBQUVEO0FBaUI5QyxNQUFNSSxlQUFpQztJQUNyQ0MsU0FBUztJQUNUQyxTQUFTO0lBQ1RDLE9BQU87SUFDUEMsVUFBVTtBQUNaO0FBRU8sTUFBTUMsb0JBQW9CUixrRUFBZ0JBLENBQy9DLGlDQUNBLE9BQU9TO1FBQTJCLEVBQUVDLGVBQWUsRUFBRTtJQUNuRCxJQUFJO1FBQ0YsTUFBTUgsV0FBVyxNQUFNTCx5REFBa0IsQ0FDdkMsOEJBQ0FPO1FBRUYsSUFBSUYsU0FBU0ssTUFBTSxJQUFJLE9BQU9MLFNBQVNLLE1BQU0sR0FBRyxLQUFLO1lBQ25EWCxpREFBS0EsQ0FBQ0ksT0FBTyxDQUFDO1lBQ2RRO1lBQ0EsT0FBT04sU0FBU08sSUFBSTtRQUN0QjtJQUNGLEVBQUUsT0FBT1IsT0FBWTtZQUVmQSxpQkFTRkEsc0JBQUFBO1FBVkFPLFFBQVFFLEdBQUcsQ0FBQ1Q7UUFDZCxLQUFJQSxrQkFBQUEsTUFBTUMsUUFBUSxjQUFkRCxzQ0FBQUEsZ0JBQWdCUSxJQUFJLEVBQUU7WUFDeEIsTUFBTUUsZ0JBQWdCQyxPQUFPQyxNQUFNLENBQUNaLE1BQU1DLFFBQVEsQ0FBQ08sSUFBSTtZQUN2REUsY0FBY0csT0FBTyxDQUFDLENBQUNDO2dCQUNyQm5CLGlEQUFLQSxDQUFDSyxLQUFLLENBQUNjO1lBQ2Q7UUFDRixPQUFPO1lBQ0xuQixpREFBS0EsQ0FBQ0ssS0FBSyxDQUFDO1FBQ2Q7UUFDQSxPQUFPSSxnQkFDTEosRUFBQUEsbUJBQUFBLE1BQU1DLFFBQVEsY0FBZEQsd0NBQUFBLHVCQUFBQSxpQkFBZ0JRLElBQUksY0FBcEJSLDJDQUFBQSxxQkFBc0JBLEtBQUssS0FBSTtJQUVuQztBQUNGLEdBQ0E7QUFFRixNQUFNZSxtQkFBbUJ0Qiw2REFBV0EsQ0FBQztJQUNuQ3VCLE1BQU07SUFDTm5CO0lBQ0FvQixVQUFVO1FBQ1JDLHVCQUF1QixDQUFDQztZQUN0QkEsTUFBTXJCLE9BQU8sR0FBRztZQUNoQnFCLE1BQU1wQixPQUFPLEdBQUc7WUFDaEJvQixNQUFNbkIsS0FBSyxHQUFHO1FBQ2hCO0lBQ0Y7SUFDQW9CLGVBQWUsQ0FBQ0M7UUFDZEEsUUFDR0MsT0FBTyxDQUFDcEIsa0JBQWtCcUIsT0FBTyxFQUFFLENBQUNKO1lBQ25DQSxNQUFNckIsT0FBTyxHQUFHO1lBQ2hCcUIsTUFBTXBCLE9BQU8sR0FBRztZQUNoQm9CLE1BQU1uQixLQUFLLEdBQUc7UUFDaEIsR0FDQ3NCLE9BQU8sQ0FBQ3BCLGtCQUFrQnNCLFNBQVMsRUFBRSxDQUFDTCxPQUFPTTtZQUM1Q04sTUFBTXJCLE9BQU8sR0FBRztZQUNoQnFCLE1BQU1wQixPQUFPLEdBQUc7WUFDaEJvQixNQUFNbkIsS0FBSyxHQUFHO1lBQ2RtQixNQUFNbEIsUUFBUSxHQUFHd0IsT0FBT0MsT0FBTztRQUNqQyxHQUNDSixPQUFPLENBQUNwQixrQkFBa0J5QixRQUFRLEVBQUUsQ0FBQ1IsT0FBT007WUFDM0NOLE1BQU1yQixPQUFPLEdBQUc7WUFDaEJxQixNQUFNcEIsT0FBTyxHQUFHO1lBQ2hCb0IsTUFBTW5CLEtBQUssR0FBR3lCLE9BQU9DLE9BQU87UUFDOUI7SUFDSjtBQUNGO0FBRU8sTUFBTSxFQUFFUixxQkFBcUIsRUFBRSxHQUFHSCxpQkFBaUJhLE9BQU8sQ0FBQztBQUNsRSwrREFBZWIsaUJBQWlCYyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0dsb2JhbHMvU2xpY2VzL0FwcGxpY2F0aW9uU2xpY2UvUmVmZXJlZS50cz80ZTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XG5pbXBvcnQgYXhpb3NJbnN0YW5jZUF1dGggZnJvbSBcIi4uLy4uL0ludGVyY2VwdG9yQXV0aFwiO1xuaW1wb3J0IGF4aW9zSW5zdGFuY2UgZnJvbSBcIi4uLy4uL0ludGVyY2VwdG9yXCI7XG5cbmludGVyZmFjZSBSZWZlcmVlRm9ybURhdGEge1xuICBmaXJzdG5hbWU6IHN0cmluZztcbiAgbGFzdG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgY29udGFjdEFkZHJlc3M6IHN0cmluZztcbiAgcGhvbmVOdW1iZXI6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFJlZmVyZWVGb3JtU3RhdGUge1xuICBsb2FkaW5nOiBib29sZWFuO1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcbiAgcmVzcG9uc2U6IGFueSB8IG51bGw7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogUmVmZXJlZUZvcm1TdGF0ZSA9IHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIHN1Y2Nlc3M6IGZhbHNlLFxuICBlcnJvcjogbnVsbCxcbiAgcmVzcG9uc2U6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3Qgc3VibWl0UmVmZXJlZUZvcm0gPSBjcmVhdGVBc3luY1RodW5rKFxuICBcInJlZmVyZWVGb3JtL3N1Ym1pdFJlZmVyZWVGb3JtXCIsXG4gIGFzeW5jIChmb3JtRGF0YTogUmVmZXJlZUZvcm1EYXRhLCB7IHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5wb3N0KFxuICAgICAgICBcIi9hcGkvdjEvYWRtaXNzaW9ucy9yZWZlcmVlXCIsXG4gICAgICAgIGZvcm1EYXRhXG4gICAgICApO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJyZWZlcmVlIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICAgIGNvbnNvbGVcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZT8uZGF0YSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0gT2JqZWN0LnZhbHVlcyhlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlcy5mb3JFYWNoKChlcnJvck1lc3NhZ2U6YW55KSA9PiB7XG4gICAgICAgICAgdG9hc3QuZXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2FzdC5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShcbiAgICAgICAgZXJyb3IucmVzcG9uc2U/LmRhdGE/LmVycm9yIHx8IFwiQW4gZXJyb3Igb2NjdXJyZWRcIlxuICAgICAgKTtcbiAgICB9XG4gIH1cbik7XG5cbmNvbnN0IHJlZmVyZWVGb3JtU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwicmVmZXJlZUZvcm1cIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHJlc2V0UmVmZXJlZUZvcm1TdGF0ZTogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgfSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyXG4gICAgICAuYWRkQ2FzZShzdWJtaXRSZWZlcmVlRm9ybS5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHN0YXRlLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKHN1Ym1pdFJlZmVyZWVGb3JtLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgICBzdGF0ZS5yZXNwb25zZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKHN1Ym1pdFJlZmVyZWVGb3JtLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZCBhcyBzdHJpbmc7XG4gICAgICB9KTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyByZXNldFJlZmVyZWVGb3JtU3RhdGUgfSA9IHJlZmVyZWVGb3JtU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBkZWZhdWx0IHJlZmVyZWVGb3JtU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJ0b2FzdCIsImF4aW9zSW5zdGFuY2UiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwic3VjY2VzcyIsImVycm9yIiwicmVzcG9uc2UiLCJzdWJtaXRSZWZlcmVlRm9ybSIsImZvcm1EYXRhIiwicmVqZWN0V2l0aFZhbHVlIiwicG9zdCIsInN0YXR1cyIsImNvbnNvbGUiLCJkYXRhIiwibG9nIiwiZXJyb3JNZXNzYWdlcyIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJlcnJvck1lc3NhZ2UiLCJyZWZlcmVlRm9ybVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwicmVzZXRSZWZlcmVlRm9ybVN0YXRlIiwic3RhdGUiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlamVjdGVkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Globals/Slices/ApplicationSlice/Referee.ts\n"));

/***/ })

});