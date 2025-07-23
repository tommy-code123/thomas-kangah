import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import CMSLayout from './components/cms/CMSLayout';
import ProfileEditor from './components/cms/ProfileEditor';
import ExperienceEditor from './components/cms/ExperienceEditor';
import ProjectsEditor from './components/cms/ProjectsEditor';
import EducationEditor from './components/cms/EducationEditor';
import portfolioData from './data/portfolio.json';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCMS, setShowCMS] = useState(false);
  const [currentCMSSection, setCurrentCMSSection] = useState('profile');
  const [data, setData] = useState(portfolioData);

  // Check for CMS access in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('cms') === 'true') {
      setShowCMS(true);
    }
  }, []);

  const handleDataUpdate = (section: string, newData: any) => {
    setData(prev => ({
      ...prev,
      [section]: newData
    }));
  };

  const handleProfileSave = (profile: any) => {
    handleDataUpdate('profile', profile);
  };

  const handleExperienceSave = (experiences: any) => {
    handleDataUpdate('experiences', experiences);
  };

  const handleProjectsSave = (projects: any) => {
    handleDataUpdate('projects', projects);
  };

  const handleEducationSave = (education: any, certifications: any) => {
    setData(prev => ({
      ...prev,
      education,
      certifications
    }));
  };

  if (showCMS) {
    return (
      <CMSLayout
        currentSection={currentCMSSection}
        onSectionChange={setCurrentCMSSection}
        onBackToPortfolio={() => setShowCMS(false)}
      >
        {currentCMSSection === 'profile' && (
          <ProfileEditor
            profile={data.profile}
            onSave={handleProfileSave}
          />
        )}
        {currentCMSSection === 'experience' && (
          <ExperienceEditor
            experiences={data.experiences}
            onSave={handleExperienceSave}
          />
        )}
        {currentCMSSection === 'projects' && (
          <ProjectsEditor
            projects={data.projects}
            onSave={handleProjectsSave}
          />
        )}
        {currentCMSSection === 'education' && (
          <EducationEditor
            education={data.education}
            certifications={data.certifications}
            onSave={handleEducationSave}
          />
        )}
      </CMSLayout>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        profile={data.profile}
      />
      
      <main>
        <Hero profile={data.profile} />
        <About profile={data.profile} />
        <Experience experiences={data.experiences} />
        <Projects projects={data.projects} />
        <Education education={data.education} certifications={data.certifications} />
        <Contact profile={data.profile} />
      </main>

      {/* CMS Access Button (for demo purposes) */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowCMS(true)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-900 transition-colors duration-200 text-sm"
        >
          Admin CMS
        </button>
      </div>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 {data.profile.name}. Ready to contribute to Africa CDC's mission.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;