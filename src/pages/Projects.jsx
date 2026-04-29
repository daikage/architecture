import React from 'react'

export default function Projects() {
  const gridLinesStyle = {
    backgroundImage:
      'linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)',
    backgroundSize: '40px 40px',
  }

  return (
    <>
      {/* Overlays */}
      <div className="grain-overlay" />
      {/* NEW: subtle scanlines */}
      <div className="pointer-events-none fixed inset-0 z-[90] opacity-[0.06] [background:repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_3px)]" />
      <div className="fixed inset-0 pointer-events-none" style={gridLinesStyle} />

      {/* Page content */}
      <main className="relative z-10 px-6 py-12 md:px-[40px] max-w-[1440px] mx-auto bg-gradient-to-b from-[#0a0012] via-[#090015] to-[#01010f]">
        {/* Hero Title */}
        <div className="mb-16">
          <h1 className="font-headline-xl text-headline-xl uppercase mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] via-white to-[#00eaff]">
            BUILT <span className="italic">DIFFERENT</span>
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl text-on-surface-variant">
            We design structural monuments for the post-digital age. Our buildings don't just
            stand; they shout.
          </p>
        </div>

        {/* Stickers/Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="font-label-mono text-label-mono bg-secondary-container text-black px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000] rotate-[-2deg] hover:rotate-0 transition-transform">
            ALL_WORKS
          </button>
          <button className="font-label-mono text-label-mono bg-tertiary-fixed text-black px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000] rotate-[3deg] hover:rotate-0 transition-transform">
            RESIDENTIAL_TECHNO
          </button>
          <button className="font-label-mono text-label-mono bg-primary-fixed text-black px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000] rotate-[-1deg] hover:rotate-0 transition-transform">
            CYBER_RETAIL
          </button>
          <button className="font-label-mono text-label-mono bg-on-secondary-container text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000] rotate-[2deg] hover:rotate-0 transition-transform">
            URBAN_HACKING
          </button>
        </div>

        {/* Bento Grid Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Card */}
          <div className="md:col-span-8 group relative border-4 border-fuchsia-500 bg-surface-container overflow-hidden shadow-[0_0_0_3px_#ff00ff,0_0_28px_#ff00ff] hover:shadow-[0_0_0_3px_#00eaff,0_0_32px_#00eaff] transition-all cursor-crosshair">
            <div className="absolute top-4 left-4 z-20 bg-black text-white px-3 py-1 font-detail-technical text-detail-technical border border-fuchsia-500">
              PROJECT_ID: 001_NEON_VOID
            </div>
            <img
              className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              alt="futuristic brutalist skyscraper with glowing magenta neon lights against a dark twilight city sky with grainy texture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjy2pj_2lSH9PpcC6gGlL1tiRYuIc6cWntbgjr2CYVovxWZBw80DviYrCiHOdcGXrTIEpRdR8Kvr1lz99Nrv5E4rij0fUYNw7O-WDJd_N6as5pkC5403Kz4iVXHtTEcaec79C1G-QV--JDuMgiwlP5LzU2ZtSlFt79DwW79jSIpCoPlLPSpyVxMMDSFVxtRfOG6k7rh-swd-PSQ4q6LUNMkYIW60kJtid4lCH6tDqcVAWn4HdfynmaW94IGN-s0-eSV3zM3KqweAc"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="font-headline-lg text-headline-lg text-white uppercase group-hover:text-secondary-fixed transition-colors">
                THE NEON VOID
              </h2>
              <div className="flex justify-between items-end mt-4">
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  TOKYO / 2024 / HQ
                </span>
                <div className="bg-white text-black p-2">
                  <span className="material-symbols-outlined">arrow_outward</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tall Small Card */}
          <div className="md:col-span-4 group relative border-4 border-cyan-400 bg-surface-container overflow-hidden shadow-[0_0_0_3px_#00eaff,0_0_24px_#00eaff] hover:shadow-[0_0_0_3px_#f5e700,0_0_28px_#f5e700] transition-all cursor-crosshair">
            <img
              className="w-full h-full min-h-[500px] object-cover contrast-125 group-hover:scale-110 transition-transform duration-700"
              alt="abstract architectural close up of geometric concrete patterns with sharp shadows and bright yellow paint accents"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiwrqyUo-mBnxmxo2Q7YitrIR5r5z3otzuBEcuLEYFRZ8RhmtkjRr1UafEwwn44jnBMACZgHAA1zSOo31LcbTAFRYXJlpVSXzAFkDR9GEvF66p-OsmZtdWOkjWoakdqKhl1zBcgSwKfz-EVsBg8yNJQelGy9fgdTfDt6Wlik-SP53BdThvYG3YhXat7Sq3Am0kFLvdfkSiOW2_dn7f-odPywZ04YvcJl32Z4grBSGi9Wcp6XiAs4wrJ9HpYk7fOpi1denYJKautzA"
            />
            <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 p-6 bg-black w-full border-t-4 border-cyan-400">
              <h3 className="font-headline-md text-headline-md text-white uppercase group-hover:italic transition-all">
                STRIKE_ZONE
              </h3>
            </div>
          </div>

          {/* Square Card */}
          <div className="md:col-span-4 group relative border-4 border-fuchsia-500 bg-surface-container overflow-hidden shadow-[0_0_0_3px_#ff00ff,0_0_20px_#ff00ff] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all cursor-crosshair">
            <img
              className="w-full h-[400px] object-cover group-hover:hue-rotate-90 transition-all"
              alt="minimalist modern office interior with cold industrial materials and high contrast lighting in black and white"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNnzWQpQ798Lx_pjeN1DoVs-iw-aFPJ2FCtu_fDqaAzmssXVsuQpGWXJj1tLP1Wb_2dbrVLGGHrFDDe3DE9mZ3iCJr0UuUIXSNX_zMQjsyJG3OdzM9P6_REAsW9AueTKd5NkgIlHrlz4abxrlWRKJWVDBztE-vCpQtoHV2e6EotJd1OgLtnPRbbiVDLWObkypjtYlZ1owoTdpaUOXxT5Z17MDcDpPb1xM-fLp8twE5mPz_31Ip59bJd3B5hosUdUY7OZEpH5KeQUc"
            />
            <div className="absolute top-0 right-0 p-4 bg-tertiary text-black font-label-mono text-label-mono border-l-4 border-b-4 border-fuchsia-500">
              #LABS
            </div>
            <div className="absolute bottom-6 left-6">
              <h3 className="font-headline-md text-headline-md text-white uppercase bg-black px-4 py-2 border-2 border-fuchsia-500">
                STATIC_SHELL
              </h3>
            </div>
          </div>

          {/* Medium Horizontal Card */}
          <div className="md:col-span-8 group relative border-4 border-cyan-400 bg-surface-container overflow-hidden shadow-[0_0_0_3px_#00eaff,0_0_20px_#00eaff] hover:shadow-none transition-all cursor-crosshair">
            <img
              className="w-full h-[400px] object-cover group-hover:saturate-200 transition-all"
              alt="luxury modern residence with sharp angular roof and oversized glass windows at sunset with warm indoor lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5dl7uRC9ayJ1KGk1qZHAqQyQlEv9-XOPhCMlJehuZgnpCjfxT5_DIFVdnU2TFZ-MohnFLum1AJ4oDy2MbObDtINUbS-EgLBS7zm8AO9ulcrZ5d--X26GAvsV28Iy63veBgX2UdT_D8a9t7DI7SH5bBhHzwRQgphTFOR17Rw39wTrLLFjlQn9NGEAQZQFwchRZNOlSFf5Y3OOhtjseT5gDhlnfjwOe3-hnZGBjPlXyLkDIUfzxQWmiPD7oEN8BqlU9tP33OwgqDes"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm">
              <div className="text-center">
                <span className="font-headline-lg text-headline-lg text-primary-container italic uppercase">
                  PRIVATE_ESTATE_04
                </span>
                <p className="font-label-mono text-label-mono text-white mt-2 underline decoration-4 underline-offset-8">
                  VIEW DOSSIER
                </p>
              </div>
            </div>
          </div>

          {/* Project Progress Bar Simulation */}
          <div className="md:col-span-12 border-4 border-fuchsia-500 p-8 bg-zinc-950 flex flex-col md:flex-row justify-between items-center gap-8 overflow-hidden">
            <div className="flex flex-col gap-2">
              <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                CURRENTLY_CONSTRUCTING
              </span>
              <span className="font-headline-md text-headline-md text-white uppercase tracking-tighter">
                ORBITAL_METROPOLIS_X
              </span>
            </div>
            <div className="flex-grow flex gap-1 h-12 w-full max-w-xl bg-surface-container-low border-2 border-fuchsia-500 p-1">
              <div className="w-full bg-[#ff00ff] h-full" />
              <div className="w-full bg-[#ff00ff] h-full" />
              <div className="w-full bg-[#00eaff] h-full" />
              <div className="w-full bg-[#00eaff] h-full" />
              <div className="w-full bg-[#f5e700] h-full" />
              <div className="w-full bg-surface-container-highest h-full" />
              <div className="w-full bg-surface-container-highest h-full" />
              <div className="w-full bg-surface-container-highest h-full" />
            </div>
            <div className="font-headline-md text-headline-md text-white uppercase italic">62.5%</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t-8 border-black bg-yellow-400 dark:bg-yellow-400 p-8 md:p-16 flex flex-col gap-12 overflow-hidden cursor-crosshair hover:bg-fuchsia-500 transition-all">
        <div className="font-epilogue font-black uppercase text-7xl md:text-[12rem] leading-[0.8] tracking-tighter text-black">
          ARCH_CORE
          <br />
          NO QUIET
          <br />
          LUXURY
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="flex flex-wrap gap-8">
            <a className="font-epilogue font-black uppercase text-xl text-black hover:italic transition-all" href="#">
              INSTAGRAM
            </a>
            <a className="font-epilogue font-black uppercase text-xl text-black hover:italic transition-all" href="#">
              ARE.NA
            </a>
            <a className="font-epilogue font-black uppercase text-xl text-black hover:italic transition-all underline decoration-8" href="#">
              LINKEDIN
            </a>
            <a className="font-epilogue font-black uppercase text-xl text-black hover:italic transition-all" href="#">
              PRESS_KIT
            </a>
          </div>
          <div className="font-epilogue font-black uppercase text-black max-w-xs text-right">
            ©2024 ARCH_CORE / NO QUIET LUXURY / BUILT TO LAST
          </div>
        </div>
      </footer>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 z-[60] bg-white text-black w-16 h-16 border-4 border-black shadow-[6px_6px_0px_0px_#ff00ff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center">
        <span className="material-symbols-outlined text-4xl">add</span>
      </button>
    </>
  )
}
