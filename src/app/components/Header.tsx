import React from 'react';

export const Header = () => {
  const navLinks = [
    { name: 'ホーム', href: '/' },
    { name: '作品', href: '/#works' },
    { name: '経験', href: '/#experience' },
    { name: '学歴', href: '/#education' },
    { name: 'お問い合わせ', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
      <nav className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter">
          My Portfolio<span className="text-orange-500">.</span>
        </a>
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-xs font-semibold text-gray-900 uppercase tracking-widest hover:text-orange-500 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
