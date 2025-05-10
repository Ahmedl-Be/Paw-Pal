import ServiceCard from '@/components/services/ServiceCard';
import React from 'react';
import { services } from '@/data/ServicesData';
import Link from 'next/link';

const ServicesOverview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-100 to-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our Pet Care Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Professional and reliable pet care services tailored to meet your pet's needs and your schedule.
          </p>
          <Link href="/find-sitters" className="inline-block px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md">
            Find a Pet Sitter
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              price={service.price}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready to Book a Service?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our trusted pet sitters and dog walkers are ready to provide the care your pet deserves.
          </p>
          <Link href="/find-sitters" className="inline-block px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md">
            Find Available Pet Care
          </Link>
        </div>
      </section>
    </div>
  );
};



export default ServicesOverview;
