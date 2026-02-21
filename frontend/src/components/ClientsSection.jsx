import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clients = [
    { name: 'NCC Urban', industry: 'Real Estate' },
    { name: 'Mana', industry: 'Real Estate' },
    { name: 'The Baya Company', industry: 'Real Estate' },
    { name: 'Green Sheep', industry: 'Sustainability' },
    { name: 'BSE Institute', industry: 'Education' },
    { name: 'Planteria', industry: 'E-commerce' },
    { name: 'Ketall\'s Kitchen', industry: 'Food & Beverage' },
    { name: 'Tenovia', industry: 'Technology' },
    { name: 'Indolady', industry: 'Fashion' },
    { name: 'R.E.A.L. Fragrances', industry: 'Consumer Goods' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Top Brands I've Worked With
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Trusted by leading brands across multiple industries
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center min-h-[140px]"
            >
              <h3 className="text-white font-bold text-lg mb-2 group-hover:scale-110 transition-transform duration-300">
                {client.name}
              </h3>
              <p className="text-white/50 text-xs uppercase tracking-wider">
                {client.industry}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">
              10+ Premium Brands Across Multiple Industries
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
