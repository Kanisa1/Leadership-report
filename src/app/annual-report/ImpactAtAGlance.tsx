import React from 'react';

const stats = [
  { number: "100+", label: "participants attended the World Refugee Day Gala Dinner" },
  { number: "58", label: "students participated in the Amahoro Coalition onboarding session" },
  { number: "30", label: "refugee learners supported during the Nyabiheke outreach initiative" },
  { number: "9", label: "refugee scholars recognized through leadership and resilience awards" },
  { number: "20", label: "students participated in the RDP Wellness Session" },
  { number: "22", label: "survey responses collected for the Amahoro Coalition Platform Engagement Survey" },
  { number: "∞", label: "strategic partnerships strengthened throughout the year" },
  { number: "↑", label: "mental health awareness increased through Psychological First Aid trainings" },
];

export default function ImpactAtAGlance() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center px-8 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-40 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-100 rounded-full opacity-60 translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-7xl font-extrabold text-blue-100 leading-none select-none">02</span>
          <div>
            <p className="text-yellow-500 uppercase tracking-widest text-xs font-semibold">Annual Report 2025–2026</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Impact at a Glance</h2>
          </div>
        </div>
        <div className="w-16 h-1 bg-yellow-400 rounded-full mb-10" />

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition group"
            >
              <span className="text-4xl md:text-5xl font-extrabold text-blue-900 group-hover:text-yellow-500 transition mb-3 leading-none">
                {stat.number}
              </span>
              <div className="w-8 h-0.5 bg-yellow-400 rounded-full mb-3" />
              <p className="text-gray-600 text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 bg-blue-900 text-white rounded-2xl px-8 py-5 flex items-center gap-4 shadow-lg">
          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
            <span className="text-blue-900 font-extrabold text-lg">★</span>
          </div>
          <p className="text-sm md:text-base font-light leading-relaxed">
            A year of <strong className="font-semibold">remarkable impact</strong> — from community outreach and mental health support to leadership recognition and coalition building across the RDP community at ALU Rwanda.
          </p>
        </div>
      </div>
    </section>
  );
}
