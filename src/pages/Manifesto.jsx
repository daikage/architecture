import React from 'react'

export default function Manifesto() {
  return (
    <>
      {/* Grain overlay */}
      <div className="fixed inset-0 grain-overlay z-[100]" />

      {/* TopNavBar (remove if you already render a global header in App) */}
      

      {/* Main */}
      <main className="w-full blueprint-grid">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">
          <div className="absolute top-20 right-0 w-1/2 h-full opacity-30 grayscale mix-blend-screen pointer-events-none">
            <img
              className="w-full h-full object-cover"
              alt="monolithic brutalist skyscraper with dramatic sharp angles and high contrast lighting against a dark moody sky"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSOrAZ3osOtb6ah0uoZsIFLOyv43fJN4B_t7t9WyfWjaNuqqz0dPuvlIrBzrHJDaivx3mbCJ7LrLawKJa4dkKVREibv6oy2SnmJrPhrUrmUj5Xmof1YDUWPSpivmljMxhOl3Sc67KpchU-G1gPVAXE6wKRO2P3vfiBw66ZNS630WTDZ_8Lfc3MsTFitQ09Ah_P92qn3r3_vguKfdi9j92V1QUzIjQxctTCaItJAmZq7eR2Gx68VJift1G2o_0BVcGXiaJmk7WchCU"
            />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="inline-block bg-neon-cyan text-black font-label-mono text-label-mono px-4 py-1 mb-4">
              ESTABLISHED 2024 / CORE_SYSTEM_v1.0
            </div>
            <h1 className="font-headline-xl text-headline-xl uppercase max-w-4xl leading-tight">
              BUILDINGS ARE <span className="text-neon-pink">STRUCTURAL</span> POP
              CULTURE.
            </h1>
            <p className="font-body-lg text-body-lg max-w-2xl text-on-surface-variant">
              We disrupt the architectural status quo with high-octane precision and
              pop-maximalist aesthetics. Structure is not a container; it's a statement.
            </p>
            <div className="pt-8 flex gap-6">
              <button className="border-4 border-white p-6 font-headline-md text-headline-md uppercase flex items-center gap-4 hover:bg-white hover:text-black transition-all shadow-[8px_8px_0px_0px_#FF00FF]">
                VIEW DROPS
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          {/* Floating Geometric Decorative Elements */}
          <div className="absolute bottom-10 left-10 w-32 h-32 border-8 border-neon-cyan rotate-12 opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-neon-pink opacity-40" />
          <div className="absolute bottom-1/4 right-10 flex flex-col gap-2">
            <div className="w-24 h-2 bg-white" />
            <div className="w-48 h-2 bg-neon-pink" />
            <div className="w-12 h-2 bg-neon-cyan" />
          </div>
        </section>

        {/* Manifesto Section */}
        <section id="manifesto" className="py-24 px-6 md:px-12 border-y-8 border-white bg-zinc-950 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <h2 className="font-headline-lg text-headline-lg uppercase mb-8 border-l-8 border-neon-pink pl-6">
                MANIFESTO
              </h2>
              <div className="space-y-6 font-body-lg text-body-lg">
                <p>
                  We reject the "Quiet Luxury" movement. Design should be heard, felt, and
                  experienced as a rhythmic vibration of steel and glass.
                </p>
                <p className="text-on-surface-variant">
                  Our process is a living blueprint—dynamic, layered, and slightly
                  experimental. We don't build boxes; we build cultural artifacts that bridge
                  the gap between digital interface and physical matter.
                </p>
              </div>
            </div>
            <div className="md:col-span-7 relative h-[400px]">
              <div className="absolute inset-0 border-4 border-neon-cyan translate-x-4 translate-y-4" />
              <img
                className="w-full h-full object-cover border-4 border-white grayscale contrast-125"
                alt="abstract architectural interior with pink and blue neon lights reflecting off sharp metallic surfaces and glass walls"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4o3PkWIYhapxhINZhZtHIU4rlNqZ_NunH2J2iRedf1Hzut2Gnr3Ez-qkTRBkykKm-DZRRNVF3V0aJXXHhCcclOOqiBS-7DZ6jy35ND28GU6lh_S8LO5TAKBn5eJl8_f5dn9H9I08SZ6GZEnDkf4PvpDQtudYuJfOOTzcHUHm0uzKQpNsB1fbLa-NW3M8Qdqi37NoGCQzErmQTJtH5EJWXrVJ0joSTcNeE55lR0y_8HdABSXeg9AEmxjIdMYw3n5dhEJZIqktkWOw"
              />
              <div className="absolute -top-4 -left-4 bg-white text-black p-4 font-label-mono">
                01_NO_QUIET_LUXURY
              </div>
            </div>
          </div>
        </section>

        {/* Latest Drops Section */}
        <section id="projects" className="py-24 px-6 md:px-12 bg-background">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-neon-pink font-label-mono uppercase">Catalogue_2024</span>
              <h2 className="font-headline-lg text-headline-lg uppercase">LATEST DROPS</h2>
            </div>
            <div className="hidden md:block font-detail-technical text-detail-technical uppercase text-right">
              Rhythmic Spacing / 12 Column Grid
              <br />
              Structural Precision Enabled
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group relative flex flex-col border-4 border-white bg-zinc-900 transition-transform hover:-translate-y-2">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                  alt="futuristic architectural structure with repetitive geometric patterns and high contrast shadows under bright sunlight"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyc5rb0rdnZZGf947ht_kZcUABrRqpa-ONNQ9nZi8naHIav8QHk5sr8cGTVobG_LxmXGhM8XxoQwun0MmOjC1RiAiiExGuF2tZwsGRVBpGaCWL3gVvdVcQUJ7TurNi3Mdm9hR13idQ6lS-8znFtQMMvcp-miR_5hXiHn6-ba-YJiJw4EnqaEJmYGhUiZnCTPH8G2DzdYXhqlf5NYS-UhB8KuMO-vizAftbPw5xOCAp4-0imgmAxmjLgyH7uj-OJ74RHIOmp_nKVck"
                />
                <div className="absolute inset-0 bg-neon-pink opacity-20 group-hover:opacity-0 transition-opacity" />
                <div className="absolute top-4 right-4 bg-black text-white px-2 py-1 font-label-mono text-xs border border-white">
                  PROJECT_001
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md uppercase mb-2">NEON_BRUTALIST</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  A residential monolith in Tokyo featuring 360-degree interactive glass skins.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-neon-pink" />
                    <div className="w-4 h-4 bg-neon-pink" />
                    <div className="w-4 h-4 bg-neon-pink" />
                    <div className="w-4 h-4 border border-neon-pink" />
                  </div>
                  <span className="font-label-mono text-neon-cyan uppercase">Phase: Final</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative flex flex-col border-4 border-white bg-zinc-900 translate-y-12 transition-transform hover:translate-y-10">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                  alt="minimalist white architectural stairs with sharp shadows creating abstract geometric shapes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC5UisioXAekyWDiI7bOxFpmPGrrQ-lgLigRUmwEexZE1pd7NlanDkXgF1-Jcj0mCqxE-8cTYqXF-RWY8Fn5YdDLu6dIInaOBn0rxSoOzVBEBV3OI71wyFUAgAt1NITrWHVloHtbSopizt4i2JmGX1ug_SxjGVmIqKxUmI78U2IxcS4usk_uF8wsWfULNGetoz8n1qWS2d7MSepvgjSzr8RWu8n-rUM02JJGR_Kc8ipS5J865fo3oAJwmfB2gKeYwKm7ii0Um3Lms"
                />
                <div className="absolute inset-0 bg-neon-cyan opacity-20 group-hover:opacity-0 transition-opacity" />
                <div className="absolute top-4 right-4 bg-black text-white px-2 py-1 font-label-mono text-xs border border-white">
                  PROJECT_002
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md uppercase mb-2">VOID_CHAMBER</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Cultural pavilion designed with sonic resonance as the primary structural
                  driver.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-neon-cyan" />
                    <div className="w-4 h-4 bg-neon-cyan" />
                    <div className="w-4 h-4 border border-neon-cyan" />
                    <div className="w-4 h-4 border border-neon-cyan" />
                  </div>
                  <span className="font-label-mono text-neon-pink uppercase">Phase: Build</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative flex flex-col border-4 border-white bg-zinc-900 transition-transform hover:-translate-y-2">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                  alt="modern brutalist library building with massive concrete blocks and linear glass sections at dusk"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARvhIn8oRnmv-2_KZz_Qkrwv8EYPQ0OyyLAmLU_-2MSg1NqzXpGwSczW3MA9gjT-pIMU5NzIRhv_J1fEzJEZdr91_L8qaU6NeRSd-SVL1Nm_Hh2UlnzZPHReuBmw1k8m-SsuLVfQJRV1wlmgNTwZH-PSxmLanptMSkMN09gjXq5ONN8z0WsdrBZbyvatLK0MsKZ-38pAX16x8PMozvNEJr4lwMnPGqCKKLES2onFsxxKt2OGUxEv3X_iy6i-AiL3T9KkTiUT-jDQc"
                />
                <div className="absolute inset-0 bg-tertiary-container opacity-20 group-hover:opacity-0 transition-opacity" />
                <div className="absolute top-4 right-4 bg-black text-white px-2 py-1 font-label-mono text-xs border border-white">
                  PROJECT_003
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md uppercase mb-2">BLUEPRINT_X</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Experimental workspace for creative agencies using kinetic wall modules.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-white" />
                    <div className="w-4 h-4 border border-white" />
                    <div className="w-4 h-4 border border-white" />
                    <div className="w-4 h-4 border border-white" />
                  </div>
                  <span className="font-label-mono text-on-surface uppercase">Phase: Concept</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lab Section */}
        <section id="labs" className="py-24 px-6 md:px-12 bg-white text-black border-t-8 border-black">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="font-headline-xl text-headline-xl uppercase leading-none mb-6">LAB</h2>
              <p className="font-body-lg text-body-lg font-bold uppercase tracking-widest">
                Experimental R&amp;D
              </p>
              <div className="mt-8 space-y-4">
                <div className="border-b-2 border-black pb-2 flex justify-between font-label-mono">
                  <span>KINETIC_FURNITURE</span>
                  <span>[4]</span>
                </div>
                <div className="border-b-2 border-black pb-2 flex justify-between font-label-mono">
                  <span>AR_OVERLAYS</span>
                  <span>[12]</span>
                </div>
                <div className="border-b-2 border-black pb-2 flex justify-between font-label-mono">
                  <span>GRAIN_TEXTURES</span>
                  <span>[0]</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-zinc-200 border-4 border-black relative group overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale"
                  alt="close up of technical 3D architectural model with neon wireframe overlays and complex textures"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcKbs8AtqN1sfOMi5H5G2hPZDrzzx4Oo4yoqjw4dLhWJd0yVDZDw4Lc-iHu_LM4VenOKAQIZsRQgihSGz14cP-7rS0WPwn6dr6Hk_QjNbfXWyd3j12sK-gcua3MJWdYrlq5Uw_RsbE2Q7w2aHiECEJy9iAhZ4KaI-v7EN2qSnnjyPUPyKxiK1qIbJewBy0tAdhOKWYaJZdu4Ukjz6hcEqg5T4k5cNXKG7GIJfYMjnWLKvZoCttjxYxA97oOiBmHFyNLQtlS8CG31c"
                />
                <div className="absolute inset-0 bg-neon-pink mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity" />
              </div>
              <div className="aspect-square bg-zinc-900 border-4 border-black flex items-center justify-center p-8 text-white relative overflow-hidden">
                <div className="z-10 text-center">
                  <span className="material-symbols-outlined text-6xl mb-4">biotech</span>
                  <h4 className="font-headline-md text-headline-md uppercase">MATERIAL_TEST_01</h4>
                </div>
                <div className="absolute inset-0 opacity-20 blueprint-grid" />
              </div>
              <div className="col-span-2 h-48 bg-neon-cyan border-4 border-black flex items-center px-12 group cursor-pointer hover:bg-black hover:text-neon-cyan transition-colors">
                <h4 className="font-headline-lg text-headline-lg uppercase italic">
                  DOWNLOAD_CORE_ASSETS
                </h4>
                <span className="material-symbols-outlined text-6xl ml-auto group-hover:translate-x-4 transition-transform">
                  download
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with contact anchor */}
      <footer id="contact" className="w-full p-8 md:p-16 flex flex-col gap-12 overflow-hidden bg-yellow-400 dark:bg-yellow-400 border-t-8 border-black">
        <div className="font-epilogue font-black uppercase text-7xl md:text-[12rem] leading-[0.8] tracking-tighter text-black">
          ARCH_CORE
          <br />
          <span className="text-black/40 hover:text-black hover:italic transition-all cursor-crosshair">
            SYSTEMS
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex flex-wrap gap-8">
            <a
              className="font-epilogue font-black uppercase text-black hover:text-black hover:italic transition-all underline decoration-8 cursor-crosshair"
              href="#"
            >
              INSTAGRAM
            </a>
            <a
              className="font-epilogue font-black uppercase text-black/40 hover:text-black hover:italic transition-all cursor-crosshair"
              href="#"
            >
              ARE.NA
            </a>
            <a
              className="font-epilogue font-black uppercase text-black/40 hover:text-black hover:italic transition-all cursor-crosshair"
              href="#"
            >
              LINKEDIN
            </a>
            <a
              className="font-epilogue font-black uppercase text-black/40 hover:text-black hover:italic transition-all cursor-crosshair"
              href="#"
            >
              PRESS_KIT
            </a>
          </div>
          <div className="font-detail-technical text-black max-w-xs text-right">
            ©2024 ARCH_CORE / NO QUIET LUXURY / BUILT TO LAST
          </div>
        </div>
      </footer>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 bg-neon-pink text-white w-20 h-20 border-4 border-white shadow-[6px_6px_0px_0px_#00FFFF] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40">
        <span className="material-symbols-outlined text-4xl" data-weight="fill">
          add
        </span>
      </button>
    </>
  )
}