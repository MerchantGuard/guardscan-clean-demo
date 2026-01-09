// API Handler
export async function handleRequest(req: Request) {
  const data = await req.json();
  
  // TODO: Add rate limiting here
  
  if (!data.email) {
    return { error: 'Email required', status: 400 };
  }
  
  return { success: true, email: data.email };
}
