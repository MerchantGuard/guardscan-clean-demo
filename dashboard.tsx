// Dashboard component - mostly clean
import React from 'react';
import DOMPurify from 'dompurify';

export function Dashboard({ userData }: { userData: any }) {
  // Properly sanitized
  const safeBio = DOMPurify.sanitize(userData.bio);
  
  return (
    <div>
      <h1>Welcome back!</h1>
      <div dangerouslySetInnerHTML={{ __html: safeBio }} />
      <p>Your account is active.</p>
    </div>
  );
}
