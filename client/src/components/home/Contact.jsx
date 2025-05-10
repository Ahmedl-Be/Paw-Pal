import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import contactPhoto from "../../../public/images/contactPhoto.jpg";
import SectionHead from "../ui/SectionHead";

const Contact = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">                                                                                                            

        <SectionHead
          head="Get in Touch"
          desc="Have questions about our pet care services? We're here to help and
            would love to hear from you."
        />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Message Form */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Send us a Message
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Share your thoughts with us
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#3aafa9]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#3aafa9]"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#3aafa9]"
                />
                <textarea
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 h-32 border border-gray-200 rounded-md resize-none focus:outline-none focus:border-[#3aafa9]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-[#3aafa9] hover:bg-[#528885] cursor-pointer text-white font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                width={500}
                src={contactPhoto}
                alt="Cute pet"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="p-6 space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Contact Information
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Get in touch with our team
              </p>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-[#3aafa91a] rounded-lg group-hover:bg-[#3aafa92a] transition-colors">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-[#3aafa9] w-5 h-5"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Email</p>
                  <a
                    href="mailto:info@pawpal.com"
                    className="text-gray-600 hover:text-[#3aafa9] transition-colors"
                  >
                    info@pawpal.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-[#3aafa91a] rounded-lg group-hover:bg-[#3aafa92a] transition-colors">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-[#3aafa9] w-5 h-5"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 hover:text-[#3aafa9] transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-[#3aafa91a] rounded-lg group-hover:bg-[#3aafa92a] transition-colors">
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="text-[#3aafa9] w-5 h-5"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Customer Support</p>
                  <p className="text-gray-600">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
