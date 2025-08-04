"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react"

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

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="flex items-center space-x-4 glass-dark rounded-lg p-4">
                <MapPin className="h-6 w-6 text-pink-300 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white">Alamat</h3>
                  <p className="text-white/80 text-sm">Dusun Gerdu, RW.17, Tulungrejo, Kec. Bumiaji, Kota Batu, Jawa Timur 65336</p>
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

              {/* WhatsApp Button */}
              <div className="pt-4">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Location Map */}
            <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.782107310679!2d112.5292784!3d-7.812875099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e787f16a5935ac7%3A0x163a15c533c97f32!2sKampung%20Anggrek%20Mandiri!5e0!3m2!1sen!2sid!4v1754294784678!5m2!1sen!2sid" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
