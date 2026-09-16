import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export default function Historien() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--paper)", backgroundImage: "url('/Foto/washi-tekstur-tile.png')", backgroundRepeat: "repeat" }}>
      <SiteNav />

      {/* ── OPPRINNELSEN ── */}
      <section className="px-6 pt-32 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: "var(--font-marine-sikona)", color: "var(--rust)" }}
            >
              Opprinnelsen
            </p>
            <p
              className="text-xl leading-relaxed"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--ink)" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "58px",
                  lineHeight: 0.85,
                  float: "left",
                  paddingRight: "10px",
                  paddingTop: "6px",
                  color: "var(--pine)",
                }}
              >
                F
              </span>
              iskehuset åpnet sin første butikk i 2014 på Kolbotn.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-playfair)", fontWeight: 300, color: "var(--ink-soft)" }}>
              Island har modernisert seg innen matutvalg og bruk av nye marinader til fisk, kjøtt og grønnsaker. Vi la merke til at rett-i-ovn-konseptet ikke fantes, og brukte lang tid på å teste ulike marinader med kunder. Nå vet vi hva som fungerer til ulike typer fisk, kjøtt, skalldyr og tilbehør.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/Foto/avis-fiskehuset2.jpg"
              alt="Avisomtale av Fiskehuset og marinert fisk på Kolbotn"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Video full bredde */}
        <div className="w-full overflow-hidden mb-4" style={{ height: "clamp(220px, 44vw, 600px)" }}>
          <video
            src="/Video/Fiskedisk-h264.mp4"
            loop
            playsInline
            controls
            poster="/Foto/fiskedisk-poster.jpg"
            style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* ── VENDEPUNKTET ── */}
      <section className="px-6 py-24 max-w-3xl mx-auto text-center">
        <p
          className="text-xs tracking-[0.2em] uppercase mb-6"
          style={{ fontFamily: "var(--font-inter)", color: "var(--rust)" }}
        >
          Vendepunktet
        </p>
        <p className="text-xl md:text-2xl leading-relaxed mb-6" style={{ fontFamily: "var(--font-playfair)", color: "var(--ink)" }}>
          Butikker og kjøkken de kjente begynte å spørre om de kunne få det samme til sine egne disker.
        </p>
        <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-playfair)", fontWeight: 200, color: "var(--ink-soft)" }}>
          De har allerede bidratt til å bygge opp et komplett butikkonsept for en kunde, med marinader, fiskedisk og tilleggsprodukter. De innså at oppskriften var større enn én butikk kunne romme — og at det ville være synd å holde den for seg selv. Det er den erfaringen de nå tar med seg videre.
        </p>
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
