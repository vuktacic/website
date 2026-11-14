'use client';

import { animate } from "animejs";
import Mountains from './svg/mountains';

function handleCopyrightHover(e: React.MouseEvent<HTMLDivElement>, hovering: boolean) {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        return;
    }

    animate(e.currentTarget, {
        color: hovering ? "#ffa1ad" : "#71717b",
        duration: 800,
        easing: "inOutQuad",
    });
}

export default function Bottom() {
    return (
        <footer className="relative flex min-h-[35dvh] w-full flex-col bg-zinc-900 lg:h-[85dvh] lg:min-h-0">
            <Mountains>
                <div className="w-full bg-zinc-900 px-6 pb-3 text-center sm:px-8 lg:px-24">
                    <div
                        className="mx-auto mt-4 w-fit text-sm"
                        style={{ color: "#71717b" }}
                        onMouseEnter={(e) => handleCopyrightHover(e, true)}
                        onMouseLeave={(e) => handleCopyrightHover(e, false)}
                    >
                        <span>Copyright © 2026 Vuk Tacic. </span>
                        <a
                            href="https://github.com/vuktacic/website"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
                        >
                            View repository
                        </a>
                    </div>
                </div>
            </Mountains>
        </footer>
    );
}
