import React from 'react';
import { CheckCircle } from 'lucide-react';

interface AboutProps {
  profile: {
    skills: string[];
  };
}

const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving digital transformation in African healthcare through innovative technology solutions and strategic leadership.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Africa CDC Infodemic Management?
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                My passion for combating health misinformation and leveraging technology for public health makes me an ideal candidate for the Africa CDC Infodemic Management Platform consultant role.
              </p>
              <p>
                Through HEALTH TECH 4 Africa, I've witnessed firsthand the devastating impact of health misinformation across the continent. My experience in health information systems, combined with deep understanding of African healthcare challenges, positions me uniquely to contribute to this critical initiative.
              </p>
              <p>
                I bring a proven track record of implementing large-scale health technology solutions, building strategic partnerships, and leading cross-functional teams across multiple African countries.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profile.skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mission Statement
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              "To revolutionize healthcare delivery across Africa through innovative technology solutions, 
              evidence-based decision making, and strategic partnerships that prioritize accurate health 
              information and community wellbeing."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;