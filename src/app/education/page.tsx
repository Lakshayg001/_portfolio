"use client"

import FramerWrapper from "@/components/animation/FramerWrapper"

const education = [
    {
        degree: "B.Tech in Computer Science",
        institution: "Your College Name",
        year: "2022 – 2026",
        description:
            "Focused on Data Structures, Algorithms, Web Development, and Software Engineering.",
    },
]

export default function EducationPage() {
    return (
        <section className="min-h-screen flex items-center">
            <FramerWrapper>
                <div className="max-w-4xl mx-auto px-4 space-y-8">

                    {/* Heading */}
                    <h1 className="text-4xl font-bold text-primary">
                        Education
                    </h1>

                    {/* Education Cards */}
                    {education.map((item) => (
                        <div
                            key={item.degree}
                            className="border border-gray-800 rounded-xl p-6 space-y-2"
                        >
                            <h2 className="text-2xl font-semibold">
                                {item.degree}
                            </h2>

                            <p className="text-gray-400">
                                {item.institution}
                            </p>

                            <p className="text-sm text-gray-500">
                                {item.year}
                            </p>

                            <p className="text-gray-400 pt-2">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>
            </FramerWrapper>
        </section>
    )
}
