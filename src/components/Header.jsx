import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-black">
              Anuj Gupta
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-black transition font-medium">
              Home
            </a>
            <a href="#projects" className="text-gray-700 hover:text-black transition font-medium">
              Projects
            </a>
            <a href="#skills" className="text-gray-700 hover:text-black transition font-medium">
              Skills
            </a>

            <a href="#contact" className="text-gray-700 hover:text-black transition font-medium">
              Contact
            </a>
                        {/* <a
              href="projects/resume.pdf"
              download="Anuj_Gupta_Resume.pdf"
              className="flex items-center gap-1 text-gray-700 hover:text-black transition font-medium"
            >
              <Download size={18} />
              Resume
            </a> */}
            <a
              href="#contact"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition font-medium"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a
              href="#home"
              className="block text-gray-700 hover:text-black transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className="block text-gray-700 hover:text-black transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block text-gray-700 hover:text-black transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            {/* <a
              href="projects/resume.pdf"
              download="Anuj_Gupta_Resume.pdf"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              <Download size={18} />
              Resume
            </a> */}
            <a
              href="#contact"
              className="block text-gray-700 hover:text-black transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
