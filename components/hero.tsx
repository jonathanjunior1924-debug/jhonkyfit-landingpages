import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt="Gym interior con iluminacion dramatica"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Suplementos & Equipamiento
          </span>

          <h1
            className="mb-6 text-5xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Potencia tu{" "}
            <span className="text-primary">Rendimiento</span>{" "}
            al Maximo
          </h1>

          <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Alcanza tus metas fisicas con los mejores suplementos deportivos y equipamiento de entrenamiento.
            Calidad premium, resultados reales.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#catalogo"
              className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Ver Catalogo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#beneficios"
              className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-8 py-3.5 text-base font-semibold text-secondary-foreground transition-all hover:bg-border"
            >
              Conocer Mas
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
