"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const CTA = () => {
  return (
    <section className="relative py-24 bg-green-600 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to shape your child&apos;s future with Tula&apos;s?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-green-100 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Admissions are now open for the upcoming academic session. Join our global community of learners today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="#apply" 
              className="group flex items-center justify-center gap-2 bg-white text-green-700 hover:bg-zinc-50 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Apply Online Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link 
              href="#contact" 
              className="flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/30 hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Contact Admissions
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
