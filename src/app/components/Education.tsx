import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin } from 'lucide-react';

type EducationItem = {
  degree: string;
  school: string;
  period: string;
  location: string;
  desc?: string;
};

const education: EducationItem[] = [
  {
    degree: "環境都市工学科",
    school: "木更津工業高等専門学校",
    period: "2023年3月 中途退学（4年次）",
    location: "千葉県木更津市",
    desc: "学校種別: 高等専門学校 / 系統: 工学系(土木) / 入学: 2019年4月"
  },
  {
    degree: "IT学部　高度情報学科",
    school: "HAL東京",
    period: "2027年 卒業見込み",
    location: "東京都新宿区",
    desc: "学校種別: 専門学校 / 系統: 情報・通信系 / 入学: 2023年4月"
  }
];

export const Education = () => {
  return (
    <section id="education" className="scroll-mt-24 py-24 px-6 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-blue-500 uppercase">
            学歴｜Education
          </h2>
        </div>

        {education.length === 0 ? (
          <div className="text-center text-gray-500">
            学歴をここに追加してください。
          </div>
        ) : (
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={`${item.school}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow shrink-0">
                    <GraduationCap className="w-6 h-6 text-gray-400" />
                  </div>
                  {index !== education.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-100 my-2" />
                  )}
                </div>

                <div className="space-y-3 pb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.degree} <span className="text-gray-400 font-medium">｜</span> {item.school}
                    </h3>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap bg-white px-3 py-1 rounded-full border border-gray-100">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </div>

                  {item.desc && (
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-2xl">
                      {item.desc}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
