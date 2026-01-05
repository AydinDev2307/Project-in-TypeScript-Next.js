(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Project-in-TypeScript-Next.js/app/API/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API",
    ()=>API
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
"use client";
;
const API = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "https://dummyjson.com"),
    headers: {
        "Content-Type": "application/json"
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project-in-TypeScript-Next.js/app/services/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProducts",
    ()=>getProducts,
    "getProductsByID",
    ()=>getProductsByID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$API$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/app/API/api.ts [app-client] (ecmascript)");
;
const getProducts = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$API$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].get('/products');
    return res.data.products;
};
const getProductsByID = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$API$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API"].get(`/products/${id}`);
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project-in-TypeScript-Next.js/app/products/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$services$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/app/services/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const DetailPage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const goHome = ()=>{
        router.push('/');
    };
    const { data: product, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'product',
            id
        ],
        queryFn: {
            "DetailPage.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$services$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductsByID"])(Number(id))
        }["DetailPage.useQuery"]
    });
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        children: "Yuklanmoqda..."
    }, void 0, false, {
        fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/products/[id]/page.tsx",
        lineNumber: 25,
        columnNumber: 25
    }, ("TURBOPACK compile-time value", void 0));
    if (isError) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        children: "Xatolik yuz berdi"
    }, void 0, false, {
        fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/products/[id]/page.tsx",
        lineNumber: 26,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "w-full h-screen bg-gray-300 p-[40px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: goHome,
                    className: "w-[180px] h-[60px] bg-white rounded-[30px] text-gray-500 text-[22px] font-[600] ml-[200px]",
                    children: "Back"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/products/[id]/page.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[900px] mx-auto flex flex-col items-center bg-gray-400 rounded-[30px] p-[30px] shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: product?.thumbnail,
                            alt: product?.title,
                            className: "w-[500px] h-[500px] object-cover rounded-[20px]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/products/[id]/page.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-[36px] font-bold mt-[20px]",
                            children: product?.title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/products/[id]/page.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[20px] mt-[10px]",
                            children: product?.description
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/products/[id]/page.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[24px] mt-[15px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Brand:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/products/[id]/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                product?.brand
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/products/[id]/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/products/[id]/page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/products/[id]/page.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_s(DetailPage, "daYc8gr94x3dnOAodQ22lPvG4sY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = DetailPage;
const __TURBOPACK__default__export__ = DetailPage;
var _c;
__turbopack_context__.k.register(_c, "DetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Project-in-TypeScript-Next_js_app_901b2759._.js.map