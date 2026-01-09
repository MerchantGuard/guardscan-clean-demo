// Utility functions with issues

// Missing webhook verification
export async function handleStripeWebhook(req: Request) {
  const body = await req.json();
  // ISSUE: Not verifying webhook signature!
  if (body.type === 'payment_intent.succeeded') {
    await processPayment(body.data.object);
  }
  return { received: true };
}

async function processPayment(data: any) {
  console.log('Processing payment:', data.id);
}

// Regex that could be slow (ReDoS)
export function validateEmail(email: string) {
  const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
