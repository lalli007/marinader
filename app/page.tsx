export default function Home() {
  return (
    <main
      className="h-dvh w-full overflow-hidden relative flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: "#FFE6E6" }}
    >
      <a
        href="/historien"
        className="fixed top-6 left-6 md:top-8 md:left-8 text-base md:text-lg transition-colors duration-200"
        style={{ color: "#000000", fontFamily: "var(--font-satoshi)", fontWeight: 700 }}
      >
        Historien
      </a>

      <a
        href="/hva-vi-tilbyr"
        className="fixed top-6 right-6 md:top-8 md:right-8 text-base md:text-lg transition-colors duration-200"
        style={{ color: "#000000", fontFamily: "var(--font-satoshi)", fontWeight: 700 }}
      >
        Hva vi tilbyr
      </a>

      <a
        href="/kontakt"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 text-base md:text-lg transition-colors duration-200"
        style={{ color: "#000000", fontFamily: "var(--font-satoshi)", fontWeight: 700 }}
      >
        Kontakt
      </a>

      <div className="max-w-2xl mx-auto">
        <p
          className="text-4xl md:text-5xl tracking-tight mb-2"
          style={{ color: "#000000", fontFamily: "var(--font-marine-sikona)", fontFeatureSettings: "'liga' 1" }}
        >
          Marinadehuset
        </p>
        <p
          className="text-xs tracking-[0.15em] uppercase mb-8"
          style={{ fontFamily: "var(--font-marine-sikona)", fontFeatureSettings: "'liga' 1", color: "#000000" }}
        >
          For dagligvare, restaurant og catering
        </p>
        <h1
          className="mb-6 md:mb-8"
          style={{
            color: "#000000",
            fontFamily: "var(--font-playfair)",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: "clamp(28px, 5vw, 48px)",
            lineHeight: 1.18,
          }}
        >
          Fra en liten lokal fiskedisk til Glansmarinader folk reiser langt&nbsp;etter
        </h1>
      </div>
    </main>
  );
}
