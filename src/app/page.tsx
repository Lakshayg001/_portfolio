"use client"

import FramerWrapper from "@/components/animation/FramerWrapper"
import TextRotator from "@/components/TextRotator"
import SocialLinks from "../components/SocialLinks"
export default function HomePage() {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <FramerWrapper>
                <div className="max-w-4xl mx-auto px-4 text-center space-y-6">

                    {/* Name */}
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Hi, I’m <span className="text-primary">Lakshay Goel</span>
                    </h1>

                    {/* Rotating Text */}
                    <TextRotator
                        texts={[
                            "Frontend Developer",
                            "MERN Stack Developer",
                            "Next.js Enthusiast",
                        ]}
                    />

                    {/* Description */}
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I build modern, scalable, and high-performance web applications
                        using React, Next.js, and Tailwind CSS.
                    </p>

                    {/* Social Links */}
                    <SocialLinks />

                </div>
            </FramerWrapper>
        </section>
    )
}
