import Image from "next/image";
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
        title: "VDAR",
        description: "A compact LiDAR platform for learning how hardware, telemetry, and visualization fit together.",
        image: "/og.png",
        url: "https://github.com/vuktacic/vdar",
        label: "Open the VDAR project on GitHub",
    },
    {
        title: "Youth developer community",
        description: "A growing space for high school students to make, learn, and ship projects together.",
        image: "/og.png",
        url: "https://bcydc.ca",
        label: "Open the BCYDC website",
    },
    {
        title: "Robotics field notes",
        description: "Experiments in mechanisms, software, and the small details that make a robot reliable.",
        image: "/og.png",
        label: "Robotics field notes project",
    },
    {
        title: "Next stop",
        description: "A placeholder for the next thing worth building. This card is ready to receive a project URL.",
        image: "/og.png",
        label: "Next featured project placeholder",
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
    if (underline) animate(underline, { height: "2px", duration: 300, easing: "inOutQuad" });
}

function handleProjectMouseLeave(e: React.MouseEvent<HTMLElement>) {
    const title = e.currentTarget.querySelector('[data-project-title]');
    const icon = e.currentTarget.querySelector('[data-project-icon]');
    const underline = e.currentTarget.querySelector('[data-project-underline]');

    if (title) animate(title, { translateX: 0, duration: 300, easing: "inOutQuad" });
    if (icon) animate(icon, { translateX: 0, duration: 300, easing: "inOutQuad" });
    if (underline) animate(underline, { height: "0px", duration: 300, easing: "inOutQuad" });
}

function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
    const cardClassName = "group block w-full text-left";
    const projectTitle = (
        <h3 data-project-title className="relative inline-block">
            {project.title}
            {project.url && <span data-project-underline aria-hidden="true" className="absolute inset-x-0 bottom-0" style={{ height: "0px", backgroundColor: "currentColor" }} />}
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
            <Image src={project.image} alt={`${project.title} project preview`} width={1200} height={675} className="aspect-video w-full object-cover" />
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
                    <p id="featured-projects-heading" className="sticky top-6 z-10 mb-8 w-fit shrink-0 bg-zinc-900 pr-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 md:mb-0">projects</p>
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
