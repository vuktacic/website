"use client";

import LandingContent from '@/components/content';
import FeaturedProjects from '@/components/featured-projects';
import Bottom from '@/components/bottom';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

export default function Home() {
    return (
        <>
            <ReactLenis root options={{
                duration: 2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                syncTouch: true,
                wheelMultiplier: 0.5,
                touchMultiplier: 2,
            }}>

                <div className="bg-zinc-900 min-h-screen">
                    <div className="h-[8vh] md:h-[20vh] w-full bg-zinc-900"></div>
                    <div className="flex flex-col items-center h-screen">
                        <LandingContent />
                    </div>

                    <FeaturedProjects />

                    <Bottom />
                    <div className="h-[calc(100lvh-100svh)] w-full bg-zinc-900 hidden [@supports(-moz-appearance:none)]:block"></div>
                </div>
            </ReactLenis>
        </>
    );
}
