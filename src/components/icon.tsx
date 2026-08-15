'use client';

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
            className="inline-flex h-11 w-11 items-center justify-center transition-transform duration-200 hover:scale-110 hover:-rotate-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={alt}
        >
            <img
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
