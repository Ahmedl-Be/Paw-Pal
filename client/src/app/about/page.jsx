import Image from "next/image";
import aboutPhoto from '../../../public/images/aboutPhoto.webp';

const About = () => {
  return (
    <section className="bg-pawpal-cream py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pawpal-navy mb-4">About Paw Pal</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're two lifelong friends who love pets and believe every furry friend deserves personalized care, comfort, and joy.
          </p>
        </div>

        {/* Founders & Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-72 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={aboutPhoto}
              alt="Cute pet"
              fill
              className="object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-2xl font-semibold text-pawpal-teal mb-4">Who We Are</h3>
            <p className="text-gray-700 text-base mb-4 leading-relaxed">
              We’re Mohamed Diab and Ahmed Beltagy, two passionate software engineers and pet lovers who founded Paw Pal to bridge the gap between pet owners and high-quality pet care services. With backgrounds in tech and a shared love for animals, we’ve built a platform that’s intuitive, warm, and tailored to pets and their humans alike.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              From scheduling services to finding trusted pet sitters, Paw Pal is your go-to hub for everything your pet needs. Our mission is simple: make pet care easier, friendlier, and filled with love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
