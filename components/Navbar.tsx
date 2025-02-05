"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              SP
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#about" className="hover:text-primary">
                About
              </Link>
              <Link href="#education" className="hover:text-primary">
                Education
              </Link>
              <Link href="#experience" className="hover:text-primary">
                Experience
              </Link>
              <Link href="#projects" className="hover:text-primary">
                Projects
              </Link>
              <Link href="#achievements" className="hover:text-primary">
                Achievements
              </Link>
              <Link href="#leadership" className="hover:text-primary">
                Leadership
              </Link>
              <Link href="#contact" className="hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

