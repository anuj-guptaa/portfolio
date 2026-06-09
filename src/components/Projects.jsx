import ProjectCard from './ProjectCard'
import { useState } from 'react'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const projects = [
    {
      id: 1,
      category: 'Full Stack',
      title: 'EDGE AI Interviewer and Applicant Tracking System',
      description: 'Designed, developed, and deployed an end-to-end AI screening and applicant tracking system.',
      media: {
        type: 'image',
        src: 'projects/edge.png'
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
        src: 'projects/github-actions.png'
      },
      tags: ['GitHub Actions', 'GCP Cloud Build', 'Azure DevOps', 'Docker', 'FastAPI'],
      // github: 'https://github.com',
      // live: 'https://example.com',
    },
    {
      id: 3,
      category: 'AI & ML Deployment',
      title: 'API Library',
      description: 'A collection of ready to use custom APIs encompassing Speech-to-Text and Text-to-Speech functionalities (EN + TH),  OCR (EN + TH), Liveness Detection, Emotion Detection, and more.',
      media: {
        type: 'image',
        src: 'projects/api-library.png'
      },
      tags: ['ML/AI', 'Speech-to-Text', 'OCR', 'Django', 'FastAPI'],
      // github: 'https://github.com',
      live: 'https://aibrainlab.com/api-library/',
    },
    {
      id: 4,
      category: 'Full Stack',
      title: 'ESG Studio',
      description: 'An enterprise application that provides real-time ESG (Environmental, Social, Governance) data, analytics, and insights for PLCs and SMEs in Thailand.',
      media: {
        type: 'image',
        src: 'projects/esg-studio.png'
      },
      tags: ['iPaaS', 'RAG', 'Grafana', 'Django', 'Nuxt.js'],
      // github: 'https://github.com',
      live: 'https://aibrainlab.com/esg-studio/',
      video: 'https://youtu.be/cmEnaNqGYzQ',
    },
    {
      id: 5,
      category: 'Full Stack',
      title: 'Project Wisdom',
      description: 'Interactive AI avatars that allow interaction with realistic tone and accents, multi-lingual voice synthesis, and engaging conversations with real-world leaders.',
      media: {
        type: 'image',
        src: 'projects/wisdom.png'
      },
      tags: ['Text-to-Speech', 'ML/AI', 'Training', 'RAG', 'Redis', 'Django'],
      // github: 'https://github.com',
      live: 'https://aibrainlab.com/wisdom/',
    },
    {
      id: 6,
      category: 'Full Stack',
      title: 'Key Account Management System',
      description: 'An AI-first solution for managing and tracking key accounts, including CRM features, document OCR, task and meetings management and more targeted at insurance companies in Thailand.',
      media: {
        type: 'image',
        src: 'projects/kam.png'
      },
      tags: ['ML/AI', 'OCR', 'CI/CD', 'Django', 'React'],
      // github: 'https://github.com',
      // live: 'https://example.com',
    },
    {
      id: 7,
      category: 'Full Stack',
      title: 'AudioCity',
      description: '(Personal) An Audiobook e-commerce platform with upload/download functionality, automated transcript + caption generation, and mock payment gateway integration.',
      media: {
        type: 'image',
        src: 'projects/audiocity.png'
      },
      tags: ['LLM', 'Celery', 'Unit Testing', 'Django', 'React'],
      github: 'https://github.com/anuj-guptaa/audiocity',
      // live: 'https://example.com',
      video: 'https://www.youtube.com/watch?v=IB1XOFk9TNs',
    },
    {
      id: 8,
      category: 'Full Stack',
      title: 'Anytime-IELTS',
      description: '(Hackathon) an AI-powered English language mastery platform for IELTS exam takers. Achieved second place in the education domain.',
      media: {
        type: 'image',
        src: 'projects/anytime-ielts.jpg'
      },
      tags: ['LLM', 'Python', 'JavaScript'],
      github: 'https://github.com/cedriclemercier/anytime-ielts',
      // live: 'https://anytime-ielts.vercel.app/',
    },
    // {
    //   id: 9,
    //   category: 'AI & ML Deployment',
    //   title: 'LLM Application & RAG Pipeline',
    //   description: 'Built production LLM application with vector databases, RAG pipeline, and fine-tuned models for enterprise use.',
    //   media: {
    //     type: 'image',
    //     src: 'projects/llm-rag.jpg'
    //   },
    //   tags: ['LLM', 'RAG', 'Vector DB', 'Prompt Engineering'],
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    // },
  ]

  const categories = ['All', 'Full Stack', 'DevOps & Cloud', 'AI & ML Deployment']
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
            A selection of products and projects I've architected and deployed.
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
