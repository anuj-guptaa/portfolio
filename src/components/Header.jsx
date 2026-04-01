import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-blue-400">
              DevOps Dev
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a
              href="#home"
              className="block hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className="block hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-center"
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
