import Link from "next/link";
import React from "react";
import Image from "next/image";
import HeroPhoto from "../../../public/images/hero.png";
import SitterOne from "../../../public/images/sitter1.jpg";
import SitterTwo from "../../../public/images/sitter2.jpg";
import SitterThree from "../../../public/images/sitter3.jpg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br bg-blue-100 to-blue-50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Pet's Perfect{" "}
              <span className="primary-color">Care Match</span> is Just a Click
              Away
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find trusted pet sitters and dog walkers in your neighborhood.
              Book, pay, and manage pet care—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                size="lg"
                className="bg-[#3aafa9] hover:bg-[#528885] text-white font-semibold py-3 px-7 rounded-lg transition duration-300"
              >
                <Link href="/services">Find a Sitter</Link>
              </button>
              <button
                size="lg"
                variant="outline"
                className="border border-yellow-500 text-yellow-500 hover:bg-yellow-600 hover:text-white font-semibold py-3 px-7 rounded-lg transition duration-300"
              >
                <Link href="/become-sitter">Become a Sitter</Link>
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <Image
                  src={SitterOne}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt="User"
                />
                <Image
                  src={SitterTwo}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt="User"
                />
                <Image
                  src={SitterThree}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt="User"
                />
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">sitters</span> in your area
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-500 rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-800 rounded-full opacity-40"></div>
            <div className="relative bg-white p-4 rounded-2xl shadow-xl">
              <Image
                src={HeroPhoto}
                width={500}
                alt="Happy dog with sitter"
                className="rounded-xl w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
