import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Archman Consultants - Planning & Engineering Solutions",
  description:
    "Redefining urban and architectural landscapes with sustainable, functional, and aesthetically refined spaces that elevate daily life.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans ${outfit.variable} antialiased`}>{children}</body>
    </html>
  )
}
