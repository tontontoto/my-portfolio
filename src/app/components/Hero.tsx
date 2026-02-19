import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroAvatar from '../../assets/images/icon.jpg';

export const Hero = () => {
  return (
    <section className="pt-40 pb-5 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-gray-50 shadow-xl"
        >
          <ImageWithFallback
            src={heroAvatar}
            alt="Developer Avatar"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h1 className="mt-4 text-center text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm">
            <span className="underline decoration-orange-400/70 decoration-4 underline-offset-[10px]">
              Yoshiaki Sato
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};
