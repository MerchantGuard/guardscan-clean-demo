// Auth module - couple issues

export async function login(email: string, password: string) {
  // Missing rate limiting (will be flagged)
  const user = await findUser(email);
  
  if (!user) {
    // Information disclosure - tells attacker email doesn't exist
    return { error: 'User not found' };
  }
  
  // Should use constant-time comparison
  if (user.password !== password) {
    return { error: 'Invalid password' };
  }
  
  return { success: true, token: generateToken(user) };
}

async function findUser(email: string) {
  return null; // Mock
}

function generateToken(user: any) {
  return 'token';
}
