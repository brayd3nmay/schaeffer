'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/fabrication', label: 'Fabrication' },
    { href: '/certifications', label: 'Certifications' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-auto">
                {/* Placeholder for logo - replace with actual logo when available */}
                <div className="h-10 w-32 bg-steel-blue flex items-center justify-center rounded">
                  <span className="text-white font-oswald font-bold text-sm">
                    SCHAEFFER
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-steel-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Phone number - Desktop */}
          <div className="hidden md:block">
            <a
              href="tel:330-296-7519"
              className="flex items-center space-x-2 text-steel-blue hover:text-safety-yellow transition-colors duration-200"
            >
              <FaPhone className="text-sm" />
              <span className="font-medium">330-296-7519</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-steel-blue focus:outline-none focus:text-steel-blue"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-steel-blue block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:330-296-7519"
              className="flex items-center space-x-2 text-steel-blue hover:text-safety-yellow px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <FaPhone className="text-sm" />
              <span>330-296-7519</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
