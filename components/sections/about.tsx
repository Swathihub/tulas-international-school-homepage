"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Trophy, Target } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Users, value: "15:1", label: "Student-Teacher Ratio" },
  { icon: BookOpen, value: "100%", label: "CBSE Result" },
  { icon: Trophy, value: "22+", label: "Acres of Campus" },
  { icon: Target, value: "Top 10", label: "Boarding Schools in India" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-royal-950 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Image & Stats */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden"
            >
              <Image 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2940&auto=format&fit=crop"
                alt="Students studying at Tula's International School"
                fill
                className="object-cover"
                sizes="(max-w-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-4 border-gold-500/20 rounded-3xl z-10 m-4 pointer-events-none" />
            </motion.div>
            
            {/* Stats Card Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 md:right-8 bg-royal-900 text-white p-6 md:p-8 rounded-2xl shadow-xl z-20 w-[85%] md:w-auto"
            >
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <stat.icon className="text-gold-500" size={24} />
                    <span className="text-3xl font-bold">{stat.value}</span>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-gold-600 font-semibold tracking-wider uppercase mb-3 text-sm flex items-center gap-2">
                <span className="w-8 h-[2px] bg-gold-600 inline-block"></span>
                About Tula&apos;s
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
                Nurturing Excellence, Shaping Character.
              </h3>
              
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
                <p>
                  Established in 2012, Tula&apos;s International School has rapidly emerged as a leading co-educational residential school in Dehradun. Spread across a sprawling 22-acre lush green campus, we provide an environment that fosters holistic development.
                </p>
                <p>
                  Our modern approach to education focuses not just on academic brilliance, but also on physical fitness, mental well-being, and moral integrity. We blend traditional Indian values with international learning standards to prepare students for the global stage.
                </p>
              </div>
              
              <ul className="mt-8 space-y-4">
                {[
                  "CBSE Affiliated Curriculum",
                  "Dedicated Competitive Exam Coaching (JEE, NEET)",
                  "State-of-the-art Sports Infrastructure",
                  "International University Placement Cell"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gold-600"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <button className="text-gold-600 font-semibold border-b-2 border-green-600 pb-1 hover:text-green-700 hover:border-green-700 transition-colors inline-flex items-center gap-2">
                  Read our full story
                </button>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};


