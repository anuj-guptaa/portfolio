import ProjectCard from './ProjectCard'
import { useState } from 'react'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const projects = [
    {
      id: 1,
      category: 'DevOps & Cloud',
      title: 'EDGE AI Interviewer and Applicant Tracking System',
      description: 'Designed, developed, and deployed an end-to-end AI screening and applicant tracking system.',
      media: {
        type: 'image',
        src: '/projects/edge.png'
      },
      tags: ['Speech-to-Text', 'Document Processing', 'Django', 'React', 'Docker'],
      // github: 'https://github.com',
      live: 'https://aibrainlab.com/edge/',
      video: 'https://youtu.be/zxQdJOtG46Y',
    },
    {
      id: 2,
      category: 'DevOps & Cloud',
      title: 'Full CI/CD Pipelines from Scratch (GitHub | Azure | GCP)',
      description: 'Built complete GitOps pipeline with automated testing, deployment, and rollback capabilities across staging and production with containerized deployment to VMs and Serverless instances.',
      media: {
        type: 'image',
        src: '/projects/github-actions.png'
      },
      tags: ['GitHub Actions', 'GCP Cloud Build', 'Azure DevOps', 'Docker'],
      // github: 'https://github.com',
      // live: 'https://example.com',
    },
    {
      id: 3,
      category: 'DevOps & Cloud',
      title: 'API Library',
      description: 'A collection of ready to use custom APIs encompassing Speech-to-Text and Text-to-Speech functionalities (EN + TH),  OCR (EN + TH), Liveness Detection, Emotion Detection, and more.',
      media: {
        type: 'image',
        src: '/projects/api-library.png'
      },
      tags: ['ML/AI', 'Speech-to-Text', 'OCR', 'Python'],
      // github: 'https://github.com',
      live: 'https://aibrainlab.com/api-library/',
    },
    {
      id: 4,
      category: 'DevOps & Cloud',
      title: 'ESG Studio',
      description: 'An enterprise application that provides real-time ESG (Environmental, Social, Governance) data, analytics, and insights for PLCs and SMEs in Thailand.',
      media: {
        type: 'image',
        src: '/projects/esg-studio.png'
      },
      tags: ['iPaaS', 'RAG', 'Grafana', 'Django', 'Nuxt.js'],
      // github: 'https://github.com',
      live: 'https://aibrainlab.com/esg-studio/',
      video: 'https://youtu.be/cmEnaNqGYzQ',
    },
    {
      id: 5,
      category: 'Backend & Databases',
      title: 'Project Wisdom',
      description: 'Interactive AI avatars that allow interaction with realistic tone and accents, multi-lingual voice synthesis, and engaging conversations with real-world leaders.',
      media: {
        type: 'image',
        src: '/projects/wisdom.png'
      },
      tags: ['Text-to-Speech', 'ML/AI', 'Training', 'RAG', 'Redis'],
      // github: 'https://github.com',
      live: 'https://aibrainlab.com/wisdom/',
    },
    {
      id: 6,
      category: 'Backend & Databases',
      title: 'Microservices Backend System',
      description: 'Architected microservices with Node.js/Go, implemented service discovery, load balancing, and inter-service communication.',
      media: {
        type: 'image',
        src: '/projects/microservices.jpg'
      },
      tags: ['Node.js', 'gRPC', 'Service Mesh', 'Message Queue'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 7,
      category: 'Backend & Databases',
      title: 'Real-time Data Processing Pipeline',
      description: 'Built Apache Kafka-based real-time data pipeline for event streaming, processing, and analytics at scale.',
      media: {
        type: 'image',
        src: '/projects/data-pipeline.jpg'
      },
      tags: ['Apache Kafka', 'Spark', 'Python', 'Real-time'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 8,
      category: 'AI & ML Deployment',
      title: 'MLOps Platform for Model Serving',
      description: 'Deployed ML models at scale using MLflow, Seldon Core, and Kubernetes with A/B testing and model versioning.',
      media: {
        type: 'image',
        src: '/projects/mlops-platform.jpg'
      },
      tags: ['MLflow', 'Seldon Core', 'Kubernetes', 'Model Serving'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 9,
      category: 'AI & ML Deployment',
      title: 'LLM Application & RAG Pipeline',
      description: 'Built production LLM application with vector databases, RAG pipeline, and fine-tuned models for enterprise use.',
      media: {
        type: 'image',
        src: '/projects/llm-rag.jpg'
      },
      tags: ['LLM', 'RAG', 'Vector DB', 'Prompt Engineering'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ]

  const categories = ['All', 'DevOps & Cloud', 'Backend & Databases', 'AI & ML Deployment']
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-black font-medium text-sm">Featured Work</span>
          <h2 className="text-5xl font-bold mt-2 mb-4 text-black">Work & Personal Projects</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A selection products and projects I've architected and deployed.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                selectedCategory === cat
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
