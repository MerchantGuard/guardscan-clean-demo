// Dashboard component with some issues
import React from 'react';

export function Dashboard({ userData }: { userData: any }) {
  // XSS vulnerability - dangerouslySetInnerHTML
  return (
    <div>
      <h1>Welcome back!</h1>
      <div dangerouslySetInnerHTML={{ __html: userData.bio }} />
      <p>Your stats:</p>
      <div dangerouslySetInnerHTML={{ __html: userData.customHtml }} />
    </div>
  );
}

// Using innerHTML directly
export function updateNotification(message: string) {
  const el = document.getElementById('notification');
  if (el) {
    el.innerHTML = message;
  }
}
