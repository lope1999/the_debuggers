module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Downloads/the_debuggers/app/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function HomePage() {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("light");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(100);
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("crypto");
    const [fee, setFee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [net, setNet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const rates = {
        crypto: 0.005,
        giftcard: 0.01,
        fx: 0.003
    };
    const limits = {
        crypto: {
            min: 2,
            max: 2000
        },
        giftcard: {
            min: 5,
            max: 1000
        },
        fx: {
            min: 10,
            max: 10000
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        calculate();
    }, [
        amount,
        type
    ]);
    const calculate = ()=>{
        const amt = parseFloat(amount);
        if (isNaN(amt)) return;
        const { min, max } = limits[type];
        if (amt < min || amt > max) return;
        const feeVal = amt * rates[type];
        setFee(feeVal);
        setNet(amt - feeVal);
    };
    const toggleTheme = ()=>{
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-aadb213b6af5d3f3" + " " + `page ${theme}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-aadb213b6af5d3f3" + " " + "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "jsx-aadb213b6af5d3f3" + " " + "header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-aadb213b6af5d3f3" + " " + "logo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo.png",
                                    alt: "PaySwap Logo",
                                    width: 130,
                                    height: 40
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleTheme,
                                className: "jsx-aadb213b6af5d3f3" + " " + "toggle-btn",
                                children: theme === "light" ? "☀️" : "🌙"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-aadb213b6af5d3f3" + " " + "hero",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-aadb213b6af5d3f3" + " " + "hero-title",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-aadb213b6af5d3f3" + " " + "premium",
                                    children: "Transparent. Fast. Reliable. Swaps. Premium. Yours."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-aadb213b6af5d3f3" + " " + "hero-sub",
                                children: "Know your exact fee before you swap. Real-time calculator. Instant execution."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "jsx-aadb213b6af5d3f3" + " " + "btn-glow",
                                children: "Start Swapping"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-aadb213b6af5d3f3" + " " + "cards",
                        children: [
                            {
                                title: "Crypto Swap",
                                fee: "0.5%",
                                limit: "$2.00 – $2,000.00",
                                badge: "Instant"
                            },
                            {
                                title: "GiftCard Trade",
                                fee: "1.0%",
                                limit: "$5.00 – $1,000.00",
                                badge: "<10 mins"
                            },
                            {
                                title: "FX Exchange",
                                fee: "0.3%",
                                limit: "$10 – $10,000",
                                badge: "5–10 mins"
                            }
                        ].map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-aadb213b6af5d3f3" + " " + "fee-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-aadb213b6af5d3f3",
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-aadb213b6af5d3f3",
                                        children: [
                                            card.fee,
                                            " fee ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "jsx-aadb213b6af5d3f3"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                                lineNumber: 72,
                                                columnNumber: 32
                                            }, this),
                                            card.limit
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-aadb213b6af5d3f3" + " " + "badge",
                                        children: card.badge
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-aadb213b6af5d3f3" + " " + "calculator",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-aadb213b6af5d3f3",
                                children: "Estimate Your Swap"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-aadb213b6af5d3f3" + " " + "form",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-aadb213b6af5d3f3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "jsx-aadb213b6af5d3f3",
                                                children: "Amount (USD)"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: amount,
                                                onChange: (e)=>setAmount(e.target.value),
                                                className: "jsx-aadb213b6af5d3f3"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-aadb213b6af5d3f3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "jsx-aadb213b6af5d3f3",
                                                children: "Transaction Type"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: type,
                                                onChange: (e)=>setType(e.target.value),
                                                className: "jsx-aadb213b6af5d3f3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "crypto",
                                                        className: "jsx-aadb213b6af5d3f3",
                                                        children: "Crypto Swap (0.5%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                                        lineNumber: 95,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "giftcard",
                                                        className: "jsx-aadb213b6af5d3f3",
                                                        children: "GiftCard Trade (1.0%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                                        lineNumber: 96,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "fx",
                                                        className: "jsx-aadb213b6af5d3f3",
                                                        children: "FX Exchange (0.3%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                                        lineNumber: 97,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-aadb213b6af5d3f3" + " " + "result",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-aadb213b6af5d3f3",
                                        children: [
                                            "Estimated Fee: $",
                                            fee.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-aadb213b6af5d3f3",
                                        children: [
                                            "You’ll Receive: $",
                                            net.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "jsx-aadb213b6af5d3f3" + " " + "btn-glow wide",
                                children: "Swap Now"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "jsx-aadb213b6af5d3f3" + " " + "footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-aadb213b6af5d3f3",
                                children: "© 2025 PaySwap. Trusted by 50,000+ users."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-aadb213b6af5d3f3" + " " + "links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "jsx-aadb213b6af5d3f3",
                                        children: "Privacy"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    " • ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "jsx-aadb213b6af5d3f3",
                                        children: "Terms"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                        lineNumber: 114,
                                        columnNumber: 39
                                    }, this),
                                    " • ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "jsx-aadb213b6af5d3f3",
                                        children: "Support"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                        lineNumber: 114,
                                        columnNumber: 63
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "aadb213b6af5d3f3",
                children: ".page.jsx-aadb213b6af5d3f3{min-height:100vh;font-family:Inter,sans-serif;transition:all .4s}.page.dark.jsx-aadb213b6af5d3f3{color:#fff;background:radial-gradient(circle at top,#1a1f3c,#0d111f)}.page.light.jsx-aadb213b6af5d3f3{color:#111;background:linear-gradient(to bottom right,#f9fafb,#e5e7eb)}.container.jsx-aadb213b6af5d3f3{text-align:center;max-width:960px;margin:0 auto;padding:2rem 1rem}.header.jsx-aadb213b6af5d3f3{justify-content:space-between;align-items:center;display:flex}.brand.jsx-aadb213b6af5d3f3{color:#3b82f6;font-size:1.4rem;font-weight:700}.toggle-btn.jsx-aadb213b6af5d3f3{cursor:pointer;background:0 0;border:none;font-size:1.4rem;transition:transform .3s}.toggle-btn.jsx-aadb213b6af5d3f3:hover{transform:scale(1.2)}.hero.jsx-aadb213b6af5d3f3{margin-top:3rem}.hero-title.jsx-aadb213b6af5d3f3{margin-bottom:.5rem;font-size:2.8rem;font-weight:800}.premium.jsx-aadb213b6af5d3f3{-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#60a5fa,#facc15);-webkit-background-clip:text}.hero-sub.jsx-aadb213b6af5d3f3{opacity:.9;margin-bottom:1.5rem;font-size:1.1rem}.btn-glow.jsx-aadb213b6af5d3f3{color:#111;cursor:pointer;background:linear-gradient(90deg,#facc15,#fbbf24);border:none;border-radius:50px;padding:.9rem 2.2rem;font-size:1.1rem;font-weight:700;transition:transform .3s,box-shadow .3s;box-shadow:0 0 25px #fbbf2499}.btn-glow.jsx-aadb213b6af5d3f3:hover{transform:translateY(-3px);box-shadow:0 0 40px #facc15cc}.cards.jsx-aadb213b6af5d3f3{grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5rem;margin:3rem 0;display:grid}.fee-card.jsx-aadb213b6af5d3f3{border-radius:14px;padding:1.5rem;transition:background .3s}.page.dark.jsx-aadb213b6af5d3f3 .fee-card.jsx-aadb213b6af5d3f3{color:#fff;background:#111827d9;border:1px solid #3b82f633}.page.light.jsx-aadb213b6af5d3f3 .fee-card.jsx-aadb213b6af5d3f3{color:#111;background:#fff;border:1px solid #e5e7eb}.badge.jsx-aadb213b6af5d3f3{color:#fff;background:#2563eb;border-radius:8px;margin-top:.5rem;padding:.25rem .75rem;font-size:.85rem;display:inline-block}.calculator.jsx-aadb213b6af5d3f3{border-radius:16px;padding:2rem;transition:background .3s}.page.dark.jsx-aadb213b6af5d3f3 .calculator.jsx-aadb213b6af5d3f3{background:#111827e6;box-shadow:0 0 30px #0006}.page.light.jsx-aadb213b6af5d3f3 .calculator.jsx-aadb213b6af5d3f3{background:#fff;box-shadow:0 0 15px #0000001a}input.jsx-aadb213b6af5d3f3,select.jsx-aadb213b6af5d3f3{color:#fff;background:#111827;border:none;border-radius:10px;width:100%;margin-top:.4rem;padding:.8rem}.page.light.jsx-aadb213b6af5d3f3 input.jsx-aadb213b6af5d3f3,.page.light.jsx-aadb213b6af5d3f3 select.jsx-aadb213b6af5d3f3{color:#111;background:#f3f4f6}.result.jsx-aadb213b6af5d3f3{color:#111;background:linear-gradient(90deg,#0ea5e9,#facc15);border-radius:12px;margin-top:1.5rem;padding:1.2rem;font-size:1.05rem;font-weight:700}.wide.jsx-aadb213b6af5d3f3{width:100%;margin-top:1.5rem}.footer.jsx-aadb213b6af5d3f3{opacity:.8;margin-top:3rem;font-size:.9rem}.links.jsx-aadb213b6af5d3f3 a.jsx-aadb213b6af5d3f3{color:#3b82f6;text-decoration:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3aadabc8._.js.map