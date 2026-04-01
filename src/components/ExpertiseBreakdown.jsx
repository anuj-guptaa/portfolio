export default function ExpertiseBreakdown() {
  const expertise = [
    { category: 'DevOps & Cloud', percentage: 40, color: 'from-blue-400 to-blue-600' },
    { category: 'Backend & Databases', percentage: 30, color: 'from-purple-400 to-purple-600' },
    { category: 'AI & ML Deployment', percentage: 15, color: 'from-pink-400 to-pink-600' },
    { category: 'Frontend & Full-Stack', percentage: 15, color: 'from-cyan-400 to-cyan-600' },
  ]

  return (
    <section className="py-16 px-4 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Expertise Breakdown</h2>
          <p className="text-slate-400">My focus areas and specialization</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((exp, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-lg">{exp.category}</span>
                <span className="text-blue-400 font-bold text-lg">{exp.percentage}%</span>
              </div>
              
              {/* Progress bar */}
              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${exp.color} transition-all duration-500`}
                  style={{ width: `${exp.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 p-6 rounded-lg bg-slate-800/50 border border-slate-700">
          <p className="text-slate-300 text-center">
            <span className="font-semibold">Specializing in</span> backend systems, cloud infrastructure, and DevOps automation. 
            I bring full-stack capabilities with particular expertise in scalable, production-grade solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
