export default function Home() {
  return (
    <main
      className="h-screen w-screen overflow-hidden relative flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: "var(--paper)", backgroundImage: "url('/Foto/washi-tekstur-tile.png')", backgroundRepeat: "repeat" }}
    >
      <a
        href="/historien"
        className="fixed top-6 left-6 md:top-8 md:left-8 text-base md:text-lg transition-colors duration-200"
        style={{ color: "#ffffff", fontFamily: "var(--font-satoshi)", fontWeight: 700 }}
      >
        Historien
      </a>

      <a
        href="/hva-vi-tilbyr"
        className="fixed top-6 right-6 md:top-8 md:right-8 text-base md:text-lg transition-colors duration-200"
        style={{ color: "#ffffff", fontFamily: "var(--font-satoshi)", fontWeight: 700 }}
      >
        Hva vi tilbyr
      </a>

      <a
        href="/kontakt"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 text-base md:text-lg transition-colors duration-200"
        style={{ color: "#ffffff", fontFamily: "var(--font-satoshi)", fontWeight: 700 }}
      >
        Kontakt
      </a>

      <div className="max-w-2xl mx-auto">
        <p
          className="text-2xl md:text-3xl tracking-tight mb-2"
          style={{ color: "var(--ink)", fontFamily: "var(--font-marine-sikona)" }}
        >
          Marinadehuset
        </p>
        <p
          className="text-xs tracking-[0.15em] uppercase mb-8"
          style={{ fontFamily: "var(--font-marine-sikona)", color: "var(--gold)" }}
        >
          For dagligvare, restaurant og catering
        </p>
        <h1
          className="mb-6 md:mb-8"
          style={{
            color: "var(--ink)",
            fontFamily: "var(--font-playfair)",
            fontWeight: 600,
            fontSize: "clamp(28px, 5vw, 48px)",
            lineHeight: 1.18,
          }}
        >
          Fra en liten lokal fiskedisk til <em style={{ fontStyle: "italic", color: "var(--pine)" }}>marinader folk reiser langt etter</em>
        </h1>
        <p
          className="text-base leading-relaxed mb-3"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 300, color: "var(--ink-soft)" }}
        >
          Etter elleve år, tusenvis av kunder og fem avdelinger ga oss noe man ikke kan lese seg til: vi vet hva som fungerer. Marinadene ble raskt blant butikkens bestselgere og vi hjelper deg med alt du trenger, fra oppsett, gode triks, oppskrifter og anbefalinger.
        </p>
      </div>
    </main>
  );
}
