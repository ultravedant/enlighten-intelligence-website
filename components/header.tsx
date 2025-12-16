import Link from "next/link"
import { Button } from "@/components/ui/3d-button"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-xl font-semibold">
            <div className="w-10 h-10 relative">
              <Image
                src="/ei-logo-circle.png"
                alt="Enlighten Intelligence Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-serif">Enlighten Intelligence</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#approach" className="text-sm text-foreground hover:text-primary transition-colors">
              Process
            </Link>
            <Link href="#pricing" className="text-sm text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm text-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
          <Button className="rounded-full px-6" onClick={() => window.open("https://calendly.com/vedantjha/30min" target="_blank")} >Book a 15-min Call</Button>
        </div>
      </div>
    </header>
  )
}
