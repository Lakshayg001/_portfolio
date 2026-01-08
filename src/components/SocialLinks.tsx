import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function SocialLinks() {
    return (
        <div className="flex justify-center gap-6 pt-4">
            <Link href="https://github.com/" target="_blank">
                <Github className="hover:text-primary transition" />
            </Link>

            <Link href="https://linkedin.com/" target="_blank">
                <Linkedin className="hover:text-primary transition" />
            </Link>

            <Link href="mailto:example@gmail.com">
                <Mail className="hover:text-primary transition" />
            </Link>
        </div>
    )
}
