"use client";

import React from "react";
import { motion } from "framer-motion";

type FramerWrapperProps = {
    children: React.ReactNode;
    className?: string;
    y?: number;
    x?: number;
    duration?: number;
    delay?: number;
    scale?: number;
}

const FramerWrapper = ({
    children,
    className,
    y = 10,
    x = 0,
    duration = 0.5,
    delay = 0,
    scale = 1
}: FramerWrapperProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: y, x: x, scale: scale }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: duration, delay: delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FramerWrapper;
