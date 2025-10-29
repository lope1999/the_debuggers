// app/api/fees/route.js
export async function GET() {
  const data = { feeRate: 0.02, currency: "USD" }; // static 2% fee
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
