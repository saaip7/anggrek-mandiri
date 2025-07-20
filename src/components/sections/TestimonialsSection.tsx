"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Wijaya",
    role: "Travel Blogger",
    avatar: "SW",
    rating: 5,
    text: "\"Kebun anggrek di sini benar-benar menakjubkan! Passion komunitas lokal terhadap tanaman mereka sangat menular. Pengalaman Indonesia yang benar-benar autentik.\"",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    name: "Budi Santoso",
    role: "Keluarga Jakarta",
    avatar: "BS",
    rating: 5,
    text: "\"Destinasi keluarga yang sempurna! Anak-anak senang belajar tentang anggrek, dan kami menikmati suasana yang damai. Kopi lokalnya juga luar biasa!\"",
    color: "bg-gradient-to-br from-indigo-500 to-purple-500",
  },
  {
    name: "Maria Lopez",
    role: "Fotografer Alam",
    avatar: "ML",
    rating: 5,
    text: "\"Sebagai fotografer, saya terpukau dengan varietas anggrek dan spot-spot indah di sini. Keramahan komunitas membuat kunjungan kami tak terlupakan.\"",
    color: "bg-gradient-to-br from-pink-500 to-rose-500",
  },
  {
    name: "Ahmad Rizki",
    role: "Mahasiswa Pertanian",
    avatar: "AR",
    rating: 5,
    text: "\"Workshop budidaya anggrek di sini sangat edukatif. Saya belajar banyak teknik tradisional yang tidak diajarkan di kampus. Sangat recommended!\"",
    color: "bg-gradient-to-br from-violet-500 to-purple-500",
  },
  {
    name: "Lisa Chen",
    role: "Turis Singapura",
    avatar: "LC",
    rating: 5,
    text: "\"What an amazing experience! The orchid gardens are breathtaking and the local community is so welcoming. Will definitely come back with friends!\"",
    color: "bg-gradient-to-br from-purple-500 to-indigo-500",
  },
  {
    name: "Dewi Sartika",
    role: "Ibu Rumah Tangga",
    avatar: "DS",
    rating: 5,
    text: "\"Tempat yang sangat cocok untuk refreshing keluarga. Anak-anak bisa belajar sambil bermain, dan saya bisa menikmati keindahan alam yang menenangkan.\"",
    color: "bg-gradient-to-br from-fuchsia-500 to-pink-500",
  },
  {
    name: "Rudi Hermawan",
    role: "Pengusaha",
    avatar: "RH",
    rating: 5,
    text: "\"Konsep wisata berbasis komunitas ini sangat inspiratif. Selain menikmati keindahan anggrek, kita juga turut mendukung ekonomi lokal.\"",
    color: "bg-gradient-to-br from-indigo-500 to-blue-500",
  },
  {
    name: "Siti Nurhaliza",
    role: "Guru",
    avatar: "SN",
    rating: 5,
    text: "\"Sangat cocok untuk kunjungan edukasi siswa. Materi pembelajaran langsung dari alam dan interaksi dengan petani lokal sangat berharga.\"",
    color: "bg-gradient-to-br from-purple-500 to-violet-500",
  },
]

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const cardsPerSlide = isMobile ? 1 : 3
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide)

  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth < 768
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile)
        setCurrentSlide(0) // Reset to first slide when switching layouts
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [isMobile])

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

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section id="testimoni" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-12">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 mb-4">Kata Pengunjung</h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-slate-600">
            Dengarkan dari mereka yang telah merasakan keajaiban desa kami
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white/80 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-6 w-6 text-slate-700" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white/80 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-6 w-6 text-slate-700" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  <div className={`grid gap-6 py-10 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
                    {testimonials
                      .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                      .map((testimonial, cardIndex) => (
                        <Card
                          key={`${slideIndex}-${cardIndex}`}
                          className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105"
                        >
                          <CardContent className="p-6">
                            {/* Rating Stars */}
                            <div className="flex mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                              ))}
                            </div>

                            {/* Testimonial Text */}
                            <blockquote className="text-slate-600 leading-relaxed mb-6 italic text-sm min-h-[80px]">
                              {testimonial.text}
                            </blockquote>

                            {/* Author Info */}
                            <div className="flex items-center">
                              <div
                                className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg`}
                              >
                                <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                              </div>
                              <div className="min-w-0">
                                <div className="font-semibold text-slate-800 truncate">{testimonial.name}</div>
                                <div className="text-sm text-slate-500 truncate">{testimonial.role}</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true)
                    setCurrentSlide(index)
                    setTimeout(() => setIsAnimating(false), 500)
                  }
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 w-8"
                    : "bg-slate-300 hover:bg-slate-400 w-3"
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-slate-500">
              {currentSlide + 1} dari {totalSlides}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
