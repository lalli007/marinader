"use client";

export default function OmOss() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#faf6ef" }}>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5" style={{ backgroundColor: "#faf6ef" }}>
        <div className="flex items-center gap-10">
          <a href="/" className="text-lg font-semibold tracking-tight" style={{ color: "#2c2318", fontFamily: "var(--font-inter)" }}>
            Marinader
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[{ label: "Om oss", href: "/om-oss" }, { label: "Produkter", href: "/#marinader" }, { label: "Kontakt", href: "/#kontakt" }].map(({ label, href }) => (
              <a key={label} href={href} className="text-sm transition-colors duration-200" style={{ color: "#7c5c2e", fontFamily: "var(--font-inter)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#2c2318")}
                onMouseLeave={e => (e.currentTarget.style.color = "#7c5c2e")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
          style={{ color: "#7c5c2e", fontFamily: "var(--font-inter)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#2c2318")}
          onMouseLeave={e => (e.currentTarget.style.color = "#7c5c2e")}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Tilbake
        </a>
      </nav>

      {/* ── HEADER ── */}
      <section className="px-6 pt-24 pb-16 text-center" style={{ backgroundColor: "#faf6ef" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 opacity-40" style={{ backgroundColor: "#7c5c2e" }} />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-inter)", color: "#7c5c2e" }}
            >
              Om oss
            </span>
            <div className="h-px w-12 opacity-40" style={{ backgroundColor: "#7c5c2e" }} />
          </div>
          <h1
            className="text-5xl md:text-7xl font-semibold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "#2c2318" }}
          >
            Vår historie
          </h1>
        </div>
      </section>

      {/* ── INNHOLD ── */}
      <section className="py-8 max-w-6xl mx-auto px-6">

        {/* Blokk 1: Tekst venstre, bilde høyre */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed" style={{ fontFamily: "var(--font-playfair)", color: "#2c2318" }}>
              Fiskehuset ble etablert av en islandsk familie som flyttet til Norge på 1990-tallet.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontWeight: 300, color: "#5c4a35" }}>
              I 2015 åpnet de sin første butikk på Kolbotn, bygget på en enkel, men sterk idé: å gjøre fersk og marinert fisk lett tilgjengelig for alle.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/Foto/fisk-trebrett.JPG"
              alt="Fisk på trebrett"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Blokk 2: Video full bredde */}
        <div className="w-full overflow-hidden mb-24" style={{ height: "clamp(220px, 44vw, 600px)" }}>
          <video
            src="/Video/Fiskedisk-h264.mp4"
            loop
            playsInline
            controls
            poster="/Foto/fiskedisk-poster.jpg"
            style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
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
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontWeight: 300, color: "#5c4a35" }}>
              Med 11 års erfaring i bransjen vet de hva som fungerer. Marinadene ble raskt blant butikkens bestselgere, og konseptet høstet svært gode kundeomtaler.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontWeight: 300, color: "#5c4a35" }}>
              Gjennom erfaring har de utviklet en tydelig forståelse av hvilke smaker som treffer markedet, hva norske kunder ønsker seg, og hvilke produkter som ikke lykkes.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontWeight: 300, color: "#5c4a35" }}>
              De har allerede bidratt til å bygge opp et komplett butikkonsept for en kunde med marinader, fiskedisk og et utvalg tilleggsprodukter som hjemmelagde fiskekaker, sauser og hjemmelaget potetstappe.
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
        <div className="max-w-2xl mx-auto text-center space-y-6 mb-16">
          <p className="text-xl" style={{ fontFamily: "var(--font-playfair)", color: "#2c2318" }}>
            Det er den erfaringen de nå tar med seg videre.
          </p>
        </div>

      </section>


      {/* ── FOOTER ── */}
      <footer className="px-6 py-8 text-center" style={{ borderTop: "1px solid #e0d5c5" }}>
        <p
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-inter)", color: "#b09878" }}
        >
          © {new Date().getFullYear()} Marinader — Håndverk i hver dråpe
        </p>
      </footer>
    </main>
  );
}
