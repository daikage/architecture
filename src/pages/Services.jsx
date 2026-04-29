import React from 'react'

export default function Services() {
  return (
    <>
      {/* Overlay noise grain */}
      <div className="grain-overlay" />
      {/* Subtle scanlines */}
      <div className="pointer-events-none fixed inset-0 z-[90] opacity-[0.06] [background:repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_3px)]" />

      <main className="relative overflow-hidden bg-gradient-to-b from-[#0a0012] via-[#090015] to-[#01010f]">
        {/* Hero Section */}
        <section className="px-6 py-20 border-b-4 border-fuchsia-500 relative">
          <div className="absolute top-0 right-0 w-1/3 h-full border-l-4 border-cyan-400/50 opacity-30 -skew-x-12" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <p className="font-label-mono text-label-mono text-[#00fff0] mb-4">[ PROTOCOL_v4.2 ]</p>
            <h1 className="font-headline-xl text-headline-xl uppercase mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] via-white to-[#00eaff]">
              SERVICES &nbsp;&amp;&nbsp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] to-[#9d00ff]">PROTOCOLS</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <p className="font-body-lg text-body-lg max-w-xl text-on-surface">
                WE OPERATE AT THE FRINGE OF ARCHITECTURAL NECESSITY. OUR LABS ARE NOT STUDIOS; THEY
                ARE COLLISION SITES WHERE KINETICS, CODE, AND CONCRETE INTERSECT TO DEFY STATIC
                URBANISM.
              </p>
              <div className="border-4 border-fuchsia-500 p-6 bg-black/60 backdrop-blur-sm shadow-[0_0_0_3px_#ff00ff,0_0_24px_#ff00ff]">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-detail-technical text-detail-technical text-[#00eaff]">
                    CORE_STATUS: ACTIVE
                  </span>
                  <span className="font-detail-technical text-detail-technical text-fuchsia-300">
                    00101010
                  </span>
                </div>
                <div className="w-full bg-zinc-900 h-8 flex gap-1 p-1">
                  <div className="bg-[#ff00ff] w-1/6 h-full" />
                  <div className="bg-[#ff00ff] w-1/6 h-full" />
                  <div className="bg-[#ff00ff] w-1/6 h-full" />
                  <div className="bg-[#00eaff] w-1/6 h-full" />
                  <div className="bg-zinc-700 w-1/6 h-full" />
                  <div className="bg-zinc-700 w-1/6 h-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-1 bg-fuchsia-500 flex-grow shadow-[0_0_18px_#ff00ff]" />
              <h2 className="font-headline-lg text-headline-lg uppercase whitespace-nowrap text-[#e9d7ff]">
                CORE SERVICES
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="group relative border-2 border-cyan-400 bg-[#0f0b18]/70 backdrop-blur-sm p-6 hover:shadow-[0_0_24px_#00eaff] transition-all">
                <div className="flex items-start justify-between">
                  <h3 className="font-headline-md text-headline-md uppercase text-[#c8f7ff]">
                    FEASIBILITY & PRE‑DESIGN
                  </h3>
                  <span className="material-symbols-outlined text-cyan-300">travel_explore</span>
                </div>
                <p className="mt-3 text-zinc-300">
                  Site studies, zoning audits, program, and budget alignment.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[11px] uppercase px-2 py-1 border border-cyan-400/60 text-cyan-200">Zoning</span>
                  <span className="text-[11px] uppercase px-2 py-1 border border-cyan-400/60 text-cyan-200">Massing</span>
                  <span className="text-[11px] uppercase px-2 py-1 border border-cyan-400/60 text-cyan-200">Budget</span>
                </div>
              </article>

              <article className="group relative border-2 border-fuchsia-500 bg-[#0f0b18]/70 backdrop-blur-sm p-6 hover:shadow-[0_0_24px_#ff00ff] transition-all">
                <div className="flex items-start justify-between">
                  <h3 className="font-headline-md text-headline-md uppercase text-[#f9e6ff]">
                    SCHEMATIC DESIGN
                  </h3>
                  <span className="material-symbols-outlined text-fuchsia-300">schema</span>
                </div>
                <p className="mt-3 text-zinc-300">
                  Concept narratives, plans, and early performance targeting.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[11px] uppercase px-2 py-1 border border-fuchsia-500/60 text-fuchsia-200">Concept</span>
                  <span className="text-[11px] uppercase px-2 py-1 border border-fuchsia-500/60 text-fuchsia-200">Plans</span>
                  <span className="text-[11px] uppercase px-2 py-1 border border-fuchsia-500/60 text-fuchsia-200">3D</span>
                </div>
              </article>

              <article className="group relative border-2 border-[#f5e700] bg-[#141204]/80 backdrop-blur-sm p-6 hover:shadow-[0_0_24px_#f5e700] transition-all">
                <div className="flex items-start justify-between">
                  <h3 className="font-headline-md text-headline-md uppercase text-[#f5e700]">
                    DESIGN DEVELOPMENT
                  </h3>
                  <span className="material-symbols-outlined text-[#f5e700]">design_services</span>
                </div>
                <p className="mt-3 text-zinc-300">
                  Systems coordination and material decisions locked for pricing.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[11px] uppercase px-2 py-1 border border-yellow-400/60 text-yellow-200">Systems</span>
                  <span className="text-[11px] uppercase px-2 py-1 border border-yellow-400/60 text-yellow-200">Details</span>
                </div>
              </article>

              <article className="group relative border-2 border-cyan-400 bg-[#0f0b18]/70 backdrop-blur-sm p-6 hover:shadow-[0_0_24px_#00eaff] transition-all">
                <div className="flex items-start justify-between">
                  <h3 className="font-headline-md text-headline-md uppercase text-[#c8f7ff]">
                    PERMITTING & CDs
                  </h3>
                  <span className="material-symbols-outlined text-cyan-300">rule</span>
                </div>
                <p className="mt-3 text-zinc-300">
                  Code compliance, consultant set integration, and approvals.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[11px] uppercase px-2 py-1 border border-cyan-400/60 text-cyan-200">Code</span>
                  <span className="text-[11px] uppercase px-2 py-1 border border-cyan-400/60 text-cyan-200">Drawings</span>
                </div>
              </article>

              <article className="group relative border-2 border-fuchsia-500 bg-[#0f0b18]/70 backdrop-blur-sm p-6 hover:shadow-[0_0_24px_#ff00ff] transition-all">
                <div className="flex items-start justify-between">
                  <h3 className="font-headline-md text-headline-md uppercase text-[#f9e6ff]">
                    BIDDING & CA
                  </h3>
                  <span className="material-symbols-outlined text-fuchsia-300">home_repair_service</span>
                </div>
                <p className="mt-3 text-zinc-300">
                  Contractor pricing support and on‑site construction administration.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[11px] uppercase px-2 py-1 border border-fuchsia-500/60 text-fuchsia-200">RFI</span>
                  <span className="text-[11px] uppercase px-2 py-1 border border-fuchsia-500/60 text-fuchsia-200">Submittals</span>
                </div>
              </article>

              <article className="group relative border-2 border-[#f5e700] bg-[#141204]/80 backdrop-blur-sm p-6 hover:shadow-[0_0_24px_#f5e700] transition-all">
                <div className="flex items-start justify-between">
                  <h3 className="font-headline-md text-headline-md uppercase text-[#f5e700]">
                    POST‑OCCUPANCY
                  </h3>
                  <span className="material-symbols-outlined text-[#f5e700]">insights</span>
                </div>
                <p className="mt-3 text-zinc-300">
                  Tuning, commissioning feedback, and performance analytics.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[11px] uppercase px-2 py-1 border border-yellow-400/60 text-yellow-200">Tuning</span>
                  <span className="text-[11px] uppercase px-2 py-1 border border-yellow-400/60 text-yellow-200">Metrics</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 bg-[#f5e700] flex-grow shadow-[0_0_18px_#f5e700]" />
              <h2 className="font-headline-lg text-headline-lg uppercase whitespace-nowrap text-[#f5e700]">
                OUR PROCESS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {[
                ['01', 'Feasibility'],
                ['02', 'Schematic'],
                ['03', 'Dev'],
                ['04', 'Permits & CD'],
                ['05', 'CA & Post']
              ].map(([n, t]) => (
                <div
                  key={n}
                  className="relative p-4 border-2 border-zinc-600 bg-[#0b0b12]/70 hover:border-[#00eaff] hover:shadow-[0_0_18px_#00eaff] transition-all"
                >
                  <div className="text-sm text-zinc-400">STEP {n}</div>
                  <div className="font-headline-md uppercase text-white">{t}</div>
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#f5e700] border-2 border-black text-xs font-bold flex items-center justify-center">
                    {n}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Shock Section */}
        <section className="py-32 border-y-8 border-fuchsia-500 text-white overflow-hidden relative bg-gradient-to-b from-transparent via-[#0a0010] to-[#19002b]">
          <div className="absolute -right-20 top-0 text-[20rem] font-black opacity-10 leading-none select-none text-[#00eaff]">
            CORE
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline-xl text-headline-xl uppercase italic mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00eaff]">
                  BRUTAL <br />
                  PRECISION.
                </h2>
                <p className="font-body-lg text-body-lg font-bold mb-12 text-zinc-200">
                  WE DO NOT DESIGN FOR COMFORT. WE DESIGN FOR IMPACT. EVERY LINE IS A DECISION.
                  EVERY SURFACE IS A STATEMENT.
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-4 font-headline-md uppercase border-4 border-fuchsia-500 text-white bg-black/60 hover:bg-black shadow-[0_0_0_3px_#ff00ff,0_0_24px_#ff00ff] transition-colors">
                    VIEW_LOGS
                  </button>
                  <button className="px-8 py-4 font-headline-md uppercase border-4 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-colors shadow-[0_0_18px_#00eaff]">
                    DECODE
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="border-[12px] border-fuchsia-500 p-4 rotate-3 bg-white shadow-[0_0_24px_#ff00ff]">
                  <img
                    className="w-full h-auto grayscale"
                    alt="minimalist abstract 3D geometric shapes with sharp edges and grainy texture in high contrast black and white"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnTNdyovwt_0h4sHiaKYdMvlnIPAXH5-VuCqvNQoM4DVM-K3f_ACtma3SZj4nVPYuqroZ6wQtOJPTAPHgqiccovucwbphnaVWcyiW4Z6xrsyu-SZ3FLjLvGCXEEsw3QDw0XEPowJzewC4abvjr4JzmemB_650H6IOl11oJ-RPMOtbwjTnJJOKbjZy-60aVWhV_a6CLcGVEyZVrsO3dxZYbbgcT4Fqag4nAp_jkClZlJqoBEt0lUFjZwUJZJPyMCD3AeHobqpGS6qI"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-[#00eaff] text-black px-6 py-2 border-4 border-black font-label-mono font-bold -rotate-6 shadow-[0_0_18px_#00eaff]">
                  SYSTEM_OVERRIDE_001
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commission Section (CTA) */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto border-4 border-fuchsia-500 bg-gradient-to-br from-[#0d0b1a] to-[#12001f] p-12 text-center relative shadow-[0_0_0_4px_#00eaff,0_0_24px_#00eaff]">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#00eaff] text-black px-8 py-1 font-headline-md uppercase tracking-widest shadow-[0_0_18px_#00eaff]">
              READY_TO_BUILD?
            </div>
            <h2 className="font-headline-xl text-headline-xl uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00eaff]">
              COMMISSION THE CORE
            </h2>
            <p className="font-body-lg text-body-lg mb-12 max-w-2xl mx-auto text-zinc-300">
              WE ARE CURRENTLY ACCEPTING THREE HIGH‑STAKES ARCHITECTURAL COMMISSIONS FOR THE 2025
              FISCAL GRID. SUBMIT YOUR GEOMETRY FOR REVIEW.
            </p>

            <form className="space-y-6 text-left max-w-xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group border-b-4 border-fuchsia-500/40 focus-within:border-[#00eaff] transition-colors">
                  <label className="block font-label-mono text-xs text-[#00eaff] uppercase mb-2">
                    Subject / Protocol
                  </label>
                  <input
                    type="text"
                    placeholder="PROJECT_NAME_ID"
                    className="w-full bg-transparent border-none focus:ring-0 text-headline-md font-headline-md uppercase p-0 placeholder:text-zinc-600 text-white"
                  />
                </div>
                <div className="group border-b-4 border-fuchsia-500/40 focus-within:border-[#00eaff] transition-colors">
                  <label className="block font-label-mono text-xs text-[#00eaff] uppercase mb-2">
                    Primary Objective
                  </label>
                  <input
                    type="email"
                    placeholder="CONTACT_UPLINK"
                    className="w-full bg-transparent border-none focus:ring-0 text-headline-md font-headline-md uppercase p-0 placeholder:text-zinc-600 text-white"
                  />
                </div>
              </div>

              <div className="group border-b-4 border-fuchsia-500/40 focus-within:border-[#00eaff] transition-colors">
                <label className="block font-label-mono text-xs text-[#00eaff] uppercase mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="INITIALIZE_TRANSMISSION..."
                  className="w-full bg-transparent border-none focus:ring-0 font-body-lg p-0 placeholder:text-zinc-600 text-white"
                />
              </div>

              <button className="w-full bg-[#ff00ff] text-black py-6 border-4 border-black font-headline-md uppercase hover:bg-[#00eaff] transition-colors mt-2 shadow-[8px_8px_0px_0px_#000,0_0_22px_#ff00ff]">
                INITIATE_UPLINK
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}