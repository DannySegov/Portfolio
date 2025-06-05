import React, { JSX } from 'react';

interface SocialLinkProps {
    href: string;
    icon: JSX.Element;
}

export function SocialLink({ href, icon }: SocialLinkProps) {
    return (
        <a href={href} className="flex items-center space-x-3 text-lg font-medium no-underline hover:no-underline">
            {icon}
        </a>
    );
}