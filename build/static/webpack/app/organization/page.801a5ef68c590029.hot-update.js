"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/organization/page",{

/***/ "(app-pages-browser)/./src/app/organization/page.tsx":
/*!***************************************!*\
  !*** ./src/app/organization/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Navbar */ \"(app-pages-browser)/./src/app/Components/Navbar.tsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_AiOutlineLoading3Quarters_react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=AiOutlineLoading3Quarters!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_apiCall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/apiCall */ \"(app-pages-browser)/./src/app/api/apiCall.ts\");\n/* harmony import */ var _Components_Prompt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Prompt */ \"(app-pages-browser)/./src/app/Components/Prompt.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    let UserId;\n    UserId = localStorage.getItem(\"UserId\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [Organization, setOrganization] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        userId: \"\",\n        OrganizationName: \"\",\n        OrganizationWebsite: \"\",\n        organizationEmail: \"\",\n        OrganizationPhone: \"\",\n        isActive: true\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const userIdFromStorage = localStorage.getItem(\"UserId\");\n        setOrganization((prevState)=>({\n                ...prevState,\n                userId: userIdFromStorage ? userIdFromStorage : prevState.userId\n            }));\n    }, []);\n    const handleChange = (event)=>{\n        setOrganization({\n            ...Organization,\n            [event.target.name]: event.target.value\n        });\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        setIsLoading(true);\n        const res = await (0,_api_apiCall__WEBPACK_IMPORTED_MODULE_5__.addOrganization)(Organization);\n        setIsLoading(false);\n        if (res.status == 200) {\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"Organization Submitted !\", {\n                position: \"top-right\",\n                autoClose: 5000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"light\"\n            });\n            router.push(\"/dashboard\");\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Failed to Submit !\", {\n                position: \"top-right\",\n                autoClose: 5000,\n                hideProgressBar: false,\n                closeOnClick: true,\n                pauseOnHover: true,\n                draggable: true,\n                progress: undefined,\n                theme: \"light\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            UserId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen flex items-center justify-center bg-opacity-50 sm:pt-24 pt-48\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"p-8 bg-white rounded-lg shadow-xl w-96 bg-opacity-10\",\n                    style: {\n                        backdropFilter: \"blur(4px)\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-600\",\n                                    children: \"Organization Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"OrganizationName\",\n                                    required: true,\n                                    onChange: handleChange,\n                                    className: \"mt-1 w-full px-4 py-2 rounded-md border border-gray-300 bg-opacity-50 bg-pink-50 focus:outline-none focus:border-indigo-500\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-600\",\n                                    children: \"Organization Website\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"url\",\n                                    name: \"OrganizationWebsite\",\n                                    required: true,\n                                    onChange: handleChange,\n                                    className: \"mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none focus:border-indigo-500\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-600\",\n                                    children: \"Organization Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    name: \"organizationEmail\",\n                                    required: true,\n                                    onChange: handleChange,\n                                    className: \"mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none focus:border-indigo-500\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-600\",\n                                    children: \"Organization Phone\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    name: \"OrganizationPhone\",\n                                    maxLength: 10,\n                                    minLength: 10,\n                                    required: true,\n                                    onChange: handleChange,\n                                    title: \"Please enter a 10-digit mobile number\",\n                                    className: \"mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none  focus:border-indigo-500\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined),\n                        isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: true,\n                            className: \"w-full flex justify-center py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineLoading3Quarters_react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineLoading3Quarters, {\n                                className: \"animate-spin\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 15\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                            lineNumber: 134,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Prompt__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Apurv Krishn Jha\\\\Desktop\\\\CHTBTY\\\\chatbot-frnt\\\\src\\\\app\\\\organization\\\\page.tsx\",\n                lineNumber: 141,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"jeVi9Ej/Q4CqyijTvrwu5MRbxjo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvb3JnYW5pemF0aW9uL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDVDtBQUNIO0FBQ29CO0FBQ2Y7QUFDSztBQUNQO0FBRzFDLE1BQU1TLE9BQU87O0lBQ1gsSUFBSUM7SUFDRkEsU0FBU0MsYUFBYUMsT0FBTyxDQUFDO0lBRWhDLE1BQU1DLFNBQVNQLDBEQUFTQTtJQUN4QixNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDYyxjQUFjQyxnQkFBZ0IsR0FBR2YsK0NBQVFBLENBQUM7UUFDL0NnQixRQUFRO1FBQ1JDLGtCQUFrQjtRQUNsQkMscUJBQXFCO1FBQ3JCQyxtQkFBbUI7UUFDbkJDLG1CQUFtQjtRQUNuQkMsVUFBVTtJQUNaO0lBRUF0QixnREFBU0EsQ0FBQztRQUNSLE1BQU11QixvQkFBb0JiLGFBQWFDLE9BQU8sQ0FBQztRQUMvQ0ssZ0JBQWdCLENBQUNRLFlBQWU7Z0JBQzlCLEdBQUdBLFNBQVM7Z0JBQ1pQLFFBQVFNLG9CQUFvQkEsb0JBQW9CQyxVQUFVUCxNQUFNO1lBQ2xFO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTVEsZUFBZSxDQUFDQztRQUNwQlYsZ0JBQWdCO1lBQ2QsR0FBR0QsWUFBWTtZQUNmLENBQUNXLE1BQU1DLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVGLE1BQU1DLE1BQU0sQ0FBQ0UsS0FBSztRQUN6QztJQUNGO0lBQ0EsTUFBTUMsZUFBZSxPQUFPSjtRQUMxQkEsTUFBTUssY0FBYztRQUNwQmpCLGFBQWE7UUFDYixNQUFNa0IsTUFBTSxNQUFNMUIsNkRBQWVBLENBQUNTO1FBQ2xDRCxhQUFhO1FBQ2IsSUFBSWtCLElBQUlDLE1BQU0sSUFBSSxLQUFLO1lBQ3JCOUIscURBQUtBLENBQUMsNEJBQTRCO2dCQUNoQytCLFVBQVU7Z0JBQ1ZDLFdBQVc7Z0JBQ1hDLGlCQUFpQjtnQkFDakJDLGNBQWM7Z0JBQ2RDLGNBQWM7Z0JBQ2RDLFdBQVc7Z0JBQ1hDLFVBQVVDO2dCQUNWQyxPQUFPO1lBQ1Q7WUFDQTlCLE9BQU8rQixJQUFJLENBQUM7UUFDZCxPQUFPO1lBQ0x4QyxpREFBS0EsQ0FBQ3lDLEtBQUssQ0FBQyxzQkFBc0I7Z0JBQ2hDVixVQUFVO2dCQUNWQyxXQUFXO2dCQUNYQyxpQkFBaUI7Z0JBQ2pCQyxjQUFjO2dCQUNkQyxjQUFjO2dCQUNkQyxXQUFXO2dCQUNYQyxVQUFVQztnQkFDVkMsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUNBLHFCQUNFOzswQkFDRSw4REFBQ3hDLDBEQUFNQTs7Ozs7WUFDTk8sdUJBQ0MsOERBQUNvQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQ0NDLFVBQVVsQjtvQkFDVmdCLFdBQVU7b0JBQ1ZHLE9BQU87d0JBQUVDLGdCQUFnQjtvQkFBWTs7c0NBRXJDLDhEQUFDTDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNLO29DQUFNTCxXQUFVOzhDQUFzQjs7Ozs7OzhDQUN2Qyw4REFBQ007b0NBQ0NDLE1BQUs7b0NBQ0x6QixNQUFLO29DQUNMMEIsUUFBUTtvQ0FDUkMsVUFBVTlCO29DQUNWcUIsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNLO29DQUFNTCxXQUFVOzhDQUFzQjs7Ozs7OzhDQUd2Qyw4REFBQ007b0NBQ0NDLE1BQUs7b0NBQ0x6QixNQUFLO29DQUNMMEIsUUFBUTtvQ0FDUkMsVUFBVTlCO29DQUNWcUIsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNLO29DQUFNTCxXQUFVOzhDQUFzQjs7Ozs7OzhDQUN2Qyw4REFBQ007b0NBQ0NDLE1BQUs7b0NBQ0x6QixNQUFLO29DQUNMMEIsUUFBUTtvQ0FDUkMsVUFBVTlCO29DQUNWcUIsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNLO29DQUFNTCxXQUFVOzhDQUFzQjs7Ozs7OzhDQUN2Qyw4REFBQ007b0NBQ0NDLE1BQUs7b0NBQ0x6QixNQUFLO29DQUNMNEIsV0FBVztvQ0FDWEMsV0FBVztvQ0FDWEgsUUFBUTtvQ0FDUkMsVUFBVTlCO29DQUNWaUMsT0FBTTtvQ0FDTlosV0FBVTs7Ozs7Ozs7Ozs7O3dCQUdiakMsMEJBQ0MsOERBQUM4Qzs0QkFDQ0MsUUFBUTs0QkFDUmQsV0FBVTtzQ0FFViw0RUFBQzFDLHNIQUF5QkE7Z0NBQUMwQyxXQUFVOzs7Ozs7Ozs7O3NEQUd2Qyw4REFBQ2E7NEJBQU9iLFdBQVU7c0NBQXVFOzs7Ozs7Ozs7Ozs7Ozs7OzBDQU8vRiw4REFBQ3ZDLDBEQUFNQTs7Ozs7OztBQUlmO0dBcklNQzs7UUFJV0gsc0RBQVNBOzs7S0FKcEJHO0FBdUlOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvb3JnYW5pemF0aW9uL3BhZ2UudHN4PzgwZTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9Db21wb25lbnRzL05hdmJhclwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVMb2FkaW5nM1F1YXJ0ZXJzIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgYWRkT3JnYW5pemF0aW9uIH0gZnJvbSBcIi4uL2FwaS9hcGlDYWxsXCI7XHJcbmltcG9ydCBQcm9tcHQgZnJvbSBcIi4uL0NvbXBvbmVudHMvUHJvbXB0XCI7XHJcblxyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICBsZXQgVXNlcklkOiBzdHJpbmcgfCBudWxsIDtcclxuICAgIFVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVXNlcklkXCIpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtPcmdhbml6YXRpb24sIHNldE9yZ2FuaXphdGlvbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VySWQ6IFwiXCIsXHJcbiAgICBPcmdhbml6YXRpb25OYW1lOiBcIlwiLFxyXG4gICAgT3JnYW5pemF0aW9uV2Vic2l0ZTogXCJcIixcclxuICAgIG9yZ2FuaXphdGlvbkVtYWlsOiBcIlwiLFxyXG4gICAgT3JnYW5pemF0aW9uUGhvbmU6IFwiXCIsXHJcbiAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJJZEZyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJVc2VySWRcIik7XHJcbiAgICBzZXRPcmdhbml6YXRpb24oKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICB1c2VySWQ6IHVzZXJJZEZyb21TdG9yYWdlID8gdXNlcklkRnJvbVN0b3JhZ2UgOiBwcmV2U3RhdGUudXNlcklkLFxyXG4gICAgfSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0T3JnYW5pemF0aW9uKHtcclxuICAgICAgLi4uT3JnYW5pemF0aW9uLFxyXG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBhZGRPcmdhbml6YXRpb24oT3JnYW5pemF0aW9uKTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgdG9hc3QoXCJPcmdhbml6YXRpb24gU3VibWl0dGVkICFcIiwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGhlbWU6IFwibGlnaHRcIixcclxuICAgICAgfSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIFN1Ym1pdCAhXCIsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICAgIHRoZW1lOiBcImxpZ2h0XCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAge1VzZXJJZCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1vcGFjaXR5LTUwIHNtOnB0LTI0IHB0LTQ4XCI+XHJcbiAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTggYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3cteGwgdy05NiBiZy1vcGFjaXR5LTEwXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig0cHgpXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS02MDBcIj5Pcmdhbml6YXRpb24gTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiT3JnYW5pemF0aW9uTmFtZVwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgdy1mdWxsIHB4LTQgcHktMiByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctb3BhY2l0eS01MCBiZy1waW5rLTUwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICBPcmdhbml6YXRpb24gV2Vic2l0ZVxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJPcmdhbml6YXRpb25XZWJzaXRlXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgcHgtNCBweS0yIHJvdW5kZWQtbWQgYm9yZGVyIGJnLW9wYWNpdHktNTAgYmctcGluay01MCBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS02MDBcIj5Pcmdhbml6YXRpb24gRW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvcmdhbml6YXRpb25FbWFpbFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgdy1mdWxsIHB4LTQgcHktMiByb3VuZGVkLW1kIGJvcmRlciBiZy1vcGFjaXR5LTUwIGJnLXBpbmstNTAgYm9yZGVyLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNjAwXCI+T3JnYW5pemF0aW9uIFBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIk9yZ2FuaXphdGlvblBob25lXCJcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTB9XHJcbiAgICAgICAgICAgICAgICBtaW5MZW5ndGg9ezEwfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBsZWFzZSBlbnRlciBhIDEwLWRpZ2l0IG1vYmlsZSBudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSB3LWZ1bGwgcHgtNCBweS0yIHJvdW5kZWQtbWQgYm9yZGVyIGJnLW9wYWNpdHktNTAgYmctcGluay01MCBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lICBmb2N1czpib3JkZXItaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIHB5LTIgcHgtNCBiZy1waW5rLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgaG92ZXI6YmctcGluay03MDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBaU91dGxpbmVMb2FkaW5nM1F1YXJ0ZXJzIGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpblwiIC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMiBweC00IGJnLXBpbmstNjAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBob3ZlcjpiZy1waW5rLTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFByb21wdCAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2YmFyIiwidG9hc3QiLCJBaU91dGxpbmVMb2FkaW5nM1F1YXJ0ZXJzIiwidXNlUm91dGVyIiwiYWRkT3JnYW5pemF0aW9uIiwiUHJvbXB0IiwiUGFnZSIsIlVzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyb3V0ZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJPcmdhbml6YXRpb24iLCJzZXRPcmdhbml6YXRpb24iLCJ1c2VySWQiLCJPcmdhbml6YXRpb25OYW1lIiwiT3JnYW5pemF0aW9uV2Vic2l0ZSIsIm9yZ2FuaXphdGlvbkVtYWlsIiwiT3JnYW5pemF0aW9uUGhvbmUiLCJpc0FjdGl2ZSIsInVzZXJJZEZyb21TdG9yYWdlIiwicHJldlN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsInN0YXR1cyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJ0aGVtZSIsInB1c2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsInN0eWxlIiwiYmFja2Ryb3BGaWx0ZXIiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJtYXhMZW5ndGgiLCJtaW5MZW5ndGgiLCJ0aXRsZSIsImJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/organization/page.tsx\n"));

/***/ })

});