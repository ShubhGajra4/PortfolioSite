import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, TrendingUp, Users, Target, Calendar, IndianRupee } from 'lucide-react';

const CaseStudiesSection = () => {
  return (
    <div className="bg-black">
      {/* Real Estate Case Study */}
      <RealEstateCaseStudy />
      
      {/* Social Media Case Study */}
      <SocialMediaCaseStudy />
      
      {/* Ecommerce Case Study */}
      <EcommerceCaseStudy />
      
      {/* SEO Case Study */}
      <SEOCaseStudy />
    </div>
  );
};

// Real Estate Case Study Component
const RealEstateCaseStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const caseStudies = [
    {
      name: 'NCC Lake Spring',
      location: 'JP Nagar 9th Phase, Bangalore',
      config: '3 & 3.5 BHK',
      duration: '12+ Months',
      adSpend: '₹1.30+ Cr',
      leads: '8,000+',
      unitsSold: '30+',
      cpl: '~₹1,625',
      challenges: [
        'Location perception issues',
        'Demographic mismatch',
        '3 BHK preference over 3.5 BHK',
        'High competition'
      ],
      strategies: [
        'Repositioned location as emerging investment zone',
        'Targeted aspirational buyers across Bangalore',
        'Created dedicated 3.5 BHK campaigns',
        'Multi-channel approach with optimized lead nurturing'
      ]
    },
    {
      name: 'Mana Dale',
      location: 'Sarjapur, Bangalore',
      config: '3 & 4 BHK',
      ticketSize: '₹1.68 Cr+',
      possession: '2029',
      improvements: [
        { metric: 'CPL', from: '₹2,200', to: '<₹1,500', change: '32% ↓' },
        { metric: 'Qualification Rate', from: '11%', to: '24%', change: '118% ↑' },
        { metric: 'CAC', from: 'High', to: '<2%', change: 'During offer period' }
      ],
      challenges: [
        'High CPL at ₹2,200+',
        'Low qualification rate (11%)',
        'Poor booking rate',
        'Long possession timeline (2029)',
        'High ticket size'
      ],
      strategies: [
        'Launched "Freedom Offer" achieving 1.4% CAC',
        'Restructured ad sets post-offer',
        'Refreshed creatives for sustained performance',
        'Optimized targeting without promotional pricing'
      ]
    },
    {
      name: 'The Baya - Highlife Homes',
      location: 'Devanahalli, Bangalore',
      config: '1 & 2 BHK',
      priceRange: '₹1.65 - ₹2.65 Cr',
      phase: 'Launch Phase (4 Months)',
      cpl: '<₹1,200',
      qualificationRate: '20%+',
      unitsBooked: '4 Units',
      challenges: [
        'Premium pricing for 1-2 BHK',
        'Low footfall/walk-ins',
        'New brand with no recognition',
        'Developing location (Devanahalli)'
      ],
      strategies: [
        'Fresh creative approach for aspirational buyers',
        'Highlighted airport proximity & infrastructure',
        'Emphasized lifestyle and investment value',
        'Multi-platform campaigns with precise targeting'
      ]
    }
  ];

  return (
    <section id="real-estate" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Building2 size={32} className="text-white" />
            <span className="bg-white text-black px-4 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
              Real Estate
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Premium Real Estate
            <br />
            <span className="text-white/70">Lead Generation Systems</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl">
            High-ticket lead generation, qualification systems, CRM automation, and revenue impact across premium residential projects in Bangalore.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 lg:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{study.name}</h3>
                <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                  <span>📍 {study.location}</span>
                  <span>🏠 {study.config}</span>
                  {study.duration && <span>⏱️ {study.duration}</span>}
                  {study.ticketSize && <span>💰 {study.ticketSize}</span>}
                  {study.phase && <span>🚀 {study.phase}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Metrics */}
                <div>
                  <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Performance Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {study.adSpend && (
                      <div className="bg-black/30 p-4 rounded-lg">
                        <div className="text-white/60 text-xs mb-1">Ad Spend</div>
                        <div className="text-white font-bold text-xl">{study.adSpend}</div>
                      </div>
                    )}
                    {study.leads && (
                      <div className="bg-black/30 p-4 rounded-lg">
                        <div className="text-white/60 text-xs mb-1">Leads Generated</div>
                        <div className="text-white font-bold text-xl">{study.leads}</div>
                      </div>
                    )}
                    {study.unitsSold && (
                      <div className="bg-black/30 p-4 rounded-lg">
                        <div className="text-white/60 text-xs mb-1">Units Sold</div>
                        <div className="text-white font-bold text-xl">{study.unitsSold}</div>
                      </div>
                    )}
                    {study.cpl && (
                      <div className="bg-black/30 p-4 rounded-lg">
                        <div className="text-white/60 text-xs mb-1">Cost Per Lead</div>
                        <div className="text-white font-bold text-xl">{study.cpl}</div>
                      </div>
                    )}
                    {study.qualificationRate && (
                      <div className="bg-black/30 p-4 rounded-lg">
                        <div className="text-white/60 text-xs mb-1">Qualification Rate</div>
                        <div className="text-white font-bold text-xl">{study.qualificationRate}</div>
                      </div>
                    )}
                    {study.unitsBooked && (
                      <div className="bg-black/30 p-4 rounded-lg">
                        <div className="text-white/60 text-xs mb-1">Units Booked</div>
                        <div className="text-white font-bold text-xl">{study.unitsBooked}</div>
                      </div>
                    )}
                  </div>

                  {/* Improvements */}
                  {study.improvements && (
                    <div className="mt-6">
                      <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Performance Improvements</h4>
                      <div className="space-y-2">
                        {study.improvements.map((imp, i) => (
                          <div key={i} className="flex items-center justify-between bg-black/30 p-3 rounded-lg">
                            <div>
                              <div className="text-white font-medium">{imp.metric}</div>
                              <div className="text-white/60 text-sm">{imp.from} → {imp.to}</div>
                            </div>
                            <div className="text-white font-bold">{imp.change}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column - Challenges & Strategies */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Challenges</h4>
                    <ul className="space-y-2">
                      {study.challenges.map((challenge, i) => (
                        <li key={i} className="text-white/70 flex items-start gap-2">
                          <span className="text-white mt-1">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Strategy</h4>
                    <ul className="space-y-2">
                      {study.strategies.map((strategy, i) => (
                        <li key={i} className="text-white/70 flex items-start gap-2">
                          <span className="text-white mt-1">→</span>
                          <span>{strategy}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 bg-white text-black rounded-lg p-6 lg:p-8"
        >
          <h4 className="text-xl font-bold mb-6">Overall Performance Impact</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold">₹5+ Cr</div>
              <div className="text-black/70 text-sm mt-1">Total Ad Spend</div>
            </div>
            <div>
              <div className="text-3xl font-bold">12,000+</div>
              <div className="text-black/70 text-sm mt-1">Total Leads</div>
            </div>
            <div>
              <div className="text-3xl font-bold">34+</div>
              <div className="text-black/70 text-sm mt-1">Units Sold</div>
            </div>
            <div>
              <div className="text-3xl font-bold">30-35%</div>
              <div className="text-black/70 text-sm mt-1">Avg CPL Improvement</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Social Media Case Study Component
const SocialMediaCaseStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="social-media" ref={ref} className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Users size={32} className="text-white" />
            <span className="bg-white text-black px-4 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
              Social Media
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Strategic Social Media
            <br />
            <span className="text-white/70">Performance Systems</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mb-4">
            Strategic content systems, engagement growth, performance creatives, and community building.
          </p>
          <p className="text-white italic text-lg">
            "Posting more isn't strategy. Precision is."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-lg p-6 lg:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Lifestyle Brand Campaign</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-white/60 text-xs mb-1">Engagement Rate</div>
                  <div className="text-white font-bold text-xl">8.5%</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-white/60 text-xs mb-1">Follower Growth</div>
                  <div className="text-white font-bold text-xl">245%</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-white/60 text-xs mb-1">Campaign Duration</div>
                  <div className="text-white font-bold text-xl">6 Months</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-white/60 text-xs mb-1">Content Pieces</div>
                  <div className="text-white font-bold text-xl">180+</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Approach</h4>
                <ul className="space-y-2">
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">→</span>
                    <span>Data-driven content calendar with strategic themes</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">→</span>
                    <span>Performance creative testing across platforms</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">→</span>
                    <span>Community engagement and relationship building</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">→</span>
                    <span>Influencer partnerships for amplification</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Key Results</h4>
                <ul className="space-y-2">
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Achieved 8.5% average engagement rate (industry avg: 2-3%)</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>245% follower growth in 6 months</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Generated 1,200+ qualified inquiries through social</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Ecommerce Case Study Component
const EcommerceCaseStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecommerce" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Target size={32} className="text-white" />
            <span className="bg-white text-black px-4 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
              Ecommerce
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ecommerce Revenue
            <br />
            <span className="text-white/70">Scaling Systems</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl">
            Revenue scaling, ROAS optimization, funnel building, creative testing systems, and conversion rate improvements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-lg p-6 lg:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">D2C Fashion Brand Scale-Up</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-white/60 text-xs mb-1">ROAS</div>
                  <div className="text-white font-bold text-xl">4.8X</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-white/60 text-xs mb-1">Revenue Growth</div>
                  <div className="text-white font-bold text-xl">320%</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-white/60 text-xs mb-1">Conversion Rate</div>
                  <div className="text-white font-bold text-xl">3.8%</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-white/60 text-xs mb-1">AOV Increase</div>
                  <div className="text-white font-bold text-xl">45%</div>
                </div>
              </div>

              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2">Performance Improvements</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">CAC Reduction</span>
                    <span className="text-white font-bold">40% ↓</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Cart Abandonment</span>
                    <span className="text-white font-bold">65% → 42%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Repeat Purchase Rate</span>
                    <span className="text-white font-bold">28% ↑</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Strategy</h4>
                <ul className="space-y-2">
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">→</span>
                    <span>Full-funnel campaign structure with retargeting layers</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">→</span>
                    <span>Dynamic creative testing framework (100+ variants)</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">→</span>
                    <span>Conversion rate optimization through A/B testing</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">→</span>
                    <span>Email automation for cart recovery and upsells</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">→</span>
                    <span>Audience segmentation for personalized messaging</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Impact</h4>
                <ul className="space-y-2">
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Scaled monthly revenue from ₹15L to ₹63L</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Maintained 4.8X ROAS while scaling 3X</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Improved AOV by 45% through bundling strategy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// SEO Case Study Component
const SEOCaseStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="seo" ref={ref} className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={32} className="text-white" />
            <span className="bg-white text-black px-4 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
              SEO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            SEO & Organic
            <br />
            <span className="text-white/70">Authority Building</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl">
            Organic traffic growth, keyword ranking strategy, lead-focused SEO structure, and long-term authority building.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-lg p-6 lg:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">B2B SaaS SEO Growth</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-white/60 text-xs mb-1">Organic Traffic</div>
                  <div className="text-white font-bold text-xl">485% ↑</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-white/60 text-xs mb-1">Keyword Rankings</div>
                  <div className="text-white font-bold text-xl">250+</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-white/60 text-xs mb-1">Organic Leads/Mo</div>
                  <div className="text-white font-bold text-xl">180+</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-white/60 text-xs mb-1">Domain Authority</div>
                  <div className="text-white font-bold text-xl">28 → 52</div>
                </div>
              </div>

              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2">Timeline</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Month 0-3</span>
                    <span className="text-white">Foundation & Technical SEO</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Month 4-6</span>
                    <span className="text-white">Content & Authority Building</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Month 7-12</span>
                    <span className="text-white">Scaling & Optimization</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Strategy</h4>
                <ul className="space-y-2">
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">→</span>
                    <span>Comprehensive technical SEO audit and fixes</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">→</span>
                    <span>Strategic keyword research focused on buyer intent</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">→</span>
                    <span>High-quality content production (80+ articles)</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">→</span>
                    <span>Authority link building through digital PR</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">→</span>
                    <span>On-page optimization and conversion focus</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Results</h4>
                <ul className="space-y-2">
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>485% increase in organic traffic (12 months)</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>250+ keywords ranking in top 10 positions</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>180+ qualified organic leads per month</span>
                  </li>
                  <li className="text-white/70 flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Domain authority increased from 28 to 52</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
