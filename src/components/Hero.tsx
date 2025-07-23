import React from 'react';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';

interface HeroProps {
  profile: {
    name: string;
    title: string;
    bio: string;
    linkedin: string;
  };
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="block">{profile.name}</span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-blue-600 mt-2">
                  Health Tech Innovator
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
                {profile.title}
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
                {profile.bio}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  LinkedIn Profile
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 p-8 shadow-xl">
              <img
                src="/hero."
                alt="Health Technology Professional"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;