'use client';

import { FaPhone } from 'react-icons/fa';

const FloatingCallButton = () => {
  return (
    <a
      href="tel:330-296-7519"
      className="fixed bottom-6 right-6 bg-safety-yellow text-steel-blue p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-200 z-50 md:hidden flex items-center justify-center group"
      aria-label="Call 330-296-7519"
    >
      <FaPhone className="text-xl group-hover:scale-110 transition-transform duration-200" />
    </a>
  );
};

export default FloatingCallButton;
