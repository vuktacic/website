"use client";

import { animate } from "animejs";
import { useEffect, useRef } from "react";

export default function Name() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        animate(container, {
            opacity: 1,
            duration: 0,
        });
    }, []);

    const handleMouseEnterName = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            return;
        }

        animate(e.currentTarget, {
            color: "#ffa1ad",
            duration: 800,
            easing: "inOutQuad",
        });
    };

    const handleMouseLeaveName = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            return;
        }

        animate(e.currentTarget, {
            color: "#ffffff",
            duration: 800,
            easing: "inOutQuad",
        });
    };

    return (
        <div
            ref={containerRef}
            className="name-container flex h-full items-center text-white opacity-0"
            onMouseEnter={handleMouseEnterName}
            onMouseLeave={handleMouseLeaveName}
        >
            <span className="name-text whitespace-nowrap text-4xl leading-none text-current font-semibold text-center sm:text-5xl">
                Vuk Tacic
            </span>
        </div>
    );
}
