import { ShieldCheck, Truck, HeartPulse } from "lucide-react"

const benefits = [
  {
    icon: ShieldCheck,
    title: "Productos de Alta Pureza",
    description:
      "Todos nuestros suplementos pasan por estrictos controles de calidad para garantizarte la maxima pureza y efectividad.",
  },
  {
    icon: Truck,
    title: "Envios en 24 Horas",
    description:
      "Recibe tus productos en tiempo record. Despachos rapidos a toda la region para que no frenes tu progreso.",
  },
  {
    icon: HeartPulse,
    title: "Asesoria Nutricional Gratuita",
    description:
      "Nuestro equipo de expertos te guia en la seleccion de los suplementos ideales para alcanzar tus objetivos.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Por que elegirnos
          </span>
          <h2
            className="text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Tu Exito es Nuestra Mision
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-card-foreground">{benefit.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
