import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    title: "Proteinas",
    description:
      "Whey protein, isolate y caseina para maximizar la recuperacion y el crecimiento muscular despues del entrenamiento.",
    image: "/images/proteinas.jpg",
  },
  {
    title: "Creatinas",
    description:
      "Creatina monohidratada y HCL para aumentar tu fuerza, potencia y rendimiento en cada sesion de entrenamiento.",
    image: "/images/creatinas.jpg",
  },
  {
    title: "Ganadores de Peso",
    description:
      "Mass gainers formulados con la mezcla ideal de proteinas y carbohidratos para ganar volumen muscular de forma efectiva.",
    image: "/images/ganadores.jpg",
  },
  {
    title: "Mancuernas",
    description:
      "Equipamiento profesional de alta durabilidad para entrenar en casa o en el gimnasio con la mejor calidad.",
    image: "/images/mancuernas.jpg",
  },
  {
    title: "Vitaminas",
    description:
      "Multivitaminicos y minerales esenciales para mantener tu cuerpo en optimas condiciones y potenciar tu salud.",
    image: "/images/vitaminas.jpg",
  },
]

export function Products() {
  return (
    <section id="catalogo" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestro Catalogo
          </span>
          <h2
            className="text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Nuestros Productos
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3
                  className="mb-2 text-xl font-bold uppercase text-card-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {product.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
                >
                  Ver mas <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
