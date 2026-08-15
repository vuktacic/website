import { animate } from "animejs";

type FeaturedProject = {
    title: string;
    description: string;
    image: string;
    url?: string;
    label: string;
};

const featuredProjects: FeaturedProject[] = [
    {
        title: "vdar",
        description: "built a low-cost 3d lidar scanner from scratch. custom mechanisms, circuit board, and firmware, along with a custom point cloud visualizer",
        image: "/previews/vdar.png",
        url: "https://github.com/vuktacic/vdar",
        label: "Open the vdar project on GitHub",
    },
    {
        title: "bcydc",
        description: "scaled the largest high school developer community in bc 10x to 500 members and organized the largest high school hackathons in bc with a local university",
        image: "/previews/bcydc.png",
        url: "https://bcydc.ca",
        label: "Open the bcydc website",
    },
    {
        title: "creekside robotics",
        description: "rebuilt my frc team from the ground up. scaled from 5 to 35 members, went from the bottom to #1 in the province, and worked with every part of the frc stack along the way",
        image: "/previews/frc.png",
        url: "https://www.instagram.com/byrnerobotics",
        label: "open the frc team instagram",
    },
    {
        title: "chessbot",
        description: "currently building a chess-playing robot. under-board gantry system, compact 2-layer pcb, and aruco tag pipeline w/ opencv",
        image: "/previews/chessbot.png",
        url: "https://github.com/vuktacic/chessler",
        label: "Open the chess robot project on GitHub",
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
    const title = e.currentTarget.querySelector('[data-project-title]');
    const icon = e.currentTarget.querySelector('[data-project-icon]');
    const underline = e.currentTarget.querySelector('[data-project-underline]');

    if (title) animate(title, { translateX: -3, duration: 300, easing: "inOutQuad" });
    if (icon) animate(icon, { translateX: 3, duration: 300, easing: "inOutQuad" });
    if (underline) animate(underline, { textDecorationThickness: "2px", duration: 300, easing: "inOutQuad" });
}

function handleProjectMouseLeave(e: React.MouseEvent<HTMLElement>) {
    const title = e.currentTarget.querySelector('[data-project-title]');
    const icon = e.currentTarget.querySelector('[data-project-icon]');
    const underline = e.currentTarget.querySelector('[data-project-underline]');

    if (title) animate(title, { translateX: 0, duration: 300, easing: "inOutQuad" });
    if (icon) animate(icon, { translateX: 0, duration: 300, easing: "inOutQuad" });
    if (underline) animate(underline, { textDecorationThickness: "0px", duration: 300, easing: "inOutQuad" });
}

function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
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
            className="flex w-fit items-center gap-2 text-lg font-bold text-white"
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
            <img src={project.image} alt={`${project.title} project preview`} width="1200" height="675" loading="lazy" className="aspect-video w-full object-cover" />
            <div className="mt-4 space-y-2">
                {titleRow}
                <p className="leading-relaxed text-zinc-300 text-xs">{project.description}</p>
            </div>
        </>
    );

    return <article aria-label={project.label} className={cardClassName}>{content}</article>;
}

export default function FeaturedProjects() {
    return (
        <section aria-labelledby="featured-projects-heading" className="bg-zinc-900 py-24">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-24">
                <div className="md:flex md:items-start">
                    <div className="md:-mt-[45dvh] md:h-[100dvh] md:shrink-0">
                        <p id="featured-projects-heading" className="sticky top-6 z-10 mb-8 w-fit shrink-0 bg-zinc-900 pr-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 md:mb-0">featured</p>
                    </div>
                    <div className="ml-auto w-full max-w-3xl md:pl-8">
                        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
                            {featuredProjects.map((project) => <FeaturedProjectCard key={project.title} project={project} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
