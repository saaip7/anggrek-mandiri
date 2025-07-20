"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="tentang" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tentang Desa Kami
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-600">
              <p>
                Kampung Anggrek Mandiri bermula sebagai komunitas petani sederhana yang bertransformasi menjadi
                destinasi ekowisata yang berkembang melalui kekuatan inisiatif kolektif dan kecintaan terhadap alam.
              </p>
              <p>
                Desa kami adalah rumah bagi ratusan spesies anggrek yang dibudidayakan dengan hati-hati oleh
                keluarga-keluarga lokal yang telah mewariskan pengetahuan mereka turun-temurun. Yang dimulai sebagai
                hobi telah berkembang menjadi model wisata berkelanjutan yang menguntungkan seluruh komunitas.
              </p>
              <p>
                Hari ini, kami dengan bangga mengelola aktivitas wisata kami sendiri, memastikan bahwa setiap pengunjung
                merasakan keramahan Indonesia yang autentik sambil berkontribusi langsung pada kemakmuran komunitas
                kami.
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass rounded-lg p-4 shadow-lg hover:shadow-xl transition-all">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  25+
                </div>
                <div className="text-sm text-slate-500">Keluarga Terlibat</div>
              </div>
              <div className="glass rounded-lg p-4 shadow-lg hover:shadow-xl transition-all">
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  5 Ha
                </div>
                <div className="text-sm text-slate-500">Luas Kebun</div>
              </div>
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1702238152898-d82d43b6a4c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Komunitas Desa Bekerja Sama"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>

              {/* Floating Images */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-xl overflow-hidden shadow-lg animate-float hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1613474877430-d06a1e2f6361?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Koleksi Anggrek Langka"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 w-40 h-28 rounded-xl overflow-hidden shadow-lg animate-float animate-delay-400 hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1740822555702-a07f4d2cd909?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Keluarga Petani Anggrek"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Mobile-friendly floating images */}
              <div className="block md:hidden">
                <div className="absolute -top-3 -right-1 w-40 h-24 rounded-lg overflow-hidden shadow-lg animate-float">
                  <Image
                    src="https://images.unsplash.com/photo-1613474877430-d06a1e2f6361?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Koleksi Anggrek Langka"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -left-1 w-40 h-24 rounded-lg overflow-hidden shadow-lg animate-float animate-delay-400">
                  <Image
                    src="https://images.unsplash.com/photo-1740822555702-a07f4d2cd909?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Keluarga Petani Anggrek"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 glass rounded-lg p-4 shadow-lg">
                <div className="text-md md:text-lg font-semibold text-white">
                  Pengelolaan Mandiri
                </div>
                <div className="text-sm text-white">Sejak 2008</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
