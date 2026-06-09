import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-black">
              Hello, I'm a{' '}
              <span className="text-black font-black">
                DevOps, Full-Stack, and AI Engineer
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              I design, build, and manage scalable cloud applications & infrastructure. Developing & automating deployments, optimizing systems, and enabling teams to ship faster.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition font-medium"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="projects/resume.pdf"
                download="Anuj_Gupta_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-black rounded-lg hover:bg-gray-50 transition font-medium"
              >
                <Download size={20} />
                Download Resume
              </a>
              {/* <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition font-medium"
              >
                Get in Touch
              </a> */}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Placeholder for profile image */}
              <div className="w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2  flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="projects/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div
                  id="placeholder"
                  className="absolute inset-0 hidden bg-gradient-to-br from-gray-100 to-gray-200 items-center justify-center text-gray-500"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2"></div>
                    {/* <p className="text-sm font-medium">Add your profile image</p> */}
                    <p className="text-xs text-gray-400">(public/profile.jpg)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="mt-16 flex justify-center">
          <div className="text-gray-500 text-sm animate-pulse">Scroll to explore</div>
        </div> */}
      </div>
    </section>
  )
}
