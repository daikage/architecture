import React from 'react'

export default function Contact() {
  return (
    <>
      {/* Scanlines overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 [background:linear-gradient(to_bottom,rgba(255,255,255,0)_0,rgba(255,255,255,0)_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2)_100%)] [background-size:100%_4px]" />

      <main className="min-h-screen relative overflow-x-hidden bg-[#050505] text-on-background selection:bg-[#fe00fe] selection:text-[#380038]">
        {/* Top ring glow */}
        <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-transparent via-[#00ffff0f] to-[#ff00ff0a]" />

        {/* Main Content Area */}
        <div className="pt-24 pb-16 px-4 md:px-12 max-w-[1440px] mx-auto min-h-screen flex flex-col md:flex-row gap-8 relative z-10">
          {/* HUD Metrics (Left Sidebar) */}
          <aside className="hidden md:flex flex-col w-48 gap-8 font-['Space_Grotesk'] text-[14px] text-[#00dddd]">
            <div className="p-4 border border-[#3a4a49] bg-[#0d0d0d] relative shadow-[0_0_24px_rgba(0,255,255,0.08)] active-scan">
              {/* HUD corners */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#00fbfb]" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#00fbfb]" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#00fbfb]" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#00fbfb]" />

              <h3 className="uppercase tracking-[0.2em] text-[11px] text-[#ffd7f5] mb-2">LATENCY</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00dddd] animate-pulse" />
                <span>14ms [STABLE]</span>
              </div>
            </div>

            <div className="p-4 border border-[#3a4a49] bg-[#0d0d0d] relative shadow-[0_0_24px_rgba(255,0,255,0.08)]">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#00fbfb]" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#00fbfb]" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#00fbfb]" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#00fbfb]" />

              <h3 className="uppercase tracking-[0.2em] text-[11px] text-[#ffd7f5] mb-2">
                ENCRYPTION_STRENGTH
              </h3>
              <div className="w-full bg-[#2a2a2a] h-2 mb-2">
                <div className="bg-[#fe00fe] h-full w-[98%]" />
              </div>
              <span className="text-zinc-300">AES-256 [SECURE]</span>
            </div>

            <div className="p-4 border border-[#3a4a49] bg-[#0d0d0d] relative">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#00fbfb]" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#00fbfb]" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#00fbfb]" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#00fbfb]" />

              <h3 className="uppercase tracking-[0.2em] text-[11px] text-[#ffd7f5] mb-2">SIGNAL_STABILITY</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00dddd] animate-pulse" />
                <span className="text-zinc-300">99.9% [OPTIMAL]</span>
              </div>
            </div>
          </aside>

          {/* Center Canvas - Contact Form & Visuals */}
          <div className="flex-1 relative flex flex-col items-center justify-center">
            {/* 3D Wireframe Background Element */}
            <div className="absolute inset-0 z-0 opacity-30 flex items-center justify-center pointer-events-none mix-blend-screen">
              <img
                className="object-cover w-full h-full sepia hue-rotate-[180deg] brightness-125 contrast-125"
                alt="abstract glowing 3D wireframe of a futuristic cyberpunk skyscraper in neon cyan and magenta lines against deep black background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtQDxPQ6EII_MphhljLKbiruSiyu04Aa1VDw-_VSC0YBP-YSt3dHqBZVrd5RfAtQjyKt5eXH4MefgSOyvuQdRueUSaqV8Yahv_bICL1epO-KCqaxQSWeM_F0JBQM_VfSB24fu3XDbJdefMddeoEeUHIVdfz5BN32srmC5M82xEG3end95IUBNSNhbxoutcSPiLu5bVvl8QCQTeMhnpHOIYIDQBfFoT6WybVVBT1YUa9v5C9nXB_nnFpGsoaW3MIe-91Tg58_lQe9I"
              />
            </div>

            <div className="relative z-10 w-full max-w-2xl bg-[#0d0d0d]/90 backdrop-blur-2xl border border-[#00dddd] shadow-[0_0_20px_rgba(0,255,255,0.35)] p-8">
              {/* HUD corners */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#00fbfb]" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#00fbfb]" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#00fbfb]" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#00fbfb]" />

              <header className="mb-8 border-b border-[#3a4a49] pb-4">
                {/* Glitch-like neon title */}
                <div className="relative inline-block">
                  <span className="absolute left-1 top-0 text-[#ff00ff] blur-[0.5px] opacity-80 select-none">
                    COMMISSION_PROTOCOL
                  </span>
                  <span className="absolute -left-1 top-0 text-[#00ffff] blur-[0.5px] opacity-80 select-none">
                    COMMISSION_PROTOCOL
                  </span>
                  <h1 className="font-['Space_Grotesk'] text-[56px] leading-[1.1] tracking-tight uppercase text-[#00fbfb] drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
                    COMMISSION_PROTOCOL
                  </h1>
                </div>
                <p className="font-['Space_Grotesk'] text-[14px] text-[#ffd7f5] mt-2 tracking-widest">
                  SECURE UPLINK ESTABLISHED. AWAITING DATA PACKET...
                </p>
              </header>

              <form className="space-y-6 flex flex-col font-['Inter'] text-[16px]">
                <div className="flex flex-col gap-2 group">
                  <label className="uppercase tracking-[0.2em] text-[11px] text-[#00dddd] group-focus-within:text-[#eaea00] transition-colors">
                    NODE_IDENTITY [NAME]
                  </label>
                  <input
                    type="text"
                    placeholder="ENTER_ALIAS..."
                    className="bg-transparent border-0 border-b border-[#3a4a49] focus:ring-0 focus:border-[#eaea00] text-white font-['Space_Grotesk'] p-2 placeholder:text-[#b9cac9] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2 group">
                  <label className="uppercase tracking-[0.2em] text-[11px] text-[#00dddd] group-focus-within:text-[#eaea00] transition-colors">
                    SIGNAL_SOURCE [EMAIL]
                  </label>
                  <input
                    type="email"
                    placeholder="ENTER_UPLINK_ADDRESS..."
                    className="bg-transparent border-0 border-b border-[#3a4a49] focus:ring-0 focus:border-[#eaea00] text-white font-['Space_Grotesk'] p-2 placeholder:text-[#b9cac9] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2 group">
                  <label className="uppercase tracking-[0.2em] text-[11px] text-[#00dddd] group-focus-within:text-[#eaea00] transition-colors">
                    DATA_PACKET [MESSAGE]
                  </label>
                  <textarea
                    rows={5}
                    placeholder="INITIALIZE_TRANSMISSION..."
                    className="bg-[#131313]/50 border border-[#3a4a49] focus:ring-0 focus:border-[#eaea00] text-white font-['Space_Grotesk'] p-3 transition-colors resize-none placeholder:text-[#b9cac9]"
                  />
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="border border-[#00dddd] text-[#00dddd] font-['Space_Grotesk'] text-[11px] tracking-[0.3em] uppercase px-8 py-3 hover:bg-[#00dddd] hover:text-[#050505] transition-all shadow-[0_0_15px_rgba(0,255,255,0.25)] hover:shadow-[0_0_18px_rgba(0,255,255,0.6)] flex items-center gap-2"
                  >
                    <span>TRANSMIT_DATA</span>
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-8 px-10 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-[#ff00ff]/40 bg-[#050505] relative z-10">
          <div className="font-mono text-[10px] leading-tight text-[#ff00ff]">
            <span className="font-bold">ARCH_VOID</span>
            <br />
            <span className="text-zinc-500">©2077 ARCH_VOID_MAINFRAME. ALL RIGHTS ENCRYPTED.</span>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end font-mono text-[10px] leading-tight text-zinc-500">
            <a className="hover:text-[#00ffff] hover:line-through transition-colors uppercase" href="#">
              NETWORK_MAP
            </a>
            <a className="hover:text-[#00ffff] hover:line-through transition-colors uppercase" href="#">
              DEBUG_LOGS
            </a>
            <a className="text-[#ff00ff] underline hover:line-through hover:text-cyan-400 transition-colors uppercase" href="#">
              SIGNAL_STATUS
            </a>
            <a className="hover:text-[#00ffff] hover:line-through transition-colors uppercase" href="#">
              VOID_RESOURCES
            </a>
          </div>
        </footer>
      </main>
    </>
  )
}
