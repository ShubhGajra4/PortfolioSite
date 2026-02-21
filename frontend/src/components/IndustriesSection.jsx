import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, GraduationCap, ShoppingBag, Share2 } from 'lucide-react';

const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    {
      icon: Building2,
      title: 'Real Estate',
      tagline: 'Turning "Interested, Call You Later" into Actual Buyers',
      description: 'Specialized in premium residential projects across Mumbai, Navi Mumbai, Pune & Bangalore',
      metrics: [
        '₹50Cr+ Deals Closed',
        '25-30% Qualified Leads',
        '₹5Cr+ Ad Spend Managed'
      ],
      highlights: [
        'High-ticket lead generation',
        'Lead qualification systems',
        'CRM automation',
        'Multi-channel campaigns'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Education Marketing',
      tagline: 'Turning "Just Browsing Courses" into Enrolled Students',
      description: 'Driving enrollment growth for educational institutions and online learning platforms',
      metrics: [
        '50%+ ROI Delivered',
        '₹50-₹500 CPL Range',
        'High Intent Targeting'
      ],
      highlights: [
        'Student acquisition funnels',
        'Course enrollment optimization',
        'Performance tracking',
        'Strategic positioning'
      ]
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce Fashion',
      tagline: 'Where Scrolls Become Sales',
      description: 'Scaling D2C fashion brands through performance marketing and creative excellence',
      metrics: [
        '4.8X Average ROAS',
        '320% Revenue Growth',
        '40% CAC Reduction'
      ],
      highlights: [
        'Full-funnel optimization',
        'Creative testing frameworks',
        'Cart abandonment recovery',
        'Customer retention'
      ]
    },
    {
      icon: Share2,
      title: 'Social Media',
      tagline: 'Not Just Likes. Lasting Impressions',
      description: 'Building brand communities and driving engagement across platforms',
      metrics: [
        '8.5% Engagement Rate',
        '245% Follower Growth',
        '180+ Content Pieces'
      ],
      highlights: [
        'Interior Design brands',
        'Eco-friendly Products',
        'Incense Manufacturing',
        'Strategic content systems'
      ]
    }
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
    hidden: { opacity: 0, y: 40 },
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
    <section ref={ref} className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Industry Expertise
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Specialized knowledge and proven results across high-impact verticals
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <Icon size={28} className="text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-white/80 italic text-sm">
                      {industry.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {industry.metrics.map((metric, i) => (
                    <div key={i} className="bg-black/30 rounded-lg p-3 text-center">
                      <p className="text-white font-bold text-sm">{metric}</p>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Key Capabilities</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
