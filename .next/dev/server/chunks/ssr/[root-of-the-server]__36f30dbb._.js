module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Desktop/Project-in-TypeScript-Next.js/app/API/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API",
    ()=>API
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
"use client";
;
const API = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "https://dummyjson.com"),
    headers: {
        "Content-Type": "application/json"
    }
});
}),
"[project]/Desktop/Project-in-TypeScript-Next.js/app/services/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProducts",
    ()=>getProducts,
    "getProductsByID",
    ()=>getProductsByID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$API$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/app/API/api.ts [app-ssr] (ecmascript)");
;
const getProducts = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$API$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API"].get('/products');
    return res.data.products;
};
const getProductsByID = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$API$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API"].get(`/products/${id}`);
    return response.data;
};
}),
"[project]/Desktop/Project-in-TypeScript-Next.js/app/assets/icons/eye-icon.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/eye-icon.69607c9b.png");}),
"[project]/Desktop/Project-in-TypeScript-Next.js/app/assets/icons/eye-icon.png.mjs { IMAGE => \"[project]/Desktop/Project-in-TypeScript-Next.js/app/assets/icons/eye-icon.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$assets$2f$icons$2f$eye$2d$icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/app/assets/icons/eye-icon.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$assets$2f$icons$2f$eye$2d$icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAWElEQVR42q1NwQmAMBArPioHXqHXukFdwG3s0w38i+Dm5kAKpc82EAhJSIwZhWm2dnPM2fGSoZN6JSWiPXh/RpFrjeEWaPWqgpoIH/BtCv9FwvyhbC668AHElglOYBZQigAAAABJRU5ErkJggg=="
};
}),
"[project]/Desktop/Project-in-TypeScript-Next.js/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$services$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/app/services/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$store$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/app/store/search.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$assets$2f$icons$2f$eye$2d$icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$assets$2f$icons$2f$eye$2d$icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/Project-in-TypeScript-Next.js/app/assets/icons/eye-icon.png.mjs { IMAGE => "[project]/Desktop/Project-in-TypeScript-Next.js/app/assets/icons/eye-icon.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project-in-TypeScript-Next.js/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const Home = ()=>{
    const { data: products, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'products'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$services$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProducts"]
    });
    const { search } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$store$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchStore"])();
    const filtredProduct = products?.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()));
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        children: "Yuklanmoqda..."
    }, void 0, false, {
        fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/page.tsx",
        lineNumber: 26,
        columnNumber: 25
    }, ("TURBOPACK compile-time value", void 0));
    if (isError) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        children: "Xatolik yuz berdi"
    }, void 0, false, {
        fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/page.tsx",
        lineNumber: 27,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "w-full bg-gray-400 pt-[30px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-[1600px] grid grid-cols-4 rounded-[20px] container mx-auto min-h-screen bg-gray-300 gap-[20px] p-[30px]",
                children: filtredProduct?.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shadow-lg h-[500px] group flex flex-col items-center rounded-[30px] relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-[300px] flex items-center justify-center bg-gray-400 rounded-[30px] shadow-lg relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out",
                                        src: item.thumbnail,
                                        alt: "Rasm"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/products/${item.id}`,
                                        className: "absolute top-[20px] right-[20px] w-[40px] h-[40px] bg-gray-300 rounded-[50%] flex items-center justify-center cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$assets$2f$icons$2f$eye$2d$icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$app$2f$assets$2f$icons$2f$eye$2d$icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "Rasm",
                                            width: 34,
                                            height: 34
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/page.tsx",
                                            lineNumber: 46,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/page.tsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-[32px] font-[700] text-white text-shadow-lg text-center truncate w-[200px]",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/page.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-[24px] font-[700] text-white text-shadow-lg text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500",
                                        children: "Rating:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    item.rating
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/page.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2d$in$2d$TypeScript$2d$Next$2e$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-[24px] font-[700] text-white cursor-pointer text-shadow-lg text-center bg-gray-500 w-[80%] h-[40px] absolute bottom-[20px] rounded-[20px]",
                                children: [
                                    item.price,
                                    "$"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/page.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, item.id, true, {
                        fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/page.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/page.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Project-in-TypeScript-Next.js/app/page.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = Home;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__36f30dbb._.js.map