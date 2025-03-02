import React, { JSX } from 'react';

interface SocialLinkProps {
    href: string;
    icon: JSX.Element;
    label: string;
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
    return (
        <a href={href} className="flex items-center space-x-3 text-lg font-medium no-underline hover:no-underline">
            {icon}
            <span>{label}</span>
        </a>
    );
}