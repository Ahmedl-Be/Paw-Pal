import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import SectionHead from "../ui/SectionHead";
const testimonials = [
  {
    name: "Emily R.",
    feedback:
      "Paw-fect Pal Connect made finding a reliable sitter for my golden retriever effortless. The process was smooth, and I felt at ease knowing my pet was in good hands.",
    rating: 5,
  },
  {
    name: "Michael T.",
    feedback:
      "I appreciate the user-friendly interface and the quality of sitters available. Booking was quick, and the updates during the sitting period were reassuring.",
    rating: 4,
  },
  {
    name: "Samantha K.",
    feedback:
      "A fantastic platform for pet owners! The variety of services and the professionalism of the sitters exceeded my expectations.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-teal-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHead
          head="What Pet Lovers Say"
          desc="Hear from pet owners and service providers who use our platform"
        />
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-teal-500 text-2xl mb-4"
              />
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              <div className="mt-4 flex items-center justify-center">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="text-yellow-400 h-5 w-5 mx-0.5"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-900">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
