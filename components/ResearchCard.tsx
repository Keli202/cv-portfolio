// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Experience } from '../types';
// // import { ArrowRight } from 'lucide-react';

// // interface Props {
// //   data: Experience;
// //   onClick: (data: Experience) => void;
// // }

// // const ResearchCard: React.FC<Props> = ({ data, onClick }) => {
// //   // Extract project title from points if available, or use role
// //   const title = data.points[0].startsWith('Project:') 
// //     ? data.points[0].replace('Project: ', '').replace('.', '')
// //     : data.role;

// //   // Get a brief summary for the card (2nd point usually)
// //   const summary = data.points.length > 1 ? data.points[1] : data.points[0];

// //   return (
// //     <motion.div
// //       layoutId={`card-container-${data.role}`}
// //       whileHover={{ y: -8, transition: { duration: 0.3 } }}
// //       onClick={() => onClick(data)}
// //       className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 border border-slate-100 flex flex-col h-full"
// //     >
// //       {/* Image Section */}
// //       <div className="relative h-64 overflow-hidden bg-slate-100">
// //         <motion.img
// //            layoutId={`card-image-${data.role}`}
// //            src={data.imageUrl}
// //            alt={title}
// //            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// //         />
// //         <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
// //       </div>

// //       {/* Content Section */}
// //       <div className="p-8 flex flex-col flex-grow">
// //         <div className="mb-4">
// //           <span className="text-xs font-bold tracking-widest text-accent uppercase mb-2 block">
// //             {data.type}
// //           </span>
// //           <motion.h3 
// //             layoutId={`card-title-${data.role}`}
// //             className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors leading-tight"
// //           >
// //             {title}
// //           </motion.h3>
// //         </div>

// //         <p className="text-secondary text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
// //           {summary}
// //         </p>

// //         <div className="flex items-center text-accent text-sm font-semibold group-hover:underline decoration-2 underline-offset-4">
// //           View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default ResearchCard;


// // components/ResearchCard.tsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Experience } from '../types';
// import { ArrowRight, ExternalLink } from 'lucide-react';

// interface Props {
//   data: Experience;
//   onClick: (data: Experience) => void;
// }

// const ResearchCard: React.FC<Props> = ({ data, onClick }) => {
//   const {
//     id,
//     title,
//     role,
//     company,
//     location,
//     type,
//     imageUrl,
//     summary,
//     paperUrl,
//     paperVenue,
//     points,
//   } = data;

//   // 如果没有 summary，就用第一个 point 兜底
//   const fallbackSummary =
//     summary || (points && points.length > 0 ? points[0] : '');

//   // 小字的一行：角色 + 单位 + 地点
//   const metaLine = [role, company, location].filter(Boolean).join(' · ');

//   return (
//     <motion.div
//       layoutId={`card-container-${id}`} // 用稳定的 id
//       whileHover={{ y: -8, transition: { duration: 0.3 } }}
//       onClick={() => onClick(data)}
//       className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 border border-slate-100 flex flex-col h-full"
//     >
//       {/* 图片区域 */}
//       <div className="relative h-64 overflow-hidden bg-slate-100">
//         {imageUrl && (
//           <motion.img
//             layoutId={`card-image-${id}`}
//             src={imageUrl}
//             alt={title}
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//           />
//         )}
//         <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
//       </div>

//       {/* 文本内容 */}
//       <div className="p-8 flex flex-col flex-grow">
//         <div className="mb-4">
//           <span className="text-xs font-bold tracking-widest text-accent uppercase mb-2 block">
//             {type}
//           </span>

//           <motion.h3
//             layoutId={`card-title-${id}`}
//             className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors leading-tight"
//           >
//             {title}
//           </motion.h3>

//           {metaLine && (
//             <p className="mt-1 text-xs text-slate-400">
//               {metaLine}
//             </p>
//           )}
//         </div>

//         <p className="text-secondary text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
//           {fallbackSummary}
//         </p>

//         {/* 底部：View Details + 可选 Paper 链接 */}
//         <div className="mt-auto flex flex-col gap-1">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center text-accent text-sm font-semibold group-hover:underline decoration-2 underline-offset-4">
//               View Details
//               <ArrowRight
//                 size={16}
//                 className="ml-2 group-hover:translate-x-1 transition-transform"
//               />
//             </div>

//             {paperUrl && (
//               <a
//                 href={paperUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 onClick={(e) => e.stopPropagation()} // 防止点 Paper 时也打开 modal
//                 className="hidden sm:inline-flex items-center text-xs font-semibold text-sky-600 hover:text-sky-700 hover:underline"
//               >
//                 Paper
//                 <ExternalLink size={12} className="ml-1" />
//               </a>
//             )}
//           </div>

//           {paperVenue && (
//             <p className="text-[11px] text-red-500 font-semibold">
//               {paperVenue}
//             </p>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ResearchCard;

// components/ResearchCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface Props {
  data: Experience;
  onClick: (data: Experience) => void;
}

const ResearchCard: React.FC<Props> = ({ data, onClick }) => {
  const {
    id,
    title,
    role,
    company,
    location,
    type,
    imageUrl,
    summary,
    paperUrl,
    paperVenue,
    points,
  } = data;

  // 如果没有 summary，就用第一个 point 兜底
  const fallbackSummary =
    summary || (points && points.length > 0 ? points[0] : '');

  // 小字的一行：角色 + 单位 + 地点
  const metaLine = [role, company, location].filter(Boolean).join(' · ');

  return (
    <motion.div
      layoutId={`card-container-${id}`}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={() => onClick(data)}
      className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 border border-slate-100 flex flex-col h-full"
    >
      {/* 图片区域：固定高度 + object-contain */}
      <div className="relative h-64 bg-slate-100 flex items-center justify-center overflow-hidden">
        {imageUrl && (
          <motion.img
            layoutId={`card-image-${id}`}
            src={imageUrl}
            alt={title}
            className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
      </div>

      {/* 文本内容 */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-xs font-bold tracking-widest text-accent uppercase mb-2 block">
            {type}
          </span>

          <motion.h3
            layoutId={`card-title-${id}`}
            className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors leading-tight"
          >
            {title}
          </motion.h3>

          {metaLine && (
            <p className="mt-1 text-xs text-slate-400">
              {metaLine}
            </p>
          )}
        </div>

        {/* 摘要：不再截断，改为两端对齐 */}
        <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow text-left">
          {fallbackSummary}
        </p>

        {/* 底部：View Details + 可选 Paper 链接 */}
        <div className="mt-auto flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-accent text-sm font-semibold group-hover:underline decoration-2 underline-offset-4">
              View Details
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </div>

            {paperUrl && (
              <a
                href={paperUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()} // 防止点 Paper 时也打开 modal
                className="hidden sm:inline-flex items-center text-xs font-semibold text-sky-600 hover:text-sky-700 hover:underline"
              >
                Paper
                <ExternalLink size={12} className="ml-1" />
              </a>
            )}
          </div>

          {paperVenue && (
            <p className="text-[11px] text-red-500 font-semibold">
              {paperVenue}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchCard;

