export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Designed & built with DevOps passion, React & ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
