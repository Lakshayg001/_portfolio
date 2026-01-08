"use client"

import FramerWrapper from "@/components/animation/FramerWrapper"

const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB"],
    tools: ["Git", "GitHub", "Postman", "VS Code"],
}

export default function SkillsPage() {
    return (
        <section className="min-h-screen flex items-center">
            <FramerWrapper>
                <div className="max-w-5xl mx-auto px-4 space-y-10">

                    {/* Heading */}
                    <h1 className="text-4xl font-bold text-primary">
                        Skills
                    </h1>

                    {/* Skill Sections */}
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <h2 className="text-2xl font-semibold capitalize mb-4">
                                {category}
                            </h2>

                            <div className="flex flex-wrap gap-3">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 border border-gray-700 rounded-full text-sm hover:border-primary transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </FramerWrapper>
        </section>
    )
}
