import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          {/* About Text */}
          <div className="md:w-1/2">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-serif font-bold text-primary mb-6">About Me</h2>
                <p className="text-gray-600 leading-loose text-lg mb-6 text-justify">
                I am an early-career researcher in computer science and data science. I’m interested in how intelligent systems represent and reason about complex data, and I enjoy projects that connect clear theoretical ideas with careful implementation and honest, rigorous evaluation.                </p>
                <p className="text-gray-600 leading-loose text-lg text-justify">
                I like turning challenging real-world data into well-structured models and tools. My work so far spans computer vision and graphics, large-scale data analysis and applied machine learning, with applications from medical imaging and remote sensing to multi-omics and text analytics. I am keen to apply this toolkit to new problems in 3D generative modelling, HDR imaging and multimodal systems.
                </p>
            </motion.div>
          </div>

          {/* Education Timeline */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-serif font-bold text-primary mb-8 flex items-center gap-2">
                <GraduationCap className="text-accent" /> Education
            </h3>
            <div className="space-y-8 border-l-2 border-gray-100 pl-8 ml-3 relative">
              {EDUCATION.map((edu, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                >
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-accent shadow-sm"></span>
                  <div className="mb-1">
                    <span className="text-sm font-semibold text-accent">{edu.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-primary">{edu.institution}</h4>
                  <p className="text-lg text-secondary font-medium mb-2">{edu.degree}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {edu.details.map((detail, idx) => (
                        // <li key={idx}>{detail}</li>
                        <li
                          key={idx}
                          className="text-justify leading-relaxed"
                        >
                          {detail}
                        </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;