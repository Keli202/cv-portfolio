import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown, Github, Mail, Linkedin, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface pt-20">
      
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50rem] h-[50rem] bg-indigo-50/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[40rem] h-[40rem] bg-sky-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            
            {/* Text Content */}
            <div className="w-full md:w-3/5 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-white border border-gray-100 shadow-sm rounded-full">
                        Research Portfolio
                    </span>
                    
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-[1.1]">
                        {PERSONAL_INFO.name}
                    </h1>

                    <p className="text-xl md:text-2xl text-secondary mb-8 leading-relaxed max-w-2xl font-light text-justify flex flex-col items-center">
                    I’m a computer science and data science graduate who enjoys understanding how things work and turning ideas into clear, reliable systems. Outside of study and research I love travelling and spending time in nature, and that curiosity for people and places also shapes how I think about my work.                   
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                        <a
                            href="#research"
                            className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-2xl hover:-translate-y-1"
                        >
                            Explore Projects
                        </a>
                        <div className="flex gap-4 ml-0 sm:ml-4">
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 bg-white border border-gray-200 rounded-full text-secondary hover:text-accent hover:border-accent transition-all">
                                <Mail size={20} />
                            </a>
                            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-gray-200 rounded-full text-secondary hover:text-accent hover:border-accent transition-all">
                                <Github size={20} />
                            </a>
                            <a
                                href={PERSONAL_INFO.cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-4 bg-white border border-gray-200 rounded-full text-sm font-semibold text-secondary hover:text-accent hover:border-accent transition-all"
                            >
                                CV
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="w-full md:w-2/5 max-w-[400px]"
            >
                 <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-700">
                    <img 
                        src={PERSONAL_INFO.heroImage}
                        alt={PERSONAL_INFO.name} 
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                        <div>
                             <p className="text-white font-serif text-lg italic">"Computer Vision & Computer Graphics"</p>
                        </div>
                    </div>
                 </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;