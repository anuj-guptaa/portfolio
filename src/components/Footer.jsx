export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} Anuj G. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
          </p>
        </div>
      </div>
    </footer>
  )
}
