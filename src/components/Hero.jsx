import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hello, I'm a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            DevOps & Cloud Engineer
          </span>
        </h1>

        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          I design, build, and manage scalable cloud infrastructure. Automating deployments, optimizing systems, and enabling teams to ship faster.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            View My Work
            <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-700 rounded-lg hover:bg-slate-800 transition font-medium"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-pulse">
          <div className="text-slate-400 text-sm">Scroll to explore</div>
        </div>
      </div>
    </section>
  )
}
