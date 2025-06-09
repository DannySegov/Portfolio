'use client';

import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sequi pariatur eaque! Facere, tempore possimus! Pariatur omnis esse non dolorem ipsa reprehenderit, iusto dicta illum eum quis labore. Laudantium, blanditiis.</p>
  </div>
);