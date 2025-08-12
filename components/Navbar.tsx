"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#leadership", label: "Leadership" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border-b border-blue-200/20 dark:border-blue-800/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-teal-500 transition-colors duration-300" />
                <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-lg group-hover:bg-teal-500/30 transition-all duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
                Sashi Pritam
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium relative group px-3 py-2"
                  >
                    {item.label}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              ) : (
                <Sun className="h-5 w-5 text-emerald-400" />
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              ) : (
                <Menu className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl mt-2 border border-blue-200/20 dark:border-blue-800/20 shadow-2xl">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
