import React, { JSX } from 'react';

interface SocialLinkProps {
    href: string;
    icon: JSX.Element;
    label: string;
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
    return (
        <div className="flex items-center space-x-2">
            {icon}
            <a href={href} className="text-lg font-medium hover:underline">{label}</a>
        </div>
    );
}