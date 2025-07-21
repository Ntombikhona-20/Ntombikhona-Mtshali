
'use client';

import { useState } from 'react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curious analytical thinker transitioning into data science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex mb-8 bg-white rounded-full p-1 shadow-sm">
              <button 
                onClick={() => setActiveTab('story')}
                className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeTab === 'story' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                My Story
              </button>
              <button 
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeTab === 'mission' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Mission
              </button>
            </div>

            {activeTab === 'story' && (
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Hi! I'm Ntombikhona Mtshali, a curious and analytical thinker currently pursuing the Data Science track through the ALX program. With experience in customer support and analytics, I am pivoting into the data world to turn real-world problems into data-driven solutions.
                </p>
                <p className="text-lg">
                  My journey into data science is driven by a passion to bridge the gap between complex data and meaningful impact, especially in African contexts where cultural nuances and local understanding matter most.
                </p>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  I'm particularly interested in using data to improve systems in financial services, education, and business operations in Africa. My goal is to become a bridge between technical expertise and real-world application.
                </p>
                <p className="text-lg">
                  Through storytelling with data, I aim to help organizations make informed decisions that create positive change in communities across the continent.
                </p>
              </div>
            )}

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-blue-600 mb-2">ALX</div>
                <div className="text-sm text-gray-600">Data Science Program</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-green-600 mb-2">Analytics</div>
                <div className="text-sm text-gray-600">Experience Focus</div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl">
                <div className="text-2xl font-bold">1+</div>
                <div className="text-xs">Years Analytics</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-xl">
                <div className="text-2xl font-bold">1</div>
                <div className="text-xs">Career Pivot</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-xl">
                <div className="text-2xl font-bold">∞</div>
                <div className="text-xs">Learning Journey</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6"></div>
              <img 
                src="https://static.readdy.ai/image/3a4679e72707fefccc6b3a56a3a6e251/078aa28f8f3ca01757349b4c0ece686b.jfif"
                alt="Ntombikhona Mtshali"
                className="relative rounded-2xl shadow-2xl object-cover object-top w-full h-96 lg:h-[500px]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <i className="ri-check-line w-6 h-6 flex items-center justify-center text-green-600"></i>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Available</div>
                  <div className="text-sm text-gray-600">for opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}