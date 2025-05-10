import React from "react";
import { sitters } from "../../data/SittersData";
import Link from "next/link";

const FindSittersCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {sitters?.map((sitter, idx) => (
        <div
          key={idx}
          className={`bg-white rounded-lg shadow-md overflow-hidden relative flex flex-col ${
            !sitter.available ? "opacity-50" : ""
          }`}
        >
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: `url(${sitter.image}
                )`,
            }}
          >
            {!sitter.available && (
              <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-md">
                Currently Booked
              </div>
            )}
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h2 className="text-lg font-bold text-gray-800">{sitter.name}</h2>
            <div className="flex flex-wrap gap-2 my-2">
              {sitter.services.map((service, i) => (
                <span
                  key={i}
                  className="bg-teal-100 text-teal-700 text-xs font-medium px-2 py-1 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600">{sitter.location}</p>
            <p className="text-sm text-gray-700 mt-2">{sitter.description}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-yellow-500 font-semibold">
                ⭐️ {sitter.rating}{" "}
                <span className="text-gray-500">({sitter.reviews})</span>
              </div>
              <div className="font-bold text-gray-800">{sitter.rate}</div>
            </div>
            <div className="mt-auto pt-4">
              <Link href={`/find-sitters/${sitter.id}`}>
                <button
                  disabled={!sitter.available}
                  className={`w-full px-4 py-2 rounded-md font-medium ${
                    sitter.available
                      ? "bg-teal-500 hover:bg-teal-600 text-white"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {sitter.available ? "View Profile" : "Currently Unavailable"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FindSittersCard;