import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Target, BarChart3, Search, Share2, LineChart } from 'lucide-react';

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const expertiseItems = [
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Full-funnel frameworks designed to turn attention into predictable revenue streams.'
    },
    {
      icon: Target,
      title: 'Performance Advertising',
      description: 'High-ROI campaigns across Meta, Google, and LinkedIn with laser-focused targeting.'
    },
    {
      icon: BarChart3,
      title: 'Conversion Optimization',
      description: 'Data-driven testing and optimization to maximize lead quality and deal velocity.'
    },
    {
      icon: Search,
      title: 'SEO & Organic Growth',
      description: 'Long-term authority building through strategic content and technical excellence.'
    },
    {
      icon: Share2,
      title: 'Social Media Systems',
      description: 'Strategic content frameworks that drive engagement and build communities.'
    },
    {
      icon: LineChart,
      title: 'Analytics & Scaling Frameworks',
      description: 'Performance measurement and scaling systems built for sustainable growth.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="expertise" ref={ref} className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Core Expertise
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Specialized capabilities designed to drive measurable growth
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertiseItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                      <Icon size={24} className="text-white group-hover:text-black transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-all duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
