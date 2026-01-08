
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const SocialLinks = () => {
    return (
        <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" className="hover:text-gray-600 transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
            </Link>
        </div>
    );
};

export default SocialLinks;
