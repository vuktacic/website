'use client';

import Image from 'next/image';
import { animate, stagger } from 'animejs';
import { useEffect } from 'react';
import Icon from './icon';
import Name from './svg/name';

const socialLinks = [
    { src: '/icons/instagram.svg', alt: 'Instagram', href: 'https://instagram.com/vuktacic' },
    { src: '/icons/linkedin.svg', alt: 'LinkedIn', href: 'https://linkedin.com/in/vuktacic' },
    { src: '/icons/github.svg', alt: 'GitHub', href: 'https://github.com/vuktacic' },
];

const roles = [
    {
        icon: '/icons/bcydc.svg',
        alt: 'BCYDC',
        href: 'https://bcydc.ca',
        description: 'led bcydc, the largest high school developer community in bc & organized the biggest youth hackathons in vancouver',
    },
    {
        icon: '/icons/cr.svg',
        alt: 'Creekside Robotics',
        href: 'https://www.instagram.com/byrnerobotics',
        description: 'captained creekside robotics, the no. 2 first robotics team in the province',
    },
    {
        icon: '/icons/dsac.svg',
        alt: 'DSAC',
        href: 'https://www.instagram.com/burnabydsac/',
        description: 'represented 27000 burnaby students on dsac',
    },
];

type TimelineEntry = {
    year: number;
    lines: TimelineLine[];
};

type TimelineLine = {
    text: string;
    icon?: string;
    iconAlt?: string;
    href?: string;
    label?: string;
};

const timelineEntries: TimelineEntry[] = [
    {
        year: 2026,
        lines: [
            { text: 'A placeholder for the next chapter.', icon: '/icons/bcydc.svg', iconAlt: 'BCYDC' },
            { text: 'A placeholder for the next chapter.' },
            { text: 'A placeholder for the next chaptedsdfr.' },
            { text: "Examplegfdsgfds", icon: "/icons/example.svg", href: "https://google.com", label: "Example link" },
        ],
    },
    {
        year: 2025,
        lines: [
            { text: 'A placeholder for a project or milestone.' },
        ],
    },
    {
        year: 2024,
        lines: [
            { text: 'A placeholder for a formative experience.' },
        ],
    },
    {
        year: 2023,
        lines: [
            { text: 'A placeholder for something worth remembering.' },
        ],
    },
    {
        year: 2022,
        lines: [
            { text: 'A placeholder for an earlier project.' },
        ],
    },
    {
        year: 2021,
        lines: [
            { text: 'A placeholder for where it began.' },
        ],
    },
];

function ExternalLinkIcon() {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" className="shrink-0 text-zinc-500">
            <path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7ZM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7Z" />
        </svg>
    );
}

export default function LandingContent() {
    useEffect(() => {
        window.scrollTo(0, 0);

        animate(".fade-text", {
            opacity: 1,
            translateY: 0,
            duration: 1000,
            easing: "outQuad",
            delay: stagger(100)
        });
    }, []);

    const handleMouseEnterSection = (e: React.MouseEvent<HTMLElement>) => {
        const img = e.currentTarget.querySelector('img') as HTMLImageElement;
        const text = e.currentTarget.querySelector('p') as HTMLParagraphElement;

        animate(img, {
            translateX: -3,
            duration: 300,
            rotate: "-12deg",
            scale: 1.1,
            easing: 'inOutQuad'
        });
        animate(text, {
            translateX: 3,
            duration: 300,
            easing: 'inOutQuad',
            textDecoration: 'underline',
            textDecorationColor: 'currentColor',
            textDecorationThickness: '2px'
        });
    };

    const handleMouseLeaveSection = (e: React.MouseEvent<HTMLElement>) => {
        const img = e.currentTarget.querySelector('img') as HTMLImageElement;
        const text = e.currentTarget.querySelector('p') as HTMLParagraphElement;

        animate(img, {
            translateX: 0,
            duration: 300,
            rotate: 0,
            scale: 1,
            easing: 'inOutQuad'
        });

        animate(text, {
            translateX: 0,
            duration: 300,
            easing: 'inOutQuad',
            textDecoration: 'none',
            textDecorationColor: 'currentColor',
            textDecorationThickness: '0px',
            onComplete: () => {
                animate(text, {
                    textDecorationColor: 'transparent',
                })
            }
        });
    };

    const handleMouseEnterIcon = (e: React.MouseEvent<HTMLImageElement>) => {
        animate(e.currentTarget, {
            rotate: "-372deg", // -1 turn - 12 deg
            duration: 500,
            easing: 'inOutQuad'
        });
    }

    const handleMouseLeaveIcon = (e: React.MouseEvent<HTMLImageElement>) => {
        animate(e.currentTarget, {
            rotate: "-12deg",
            duration: 500,
            easing: 'inOutQuad'
        });
    }

    const handleMouseEnterTimelineIcon = (e: React.MouseEvent<HTMLImageElement>) => {
        animate(e.currentTarget, {
            rotate: "372deg", // 1 turn + 12 deg
            duration: 500,
            easing: 'inOutQuad'
        });
    };

    const handleMouseLeaveTimelineIcon = (e: React.MouseEvent<HTMLImageElement>) => {
        animate(e.currentTarget, {
            rotate: "12deg",
            duration: 500,
            easing: 'inOutQuad'
        });
    };

    const handleMouseEnterTimelineLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const iconGroup = e.currentTarget.querySelector('[data-timeline-icons]');
        const icon = e.currentTarget.querySelector('[data-timeline-content-icon]');
        const text = e.currentTarget.querySelector('[data-timeline-text]');
        const underline = e.currentTarget.querySelector('[data-timeline-underline]');

        if (iconGroup) {
            animate(iconGroup, {
                translateX: 3,
                duration: 300,
                easing: 'inOutQuad'
            });
        }

        if (icon) {
            animate(icon, {
                duration: 300,
                rotate: "12deg",
                scale: 1.1,
                easing: 'inOutQuad'
            });
        }

        if (text) {
            animate(text, {
                translateX: -3,
                duration: 300,
                easing: 'inOutQuad'
            });
        }

        if (underline) {
            animate(underline, {
                height: "2px",
                duration: 300,
                easing: 'inOutQuad'
            });
        }
    };

    const handleMouseLeaveTimelineLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const iconGroup = e.currentTarget.querySelector('[data-timeline-icons]');
        const icon = e.currentTarget.querySelector('[data-timeline-content-icon]');
        const text = e.currentTarget.querySelector('[data-timeline-text]');
        const underline = e.currentTarget.querySelector('[data-timeline-underline]');

        if (iconGroup) {
            animate(iconGroup, {
                translateX: 0,
                duration: 300,
                easing: 'inOutQuad'
            });
        }

        if (icon) {
            animate(icon, {
                duration: 300,
                rotate: 0,
                scale: 1,
                easing: 'inOutQuad'
            });
        }

        if (text) {
            animate(text, {
                translateX: 0,
                duration: 300,
                easing: 'inOutQuad'
            });
        }

        if (underline) {
            animate(underline, {
                height: "0px",
                duration: 300,
                easing: 'inOutQuad'
            });
        }
    };

    return (
        <div className="grid w-full max-w-7xl gap-48 px-6 py-6 md:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] md:items-start md:px-12 lg:px-24">
            <section className="" aria-label="Profile">
                <div className="h-[4rem] w-[15rem] pb-6">
                    <Name />
                </div>

                <div className="space-y-2 pb-6">
                    <p className="fade-text opacity-0">twelfth grade student from vancouver, bc</p>
                    <p className="fade-text opacity-0">i do a lot of stuff</p>
                    <p className="fade-text opacity-0">specialize in building physical things</p>
                </div>

                <div className="space-y-4 pb-6">
                    <div className={`text-2xl font-bold`}>
                        <p className="fade-text opacity-0">previously:</p>
                    </div>
                    {roles.map((role) => (
                        <a
                            key={role.alt}
                            href={role.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 fade-text opacity-0"
                            onMouseEnter={handleMouseEnterSection}
                            onMouseLeave={handleMouseLeaveSection}
                        >
                            <Image src={role.icon} alt={role.alt} width={28} height={28} loading="eager" onMouseOver={handleMouseEnterIcon} onMouseLeave={handleMouseLeaveIcon} />
                            <p>{role.description}</p>
                        </a>
                    ))}
                </div>

            </section>

            <section aria-label="Timeline">
                <div className="flex items-center gap-4 fade-text opacity-0 pb-6">
                    {socialLinks.map((socialLink) => (
                        <Icon key={socialLink.alt} {...socialLink} size={24} />
                    ))}
                    <span className="text-sm text-zinc-400">vuktacic@student.ubc.ca</span>
                </div>

                <ol>
                    {timelineEntries.map((entry) => (
                        <li key={entry.year} className="fade-text opacity-0">
                            <time dateTime={entry.year.toString()} className="block leading-6 text-zinc-500">{entry.year}</time>
                            <ul className="text-zinc-300">
                                {entry.lines.map((line, index) => (
                                    <li key={`${line.text}-${index}`} className="min-h-6 leading-6">
                                        {line.href ? (
                                            <a
                                                href={line.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={line.label ?? line.text}
                                                className="flex min-h-6 w-fit items-center space-x-2"
                                                onMouseEnter={handleMouseEnterTimelineLink}
                                                onMouseLeave={handleMouseLeaveTimelineLink}
                                            >
                                                <span data-timeline-text className="relative inline-block">
                                                    {line.text}
                                                    <span data-timeline-underline aria-hidden="true" className="absolute inset-x-0 bottom-0" style={{ height: "0px", backgroundColor: "currentColor" }} />
                                                </span>
                                                <span data-timeline-icons className="flex shrink-0 items-center gap-2">
                                                    {line.icon && <Image data-timeline-content-icon src={line.icon} alt={line.iconAlt ?? ""} width={20} height={20} loading="eager" aria-hidden={line.iconAlt ? undefined : true} className="shrink-0" onMouseOver={handleMouseEnterTimelineIcon} onMouseLeave={handleMouseLeaveTimelineIcon} />}
                                                    <ExternalLinkIcon />
                                                </span>
                                            </a>
                                        ) : (
                                            <div className="flex min-h-6 items-center space-x-3">
                                                <span>{line.text}</span>
                                                {line.icon && <Image src={line.icon} alt={line.iconAlt ?? ""} width={20} height={20} loading="eager" aria-hidden={line.iconAlt ? undefined : true} className="shrink-0" onMouseOver={handleMouseEnterTimelineIcon} onMouseLeave={handleMouseLeaveTimelineIcon} />}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </section>
        </div>
    );
}
