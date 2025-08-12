import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Sashi Pritam Manandi Anand",
  description:
    "Innovative AI Engineer and Technology Leader specializing in Machine Learning, Full-Stack Development, and Enterprise Solutions. Experience at NTT DATA, Intel, and Corizo.",
  keywords: "AI Engineer, Machine Learning, Software Developer, Data Science, Technology Leader, Innovation",
  authors: [{ name: "Sashi Pritam Manandi Anand" }],
  openGraph: {
    title: "Sashi Pritam Manandi Anand",
    description: "Innovative AI Engineer with expertise in ML, full-stack development, and leadership",
    url: "https://sashipritam.com",
    siteName: "Sashi Pritam Portfolio",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
