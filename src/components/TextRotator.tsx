"use client"

import { useEffect, useState } from "react"

type Props = {
    texts: string[]
}

export default function TextRotator({ texts }: Props) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [texts.length])

    return (
        <h2 className="text-xl md:text-2xl text-primary font-semibold h-8">
            {texts[index]}
        </h2>
    )
}
