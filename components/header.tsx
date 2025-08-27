"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About & Vision", href: "/about" },
    { name: "Communities", href: "/communities" },
    { name: "Projects & Events", href: "/projects" },
    { name: "Contribute", href: "/contribute" },
  ]

  return (
    <header className="bg-[#F4E1C1]/95 backdrop-blur-sm border-b border-[#1A4E8A] sticky top-0 z-50" role="banner">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-20">
          {/* Section 1: Logo/Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#1A4E8A] rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-[#F4E1C1] font-bold text-lg">O</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg text-[#1A4E8A] tracking-tight">Oasis & Mirage</span>
              <span className="text-xs text-[#8B6F47] -mt-0.5">From mirage to community</span>
            </div>
          </Link>

          {/* Section 2: Navigation Links - Capsule Style */}
          <div className="hidden lg:flex items-center">
            <div className="bg-[#F4E1C1] rounded-full px-2 py-3 flex items-center gap-1 border-2 border-[#1A4E8A]">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#1A4E8A] hover:text-white hover:bg-[#1A4E8A] hover:shadow-sm transition-all duration-200 font-medium text-sm px-4 py-2 rounded-full"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Section 3: CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              asChild
              className="bg-[#1A4E8A] hover:bg-[#1A4E8A]/90 text-white px-8 py-3 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-200 text-base"
            >
              <Link href="/contribute">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 hover:bg-muted/50 rounded-full"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#1A4E8A] bg-[#F4E1C1]/95 backdrop-blur-sm">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#1A4E8A] hover:text-white hover:bg-[#1A4E8A] transition-colors font-medium py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-[#1A4E8A] hover:bg-[#1A4E8A]/90 text-white w-fit mt-2 px-6 py-2 rounded-full font-medium shadow-sm"
              >
                <Link href="/contribute">Donate Now</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
