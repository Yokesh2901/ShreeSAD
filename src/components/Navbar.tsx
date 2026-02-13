"use strict";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { companyData } from "@/data/companyData";
import { Menu, X, Phone } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(11, 11, 11, 0)", "rgba(11, 11, 11, 0.9)"]
    );

    const backdropBlur = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(12px)"]
    );

    const borderBottom = useTransform(
        scrollY,
        [0, 100],
        ["1px solid rgba(110, 110, 110, 0)", "1px solid rgba(110, 110, 110, 0.2)"]
    );

    return (
        <motion.nav
            style={{ backgroundColor, backdropFilter: backdropBlur, borderBottom }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex flex-col">
                        <span className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tighter">
                            SHREE <span className="text-accent-orange">SRINIVASA</span>
                        </span>
                        <span className="text-[10px] font-body text-metal-grey uppercase tracking-[0.2em] -mt-1">
                            Aluminium Designs
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/70 hover:text-accent-orange transition-colors duration-200 uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={`tel:${companyData.phone}`}
                            className="flex items-center space-x-2 bg-accent-orange/10 border border-accent-orange/30 px-4 py-2 text-accent-orange hover:bg-accent-orange hover:text-white transition-all duration-300 rounded-sm"
                        >
                            <Phone size={16} />
                            <span className="text-sm font-bold uppercase tracking-tighter">{companyData.phone}</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-accent-orange focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div
                initial={false}
                animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden bg-base-dark border-b border-metal-grey/20"
            >
                <div className="px-4 pt-2 pb-6 space-y-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-4 text-lg font-medium text-white hover:text-accent-orange border-b border-white/5 last:border-0"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={`tel:${companyData.phone}`}
                        className="flex items-center justify-center space-x-2 bg-accent-orange text-white py-4 mt-4 rounded-sm"
                    >
                        <Phone size={20} />
                        <span className="text-lg font-bold uppercase">{companyData.phone}</span>
                    </a>
                </div>
            </motion.div>
        </motion.nav>
    );
};
