import ImageCarousel from './ImageCarousel'

export default function Gallery() {
  const galleryImages = [
    {
      src: '/gallery/project-1.jpg',
      alt: 'DevOps Architecture Project',
    },
    {
      src: '/gallery/project-2.jpg',
      alt: 'Kubernetes Deployment',
    },
    {
      src: '/gallery/project-3.jpg',
      alt: 'CI/CD Pipeline',
    },
    {
      src: '/gallery/project-4.jpg',
      alt: 'Cloud Infrastructure',
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Project Showcase
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A glimpse of the infrastructure, deployments, and systems I've
            architected and managed.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden border-2 border-black shadow-lg">
          <ImageCarousel
            images={galleryImages}
            autoPlayInterval={5000}
          />
        </div>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Replace sample images in the /public/gallery folder with your own project screenshots
        </p>
      </div>
    </section>
  )
}
