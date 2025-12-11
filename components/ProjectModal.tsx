// // // import React, { useEffect } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { X, Github, Calendar, MapPin, Tag } from 'lucide-react';
// // // import { Experience } from '../types';

// // // interface Props {
// // //   selectedProject: Experience | null;
// // //   onClose: () => void;
// // // }

// // // const ProjectModal: React.FC<Props> = ({ selectedProject, onClose }) => {
// // //   // Lock body scroll when modal is open
// // //   useEffect(() => {
// // //     if (selectedProject) {
// // //       document.body.style.overflow = 'hidden';
// // //     } else {
// // //       document.body.style.overflow = 'unset';
// // //     }
// // //     return () => { document.body.style.overflow = 'unset'; };
// // //   }, [selectedProject]);

// // //   if (!selectedProject) return null;

// // //   const title = selectedProject.points[0].startsWith('Project:') 
// // //     ? selectedProject.points[0].replace('Project: ', '').replace('.', '')
// // //     : selectedProject.role;

// // //   return (
// // //     <AnimatePresence>
// // //       {selectedProject && (
// // //         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            
// // //           {/* Backdrop */}
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             onClick={onClose}
// // //             className="absolute inset-0 bg-primary/60 backdrop-blur-md"
// // //           />

// // //           {/* Modal Container */}
// // //           <motion.div
// // //             layoutId={`card-container-${selectedProject.role}`}
// // //             className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
// // //             onClick={(e) => e.stopPropagation()}
// // //           >
// // //             {/* Close Button */}
// // //             <button 
// // //                 onClick={onClose}
// // //                 className="absolute top-4 right-4 z-50 p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-primary"
// // //             >
// // //                 <X size={24} />
// // //             </button>

// // //             {/* Left/Top: Image */}
// // //             <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-100 relative">
// // //                <motion.img
// // //                 layoutId={`card-image-${selectedProject.role}`}
// // //                 src={selectedProject.imageUrl}
// // //                 alt={title}
// // //                 className="w-full h-full object-cover"
// // //                />
// // //                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-primary/80 to-transparent text-white md:hidden">
// // //                     <h2 className="text-2xl font-serif font-bold">{title}</h2>
// // //                </div>
// // //             </div>

// // //             {/* Right/Bottom: Content */}
// // //             <div className="w-full md:w-1/2 overflow-y-auto p-8 md:p-12">
// // //                 <motion.div
// // //                     initial={{ opacity: 0, y: 20 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     transition={{ delay: 0.2 }}
// // //                 >
// // //                     <h2 className="hidden md:block text-3xl font-serif font-bold text-primary mb-4">{title}</h2>
                    
// // //                     <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8 font-medium">
// // //                         <span className="flex items-center gap-1">
// // //                             <Calendar size={16} className="text-accent" /> {selectedProject.date}
// // //                         </span>
// // //                         {selectedProject.location && (
// // //                             <span className="flex items-center gap-1">
// // //                                 <MapPin size={16} className="text-accent" /> {selectedProject.location}
// // //                             </span>
// // //                         )}
// // //                     </div>

// // //                     <div className="space-y-6 mb-8">
// // //                         <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Key Contributions</h3>
// // //                         <ul className="space-y-3">
// // //                             {selectedProject.points.slice(1).map((point, idx) => (
// // //                                 <li key={idx} className="text-secondary leading-relaxed flex items-start text-base">
// // //                                     <span className="mr-3 mt-2 w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
// // //                                     {point}
// // //                                 </li>
// // //                             ))}
// // //                         </ul>
// // //                     </div>

// // //                     <div className="mb-10">
// // //                         <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Technologies</h3>
// // //                         <div className="flex flex-wrap gap-2">
// // //                             {selectedProject.tags.map(tag => (
// // //                                 <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-sm font-medium">
// // //                                     {tag}
// // //                                 </span>
// // //                             ))}
// // //                         </div>
// // //                     </div>

// // //                     {selectedProject.githubUrl && (
// // //                         <a 
// // //                             href={selectedProject.githubUrl} 
// // //                             target="_blank" 
// // //                             rel="noopener noreferrer"
// // //                             className="inline-flex items-center justify-center w-full px-6 py-4 bg-primary text-white rounded-xl font-bold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-accent/30 group"
// // //                         >
// // //                             <Github className="mr-2 group-hover:rotate-12 transition-transform" />
// // //                             View Code on GitHub
// // //                         </a>
// // //                     )}
// // //                 </motion.div>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       )}
// // //     </AnimatePresence>
// // //   );
// // // };

// // // export default ProjectModal;


// // // ProjectModal.tsx
// // import React, { useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { X, Github, Calendar, MapPin } from 'lucide-react';
// // import { Experience } from '../types';

// // interface Props {
// //   selectedProject: Experience | null;
// //   onClose: () => void;
// // }

// // const ProjectModal: React.FC<Props> = ({ selectedProject, onClose }) => {
// //   // 打开弹窗时锁定页面滚动
// //   useEffect(() => {
// //     if (selectedProject) {
// //       document.body.style.overflow = 'hidden';
// //     } else {
// //       document.body.style.overflow = 'unset';
// //     }
// //     return () => {
// //       document.body.style.overflow = 'unset';
// //     };
// //   }, [selectedProject]);

// //   return (
// //     <AnimatePresence>
// //       {selectedProject && (
// //         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
// //           {/* 背景遮罩 */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={onClose}
// //             className="absolute inset-0 bg-primary/60 backdrop-blur-md"
// //           />

// //           {/* 弹窗主体 */}
// //           <motion.div
// //             layoutId={`card-container-${selectedProject.title}`}
// //             initial={{ opacity: 0, scale: 0.95, y: 20 }}
// //             animate={{ opacity: 1, scale: 1, y: 0 }}
// //             exit={{ opacity: 0, scale: 0.95, y: 20 }}
// //             transition={{ type: 'spring', stiffness: 230, damping: 25 }}
// //             className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             {/* 关闭按钮 */}
// //             <button
// //               onClick={onClose}
// //               className="absolute top-4 right-4 z-50 p-2 bg-white/60 hover:bg-white rounded-full transition-colors text-primary shadow-sm"
// //             >
// //               <X size={22} />
// //             </button>

// //             {/* 左侧图片 */}
// //             <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-100 relative">
// //               {selectedProject.imageUrl && (
// //                 <motion.img
// //                   layoutId={`card-image-${selectedProject.title}`}
// //                   src={selectedProject.imageUrl}
// //                   alt={selectedProject.title}
// //                   className="w-full h-full object-cover"
// //                 />
// //               )}

// //               {/* 手机端标题叠加在图上 */}
// //               <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white md:hidden">
// //                 <h2 className="text-2xl font-serif font-bold">
// //                   {selectedProject.title}
// //                 </h2>
// //                 <p className="mt-1 text-xs text-slate-100">
// //                   {[selectedProject.role, selectedProject.company, selectedProject.location]
// //                     .filter(Boolean)
// //                     .join(' · ')}
// //                 </p>
// //               </div>
// //             </div>

// //             {/* 右侧内容 */}
// //             <div className="w-full md:w-1/2 overflow-y-auto p-8 md:p-12">
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.15 }}
// //               >
// //                 {/* 桌面端标题 */}
// //                 <h2 className="hidden md:block text-3xl font-serif font-bold text-primary mb-2">
// //                   {selectedProject.title}
// //                 </h2>
// //                 <p className="hidden md:block text-xs text-slate-400 mb-4">
// //                   {[selectedProject.role, selectedProject.company, selectedProject.location]
// //                     .filter(Boolean)
// //                     .join(' · ')}
// //                 </p>

// //                 {/* 时间 & 地点 */}
// //                 <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6 font-medium">
// //                   <span className="flex items-center gap-1">
// //                     <Calendar size={16} className="text-accent" /> {selectedProject.date}
// //                   </span>
// //                   {selectedProject.location && (
// //                     <span className="flex items-center gap-1">
// //                       <MapPin size={16} className="text-accent" /> {selectedProject.location}
// //                     </span>
// //                   )}
// //                 </div>

// //                 {/* Summary */}
// //                 {selectedProject.summary && (
// //                   <div className="mb-6">
// //                     <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
// //                       Overview
// //                     </h3>
// //                     <p className="text-secondary leading-relaxed text-base text-justify">
// //                       {selectedProject.summary}
// //                     </p>
// //                   </div>
// //                 )}

// //                 {/* 贡献要点 */}
// //                 {selectedProject.points && selectedProject.points.length > 0 && (
// //                   <div className="space-y-4 mb-8">
// //                     <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
// //                       Key Contributions
// //                     </h3>
// //                     <ul className="space-y-3">
// //                       {selectedProject.points.map((point, idx) => (
// //                         <li
// //                           key={idx}
// //                           className="text-secondary leading-relaxed flex items-start text-sm md:text-base"
// //                         >
// //                           <span className="mr-3 mt-2 w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
// //                           <span className="block text-justify">
// //                           {point}
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 )}

// //                 {/* 技术栈标签 */}
// //                 {selectedProject.tags && selectedProject.tags.length > 0 && (
// //                   <div className="mb-8">
// //                     <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
// //                       Technologies
// //                     </h3>
// //                     <div className="flex flex-wrap gap-2">
// //                       {selectedProject.tags.map((tag) => (
// //                         <span
// //                           key={tag}
// //                           className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs md:text-sm font-medium"
// //                         >
// //                           {tag}
// //                         </span>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* GitHub 按钮（可选） */}
// //                 {selectedProject.githubUrl && (
// //                   <a
// //                     href={selectedProject.githubUrl}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="inline-flex items-center justify-center w-full px-6 py-4 bg-primary text-white rounded-xl font-bold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-accent/30 group"
// //                   >
// //                     <Github className="mr-2 group-hover:rotate-12 transition-transform" />
// //                     View Code on GitHub
// //                   </a>
// //                 )}
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       )}
// //     </AnimatePresence>
// //   );
// // };

// // export default ProjectModal;





// // ProjectModal.tsx
// import React, { useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Github, Calendar, MapPin } from 'lucide-react';
// import { Experience } from '../types';

// interface Props {
//   selectedProject: Experience | null;
//   onClose: () => void;
// }

// const ProjectModal: React.FC<Props> = ({ selectedProject, onClose }) => {
//   // 打开弹窗时锁定页面滚动
//   useEffect(() => {
//     if (selectedProject) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [selectedProject]);

//   return (
//     <AnimatePresence>
//       {selectedProject && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
//           {/* 背景遮罩 */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="absolute inset-0 bg-primary/60 backdrop-blur-md"
//           />

//           {/* 弹窗主体 */}
//           <motion.div
//             layoutId={`card-container-${selectedProject.title}`}
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             transition={{ type: 'spring', stiffness: 230, damping: 25 }}
//             className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* 关闭按钮 */}
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 z-50 p-2 bg-white/60 hover:bg-white rounded-full transition-colors text-primary shadow-sm"
//             >
//               <X size={22} />
//             </button>

//             {/* 左侧图片 */}
//             <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-100 relative">
//               {selectedProject.imageUrl && (
//                 <motion.img
//                   layoutId={`card-image-${selectedProject.title}`}
//                   src={selectedProject.imageUrl}
//                   alt={selectedProject.title}
//                   className="w-full h-full object-cover"
//                 />
//               )}

//               {/* 手机端标题叠加在图上 */}
//               <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white md:hidden">
//                 <h2 className="text-2xl font-serif font-bold">
//                   {selectedProject.title}
//                 </h2>
//                 <p className="mt-1 text-xs text-slate-100">
//                   {[selectedProject.role, selectedProject.company, selectedProject.location]
//                     .filter(Boolean)
//                     .join(' · ')}
//                 </p>
//               </div>
//             </div>

//             {/* 右侧内容 */}
//             <div className="w-full md:w-1/2 overflow-y-auto p-8 md:p-12">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.15 }}
//               >
//                 {/* 桌面端标题 */}
//                 <h2 className="hidden md:block text-3xl font-serif font-bold text-primary mb-2">
//                   {selectedProject.title}
//                 </h2>
//                 <p className="hidden md:block text-xs text-slate-400 mb-4">
//                   {[selectedProject.role, selectedProject.company, selectedProject.location]
//                     .filter(Boolean)
//                     .join(' · ')}
//                 </p>

//                 {/* 时间 & 地点 */}
//                 <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6 font-medium">
//                   <span className="flex items-center gap-1">
//                     <Calendar size={16} className="text-accent" /> {selectedProject.date}
//                   </span>
//                   {selectedProject.location && (
//                     <span className="flex items-center gap-1">
//                       <MapPin size={16} className="text-accent" /> {selectedProject.location}
//                     </span>
//                   )}
//                 </div>

//                 {/* Summary */}
//                 {selectedProject.summary && (
//                   <div className="mb-6">
//                     <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
//                       Overview
//                     </h3>
//                     <p className="text-secondary leading-relaxed text-base text-justify">
//                       {selectedProject.summary}
//                     </p>
//                   </div>
//                 )}

//                 {/* 贡献要点 */}
//                 {selectedProject.points && selectedProject.points.length > 0 && (
//                   <div className="space-y-4 mb-8">
//                     <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
//                       Key Contributions
//                     </h3>
//                     <ul className="space-y-3">
//                       {selectedProject.points.map((point, idx) => (
//                         <li
//                           key={idx}
//                           className="text-secondary leading-relaxed flex items-start text-sm md:text-base"
//                         >
//                           <span className="mr-3 mt-2 w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
//                           <span className="block text-justify">
//                             {point}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {/* 技术栈标签 */}
//                 {selectedProject.tags && selectedProject.tags.length > 0 && (
//                   <div className="mb-8">
//                     <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
//                       Technologies
//                     </h3>
//                     <div className="flex flex-wrap gap-2">
//                       {selectedProject.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs md:text-sm font-medium"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* GitHub 按钮（可选） */}
//                 {selectedProject.githubUrl && (
//                   <a
//                     href={selectedProject.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center justify-center w-full px-6 py-4 bg-primary text-white rounded-xl font-bold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-accent/30 group"
//                   >
//                     <Github className="mr-2 group-hover:rotate-12 transition-transform" />
//                     View Code on GitHub
//                   </a>
//                 )}
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ProjectModal;

// ProjectModal.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Calendar, MapPin } from 'lucide-react';
import { Experience } from '../types';

interface Props {
  selectedProject: Experience | null;
  onClose: () => void;
}

const ProjectModal: React.FC<Props> = ({ selectedProject, onClose }) => {
  // 打开弹窗时锁定页面滚动
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // 控制是否显示大图 lightbox
  const [showLightbox, setShowLightbox] = useState(false);

  // 每次切换项目时重置 lightbox
  useEffect(() => {
    setShowLightbox(false);
  }, [selectedProject?.id]);

  if (!selectedProject) return null;

  return (
    <AnimatePresence>
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* 整个 modal 的背景遮罩（点这里关闭整个弹窗） */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/60 backdrop-blur-md"
          />

          {/* 主弹窗内容 */}
          <motion.div
            layoutId={`card-container-${selectedProject.id}`}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 230, damping: 25 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 关闭按钮（关闭整个 modal） */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-white/60 hover:bg-white rounded-full transition-colors text-primary shadow-sm"
            >
              <X size={22} />
            </button>

            {/* 左侧图片：点击打开大图 */}
            <div
              className="w-full md:w-1/2 h-64 md:h-auto bg-slate-100 relative flex items-center justify-center cursor-zoom-in"
              onClick={() => selectedProject.imageUrl && setShowLightbox(true)}
            >
              {selectedProject.imageUrl && (
                <motion.img
                  layoutId={`card-image-${selectedProject.id}`}
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              )}

              {/* 手机端标题叠加在图上 */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white md:hidden pointer-events-none">
                <h2 className="text-2xl font-serif font-bold">
                  {selectedProject.title}
                </h2>
                <p className="mt-1 text-xs text-slate-100">
                  {[selectedProject.role, selectedProject.company, selectedProject.location]
                    .filter(Boolean)
                    .join(' · ')}
                </p>
              </div>

              {/* 桌面端小提示 */}
              {selectedProject.imageUrl && (
                <div className="hidden md:block absolute bottom-3 right-4 text-[11px] text-white/80 bg-black/40 px-2 py-1 rounded-full pointer-events-none">
                  Click to zoom
                </div>
              )}
            </div>

            {/* 右侧文字内容，可滚动 */}
            <div className="w-full md:w-1/2 overflow-y-auto p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                {/* 桌面端标题 */}
                <h2 className="hidden md:block text-3xl font-serif font-bold text-primary mb-2">
                  {selectedProject.title}
                </h2>
                <p className="hidden md:block text-xs text-slate-400 mb-4">
                  {[selectedProject.role, selectedProject.company, selectedProject.location]
                    .filter(Boolean)
                    .join(' · ')}
                </p>

                {/* 时间 & 地点 */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} className="text-accent" /> {selectedProject.date}
                  </span>
                  {selectedProject.location && (
                    <span className="flex items-center gap-1">
                      <MapPin size={16} className="text-accent" /> {selectedProject.location}
                    </span>
                  )}
                </div>

                {/* Summary */}
                {selectedProject.summary && (
                  <div className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Overview
                    </h3>
                    <p className="text-secondary leading-relaxed text-base text-justify">
                      {selectedProject.summary}
                    </p>
                  </div>
                )}

                {/* Key Contributions */}
                {selectedProject.points && selectedProject.points.length > 0 && (
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Key Contributions
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-secondary leading-relaxed flex items-start text-sm md:text-base"
                        >
                          <span className="mr-3 mt-2 w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                          <span className="block text-justify">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {selectedProject.tags && selectedProject.tags.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs md:text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* GitHub 按钮 */}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-primary text-white rounded-xl font-bold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-accent/30 group"
                  >
                    <Github className="mr-2 group-hover:rotate-12 transition-transform" />
                    View Code on GitHub
                  </a>
                )}
              </motion.div>
            </div>

            {/* ====== 大图 Lightbox 层（覆盖在 modal 之上） ====== */}
            {showLightbox && selectedProject.imageUrl && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-[120] bg-black/80 flex items-center justify-center"
                onClick={() => setShowLightbox(false)}
              >
                <div
                  className="relative max-w-[90vw] max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()} // 防止点图片时关闭
                >
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                  />
                  <button
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                    onClick={() => setShowLightbox(false)}
                  >
                    <X size={18} />
                  </button>
                  <div className="absolute bottom-3 right-4 text-[11px] text-white/80 bg-black/40 px-2 py-1 rounded-full">
                    Click outside to close
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;


