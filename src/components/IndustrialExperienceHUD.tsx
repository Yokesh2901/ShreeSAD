"use client";

import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { companyData } from "@/data/companyData";

interface IndustrialExperienceHUDProps {
    scrollYProgress: MotionValue<number>;
}

export const IndustrialExperienceHUD: React.FC<IndustrialExperienceHUDProps> = ({
    scrollYProgress,
}) => {
    // Phase 1: Legacy (0% - 25%)
    const legacyOpacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
    const legacyScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.1]);

    // Phase 2: Installation (25% - 70%)
    const installationOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.65, 0.7], [0, 1, 1, 0]);

    // Specific Captions within Installation Phase
    const windowOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
    const acpOpacity = useTransform(scrollYProgress, [0.45, 0.5, 0.6, 0.65], [0, 1, 1, 0]);
    const glassOpacity = useTransform(scrollYProgress, [0.6, 0.65, 0.7, 0.75], [0, 1, 1, 0]);

    // Phase 3: Final Reveal (70% - 100%)
    const finalOpacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);
    const finalY = useTransform(scrollYProgress, [0.7, 0.8], [50, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center items-center px-4 overflow-hidden">

            {/* Decorative Grid Lines / HUD Elements */}
            <div className="absolute inset-0 border-[20px] border-white/5 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-20 w-[1px] bg-accent-orange/30" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-20 w-[1px] bg-accent-orange/30" />

            {/* HUD CAPTIONS - LEFT */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8">
                <div className="space-y-1">
                    <div className="h-[1px] w-8 bg-accent-orange" />
                    <p className="text-[10px] text-metal-grey font-body uppercase tracking-[0.2em]">Coordinates</p>
                    <p className="text-xs text-white font-heading">13.0827° N, 80.2707° E</p>
                </div>
                <div className="space-y-1">
                    <div className="h-[1px] w-8 bg-metal-grey/30" />
                    <p className="text-[10px] text-metal-grey font-body uppercase tracking-[0.2em]">Material-ID</p>
                    <p className="text-xs text-white font-heading">AL-6063 T6</p>
                </div>
            </div>

            {/* PHASE 1: LEGACY */}
            <motion.div
                style={{ opacity: legacyOpacity, scale: legacyScale }}
                className="text-center max-w-4xl"
            >
                <span className="inline-block text-accent-orange font-heading text-sm tracking-[0.4em] mb-4">ESTABLISHED 1994</span>
                <h1 className="text-5xl md:text-8xl font-black leading-none mb-6">
                    {companyData.experience} <br />
                    <span className="text-metal-grey">CRAFTSMANSHIP</span>
                </h1>
                <p className="text-lg md:text-xl text-white/50 font-body uppercase tracking-[0.3em]">
                    PRECISION ALUMINIUM FABRICATION
                </p>
            </motion.div>

            {/* PHASE 2: INSTALLATION HUD */}
            <motion.div
                style={{ opacity: installationOpacity }}
                className="absolute bottom-20 left-10 right-10 flex flex-col items-center"
            >
                <div className="w-full max-w-6xl flex justify-between items-end border-b border-white/10 pb-4">
                    <div className="space-y-2">
                        <span className="block text-[10px] text-accent-orange font-heading tracking-widest uppercase">System Status</span>
                        <div className="flex gap-2">
                            <div className="w-1 h-1 bg-accent-orange rounded-full animate-pulse" />
                            <span className="text-xs text-white font-body uppercase tracking-tighter">Structural Alignment Active</span>
                        </div>
                    </div>

                    <div className="text-right">
                        <motion.span style={{ opacity: windowOpacity }} className="text-2xl md:text-4xl font-heading text-white block">WINDOW INSTALLATION</motion.span>
                        <motion.span style={{ opacity: acpOpacity }} className="text-2xl md:text-4xl font-heading text-white absolute bottom-4 right-0">ACP CLADDING</motion.span>
                        <motion.span style={{ opacity: glassOpacity }} className="text-2xl md:text-4xl font-heading text-white absolute bottom-4 right-0">GLASS CURTAIN WALL</motion.span>
                    </div>
                </div>
            </motion.div>

            {/* PHASE 3: FINAL REVEAL */}
            <motion.div
                style={{ opacity: finalOpacity, y: finalY }}
                className="text-center bg-base-dark/80 backdrop-blur-md p-10 border border-white/10"
            >
                <h2 className="text-4xl md:text-7xl font-bold mb-4">
                    {companyData.projects}
                </h2>
                <p className="text-xl md:text-2xl text-accent-orange font-body tracking-[0.3em] uppercase">
                    PROJECTS COMPLETED ACROSS CHENNAI
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <div className="w-32 h-[1px] bg-metal-grey/30 mt-4" />
                    <span className="text-[10px] text-metal-grey font-heading uppercase py-2">Verified Reliability</span>
                    <div className="w-32 h-[1px] bg-metal-grey/30 mt-4" />
                </div>
            </motion.div>

        </div>
    );
};
