# grl.next.door — Paystack-ready store

Next.js storefront with cart, customer checkout, server-side ZAR pricing, Paystack hosted checkout, server-side transaction verification and signature-verified webhook endpoint.

## Start locally

1. `npm install`
2. Copy `.env.example` to `.env.local`.
3. Set `PAYSTACK_SECRET_KEY` to your **Paystack test secret key** (never expose it in browser code).
4. Set `NEXT_PUBLIC_SITE_URL=http://localhost:3000`.
5. `npm run dev` then visit http://localhost:3000.

## Deploy to Vercel

1. Push this folder to your own private GitHub repository.
2. Import the repository into Vercel as a Next.js project.
3. Add environment variables `PAYSTACK_SECRET_KEY` and `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourdomain.co.za`) in Vercel.
4. Deploy, connect your custom domain, then set the URL variable to that domain and redeploy.
5. In Paystack, configure your webhook URL as `https://yourdomain.co.za/api/paystack/webhook`.
6. Test with Paystack test credentials and a test transaction, then switch to your **live** secret key after your Paystack account is approved and enabled for ZAR.

## Important before accepting real orders

- **Order operations are not production-complete.** The verified webhook currently logs successful transaction references but does not persist orders or send emails. Add a durable database (e.g. Supabase) and a transactional email provider; implement idempotent order persistence and notifications before real fulfilment.
- Customer details are included in Paystack transaction metadata for reference, but this is not a substitute for an order-management system.
- Add your verified support email, business details, privacy policy, returns/refunds policy, shipping/delivery policy and terms before public launch.
- The physical EmpowHer Pack is priced at R350 as a **placeholder** based on the project's existing R350 fund-a-pack concept; confirm retail pricing and stock before going live.
- No delivery fee is charged. The checkout informs customers that delivery/collection is arranged separately and any delivery cost is agreed before dispatch. Set up clear shipping rates and coverage before scaling.
- Fund-a-pack is represented as a contribution. Confirm your legal/tax treatment and exact beneficiary/distribution process; avoid claiming charitable tax deductibility unless applicable.
- Never share secret keys in chat or commit `.env.local`.

## API routes

- `POST /api/paystack/initialize` validates items and prices server-side and creates a Paystack checkout session.
- `GET /api/paystack/verify?reference=...` checks the payment server-side.
- `POST /api/paystack/webhook` validates Paystack's HMAC-SHA512 signature. Implement durable idempotent processing for `charge.success` before fulfilment.
