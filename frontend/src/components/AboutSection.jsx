import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-lg"
              >
                <img
                  src="https://customer-assets.emergentagent.com/job_de19b72e-0c24-4c11-88e2-9b6ba16db1bc/artifacts/i0v2wfv5_WhatsApp%20Image%202025-09-16%20at%207.34.46%20PM.jpeg"
                  alt="Shubh Profile 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-lg mt-8"
              >
                <img
                  src="https://customer-assets.emergentagent.com/job_de19b72e-0c24-4c11-88e2-9b6ba16db1bc/artifacts/r1owc0oe_WhatsApp%20Image%202025-04-06%20at%209.33.00%20PM%20%282%29.jpeg"
                  alt="Shubh Profile 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </motion.div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border-2 border-white/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-2 border-white/10 rounded-full -z-10"></div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The Growth Strategist Behind Scalable Brands.
            </h2>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                I'm a performance-focused digital marketer who believes marketing should do one thing well — <span className="text-white font-medium">generate measurable growth</span>.
              </p>
              
              <p>
                I specialize in building full-funnel systems that turn traffic into qualified leads and leads into revenue. My approach blends data, strategy, and creative execution to deliver results that go beyond vanity metrics.
              </p>
              
              <p>
                From campaign architecture to optimization and scaling, I focus on creating marketing systems that are <span className="text-white font-medium">predictable, profitable, and built to grow</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="border-l-2 border-white pl-4">
                <div className="text-3xl md:text-4xl font-bold text-white">₹5Cr+</div>
                <div className="text-white/60 text-sm mt-1">Ad Spend Managed</div>
              </div>
              <div className="border-l-2 border-white pl-4">
                <div className="text-3xl md:text-4xl font-bold text-white">₹50Cr+</div>
                <div className="text-white/60 text-sm mt-1">Deal Closed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
