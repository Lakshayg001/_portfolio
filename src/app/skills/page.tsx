// "use client"

// import FramerWrapper from "@/components/animation/FramerWrapper"

// const skills = {
//     frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
//     backend: ["Node.js", "Express.js"],
//     database: ["MongoDB"],
//     tools: ["Git", "GitHub", "Postman", "VS Code"],
// }

// export default function SkillsPage() {
//     return (
//         <section className="min-h-screen flex items-center">
//             <FramerWrapper>
//                 <div className="max-w-5xl mx-auto px-4 space-y-10">

//                     {/* Heading */}
//                     <h1 className="text-4xl font-bold text-primary">
//                         Skills
//                     </h1>

//                     {/* Skill Sections */}
//                     {Object.entries(skills).map(([category, items]) => (
//                         <div key={category}>
//                             <h2 className="text-2xl font-semibold capitalize mb-4">
//                                 {category}
//                             </h2>

//                             <div className="flex flex-wrap gap-3">
//                                 {items.map((skill) => (
//                                     <span
//                                         key={skill}
//                                         className="px-4 py-2 border border-gray-700 rounded-full text-sm hover:border-primary transition"
//                                     >
//                                         {skill}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}

//                 </div>
//             </FramerWrapper>
//         </section>
//     )
// }

import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFooter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const SkillsPage = () => {
    return (
        // SKILLS PAGE
        <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge variant="secondary" className="gap-1.5 py-1 ">
                <LightbulbIcon className="w-4 h-4" />
                My Skills
            </Badge>
            <div className="flex flex-col gap-3">
                <Heading>My Technical Experience/Skills.</Heading>
                <FramerWrapper y={0} x={200}>
                    <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
                        Currently i am a fresher and i have a solid understand of HTML5,
                        CSS3, JS, TS and React, including responsive design principles. I
                        specialize in building web applications and sites using Javascript,
                        Typescript, React, Nextjs & Node.
                    </p>
                </FramerWrapper>
                <FramerWrapper y={100} delay={0.3} className="block w-full">
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        Programming Languages
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={portfolioConfig.skills.programmingLanguages} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block w-full" y={100} delay={0.32}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        Framework/Libraries
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={portfolioConfig.skills.frameworks} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block w-full" y={100} delay={0.34}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        Tools & Technologies
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={portfolioConfig.skills.tools} />
                    </div>
                </FramerWrapper>
            </div>
        </div>
    );
};

export default SkillsPage;
