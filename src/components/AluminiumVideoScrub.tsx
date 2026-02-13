"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface AluminiumVideoScrubProps {
    scrollYProgress: MotionValue<number>;
    source: string;
}

export const AluminiumVideoScrub: React.FC<AluminiumVideoScrubProps> = ({
    scrollYProgress,
    source,
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isImage, setIsImage] = useState(false);

    // Check if source is an image/webp or video
    useEffect(() => {
        if (source.endsWith(".webp") || source.endsWith(".jpg") || source.endsWith(".png")) {
            setIsImage(true);
        } else {
            setIsImage(false);
        }
    }, [source]);

    // Video Scrubbing Logic
    useEffect(() => {
        if (isImage) return;

        const video = videoRef.current;
        if (!video) return;

        const handleLoadedMetadata = () => {
            video.pause();
        };

        video.addEventListener("loadedmetadata", handleLoadedMetadata);

        const unsubscribe = scrollYProgress.on("change", (progress) => {
            if (video.duration && !isNaN(video.duration)) {
                // Scrub the video
                video.currentTime = progress * video.duration;
            }
        });

        return () => {
            unsubscribe();
            video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        };
    }, [scrollYProgress, isImage]);

    // Cinematic Image Transitions (Fallback for WebP)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const blurValue = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 10]);
    const blur = useTransform(blurValue, (v) => `blur(${v}px)`);
    const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.7, 0.7, 0.2]);

    return (
        <div className="sticky top-0 w-full h-screen overflow-hidden bg-base-dark flex items-center justify-center">
            {isImage ? (
                <motion.img
                    src={source}
                    alt="Cinematic Aluminium Fabrication"
                    style={{ scale, filter: blur, opacity }}
                    className="w-full h-full object-cover"
                />
            ) : (
                <video
                    ref={videoRef}
                    src={source}
                    playsInline
                    muted
                    className="w-full h-full object-cover opacity-70"
                    style={{ pointerEvents: "none" }}
                />
            )}

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
            <div className="absolute inset-0 z-10 px-4 pointer-events-none opacity-20">
                <div className="w-full h-full border-x border-white/10" />
            </div>

            {/* Progress Line (HUD Element) */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/5 overflow-hidden z-20">
                <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="h-full bg-accent-orange origin-left"
                />
                <div className="absolute top-2 left-0 w-full text-[8px] text-metal-grey font-heading uppercase flex justify-between">
                    <span>0%</span>
                    <span>Load Sequence</span>
                    <span>100%</span>
                </div>
            </div>

            <style jsx>{`
        .bg-radial-vignette {
          background: radial-gradient(circle, transparent 20%, rgba(11, 11, 11, 0.9) 100%);
        }
      `}</style>
        </div>
    );
};
