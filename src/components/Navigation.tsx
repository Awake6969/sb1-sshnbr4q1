import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone, Mail, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      {/* Top Contact Bar - Only visible on mobile */}
      <div className="bg-[#92400e] text-white py-2 md:hidden">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <a href="mailto:info@tischlernick.com" className="flex items-center shrink-0">
            <Mail className="h-3 w-3 mr-1" />
            info@tischlernick.com
          </a>
          <a href="tel:+436704076442" className="flex items-center shrink-0 ml-2">
            <Phone className="h-3 w-3 mr-1" />
            +43 670 407 6442
          </a>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/Bilder/Tischler-Nick_Logo.png"
                alt="TischlerNick Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-semibold text-[#92400e]">TischlerNick</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#92400e]">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-[#92400e]"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Leistungen</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link 
                    to="/montagearbeit" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#92400e]/5 hover:text-[#92400e]"
                  >
                    Montagearbeit
                  </Link>
                  <Link 
                    to="/reparaturen" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#92400e]/5 hover:text-[#92400e]"
                  >
                    Reparaturen
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/about" className="text-gray-700 hover:text-[#92400e]">Über mich</Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#92400e]">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#92400e]">Kontakt</Link>
            <div className="flex items-center space-x-4">
              <a href="tel:+436704076442" className="text-[#92400e] hover:text-[#92400e]/80">
                <Phone className="h-5 w-5" />
              </a>
              <a href="mailto:info@tischlernick.com" className="text-[#92400e] hover:text-[#92400e]/80">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-[#92400e]">Home</Link>
            <div>
              <button 
                className="flex items-center w-full px-3 py-2 text-gray-700 hover:text-[#92400e]"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Leistungen</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {isServicesOpen && (
                <div className="pl-6 space-y-1">
                  <Link 
                    to="/montagearbeit" 
                    className="block px-3 py-2 text-gray-700 hover:text-[#92400e]"
                  >
                    Montagearbeit
                  </Link>
                  <Link 
                    to="/reparaturen" 
                    className="block px-3 py-2 text-gray-700 hover:text-[#92400e]"
                  >
                    Reparaturen
                  </Link>
                </div>
              )}
            </div>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-[#92400e]">Über mich</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-[#92400e]">Blog</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-[#92400e]">Kontakt</Link>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
}