import React from 'react';
import { motion } from 'motion/react';
import { Code2, Palette, Globe, Zap } from 'lucide-react';

const skills = [
  { icon: <Palette className="w-5 h-5" />, title: 'UI/UX Design', desc: 'Crafting visually stunning and intuitive interfaces.' },
  { icon: <Code2 className="w-5 h-5" />, title: 'Frontend Dev', desc: 'Building responsive websites with React and Tailwind.' },
  { icon: <Globe className="w-5 h-5" />, title: 'SEO & Performance', desc: 'Optimizing sites for speed and search engines.' },
  { icon: <Zap className="w-5 h-5" />, title: 'Rapid Prototyping', desc: 'Quickly turning ideas into interactive prototypes.' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="space-y-4 text-lg text-gray-500 leading-relaxed">
            <p>
              I'm a multidisciplinary designer and developer with over 5 years of experience in the digital space. 
              I believe that great design is not just about how it looks, but how it works and solves problems.
            </p>
            <p>
              My journey began in graphic design, which gave me a strong foundation in aesthetics and composition. 
              Transitioning into web development allowed me to bring my designs to life through code.
            </p>
          </div>
          
          <div className="pt-6">
            <div className="flex items-center gap-8 border-t border-gray-100 pt-8">
              <div>
                <p className="text-2xl font-bold">5+</p>
                <p className="text-sm text-gray-400">Years Exp.</p>
              </div>
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm text-gray-400">作品</p>
              </div>
              <div>
                <p className="text-2xl font-bold">20+</p>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-gray-500/5 transition-all"
            >
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
