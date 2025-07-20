"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Flower2, Phone } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#beranda", label: "Beranda" },
    { href: "#tentang", label: "Tentang Kami" },
    { href: "#mengapa", label: "Mengapa Berkunjung" },
    { href: "#galeri", label: "Galeri" },
    { href: "#tiket", label: "Info Tiket" },
    { href: "#kontak", label: "Kontak" },
  ]

  return (
        <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg" 
          : "md:bg-transparent bg-white/95"
      }`}
    >
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#beranda" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <Flower2 className="h-6 w-6 text-white" />
            </div>
            <div className="hidden md:block">
              <div className={`font-bold text-lg transition-colors ${
                isScrolled ? "text-slate-800" : "text-white"
              }`}>Kampung Anggrek</div>
              <div className={`text-xs transition-colors ${
                isScrolled ? "text-purple-600" : "text-white/80"
              }`}>Mandiri</div>
            </div>
            <div className="block md:hidden">
              <div className="font-bold text-lg text-slate-800">Kampung Anggrek</div>
              <div className="text-xs text-purple-600">Mandiri</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors font-medium relative group ${
                  isScrolled 
                    ? "text-slate-700 hover:text-purple-600" 
                    : "text-white hover:text-purple-200"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg"
            >
              <Phone className="mr-2 h-4 w-4" />
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 transition-colors ${
            isScrolled ? "text-slate-700" : "text-slate-700 md:text-white"
          }`}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-purple-600 transition-colors font-medium px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
