import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative px-6 lg:px-12 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl min-h-[520px] lg:min-h-[640px] flex items-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(to right, rgba(15, 23, 20, 0.95) 30%, rgba(15, 23, 20, 0.2) 100%), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")'}}></div>
            <div className="relative z-10 w-full lg:w-2/3 p-8 lg:p-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Next-Gen Infrastructure
              </div>
              <h1 className="text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
                Architecting the <span className="text-primary italic">Future</span> of Digital.
              </h1>
              <p className="text-white/70 text-lg lg:text-xl font-normal leading-relaxed mb-10 max-w-xl">
                Sophisticated IT services for enterprises that demand digital excellence. We build the backbone of tomorrow's innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/pricing" className="bg-primary text-background-dark px-8 py-4 rounded-xl text-base font-bold transition-all hover:bg-white hover:text-black">
                  Start Your Transformation
                </Link>
                <button className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl text-base font-bold transition-all hover:bg-white/20">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="px-6 lg:px-12 py-24" id="mission">
        <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center gap-12">
                <div className="space-y-4">
                    <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em]">Our Ethos</h2>
                    <h3 className="text-white text-4xl lg:text-5xl font-black italic">Purpose & Potential</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 w-full">
                    <div className="flex flex-col items-center gap-6">
                        <div className="size-20 rounded-full bg-slate-surface border border-primary/20 flex items-center justify-center text-primary emerald-glow">
                            <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-2xl font-bold tracking-tight">Mission</h4>
                            <p className="text-white/60 leading-relaxed max-w-sm mx-auto">To engineer radical digital transformations through scalable, client-centric IT architecture that empowers global industries.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <div className="size-20 rounded-full bg-slate-surface border border-primary/20 flex items-center justify-center text-primary emerald-glow">
                            <span className="material-symbols-outlined text-4xl">auto_awesome</span>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-2xl font-bold tracking-tight">Vision</h4>
                            <p className="text-white/60 leading-relaxed max-w-sm mx-auto">To become the global gold standard for enterprise-grade technology, architecting the essential infrastructure of tomorrow.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SERVICES SECTION (UPDATED) */}
      <section className="px-6 lg:px-12 py-24 bg-black/10" id="services">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Expertise</h2>
                <h3 className="text-white text-4xl lg:text-5xl font-black mb-6">Comprehensive Services</h3>
                <p className="text-white/50 max-w-2xl mx-auto">Leveraging deep industry knowledge to deliver specialized technology solutions that empower your business growth.</p>
            </div>
            {/* UPDATED TO 3 COLUMNS FOR YOUR 3 SERVICES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Service 1: Static Websites */}
                <div className="p-8 rounded-2xl border border-slate-border bg-slate-surface hover:bg-slate-surface/80 hover:border-primary/30 transition-all group">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:scale-110 transition-transform">devices</span>
                    <h4 className="text-xl font-bold mb-3">Static Websites</h4>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                        We create fast, modern, and responsive websites designed for businesses, portfolios, and company profiles. These are perfect for organizations that need a professional online presence to showcase their brand, services, and contact information in a clear and attractive way.
                    </p>
                    <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Service 2: Admin & Web Systems */}
                <div className="p-8 rounded-2xl border border-slate-border bg-slate-surface hover:bg-slate-surface/80 hover:border-primary/30 transition-all group">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:scale-110 transition-transform">admin_panel_settings</span>
                    <h4 className="text-xl font-bold mb-3">Professional Admin & Web Systems</h4>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                        We build custom web systems that help organizations manage data, users, and daily operations more efficiently. From admin dashboards to automated workflows, our systems are designed to replace manual processes, reduce errors, and support real-world business and office needs.
                    </p>
                    <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Service 3: IT Consulting */}
                <div className="p-8 rounded-2xl border border-slate-border bg-slate-surface hover:bg-slate-surface/80 hover:border-primary/30 transition-all group">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:scale-110 transition-transform">tips_and_updates</span>
                    <h4 className="text-xl font-bold mb-3">IT Consulting</h4>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                        We help clients turn ideas into practical and effective technical solutions. Whether you’re unsure what system you need or how to build it, we analyze your requirements, design the right approach, and guide you through planning, features, and implementation.
                    </p>
                    <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                </div>

            </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION (UPDATED) */}
      <section className="py-24 bg-background-dark overflow-hidden" id="projects">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Portfolio</h2>
                    <h3 className="text-white text-4xl lg:text-5xl font-black leading-tight">Featured Projects</h3>
                </div>
                <div className="flex gap-4">
                    <button className="size-14 rounded-full border border-slate-border flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all">
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button className="size-14 rounded-full border border-slate-border flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
        <div className="flex gap-8 overflow-x-auto px-6 lg:px-[calc((100vw-80rem)/2+3rem)] pb-12 custom-scrollbar snap-x">
            
            {/* Project 1 */}
            <div className="min-w-[400px] md:min-w-[600px] lg:min-w-[800px] snap-center group">
                <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden mb-8 border border-slate-border/50">
                    {/* IMAGE CHANGE HERE: */}
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("/images/storystream.png")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-10 w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Web System</span>
                            <span className="text-white/40 text-xs font-medium">• 2025</span>
                        </div>
                        <h5 className="text-white text-3xl lg:text-4xl font-black mb-4">Storystream</h5>
                        <p className="text-white/70 text-lg mb-2 max-w-xl">A journalism platform made for a certain school.</p>
                    </div>
                </div>
            </div>

             {/* Project 2 */}
             <div className="min-w-[400px] md:min-w-[600px] lg:min-w-[800px] snap-center group">
                <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden mb-8 border border-slate-border/50">
                    {/* IMAGE CHANGE HERE: */}
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("/images/Lumaframework.png")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-10 w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Framework</span>
                            <span className="text-white/40 text-xs font-medium">• 2025</span>
                        </div>
                        <h5 className="text-white text-3xl lg:text-4xl font-black mb-4">Lumaframework</h5>
                        <p className="text-white/70 text-lg mb-2 max-w-xl">A new developed framework for web systems development providing a much more effiecient development</p>
                    </div>
                </div>
            </div>

            {/* Project 3 */}
             <div className="min-w-[400px] md:min-w-[600px] lg:min-w-[800px] snap-center group">
                <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden mb-8 border border-slate-border/50">
                    {/* IMAGE CHANGE HERE: */}
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("/images/IEMS.png")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-10 w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Inventory</span>
                            <span className="text-white/40 text-xs font-medium">• 2025</span>
                        </div>
                        <h5 className="text-white text-3xl lg:text-4xl font-black mb-4">Inventory Management System (IEMS)</h5>
                        <p className="text-white/70 text-lg mb-2 max-w-xl">A comprehensive inventory management system designed to streamline operations and enhance efficiency.</p>
                    </div>
                </div>
            </div>

            {/* Project 4 */}
             <div className="min-w-[400px] md:min-w-[600px] lg:min-w-[800px] snap-center group">
                <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden mb-8 border border-slate-border/50">
                    {/* IMAGE CHANGE HERE: */}
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("/images/CateringSystem.png")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-10 w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Catering</span>
                            <span className="text-white/40 text-xs font-medium">• 2025</span>
                        </div>
                        <h5 className="text-white text-3xl lg:text-4xl font-black mb-4">Catering System</h5>
                        <p className="text-white/70 text-lg mb-2 max-w-xl">A comprehensive catering system designed to streamline operations and enhance efficiency.</p>
                    </div>
                </div>
            </div>

            {/* Project 5 */}
             <div className="min-w-[400px] md:min-w-[600px] lg:min-w-[800px] snap-center group">
                <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden mb-8 border border-slate-border/50">
                    {/* IMAGE CHANGE HERE: */}
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("/images/DPIS.png")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-10 w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Personnel</span>
                            <span className="text-white/40 text-xs font-medium">• 2025</span>
                        </div>
                        <h5 className="text-white text-3xl lg:text-4xl font-black mb-4">Digital Personnel Information System (DPIS)</h5>
                        <p className="text-white/70 text-lg mb-2 max-w-xl">A digital personnel information system designed to manage employee data efficiently.</p>
                    </div>
                </div>
            </div>

            {/* Project 6 */}
             <div className="min-w-[400px] md:min-w-[600px] lg:min-w-[800px] snap-center group">
                <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden mb-8 border border-slate-border/50">
                    {/* IMAGE CHANGE HERE: */}
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("/images/vms.png")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-10 w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Vehicle</span>
                            <span className="text-white/40 text-xs font-medium">• 2025</span>
                        </div>
                        <h5 className="text-white text-3xl lg:text-4xl font-black mb-4">Vehicle Management System (VMS)</h5>
                        <p className="text-white/70 text-lg mb-2 max-w-xl">A vehicle management system designed to track and manage company vehicles.</p>
                    </div>
                </div>
            </div>

            {/* Project 7 */}
             <div className="min-w-[400px] md:min-w-[600px] lg:min-w-[800px] snap-center group">
                <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden mb-8 border border-slate-border/50">
                    {/* IMAGE CHANGE HERE: */}
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("/images/capstonevault.png")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-10 w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Repository</span>
                            <span className="text-white/40 text-xs font-medium">• 2025</span>
                        </div>
                        <h5 className="text-white text-3xl lg:text-4xl font-black mb-4">CapstoneVault</h5>
                        <p className="text-white/70 text-lg mb-2 max-w-xl">A web application for managing capstone projects.</p>
                    </div>
                </div>
            </div>

            {/* Project 8 */}
             <div className="min-w-[400px] md:min-w-[600px] lg:min-w-[800px] snap-center group">
                <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden mb-8 border border-slate-border/50">
                    {/* IMAGE CHANGE HERE: */}
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("/images/evogolf.png")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-10 w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">E-Commerce</span>
                            <span className="text-white/40 text-xs font-medium">• 2025</span>
                        </div>
                        <h5 className="text-white text-3xl lg:text-4xl font-black mb-4">EvoGolf</h5>
                        <p className="text-white/70 text-lg mb-2 max-w-xl">An e-commerce platform for golf equipment and accessories.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* EVOLUTION SECTION (ADDED) */}
      {/* { <section className="px-6 lg:px-12 py-24 bg-slate-surface/30" id="evolution">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-3">The Journey</h2>
                <h3 className="text-white text-4xl lg:text-5xl font-black">Our Evolution</h3>
            </div>
            <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-slate-border hidden md:block"></div>
                <div className="space-y-16">
              
                    <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                        <div className="md:w-1/2 md:pr-16 text-center md:text-right">
                            <span className="text-primary font-bold text-lg mb-2 block">2021</span>
                            <h4 className="text-xl font-bold text-white mb-3">Genesis</h4>
                            <p className="text-white/60 text-sm max-w-sm ml-auto">Founded with a vision to simplify complex infrastructure for emerging startups.</p>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-primary ring-4 ring-primary/20 hidden md:block"></div>
                        <div className="md:w-1/2 md:pl-16"></div>
                    </div>
               
                    <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                        <div className="md:w-1/2 md:pr-16"></div>
                        <div className="absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-primary ring-4 ring-primary/20 hidden md:block"></div>
                        <div className="md:w-1/2 md:pl-16 text-center md:text-left">
                            <span className="text-primary font-bold text-lg mb-2 block">2022</span>
                            <h4 className="text-xl font-bold text-white mb-3">Scaling Vertically</h4>
                            <p className="text-white/60 text-sm max-w-sm">Expanded service offerings to include specialized Cybersecurity and Cloud DevOps.</p>
                        </div>
                    </div>
        
                    <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                        <div className="md:w-1/2 md:pr-16 text-center md:text-right">
                            <span className="text-primary font-bold text-lg mb-2 block">2023</span>
                            <h4 className="text-xl font-bold text-white mb-3">Global Reach</h4>
                            <p className="text-white/60 text-sm max-w-sm ml-auto">Onboarded 50+ enterprise clients across three continents, opening our second HQ.</p>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-primary ring-4 ring-primary/20 hidden md:block"></div>
                        <div className="md:w-1/2 md:pl-16"></div>
                    </div>
                </div>
            </div>
        </div>
      </section> } */}

      {/* FOUNDERS SECTION */}
      <section className="px-6 lg:px-12 py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Founders</h2>
                <h3 className="text-white text-4xl lg:text-5xl font-black">Meet Our Visionaries</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-slate-surface border border-slate-border rounded-3xl p-8 flex flex-col lg:flex-row gap-8 hover:border-primary/30 transition-all group">
                    <div className="size-32 lg:size-40 rounded-2xl overflow-hidden bg-background-dark shrink-0">
                        <img alt="Founder" className="w-full h-full object-cover" src="/public/images/cto-jp.png"/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-1">Jp Pacho</h4>
                            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Co-Founder & CTO</p>
                            <p className="text-white/60 text-sm leading-relaxed mb-6">A full-stack developer </p>
                        </div>
                        <div className="flex gap-4">
                            <a className="text-primary hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">link</span></a>
                            <a className="text-primary hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-surface border border-slate-border rounded-3xl p-8 flex flex-col lg:flex-row gap-8 hover:border-primary/30 transition-all group">
                    <div className="size-32 lg:size-40 rounded-2xl overflow-hidden bg-background-dark shrink-0">
                        <img alt="Founder" className="w-full h-full object-cover" src="/public/images/ceo-lorenz.png"/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-1">Lorenz Sabalza</h4>
                            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Co-Founder & CEO</p>
                            <p className="text-white/60 text-sm leading-relaxed mb-6">A full-stack developer</p>
                        </div>
                        <div className="flex gap-4">
                            <a className="text-primary hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">link</span></a>
                            <a className="text-primary hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-slate-surface to-background-dark border border-slate-border rounded-3xl p-12 lg:p-20 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 size-64 bg-primary/20 blur-[100px] rounded-full"></div>
                <div className="absolute -bottom-24 -left-24 size-64 bg-primary/10 blur-[100px] rounded-full"></div>
                <h2 className="text-white text-4xl lg:text-5xl font-black mb-6 relative z-10">Ready to redefine your digital horizon?</h2>
                <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                    Join the ranks of forward-thinking enterprises that trust Optivex to architect their most critical systems.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                    <button className="w-full sm:w-auto bg-primary text-background-dark px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                        Book a Strategy Call
                    </button>
                    <button className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:bg-white/10">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Home;