"use client";
import React, { use } from "react";
import { sitters } from "../../../data/SittersData";

import BookingSection from "@/components/services/BookingSection";
import SitterProfile from "@/components/services/SitterProfile";

const Sitter = ({ params }) => {
  const { slug } = use(params);
  const sitter = sitters.find((s) => s.id === Number(slug));

  if (!sitter) {
    return <div>Profile not found</div>;
  }

  return (
    <main className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-0 md:gap-6 ">
        {/* Left: Sitter Details */}
        <SitterProfile sitter={sitter} />

        {/* Right: Booking Section */}
        <BookingSection />
      </div>
    </main>
  );
};

export default Sitter;
