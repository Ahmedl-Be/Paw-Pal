import FindSittersCard from "@/components/services/FindSittersCard";
import FindSittersFilters from "@/components/services/FindSittersFilters";
import Head from "next/head";

export default function FindSitter() {
  return (
    <>
      <Head>
        <title>Find a Pet Sitter | PawPal</title>
      </Head>
      <main className="bg-teal-50 min-h-screen py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Find Your Perfect Pet Sitter
          </h1>
          <p className="text-gray-600 mb-6">
            Browse our trusted network of experienced pet sitters and dog
            walkers in your area.
          </p>

          {/* Filters */}
          <FindSittersFilters />

          {/* Sitter Cards */}
          <FindSittersCard />
        </div>
      </main>
    </>
  );
}
