import React from 'react'

export default function Home() {
  const noiseBgStyle = {
    position: 'fixed',
    inset: 0,
    zIndex: 100,
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Ex%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
    opacity: 0.05,
    pointerEvents: 'none',
  }

  return (
    <>
      <div style={noiseBgStyle} />
      <div className="pointer-events-none fixed inset-0 z-[90] opacity-[0.06] [background:repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_3px)]" />

      <main className="relative overflow-x-hidden bg-gradient-to-b from-[#0a0012] via-[#090015] to-[#01010f]">
        <header className="pt-20 px-6 md:px-12 border-b-8 border-white bg-zinc-950">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 pb-12">
            <div className="max-w-4xl">
              <span className="font-label-mono text-label-mono text-secondary-fixed bg-on-secondary px-2 py-1 mb-4 inline-block border-2 border-secondary-fixed">
                PROJECT_ID: NEON_VOID_04
              </span>
              <h1 className="font-headline-xl text-headline-xl uppercase text-white leading-[0.85] tracking-tightest">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] via-white to-[#00eaff]">
                  CYBER
                  <br />
                  BRUTALIST
                  <br />
                  <span className="text-primary-container">CATHEDRAL</span>
                </span>
              </h1>
            </div>
            <div className="flex flex-col gap-4 text-right">
              <div className="font-label-mono text-label-mono text-tertiary">
                LOCATION: TOKYO_GRID_SEC7
              </div>
              <div className="font-label-mono text-label-mono text-tertiary">
                STATUS: UNDER_CONSTRUCTION_88%
              </div>
              <div className="flex justify-end gap-1">
                <div className="w-6 h-6 bg-primary-container border-2 border-white" />
                <div className="w-6 h-6 bg-primary-container border-2 border-white" />
                <div className="w-6 h-6 bg-primary-container border-2 border-white" />
                <div className="w-6 h-6 bg-primary-container border-2 border-white" />
                <div className="w-6 h-6 border-2 border-white/20" />
              </div>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-12 min-h-screen">
          <div className="md:col-span-8 relative border-r-4 border-cyan-400">
            <div className="h-[614px] md:h-full relative overflow-hidden group">
              <img
                className="w-full h-full object-cover filter contrast-125 grayscale hover:grayscale-0 transition-all duration-700"
                alt="monolithic concrete skyscraper with glowing magenta neon light strips and geometric structural gaps against a dark night sky"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH18Q5oDobs9ez_V6wSiSW7kq2i5m6YTNt8E50kLbvNp-SmtenqkCdwOwgFznhmCYCtkfBnCMZBIGi58gh1SxLCoQrYlVFDe_WbSVK-JtFNFubyHcpFLq_LV3Q1cJ3IfmcJLKm0G8sas_K6JV1heAVC8b--gWRUpTgaCKj53gwgtiLz1pdDtIaOnPAocJqdu4HifSRfAkVx52eiMx7mDrpkUXHPhQqQXafWvF852pT9wsxvnuZtcVvAL0-It8twVtXZjtl3th8WWM"
              />
              <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
              <div className="absolute top-8 left-8 bg-white text-black p-4 border-4 border-primary-container shadow-[8px_8px_0px_0px_#ff00ff]">
                <span className="font-detail-technical text-detail-technical uppercase block">
                  EXTERIOR_VIEW_A
                </span>
                <span className="font-headline-md text-headline-md leading-none">01</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-surface flex flex-col">
            <div className="p-8 border-b-4 border-fuchsia-500">
              <h2 className="font-headline-md text-headline-md text-primary-fixed uppercase mb-6 italic underline decoration-4 underline-offset-8">
                THE_CONCEPT
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-8">
                A vertical sanctuary designed for the post-digital age. We merged the
                raw, unapologetic weight of monolithic concrete with the ethereal,
                weightless glow of hyper-speed fiber optic channels. This is not just a
                building; it is a structural operating system for the urban soul.
              </p>
              <button className="w-full py-4 border-4 border-secondary-fixed text-secondary-fixed font-label-mono text-label-mono uppercase hover:bg-secondary-fixed hover:text-black transition-all shadow-[6px_6px_0px_0px_#00dbe9]">
                DOWNLOAD_SPECS.PDF
              </button>
            </div>
            <div className="p-8 flex-grow bg-on-primary-container/20">
              <h3 className="font-label-mono text-label-mono text-primary mb-4 uppercase">
                TECHNICAL_LOGS
              </h3>
              <ul className="space-y-4 font-detail-technical text-detail-technical">
                <li className="flex justify-between border-b border-white/20 pb-2">
                  <span>TOTAL_AREA:</span>
                  <span className="text-white">45,000 SQM</span>
                </li>
                <li className="flex justify-between border-b border-white/20 pb-2">
                  <span>STRUCTURAL_CORE:</span>
                  <span className="text-white">REINFORCED_POLYCARBON_7</span>
                </li>
                <li className="flex justify-between border-b border-white/20 pb-2">
                  <span>NEON_LUMENS:</span>
                  <span className="text-white">1.2M_CD/M2</span>
                </li>
                <li className="flex justify-between border-b border-white/20 pb-2">
                  <span>WIND_RESISTANCE:</span>
                  <span className="text-white">CAT_5_COMPLIANT</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-yellow-400 p-8 md:p-12 border-y-8 border-black">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="font-headline-xl text-headline-xl text-black leading-[0.8] mb-8">
                BLUEPRINT_REMIX
              </h2>
              <p className="font-body-lg text-body-lg text-black font-bold uppercase">
                Deconstructing the structural spine through a maximalist lens. Precision
                meets chaos.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="border-4 border-black bg-white p-2 shadow-[8px_8px_0px_0px_#000000]">
                <img
                  className="w-full h-48 object-cover"
                  alt="abstract architectural blueprint drawing with neon pink and cyan vector outlines overlayed on dark technical paper"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwcK4FPEkZncvAZBFT5hCR0OCRLCrBMn8zZ8uyw0u4mMI55Zui45bJ-xzqIviolfN6PzbaIzelzySfER6C2MYKbldtQ-BtPtH1GfxMcSLxNPKV7y6B7ucyPNBAw4BMxpTEZCtix-p6sEQoPrFP_k1CtxRT3k_mC12eMVbXykNdsObYO74djX7flg8xAWzIo2AttsghdbCl5-lfHFjbwmy1lNr_ttuNBD81UjmOP1VHIV_Ng8T9Upf6FI9pz9x1oEgT-VUlbTymcao"
                />
              </div>
              <div className="border-4 border-black bg-white p-2 translate-y-8 shadow-[8px_8px_0px_0px_#000000]">
                <img
                  className="w-full h-48 object-cover"
                  alt="top-down floor plan with fluorescent yellow paths and thick black structural walls"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO0t4khJzliYGDIT4jGj6tmHfe5rcRwRhK0A2DSRHGa1QEAo0ELmAKVgaPgJsPEzdvrlCW6mtqtQeFYl-E-cl3e9X6OfJrCJ_rtAp7AsTl_18_QvPaVOFlNI5fN1BD_O4nBNronKOxQEfJzWu9LO1nizL8nlfD1hwW6tQ4aGO6OjoWH1RSCOODz7P_D3JMqlzUclDj8Mbp51DQ1K3z2_PyMoqzChFLCiTmL5awzzQMVcVCWnIiJulCBsR5IjJTFtkE6sf-JmUxLhQ"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="p-8 md:p-24 bg-background">
          <div className="flex flex-col gap-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 relative">
                <img
                  className="w-full h-[600px] object-cover border-4 border-white"
                  alt="dramatic perspective of a concrete ceiling with integrated blue neon lighting strips and harsh industrial shadows"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbXjXqJZzUYsZVQJqR3zK3aNm_djHZjakUTqStblBeZb7Jb2qzEuOZymC9D3TqArhWk3VDKcDDCpyHLanSFRIGFEX0VqXy-Sor64ayK9aPYamScWoHuY_cZlQAsESAhbnyb0QHdox9E8x6KEpxjy_e74pwEW3S1uR43FGq5lbJnYtbFfsbSmw8tNDbEx3HcddVhQrdjijD1LYGkn4AuvIn1QiJsI3A8RP7fVKfgNKiiqhIj2VHN8_-JRZsnbNAypR3llDsg-T754"
                />
                <div className="absolute bottom-0 right-0 bg-white text-black px-6 py-2 font-headline-md uppercase italic translate-x-4 translate-y-4">
                  VOID_STUDY_09
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-headline-md text-headline-md text-primary-container mb-6">
                  THE_SOUNDTRACK_OF_STRUCTURE
                </h3>
                <div className="bg-surface-container p-6 border-4 border-primary shadow-[8px_8px_0px_0px_#ffabf3]">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-4xl text-primary">
                      graphic_eq
                    </span>
                    <div>
                      <div className="font-label-mono text-white text-xs">NOW_PLAYING:</div>
                      <div className="font-headline-md text-sm text-primary uppercase">
                        GLITCH_SANCTUARY_MIX
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-primary w-full" />
                    <div className="h-2 bg-primary/40 w-3/4" />
                    <div className="h-2 bg-primary/20 w-1/2" />
                  </div>
                  <div className="mt-6 flex justify-between font-detail-technical uppercase text-[10px] text-white/60">
                    <span>BPM: 128</span>
                    <span>KEY: D_MINOR</span>
                    <span>REVERB: 88%</span>
                  </div>
                </div>
                <p className="mt-8 font-body-md text-on-surface-variant italic">
                  "We tuned the ventilation shafts to resonate at 440Hz, creating a permanent
                  ambient drone that grounds the occupants in a state of hyper-focus."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="h-96 border-4 border-white grayscale hover:grayscale-0 transition-all">
                <img
                  className="w-full h-full object-cover"
                  alt="interior office space with glass walls and bright magenta neon accents in a brutalist concrete frame"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuEfoX1-3m--BAYGeXgnovXOHUa4l-ZOBhf5ntpUWcDGStWZepGHqc8YVJI_lZPStSktv-_UAoZrBGlvyABa3iBpwxrmgM-GX969AuoZWDWmLmWJ9EZFdxZvkaZH1gZkLTzniTY2pUWjrDHSYd5ZFse2pS2wzpjbdtzWTGMIrqKlfk3v5jhQTOuOLW4aQVBldC8MGYQZqhzXRsKI7S67SGyzLIIHAKWIwFruD0HGuutSB_kBbxcEZrmMFM-3uXB02Ta2uMThhya6c"
                />
              </div>
              <div className="h-96 border-4 border-white translate-y-12 bg-on-tertiary-fixed flex items-center justify-center p-8">
                <span className="font-headline-xl text-6xl text-tertiary leading-none text-center">
                  NO
                  <br />
                  QUIET
                  <br />
                  HERE
                </span>
              </div>
              <div className="h-96 border-4 border-white grayscale hover:grayscale-0 transition-all">
                <img
                  className="w-full h-full object-cover"
                  alt="geometric concrete staircase spiraling upwards with glowing cyan under-lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEOZX66ahkhRRx9pm1Gtyp8U3CZV-8iWueYc5AguNcfjEUXiXbudLTmatn8H9wsTgjVI3MaC9ZEdU8MEED8pCY3ZAgVgi_8DnJ8JK0LJA-ofjhz6HDvHnBg4jEcq-M_Ps4fIlWYUGu9BJ0Eup8R5ptBhcDnGX-4f4L_0HuZb4OFW-cir-mRfLmuWWXRPKvaxY70OK3WPDJXNOdbHgpZaJKJKlBSjisqrDQpkFjyxV0vx-F1DRonzJHl5XLwukfeAgnU4zMZYtIKXk"
                />
              </div>
              <div className="h-96 border-4 border-white translate-y-12">
                <img
                  className="w-full h-full object-cover"
                  alt="close up architectural detail of a metal mesh facade with orange neon light reflecting on it"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgaF85wKrr9ubPTmsSm0cjCTuf4FOOB1gmkE2AY0VoiKfPlyh537_BFCV5nTyqtgRvPFyWDs6ascc_U9mCR4IwCDpO6cRDqwlLNiGLVfc1y23jtZQtXiYsG_oLYK2Qdxq9tyE37z1S5xPxSVhf9Rh7CacEuYPoxdR0onGHEJ4lxyTUGGCgifIYvzekWWCAwTviP0pk24skO1O_PtGSQjMeArGafrcA3q4ZOpUIt0me09svWVozseOdwCDEjkjnzzUYZrAEPNW_zxg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t-8 border-white bg-fuchsia-500 p-12 text-black">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <h2 className="font-headline-lg text-headline-lg uppercase italic font-black leading-none">
              WANT_THE_BLUEPRINT?
            </h2>
            <div className="flex gap-4">
              <input
                className="bg-black text-white border-4 border-black px-6 py-4 font-label-mono placeholder:text-white/40 focus:ring-0 focus:border-white"
                placeholder="YOUR_EMAIL_HERE"
                type="text"
              />
              <button className="bg-white text-black font-headline-md px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase">
                JOIN_THE_VOID
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-400 dark:bg-yellow-400 w-full border-t-8 border-black w-full p-8 md:p-16 flex flex-col gap-12 overflow-hidden">
        <div className="font-epilogue font-black uppercase text-7xl md:text-[12rem] leading-[0.8] tracking-tighter text-black">
          ARCH_CORE
          <br />
          <span className="text-black/40 hover:text-black hover:italic transition-all cursor-crosshair">
            SYSTEM_01
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t-4 border-black pt-8">
          <div className="flex gap-8 flex-wrap">
            <a
              className="text-black font-epilogue font-black uppercase hover:italic transition-all"
              href="#"
            >
              INSTAGRAM
            </a>
            <a
              className="text-black font-epilogue font-black uppercase hover:italic transition-all"
              href="#"
            >
              ARE.NA
            </a>
            <a
              className="text-black font-epilogue font-black uppercase hover:italic transition-all underline decoration-8"
              href="#"
            >
              LINKEDIN
            </a>
            <a
              className="text-black font-epilogue font-black uppercase hover:italic transition-all"
              href="#"
            >
              PRESS_KIT
            </a>
          </div>
          <div className="font-epilogue font-black uppercase text-black max-w-xs text-right">
            ©2024 ARCH_CORE / NO QUIET LUXURY / BUILT TO LAST
          </div>
        </div>
      </footer>
    </>
  )
}