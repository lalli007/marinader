export default function SiteFooter() {
  return (
    <footer className="px-6 py-8 text-center" style={{ borderTop: "1px solid var(--gold-line)" }}>
      <p
        className="text-xs tracking-widest uppercase"
        style={{ fontFamily: "var(--font-inter)", color: "#4A4A4A" }}
      >
        © {new Date().getFullYear()} Marinadehuset — Kolbotn
      </p>
    </footer>
  );
}
