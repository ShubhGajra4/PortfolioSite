import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const results = [
    { value: 5, suffix: 'Cr+', prefix: '₹', label: 'Ad Spend Managed' },
    { value: 50, suffix: 'Cr+', prefix: '₹', label: 'Deal Closed' },
    { value: 25, suffix: '%', prefix: '', label: 'Qualified Lead Rate' },
    { value: 50, suffix: '%+', prefix: '', label: 'Average ROI Delivered' },
    { value: 500, suffix: '', prefix: '₹50–₹', label: 'Cost Per Lead Achieved' },
    { value: 5, suffix: 'X', prefix: '3X–', label: 'ROAS on Scaled Campaigns' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Results That Speak
            <br />
            <span className="text-white">In Numbers.</span>
          </h2>
          <p className="text-white/60 text-lg italic">
            Because real growth is measured in revenue — not impressions.
          </p>
        </motion.div>

        {/* Results Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {results.map((result, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="relative">
                {/* Number */}
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                  {isInView && (
                    <>
                      {result.prefix && <span className="text-white">{result.prefix}</span>}
                      {result.value > 10 ? (
                        <CountUp
                          start={0}
                          end={result.value}
                          duration={2.5}
                          delay={0.5}
                          separator=","
                        />
                      ) : (
                        <CountUp
                          start={0}
                          end={result.value}
                          duration={2}
                          delay={0.5}
                          decimals={0}
                        />
                      )}
                      <span className="text-white">{result.suffix}</span>
                    </>
                  )}
                </div>
                
                {/* Label */}
                <p className="text-white/70 text-sm md:text-base font-medium uppercase tracking-wider">
                  {result.label}
                </p>
                
                {/* Decorative Line */}
                <div className="w-16 h-1 bg-white mx-auto mt-4 group-hover:w-24 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
