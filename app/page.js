"use client";
import { useState } from "react";

export default function Home() {
  const [destination, setDestination] = useState("");

  return (
    <main className="bg-gradient-to-b from-sky-100 to-white min-h-screen text-gray-900">
      <section className="h-screen flex flex-col justify-center items-center text-center bg-[url('/plane-bg.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="text-5xl md:text-7xl font-bold text-white relative z-10 fade-in-up">
          Fly Smarter. Fly Skyline.
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white relative z-10 fade-in-up delay-200">
          Book your dream destination in minutes
        </p>
        <div className="mt-8 flex bg-white rounded-full shadow-lg p-2 relative z-10 fade-in-up delay-400">
          <input
            type="text"
            placeholder="Where to?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="px-4 py-2 rounded-full outline-none flex-1"
          />
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full transition">
            Search
          </button>
        </div>
      </section>
    </main>
  );
}
