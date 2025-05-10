import React from "react";

const SectionHead = ({ head, desc }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-sans text-gray-900 ">{head}</h2>
      <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">{desc}</p>
    </div>
  );
};

export default SectionHead;
