import { faCalendar, faHeart, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SectionHead from '../ui/SectionHead';

const HowItWorks = () => {
    const steps = [
        {
          icon: <FontAwesomeIcon icon={faMagnifyingGlass} className="text-3xl text-white" />,
          title: "Find the Perfect Match",
          description: "Browse verified pet sitters and dog walkers in your area. Filter by services, ratings, and availability.",
          color: "bg-blue-400"
        },
        {
          icon: <FontAwesomeIcon icon={faCalendar} className="text-3xl text-white" />,
          title: "Book with Confidence",
          description: "Schedule meet & greets, book services, and handle payments securely through our platform.",
          color: "bg-teal-400"
        },
        {
          icon: <FontAwesomeIcon icon={faHeart} className="text-3xl text-white" />,
          title: "Enjoy Peace of Mind",
          description: "Receive updates and photos while your pet enjoys professional care from trusted providers.",
          color: "bg-orange-400"
        },
        {
          icon: <FontAwesomeIcon icon={faStar} className="text-3xl text-white" />,
          title: "Share Your Experience",
          description: "After the service, leave a review to help other pet owners find great care providers.",
          color: "bg-blue-800"
        }
      ];
    return (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHead head="How It Works" desc="Finding and booking pet care has never been easier" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`${step.color} p-5 w-16 h-16 flex justify-center items-center rounded-full mb-6 shadow-lg animate-bounce duration-300`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 font-sans text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                  <div className="mt-4 relative">
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-0 left-full w-full h-0.5 bg-gray-200 translate-y-24 -translate-x-8"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default HowItWorks
