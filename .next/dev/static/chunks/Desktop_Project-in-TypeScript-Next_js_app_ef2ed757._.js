(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Project-in-TypeScript-Next.js/app/store/cart.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCartStore",
    ()=>useCartStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
'use client';
;
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        cart: [],
        addToCart: (product)=>{
            const exists = get().cart.find((p)=>p.id === product.id);
            set({
                cart: exists ? get().cart.map((item)=>item.id === product.id ? {
                        ...item,
                        quantity: item.quantity + 1
                    } : item) : [
                    ...get().cart,
                    {
                        ...product,
                        quantity: 1
                    }
                ]
            });
        },
        removeFromCart: (id)=>{
            set({
                cart: get().cart.filter((item)=>item.id !== id)
            });
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project-in-TypeScript-Next.js/app/store/favorite.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFavoriteStore",
    ()=>useFavoriteStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
'use client';
;
const useFavoriteStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        favorites: [],
        toggleFavorite: (product)=>{
            const exists = get().favorites.some((p)=>p.id === product.id);
            set({
                favorites: exists ? get().favorites.filter((p)=>p.id !== product.id) : [
                    ...get().favorites,
                    product
                ]
            });
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project-in-TypeScript-Next.js/app/store/search.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSearchStore",
    ()=>useSearchStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
'use client';
;
const useSearchStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        search: '',
        setSearch: (value)=>set({
                search: value
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project-in-TypeScript-Next.js/app/components/Header/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$store$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/app/store/cart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$store$2f$favorite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/app/store/favorite.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$store$2f$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/app/store/search.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Header = ()=>{
    _s();
    const { favorites } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$store$2f$favorite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavoriteStore"])();
    const { cart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$store$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])();
    const { search, setSearch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$store$2f$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchStore"])();
    const favCount = favorites.length;
    const cartCount = cart.reduce((sum, item)=>sum + item.quantity, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full h-[100px] bg-gray-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "w-[1600px] h-[100px] container mx-auto flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-[36px] font-[700] text-white",
                    children: "AD Market"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/components/Header/header.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "border border-white w-[500px] h-[40px] rounded-[30px] shadow-sm p-[20px] text-white focus:outline-none shadow-white",
                        type: "text",
                        placeholder: "Search...",
                        value: search,
                        onChange: (e)=>setSearch(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/components/Header/header.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/components/Header/header.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-[20px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: favCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 rounded-full",
                                children: favCount
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/components/Header/header.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/components/Header/header.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -top-2 -right-3 bg-green-600 text-white text-xs px-2 rounded-full",
                                children: cartCount
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/components/Header/header.tsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/components/Header/header.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/components/Header/header.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/components/Header/header.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/components/Header/header.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "Cjf7QKir4clypGtTaGd4kxpYKo0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$store$2f$favorite$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavoriteStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$store$2f$cart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$store$2f$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchStore"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Project-in-TypeScript-Next.js/app/providers/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Providers({ children }) {
    _s();
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Providers.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
                defaultOptions: {
                    queries: {
                        staleTime: 1000 * 60 * 20,
                        refetchOnWindowFocus: false,
                        retry: 1
                    }
                }
            })
    }["Providers.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/providers/providers.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(Providers, "f2Q9fbK64eb1wM6bC3d/e0+Uuso=");
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Project-in-TypeScript-Next_js_app_ef2ed757._.js.map