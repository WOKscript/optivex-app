import React from 'react';

const Pricing = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="px-6 lg:px-12 py-20 bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Web System Development
            </div>
            <h1 className="text-white text-5xl lg:text-7xl font-black tracking-tight mb-8">
                Plans for Every <span className="text-primary italic">Stage</span>.
            </h1>
            <p className="text-white/70 text-lg lg:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
                Whether you have a fixed scope or need flexibility to evolve your system, we have a plan that fits your needs.
            </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="px-6 lg:px-12 py-12" id="pricing">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. BASIC Plan */}
            <div className="bg-slate-surface border border-slate-border rounded-3xl p-8 flex flex-col hover:border-primary/50 transition-all duration-300 group">
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-2">BASIC Plan</h3>
                    <p className="text-white/50 text-sm">For clients who already know exactly what they want.</p>
                </div>
                <div className="mb-10">
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-white">₱</span>
                        <span className="text-6xl font-black text-white">25,000</span>
                    </div>
                    <p className="text-white/40 text-xs mt-2">Fixed Scope</p>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                    <li className="flex items-start gap-3 text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">description</span>
                        <span className="text-sm">Based strictly on provided docs</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                        <span className="text-sm">Agreed features only</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">add_circle</span>
                        <span className="text-sm">Up to 3 additional features</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">edit</span>
                        <span className="text-sm">Up to 3 revisions</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/40">
                        <span className="material-symbols-outlined text-xl mt-0.5">cancel</span>
                        <span className="text-sm">Deployment not included</span>
                    </li>
                </ul>
                <button className="w-full py-4 rounded-xl border border-primary/30 text-primary font-bold hover:bg-primary hover:text-background-dark transition-all">
                    Get Basic Plan
                </button>
            </div>

            {/* 2. PREMIUM Plan */}
            <div className="bg-slate-surface border-2 border-primary rounded-3xl p-8 flex flex-col relative emerald-glow transform md:-translate-y-4">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background-dark px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                    Best Value
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-2">PREMIUM Plan</h3>
                    <p className="text-white/50 text-sm">For clients who want flexibility and full support.</p>
                </div>
                <div className="mb-10">
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-white">₱</span>
                        <span className="text-6xl font-black text-white">35,000</span>
                    </div>
                    <p className="text-primary text-xs mt-2 font-bold">Flexible Scope</p>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                    <li className="flex items-start gap-3 text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">all_inclusive</span>
                        <span className="text-sm font-semibold">Unlimited revisions</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">playlist_add</span>
                        <span className="text-sm">Unlimited feature changes</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">rocket_launch</span>
                        <span className="text-sm">Free deployment & setup</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">build</span>
                        <span className="text-sm">Maintenance & minor fixes included</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">update</span>
                        <span className="text-sm">System updates included</span>
                    </li>
                </ul>
                <button className="w-full py-4 rounded-xl bg-primary text-background-dark font-bold hover:brightness-110 transition-all">
                    Go Premium
                </button>
            </div>

             {/* 3. CUSTOM Plan */}
             <div className="bg-slate-surface border border-slate-border rounded-3xl p-8 flex flex-col hover:border-primary/50 transition-all duration-300 group">
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-2">CUSTOM Plan</h3>
                    <p className="text-white/50 text-sm">For clients who don’t know exactly what they need yet.</p>
                </div>
                <div className="mb-10">
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-white">On Quotation</span>
                    </div>
                    <p className="text-white/40 text-xs mt-2">Analysis Included</p>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                    <li className="flex items-start gap-3 text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">analytics</span>
                        <span className="text-sm">Full System Analysis</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">design_services</span>
                        <span className="text-sm">Workflow & Database Design</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">receipt_long</span>
                        <span className="text-sm">Free Quotation after planning</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">groups</span>
                        <span className="text-sm">Best for Organizations/Big Systems</span>
                    </li>
                </ul>
                <button className="w-full py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
                    Request Consultation
                </button>
            </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="px-6 lg:px-12 py-24 bg-background-dark/50" id="comparison">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Difference</h2>
                <h3 className="text-white text-4xl font-black">Plan Comparison</h3>
            </div>
            <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="border-b border-slate-border">
                            <th className="py-6 px-4 text-white font-bold text-lg">Feature</th>
                            <th className="py-6 px-4 text-white/60 font-medium">Basic (₱25k)</th>
                            <th className="py-6 px-4 text-primary font-bold">Premium (₱35k)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-border/50">
                        <tr className="hover:bg-white/5 transition-colors">
                            <td className="py-6 px-4 text-white font-medium">System Scope</td>
                            <td className="py-6 px-4 text-white/60">Fixed</td>
                            <td className="py-6 px-4 text-primary font-bold">Flexible</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                            <td className="py-6 px-4 text-white font-medium">Feature Additions</td>
                            <td className="py-6 px-4 text-white/60">Up to 3</td>
                            <td className="py-6 px-4 text-white">Unlimited</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                            <td className="py-6 px-4 text-white font-medium">Revisions (Flow/Behavior)</td>
                            <td className="py-6 px-4 text-white/60">Up to 3</td>
                            <td className="py-6 px-4 text-white">Unlimited</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                            <td className="py-6 px-4 text-white font-medium">Bug Fixes</td>
                            <td className="py-6 px-4 text-primary"><span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check</span> Included</span></td>
                            <td className="py-6 px-4 text-primary"><span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check</span> Included</span></td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                            <td className="py-6 px-4 text-white font-medium">Deployment</td>
                            <td className="py-6 px-4 text-white/40"><span className="material-symbols-outlined text-white/20">close</span></td>
                            <td className="py-6 px-4 text-white">Included (Free)</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                            <td className="py-6 px-4 text-white font-medium">System Updates</td>
                            <td className="py-6 px-4 text-white/40"><span className="material-symbols-outlined text-white/20"></span>Included (Up to 1 month after deployment)</td>
                            <td className="py-6 px-4 text-white">Included (Up to 6 months after deployment)</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                            <td className="py-6 px-4 text-white font-medium">Maintenance & Extensions</td>
                            <td className="py-6 px-4 text-white/40"><span className="material-symbols-outlined text-white/20"></span>Included (Up to 1 month after deployment)</td>
                            <td className="py-6 px-4 text-white">Included (Up to 6 months after deployment)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="px-6 lg:px-12 py-24" id="contact">
        <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-surface to-background-dark border border-slate-border rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
                <div className="absolute -top-32 -right-32 size-80 bg-primary/10 blur-[120px] rounded-full"></div>
                <div className="relative z-10 text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Start Your Project</h2>
                    <p className="text-white/60 max-w-xl mx-auto">Not sure which plan fits? Send us a message and we'll help you decide.</p>
                </div>
                <form className="relative z-10 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                            <input className="w-full bg-background-dark/50 border border-slate-border rounded-xl px-4 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white" placeholder="John Doe" type="text"/>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Work Email</label>
                            <input className="w-full bg-background-dark/50 border border-slate-border rounded-xl px-4 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white" placeholder="john@company.com" type="email"/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Preferred Plan</label>
                        <select className="w-full bg-background-dark/50 border border-slate-border rounded-xl px-4 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white appearance-none">
                            <option>Basic Plan (₱25k)</option>
                            <option>Premium Plan (₱35k)</option>
                            <option>Custom Plan (Quotation)</option>
                            <option>I'm not sure yet</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Project Details</label>
                        <textarea className="w-full bg-background-dark/50 border border-slate-border rounded-xl px-4 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white h-32" placeholder="Tell us about your system requirements..."></textarea>
                    </div>
                    <button className="w-full bg-primary text-background-dark font-black py-5 rounded-2xl text-lg hover:scale-[1.02] active:scale-95 transition-all emerald-glow">
                        Send Request
                    </button>
                </form>
            </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;