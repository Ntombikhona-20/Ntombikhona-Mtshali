
'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ntombikhona Mtshali
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              Aspiring Data Scientist passionate about using data to drive impact across business operations, financial services, and education in Africa.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/ntombikhonamtshali" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer group"
              >
                <i className="ri-linkedin-fill w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform"></i>
              </a>
              <a 
                href="mailto:NtombikhonaMtshali@outlook.com"
                className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer group"
              >
                <i className="ri-mail-line w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform"></i>
              </a>
              <a 
                href="#"
                className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer group"
              >
                <i className="ri-github-line w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer hover:translate-x-1 inline-block">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors cursor-pointer hover:translate-x-1 inline-block">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors cursor-pointer hover:translate-x-1 inline-block">Projects</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors cursor-pointer hover:translate-x-1 inline-block">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer hover:translate-x-1 inline-block">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Focus Areas</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-center">
                <i className="ri-bar-chart-line w-4 h-4 flex items-center justify-center mr-2 text-red-400"></i>
                Business Analytics
              </li>
              <li className="text-gray-400 flex items-center">
                <i className="ri-bank-line w-4 h-4 flex items-center justify-center mr-2 text-green-400"></i>
                Financial Services
              </li>
              <li className="text-gray-400 flex items-center">
                <i className="ri-graduation-cap-line w-4 h-4 flex items-center justify-center mr-2 text-blue-400"></i>
                Education Data
              </li>
              <li className="text-gray-400 flex items-center">
                <i className="ri-global-line w-4 h-4 flex items-center justify-center mr-2 text-purple-400"></i>
                African Markets
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {currentYear} Ntombikhona Mtshali. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Built with passion for data-driven solutions
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                <i className="ri-heart-fill w-4 h-4 flex items-center justify-center mr-1 text-red-400"></i>
                Made with love
              </span>
              <span className="flex items-center">
                <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center mr-1 text-blue-400"></i>
                South Africa
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
