'use client';

import Mountains from './svg/mountains';

export default function Bottom() {
    return (
        <footer className="relative flex min-h-[35dvh] w-full flex-col bg-zinc-900 lg:h-[85dvh] lg:min-h-0">
            <Mountains>
                <div className="w-full bg-zinc-900 px-6 pb-3 text-center sm:px-8 lg:px-24">
                    <div className="mt-4 text-sm text-zinc-500">
                        <span>Copyright © 2026 Vuk Tacic. </span>
                        <a
                            href="https://github.com/vuktacic/website"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center underline transition-colors hover:text-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
                        >
                            View repository
                        </a>
                    </div>
                </div>
            </Mountains>
        </footer>
    );
}
