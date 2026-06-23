import React from 'react';

const focusAreas = [
  "Emotional support",
  "Peer care",
  "Mental health awareness",
  "Crisis response",
  "Active listening",
];

const outcomes = [
  "Increased mental health awareness",
  "Strengthened peer support systems",
  "Improved emotional support skills among students",
  "Promoted empathy and emotional well-being",
];

export default function PFATraining() {
  return (
    <section className="min-h-screen bg-blue-900 text-white flex flex-col justify-center px-8 py-16 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-700 opacity-30" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-yellow-400 opacity-10 translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-7xl font-extrabold text-blue-700 leading-none select-none">09</span>
          <div>
            <p className="text-yellow-400 uppercase tracking-widest text-xs font-semibold">Annual Report 2025–2026</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Psychological First Aid<br />
              <span className="text-yellow-300">(PFA) Training Initiative</span>
            </h2>
          </div>
        </div>
        <div className="w-16 h-1 bg-yellow-400 rounded-full mb-10" />

        {/* Training details banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-blue-800 border border-blue-600 rounded-2xl p-5 text-center">
            <p className="text-yellow-400 text-xs uppercase tracking-widest mb-1 font-semibold">Training Dates</p>
            <p className="text-white font-bold text-lg">6th – 8th August 2025</p>
          </div>
          <div className="bg-blue-800 border border-blue-600 rounded-2xl p-5 text-center">
            <p className="text-yellow-400 text-xs uppercase tracking-widest mb-1 font-semibold">Participants</p>
            <p className="text-5xl font-extrabold text-white leading-none">9</p>
            <p className="text-blue-300 text-sm mt-1">students</p>
          </div>
          <div className="bg-blue-800 border border-blue-600 rounded-2xl p-5 text-center">
            <p className="text-yellow-400 text-xs uppercase tracking-widest mb-1 font-semibold">In Collaboration With</p>
            <p className="text-white font-bold text-lg">Solid Minds</p>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 text-blue-100 text-base leading-relaxed">
            <p>
              The Psychological First Aid (PFA) Training initiative aimed to equip students with practical skills in <strong className="text-white">emotional support, peer care, mental health awareness, and crisis response</strong>.
            </p>
            <p>
              The training empowered students to better support peers experiencing emotional distress while strengthening a culture of <span className="text-yellow-300 font-semibold">empathy, emotional safety, and care</span> within the refugee student community.
            </p>
            <p>
              The initiative was conducted in collaboration with <strong className="text-white">Solid Minds</strong> and student support organizations.
            </p>
          </div>

          {/* Focus areas */}
          <div className="bg-blue-800 border border-blue-600 rounded-2xl p-6">
            <p className="text-yellow-400 font-bold mb-4 text-sm uppercase tracking-wide">Focus Areas</p>
            <ul className="space-y-3">
              {focusAreas.map((area, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-yellow-400 text-blue-900 font-extrabold text-xs flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-blue-100 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Outcomes */}
        <div className="bg-white text-blue-900 rounded-2xl p-6 shadow-lg">
          <p className="text-blue-900 font-bold mb-4 text-sm uppercase tracking-wide">Outcomes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                <span className="text-gray-700 text-sm">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
