import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kampung Anggrek Mandiri - Destinasi Wisata Anggrek Terbaik",
  description:
    "Jelajahi keindahan Kampung Anggrek Mandiri, destinasi wisata berbasis komunitas dengan koleksi anggrek terlengkap dan pengalaman budaya autentik Indonesia.",
  keywords: "wisata anggrek, kampung anggrek, wisata edukasi, wisata alam, anggrek indonesia",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
