
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Connect!</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on data-driven solutions or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-mail-line w-6 h-6 flex items-center justify-center text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <a 
                      href="mailto:NtombikhonaMtshali@outlook.com" 
                      className="text-blue-600 hover:text-blue-700 cursor-pointer"
                    >
                      NtombikhonaMtshali@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-linkedin-fill w-6 h-6 flex items-center justify-center text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/ntombikhonamtshali" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 cursor-pointer"
                    >
                      Connect professionally
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line w-6 h-6 flex items-center justify-center text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Location</h4>
                    <p className="text-gray-600">South Africa, Johannesburg</p>
                    <p className="text-sm text-gray-500">(Available globally for remote work)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What I'm Looking For</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mr-3"></i>
                  <span className="text-gray-700">Data Science Opportunities</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mr-3"></i>
                  <span className="text-gray-700">Collaboration Projects</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mr-3"></i>
                  <span className="text-gray-700">Mentorship Opportunities</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mr-3"></i>
                  <span className="text-gray-700">Industry Networking</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <i className="ri-check-circle-line w-5 h-5 flex items-center justify-center text-green-600 mr-2"></i>
                  <span className="text-green-800">Message sent successfully! I'll get back to you soon.</span>
                </div>
              </div>
            )}

            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors"
                  placeholder="Tell me about your project or opportunity..."
                  maxLength={500}
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">Maximum 500 characters ({formData.message.length}/500)</p>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <i className="ri-loader-4-line w-5 h-5 flex items-center justify-center animate-spin mr-2"></i>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Build Something Amazing</h3>
            <p className="text-gray-600 mb-6">
              I'm excited to collaborate on projects that use data to create positive impact, especially in African markets.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/ntombikhonamtshali" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
              >
                <i className="ri-linkedin-fill w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a 
                href="mailto:NtombikhonaMtshali@outlook.com"
                className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
              >
                <i className="ri-mail-line w-6 h-6 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
