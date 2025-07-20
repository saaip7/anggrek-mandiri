"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react"

export default function ContactSection() {
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
    <section
      id="kontak"
      ref={sectionRef}
      className="py-16 md:py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-600"
    >
      <div className="container mx-auto px-4 md:px-12">
        <div className={`text-center mb-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Hubungi Kami</h2>
          <p className="text-lg leading-relaxed max-w-xl mx-auto text-white/80">
            Rencanakan kunjungan Anda atau dapatkan informasi lebih lanjut
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="flex items-center space-x-4 glass-dark rounded-lg p-4">
                <MapPin className="h-6 w-6 text-pink-300 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white">Alamat</h3>
                  <p className="text-white/80 text-sm">Desa Sukamaju, Kec. Cianjur, Jawa Barat</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 glass-dark rounded-lg p-4">
                <Phone className="h-6 w-6 text-pink-300 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white">WhatsApp</h3>
                  <p className="text-white/80 text-sm">+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 glass-dark rounded-lg p-4">
                <Clock className="h-6 w-6 text-pink-300 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white">Jam Buka</h3>
                  <p className="text-white/80 text-sm">08:00 - 17:00 WIB (Setiap Hari)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 glass-dark rounded-lg p-4">
                <Mail className="h-6 w-6 text-pink-300 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white">Email</h3>
                  <p className="text-white/80 text-sm">info@kampunganggrek.com</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="glass-dark rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Kontak Cepat</h3>
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold shadow-lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Telepon Langsung
                  </Button>
                </div>

                <div className="mt-6 text-center">
                  <div className="w-24 h-24 bg-white/10 rounded-lg mx-auto flex items-center justify-center mb-3">
                    <div className="text-center">
                      <div className="text-xl">📱</div>
                      <span className="text-white text-xs">QR Code</span>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">Scan untuk WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
