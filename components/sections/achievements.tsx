"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const achievements = [
  {
    title: "#1 Boarding School",
    description: "Ranked as the No. 1 Co-ed Boarding School in Uttarakhand for innovative teaching.",
    year: "2023",
  },
  {
    title: "100% CBSE Results",
    description: "Consistent 100% pass rate in CBSE Board examinations for the last 5 years.",
    year: "2019-2023",
  },
  {
    title: "Sports Excellence",
    description: "Winners of the Inter-School State Basketball Championship.",
    year: "2022",
  },
];

export const Achievements = () => {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-green-600 font-semibold tracking-wider uppercase mb-3 text-sm">
                Our Pride
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
                A Legacy of Excellence.
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                Over the years, Tula&apos;s International School has carved a niche for itself by setting new benchmarks in education, sports, and co-curricular activities.
              </p>

              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6 border-l-2 border-green-200 dark:border-green-900/50 pl-6 relative"
                  >
                    <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-2" />
                    <div>
                      <span className="text-sm font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full mb-3 inline-block">
                        {achievement.year}
                      </span>
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2812&auto=format&fit=crop"
                alt="Student receiving award"
                fill
                className="object-cover"
                sizes="(max-w-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-xl font-medium italic">
                  &quot;Education is not just about academics; it&apos;s about building character and leaders for tomorrow.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
