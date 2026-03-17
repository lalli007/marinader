export default function OmOss() {
  return (
    <main className="min-h-screen">
      {/* ── HEADER ── */}
      <section className="relative px-6 pt-24 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-amber-800 opacity-60" />
            <span
              className="text-amber-700 text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Om oss
            </span>
            <div className="h-px w-12 bg-amber-800 opacity-60" />
          </div>
          <h1
            className="text-5xl md:text-7xl font-semibold text-stone-100 leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Vår historie
          </h1>
        </div>
      </section>

      {/* ── INNHOLD ── */}
      <section className="py-16 max-w-6xl mx-auto px-6">

        {/* Blokk 1: Tekst venstre, bilde høyre */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <p className="text-stone-300 text-xl leading-relaxed" style={{ fontFamily: "var(--font-playfair)" }}>
              Fiskehuset ble etablert av en islandsk familie som flyttet til Norge på 1990-tallet.
            </p>
            <p className="text-stone-400 text-base leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}>
              I 2015 åpnet de sin første butikk på Kolbotn, bygget på en enkel, men sterk idé: å gjøre fersk og marinert fisk lett tilgjengelig for alle.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/Foto/skalldyrfat.jpg"
              alt="Skalldyrfat"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Blokk 2: Stort bilde full bredde */}
        <div className="w-full aspect-[16/7] overflow-hidden mb-24">
          <img
            src="/Foto/fishandchips.jpg"
            alt="Fish and chips"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blokk 3: Bilde venstre, tekst høyre */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/Foto/avis-fiskehuset2.jpg"
              alt="Avisomtale"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-stone-400 text-base leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}>
              Med 11 års erfaring i bransjen vet de hva som fungerer. Marinadene ble raskt blant butikkens bestselgere, og konseptet høstet svært gode kundeomtaler.
            </p>
            <p className="text-stone-400 text-base leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}>
              Gjennom erfaring har de utviklet en tydelig forståelse av hvilke smaker som treffer markedet, hva norske kunder ønsker seg, og hvilke produkter som ikke lykkes.
            </p>
          </div>
        </div>

        {/* Blokk 4: Tre bilder i grid */}
        <div className="grid grid-cols-3 gap-4 mb-24">
          <div className="aspect-[3/4] overflow-hidden">
            <img src="/Foto/141571241_2876011515987383_8014545428177150836_n.jpg" alt="Fiskehuset" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <img src="/Foto/155286866_2903573623231172_5634928572481263402_n.jpg" alt="Fiskehuset" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="overflow-hidden">
              <img src="/Foto/avis-fiskehuset.jpg" alt="Avisomtale" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden">
              <img src="/Foto/poteter i marinader.jpg" alt="Poteter i marinader" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Blokk 5: Avsluttende tekst sentrert */}
        <div className="max-w-2xl mx-auto text-center space-y-6 mb-8">
          <p className="text-stone-400 text-base leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}>
            De har allerede bidratt til å bygge opp et komplett butikkonsept for en kunde med marinader, fiskedisk og et utvalg tilleggsprodukter som hjemmelagde fiskekaker, sauser og hjemmelaget potetstappe.
          </p>
          <p className="text-stone-300 text-xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Det er den erfaringen de nå tar med seg videre.
          </p>
        </div>

      </section>

      {/* ── TILBAKE ── */}
      <div className="px-6 pb-16 max-w-4xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-2 border border-stone-700 hover:border-amber-700 text-stone-400 hover:text-amber-400 px-6 py-3 transition-all duration-300 text-sm tracking-widest uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Tilbake
        </a>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-stone-900 px-6 py-8 text-center">
        <p
          className="text-stone-700 text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          © {new Date().getFullYear()} Marinader — Håndverk i hver dråpe
        </p>
      </footer>
    </main>
  );
}
