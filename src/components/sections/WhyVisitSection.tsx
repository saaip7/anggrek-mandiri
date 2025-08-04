"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TreePine, Flower2, Users } from "lucide-react"

const features = [
  {
    icon: TreePine,
    title: "Suasana Alam yang Asri",
    description: "Nikmati udara segar pegunungan dan pemandangan hijau yang menyejukkan mata",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Flower2,
    title: "Kebun Anggrek Terlengkap",
    description: "Temukan spesies anggrek langka dan indah di kebun yang terawat dengan baik",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Pengalaman Berbasis Komunitas",
    description: "Nikmati interaksi autentik dengan keluarga lokal dan pelajari praktik tradisional",
    gradient: "from-indigo-500 to-purple-500",
  },
]

export default function WhyVisitSection() {
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
    <section id="mengapa" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Mengapa Berkunjung ke Sini?
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-slate-600">
            Rasakan perpaduan sempurna antara keindahan alam, kekayaan budaya, dan kehangatan komunitas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className={`mt-16 text-center ${isVisible ? "animate-fade-in-up animate-delay-600" : "opacity-0"}`}>
          <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Pengalaman yang Tak Terlupakan Menanti Anda!</h3>
            <p className="text-md md:text-lg opacity-90 max-w-3xl mx-auto">
              Dari pembelajaran tentang budidaya anggrek hingga menikmati kopi lokal sambil menyaksikan matahari
              terbenam di antara kebun yang hijau, setiap momen di sini adalah kenangan berharga.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
