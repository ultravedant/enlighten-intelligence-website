"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/3d-button"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Work", href: "/our-work" },
    { label: "Services", href: "/#services" },
    { label: "Process", href: "/#approach" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Careers", href: "/careers" },
    { label: "FAQ", href: "/#faq" },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-xl font-semibold z-50">
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

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-foreground hover:text-primary transition-colors font-sans"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button className="rounded-full px-6" href="https://calendly.com/vedantjha/30min" target="_blank">
              Book a 15-min Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-foreground hover:text-primary p-2 transition-colors z-50 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col gap-5 px-8 py-8 items-center text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors font-sans w-full py-1"
                >
                  {link.label}
                </Link>
              ))}
              <div className="w-full border-t border-border/50 my-2" />
              {/* Mobile CTA Button inside Menu */}
              <div className="w-full pb-2">
                <Button
                  className="w-full rounded-full py-4 text-center"
                  href="https://calendly.com/vedantjha/30min"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                >
                  Book a 15-min Call
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
