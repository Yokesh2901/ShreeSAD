"use client";

import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface AluminiumScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
    source: string;
}

export const AluminiumScrollCanvas: React.FC<AluminiumScrollCanvasProps> = ({
    scrollYProgress,
    source,
}) => {
    // Cinematic transitions driven by scroll
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.3]);
    const blurValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0, 4, 10]);
    const blur = useTransform(blurValue, (v) => `blur(${v}px)`);
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-base-dark">
            {/* Background Hero Asset */}
            <motion.div
                style={{ scale, opacity, filter: blur, y }}
                className="relative w-full h-full flex items-center justify-center"
            >
                <img
                    src={source}
                    alt="Cinematic Aluminium Fabrication"
                    className="w-full h-full object-cover opacity-60"
                />

                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
            </motion.div>

            {/* Industrial Scanlines Effect */}
            <div className="absolute inset-0 z-10 px-4 pointer-events-none opacity-20">
                <div className="w-full h-full border-x border-white/10" />
            </div>

            {/* Accessibility Hidden Description */}
            <div className="sr-only">
                Cinematic visual showing the progression of aluminium fabrication at Shree Srinivasa Aluminium Designs.
            </div>

            <style jsx>{`
        .bg-radial-vignette {
          background: radial-gradient(circle, transparent 20%, rgba(11, 11, 11, 0.8) 100%);
        }
      `}</style>
        </div>
    );
};
