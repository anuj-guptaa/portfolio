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
        'AWS (EC2, ECS, RDS, S3)',
        'Kubernetes',
        'Docker',
        'Azure VMs & AKS',
        'GCP Compute',
        'DigitalOcean'
      ]
    },
    {
      category: 'DevOps & CI/CD',
      items: [
        'Terraform',
        'CI/CD Pipelines',
        'Monitoring & Observability',
        'Infrastructure Automation',
        'CloudFormation',
        'Helm'
      ]
    },
    {
      category: 'Backend & Databases',
      items: [
        'Node.js',
        'Python',
        'Database Design',
        'API Architecture',
        'Express',
        'FastAPI',
        'gRPC',
        'GraphQL'
      ]
    },
    {
      category: 'Data & AI/ML',
      items: [
        'Apache Kafka',
        'Redis',
        'ML Model Serving',
        'Data Pipelines',
        'LLM Deployment',
        'MLOps',
        'Vector Databases',
        'RAG Systems'
      ]
    },
    {
      category: 'Frontend & Full-Stack',
      items: [
        'React',
        'tailwind CSS',
        'TypeScript',
        'Vue.js'
      ]
    },
    {
      category: 'Tools & Automation',
      items: [
        'Ansible',
        'Jenkins',
        'Database Optimization',
        'Security'
      ]
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-blue-400 font-medium text-sm">Core Competencies</span>
          <h2 className="text-5xl font-bold mt-2 mb-4">DevOps & Cloud Stack</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive expertise in cloud platforms, containerization, infrastructure automation, and deployment pipelines.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((skillGroup, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-slate-800 bg-slate-900/50 hover:border-blue-500/50 hover:bg-slate-900 transition group"
            >
              <h3 className="text-lg font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, j) => {
                  const ToolIcon = toolIcons[skill] || Zap
                  return (
                    <li key={j} className="flex items-center gap-2 text-slate-300 text-sm group/item">
                      <ToolIcon className="w-4 h-4 flex-shrink-0 text-slate-400 group-hover/item:text-slate-200 transition" />
                      <span className="group-hover/item:text-white transition">{skill}</span>
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

