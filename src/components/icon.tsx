'use client';

import { animate } from "animejs";

function handleIconHover(e: React.MouseEvent<HTMLAnchorElement>, hovering: boolean) {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        return;
    }

    animate(e.currentTarget, {
        color: hovering ? "#ffa1ad" : "#999999",
        duration: 800,
        easing: "inOutQuad",
    });
}

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
            style={{ color: "#999999" }}
            onMouseEnter={(e) => handleIconHover(e, true)}
            onMouseLeave={(e) => handleIconHover(e, false)}
        >
            <span
                aria-hidden="true"
                className="block bg-current"
                style={{
                    width: size,
                    height: size,
                    maskImage: `url("${src}")`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                }}
            />
        </a>
    );
}
