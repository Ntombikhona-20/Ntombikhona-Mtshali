
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
              Ntombikhona Mtshali
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium relative group">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} w-6 h-6 flex items-center justify-center`}></i>
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-3">
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2">
                About
              </Link>
              <Link href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2">
                Skills
              </Link>
              <Link href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2">
                Projects
              </Link>
              <Link href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2">
                Blog
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
