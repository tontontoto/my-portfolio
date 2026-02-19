import React from 'react';
import { motion } from 'motion/react';
import { 
  FileJson, 
  Code, 
  Database, 
  Layers, 
  Layout 
} from 'lucide-react';

const techStack = [
  { name: 'HTML', icon: <Layout className="w-6 h-6" /> },
  { name: 'CSS', icon: <Layout className="w-6 h-6" /> },
  { name: 'JavaScript', icon: <FileJson className="w-6 h-6" /> },
  { name: 'Python', icon: <Code className="w-6 h-6" /> },
  { name: 'PHP', icon: <Code className="w-6 h-6" /> },
  { name: 'Flask', icon: <Layers className="w-6 h-6" /> },
  { name: 'Laravel', icon: <Layers className="w-6 h-6" /> },
  { name: 'MySQL', icon: <Database className="w-6 h-6" /> },
];

export const TechStack = () => {
  return (
    <section className="py-10 border-t border-gray-50 bg-gray-50/30">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-center text-xs font-bold tracking-[0.2em] text-gray-400 mb-10">
          使用技術
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2"
            >
              {tech.icon}
              <span className="text-[10px] font-bold tracking-widest">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center mt-10"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-black/10"
          >
            お問い合わせ
          </a>
        </motion.div>
    </section>
  );
};
