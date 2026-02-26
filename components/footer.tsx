import { Dumbbell } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span
              className="text-lg font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              JhonkyFit
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            {[
              { name: "Instagram", href: "#" },
              { name: "Facebook", href: "#" },
              { name: "TikTok", href: "#" },
              { name: "WhatsApp", href: "#" },
            ].map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} JhonkyFit. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
