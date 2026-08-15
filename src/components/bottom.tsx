'use client';

import Mountains from './svg/mountains';
import Liner from './svg/liner';

export default function Bottom() {
    return (
        <footer className="relative flex h-[85dvh] w-full flex-col bg-zinc-900">
            <Mountains>
                <div className="w-full bg-zinc-900 px-6 pb-3 text-center md:px-12 lg:px-24">
                    <div className="mt-4 text-sm text-zinc-500">
                        <span>Copyright © 2026 Vuk Tacic. </span>
                        <a
                            href="https://github.com/vuktacic/website"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline transition-colors hover:text-zinc-400"
                        >
                            View repository
                        </a>
                    </div>
                </div>
            </Mountains>
        </footer>
    );
}
