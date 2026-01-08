"use client"

import FramerWrapper from "@/components/animation/FramerWrapper"

export default function ContactPage() {
    return (
        <section className="min-h-screen flex items-center">
            <FramerWrapper>
                <div className="max-w-4xl mx-auto px-4 space-y-8">

                    {/* Heading */}
                    <h1 className="text-4xl font-bold text-primary">
                        Contact
                    </h1>

                    {/* Message */}
                    <p className="text-gray-400">
                        Have a project idea, internship opportunity, or just want to
                        connect? Feel free to reach out.
                    </p>

                    {/* Contact Form */}
                    <form className="space-y-4 max-w-md">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                        />

                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                        />

                        <button
                            type="submit"
                            className="px-6 py-2 bg-primary text-black rounded-lg hover:opacity-90 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Email */}
                    <p className="text-sm text-gray-500">
                        Or email me at: <span className="text-primary">example@gmail.com</span>
                    </p>

                </div>
            </FramerWrapper>
        </section>
    )
}
