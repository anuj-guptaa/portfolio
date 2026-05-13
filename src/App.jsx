import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Gallery />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
