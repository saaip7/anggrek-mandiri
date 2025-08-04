"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mountain, MessageCircle } from "lucide-react"
import Image from "next/image"

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1639405515203-722c35a054d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Kebun Anggrek yang Indah",
  },
  {
    src: "https://images.unsplash.com/photo-1664059521153-445ab735442b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pemandangan Desa yang Asri",
  },
  {
    src: "https://images.unsplash.com/photo-1559329187-28f41405c60f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Aktivitas Wisata Menarik",
  },
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="beranda" className="px-6 md:px-12 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-indigo-900/40 to-pink-900/60"></div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-white scale-125 shadow-lg" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-12 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 animate-fade-in-up">
          Kampung Anggrek Mandiri
        </h1>
        <p className="text-md md:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animate-delay-200">
          Temukan keindahan desa anggrek yang dikelola mandiri - tempat di mana alam, komunitas, dan tradisi bersatu
          dalam harmoni sempurna
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
            <a
            href="https://maps.app.goo.gl/WWgS5HC7gWiZzxd49"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold uppercase px-8 py-4 text-md md:text-lg transform hover:scale-105 transition-all shadow-lg"
            >
              <Mountain className="mr-2 h-5 w-5" />
              Jelajahi Desa
            </Button>
            </a>
            <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white hover:text-slate-800 font-semibold uppercase px-8 py-4 text-md md:text-lg bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Hubungi via WhatsApp
            </Button>
            </a>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-20 left-4 right-4 z-10 hidden md:block">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center glass rounded-lg p-4 animate-float">
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-white/80 text-sm">Jenis Anggrek</div>
            </div>
            <div className="text-center glass rounded-lg p-4 animate-float animate-delay-200">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-white/80 text-sm">Pengunjung</div>
            </div>
            <div className="text-center glass rounded-lg p-4 animate-float animate-delay-400">
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-white/80 text-sm">Tahun Berdiri</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
