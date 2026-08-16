import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Vuk Tacic",
    keywords: ["Vuk", "Vuk Tacic", "Zylve", "Vancouver", "dsac", "bcydc", "creekside robotics", "7688", "creekside", "byrne creek", "burnaby"],
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: '/icons/icon-light.svg',
                href: '/icons/icon-light.svg',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: '/icons/icon.svg',
                href: '/icons/icon.svg',
            },
        ],
    },

    openGraph: {
        title: 'Vuk',
        description: 'UBC schulich leader',
        url: 'https://vuktacic.com',
        siteName: 'Vuk Tacic',
        images: [
            {
                url: 'https://vuktacic.com/og.png', // Must be an absolute URL
                width: 2034,
                height: 629,
            },
        ],
    },
};

    export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
        return (
            <>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Z5XKY87YL8" />
                <Script id="google-analytics">{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-Z5XKY87YL8');
            `}</Script>


                <html lang="en">
                    <body
                        className={` ${montserrat.variable} antialiased bg-zinc-900 text-white min-h-screen font-sans overflow-x-hidden`}
                    >
                        {children}
                    </body>
                </html>
            </>
        );
}
