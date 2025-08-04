import { MapPin, Phone, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const navigationLinks = [
    { href: "#beranda", label: "Beranda" },
    { href: "#tentang", label: "Tentang Kami" },
    { href: "#mengapa", label: "Mengapa Berkunjung" },
    { href: "#galeri", label: "Galeri" },
    { href: "#tiket", label: "Info Tiket" },
    { href: "#kontak", label: "Kontak" },
  ]

  const quickInfo = [
    { icon: MapPin, text: "Dusun Gerdu, RW.17, Tulungrejo, Kec. Bumiaji, Kota Batu, Jawa Timur 65336" },
    { icon: Phone, text: "+62 812-3456-7890" },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg p-1.5">
                <Image 
                  src="/icon anggrek.png" 
                  alt="Kampung Anggrek Icon" 
                  width={36} 
                  height={36} 
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-xl">Kampung Anggrek Mandiri</div>
                <div className="text-sm text-white/70">Destinasi Wisata Anggrek Terbaik</div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Jelajahi keindahan desa anggrek yang dikelola mandiri oleh komunitas lokal. Nikmati pengalaman wisata
              edukasi yang autentik dan berkesan.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/anggrekmandiri/"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm hover:text-purple-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Kontak
            </h3>
            <ul className="space-y-3">
              {quickInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <info.icon className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{info.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="text-sm font-semibold text-purple-300 mb-1">Jam Operasional</div>
              <div className="text-xs text-white/70">
                Senin - Jumat: 08:00 - 17:00 WIB
                <br />
                Sabtu - Minggu: 07:00 - 18:00 WIB
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Kampung Anggrek Mandiri. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-white/50 text-xs mt-2 md:mt-0">Dikelola oleh komunitas, untuk komunitas</p>
        </div>
      </div>
    </footer>
  )
}
