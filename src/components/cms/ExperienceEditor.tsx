import React, { useState } from 'react';
import { Save, Plus, Edit2, Trash2, X } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

interface ExperienceEditorProps {
  experiences: Experience[];
  onSave: (experiences: Experience[]) => void;
}

const ExperienceEditor: React.FC<ExperienceEditorProps> = ({ experiences, onSave }) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Experience>({
    id: 0,
    title: '',
    company: '',
    period: '',
    location: '',
    description: '',
    achievements: []
  });
  const [newAchievement, setNewAchievement] = useState('');

  const handleEdit = (experience: Experience) => {
    setEditingId(experience.id);
    setFormData(experience);
  };

  const handleAdd = () => {
    const newId = Math.max(0, ...experiences.map(e => e.id)) + 1;
    setEditingId(newId);
    setFormData({
      id: newId,
      title: '',
      company: '',
      period: '',
      location: '',
      description: '',
      achievements: []
    });
  };

  const handleSave = () => {
    if (editingId) {
      const updatedExperiences = experiences.some(e => e.id === editingId)
        ? experiences.map(e => e.id === editingId ? formData : e)
        : [...experiences, formData];
      
      onSave(updatedExperiences);
      setEditingId(null);
      setFormData({
        id: 0,
        title: '',
        company: '',
        period: '',
        location: '',
        description: '',
        achievements: []
      });
    }
  };

  const handleDelete = (id: number) => {
    onSave(experiences.filter(e => e.id !== id));
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      id: 0,
      title: '',
      company: '',
      period: '',
      location: '',
      description: '',
      achievements: []
    });
  };

  const addAchievement = () => {
    if (newAchievement.trim()) {
      setFormData(prev => ({
        ...prev,
        achievements: [...prev.achievements, newAchievement.trim()]
      }));
      setNewAchievement('');
    }
  };

  const removeAchievement = (achievementToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      achievements: prev.achievements.filter(achievement => achievement !== achievementToRemove)
    }));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Experience Management</h2>
        <button
          onClick={handleAdd}
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </button>
      </div>

      {editingId && (
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {experiences.some(e => e.id === editingId) ? 'Edit Experience' : 'Add New Experience'}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm"
              >
                <Save className="h-3 w-3 mr-1" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="inline-flex items-center px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm"
              >
                <X className="h-3 w-3 mr-1" />
                Cancel
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Period
              </label>
              <input
                type="text"
                value={formData.period}
                onChange={(e) => setFormData(prev => ({ ...prev, period: e.target.value }))}
                placeholder="e.g., 2020 - Present"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Achievements
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newAchievement}
                onChange={(e) => setNewAchievement(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addAchievement()}
                placeholder="Add an achievement"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={addAchievement}
                className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-2">
              {formData.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2 p-2 bg-white rounded border">
                  <span className="flex-1 text-sm">{achievement}</span>
                  <button
                    onClick={() => removeAchievement(achievement)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {experiences.map((experience) => (
          <div key={experience.id} className="bg-white border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{experience.title}</h3>
                <p className="text-blue-600 font-medium">{experience.company}</p>
                <p className="text-gray-600 text-sm">{experience.period} • {experience.location}</p>
                <p className="text-gray-700 mt-2">{experience.description}</p>
                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-900 mb-1">Achievements:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit(experience)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(experience.id)}
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
  );
};

export default ExperienceEditor;