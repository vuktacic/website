import { animate } from "animejs";
import { useSyncExternalStore } from "react";

type FeaturedProject = {
    title: string;
    description: string;
    image: string;
    alt: string;
    video?: string;
    url?: string;
    label: string;
};

const featuredProjects: FeaturedProject[] = [
    {
        title: "vdar",
        description: "built a low-cost 3d lidar scanner from scratch. custom mechanisms, circuit board, and firmware, along with a custom point cloud visualizer",
        image: "/previews/vdar.webp",
        alt: "Completed vdar scanner beside a point cloud it captured",
        url: "https://github.com/vuktacic/vdar",
        label: "Open the vdar project on GitHub",
    },
    {
        title: "frc shooter",
        description: "designed and built a shooter and feeder for our frc robot. flywheel launcher, custom geared feeder, and a lot of time in the shop",
        image: "/previews/shooter.webp",
        video: "/previews/shooter-motion.mp4",
        alt: "Shooter and feeder CAD beside a demonstration of the built mechanism",
        label: "FRC shooter and feeder mechanism",
    },
    {
        title: "chessbot",
        description: "designed a chess-playing robot. under-board gantry system, compact 2-layer pcb, and aruco tag pipeline w/ opencv",
        image: "/previews/chessbot.webp",
        alt: "CAD of the wooden chessboard and its motor-driven under-board gantry",
        url: "https://github.com/vuktacic/chessler",
        label: "Open the chess robot project on GitHub",
    },
    {
        title: "bcydc",
        description: "scaled the largest high school developer community in bc 10x to 500 members and organized the largest high school hackathons in bc with a local university",
        image: "/previews/bcydc.webp",
        alt: "Scrapyard Vancouver participants gathered together at their hackathon",
        url: "https://bcydc.ca",
        label: "Open the bcydc website",
    },
    {
        title: "creekside robotics",
        description: "rebuilt my frc team from the ground up. scaled from 5 to 35 members, went from the bottom to #1 in the province, and worked on everything (cad, mechanical, electrical, software, business, outreach)",
        image: "/previews/frc.webp",
        alt: "Creekside Robotics team gathered around their competition robot",
        url: "https://www.instagram.com/byrnerobotics",
        label: "open the frc team instagram",
    },
    {
        title: "cuber",
        description: "built a rubik's cube solver with an esp32, six servos, and colour sensors. custom 3d-printed mechanisms scan the cube and turn its faces",
        image: "/previews/cuber.webp",
        alt: "Built Cuber robot holding a Rubik's Cube beside its CAD assembly",
        url: "https://github.com/vuktacic/cuber",
        label: "Open the cuber project on GitHub",
    },
    {
        title: "wind tunnel",
        description: "built a wind tunnel in 48 hours for open sauce. cardboard ducting, blowers, and a model airplane in the test section",
        image: "/previews/wind-tunnel.webp",
        alt: "Cardboard wind tunnel with an open test section, model airplane, and wired electronics",
        label: "Wind tunnel built for Open Sauce",
    },
    {
        title: "trebuchet",
        description: "built a roughly 9ft trebuchet in two days. lumber, a counterweight, a sling, and a good reason to go to the park",
        image: "/previews/trebuchet.webp",
        alt: "Wooden trebuchet under construction in a garage beside the finished build in a park",
        label: "Nine-foot trebuchet",
    },
];

function ExternalLinkIcon() {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" className="shrink-0 text-zinc-500">
            <path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7ZM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7Z" />
        </svg>
    );
}

function handleProjectMouseEnter(e: React.MouseEvent<HTMLElement>) {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        return;
    }

    const title = e.currentTarget.querySelector('[data-project-title]');
    const icon = e.currentTarget.querySelector('[data-project-icon]');
    const underline = e.currentTarget.querySelector('[data-project-underline]');

    if (title) animate(title, { translateX: -3, duration: 300, easing: "inOutQuad" });
    if (icon) animate(icon, { translateX: 3, duration: 300, easing: "inOutQuad" });
    if (underline) animate(underline, { textDecorationThickness: "2px", duration: 300, easing: "inOutQuad" });
}

function handleProjectMouseLeave(e: React.MouseEvent<HTMLElement>) {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        return;
    }

    const title = e.currentTarget.querySelector('[data-project-title]');
    const icon = e.currentTarget.querySelector('[data-project-icon]');
    const underline = e.currentTarget.querySelector('[data-project-underline]');

    if (title) animate(title, { translateX: 0, duration: 300, easing: "inOutQuad" });
    if (icon) animate(icon, { translateX: 0, duration: 300, easing: "inOutQuad" });
    if (underline) animate(underline, { textDecorationThickness: "0px", duration: 300, easing: "inOutQuad" });
}

function FeaturedProjectCard({ project, animatePreviews }: { project: FeaturedProject; animatePreviews: boolean }) {
    const cardClassName = "group block w-full text-left";
    const projectTitle = (
        <h3 data-project-title data-project-underline className={`inline underline decoration-[0px] underline-offset-2${project.url ? "" : " no-underline"}`}>
            {project.title}
        </h3>
    );
    const titleRow = project.url ? (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.label}
            className="flex w-fit items-center gap-2 text-lg font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
            onMouseEnter={handleProjectMouseEnter}
            onMouseLeave={handleProjectMouseLeave}
        >
            {projectTitle}
            <span data-project-icon className="flex shrink-0"><ExternalLinkIcon /></span>
        </a>
    ) : (
        <div className="flex w-fit items-center gap-2 text-lg font-bold text-white">
            {projectTitle}
        </div>
    );
    const content = (
        <>
            {project.video && animatePreviews ? (
                <video
                    src={project.video}
                    poster={project.image}
                    aria-label={project.alt}
                    width="960"
                    height="540"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="aspect-video w-full object-cover"
                />
            ) : (
                <picture>
                    <img
                        src={project.image}
                        srcSet={`${project.image.replace(".webp", "-480.webp")} 480w, ${project.image} 960w`}
                        sizes="(min-width: 640px) 374px, calc(100vw - 48px)"
                        alt={project.alt}
                        width="960"
                        height="540"
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full object-cover"
                    />
                </picture>
            )}
            <div className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                {titleRow}
                <p className="leading-relaxed text-zinc-300 text-xs">{project.description}</p>
            </div>
        </>
    );

    return <article aria-label={project.label} className={cardClassName}>{content}</article>;
}

function subscribeToMotionPreference(onChange: () => void) {
    const query = window.matchMedia("(prefers-reduced-motion: no-preference)");
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
}

export default function FeaturedProjects() {
    const animatePreviews = useSyncExternalStore(
        subscribeToMotionPreference,
        () => window.matchMedia("(prefers-reduced-motion: no-preference)").matches,
        () => false,
    );
    return (
        <section aria-labelledby="featured-projects-heading" className="bg-zinc-900 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-24">
                <div className="lg:flex lg:items-start">
                    <div className="mb-8 lg:-mt-[45dvh] lg:mb-0 lg:h-[100dvh] lg:shrink-0">
                        <p id="featured-projects-heading" className="z-10 w-fit shrink-0 bg-zinc-900 pr-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 lg:sticky lg:top-6">featured</p>
                    </div>
                    <div className="ml-auto w-full max-w-3xl lg:pl-8">
                        <div className="grid grid-cols-1 items-stretch gap-x-5 gap-y-10 sm:grid-cols-2">
                            {featuredProjects.map((project) => <FeaturedProjectCard key={project.title} project={project} animatePreviews={animatePreviews} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
