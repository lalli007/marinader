import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export default function Historien() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFF5F5" }}>
      <SiteNav />

      {/* ── OPPRINNELSEN ── */}
      <section className="px-6 pt-32 pb-16 max-w-md mx-auto">
        <h2
          className="text-2xl mb-6"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, color: "#4A4A4A" }}
        >
          Opprinnelsen:
        </h2>
        <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "var(--font-syne)", fontWeight: 400, color: "#4A4A4A" }}>
          Over ni år drev vi familiebedrift innen fisk og bygde opp tre butikker. Underveis oppdaget vi nøkkelen til suksess: marinadene. De ble raskt en favoritt blant kundene og satte en ny standard for hvordan fisk og kjøtt kunne tilberedes enkelt og med smak.
        </p>
        <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-syne)", fontWeight: 400, color: "#4A4A4A" }}>
          Med den erfaringen har vi nå startet et nytt selskap for å tilby marinadene til deg. Marinadene er laget for å fremheve råvarene og skape gode måltider, både til hverdags og spesielle anledninger.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl">
          <img
            src="/Foto/avis-fiskehuset2.jpg"
            alt="Avisomtale: Fiskelykke på Kolbotn"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* ── VENDEPUNKTET ── */}
      <section className="px-6 pb-16 max-w-md mx-auto">
        <h2
          className="text-2xl mb-6"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, color: "#4A4A4A" }}
        >
          Vendepunktet
        </h2>
        <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-syne)", fontWeight: 400, color: "#4A4A4A" }}>
          Butikker og kjøkken de kjente begynte å spørre om de kunne få det samme til sine egne disker. De har allerede bidratt til å bygge opp et komplett butikkonsept for en kunde, med marinader, fiskedisk og tilleggsprodukter. De innså at oppskriften var større enn én butikk kunne romme, og at det ville være synd å holde den for seg selv. Det er den erfaringen de nå tar med seg videre.
        </p>
      </section>

      {/* ── VIDEO ── */}
      <section className="px-6 pb-16 max-w-3xl mx-auto">
        <div className="w-full overflow-hidden" style={{ height: "clamp(220px, 44vw, 500px)" }}>
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

      {/* ── CTA / KONTAKT ── */}
      <div className="px-6 py-20 text-center" style={{ backgroundColor: "#4A4A4A" }}>
        <p
          className="mx-auto mb-8"
          style={{
            fontFamily: "var(--font-marine-sikona)",
            fontFeatureSettings: "'liga' 1",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(22px, 3.5vw, 30px)",
            maxWidth: "480px",
            color: "#FFF5F5",
          }}
        >
          Vil du ha den samme historien bak din egen disk?
        </p>
        <a
          href="/kontakt"
          className="inline-block px-8 py-3 text-sm tracking-wide transition-colors duration-200"
          style={{ fontFamily: "var(--font-marine-sikona)", fontFeatureSettings: "'liga' 1", border: "1px solid #FFF5F5", color: "#FFF5F5" }}
        >
          Ta kontakt
        </a>
      </div>

      <SiteFooter />
    </main>
  );
}
