
'use client';

import { useState } from 'react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skills = {
    technical: [
      { name: 'Python', level: 85, icon: 'ri-code-line', color: 'bg-blue-500' },
      { name: 'Data Analysis', level: 80, icon: 'ri-bar-chart-line', color: 'bg-green-500' },
      { name: 'SQL', level: 75, icon: 'ri-database-line', color: 'bg-purple-500' },
      { name: 'Machine Learning', level: 70, icon: 'ri-brain-line', color: 'bg-red-500' },
      { name: 'Statistical Analysis', level: 85, icon: 'ri-line-chart-line', color: 'bg-yellow-500' },
      { name: 'Data Visualization', level: 80, icon: 'ri-pie-chart-line', color: 'bg-indigo-500' }
    ],
    tools: [
      { name: 'Pandas', level: 80, icon: 'ri-file-excel-line', color: 'bg-green-500' },
      { name: 'NumPy', level: 75, icon: 'ri-calculator-line', color: 'bg-blue-500' },
      { name: 'Matplotlib', level: 70, icon: 'ri-bar-chart-2-line', color: 'bg-purple-500' },
      { name: 'Seaborn', level: 75, icon: 'ri-line-chart-line', color: 'bg-red-500' },
      { name: 'Jupyter', level: 85, icon: 'ri-book-open-line', color: 'bg-orange-500' },
      { name: 'Git', level: 70, icon: 'ri-git-branch-line', color: 'bg-gray-500' }
    ],
    soft: [
      { name: 'Problem Solving', level: 90, icon: 'ri-lightbulb-line', color: 'bg-yellow-500' },
      { name: 'Communication', level: 85, icon: 'ri-chat-3-line', color: 'bg-blue-500' },
      { name: 'Analytical Thinking', level: 90, icon: 'ri-search-line', color: 'bg-green-500' },
      { name: 'Teamwork', level: 80, icon: 'ri-team-line', color: 'bg-purple-500' },
      { name: 'Adaptability', level: 85, icon: 'ri-refresh-line', color: 'bg-red-500' },
      { name: 'Attention to Detail', level: 95, icon: 'ri-focus-line', color: 'bg-indigo-500' }
    ]
  };

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a comprehensive toolkit for data science success
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-full p-1">
            <button 
              onClick={() => setActiveCategory('technical')}
              className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                activeCategory === 'technical' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Technical Skills
            </button>
            <button 
              onClick={() => setActiveCategory('tools')}
              className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                activeCategory === 'tools' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Tools & Libraries
            </button>
            <button 
              onClick={() => setActiveCategory('soft')}
              className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                activeCategory === 'soft' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills[activeCategory].map((skill, index) => (
            <div key={skill.name} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${skill.color} text-white mr-4`}>
                  <i className={`${skill.icon} w-6 h-6 flex items-center justify-center`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{skill.name}</h3>
                  <div className="text-sm text-gray-600">{skill.level}% proficiency</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{width: `${skill.level}%`}}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-graduation-cap-line w-8 h-8 flex items-center justify-center text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Learning</h3>
            <p className="text-gray-600">Continuously expanding knowledge through ALX Data Science program</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-customer-service-line w-8 h-8 flex items-center justify-center text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Customer Support</h3>
            <p className="text-gray-600">Experience in analytics and customer service bringing problem-solving skills</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-global-line w-8 h-8 flex items-center justify-center text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Impact</h3>
            <p className="text-gray-600">Focused on creating solutions for African markets and communities</p>
          </div>
        </div>
      </div>
    </section>
  );
}
