import { Mail, Linkedin, Github, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/anujgupta299/', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/anuj-guptaa', label: 'GitHub' },
    { icon: Mail, url: 'mailto:anujg.gupta2000@gmail.com', label: 'Email' },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-black font-medium text-sm">Get in Touch</span>
          <h2 className="text-5xl font-bold mt-2 mb-4 text-black">Let's Scale Infrastructure Together</h2>
          <p className="text-gray-600 text-lg">
            I'm always interested in discussing cloud architecture, DevOps challenges, and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:border-black focus:outline-none transition text-black"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:border-black focus:outline-none transition text-black"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:border-black focus:outline-none transition text-black resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-black text-white hover:bg-gray-900 rounded-lg font-medium transition"
              >
                {submitted ? 'Message Sent! ✓' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="p-6 rounded-lg border border-gray-200 bg-white">
              <h3 className="text-lg font-bold mb-3 text-black">Contact Information</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <span className="font-medium text-black">Email:</span>
                  <br />
                  anujg.gupta2000@gmail.com
                </p>
                <p>
                  <span className="font-medium text-black">Location:</span>
                  <br />
                  Bangkok, TH
                </p>
                <p>
                  <span className="font-medium text-black">Availability:</span>
                  <br />
                  Available for DevOps consulting & infrastructure + AI projects
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-black">Connect with me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-black hover:bg-gray-50 transition group"
                    >
                      <Icon className="w-5 h-5 text-gray-600 group-hover:text-black transition" />
                      <span className="text-gray-700 group-hover:text-black transition">{link.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
