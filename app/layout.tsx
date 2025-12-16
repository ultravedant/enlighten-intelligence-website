import type React from "react"
import type { Metadata } from "next"
import { Instrument_Serif, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Enlighten Intelligence | AI-Powered Solutions for Startups & Growing Businesses",
  description:
    "Transform your startup idea into reality with Enlighten Intelligence. Expert product engineering, AI integration, UX design, and growth strategies. Launch MVPs in 6-8 weeks. Scale your business with intelligent systems and cutting-edge technology solutions.",
  keywords: [
    "AI solutions for startups",
    "product engineering",
    "intelligent systems",
    "MVP development",
    "startup technology partner",
    "business scaling solutions",
    "machine learning integration",
    "UX design agency",
    "growth strategy consulting",
    "software development for startups",
  ],
  authors: [{ name: "Enlighten Intelligence" }],
  creator: "Enlighten Intelligence",
  publisher: "Enlighten Intelligence",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://enlightenintel.com",
    title: "Enlighten Intelligence | AI-Powered Solutions for Startups",
    description:
      "Transform your startup with intelligent systems. Product engineering, AI integration, and growth strategies to scale your business.",
    siteName: "Enlighten Intelligence",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enlighten Intelligence | AI-Powered Solutions for Startups",
    description:
      "Transform your startup with intelligent systems. Product engineering, AI integration, and growth strategies.",
    creator: "@enlightenintel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ei-logo.png" />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
