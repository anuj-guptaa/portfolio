import React from 'react';

const ExperienceAndEducation = () => {
  const experiences = [
    {
      id: 1,
      role: "Technical Lead",
      company: "AI Brain Lab",
      logo: "projects/ai-brain-lab.png",
      duration: "April 2024 - May 2026",
      description: "Responsible for building scalable backends, complete with databases, data-warehousing, LLM flow development + deployment as well as production-ready integration and CI/CD procedures of applications."
    },
        {
      id: 2,
      role: "AI Engineer Intern",
      company: "AI Brain Lab",
      logo: "projects/ai-brain-lab.png",
      duration: "Sep 2023 - April 2024",
      description: "Develop LLM-integrated applications and contribute to the development of AI-powered solutions."
    }
  ];

  const educations = [
    {
      id: 1,
      degree: "Master of Engineering in Data Science and Artificial Intelligence",
      institution: "Asian Institute of Technology, Thailand",
      logo: "projects/ait-logo.jpg",
      year: "2021 - 2024"
    },
    {
      id: 2,
      degree: "(Hons.) Bachelor of Engineering in Chemical Engineering",
      institution: "University of Nottingham, UK",
      logo: "projects/nottingham-logo.png",
      year: "2018 - 2021"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-black font-medium text-sm">My Journey</span>
          <h2 className="text-5xl font-bold mt-2 mb-4 text-black">Experience & Education</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A timeline of my professional career and academic background.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Work Experience Column */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-black text-center md:text-left">Work Experience</h3>
            <div className="relative border-l-2 border-gray-200 space-y-12 pl-6">
              {/* Timeline indicator */}
              <div className="absolute -left-1.5 top-0 h-full w-3"></div>
              {experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-[30px] top-1 h-3 w-3 rounded-full bg-black"></div>
                  <p className="text-sm text-gray-500 mb-1">{exp.duration}</p>
                  <h4 className="text-xl font-bold text-black">{exp.role}</h4>
                  <div className="flex items-center gap-2 my-1">
                    {exp.logo && (
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gray-100 rounded">
                        <img src={exp.logo} alt={`${exp.company} logo`} className="max-w-full max-h-full object-contain rounded" />
                      </div>
                    )}
                    <p className="font-medium text-gray-700">{exp.company}</p>
                  </div>
                  <p className="text-gray-600 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-black text-center md:text-left">Education</h3>
            <div className="relative border-l-2 border-gray-200 space-y-12 pl-6">
              <div className="absolute -left-1.5 top-0 h-full w-3"></div>
              {educations.map((edu) => (
                <div key={edu.id} className="relative">
                  <div className="absolute -left-[30px] top-1 h-3 w-3 rounded-full bg-black"></div>
                  <p className="text-sm text-gray-500 mb-1">{edu.year}</p>
                  <h4 className="text-xl font-bold text-black">{edu.degree}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    {edu.logo && (
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gray-100 rounded">
                        <img src={edu.logo} alt={`${edu.institution} logo`} className="max-w-full max-h-full object-contain rounded" />
                      </div>
                    )}
                    <p className="font-medium text-gray-700">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;