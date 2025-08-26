import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Studio Tańca - Poczuj magię tańca i rytmu",
  description:
    "Nowoczesne studio tańca oferujące zajęcia grupowe, indywidualne, pierwszy taniec, wieczory panieńskie i więcej. Dołącz do nas!",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`font-sans ${cormorant.variable} ${manrope.variable} antialiased`}>{children}</body>
    </html>
  )
}
