import React from 'react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  profile: {
    name: string;
    email: string;
    linkedin: string;
    location: string;
  };
}

const Contact: React.FC<ContactProps> = ({ profile }) => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600">
            Ready to discuss how I can contribute to Africa CDC's mission
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-700 mb-6">
                  I'm excited about the opportunity to contribute to Africa CDC's Infodemic Management Platform. 
                  Let's discuss how my experience in health technology and information systems can support your mission.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-4" />
                    <a 
                      href={`mailto:${profile.email}`}
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      {profile.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 text-blue-600 mr-4" />
                    <a 
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-4" />
                    <span className="text-gray-700">{profile.location}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Why Choose Me?
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Proven track record in health technology implementation across Africa
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Deep understanding of infodemic management challenges
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Experience building strategic partnerships with health organizations
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Commitment to evidence-based health information systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;