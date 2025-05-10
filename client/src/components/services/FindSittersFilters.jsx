import React from "react";

const FindSittersFilters = () => {
  const selectClass = "p-2 border border-gray-300 focus:border-[#3aafa9] rounded-md";
  return (
    <div className="flex flex-wrap gap-4 items-center mb-8">
      <select className={selectClass}>
        <option>All Services</option>
      </select>
      <select className={selectClass}>
        <option>All Locations</option>
      </select>
      <select className={selectClass}>
        <option>Available Now</option>
      </select>
      <button className="bg-teal-500 md:ml-auto hover:bg-teal-600 text-white px-4 py-2 rounded-md">
        Apply Filters
      </button>
    </div>
  );
};

export default FindSittersFilters;
