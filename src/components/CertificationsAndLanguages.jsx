import React from 'react';

const CertificationsAndLanguages = () => {
  const certifications = [
    { id: 1, name: "(In Progress) CompTIA Security+ (SY0-701)", issuer: "CompTIA", year: "2026" },
    { id: 2, name: "Microsoft Certified: Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "2026" },
    { id: 3, name: "Google Cloud Data Analytics Professional Certificate", issuer: "Google", year: "2024" },
    { id: 4, name: "Microsoft Certified: Excel Expert", issuer: "Microsoft", year: "2019" }
  ];

  const languages = [
    { id: 1, name: "English", proficiency: "Native" },
    { id: 2, name: "Thai", proficiency: "Conversational" },
    { id: 3, name: "Hindi", proficiency: "Conversational" }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-black font-medium text-sm">Qualifications</span>
          <h2 className="text-5xl font-bold mt-2 mb-4 text-black">Certifications & Languages</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My professional certifications and language proficiencies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certifications Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-black">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="p-6 rounded-lg border border-gray-200 bg-white hover:border-black hover:shadow-md transition-all duration-300">
                  <p className="text-xs text-gray-500">{cert.year}</p>
                  <h4 className="text-lg font-bold text-black mt-1">{cert.name}</h4>
                  <p className="text-gray-600 text-sm">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-black">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.id} className="p-4 rounded-lg border border-gray-200 bg-white flex justify-between items-center">
                  <h4 className="text-md font-semibold text-black">{lang.name}</h4>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsAndLanguages;