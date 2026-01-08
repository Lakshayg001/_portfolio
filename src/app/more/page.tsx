"use client"

import FramerWrapper from "@/components/animation/FramerWrapper"

const achievements = [
    "Solved 500+ DSA problems on LeetCode",
    "Built multiple full-stack projects using MERN stack",
    "Actively contributing to open-source projects",
]

const interests = [
    "Problem Solving & DSA",
    "System Design",
    "UI/UX Design",
    "Startup & Tech Blogging",
]

export default function MorePage() {
    return (
        <section className="min-h-screen flex items-center">
            <FramerWrapper>
                <div className="max-w-5xl mx-auto px-4 space-y-10">

                    {/* Heading */}
                    <h1 className="text-4xl font-bold text-primary">
                        More About Me
                    </h1>

                    {/* Achievements */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            Achievements
                        </h2>

                        <ul className="space-y-2 text-gray-400 list-disc list-inside">
                            {achievements.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Interests */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            Interests
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {interests.map((interest) => (
                                <span
                                    key={interest}
                                    className="px-4 py-2 border border-gray-700 rounded-full text-sm"
                                >
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </FramerWrapper>
        </section>
    )
}
