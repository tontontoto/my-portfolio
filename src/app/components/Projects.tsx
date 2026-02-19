import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projects } from '../data/projects';

export const Projects = () => {
  return (
    <section id="works" className="scroll-mt-24 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent inline-block">
            作品
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/works/${project.slug}`}
                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 block"
                aria-label={`${project.title} の詳細を見る`}
              >
                <div className={`aspect-[4/5] md:aspect-[16/9] overflow-hidden bg-gradient-to-br ${project.color} p-4`}>
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl relative bg-white/70">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>
                </div>

                <div className="p-6 bg-white flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
