"use client";

const links = [
  { label: "Historien", href: "/historien" },
  { label: "Hva vi tilbyr", href: "/hva-vi-tilbyr" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function SiteNav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ backgroundColor: "transparent" }}
    >
      <a
        href="/"
        className="text-lg tracking-tight"
        style={{ color: "var(--ink)", fontFamily: "var(--font-marine-sikona)", fontFeatureSettings: "'liga' 1" }}
      >
        Marinadehuset
      </a>
      <div className="hidden md:flex items-center gap-8">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-lg transition-colors duration-200"
            style={{ color: "#ffffff", fontFamily: "var(--font-satoshi)", fontWeight: 700 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
