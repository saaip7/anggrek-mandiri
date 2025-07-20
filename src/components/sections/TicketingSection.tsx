"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Clock, MapPin, Users } from "lucide-react"

export default function TicketingSection() {
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
    <section id="tiket" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-purple-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-12 w-full">
        <div className={`max-w-4xl mx-auto text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Informasi Kunjungan
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-12">
            Sistem tiket mandiri kami memastikan kunjungan Anda langsung mendukung komunitas kami
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card
              className={`border-none shadow-lg glass hover:shadow-xl transition-all ${isVisible ? "animate-slide-in-left animate-delay-200" : "opacity-0"}`}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Tiket Masuk</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  Rp 15.000
                </div>
                <p className="text-slate-600 mb-4">per orang</p>
                <ul className="text-left space-y-2 text-slate-600">
                  <li>• Akses ke seluruh kebun</li>
                  <li>• Tur terpandu</li>
                  <li>• Minuman selamat datang</li>
                  <li>• Kesempatan foto</li>
                  <li>• Edukasi budidaya anggrek</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`border-none shadow-lg glass hover:shadow-xl transition-all ${isVisible ? "animate-slide-in-right animate-delay-400" : "opacity-0"}`}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Jam Operasional</h3>
                <div className="space-y-4 text-slate-600">
                  <div>
                    <div className="font-semibold text-slate-800">Senin - Jumat</div>
                    <div>08:00 - 17:00 WIB</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Sabtu - Minggu</div>
                    <div>07:00 - 18:00 WIB</div>
                  </div>
                  <div className="text-sm mt-4 text-slate-500 bg-purple-50 p-3 rounded-lg">
                    💡 Waktu terbaik berkunjung: Pagi hari untuk cuaca yang lebih sejuk
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info Cards */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ${isVisible ? "animate-fade-in-up animate-delay-600" : "opacity-0"}`}
          >
            <div className="glass rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
              <MapPin className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <h4 className="font-bold text-slate-800 mb-2">Lokasi Mudah Dijangkau</h4>
              <p className="text-sm text-slate-600">15 menit dari pusat kota dengan akses jalan yang baik</p>
            </div>
            <div className="glass rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
              <Users className="h-8 w-8 text-indigo-500 mx-auto mb-3" />
              <h4 className="font-bold text-slate-800 mb-2">Grup & Keluarga</h4>
              <p className="text-sm text-slate-600">Diskon khusus untuk rombongan 20+ orang</p>
            </div>
            <div className="glass rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
              <MessageCircle className="h-8 w-8 text-pink-500 mx-auto mb-3" />
              <h4 className="font-bold text-slate-800 mb-2">Reservasi Mudah</h4>
              <p className="text-sm text-slate-600">Booking langsung via WhatsApp tanpa ribet</p>
            </div>
          </div>

          <div className={`${isVisible ? "animate-fade-in-up animate-delay-800" : "opacity-0"}`}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold uppercase px-12 py-4 text-lg transform hover:scale-105 transition-all shadow-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Pesan Sekarang via WhatsApp
            </Button>
            <p className="text-sm text-slate-500 mt-4">
              Atau hubungi kami di <span className="font-semibold">+62 812-3456-7890</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
