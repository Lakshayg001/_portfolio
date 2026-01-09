import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import FramerWrapper from "@/components/animation/FramerWrapper";

export default function Home() {
    return (
        <div className="flex flex-row justify-between items-center min-h-screen px-20 max-lg:flex-col mx-auto">
            {/* LEFT SIDE  */}
            <FramerWrapper
                className=" h-full w-auto flex flex-col justify-start gap-4"
                y={0}
                x={-100}
            >
                <HeroTexts />
                <div className="h-fit w-full p-4 flex gap-4">
                    <SocialLinks />
                </div>
                {/* <DownLoadResumeBtn /> */}
            </FramerWrapper>
            {/* RIGHT SIDE image  */}
            <FramerWrapper
                className="h-full w-[47%] relative block   max-lg:hidden"
                y={0}
                x={100}
            >
                {/* IMAGE  */}
                <HeroImage />

            </FramerWrapper>

            {/* GITHUB BUTTON  */}
            {/* <GithubBtn /> */}
        </div>
    );
}

