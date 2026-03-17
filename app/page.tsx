"use client";

import { useState } from "react";

type Category = "alle" | "fisk" | "kjøtt";

interface Marinade {
  id: number;
  name: string;
  tagline: string;
  description: string;
  ingredients: string[];
  passer: ("fisk" | "kjøtt")[];
  gradient: string;
  accent: string;
  image?: string;
}

const marinader: Marinade[] = [
  {
    id: 1,
    name: "AVO Lafiness Black Garlic Marinade",
    tagline: "Tropisk varme møter søt frukt",
    description:
      "Laget av slaktere og kjøttteknologer av de fineste ingredienser. En trendy smaksprofil med en kraftig men fin balanse av ingredienser. Sort pepper, hvitløk, løpstikke, bukkehornsfrø, gurkemeie, chili og fennikel er kombinert i denne attraktive og glansfulle marinaden.",
    ingredients: ["Sort pepper", "Hvitløk", "Lovage", "Bukkehornsfrø", "Gurkemeie", "Chili", "Fennikel"],
    passer: ["fisk", "kjøtt"],
    gradient: "from-amber-900 via-orange-800 to-red-900",
    accent: "#f97316",
    image: "/Foto/Black-Garlic-3.jpg",
  },
  {
    id: 2,
    name: "Sitron & Urter",
    tagline: "Frisk, ren og duftende",
    description:
      "En klassisk og elegant marinade bygget på fersk sitron og et knippe aromatiske urter. Lys og frisk i smaken — perfekt for å la råvaren skinne gjennom.",
    ingredients: ["Sitronjuice & zest", "Frisk timian", "Rosmarin", "Bladpersille", "Hvitløk", "Olivenolje", "Havssalt"],
    passer: ["fisk", "kjøtt"],
    gradient: "from-lime-950 via-emerald-900 to-teal-950",
    accent: "#84cc16",
  },
  {
    id: 3,
    name: "Teriyaki",
    tagline: "Japansk håndverk i flytende form",
    description:
      "Inspirert av japansk matskultur — en rik, glassaktig marinade med dybde fra soyasaus, sødme fra mirin og en subtil røyk fra sesamolje. Karamelliserer vakkert under varme.",
    ingredients: ["Tamari soyasaus", "Mirin", "Sake", "Brunt sukker", "Ingefær", "Hvitløk", "Sesamolje"],
    passer: ["fisk", "kjøtt"],
    gradient: "from-stone-900 via-amber-950 to-stone-950",
    accent: "#d97706",
  },
  {
    id: 4,
    name: "Chimichurri",
    tagline: "Argentina på en flaske",
    description:
      "En kraftfull, urtedrevet saus direkte fra de argentinske pampasene. Frisk persille og oregano møter rødvinseddik og hvitløk i en marinade som setter smak i enhver biff.",
    ingredients: ["Bladpersille", "Frisk oregano", "Rødvinseddik", "Hvitløk", "Rød chiliflak", "Olivenolje", "Sitron"],
    passer: ["kjøtt"],
    gradient: "from-green-950 via-emerald-950 to-stone-950",
    accent: "#16a34a",
  },
  {
    id: 5,
    name: "Honning & Sennep",
    tagline: "Søt, skarp og uimotståelig",
    description:
      "En tidløs kombinasjon der blomsterhonning og grovkornet sennep skaper en rik, balansert glasur. Gir en vakker, karamellisert skorpe og en nydelig dybde i smaken.",
    ingredients: ["Norsk blomsterhonning", "Grovkornet sennep", "Dijon sennep", "Epleeddik", "Timian", "Hvitløk", "Sort pepper"],
    passer: ["fisk", "kjøtt"],
    gradient: "from-yellow-950 via-amber-900 to-stone-950",
    accent: "#eab308",
  },
  {
    id: 6,
    name: "Røkt Paprika & Hvitløk",
    tagline: "Dybde fra ilden",
    description:
      "En intens og røykfull marinade som bringer smaken av åpen ild til kjøkkenet. Røkt paprika gir karakter og varme, mens rikelig med hvitløk løfter frem alt det beste i kjøttet.",
    ingredients: ["Røkt paprika", "Fersk hvitløk", "Ancho chilipulver", "Tomatpuré", "Olivenolje", "Spisskummen", "Oregano"],
    passer: ["kjøtt"],
    gradient: "from-red-950 via-rose-950 to-stone-950",
    accent: "#dc2626",
  },
  {
    id: 7,
    name: "Mediterran",
    tagline: "Sol, hav og olivenlunder",
    description:
      "En varm og innbydende marinade som fanger essensen av Middelhavet. Solmodne tomater, kalamata-oliven og frisk basilikum skaper en frodig og aromatisk profil.",
    ingredients: ["Kalamata-oliven", "Soltørkede tomater", "Frisk basilikum", "Oregano", "Hvitløk", "Balsamicoeddik", "Olivenolje"],
    passer: ["fisk", "kjøtt"],
    gradient: "from-blue-950 via-indigo-950 to-stone-950",
    accent: "#6366f1",
  },
  {
    id: 8,
    name: "Nordisk",
    tagline: "Ren natur fra fjord til fjell",
    description:
      "En elegant nordisk marinade som hyller skandinaviske smaker. Frisk dill og grovkornet sennep møter lys eddik og honning — en smak av norsk natur og mattradisjon.",
    ingredients: ["Frisk dill", "Grovkornet sennep", "Hvitvinseddik", "Norsk honning", "Rømme", "Sitronzest", "Hvit pepper"],
    passer: ["fisk"],
    gradient: "from-slate-900 via-blue-950 to-slate-950",
    accent: "#64748b",
  },
  {
    id: 9,
    name: "Koreansk Gochujang",
    tagline: "Fermentert dybde og kompleksitet",
    description:
      "Gochujang — Koreas ikon blant chilipaster — gir denne marinaden en unik, dypt fermentert varme. Kompleks, umami-rik og med en langsøm ildhet som bygger seg opp.",
    ingredients: ["Gochujang", "Soyasaus", "Sesamolje", "Hvitløk", "Ingefær", "Risvineddik", "Brunt sukker"],
    passer: ["fisk", "kjøtt"],
    gradient: "from-rose-950 via-red-950 to-stone-950",
    accent: "#f43f5e",
  },
];

export default function Home() {
  const [filter, setFilter] = useState<Category>("alle");
  const [formData, setFormData] = useState({ navn: "", epost: "", melding: "" });
  const [sent, setSent] = useState(false);

  const filtered =
    filter === "alle"
      ? marinader
      : marinader.filter((m) => m.passer.includes(filter));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#faf6ef" }}>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5" style={{ backgroundColor: "#faf6ef" }}>
        <div className="flex items-center gap-10">
          <span className="text-lg font-semibold tracking-tight" style={{ color: "#2c2318", fontFamily: "var(--font-inter)" }}>
            Marinader
          </span>
          <div className="hidden md:flex items-center gap-8">
            {[{ label: "Om oss", href: "/om-oss" }, { label: "Produkter", href: "#marinader" }, { label: "Kontakt", href: "#kontakt" }].map(({ label, href }) => (
              <a key={label} href={href} className="text-sm transition-colors duration-200" style={{ color: "#7c5c2e", fontFamily: "var(--font-inter)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#2c2318")}
                onMouseLeave={e => (e.currentTarget.style.color = "#7c5c2e")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HERO SPLIT ── */}
      <section className="flex h-screen">
        {/* Venstre: tekst */}
        <div className="w-1/2 flex flex-col justify-end px-12 pb-20 pt-24" style={{ backgroundColor: "#faf6ef" }}>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8"
            style={{ color: "#2c2318", fontFamily: "var(--font-inter)" }}
          >
            Ni unike marinader for fisk og kjøtt
          </h1>
          <p
            className="text-base leading-relaxed mb-10 max-w-sm"
            style={{ color: "#5c4a35", fontFamily: "var(--font-inter)", fontWeight: 300 }}
          >
            Inspirert av verdensmat og forankret i håndverk. Laget for å løfte smaken til nye høyder.
          </p>
          <a
            href="/om-oss"
            className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full text-sm transition-all duration-200"
            style={{ border: "1px solid #2c2318", color: "#2c2318", fontFamily: "var(--font-inter)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#2c2318"; (e.currentTarget as HTMLAnchorElement).style.color = "#faf6ef"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#2c2318"; }}
          >
            → Les mer om oss
          </a>
        </div>

        {/* Høyre: bilde */}
        <div className="w-1/2 overflow-hidden">
          <img
            src="/Foto/herbs.JPG"
            alt="Urter"
            className="w-full h-full object-cover"
          />
        </div>
      </section>


      {/* ── MARINADER ── */}
      <section id="marinader" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#2c2318" }}
          >
            Våre marinader
          </h2>
          <p
            className="text-base max-w-md mx-auto mb-8"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300, color: "#5c4a35" }}
          >
            Filtrer etter hva du skal tilberede
          </p>

          <div className="flex items-center justify-center gap-2">
            {(["alle", "fisk", "kjøtt"] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-sm tracking-widest uppercase transition-all duration-200 ${
                  filter === cat
                    ? "bg-amber-800 text-amber-100 border border-amber-700"
                    : "border border-stone-300 hover:border-amber-700"
                }`}
                style={{ fontFamily: "var(--font-inter)", color: filter === cat ? undefined : "#7c5c2e" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((m) => (
            <div
              key={m.id}
              className="group overflow-hidden"
              style={{ border: "1px solid #e0d5c5", transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#c4a882";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#e0d5c5";
              }}
            >
              {/* Colour plate */}
              <div className={`h-40 bg-gradient-to-br ${m.gradient} relative overflow-hidden`}>
                {m.image && (
                  <img src={m.image} alt={m.name} className="absolute inset-0 w-full h-full object-cover" />
                )}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 30% 50%, ${m.accent}, transparent 70%)` }}
                />
                <div className="absolute top-3 right-3 flex gap-1">
                  {m.passer.map((p) => (
                    <span
                      key={p}
                      className="text-[10px] tracking-widest uppercase px-2 py-1 bg-black/40 text-stone-300 backdrop-blur-sm"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: m.accent }}
                />
              </div>

              {/* Content */}
              <div className="p-6" style={{ backgroundColor: "#faf6ef" }}>
                <p
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "var(--font-inter)", color: m.accent }}
                >
                  {m.tagline}
                </p>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-playfair)", color: "#2c2318" }}
                >
                  {m.name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 300, color: "#5c4a35" }}
                >
                  {m.description}
                </p>
                <div>
                  <p
                    className="text-[10px] tracking-widest uppercase mb-2"
                    style={{ fontFamily: "var(--font-inter)", color: "#b09878" }}
                  >
                    Ingredienser
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {m.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-xs px-2 py-0.5"
                        style={{ fontFamily: "var(--font-inter)", backgroundColor: "#f0e9de", color: "#7c5c2e", border: "1px solid #e0d5c5" }}
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, #c4a882, transparent)" }} />
      </div>

      {/* ── KONTAKT ── */}
      <section id="kontakt" className="px-6 py-24 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-amber-800 opacity-60" />
            <span
              className="text-amber-700 text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Kontakt
            </span>
            <div className="h-px w-12 bg-amber-800 opacity-60" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#2c2318" }}
          >
            Ta kontakt
          </h2>
          <p
            className="text-base max-w-md mx-auto"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300, color: "#5c4a35" }}
          >
            Spørsmål om produktene, grossistordrer eller samarbeid? Vi hører gjerne fra deg.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {[
              { label: "E-post", value: "hei@marinader.no" },
              { label: "Telefon", value: "+47 123 45 678" },
              { label: "Adresse", value: "Matverkstedet 12\n0150 Oslo, Norge" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "var(--font-inter)", color: "#b09878" }}
                >
                  {label}
                </p>
                <p
                  className="whitespace-pre-line"
                  style={{ fontFamily: "var(--font-inter)", color: "#2c2318" }}
                >
                  {value}
                </p>
              </div>
            ))}
            <div className="pt-4" style={{ borderTop: "1px solid #e0d5c5" }}>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300, color: "#b09878" }}
              >
                Vi svarer normalt innen én virkedag.
              </p>
            </div>
          </div>

          {sent ? (
            <div className="p-8 text-center" style={{ border: "1px solid #e0d5c5" }}>
              <p
                className="text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-inter)", color: "#7c5c2e" }}
              >
                Sendt
              </p>
              <p
                className="text-2xl"
                style={{ fontFamily: "var(--font-playfair)", color: "#2c2318" }}
              >
                Takk for meldingen!
              </p>
              <p
                className="text-sm mt-2"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300, color: "#b09878" }}
              >
                Vi tar kontakt så snart som mulig.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: "navn", label: "Navn", type: "text", placeholder: "Ditt navn" },
                { id: "epost", label: "E-post", type: "email", placeholder: "din@epost.no" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label
                    className="block text-xs tracking-widest uppercase text-stone-600 mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    required
                    value={formData[id as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                    className="w-full outline-none px-4 py-3 text-sm transition-colors duration-200"
                    style={{ fontFamily: "var(--font-inter)", backgroundColor: "#f0e9de", border: "1px solid #e0d5c5", color: "#2c2318" }}
                    placeholder={placeholder}
                  />
                </div>
              ))}
              <div>
                <label
                  className="block text-xs tracking-widest uppercase text-stone-600 mb-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Melding
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.melding}
                  onChange={(e) => setFormData({ ...formData, melding: e.target.value })}
                  className="w-full outline-none px-4 py-3 text-sm transition-colors duration-200 resize-none"
                  style={{ fontFamily: "var(--font-inter)", backgroundColor: "#f0e9de", border: "1px solid #e0d5c5", color: "#2c2318" }}
                  placeholder="Hva vil du si?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-800 hover:bg-amber-700 text-amber-100 py-3 text-sm tracking-widest uppercase transition-colors duration-200"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Send melding
              </button>
            </form>
          )}
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
