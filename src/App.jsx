import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ExperienceAndEducation from './components/ExperienceAndEducation';
import CertificationsAndLanguages from './components/CertificationsAndLanguages';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <Projects />
        {/* <Gallery /> */}
        <Skills />
        <ExperienceAndEducation />
        <CertificationsAndLanguages />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
