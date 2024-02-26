// import React from "react";

// const TryHover = () => {
//   return (
//     <div>
//       <div className="relative group">
//         <div className="bg-gray-200 flex items-center justify-center hover:opacity-75 transition duration-300">
//           Hover me
//         </div>
//         <div className="hidden absolute bg-blue-500 w-32 h-32 top-8 left-0 p-4 group-hover:block">
//           Content here
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TryHover;

import React, { useState } from "react";

const TryHover = ({ hover, content }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <div
        className="relative group"
        onMouseEnter={() => setShowContent(true)}
        onMouseLeave={() => setShowContent(false)}
      >
        <div className="bg-gray-200 flex items-center justify-center hover:opacity-75 transition duration-300">
          {hover}
        </div>
        <div
          className={`${
            showContent ? "block" : "hidden"
          } absolute bg-blue-500 w-32 h-32 top-8 left-0 p-4`}
          onMouseEnter={() => setShowContent(true)}
          onMouseLeave={() => setShowContent(false)}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default TryHover;
