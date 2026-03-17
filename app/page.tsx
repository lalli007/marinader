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
    <main className="min-h-screen">
      {/* ── VIDEO ── */}
      <section className="relative w-full overflow-hidden" style={{ maxHeight: "60vh" }}>
        <video
          src="/Video/Fiskedisk.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full object-cover"
          style={{ maxHeight: "60vh" }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1
            className="text-6xl md:text-8xl font-semibold text-stone-100 leading-tight drop-shadow-lg"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Marinader
          </h1>
          <p
            className="text-lg md:text-xl text-stone-300 max-w-lg leading-relaxed mt-6 drop-shadow"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
          >
            Ni unike marinader — laget for å løfte smaken av fisk og kjøtt til nye høyder.
          </p>
          <a
            href="/om-oss"
            className="mt-8 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 text-stone-100 px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Les mer om oss
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>


      {/* ── MARINADER ── */}
      <section id="marinader" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-semibold text-stone-100 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Våre marinader
          </h2>
          <p
            className="text-stone-500 text-base max-w-md mx-auto mb-8"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
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
                    : "border border-stone-800 text-stone-500 hover:border-stone-600 hover:text-stone-300"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
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
              className="group border border-stone-800 hover:border-stone-600 overflow-hidden"
              style={{ transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
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
              <div className="p-6 bg-stone-950">
                <p
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "var(--font-inter)", color: m.accent, opacity: 0.8 }}
                >
                  {m.tagline}
                </p>
                <h3
                  className="text-2xl font-semibold text-stone-100 mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {m.name}
                </h3>
                <p
                  className="text-stone-500 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                >
                  {m.description}
                </p>
                <div>
                  <p
                    className="text-[10px] tracking-widest uppercase text-stone-600 mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Ingredienser
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {m.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-xs px-2 py-0.5 bg-stone-900 text-stone-400 border border-stone-800"
                        style={{ fontFamily: "var(--font-inter)" }}
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
        <div className="h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />
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
            className="text-4xl md:text-5xl font-semibold text-stone-100 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ta kontakt
          </h2>
          <p
            className="text-stone-500 text-base max-w-md mx-auto"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
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
                  className="text-xs tracking-widest uppercase text-stone-600 mb-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {label}
                </p>
                <p
                  className="text-stone-300 whitespace-pre-line"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {value}
                </p>
              </div>
            ))}
            <div className="pt-4 border-t border-stone-900">
              <p
                className="text-stone-600 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
              >
                Vi svarer normalt innen én virkedag.
              </p>
            </div>
          </div>

          {sent ? (
            <div className="border border-stone-800 p-8 text-center">
              <p
                className="text-amber-600 text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Sendt
              </p>
              <p
                className="text-stone-300 text-2xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Takk for meldingen!
              </p>
              <p
                className="text-stone-500 text-sm mt-2"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
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
                    className="w-full bg-stone-900 border border-stone-800 focus:border-stone-600 outline-none px-4 py-3 text-stone-200 text-sm transition-colors duration-200"
                    style={{ fontFamily: "var(--font-inter)" }}
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
                  className="w-full bg-stone-900 border border-stone-800 focus:border-stone-600 outline-none px-4 py-3 text-stone-200 text-sm transition-colors duration-200 resize-none"
                  style={{ fontFamily: "var(--font-inter)" }}
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
