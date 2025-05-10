import Link from "next/link";
import React from "react";
import SectionHead from "../ui/SectionHead";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br bg-[#3aafa9] to-[#116865] text-white text-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find the Perfect Pet Care?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of pet parents who trust Paw Pal Booking Hub for
            reliable, loving pet care services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#3aafa9] hover:bg-gray-100 font-semibold py-3 rounded px-6 transition-all duration-200">
              <Link href="/services">Find a Sitter Now</Link>
            </button>
            <button className="border-white border hover:bg-[#3aafa9] font-semibold rounded tansition-all duration-200 py-3 px-8">
              <Link href="/notfound">Become a Sitter</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
