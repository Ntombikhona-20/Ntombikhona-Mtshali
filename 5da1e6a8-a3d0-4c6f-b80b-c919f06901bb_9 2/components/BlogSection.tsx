
'use client';

import { useState } from 'react';

export default function BlogSection() {
  const [showFullReflection, setShowFullReflection] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const fullReflection = `"I'm learning how vital storytelling is to data science. It's not just about cleaning data or making models — it's about helping others understand what the data is saying.

Throughout my journey in the ALX Data Science program, I've discovered that technical skills are just one piece of the puzzle. The real magic happens when you can take complex datasets and transform them into compelling narratives that drive decision-making.

In my background working in Biomedical Laboratory Science, I've always been detail-oriented and analytical. But data science is teaching me to think beyond the numbers - to consider the human impact, the business implications, and the broader societal benefits of our insights.

This is particularly important when working with data in African contexts, where cultural nuances and local understanding can significantly impact how data should be interpreted and presented. I'm excited to continue building these storytelling skills alongside my technical capabilities."`;

  const blogPosts = [
    {
      id: 1,
      title: 'The Power of Storytelling in Data Science',
      excerpt: 'Why communication skills are just as important as technical abilities in data science.',
      category: 'Skills',
      readTime: '5 min read',
      status: 'Published',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      title: 'From Customer Support to Data: My Career Pivot',
      excerpt: 'How my background in customer support and analytics shaped my approach to data science.',
      category: 'Career',
      readTime: '7 min read',
      status: 'Draft',
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 3,
      title: 'Data Science in African Markets',
      excerpt: 'Unique challenges and opportunities when working with data in African contexts.',
      category: 'Insights',
      readTime: '6 min read',
      status: 'Coming Soon',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 4,
      title: 'ALX Data Science Journey',
      excerpt: 'Key lessons and insights from my ongoing ALX Data Science program experience.',
      category: 'Learning',
      readTime: '4 min read',
      status: 'Coming Soon',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog & Reflections</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing insights from my data science journey and thoughts on the field
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <i className="ri-lightbulb-line w-6 h-6 flex items-center justify-center text-blue-600"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Recent Reflection</h3>
                <p className="text-gray-500">Personal Insights on Data Science</p>
              </div>
            </div>
            
            <blockquote className="text-lg text-gray-700 italic leading-relaxed border-l-4 border-blue-500 pl-6 mb-6">
              {showFullReflection ? fullReflection : `"I'm learning how vital storytelling is to data science. It's not just about cleaning data or making models — it's about helping others understand what the data is saying."`}
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-500 text-sm">
                <i className="ri-calendar-line w-4 h-4 flex items-center justify-center mr-2"></i>
                <span>Recent</span>
              </div>
              <button 
                onClick={() => setShowFullReflection(!showFullReflection)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                {showFullReflection ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${post.color}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex justify-between items-center">
                  <button className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer whitespace-nowrap">
                    {post.status === 'Published' ? 'Read Article' : post.status}
                  </button>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                      <i className="ri-share-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                      <i className="ri-bookmark-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-book-open-line w-6 h-6 flex items-center justify-center text-white"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Learning Journey</h4>
              <p className="text-gray-600 text-sm">
                Documenting key insights and challenges from the ALX Data Science program.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-global-line w-6 h-6 flex items-center justify-center text-white"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Data for Africa</h4>
              <p className="text-gray-600 text-sm">
                Thoughts on using data science to address challenges in African markets.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line w-6 h-6 flex items-center justify-center text-white"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Personal Growth</h4>
              <p className="text-gray-600 text-sm">
                Reflections on career transitions and professional development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
