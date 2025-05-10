import Link from "next/link";
import React from "react";

const ServiceCard = ({ icon, title, price, description, features }) => {
  return (
    <div className="border-2 border-teal-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-teal-500 text-2xl">{icon}</div>
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-teal-600 font-semibold">{price}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 text-gray-700">
        {features.map((feature, idx) => (
          <li key={idx}>• {feature}</li>
        ))}
      </ul>
      <Link
        href="/find-sitters"
        className="mt-4 block text-center bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md"
      >
        Learn More
      </Link>
    </div>
  );
};

export default ServiceCard;
