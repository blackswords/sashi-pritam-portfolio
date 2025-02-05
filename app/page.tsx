import Home from "@/components/Home"
import About from "@/components/About"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Achievements from "@/components/Achievements"
import Leadership from "@/components/Leadership"
import Contact from "@/components/Contact"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Leadership />
      <Contact />
    </main>
  )
}

