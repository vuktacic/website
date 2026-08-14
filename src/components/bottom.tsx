'use client';

import Mountains from './svg/mountains';
import Liner from './svg/liner';

export default function Bottom() {
    return (
        <div className="h-[85dvh] w-full bg-zinc-900 relative">
            <div className="w-full bg-zinc-900 px-6 md:px-12 lg:px-24">
                <div className="flex flex-col items-center space-y-4">
                    <div className="text-sm text-zinc-500 text-center mt-4">
                        <span>Copyright © 2026 Vuk Tacic. </span>
                        <a 
                            href="https://github.com/vuktacic/website" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-zinc-400 transition-colors underline"
                        >
                            View repository
                        </a>
                    </div>

                    <Mountains />
                </div>
            </div>
        </div>
    );
}




