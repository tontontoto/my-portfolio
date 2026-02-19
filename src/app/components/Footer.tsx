import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-400">
          © {currentYear} Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm text-gray-400 hover:text-black">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-400 hover:text-black">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
