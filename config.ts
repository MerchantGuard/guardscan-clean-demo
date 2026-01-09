// Config - has a couple minor issues

// Hardcoded but non-sensitive (still flagged)
export const API_TIMEOUT = 30000;
export const MAX_RETRIES = 3;

// This will trigger a warning - logging user data
export function logUserAction(userId: string, action: string) {
  console.log(`User ${userId} performed: ${action}`);
}

// Missing input sanitization warning
export function formatMessage(userInput: string) {
  return `<div>${userInput}</div>`;
}
