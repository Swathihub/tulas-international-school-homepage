"use client";

import { motion } from "framer-motion";
import { GraduationCap, Palette } from "lucide-react";

const programs = [
  {
    title: "Academic Excellence",
    description: "Rigorous CBSE curriculum blended with modern pedagogy to ensure conceptual clarity and critical thinking.",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
  {
    title: "Competitive Coaching",
    description: "Integrated preparation for JEE, NEET, CA CPT, and Law, guided by expert faculty to secure top ranks.",
    icon: Target,
    color: "bg-gold-500",
  },
  {
    title: "Sports & Athletics",
    description: "World-class facilities for cricket, football, swimming, and more, promoting physical health and teamwork.",
    icon: Trophy,
    color: "bg-orange-500",
  },
  {
    title: "Arts & Culture",
    description: "Rich exposure to music, dance, fine arts, and theatre to nurture creativity and cultural appreciation.",
    icon: Palette,
    color: "bg-purple-500",
  },
];

// Need to import Target and Trophy
import { Target, Trophy } from "lucide-react";

export const Programs = () => {
  return (
    <section id="academics" className="py-24 bg-slate-50 dark:bg-royal-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gold-600 font-semibold tracking-wider uppercase mb-3 text-sm">
              Our Programs
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
              Comprehensive Learning Tracks
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              We offer a balanced curriculum that caters to diverse interests, ensuring every student finds their path to success.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-royal-950 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-800 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${program.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <program.icon className={program.color.replace('bg-', 'text-')} size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">{program.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


