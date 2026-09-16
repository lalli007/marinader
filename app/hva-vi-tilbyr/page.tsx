"use client";

import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

const reviews = [
  {
    name: "Torbjørn Christiansen",
    source: "Google",
    rating: 5,
    text: "Kunnskapsrik service. Godt utvalg av marinert fisk.",
  },
  {
    name: "Tor Inge Skaar",
    source: "Google",
    rating: 5,
    text: "Fantastisk god marinert fisk til grillen!",
  },
  {
    name: "Kristin Sigurjonsdottir",
    source: "Google",
    rating: 5,
    text: "Beste fisken og fiskerettene (rett i ovnen) man kan få i Oslo og omegn.",
  },
  {
    name: "Erling Havre",
    source: "Google",
    rating: 5,
    text: "Førsteklasses",
  },
];

export default function HvaViTilbyr() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--paper)", backgroundImage: "url('/Foto/washi-tekstur-tile.png')", backgroundRepeat: "repeat" }}>
      <SiteNav />

      {/* ── PRESSE / SOSIALT BEVIS ── */}
      <section className="px-6 pt-32 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-[3/4] overflow-hidden">
              <img src="/Foto/141571241_2876011515987383_8014545428177150836_n.jpg" alt="Marinert fisk fra Fiskehuset på Kolbotn" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img src="/Foto/155286866_2903573623231172_5634928572481263402_n.jpg" alt="Fiskehusets butikk med marinader for fisk og kjøtt" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[3/4] grid grid-rows-2 gap-4">
              <div className="overflow-hidden">
                <img src="/Foto/avis-fiskehuset.jpg" alt="Avisomtale om Fiskehusets marinader" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden">
                <img src="/Foto/poteter i marinader.jpg" alt="Poteter marinert i Fiskehusets marinade" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-playfair)", fontWeight: 200, color: "var(--ink-soft)" }}>
              Konseptene våres høstet svært gode kundeomtaler. Gjennom erfaring har de utviklet en tydelig forståelse av hvilke smaker som treffer markedet, hva norske kunder ønsker seg både som enkeltretter og større selskaper.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, var(--gold-line), transparent)" }} />
      </div>

      {/* ── HVA VI TILBYR ── */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2
          className="text-center mb-16"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 4vw, 40px)", color: "var(--ink)" }}
        >
          Hva vi tilbyr
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              idx: "Én",
              title: "Erfaringen",
              body: "Elleve års erfaring, testet og videreutviklet i flere butikker.",
            },
            {
              idx: "To",
              title: "Oppsettstøtte",
              body: "Vi viser hvordan vi bygde disken vår, og hjelper deg med det samme hos deg.",
            },
            {
              idx: "Tre",
              title: "Velprøvde marinader",
              body: "Vi har marinadene, og vet nøyaktig hvilke som selger best.",
            },
          ].map((p) => (
            <div key={p.idx}>
              <p className="text-sm mb-3" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", color: "var(--gold)" }}>{p.idx}</p>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-inter)", color: "var(--ink)" }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-playfair)", fontWeight: 200, color: "var(--ink-soft)" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, var(--gold-line), transparent)" }} />
      </div>

      {/* ── KUNDEOMTALER ── */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2
          className="text-center mb-2"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 4vw, 40px)", color: "var(--ink)" }}
        >
          Hva kundene sier
        </h2>
        <p
          className="text-center text-xs tracking-[0.2em] uppercase mb-16"
          style={{ fontFamily: "var(--font-inter)", color: "var(--rust)" }}
        >
          Fra Fiskehuset Kolbotn
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="p-6"
              style={{ border: "1px solid var(--gold-line)", backgroundColor: "var(--paper-2)" }}
            >
              <div className="mb-3" style={{ color: "var(--gold)", letterSpacing: "0.1em" }}>
                {"★".repeat(review.rating)}
              </div>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-playfair)", fontWeight: 300, color: "var(--ink)" }}
              >
                {review.text}
              </p>
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: "var(--ink)" }}
              >
                {review.name}
              </p>
              <p
                className="text-xs mt-1"
                style={{ fontFamily: "var(--font-inter)", color: "var(--ink-soft)" }}
              >
                {review.source}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="px-6 py-20 text-center" style={{ backgroundColor: "var(--pine)" }}>
        <p
          className="mx-auto mb-8"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(22px, 3.5vw, 30px)",
            maxWidth: "480px",
            color: "var(--paper)",
          }}
        >
          Vil du ha den samme historien bak din egen disk?
        </p>
        <a
          href="/kontakt"
          className="inline-block px-8 py-3 text-sm tracking-wide transition-colors duration-200"
          style={{ fontFamily: "var(--font-inter)", border: "1px solid var(--gold)", color: "var(--paper)" }}
        >
          Ta kontakt
        </a>
      </div>

      <SiteFooter />
    </main>
  );
}
