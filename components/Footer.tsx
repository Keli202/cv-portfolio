import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Mail, Phone, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-primary text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0">
                <h2 className="text-3xl font-serif font-bold mb-2">{PERSONAL_INFO.name}</h2>
                <p className="text-gray-400 max-w-sm">
                Currently seeking PhD opportunities in related research areas.
                </p>
            </div>
            
            <div className="flex flex-col gap-4">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                    <Mail size={20} />
                    <span>{PERSONAL_INFO.email}</span>
                </a>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                    <Phone size={20} />
                    <span>{PERSONAL_INFO.phone}</span>
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                    <Github size={20} />
                    <span>github.com/Keli202</span>
                </a>
            </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Keli Niu. All rights reserved.</p>
            <p>Designed for Academic Portfolio.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;