import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  specialization: string;
}

interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
}

interface EducationProps {
  education: Education[];
  certifications: Certification[];
}

const Education: React.FC<EducationProps> = ({ education, certifications }) => {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-3 text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-lg text-blue-600 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 mb-2">
                    Specialization: {edu.specialization}
                  </p>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-3 text-teal-600" />
              Professional Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-lg text-teal-600 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{cert.year}</span>
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

export default Education;