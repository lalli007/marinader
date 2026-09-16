import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export default function Kontakt() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--paper)", backgroundImage: "url('/Foto/washi-tekstur-tile.png')", backgroundRepeat: "repeat" }}>
      <SiteNav />

      <section className="px-6 pt-32 pb-24 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 opacity-60" style={{ backgroundColor: "var(--gold)" }} />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-inter)", color: "var(--rust)" }}
            >
              Kontakt
            </span>
            <div className="h-px w-12 opacity-60" style={{ backgroundColor: "var(--gold)" }} />
          </div>
          <h2
            className="mb-4"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 300, fontSize: "clamp(28px, 4vw, 44px)", color: "var(--ink)" }}
          >
            Spørsmål om grossistordre eller samarbeid?
          </h2>
          <p
            className="text-base max-w-md mx-auto"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 200, color: "var(--ink-soft)" }}
          >
            Vi hører gjerne fra deg.
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-6">
          {[
            { label: "E-post", value: "hei@marinader.no" },
            { label: "Telefon", value: "+47 123 45 678" },
            { label: "Adresse", value: "Matverkstedet 12\n0150 Oslo, Norge" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p
                className="text-xs tracking-widest uppercase mb-1"
                style={{ fontFamily: "var(--font-inter)", color: "var(--gold)" }}
              >
                {label}
              </p>
              <p
                className="whitespace-pre-line"
                style={{ fontFamily: "var(--font-inter)", color: "var(--ink)" }}
              >
                {value}
              </p>
            </div>
          ))}
          <div className="pt-4" style={{ borderTop: "1px solid var(--gold-line)" }}>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 200, color: "var(--ink-soft)" }}
            >
              Vi svarer normalt innen én virkedag.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
