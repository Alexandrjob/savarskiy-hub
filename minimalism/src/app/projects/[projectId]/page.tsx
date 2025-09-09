import { projects } from "@/data/resume-data";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ProjectPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any; // Temporarily use any to bypass type checking
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projects.items.find(p => p.id === params.projectId);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            <header className="p-4 border-b border-gray-700">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold text-accent">{project.name}</h1>
                    <Link href="/" className="text-sm hover:text-[rgb(var(--dot-accent-color))] transition-colors">← Назад к портфолио</Link>
                </div>
            </header>
            <main className="flex-grow">
                <iframe src={project.liveUrl} className="w-full h-full border-0" title={project.name} />
            </main>
            {project.repoUrl && (
                 <footer className="p-4 border-t border-gray-700 text-center text-sm">
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                        Посмотреть исходный код на GitHub
                    </a>
                </footer>
            )}
        </div>
    );
}

// Optional: Add a generateStaticParams function to pre-build all project pages at build time for better performance
export async function generateStaticParams() {
    return projects.items.map((project) => ({
        projectId: project.id,
    }))
}