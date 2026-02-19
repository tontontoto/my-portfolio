import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Web開発 / デザイナー",
    company: "アットホーム株式会社",
    period: "2025年10月 - 2025年10月",
    desc: "IllustratorやPhotoshopを用いたプロモーション用バナーおよびX（旧Twitter）用広告バナーの制作を担当。また、イベント用特設ページの静的コーディング（HTML, CSS, JavaScript）を行い、ユーザーエンゲージメントの向上に貢献。",
    location: "東京都, 日本",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239CA3AF'><path d='M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v3H2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2Zm4 4V4h-4v2h4Zm8 7v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7h8v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h8Z'/></svg>"
  },
  {
    role: "デザイン・フロント・バック",
    company: "合同会社TJC",
    period: "2025年12月 - 現在",
    desc: "オンラインバレエレッスン予約管理システムの開発および保守・改修に従事。現在は月極バイク駐輪場サブリースサービスの管理システム開発を担当し、バックエンドの改修からUI/UXデザインの提案・実装まで幅広く対応。",
    location: "東京都, 日本",
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239CA3AF'><path d='M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v3H2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2Zm4 4V4h-4v2h4Zm8 7v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7h8v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h8Z'/></svg>"
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-24 px-6 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-blue-500 uppercase">
            経験｜Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow shrink-0 overflow-hidden">
                   <img src={exp.icon} alt={exp.company} className="w-6 h-6 object-contain" />
                </div>
                {index !== experiences.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-100 my-2" />
                )}
              </div>

              <div className="space-y-3 pb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.role} <span className="text-gray-400 font-medium">｜</span> {exp.company}
                  </h3>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap bg-white px-3 py-1 rounded-full border border-gray-100">
                    {exp.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </div>

                <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-2xl">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
