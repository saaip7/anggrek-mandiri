"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1746462133430-d030030aa21a?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Kebun Anggrek Utama dengan Koleksi Lengkap",
    description: "Jelajahi ratusan spesies anggrek yang dibudidayakan dengan penuh kasih oleh komunitas kami",
  },
  {
    src: "https://images.unsplash.com/photo-1743635925111-07d10e46e2b6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pemandangan Desa yang Asri",
    description: "Nikmati udara segar pegunungan dan pemandangan hijau yang menyejukkan mata",
  },
  {
    src: "https://images.unsplash.com/photo-1722104628976-26394bc82dde?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Aktivitas Wisata Edukatif",
    description: "Belajar langsung dari petani berpengalaman tentang teknik budidaya anggrek tradisional",
  },
  {
    src: "https://images.unsplash.com/photo-1746462133430-d030030aa21a?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Keluarga Lokal yang Ramah",
    description: "Rasakan kehangatan keramahan Indonesia yang autentik dari keluarga-keluarga desa",
  },
  {
    src: "https://images.unsplash.com/photo-1743635925111-07d10e46e2b6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Spot Foto Instagramable",
    description: "Abadikan momen indah dengan latar belakang pemandangan yang memukau",
  },
  {
    src: "https://images.unsplash.com/photo-1746462133430-d030030aa21a?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Matahari Terbenam di Kebun",
    description: "Saksikan matahari terbenam yang spektakuler di antara hamparan kebun anggrek",
  },
]

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
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

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  return (
    <section id="galeri" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 md:px-12">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Galeri Foto
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-slate-600">
            Sekilas tentang keindahan dan pesona Kampung Anggrek Mandiri
          </p>
        </div>

        {/* Main Carousel Container */}
        <div className={`${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
          <div className="relative mb-8">
            <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
              {/* Main Image */}
              <div className="relative w-full h-full">
                <Image
                  src={galleryImages[currentImage].src}
                  alt={galleryImages[currentImage].alt}
                  fill
                  className="object-cover transition-all duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent" />

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-lg md:text-2xl font-bold mb-2">{galleryImages[currentImage].alt}</h3>
                  <p className="text-sm md:text-base opacity-90 max-w-2xl">{galleryImages[currentImage].description}</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 glass rounded-full p-3 transition-all duration-300 group z-10 hover:scale-110"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 glass rounded-full p-3 transition-all duration-300 group z-10 hover:scale-110"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-white group-hover:scale-110 transition-transform" />
              </button>

              {/* Auto-play Toggle */}
              <button
                onClick={toggleAutoPlay}
                className="absolute top-4 right-4 glass rounded-full p-3 transition-all duration-300 z-10 hover:scale-110"
              >
                {isAutoPlay ? <Pause className="h-4 w-4 md:h-5 md:w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
              </button>
            </div>
          </div>

          {/* Thumbnail Navigation - Desktop Only */}
          <div className="hidden md:flex justify-center mb-6 space-x-4 overflow-x-auto pb-2 py-3">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentImage
                    ? "ring-4 ring-purple-500 scale-110 shadow-lg"
                    : "opacity-70 hover:opacity-100 hover:scale-105"
                }`}
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2">
            {galleryImages.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentImage ? "w-8 bg-gradient-to-r from-purple-500 to-pink-500" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Photo Stats */}
        <div className={`mt-16 ${isVisible ? "animate-fade-in-up animate-delay-600" : "opacity-0"}`}>
          <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Spesies Anggrek</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-2">5 Ha</div>
                <div className="text-sm opacity-90">Luas Kebun</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-2">25+</div>
                <div className="text-sm opacity-90">Keluarga Terlibat</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-2">15</div>
                <div className="text-sm opacity-90">Tahun Berdiri</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
