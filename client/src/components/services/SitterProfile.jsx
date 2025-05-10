import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faLocationDot,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const SitterProfile = ({sitter}) => {
  return (
    <div className="col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={sitter.image}
              alt={sitter.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {sitter.name}
              </h2>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                {" "}
                <FontAwesomeIcon
                  className="text-red-600 text-lg"
                  icon={faLocationDot}
                />{" "}
                {sitter.location}
              </p>
              <div className="mt-1">
                <FontAwesomeIcon className="text-yellow-500" icon={faStar} />{" "}
                {sitter.rating}{" "}
              </div>
            </div>
          </div>

          {/* About Section */}

          <>
            <h3 className="font-semibold mb-2">About</h3>
            <p className="mb-6">{sitter.about}</p>

            <h3 className="font-semibold mb-2">Experience</h3>
            <p className="mb-6">{sitter.experience}</p>

            <h3 className="font-semibold mb-2">Skills & Qualifications</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {sitter.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-teal-100 text-teal-700 px-3 py-1 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="font-semibold mb-2">Availability</h3>
            <div className="grid grid-cols-7 text-center">
              {sitter.availableTimes.map((available, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="mb-3">{available.day}</span>
                  <span
                    className={
                      !available.free
                        ? "text-red-500 bg-red-100 p-1 rounded-full w-8 h-8 flex items-center justify-center"
                        : "text-green-500 bg-green-100 p-1 rounded-full w-8 h-8 flex items-center justify-center"
                    }
                  >
                    {!available.free ? (
                      <FontAwesomeIcon className="text-lg" icon={faXmark} />
                    ) : (
                      <FontAwesomeIcon className="text-lg" icon={faCheck} />
                    )}
                  </span>
                </div>
              ))}
            </div>
          </>
        </div>
  )
}

export default SitterProfile;
