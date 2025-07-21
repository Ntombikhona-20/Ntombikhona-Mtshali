
'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Data Science Student",
    "Analytics Enthusiast", 
    "Problem Solver",
    "Future Data Scientist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20data%20science%20visualization%20with%20flowing%20digital%20particles%20networks%20and%20analytics%20charts%20in%20soft%20blue%20and%20purple%20gradient%20background%20abstract%20technology%20pattern%20with%20geometric%20shapes%20and%20data%20streams%20flowing%20through%20space%20minimalist%20clean%20design&width=1920&height=1080&seq=hero1&orientation=landscape')`
        }}
      ></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ntombikhona
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-700 mb-8 h-12 flex items-center justify-center">
              <span className="border-r-2 border-blue-600 pr-2 animate-pulse">
                {texts[currentText]}
              </span>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Passionate about turning data into insights that drive real-world impact across 
              <span className="text-blue-600 font-semibold"> business operations</span>, 
              <span className="text-purple-600 font-semibold"> financial services</span>, and 
              <span className="text-green-600 font-semibold"> education</span> in Africa.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer whitespace-nowrap"
            >
              Let's Connect
            </a>
            <a 
              href="#projects" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer whitespace-nowrap"
            >
              View My Work
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-brain-line w-8 h-8 flex items-center justify-center text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ALX Data Science</h3>
              <p className="text-gray-600">Currently mastering data science fundamentals and advanced analytics</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-bar-chart-line w-8 h-8 flex items-center justify-center text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics Experience</h3>
              <p className="text-gray-600">Customer support and analytics background bringing analytical precision</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-global-line w-8 h-8 flex items-center justify-center text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">African Focus</h3>
              <p className="text-gray-600">Dedicated to solving challenges in African markets through data</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer">
          <i className="ri-arrow-down-line w-8 h-8 flex items-center justify-center"></i>
        </a>
      </div>
    </section>
  );
}
