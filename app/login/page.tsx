"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error);
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-950 px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <h1
            className="text-4xl font-semibold text-stone-100 mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Marinader
          </h1>
          <p
            className="text-stone-500 text-sm tracking-widest uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Logg inn for å fortsette
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-xs tracking-widest uppercase text-stone-600 mb-2"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Brukernavn
            </label>
            <input
              type="text"
              required
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full bg-stone-900 border border-stone-800 focus:border-stone-600 outline-none px-4 py-3 text-stone-200 text-sm transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            />
          </div>
          <div>
            <label
              className="block text-xs tracking-widest uppercase text-stone-600 mb-2"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Passord
            </label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full bg-stone-900 border border-stone-800 focus:border-stone-600 outline-none px-4 py-3 text-stone-200 text-sm transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            />
          </div>

          {error && (
            <p
              className="text-red-500 text-xs text-center"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-800 hover:bg-amber-700 disabled:opacity-50 text-amber-100 py-3 text-sm tracking-widest uppercase transition-colors duration-200 mt-2"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {loading ? "Logger inn..." : "Logg inn"}
          </button>
        </form>
      </div>
    </main>
  );
}
