"use client"

import { useEffect, useRef, useState } from "react"
import { Flower2, Coffee, Car, Utensils, Home, Leaf } from "lucide-react"

const facilities = [
  {
    icon: Flower2,
    title: "Tur Kebun Anggrek",
    description: "Jalan-jalan terpandu melalui koleksi anggrek yang luas dengan penjelasan ahli",
    color: "text-[#CE93D8]",
  },
  {
    icon: Coffee,
    title: "Warung Kopi Tradisional",
    description: "Nikmati kopi lokal sambil menikmati pemandangan kebun anggrek yang indah",
    color: "text-[#CE93D8]",
  },
  {
    icon: Car,
    title: "Area Parkir",
    description: "Tempat parkir yang aman dan nyaman untuk mobil dan sepeda motor",
    color: "text-[#CE93D8]",
  },
  {
    icon: Utensils,
    title: "Warung Makanan Lokal",
    description: "Cicipi camilan dan makanan khas Indonesia yang disiapkan keluarga desa",
    color: "text-[#CE93D8]",
  },
  {
    icon: Home,
    title: "Homestay",
    description: "Menginap bersama keluarga lokal untuk pengalaman budaya yang mendalam",
    color: "text-[#CE93D8]",
  },
  {
    icon: Leaf,
    title: "Workshop Anggrek",
    description: "Pelajari teknik budidaya anggrek dari petani berpengalaman",
    color: "text-[#CE93D8]",
  },
]

export default function FacilitiesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="fasilitas" ref={sectionRef} className="py-16 md:py-24 bg-[#CE93D8]/10">
      <div className="container mx-auto px-4 md:px-12">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#4E342E] mb-4">Fasilitas & Aktivitas</h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-[#4E342E]/80">
            Segala yang Anda butuhkan untuk kunjungan yang berkesan ke desa kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <facility.icon className={`h-6 w-6 ${facility.color} mr-3`} />
                <h3 className="text-lg font-bold text-[#4E342E]">{facility.title}</h3>
              </div>
              <p className="text-[#4E342E]/80 leading-relaxed">{facility.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Map Placeholder */}
        <div className={`mt-16 ${isVisible ? "animate-fade-in-up animate-delay-600" : "opacity-0"}`}>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#4E342E] text-center mb-6">Peta Fasilitas Desa</h3>
            <div className="aspect-video bg-gradient-to-br from-[#2E7D32]/20 to-[#CE93D8]/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-[#4E342E]/70">Peta interaktif fasilitas akan segera hadir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
