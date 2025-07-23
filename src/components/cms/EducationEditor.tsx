import React, { useState } from 'react';
import { Save, Plus, Edit2, Trash2, X } from 'lucide-react';

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

interface EducationEditorProps {
  education: Education[];
  certifications: Certification[];
  onSave: (education: Education[], certifications: Certification[]) => void;
}

const EducationEditor: React.FC<EducationEditorProps> = ({ education, certifications, onSave }) => {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education');
  const [editingEducationId, setEditingEducationId] = useState<number | null>(null);
  const [editingCertificationId, setEditingCertificationId] = useState<number | null>(null);
  
  const [educationFormData, setEducationFormData] = useState<Education>({
    id: 0,
    degree: '',
    institution: '',
    year: '',
    specialization: ''
  });

  const [certificationFormData, setCertificationFormData] = useState<Certification>({
    id: 0,
    name: '',
    issuer: '',
    year: ''
  });

  const handleEditEducation = (edu: Education) => {
    setEditingEducationId(edu.id);
    setEducationFormData(edu);
  };

  const handleAddEducation = () => {
    const newId = Math.max(0, ...education.map(e => e.id)) + 1;
    setEditingEducationId(newId);
    setEducationFormData({
      id: newId,
      degree: '',
      institution: '',
      year: '',
      specialization: ''
    });
  };

  const handleSaveEducation = () => {
    if (editingEducationId) {
      const updatedEducation = education.some(e => e.id === editingEducationId)
        ? education.map(e => e.id === editingEducationId ? educationFormData : e)
        : [...education, educationFormData];
      
      onSave(updatedEducation, certifications);
      setEditingEducationId(null);
      setEducationFormData({
        id: 0,
        degree: '',
        institution: '',
        year: '',
        specialization: ''
      });
    }
  };

  const handleDeleteEducation = (id: number) => {
    onSave(education.filter(e => e.id !== id), certifications);
  };

  const handleCancelEducation = () => {
    setEditingEducationId(null);
    setEducationFormData({
      id: 0,
      degree: '',
      institution: '',
      year: '',
      specialization: ''
    });
  };

  const handleEditCertification = (cert: Certification) => {
    setEditingCertificationId(cert.id);
    setCertificationFormData(cert);
  };

  const handleAddCertification = () => {
    const newId = Math.max(0, ...certifications.map(c => c.id)) + 1;
    setEditingCertificationId(newId);
    setCertificationFormData({
      id: newId,
      name: '',
      issuer: '',
      year: ''
    });
  };

  const handleSaveCertification = () => {
    if (editingCertificationId) {
      const updatedCertifications = certifications.some(c => c.id === editingCertificationId)
        ? certifications.map(c => c.id === editingCertificationId ? certificationFormData : c)
        : [...certifications, certificationFormData];
      
      onSave(education, updatedCertifications);
      setEditingCertificationId(null);
      setCertificationFormData({
        id: 0,
        name: '',
        issuer: '',
        year: ''
      });
    }
  };

  const handleDeleteCertification = (id: number) => {
    onSave(education, certifications.filter(c => c.id !== id));
  };

  const handleCancelCertification = () => {
    setEditingCertificationId(null);
    setCertificationFormData({
      id: 0,
      name: '',
      issuer: '',
      year: ''
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Education & Certifications</h2>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
        <button
          onClick={() => setActiveTab('education')}
          className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
            activeTab === 'education'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Education
        </button>
        <button
          onClick={() => setActiveTab('certifications')}
          className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
            activeTab === 'certifications'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Certifications
        </button>
      </div>

      {/* Education Tab */}
      {activeTab === 'education' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Education</h3>
            <button
              onClick={handleAddEducation}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Education
            </button>
          </div>

          {editingEducationId && (
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {education.some(e => e.id === editingEducationId) ? 'Edit Education' : 'Add New Education'}
                </h4>
                <div className="flex gap-2">
                  <button
                    onClick={handleSaveEducation}
                    className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    <Save className="h-3 w-3 mr-1" />
                    Save
                  </button>
                  <button
                    onClick={handleCancelEducation}
                    className="inline-flex items-center px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm"
                  >
                    <X className="h-3 w-3 mr-1" />
                    Cancel
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Degree
                  </label>
                  <input
                    type="text"
                    value={educationFormData.degree}
                    onChange={(e) => setEducationFormData(prev => ({ ...prev, degree: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Institution
                  </label>
                  <input
                    type="text"
                    value={educationFormData.institution}
                    onChange={(e) => setEducationFormData(prev => ({ ...prev, institution: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Year
                  </label>
                  <input
                    type="text"
                    value={educationFormData.year}
                    onChange={(e) => setEducationFormData(prev => ({ ...prev, year: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Specialization
                  </label>
                  <input
                    type="text"
                    value={educationFormData.specialization}
                    onChange={(e) => setEducationFormData(prev => ({ ...prev, specialization: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                    <p className="text-gray-600 text-sm">Specialization: {edu.specialization}</p>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEditEducation(edu)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteEducation(edu.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications Tab */}
      {activeTab === 'certifications' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
            <button
              onClick={handleAddCertification}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Certification
            </button>
          </div>

          {editingCertificationId && (
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {certifications.some(c => c.id === editingCertificationId) ? 'Edit Certification' : 'Add New Certification'}
                </h4>
                <div className="flex gap-2">
                  <button
                    onClick={handleSaveCertification}
                    className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    <Save className="h-3 w-3 mr-1" />
                    Save
                  </button>
                  <button
                    onClick={handleCancelCertification}
                    className="inline-flex items-center px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm"
                  >
                    <X className="h-3 w-3 mr-1" />
                    Cancel
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Certification Name
                  </label>
                  <input
                    type="text"
                    value={certificationFormData.name}
                    onChange={(e) => setCertificationFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Issuer
                  </label>
                  <input
                    type="text"
                    value={certificationFormData.issuer}
                    onChange={(e) => setCertificationFormData(prev => ({ ...prev, issuer: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Year
                  </label>
                  <input
                    type="text"
                    value={certificationFormData.year}
                    onChange={(e) => setCertificationFormData(prev => ({ ...prev, year: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">{cert.name}</h4>
                    <p className="text-teal-600 font-medium">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm">{cert.year}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEditCertification(cert)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteCertification(cert.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationEditor;