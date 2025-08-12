import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Leadership from "@/components/Leadership"
import Achievements from "@/components/Achievements"
import Certifications from "@/components/Certifications"
import Publications from "@/components/Publications"
import BlogsAndPics from "@/components/BlogsAndPics"
import Contact from "@/components/Contact"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Leadership />
      <Achievements />
      <Certifications />
      <Publications />
      <BlogsAndPics />
      <Contact />
    </main>
  )
}
