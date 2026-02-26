"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function CtaBanner() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="relative overflow-hidden bg-secondary py-24">
      {/* Decorative accent */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
          Comunidad JhonkyFit
        </span>
        <h2
          className="mb-4 text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Unite a JhonkyFit
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Recibe un <span className="font-bold text-primary">10% de descuento</span> en tu primera
          compra y accede a ofertas exclusivas, novedades y consejos fitness directo en tu correo.
        </p>

        {submitted ? (
          <div className="rounded-xl border border-primary/30 bg-primary/10 p-6">
            <p className="text-lg font-semibold text-primary">
              Gracias por suscribirte! Revisa tu correo para obtener tu descuento.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="email" className="sr-only">Correo electronico</label>
            <input
              id="email"
              type="email"
              placeholder="Tu correo electronico"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg border border-border bg-input px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              <Send className="h-4 w-4" />
              Suscribirme
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
