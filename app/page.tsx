import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { Products } from "@/components/products"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <Products />
      <CtaBanner />
      <Footer />
    </main>
  )
}
