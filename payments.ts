// Clean Payment Processing - Follows Best Practices
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function createCheckout(priceId: string, customerId: string) {
  if (!priceId || !customerId) {
    throw new Error('Missing required parameters');
  }

  return stripe.checkout.sessions.create({
    customer: customerId,
    line_items: [{ price: priceId, quantity: 1 }],
    mode: 'subscription',
    success_url: `${process.env.APP_URL}/success`,
    cancel_url: `${process.env.APP_URL}/cancel`,
  });
}

export async function verifyWebhook(payload: string, sig: string) {
  return stripe.webhooks.constructEvent(
    payload, 
    sig, 
    process.env.STRIPE_WEBHOOK_SECRET!
  );
}
