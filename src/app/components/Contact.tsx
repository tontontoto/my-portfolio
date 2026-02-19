import React from 'react';
import { Mail, Github, Twitter, Youtube, Instagram } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-24 px-6 border-t border-gray-100">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">お問い合わせ｜Contact</h2>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            メールまたはSNSよりお気軽にお問い合わせください。
          </p>
        </div>

        <div className="space-y-8">
          <a
            href="mailto:GSXR_ton819@outlook.jp"
            className="flex items-center gap-3 text-lg font-bold text-gray-900 hover:text-orange-500 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gray-50">
              <Mail className="w-5 h-5" />
            </div>
            GSXR_ton819@outlook.jp
          </a>

          <div className="flex items-center gap-4">
            {[
              { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/sKl4Xg6NkC32352" },
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/tontontoto" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
