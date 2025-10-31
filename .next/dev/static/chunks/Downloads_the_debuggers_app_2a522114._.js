(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/the_debuggers/app/services/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getExchangeRate",
    ()=>getExchangeRate,
    "getFees",
    ()=>getFees
]);
const BASE_URL = 'https://2kbbumlxz3.execute-api.us-east-1.amazonaws.com/default';
async function getFees() {
    try {
        const response = await fetch(`${BASE_URL}/fee`);
        if (!response.ok) {
            throw new Error('Failed to fetch fees');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching fees:', error);
        throw error;
    }
}
async function getExchangeRate(from = 'USD', to = 'NGN') {
    try {
        const response = await fetch(`${BASE_URL}/exchange?from=${from}&to=${to}`);
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rate');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/the_debuggers/app/utils/feeCalculations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Helper function to parse fee amount from string
__turbopack_context__.s([
    "calculateFee",
    ()=>calculateFee,
    "getServiceFromFees",
    ()=>getServiceFromFees,
    "isFeePercentage",
    ()=>isFeePercentage,
    "parseFeeAmount",
    ()=>parseFeeAmount
]);
const parseFeeAmount = (feeString)=>{
    if (!feeString || feeString === 'FREE') return 0;
    // Extract numeric value from fee string (e.g., "$1", "₦200", "1.5%")
    const match = feeString.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
};
const isFeePercentage = (feeString)=>{
    return feeString && feeString.includes('%');
};
const calculateFee = (amount, feeString)=>{
    try {
        const numAmount = parseFloat(amount);
        if (!feeString || feeString === 'FREE' || isNaN(numAmount) || numAmount <= 0) {
            return 0;
        }
        let feeVal = 0;
        if (isFeePercentage(feeString)) {
            // Handle percentage fees like "1.5%" or "1.5% ($1 – $5)" or "2% ($1–$2)"
            const percentage = parseFeeAmount(feeString) / 100;
            feeVal = numAmount * percentage;
            // Check for min/max caps in the fee string
            const minMaxMatch = feeString.match(/\$(\d+(?:\.\d+)?)\s*[–-]\s*\$(\d+(?:\.\d+)?)/);
            if (minMaxMatch) {
                const minFee = parseFloat(minMaxMatch[1]);
                const maxFee = parseFloat(minMaxMatch[2]);
                if (!isNaN(minFee) && !isNaN(maxFee)) {
                    feeVal = Math.max(minFee, Math.min(feeVal, maxFee));
                }
            }
        } else {
            // Handle fixed fees like "$1", "$0.50", "₦200"
            feeVal = parseFeeAmount(feeString);
        }
        return isNaN(feeVal) ? 0 : feeVal;
    } catch (error) {
        console.error('Error calculating fee:', error);
        return 0;
    }
};
const getServiceFromFees = (fees, userType, category, serviceName)=>{
    if (!fees || !userType || !category || !serviceName) return null;
    const categoryServices = fees[userType]?.[category];
    if (!categoryServices || !Array.isArray(categoryServices)) return null;
    return categoryServices.find((service)=>service.Service === serviceName);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/the_debuggers/app/components/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Header({ theme, toggleTheme }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex justify-between items-center mb-16 animate-fadeIn",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: theme === "dark" ? "/dark-logo.png" : "/logo.png",
                    alt: "The Debuggers Logo",
                    className: "h-full w-auto"
                }, void 0, false, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/Header.jsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/Header.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleTheme,
                className: `p-3 rounded-2xl backdrop-blur-lg transition-all duration-300 hover:scale-110 ${theme === "dark" ? "bg-white/10 text-yellow-300 hover:bg-white/20" : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"}`,
                children: theme === "light" ? "🌙" : "☀️"
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/Header.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/the_debuggers/app/components/Header.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/the_debuggers/app/components/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
;
;
function Hero({ theme }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "text-center mb-20 animate-fadeIn",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm mb-6 animate-pulse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                        className: "w-4 h-4 text-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Hero.jsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-sm font-semibold ${theme === "dark" ? "text-blue-200" : "text-blue-700"}`,
                        children: "Trusted by 50,000+ users"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Hero.jsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/components/Hero.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: `text-6xl md:text-7xl font-black mb-6 leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-gradient-to-r from-blue-400 via-cyan-400 to-yellow-400 text-transparent bg-clip-text animate-gradient",
                        children: "Transparent"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Hero.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Hero.jsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    "Lightning-Fast Swaps"
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/components/Hero.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-xl md:text-2xl mb-8 max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`,
                children: "Know your exact fee before you swap. Real-time calculator. Instant execution."
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/Hero.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-full text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1",
                children: [
                    "Start Swapping",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Hero.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Hero.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/components/Hero.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/the_debuggers/app/components/Hero.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeft$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-client] (ecmascript) <export default as ArrowRightLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
;
;
function ServiceCategories({ fees, theme, userType, setUserType }) {
    if (!fees) return null;
    const getIconForCategory = (categoryName)=>{
        const icons = {
            'Freedom Virtual Card': __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
            'US Virtual Bank Account': __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
            'NG Virtual Bank Account': __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
            'Payout': __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
            'Business Payout': __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
            'Wallet to Wallet Transfer': __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeft$3e$__["ArrowRightLeft"],
            'FX': __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            'Business Collections': __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
        };
        return icons[categoryName] || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"];
    };
    const getColorForCategory = (index)=>{
        const colors = [
            "from-blue-500 to-blue-600",
            "from-purple-500 to-purple-600",
            "from-green-500 to-green-600",
            "from-yellow-500 to-yellow-600",
            "from-red-500 to-red-600",
            "from-cyan-500 to-cyan-600",
            "from-pink-500 to-pink-600",
            "from-indigo-500 to-indigo-600"
        ];
        return colors[index % colors.length];
    };
    const currentData = fees[userType] || {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `text-4xl font-black mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                        children: "Choose Your Account Type"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex p-2 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setUserType('Customer'),
                                className: `px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${userType === 'Customer' ? 'bg-blue-500 text-white shadow-lg' : theme === "dark" ? 'text-blue-200 hover:text-white' : 'text-blue-700 hover:text-blue-900'}`,
                                children: "Customer"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setUserType('Business'),
                                className: `px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${userType === 'Business' ? 'bg-blue-500 text-white shadow-lg' : theme === "dark" ? 'text-blue-200 hover:text-white' : 'text-blue-700 hover:text-blue-900'}`,
                                children: "Business"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                children: Object.entries(currentData).map(([categoryName, services], categoryIndex)=>{
                    const IconComponent = getIconForCategory(categoryName);
                    const color = getColorForCategory(categoryIndex);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `group relative p-6 rounded-3xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer animate-fadeIn ${theme === "dark" ? "bg-gray-800/40 hover:bg-gray-800/60 border border-blue-500/20" : "bg-white/60 hover:bg-white/80 border border-gray-200 shadow-lg"}`,
                        style: {
                            animationDelay: `${categoryIndex * 100}ms`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `inline-flex p-3 rounded-2xl bg-gradient-to-br ${color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `text-lg font-bold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                                children: categoryName
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    services.slice(0, 3).map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate",
                                                        children: service.Service
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                                                        lineNumber: 105,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-semibold ml-2 ${service.Fee === 'FREE' ? 'text-green-500' : 'text-blue-500'}`,
                                                        children: service.Fee
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                                                        lineNumber: 106,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                                                lineNumber: 104,
                                                columnNumber: 21
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this)),
                                    services.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`,
                                        children: [
                                            "+",
                                            services.length - 3,
                                            " more services"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 rounded-3xl bg-gradient-to-br ${color.replace('to-', 'to-')} opacity-0 group-hover:opacity-10 transition-opacity blur-xl -z-10`
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this)
                        ]
                    }, categoryName, true, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                        lineNumber: 80,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = ServiceCategories;
var _c;
__turbopack_context__.k.register(_c, "ServiceCategories");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/the_debuggers/app/components/ShareCalculation.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShareCalculation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function ShareCalculation({ theme, amount, fee, net, currency, service, category }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!service) return null;
    const formatCurrency = (value)=>{
        const symbol = currency === 'NGN' ? '₦' : '$';
        return `${symbol}${parseFloat(value).toFixed(2)}`;
    };
    const generateShareText = ()=>{
        return `💰 Fee Calculation

Service: ${service}
Category: ${category}

Amount: ${formatCurrency(amount)}
Fee: ${formatCurrency(fee)}
You Receive: ${formatCurrency(net)}

Calculated using PaySwap Fee Calculator
${window.location.href}

#vitalswaphackathon2025 #theDebuggers`;
    };
    const copyToClipboard = async ()=>{
        try {
            await navigator.clipboard.writeText(generateShareText());
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    };
    const shareNative = async ()=>{
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Fee Calculation',
                    text: generateShareText()
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            copyToClipboard();
        }
    };
    const downloadAsImage = ()=>{
        // Create a simple text-based receipt
        const canvas = document.createElement('canvas');
        canvas.width = 600;
        canvas.height = 700;
        const ctx = canvas.getContext('2d');
        // Background
        const gradient = ctx.createLinearGradient(0, 0, 600, 700);
        gradient.addColorStop(0, theme === 'dark' ? '#1e293b' : '#f8fafc');
        gradient.addColorStop(1, theme === 'dark' ? '#0f172a' : '#e2e8f0');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 600, 700);
        // Header
        ctx.fillStyle = theme === 'dark' ? '#ffffff' : '#1e293b';
        ctx.font = 'bold 32px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Fee Calculation', 300, 80);
        ctx.font = '18px Inter, system-ui, sans-serif';
        ctx.fillStyle = theme === 'dark' ? '#94a3b8' : '#64748b';
        ctx.fillText(new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }), 300, 115);
        // Divider
        ctx.strokeStyle = theme === 'dark' ? '#334155' : '#cbd5e1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(50, 145);
        ctx.lineTo(550, 145);
        ctx.stroke();
        // Service Info
        ctx.font = 'bold 24px Inter, system-ui, sans-serif';
        ctx.fillStyle = theme === 'dark' ? '#ffffff' : '#1e293b';
        ctx.textAlign = 'left';
        ctx.fillText('Service Details', 50, 200);
        ctx.font = '18px Inter, system-ui, sans-serif';
        ctx.fillStyle = theme === 'dark' ? '#94a3b8' : '#64748b';
        ctx.fillText(`Service: ${service}`, 50, 240);
        ctx.fillText(`Category: ${category}`, 50, 275);
        // Amounts Box
        const boxY = 330;
        ctx.fillStyle = theme === 'dark' ? '#1e3a8a' : '#dbeafe';
        ctx.fillRect(50, boxY, 500, 280);
        ctx.fillStyle = theme === 'dark' ? '#ffffff' : '#1e293b';
        // Amount
        ctx.font = '18px Inter, system-ui, sans-serif';
        ctx.fillText('Amount', 80, boxY + 50);
        ctx.font = 'bold 28px Inter, system-ui, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(formatCurrency(amount), 520, boxY + 50);
        // Fee
        ctx.textAlign = 'left';
        ctx.font = '18px Inter, system-ui, sans-serif';
        ctx.fillText('Fee', 80, boxY + 120);
        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 28px Inter, system-ui, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(formatCurrency(fee), 520, boxY + 120);
        // Divider in box
        ctx.strokeStyle = theme === 'dark' ? '#3b82f6' : '#93c5fd';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(80, boxY + 160);
        ctx.lineTo(520, boxY + 160);
        ctx.stroke();
        // You Receive
        ctx.textAlign = 'left';
        ctx.fillStyle = theme === 'dark' ? '#ffffff' : '#1e293b';
        ctx.font = 'bold 24px Inter, system-ui, sans-serif';
        ctx.fillText('You Receive', 80, boxY + 210);
        ctx.fillStyle = '#22c55e';
        ctx.font = 'bold 36px Inter, system-ui, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(formatCurrency(net), 520, boxY + 210);
        // Footer
        ctx.fillStyle = theme === 'dark' ? '#64748b' : '#94a3b8';
        ctx.font = '16px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('PaySwap Fee Calculator - The Debuggers', 300, 660);
        // Download
        canvas.toBlob((blob)=>{
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `fee-calculation-${Date.now()}.png`;
            a.click();
            URL.revokeObjectURL(url);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-3 justify-center mt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: shareNative,
                className: `inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${theme === "dark" ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30" : "bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-200"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/ShareCalculation.jsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    "Share"
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/components/ShareCalculation.jsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: copyToClipboard,
                className: `inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${theme === "dark" ? "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border border-purple-500/30" : "bg-purple-100 text-purple-700 hover:bg-purple-200 border border-purple-200"}`,
                children: [
                    copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/ShareCalculation.jsx",
                        lineNumber: 192,
                        columnNumber: 19
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/ShareCalculation.jsx",
                        lineNumber: 192,
                        columnNumber: 51
                    }, this),
                    copied ? 'Copied!' : 'Copy'
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/components/ShareCalculation.jsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: downloadAsImage,
                className: `inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${theme === "dark" ? "bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30" : "bg-green-100 text-green-700 hover:bg-green-200 border border-green-200"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/ShareCalculation.jsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    "Download Image"
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/components/ShareCalculation.jsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/the_debuggers/app/components/ShareCalculation.jsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_s(ShareCalculation, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = ShareCalculation;
var _c;
__turbopack_context__.k.register(_c, "ShareCalculation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/the_debuggers/app/components/Calculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Calculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$ShareCalculation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/app/components/ShareCalculation.jsx [app-client] (ecmascript)");
;
;
;
function Calculator({ theme, fees, exchangeRate, userType, amount, setAmount, selectedCategory, setSelectedCategory, selectedService, setSelectedService, fee, net, currency, setCurrency }) {
    if (!fees) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: `relative p-10 rounded-3xl backdrop-blur-2xl mb-16 animate-fadeIn ${theme === "dark" ? "bg-gray-800/40 border border-blue-500/20" : "bg-white/60 border border-gray-200 shadow-2xl"}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-8 rounded mb-4 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`
                        }, void 0, false, {
                            fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-4 rounded mb-2 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`
                        }, void 0, false, {
                            fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-4 rounded w-3/4 mx-auto ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`
                        }, void 0, false, {
                            fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
            lineNumber: 22,
            columnNumber: 7
        }, this);
    }
    const currentData = fees[userType] || {};
    const categories = Object.keys(currentData);
    const services = selectedCategory ? currentData[selectedCategory] || [] : [];
    const getExchangeRateDisplay = ()=>{
        if (!exchangeRate) return "";
        return `1 ${exchangeRate.from} = ${exchangeRate.rate} ${exchangeRate.to}`;
    };
    const formatAmount = (amount, curr)=>{
        const numAmount = parseFloat(amount) || 0;
        if (curr === 'NGN') {
            return `₦${numAmount.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}`;
        }
        return `$${numAmount.toFixed(2)}`;
    };
    const safeAmount = parseFloat(amount) || 0;
    const safeFee = parseFloat(fee) || 0;
    const safeNet = parseFloat(net) || 0;
    const safeRate = parseFloat(exchangeRate?.rate) || 1;
    const convertedAmount = currency === 'NGN' && exchangeRate ? safeAmount * safeRate : safeAmount;
    const convertedFee = currency === 'NGN' && exchangeRate ? safeFee * safeRate : safeFee;
    const convertedNet = currency === 'NGN' && exchangeRate ? safeNet * safeRate : safeNet;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `relative p-10 rounded-3xl backdrop-blur-2xl mb-16 animate-fadeIn ${theme === "dark" ? "bg-gray-800/40 border border-blue-500/20" : "bg-white/60 border border-gray-200 shadow-2xl"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-6 left-1/2 -translate-x-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-sm shadow-lg",
                    children: "⚡ Live Calculator"
                }, void 0, false, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: `text-4xl font-black mb-2 text-center mt-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                children: "Calculate Your Fees"
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            exchangeRate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-center mb-8 ${theme === "dark" ? "text-blue-200" : "text-blue-600"}`,
                children: [
                    "Current Rate: ",
                    getExchangeRateDisplay()
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                lineNumber: 89,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `block text-sm font-bold mb-3 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`,
                                children: "Amount"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: amount,
                                onChange: (e)=>{
                                    const value = e.target.value;
                                    // Allow empty input or valid positive numbers
                                    if (value === '' || !isNaN(parseFloat(value)) && parseFloat(value) >= 0) {
                                        setAmount(value);
                                    }
                                },
                                placeholder: "Enter amount",
                                min: "0",
                                step: "0.01",
                                className: `w-full px-4 py-3 rounded-xl border-2 text-lg font-semibold transition-all duration-300 focus:scale-105 focus:shadow-lg outline-none ${theme === "dark" ? "bg-gray-900/50 border-blue-500/30 text-white focus:border-blue-500 placeholder-gray-500" : "bg-white border-blue-200 text-gray-900 focus:border-blue-500 placeholder-gray-400"}`
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `block text-sm font-bold mb-3 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`,
                                children: "Currency"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: currency,
                                onChange: (e)=>setCurrency(e.target.value),
                                className: `w-full px-4 py-3 rounded-xl border-2 text-lg font-semibold transition-all duration-300 focus:scale-105 focus:shadow-lg outline-none cursor-pointer ${theme === "dark" ? "bg-gray-900/50 border-blue-500/30 text-white focus:border-blue-500" : "bg-white border-blue-200 text-gray-900 focus:border-blue-500"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "USD",
                                        children: "USD ($)"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "NGN",
                                        children: "NGN (₦)"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `block text-sm font-bold mb-3 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`,
                                children: "Service Category"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedCategory,
                                onChange: (e)=>{
                                    setSelectedCategory(e.target.value);
                                    setSelectedService('');
                                },
                                className: `w-full px-4 py-3 rounded-xl border-2 text-lg font-semibold transition-all duration-300 focus:scale-105 focus:shadow-lg outline-none cursor-pointer ${theme === "dark" ? "bg-gray-900/50 border-blue-500/30 text-white focus:border-blue-500" : "bg-white border-blue-200 text-gray-900 focus:border-blue-500"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select Category"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: category,
                                            children: category
                                        }, category, false, {
                                            fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `block text-sm font-bold mb-3 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`,
                                children: "Service"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedService,
                                onChange: (e)=>setSelectedService(e.target.value),
                                disabled: !selectedCategory,
                                className: `w-full px-4 py-3 rounded-xl border-2 text-lg font-semibold transition-all duration-300 focus:scale-105 focus:shadow-lg outline-none cursor-pointer ${theme === "dark" ? "bg-gray-900/50 border-blue-500/30 text-white focus:border-blue-500" : "bg-white border-blue-200 text-gray-900 focus:border-blue-500"} ${!selectedCategory ? 'opacity-50 cursor-not-allowed' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select Service"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: service.Service,
                                            children: [
                                                service.Service,
                                                " (",
                                                service.Fee,
                                                ")"
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            selectedService && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative p-8 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-yellow-400 text-white overflow-hidden mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/20"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative grid md:grid-cols-3 gap-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold opacity-90 mb-2",
                                                children: "Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-black",
                                                children: formatAmount(convertedAmount, currency)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold opacity-90 mb-2",
                                                children: "Fee"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-black",
                                                children: formatAmount(convertedFee, currency)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold opacity-90 mb-2",
                                                children: "You'll Receive"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-black",
                                                children: formatAmount(convertedNet, currency)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$ShareCalculation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        theme: theme,
                        amount: convertedAmount,
                        fee: convertedFee,
                        net: convertedNet,
                        currency: currency,
                        service: selectedService,
                        category: selectedCategory
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "group relative w-full px-8 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-full text-xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105",
                disabled: !selectedService,
                onClick: ()=>{
                    if (selectedService && window.addToFeeHistory) {
                        window.addToFeeHistory({
                            service: selectedService,
                            category: selectedCategory,
                            userType,
                            amount: safeAmount,
                            fee: safeFee,
                            net: safeNet,
                            currency
                        });
                    }
                },
                children: [
                    selectedService ? 'Process Transaction' : 'Select a Service',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "inline-block ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
                lineNumber: 229,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/the_debuggers/app/components/Calculator.jsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_c = Calculator;
var _c;
__turbopack_context__.k.register(_c, "Calculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/the_debuggers/app/components/LoadingError.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
;
;
function LoadingError({ loading, error, theme, onRetry }) {
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center p-12 animate-fadeIn",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-block p-6 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                className: "w-12 h-12 text-blue-500 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                                lineNumber: 9,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                            lineNumber: 8,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-full bg-blue-500/10 animate-ping"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: `text-2xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                    children: "Loading Your Data"
                }, void 0, false, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`,
                    children: "Fetching fees and exchange rates..."
                }, void 0, false, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 bg-blue-500 rounded-full animate-bounce"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 bg-blue-500 rounded-full animate-bounce",
                                style: {
                                    animationDelay: '0.1s'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 bg-blue-500 rounded-full animate-bounce",
                                style: {
                                    animationDelay: '0.2s'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
            lineNumber: 6,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center p-12 animate-fadeIn",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-block p-6 rounded-full bg-red-500/20 mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "w-12 h-12 text-red-500"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold text-red-500 mb-3",
                    children: "Oops! Something went wrong"
                }, void 0, false, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-lg mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`,
                    children: error || "We're having trouble loading the data. Please try again."
                }, void 0, false, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                onRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onRetry,
                    className: "inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        "Try Again"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/the_debuggers/app/components/LoadingError.jsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return null;
}
_c = LoadingError;
var _c;
__turbopack_context__.k.register(_c, "LoadingError");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/the_debuggers/app/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer({ theme }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: `text-center py-8 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-4 font-semibold",
                children: "© 2025 The Debuggers. Secured & Trusted."
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/Footer.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-6 text-sm font-medium",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "hover:text-blue-400 transition-colors",
                        children: "Privacy"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Footer.jsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "•"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Footer.jsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "hover:text-blue-400 transition-colors",
                        children: "Terms"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Footer.jsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "•"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Footer.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "hover:text-blue-400 transition-colors",
                        children: "Support"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/Footer.jsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/components/Footer.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/the_debuggers/app/components/Footer.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeeComparison
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$utils$2f$feeCalculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/app/utils/feeCalculations.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function FeeComparison({ fees, theme, userType, amount, currency, exchangeRate }) {
    _s();
    const [selectedServices, setSelectedServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!fees || !amount || amount <= 0) return null;
    const currentData = fees[userType] || {};
    const allServices = [];
    // Flatten all services with their categories
    Object.entries(currentData).forEach(([category, services])=>{
        services.forEach((service)=>{
            allServices.push({
                ...service,
                category,
                id: `${category}-${service.Service}`
            });
        });
    });
    const toggleService = (serviceId)=>{
        setSelectedServices((prev)=>{
            if (prev.includes(serviceId)) {
                return prev.filter((id)=>id !== serviceId);
            }
            if (prev.length >= 4) {
                return [
                    ...prev.slice(1),
                    serviceId
                ]; // Keep only last 4
            }
            return [
                ...prev,
                serviceId
            ];
        });
    };
    const compareServices = allServices.filter((s)=>selectedServices.includes(s.id));
    const amt = parseFloat(amount) || 0;
    const rate = parseFloat(exchangeRate?.rate) || 1;
    const displayAmount = currency === 'NGN' ? amt * rate : amt;
    // Calculate fees for comparison
    const comparisonData = compareServices.map((service)=>{
        const feeAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$utils$2f$feeCalculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateFee"])(amt, service.Fee);
        const netAmount = amt - feeAmount;
        const displayFee = currency === 'NGN' ? feeAmount * rate : feeAmount;
        const displayNet = currency === 'NGN' ? netAmount * rate : netAmount;
        return {
            ...service,
            feeAmount: displayFee,
            netAmount: displayNet,
            percentage: amt > 0 ? (feeAmount / amt * 100).toFixed(2) : 0
        };
    });
    // Find best option (lowest fee)
    const bestOption = comparisonData.length > 0 ? comparisonData.reduce((best, current)=>current.feeAmount < best.feeAmount ? current : best) : null;
    const formatCurrency = (value)=>{
        const symbol = currency === 'NGN' ? '₦' : '$';
        return `${symbol}${value.toFixed(2)}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `relative p-10 rounded-3xl backdrop-blur-2xl mb-16 animate-fadeIn ${theme === "dark" ? "bg-gray-800/40 border border-purple-500/20" : "bg-white/60 border border-gray-200 shadow-2xl"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-6 left-1/2 -translate-x-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm shadow-lg",
                    children: "🔄 Compare Services"
                }, void 0, false, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: `text-4xl font-black mb-2 text-center mt-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                children: "Fee Comparison Tool"
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-center mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`,
                children: "Compare fees across different services to find the best option"
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(!isOpen),
                        className: `w-full px-6 py-4 rounded-xl border-2 font-semibold flex items-center justify-between transition-all ${theme === "dark" ? "bg-gray-900/50 border-purple-500/30 text-white hover:border-purple-500" : "bg-white border-purple-200 text-gray-900 hover:border-purple-500"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: selectedServices.length === 0 ? "Select services to compare (up to 4)" : `${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''} selected`
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: `w-5 h-5 transition-transform ${isOpen ? 'rotate-90' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-4 p-4 rounded-xl border-2 max-h-64 overflow-y-auto ${theme === "dark" ? "bg-gray-900/50 border-purple-500/20" : "bg-white border-purple-200"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-3",
                            children: allServices.slice(0, 20).map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleService(service.id),
                                    className: `p-3 rounded-lg text-left transition-all ${selectedServices.includes(service.id) ? theme === "dark" ? "bg-purple-500/20 border-2 border-purple-500" : "bg-purple-50 border-2 border-purple-500" : theme === "dark" ? "bg-gray-800/50 border-2 border-transparent hover:border-purple-500/30" : "bg-gray-50 border-2 border-transparent hover:border-purple-200"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `font-semibold text-sm mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                                            children: service.Service
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`,
                                            children: [
                                                service.category,
                                                " • ",
                                                service.Fee
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, service.id, true, {
                                    fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                    lineNumber: 119,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            comparisonData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: `border-b-2 ${theme === "dark" ? "border-purple-500/20" : "border-purple-200"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: `text-left p-4 font-bold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`,
                                            children: "Service"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: `text-right p-4 font-bold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`,
                                            children: "Fee"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: `text-right p-4 font-bold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`,
                                            children: "Fee %"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: `text-right p-4 font-bold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`,
                                            children: "You Receive"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: comparisonData.map((service, index)=>{
                                    const isBest = bestOption && service.id === bestOption.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: `border-b transition-colors ${theme === "dark" ? "border-gray-700 hover:bg-purple-500/10" : "border-gray-200 hover:bg-purple-50"} ${isBest ? 'bg-green-500/10' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        isBest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            className: "w-5 h-5 text-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                                            lineNumber: 193,
                                                            columnNumber: 36
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                                                                    children: service.Service
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                                                    lineNumber: 195,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`,
                                                                    children: service.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                                                    lineNumber: 200,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                                            lineNumber: 194,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                                    lineNumber: 192,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `text-right p-4 font-semibold ${theme === "dark" ? "text-red-400" : "text-red-600"}`,
                                                children: formatCurrency(service.feeAmount)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                                lineNumber: 208,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `text-right p-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`,
                                                children: [
                                                    service.percentage,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `text-right p-4 font-bold ${theme === "dark" ? "text-green-400" : "text-green-600"}`,
                                                children: formatCurrency(service.netAmount)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                                lineNumber: 218,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, service.id, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                        lineNumber: 183,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this),
                    comparisonData.length > 1 && bestOption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-6 p-6 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 ${theme === "dark" ? "border-green-500/30" : "border-green-300"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                        className: "w-6 h-6 text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                                        children: "Best Option Identified"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                lineNumber: 234,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-green-500",
                                        children: bestOption.Service
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                        lineNumber: 245,
                                        columnNumber: 17
                                    }, this),
                                    " offers the lowest fee at",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: formatCurrency(bestOption.feeAmount)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                        lineNumber: 246,
                                        columnNumber: 17
                                    }, this),
                                    " (",
                                    bestOption.percentage,
                                    "%)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                lineNumber: 242,
                                columnNumber: 15
                            }, this),
                            comparisonData.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mt-2 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`,
                                children: [
                                    "You could save up to",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-green-500",
                                        children: formatCurrency(Math.max(...comparisonData.map((s)=>s.feeAmount)) - bestOption.feeAmount)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                        lineNumber: 253,
                                        columnNumber: 19
                                    }, this),
                                    ' ',
                                    "by choosing this service"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                                lineNumber: 249,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                        lineNumber: 231,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                lineNumber: 151,
                columnNumber: 9
            }, this),
            comparisonData.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-center py-12 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg",
                    children: "Select services above to start comparing fees"
                }, void 0, false, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                    lineNumber: 268,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
                lineNumber: 265,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(FeeComparison, "9p9CYECyLlkjJrHQzx3bJJNlGUM=");
_c = FeeComparison;
var _c;
__turbopack_context__.k.register(_c, "FeeComparison");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransactionHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
;
var _s = __turbopack_context__.k.signature();
;
;
function TransactionHistory({ theme, currency }) {
    _s();
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransactionHistory.useEffect": ()=>{
            // Load history from localStorage
            const savedHistory = localStorage.getItem('feeCalculatorHistory');
            if (savedHistory) {
                try {
                    setHistory(JSON.parse(savedHistory));
                } catch (error) {
                    console.error('Error loading history:', error);
                }
            }
        }
    }["TransactionHistory.useEffect"], []);
    const addToHistory = (calculation)=>{
        const newEntry = {
            ...calculation,
            timestamp: new Date().toISOString(),
            id: Date.now()
        };
        const updatedHistory = [
            newEntry,
            ...history
        ].slice(0, 10); // Keep last 10
        setHistory(updatedHistory);
        localStorage.setItem('feeCalculatorHistory', JSON.stringify(updatedHistory));
    };
    const clearHistory = ()=>{
        setHistory([]);
        localStorage.removeItem('feeCalculatorHistory');
    };
    const formatCurrency = (value, curr)=>{
        const symbol = curr === 'NGN' ? '₦' : '$';
        return `${symbol}${parseFloat(value).toFixed(2)}`;
    };
    const formatDate = (timestamp)=>{
        const date = new Date(timestamp);
        const today = new Date();
        const isToday = date.toDateString() === today.toDateString();
        if (isToday) {
            return `Today at ${date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            })}`;
        }
        return date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };
    const exportHistory = ()=>{
        const data = history.map((item)=>({
                Date: formatDate(item.timestamp),
                Service: item.service,
                Category: item.category,
                Amount: formatCurrency(item.amount, item.currency),
                Fee: formatCurrency(item.fee, item.currency),
                Net: formatCurrency(item.net, item.currency),
                Currency: item.currency
            }));
        const csv = [
            Object.keys(data[0]).join(','),
            ...data.map((row)=>Object.values(row).join(','))
        ].join('\n');
        const blob = new Blob([
            csv
        ], {
            type: 'text/csv'
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `fee-calculations-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    };
    // Expose addToHistory function globally
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransactionHistory.useEffect": ()=>{
            window.addToFeeHistory = addToHistory;
            return ({
                "TransactionHistory.useEffect": ()=>{
                    delete window.addToFeeHistory;
                }
            })["TransactionHistory.useEffect"];
        }
    }["TransactionHistory.useEffect"], [
        history
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                className: `fixed bottom-8 right-8 p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 ${theme === "dark" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-gradient-to-r from-blue-400 to-purple-400 text-white"}`,
                title: "View calculation history",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    history.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center",
                        children: history.length
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden ${theme === "dark" ? "bg-gray-900 border border-blue-500/20" : "bg-white border border-gray-200"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `sticky top-0 p-6 border-b z-10 ${theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                                    className: "w-6 h-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: `text-2xl font-black ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                                                        children: "Calculation History"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`,
                                                        children: [
                                                            history.length,
                                                            " recent calculation",
                                                            history.length !== 1 ? 's' : ''
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            history.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: exportHistory,
                                                        className: `p-2 rounded-xl transition-colors ${theme === "dark" ? "hover:bg-gray-800 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"}`,
                                                        title: "Export to CSV",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                            lineNumber: 161,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                        lineNumber: 152,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: clearHistory,
                                                        className: `px-4 py-2 rounded-xl font-semibold transition-colors ${theme === "dark" ? "bg-red-500/20 text-red-400 hover:bg-red-500/30" : "bg-red-100 text-red-600 hover:bg-red-200"}`,
                                                        children: "Clear All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                        lineNumber: 163,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsOpen(false),
                                                className: `p-2 rounded-xl transition-colors ${theme === "dark" ? "hover:bg-gray-800 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                    lineNumber: 183,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 overflow-y-auto max-h-[calc(90vh-120px)]",
                            children: history.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-center py-12 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                        className: "w-16 h-16 mx-auto mb-4 opacity-50"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                        lineNumber: 195,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold mb-2",
                                        children: "No calculations yet"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                        lineNumber: 196,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: "Your recent fee calculations will appear here"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                        lineNumber: 197,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                lineNumber: 192,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: history.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-5 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] ${theme === "dark" ? "bg-gray-800/50 border-blue-500/20 hover:border-blue-500/40" : "bg-gray-50 border-gray-200 hover:border-blue-300"}`,
                                        style: {
                                            animationDelay: `${index * 50}ms`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: `font-bold text-lg mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                                                                children: item.service
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                                lineNumber: 213,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`,
                                                                children: [
                                                                    item.category,
                                                                    " • ",
                                                                    item.userType
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                                lineNumber: 218,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                        lineNumber: 212,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `text-xs px-3 py-1 rounded-full ${theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"}`,
                                                        children: formatDate(item.timestamp)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                        lineNumber: 224,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                lineNumber: 211,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-xs mb-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`,
                                                                children: "Amount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                                lineNumber: 233,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                                                                children: formatCurrency(item.amount, item.currency)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                                lineNumber: 238,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                        lineNumber: 232,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-xs mb-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`,
                                                                children: "Fee"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                                lineNumber: 245,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-red-500",
                                                                children: formatCurrency(item.fee, item.currency)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                                lineNumber: 250,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                        lineNumber: 244,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-xs mb-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`,
                                                                children: "You Receive"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                                lineNumber: 255,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-green-500",
                                                                children: formatCurrency(item.net, item.currency)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                                lineNumber: 260,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                        lineNumber: 254,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                                lineNumber: 231,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                        lineNumber: 202,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                                lineNumber: 200,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                    lineNumber: 120,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx",
                lineNumber: 119,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(TransactionHistory, "pax/ce3xyQTBDz/9/QNZ/7MIluk=");
_c = TransactionHistory;
var _c;
__turbopack_context__.k.register(_c, "TransactionHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuickHelpGuide",
    ()=>QuickHelpGuide,
    "default",
    ()=>HelpTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
const serviceDescriptions = {
    "Freedom Virtual Card": "A virtual card for online purchases and subscriptions. Perfect for international transactions without physical card requirements.",
    "US Virtual Bank Account": "Get a US-based virtual bank account for receiving payments and conducting USD transactions globally.",
    "NG Virtual Bank Account": "Nigerian virtual bank account for local transactions and NGN-denominated payments.",
    "Payout": "Transfer funds from your account to external banks or mobile wallets quickly and securely.",
    "Business Payout": "Bulk payout solution for businesses to pay vendors, suppliers, or employees efficiently.",
    "Wallet to Wallet Transfer": "Instant transfer of funds between PaySwap user wallets with minimal fees.",
    "FX": "Foreign exchange services for converting between different currencies at competitive rates.",
    "Business Collections": "Accept payments from customers via multiple channels including cards, bank transfers, and more."
};
const feeTypeDescriptions = {
    "FREE": "No charges apply for this transaction - completely free of fees!",
    "percentage": "Fee is calculated as a percentage of your transaction amount.",
    "fixed": "A flat fee that remains constant regardless of transaction amount.",
    "capped": "Percentage-based fee with minimum and maximum limits for your protection."
};
function HelpTooltip({ content, theme, type = "info" }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getDescription = ()=>{
        if (type === "service") {
            return serviceDescriptions[content] || "Service information not available.";
        } else if (type === "feeType") {
            if (content === "FREE") return feeTypeDescriptions["FREE"];
            if (content?.includes("%") && content?.includes("$")) return feeTypeDescriptions["capped"];
            if (content?.includes("%")) return feeTypeDescriptions["percentage"];
            if (content?.includes("$") || content?.includes("₦")) return feeTypeDescriptions["fixed"];
            return "Fee calculation information.";
        }
        return content;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                onMouseEnter: ()=>setIsOpen(true),
                onMouseLeave: ()=>setIsOpen(false),
                className: `inline-flex items-center justify-center w-5 h-5 rounded-full transition-all ${theme === "dark" ? "text-blue-400 hover:bg-blue-500/20" : "text-blue-600 hover:bg-blue-100"}`,
                "aria-label": "Help",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute z-50 w-64 p-4 rounded-xl shadow-2xl transform -translate-x-1/2 left-1/2 bottom-full mb-2 animate-fadeIn ${theme === "dark" ? "bg-gray-800 border border-blue-500/30" : "bg-white border border-blue-200"}`,
                onMouseEnter: ()=>setIsOpen(true),
                onMouseLeave: ()=>setIsOpen(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-sm leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`,
                        children: getDescription()
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute w-3 h-3 transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1.5 ${theme === "dark" ? "bg-gray-800 border-r border-b border-blue-500/30" : "bg-white border-r border-b border-blue-200"}`
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(HelpTooltip, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = HelpTooltip;
function QuickHelpGuide({ theme }) {
    _s1();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                className: `fixed bottom-24 right-8 p-4 rounded-full shadow-2xl z-40 transition-all duration-300 hover:scale-110 ${theme === "dark" ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white" : "bg-gradient-to-r from-cyan-400 to-blue-400 text-white"}`,
                title: "Quick Help Guide",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden ${theme === "dark" ? "bg-gray-900 border border-blue-500/20" : "bg-white border border-gray-200"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `sticky top-0 p-6 border-b z-10 ${theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: `text-2xl font-black ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                                        children: "Quick Help Guide"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsOpen(false),
                                        className: `p-2 rounded-xl transition-colors ${theme === "dark" ? "hover:bg-gray-800 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 overflow-y-auto max-h-[calc(90vh-100px)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: `text-xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                                                children: "How to Calculate Fees"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                className: `space-y-2 list-decimal list-inside ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Enter the amount you want to transact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Select your preferred currency (USD or NGN)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Choose a service category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 144,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Select the specific service"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "View instant fee breakdown and savings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 146,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: `text-xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                                                children: "Understanding Fees"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                                                                children: "Fixed Fees (e.g., $1, ₦200)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                                lineNumber: 160,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`,
                                                                children: "A constant amount charged regardless of transaction size"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 157,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                                                                children: "Percentage Fees (e.g., 1.5%, 3%)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                                lineNumber: 175,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`,
                                                                children: "Calculated as a percentage of your transaction amount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                                lineNumber: 180,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 172,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                                                                children: "Capped Fees (e.g., 1.5% ($1 - $5))"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                                lineNumber: 190,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`,
                                                                children: "Percentage fee with minimum and maximum limits"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                                lineNumber: 195,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 187,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: `text-xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                                                children: "Tips for Saving Money"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                lineNumber: 205,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: `space-y-2 list-disc list-inside ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Use the comparison tool to find the lowest fees"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 213,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Consider account type (Customer vs Business) for better rates"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 214,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Bundle transactions when possible for fixed-fee services"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 215,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Monitor exchange rates for currency conversions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Check for FREE services that meet your needs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: `text-xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`,
                                                children: "Additional Features"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                lineNumber: 222,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: `space-y-2 list-disc list-inside ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "History:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                                lineNumber: 230,
                                                                columnNumber: 25
                                                            }, this),
                                                            " View your recent calculations"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 230,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Export:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                                lineNumber: 231,
                                                                columnNumber: 25
                                                            }, this),
                                                            " Download calculations as images or CSV"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 231,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Share:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                                lineNumber: 232,
                                                                columnNumber: 25
                                                            }, this),
                                                            " Share results via social media"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Compare:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                                lineNumber: 233,
                                                                columnNumber: 25
                                                            }, this),
                                                            " Compare fees across multiple services"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 233,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Themes:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                                lineNumber: 234,
                                                                columnNumber: 25
                                                            }, this),
                                                            " Switch between light and dark modes"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                        lineNumber: 234,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s1(QuickHelpGuide, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c1 = QuickHelpGuide;
var _c, _c1;
__turbopack_context__.k.register(_c, "HelpTooltip");
__turbopack_context__.k.register(_c1, "QuickHelpGuide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/the_debuggers/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/app/services/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$utils$2f$feeCalculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/app/utils/feeCalculations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/app/components/Header.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/app/components/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$ServiceCategories$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/app/components/ServiceCategories.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$Calculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/app/components/Calculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$LoadingError$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/app/components/LoadingError.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/app/components/Footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$FeeComparison$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/app/components/FeeComparison.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$TransactionHistory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/app/components/TransactionHistory.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$HelpTooltip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/the_debuggers/app/components/HelpTooltip.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function HomePage() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    const [fee, setFee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [net, setNet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fees, setFees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [exchangeRate, setExchangeRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userType, setUserType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Customer");
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedService, setSelectedService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currency, setCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("USD");
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const fetchData = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const [feesData, exchangeData] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFees"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExchangeRate"])('USD', 'NGN')
            ]);
            setFees(feesData);
            setExchangeRate(exchangeData);
            console.log('Fees Data:', feesData);
            console.log('Exchange Rate Data:', exchangeData);
        } catch (err) {
            console.error('Error fetching data:', err);
            setError(err.message || 'Failed to load data. Please check your internet connection and try again.');
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            fetchData();
        }
    }["HomePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            calculate();
        }
    }["HomePage.useEffect"], [
        amount,
        selectedService,
        selectedCategory,
        userType,
        fees
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const handleMouseMove = {
                "HomePage.useEffect.handleMouseMove": (e)=>{
                    setMousePos({
                        x: e.clientX,
                        y: e.clientY
                    });
                }
            }["HomePage.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "HomePage.useEffect": ()=>window.removeEventListener("mousemove", handleMouseMove)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    const calculate = ()=>{
        try {
            if (!fees || !selectedService || !selectedCategory) {
                setFee(0);
                setNet(0);
                return;
            }
            const amt = parseFloat(amount);
            if (isNaN(amt) || amt < 0) {
                setFee(0);
                setNet(0);
                return;
            }
            const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$utils$2f$feeCalculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getServiceFromFees"])(fees, userType, selectedCategory, selectedService);
            if (!service) {
                setFee(0);
                setNet(0);
                return;
            }
            const feeVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$utils$2f$feeCalculations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateFee"])(amt, service.Fee);
            const netVal = Math.max(0, amt - feeVal); // Ensure net amount is never negative
            setFee(feeVal);
            setNet(netVal);
        } catch (error) {
            console.error('Error in calculation:', error);
            setFee(0);
            setNet(0);
        }
    };
    const toggleTheme = ()=>{
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-ddf6a381b71db467" + " " + `min-h-screen transition-all duration-700 ${theme === "dark" ? "bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900" : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ddf6a381b71db467" + " " + "fixed inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            left: `${mousePos.x / 20}px`,
                            top: `${mousePos.y / 20}px`
                        },
                        className: "jsx-ddf6a381b71db467" + " " + "absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ddf6a381b71db467" + " " + "absolute w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 right-0"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ddf6a381b71db467" + " " + "absolute w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-1/2"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Navbar, {
                theme: theme,
                toggleTheme: toggleTheme,
                activeSection: activeSection,
                setActiveSection: setActiveSection
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ddf6a381b71db467" + " " + "relative max-w-7xl mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "home",
                        className: "jsx-ddf6a381b71db467",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            theme: theme
                        }, void 0, false, {
                            fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$LoadingError$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        loading: loading,
                        error: error,
                        theme: theme,
                        onRetry: fetchData
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "services",
                                className: "jsx-ddf6a381b71db467",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$ServiceCategories$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fees: fees,
                                    theme: theme,
                                    userType: userType,
                                    setUserType: setUserType
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "calculator",
                                className: "jsx-ddf6a381b71db467",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$Calculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    theme: theme,
                                    fees: fees,
                                    exchangeRate: exchangeRate,
                                    userType: userType,
                                    amount: amount,
                                    setAmount: setAmount,
                                    selectedCategory: selectedCategory,
                                    setSelectedCategory: setSelectedCategory,
                                    selectedService: selectedService,
                                    setSelectedService: setSelectedService,
                                    fee: fee,
                                    net: net,
                                    currency: currency,
                                    setCurrency: setCurrency
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "comparison",
                                className: "jsx-ddf6a381b71db467",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$FeeComparison$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fees: fees,
                                    theme: theme,
                                    userType: userType,
                                    amount: amount,
                                    currency: currency,
                                    exchangeRate: exchangeRate
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        theme: theme
                    }, void 0, false, {
                        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$TransactionHistory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                theme: theme,
                currency: currency
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$app$2f$components$2f$HelpTooltip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickHelpGuide"], {
                theme: theme
            }, void 0, false, {
                fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$the_debuggers$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "ddf6a381b71db467",
                children: "@keyframes fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes blob{0%,to{transform:translate(0)scale(1)}33%{transform:translate(30px,-50px)scale(1.1)}66%{transform:translate(-20px,20px)scale(.9)}}@keyframes gradient{0%,to{background-position:0%}50%{background-position:100%}}.animate-fadeIn.jsx-ddf6a381b71db467{animation:.8s ease-out forwards fadeIn}.animate-blob.jsx-ddf6a381b71db467{animation:7s infinite blob}.animation-delay-2000.jsx-ddf6a381b71db467{animation-delay:2s}.animation-delay-4000.jsx-ddf6a381b71db467{animation-delay:4s}.animate-gradient.jsx-ddf6a381b71db467{background-size:200%;animation:3s linear infinite gradient}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/the_debuggers/app/page.jsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(HomePage, "2NV8OaAcefP9iZpJgrtZK03C4LU=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_the_debuggers_app_2a522114._.js.map