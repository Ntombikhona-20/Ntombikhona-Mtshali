
'use client';

import { useState } from 'react';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Business Analytics Dashboard',
      description: 'Creating comprehensive analytics dashboards to track business performance and customer insights.',
      category: 'analytics',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Statistical Analysis'],
      status: 'Planning',
      image: 'https://readdy.ai/api/search-image?query=Business%20analytics%20dashboard%20with%20performance%20charts%20graphs%20and%20metrics%20on%20computer%20screen%20clean%20modern%20interface%20blue%20and%20white%20color%20scheme%20data%20visualization%20with%20KPI%20displays%20and%20business%20intelligence&width=600&height=400&seq=project1&orientation=landscape'
    },
    {
      id: 2,
      title: 'Financial Services Analytics',
      description: 'Developing predictive models for credit risk assessment in emerging African markets.',
      category: 'finance',
      tech: ['Python', 'Machine Learning', 'SQL', 'Risk Modeling'],
      status: 'Planning',
      image: 'https://readdy.ai/api/search-image?query=Financial%20analytics%20dashboard%20with%20charts%20graphs%20and%20banking%20data%20visualization%20on%20computer%20screen%20professional%20modern%20interface%20with%20currency%20symbols%20and%20financial%20metrics%20clean%20design%20blue%20and%20green%20color%20scheme&width=600&height=400&seq=project2&orientation=landscape'
    },
    {
      id: 3,
      title: 'Education Performance Insights',
      description: 'Analyzing student performance data to identify factors that improve educational outcomes.',
      category: 'education',
      tech: ['Python', 'Data Visualization', 'Statistics', 'Seaborn'],
      status: 'Planning',
      image: 'https://readdy.ai/api/search-image?query=Education%20analytics%20dashboard%20with%20student%20performance%20charts%20graphs%20and%20academic%20data%20visualization%20on%20computer%20screen%20modern%20interface%20with%20graduation%20cap%20icons%20and%20learning%20metrics%20clean%20design%20purple%20and%20orange%20color%20scheme&width=600&height=400&seq=project3&orientation=landscape'
    },
    {
      id: 4,
      title: 'Customer Support Analytics',
      description: 'Leveraging my customer support experience to analyze support ticket patterns and improve service delivery.',
      category: 'analytics',
      tech: ['Python', 'NLP', 'Data Mining', 'Pandas'],
      status: 'Planning',
      image: 'https://readdy.ai/api/search-image?query=Customer%20support%20analytics%20dashboard%20with%20ticket%20analysis%20charts%20and%20service%20metrics%20on%20computer%20screen%20modern%20interface%20with%20communication%20icons%20and%20support%20data%20visualization%20clean%20design%20teal%20and%20blue%20color%20scheme&width=600&height=400&seq=project4&orientation=landscape'
    },
    {
      id: 5,
      title: 'ALX Capstone Project',
      description: 'Comprehensive data science project demonstrating end-to-end analysis and machine learning implementation.',
      category: 'academic',
      tech: ['Python', 'Machine Learning', 'Deep Learning', 'Flask'],
      status: 'Upcoming',
      image: 'https://readdy.ai/api/search-image?query=Data%20science%20capstone%20project%20dashboard%20with%20machine%20learning%20models%20charts%20and%20analytics%20visualization%20on%20computer%20screen%20modern%20interface%20with%20AI%20icons%20and%20algorithm%20graphics%20clean%20design%20gradient%20blue%20and%20purple%20color%20scheme&width=600&height=400&seq=project5&orientation=landscape'
    },
    {
      id: 6,
      title: 'African Market Research',
      description: 'Analyzing market trends and consumer behavior across different African countries using data science.',
      category: 'research',
      tech: ['Python', 'Market Analysis', 'Data Visualization', 'Statistics'],
      status: 'Planning',
      image: 'https://readdy.ai/api/search-image?query=African%20market%20research%20dashboard%20with%20continent%20map%20charts%20and%20economic%20data%20visualization%20on%20computer%20screen%20modern%20interface%20with%20African%20flag%20colors%20and%20market%20trend%20graphics%20clean%20design%20green%20and%20gold%20color%20scheme&width=600&height=400&seq=project6&orientation=landscape'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'healthcare', label: 'Healthcare', count: projects.filter(p => p.category === 'healthcare').length },
    { id: 'finance', label: 'Finance', count: projects.filter(p => p.category === 'finance').length },
    { id: 'education', label: 'Education', count: projects.filter(p => p.category === 'education').length },
    { id: 'analytics', label: 'Analytics', count: projects.filter(p => p.category === 'analytics').length },
    { id: 'academic', label: 'Academic', count: projects.filter(p => p.category === 'academic').length },
    { id: 'research', label: 'Research', count: projects.filter(p => p.category === 'research').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-600';
      case 'In Progress': return 'bg-blue-100 text-blue-600';
      case 'Planning': return 'bg-yellow-100 text-yellow-600';
      case 'Upcoming': return 'bg-purple-100 text-purple-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Planned Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Future data science projects I'm planning to work on across different sectors
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:text-blue-600 hover:shadow-md'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer whitespace-nowrap">
                    View Details
                  </button>
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                      <i className="ri-github-line w-5 h-5 flex items-center justify-center"></i>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                      <i className="ri-external-link-line w-5 h-5 flex items-center justify-center"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to collaborate?</h3>
            <p className="text-gray-600 mb-6">
              I'm always open to working on interesting data science projects that create meaningful impact.
            </p>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
