// import React, { useState } from 'react';
// import { RESEARCH_EXPERIENCE, OTHER_PROJECTS } from '../constants';
// import ResearchCard from './ResearchCard';
// import ProjectModal from './ProjectModal';
// import { Experience } from '../types';

// const Research: React.FC = () => {
//   const [selectedProject, setSelectedProject] = useState<Experience | null>(null);

//   return (
//     <section id="research" className="py-32 bg-slate-50 relative overflow-hidden">
//       {/* Background Decor */}
//       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none opacity-50" />

//       <div className="container mx-auto px-6 relative z-10">
        
//         {/* Section Header */}
//         <div className="mb-20 max-w-3xl">
//           <span className="block text-accent font-semibold tracking-widest text-sm uppercase mb-3">Portfolio</span>
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
//             Selected Research
//           </h2>
//           <p className="text-secondary text-lg leading-relaxed">
//             A curated selection of my academic research, dissertation work and technical projects. Click on any project to see a concise overview, key methods and, where available, links to code or additional material.
//           </p>
//         </div>

//         {/* Research Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 mb-24">
//           {RESEARCH_EXPERIENCE.map((item, index) => (
//             <ResearchCard 
//                 key={index} 
//                 data={item} 
//                 onClick={setSelectedProject} 
//             />
//           ))}
//         </div>

//         {/* Other Projects Section */}
//         <div className="border-t border-gray-200 pt-20">
//           <h3 className="text-2xl font-serif font-bold text-primary mb-10">
//             Additional Projects
//           </h3>

//           {/* 横向滚动容器 */}
//           <div className="-mx-6 px-6 overflow-x-auto">
//             <div className="flex gap-6 snap-x snap-mandatory pb-4">
//               {OTHER_PROJECTS.map((item, index) => (
//                 <div
//                   key={`other-${index}`}
//                   className="w-[260px] sm:w-[280px] lg:w-[320px] flex-shrink-0 snap-start"
//                 >
//                   <ResearchCard
//                     data={item}
//                     onClick={setSelectedProject}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       {/* Detail Modal */}
//       <ProjectModal 
//         selectedProject={selectedProject} 
//         onClose={() => setSelectedProject(null)} 
//       />
//     </section>
//   );
// };

// export default Research;


import React, { useState } from 'react';
import { RESEARCH_EXPERIENCE, OTHER_PROJECTS } from '../constants';
import ResearchCard from './ResearchCard';
import ProjectModal from './ProjectModal';
import { Experience } from '../types';

const Research: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Experience | null>(null);

  return (
    <section id="research" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <span className="block text-accent font-semibold tracking-widest text-sm uppercase mb-3">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
            Selected Research
          </h2>
          <p className="text-secondary text-lg leading-relaxed">
            A curated selection of my academic research, dissertation work and technical projects. Click on any project to see a concise overview, key methods and, where available, links to code or additional material.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 mb-24">
          {RESEARCH_EXPERIENCE.map((item, index) => (
            <ResearchCard
              key={index}
              data={item}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {/* Other Projects Section */}
        <div className="border-t border-gray-200 pt-20">
          <h3 className="text-2xl font-serif font-bold text-primary mb-10">
            Additional Projects
          </h3>

          {/* 横向滚动容器 */}
          <div className="-mx-6 px-6 overflow-x-auto">
            <div className="flex gap-6 snap-x snap-mandatory pb-4">
              {OTHER_PROJECTS.map((item, index) => (
                <div
                  key={`other-${index}`}
                  className="w-[260px] sm:w-[280px] lg:w-[320px] flex-shrink-0 snap-start"
                >
                  <ResearchCard
                    data={item}
                    onClick={setSelectedProject}
                  />
                </div>
              ))}
            </div>
          </div>
        </div> {/* <- 关闭 border-t 这层 */}
      </div>   {/* <- 这里新增：关闭 container 这层 */}

      {/* Detail Modal */}
      <ProjectModal
        selectedProject={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Research;
