import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl font-serif font-bold mb-4">Technical Proficiency</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
            Skills spanning deep learning research, graphics, quantitative data analysis, and scalable software systems.            
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skillGroup, idx) => (
                <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-colors"
                >
                    <h3 className="text-xl font-bold text-accent mb-6">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                            <span 
                                key={skill}
                                className="px-3 py-1.5 bg-white/10 text-sm rounded text-gray-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;