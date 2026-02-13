"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { AluminiumVideoScrub } from "@/components/AluminiumVideoScrub";
import { IndustrialExperienceHUD } from "@/components/IndustrialExperienceHUD";
import { companyData } from "@/data/companyData";
import { MapPin, Phone, Mail, Clock, Shield, Award, Users } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": companyData.name,
    "image": `https://shreesad.com${companyData.projectsList[0].image}`,
    "telephone": `+91 ${companyData.phone}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyData.location,
      "addressLocality": companyData.location.split(",")[0],
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "url": "https://shreesad.com",
    "description": companyData.description,
    "openingHours": "Mo-Sa 09:00-19:00"
  };

  return (
    <main className="bg-base-dark text-white selection:bg-accent-orange selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* MASTER SCROLL SEQUENCE */}
      <section ref={containerRef} className="h-[450vh] relative">
        <AluminiumVideoScrub
          scrollYProgress={scrollYProgress}
          source="/hero-animation.webp"
        />
        <IndustrialExperienceHUD scrollYProgress={scrollYProgress} />
      </section>

      {/* CONTENT SECTIONS */}
      <div className="relative z-20 bg-base-dark">
        {/* About Section */}
        <section id="about" className="py-32 px-4 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <header>
                <span className="text-accent-orange font-heading text-sm tracking-[0.3em] mb-4 block underline decoration-accent-orange/30 decoration-2 underline-offset-8">OUR LEGACY</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight uppercase">
                  30 YEARS OF <br />
                  <span className="text-metal-grey italic">STRUCTURAL EXCELLENCE</span>
                </h2>
                <div className="space-y-6 text-lg text-white/70 font-body leading-relaxed max-w-xl">
                  <p>
                    Since 1994, Shree Srinivasa Aluminium Designs has been at the forefront of Tamil Nadu's architectural landscape. We started with a simple vision: to provide precision-engineered aluminium solutions that stand the test of time.
                  </p>
                  <p>
                    Today, with over 300 completed projects, we are trusted by industrial leaders and homeowners alike for our commitment to quality, durability, and masterful craftsmanship.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-12 border-t border-white/5 pt-12">
                  <div className="border-l-2 border-accent-orange pl-4 hover:bg-white/5 transition-colors p-4">
                    <p className="text-3xl font-heading font-bold text-white">30+</p>
                    <p className="text-[10px] text-metal-grey uppercase tracking-widest mt-1">Years experience</p>
                  </div>
                  <div className="border-l-2 border-accent-orange pl-4 hover:bg-white/5 transition-colors p-4">
                    <p className="text-3xl font-heading font-bold text-white">300+</p>
                    <p className="text-[10px] text-metal-grey uppercase tracking-widest mt-1">Projects done</p>
                  </div>
                </div>
              </header>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <article className="bg-white/5 p-8 border border-white/10 aspect-square flex flex-col justify-center items-center text-center group hover:bg-white/10 transition-colors">
                    <Shield className="text-accent-orange mb-4 group-hover:scale-110 transition-transform" size={40} />
                    <h3 className="text-xs font-heading font-semibold tracking-wider">Certified Quality</h3>
                  </article>
                  <article className="bg-white/5 p-8 border border-white/10 aspect-square flex flex-col justify-center items-center text-center group hover:bg-white/10 transition-colors">
                    <Award className="text-accent-orange mb-4 group-hover:scale-110 transition-transform" size={40} />
                    <h3 className="text-xs font-heading font-semibold tracking-wider">Industry Leaders</h3>
                  </article>
                </div>
                <div className="space-y-4 mt-8">
                  <article className="bg-white/5 p-8 border border-white/10 aspect-square flex flex-col justify-center items-center text-center group hover:bg-white/10 transition-colors">
                    <Users className="text-accent-orange mb-4 group-hover:scale-110 transition-transform" size={40} />
                    <h3 className="text-xs font-heading font-semibold tracking-wider">Expert team</h3>
                  </article>
                  <article className="bg-white/5 p-8 border border-white/10 aspect-square flex flex-col justify-center items-center text-center group hover:bg-white/10 transition-colors">
                    <Clock className="text-accent-orange mb-4 group-hover:scale-110 transition-transform" size={40} />
                    <h3 className="text-xs font-heading font-semibold tracking-wider">Timely delivery</h3>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-4 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-accent-orange font-heading text-sm tracking-[0.3em] mb-4 block underline decoration-accent-orange/30 decoration-2 underline-offset-8">OUR CAPABILITIES</span>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">INDUSTRIAL SOLUTIONS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden">
              {companyData.services.map((service, idx) => (
                <article key={idx} className="bg-base-dark p-10 hover:bg-white/5 transition-all group relative">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-accent-orange group-hover:h-full transition-all duration-500" />
                  <span className="block text-accent-orange/30 font-heading text-4xl mb-6 group-hover:text-accent-orange transition-colors">0{idx + 1}</span>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-wide group-hover:translate-x-2 transition-transform">{service.title}</h3>
                  <p className="text-white/50 font-body leading-relaxed text-sm">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-4 border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="text-accent-orange font-heading text-sm tracking-[0.3em] mb-4 block underline decoration-accent-orange/30 decoration-2 underline-offset-8">PORTFOLIO</span>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">SELECTED WORKS</h2>
              </div>
              <p className="text-metal-grey font-body max-w-md text-sm uppercase tracking-widest leading-relaxed">
                A showcase of our precision-engineered aluminium installations across industrial and commercial sectors in {companyData.location.split(",")[0]}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyData.projectsList.map((project, idx) => (
                <article key={idx} className="group relative aspect-[16/10] overflow-hidden border border-white/10 bg-neutral-900">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category} in ${project.location}`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-base-dark to-transparent translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-accent-orange font-heading text-[10px] tracking-widest uppercase mb-2 block">{project.category}</span>
                        <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-accent-orange transition-colors">{project.title}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-metal-grey font-body uppercase tracking-[0.2em] mb-1">{project.location}</p>
                        <div className="h-[1px] w-12 bg-accent-orange/50 ml-auto" />
                      </div>
                    </div>
                  </div>

                  {/* Industrial HUD elements on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                    <div className="w-10 h-10 flex items-center justify-center border border-white/30 text-white font-heading text-[10px] bg-base-dark/50 backdrop-blur-sm">
                      P_{idx + 1}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="group relative overflow-hidden border border-white/10 px-12 py-5 font-heading text-xs tracking-[0.3em] hover:text-base-dark transition-colors duration-500 uppercase">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-base-dark">View All Projects (300+)</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-4 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#141414] p-8 md:p-20 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/5 blur-[100px]" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                <div>
                  <header>
                    <span className="text-accent-orange font-heading text-sm tracking-[0.3em] mb-4 block">CONNECT</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight">INITIATE PROJECT</h2>
                  </header>
                  <p className="font-body text-white/50 text-lg mb-12 max-w-lg leading-relaxed">
                    Ready to elevate your architectural design with precision-fabricated aluminium? Get in touch with our experts today for a free consultation and project quota.
                  </p>

                  <div className="space-y-6">
                    <address className="not-italic space-y-6">
                      <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-accent-orange group-hover:bg-accent-orange/10 transition-all">
                          <Phone className="text-accent-orange" size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] text-metal-grey uppercase tracking-widest">Call our experts</p>
                          <a href={`tel:+91${companyData.phone}`} className="text-lg font-heading hover:text-accent-orange transition-colors">+91 {companyData.phone}</a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-accent-orange group-hover:bg-accent-orange/10 transition-all">
                          <MapPin className="text-accent-orange" size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] text-metal-grey uppercase tracking-widest">HQ Location</p>
                          <p className="text-lg font-heading">{companyData.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-accent-orange group-hover:bg-accent-orange/10 transition-all">
                          <Mail className="text-accent-orange" size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] text-metal-grey uppercase tracking-widest">Official Inquiry</p>
                          <a href={`mailto:${companyData.email}`} className="text-lg font-heading uppercase hover:text-accent-orange transition-colors">{companyData.email}</a>
                        </div>
                      </div>
                    </address>
                  </div>
                </div>

                <form className="space-y-6 bg-white/[0.02] p-8 md:p-12 border border-white/5 backdrop-blur-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] text-metal-grey uppercase tracking-widest" htmlFor="full-name">Full Name</label>
                      <input id="full-name" name="name" type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent-orange outline-none transition-all font-body text-white placeholder:text-white/10" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-metal-grey uppercase tracking-widest" htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent-orange outline-none transition-all font-body text-white placeholder:text-white/10" placeholder="+91 ..." required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-metal-grey uppercase tracking-widest" htmlFor="project-type">Project Type</label>
                    <select id="project-type" name="type" className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent-orange outline-none transition-all font-body text-white/50">
                      <option>Window Installation</option>
                      <option>ACP Cladding</option>
                      <option>Glass Curtain Wall</option>
                      <option>Office Partition</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-metal-grey uppercase tracking-widest" htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={4} className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent-orange outline-none transition-all font-body text-white placeholder:text-white/10 resize-none" placeholder="Tell us about your architectural requirements..." required></textarea>
                  </div>
                  <button type="submit" className="group relative w-full bg-accent-orange overflow-hidden py-5 px-8 transition-all">
                    <span className="relative z-10 text-white font-heading font-bold uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">Send Inquiry</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                  </button>
                </form>
              </div>
            </div>

            <footer className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-metal-grey font-heading tracking-[0.2em] border-t border-white/5 pt-10">
              <p>© {new Date().getFullYear()} {companyData.name}. ALL RIGHTS RESERVED.</p>
              <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                <p className="text-white/30">GSTIN: <span className="text-white/60">{companyData.gstin}</span></p>
                <a href="#" className="hover:text-white transition-colors">TERMS & CONDITIONS</a>
                <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
              </nav>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
