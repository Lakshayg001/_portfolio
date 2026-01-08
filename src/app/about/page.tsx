"use client"

import FramerWrapper from "@/components/animation/FramerWrapper"

export default function AboutPage() {
    return (
        <section className="min-h-screen flex items-center">
            <FramerWrapper>
                <div className="max-w-4xl mx-auto px-4 space-y-6">

                    {/* Heading */}
                    <h1 className="text-4xl font-bold text-primary">
                        About Me
                    </h1>

                    {/* Intro */}
                    <p className="text-gray-300">
                        I am a passionate Frontend Developer with strong experience in
                        building responsive, scalable, and user-friendly web applications.
                    </p>

                    {/* Details */}
                    <p className="text-gray-400">
                        Currently, I focus on the MERN stack and Next.js, creating modern
                        web interfaces using Tailwind CSS and component-driven development.
                        I enjoy turning complex problems into simple and elegant solutions.
                    </p>

                    <p className="text-gray-400">
                        I am continuously improving my DSA and system design skills to
                        become a well-rounded software engineer and contribute effectively
                        to fast-growing startups.
                    </p>

                </div>
            </FramerWrapper>
        </section>
    )
}
