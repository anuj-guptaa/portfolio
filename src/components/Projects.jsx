import ProjectCard from './ProjectCard'
import { useState } from 'react'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const projects = [
    {
      id: 1,
      category: 'DevOps & Cloud',
      title: 'Kubernetes Multi-Cluster Architecture',
      description: 'Designed and deployed multi-cluster Kubernetes infrastructure with auto-scaling, network policies, and service mesh integration.',
      emoji: '☸️',
      tags: ['Kubernetes', 'Helm', 'Istio', 'AWS EKS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 2,
      category: 'DevOps & Cloud',
      title: 'Full CI/CD Pipeline from Scratch',
      description: 'Built complete GitOps pipeline with automated testing, deployment, and rollback capabilities across staging and production.',
      emoji: '🔄',
      tags: ['GitHub Actions', 'ArgoCD', 'Terraform', 'Docker'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 3,
      category: 'DevOps & Cloud',
      title: 'Infrastructure as Code Migration',
      description: 'Migrated legacy infrastructure to cloud using Terraform, managing 200+ resources across multiple environments.',
      emoji: '🏗️',
      tags: ['Terraform', 'AWS', 'CloudFormation', 'Python'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 4,
      category: 'DevOps & Cloud',
      title: 'Observability & Monitoring Stack',
      description: 'Deployed production-grade monitoring using Prometheus, Grafana, and ELK stack with cost optimization.',
      emoji: '📊',
      tags: ['Prometheus', 'Grafana', 'ELK Stack', 'Alertmanager'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 5,
      category: 'Backend & Databases',
      title: 'High-Performance Database Layer',
      description: 'Built scalable database architecture with PostgreSQL, caching with Redis, and query optimization for millions of requests.',
      emoji: '🗄️',
      tags: ['PostgreSQL', 'Redis', 'Query Optimization', 'Replication'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 6,
      category: 'Backend & Databases',
      title: 'Microservices Backend System',
      description: 'Architected microservices with Node.js/Go, implemented service discovery, load balancing, and inter-service communication.',
      emoji: '🔌',
      tags: ['Node.js', 'gRPC', 'Service Mesh', 'Message Queue'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 7,
      category: 'Backend & Databases',
      title: 'Real-time Data Processing Pipeline',
      description: 'Built Apache Kafka-based real-time data pipeline for event streaming, processing, and analytics at scale.',
      emoji: '⚡',
      tags: ['Apache Kafka', 'Spark', 'Python', 'Real-time'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 8,
      category: 'AI & ML Deployment',
      title: 'MLOps Platform for Model Serving',
      description: 'Deployed ML models at scale using MLflow, Seldon Core, and Kubernetes with A/B testing and model versioning.',
      emoji: '🤖',
      tags: ['MLflow', 'Seldon Core', 'Kubernetes', 'Model Serving'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 9,
      category: 'AI & ML Deployment',
      title: 'LLM Application & RAG Pipeline',
      description: 'Built production LLM application with vector databases, RAG pipeline, and fine-tuned models for enterprise use.',
      emoji: '🧠',
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
    <section id="projects" className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-blue-400 font-medium text-sm">Featured Work</span>
          <h2 className="text-5xl font-bold mt-2 mb-4">Infrastructure & DevOps Projects</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of cloud infrastructure, CI/CD pipelines, backend systems, and AI deployment solutions I've architected and deployed.
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
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
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
