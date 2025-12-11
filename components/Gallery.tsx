import React from 'react';
import { motion } from 'framer-motion';

// This component acts as the "Folder of images" visualization requested
const Gallery: React.FC = () => {
    
  // Placeholders that mimic the "Projects" screenshots from the user's prompt
  const images = [
      { 
          title: "Fetal Ultrasound Analysis", 
          subtitle: "IEEE ISBI 2026 Submission",
          src: "https://picsum.photos/800/600?random=1", 
          colSpan: "md:col-span-2" 
      },
      { 
          title: "Ship Detection (SAR)", 
          subtitle: "YOLOv8 + Swin Transformer",
          src: "https://picsum.photos/400/600?random=2", 
          colSpan: "md:col-span-1" 
      },
      { 
          title: "Multimodal Integration", 
          subtitle: "Viscpm-chat Evaluation",
          src: "https://picsum.photos/400/400?random=3", 
          colSpan: "md:col-span-1" 
      },
      { 
          title: "Cancer Genomics", 
          subtitle: "Survival Modelling",
          src: "https://picsum.photos/800/400?random=4", 
          colSpan: "md:col-span-2" 
      },
  ];

  return (
    <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
            <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-primary">Visual Gallery</h2>
                <p className="text-secondary mt-2">Snapshots of architectures, results, and research outputs.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`relative group overflow-hidden rounded-2xl ${img.colSpan}`}
                    >
                        {/* 
                           NOTE TO USER: 
                           To update these images, replace the 'src' in the images array above.
                           You can create a folder named 'public/images' and reference them like '/images/my-project.jpg'.
                        */}
                        <img 
                            src={img.src} 
                            alt={img.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <h3 className="text-white font-bold text-xl">{img.title}</h3>
                            <p className="text-gray-200 text-sm">{img.subtitle}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Gallery;