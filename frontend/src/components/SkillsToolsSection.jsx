import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillsToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tools = [
    { name: 'Meta Ads', category: 'Advertising' },
    { name: 'Google Ads', category: 'Advertising' },
    { name: 'LinkedIn Ads', category: 'Advertising' },
    { name: 'Google Analytics', category: 'Analytics' },
    { name: 'Google Tag Manager', category: 'Analytics' },
    { name: 'Meta Business Suite', category: 'Social Media' },
    { name: 'HubSpot', category: 'CRM' },
    { name: 'Salesforce', category: 'CRM' },
    { name: 'Semrush', category: 'SEO' },
    { name: 'Ahrefs', category: 'SEO' },
    { name: 'Canva', category: 'Creative' },
    { name: 'Figma', category: 'Creative' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tools & Platforms
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Proficient across the modern marketing technology stack
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group bg-white/5 border border-white/20 rounded-full px-6 py-3 hover:bg-white hover:border-white transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="text-white group-hover:text-black font-medium transition-colors duration-300">
                  {tool.name}
                </span>
                <span className="text-white/40 group-hover:text-black/40 text-xs transition-colors duration-300">
                  {tool.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsToolsSection;
