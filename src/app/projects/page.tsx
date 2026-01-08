"use client"

import FramerWrapper from "@/components/animation/FramerWrapper"
import Link from "next/link"

const projects = [
    {
        title: "Sketchers",
        description:
            "A collaborative drawing app where multiple users can draw on the same board in real time.",
        tech: ["Next.js", "WebSockets", "Tailwind CSS"],
        github: "https://github.com/",
        live: "#",
    },
    {
        title: "FindRoof",
        description:
            "A house rental platform with dashboards for owners and tenants built using MERN stack.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        github: "https://github.com/",
        live: "#",
    },
]

export default function ProjectsPage() {
    return (
        <section className="min-h-screen py-20">
            <FramerWrapper>
                <div className="max-w-6xl mx-auto px-4 space-y-10">

                    {/* Heading */}
                    <h1 className="text-4xl font-bold text-primary">
                        Projects
                    </h1>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="border border-gray-800 rounded-xl p-6 hover:border-primary transition"
                            >
                                <h2 className="text-2xl font-semibold">
                                    {project.title}
                                </h2>

                                <p className="text-gray-400 mt-2">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="text-xs px-3 py-1 border border-gray-700 rounded-full"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 mt-6">
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="text-sm text-primary hover:underline"
                                    >
                                        GitHub →
                                    </Link>

                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        className="text-sm text-primary hover:underline"
                                    >
                                        Live →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </FramerWrapper>
        </section>
    )
}
