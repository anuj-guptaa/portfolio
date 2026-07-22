import { Code2, Database, Layout, Zap, Cloud, Container, Cpu, GitBranch, BarChart3, Layers, Braces, Workflow } from 'lucide-react'

const toolIcons = {
  // Cloud
  'AWS (EC2, ECS, RDS, S3)': Cloud,
  'Kubernetes': Container,
  'Docker': Container,
  'Azure VMs & AKS': Cloud,

  // DevOps
  'Terraform': Cpu,
  'CI/CD Pipelines': Workflow,
  'Monitoring & Observability': BarChart3,
  'Infrastructure Automation': Zap,

  // Backend
  'Node.js': Code2,
  'Python': Code2,
  'Database Design': Database,
  'API Architecture': Braces,

  // Cloud Tools
  'CloudFormation': Layers,
  'Helm': Container,
  'GCP Compute': Cloud,
  'DigitalOcean': Cloud,
  'Vercel': Cloud,

  // Version Control & Collaboration
  'GitHub Actions': GitBranch,
  'Azure DevOps': GitBranch,
  'GCP Cloud Build': GitBranch,

  // Data & ML
  'Apache Kafka': Workflow,
  'Redis': Zap,
  'ML Model Serving': Cpu,
  'Data Pipelines': Workflow,

  // Backend Frameworks
  'Express': Code2,
  'FastAPI': Code2,
  'gRPC': Braces,
  'GraphQL': Braces,

  // Frontend
  'React': Code2,
  'tailwind CSS': Layout,
  'TypeScript': Code2,
  'Vue.js': Code2,
  'Next.js': Code2,
  'Django': Code2,
  'Nuxt.js': Code2,
  'Ruby on Rails': Code2,

  // AI/ML
  'LLM Deployment': Cloud,
  'MLOps': Cpu,
  'Vector Databases': Database,
  'RAG Systems': Braces,

  // Other
  'Ansible': Cpu,
  'Jenkins': Workflow,
  'Database Optimization': Database,
  'Security': Zap,
}

export default function Skills() {
  const skillCategories = [
    {
      category: 'Cloud & Infrastructure',
      items: [
        'Docker',
        'Kubernetes',
        'AWS (EC2, ECS, RDS, S3)',
        'Azure VMs & AKS',
        'GCP Compute',
        'Vercel'
      ]
    },
    {
      category: 'DevOps & CI/CD',
      items: [
        'GitHub Actions',
        'GCP Cloud Build',
        'Azure DevOps',
        'Terraform',
        'CI/CD Pipelines',
        'Monitoring & Observability',
        'Infrastructure Automation',
        'CloudFormation'
      ]
    },
    {
      category: 'Backend & Databases',
      items: [
        'Node.js',
        'Python Django, FastAPI, Flask',
        'Redis',
        'PostgreSQL', 'MongoDB',
        'API Architecture',
        'gRPC'
      ]
    },
    {
      category: 'Data & AI/ML',
      items: [
        'Apache Kafka',
        'ML Model Serving',
        'Data Pipelines',
        'LLM Deployment with vLLM, LiteLLM, LangGraph',
        'MLOps with MLFlow, LangSmith',
        'Vector Databases - PGVector, Pinecone',
        'RAG Systems - LangGraph, LangChain'
      ]
    },
    {
      category: 'Frontend & Full-Stack',
      items: [
        'Django',
        'React',
        'Nuxt.js',
        'Vue.js',
        'JavaScript, TypeScript',
        'Ruby on Rails',

      ]
    },
    {
      category: 'Tools & Automation',
      items: [
        'Make, n8n',
        'Jenkins',
        'Database Optimization',
        'Security'
      ]
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          {/* <span className="text-black font-medium text-sm">Core Competencies</span> */}
          <h2 className="text-5xl font-bold mt-2 mb-4 text-black">Core Competencies</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive expertise in cloud platforms, containerization, infrastructure automation, and deployment pipelines.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((skillGroup, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-gray-200 bg-white hover:border-black hover:shadow-lg transition group"
            >
              <h3 className="text-lg font-bold mb-4 text-black group-hover:text-gray-700 transition">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, j) => {
                  const ToolIcon = toolIcons[skill] || Zap
                  return (
                    <li key={j} className="flex items-center gap-2 text-gray-700 text-sm group/item">
                      <ToolIcon className="w-4 h-4 flex-shrink-0 text-gray-500 group-hover/item:text-black transition" />
                      <span className="group-hover/item:text-black transition">{skill}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

