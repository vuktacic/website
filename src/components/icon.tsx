'use client';

import Image from 'next/image';

interface IconProps {
    src: string;
    alt: string;
    href?: string;
    size?: number;
}

export default function Icon({ src, alt, href = "#", size = 48 }: IconProps) {
    return (
        <a 
            href={href} 
            className="hover:scale-110 hover:-rotate-3 transition-transform duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={alt}
        >
            <Image 
                src={src} 
                alt={alt} 
                width={size}
                height={size}
                loading="eager"
                className="filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-200" 
            />
        </a>
    );
}
