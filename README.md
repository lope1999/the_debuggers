# my-fee-app
JavaScript Next.js demo app (App Router) with a mock /api/fees endpoint (static 2% fee) and Bootstrap styling.

## Quick start

1. Install dependencies
   ```
   npm install
   ```

2. Run locally
   ```
   npm run dev
   ```

3. Open http://localhost:3000

## Notes
- Frontend: React/Next.js
- Calculator logic: Call `/api/fees`, multiply `amount × feeRate`, show breakdown.
- Reusable button: `<CTAButton swapTag="@suliat" />`
