import { MotionConfig } from 'motion/react'
import { useEffect } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { startSmoothScroll } from './smoothScroll'

export default function App() {
  useEffect(() => startSmoothScroll(), [])

  return (
    <MotionConfig reducedMotion="user">
      {/* The page background: a sky gradient fixed to the window in light mode, plain in dark. */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-(image:--page-fill)" aria-hidden="true" />
      <div
        className="pointer-events-none fixed inset-0 z-100 bg-noise opacity-(--grain)"
        aria-hidden="true"
      />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </MotionConfig>
  )
}
