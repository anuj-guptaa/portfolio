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
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, url: 'mailto:your.email@example.com', label: 'Email' },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-blue-400 font-medium text-sm">Get in Touch</span>
          <h2 className="text-5xl font-bold mt-2 mb-4">Let's Scale Infrastructure Together</h2>
          <p className="text-slate-400 text-lg">
            I'm always interested in discussing cloud architecture, DevOps challenges, and infrastructure opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg focus:border-blue-500 focus:outline-none transition text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg focus:border-blue-500 focus:outline-none transition text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg focus:border-blue-500 focus:outline-none transition text-white resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
              >
                {submitted ? 'Message Sent! ✓' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="p-6 rounded-lg border border-slate-800 bg-slate-900/50">
              <h3 className="text-lg font-bold mb-3">Contact Information</h3>
              <div className="space-y-4 text-slate-400">
                <p>
                  <span className="font-medium text-white">Email:</span>
                  <br />
                  your.email@example.com
                </p>
                <p>
                  <span className="font-medium text-white">Location:</span>
                  <br />
                  San Francisco, CA
                </p>
                <p>
                  <span className="font-medium text-white">Availability:</span>
                  <br />
                  Available for DevOps consulting & infrastructure projects
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Connect with me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition group"
                    >
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition" />
                      <span className="group-hover:text-blue-400 transition">{link.label}</span>
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
