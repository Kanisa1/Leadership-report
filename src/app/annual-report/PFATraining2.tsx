import React from 'react';

const focusAreas = [
  "Emotional resilience",
  "Peer support systems",
  "Crisis response awareness",
  "Community care and empathy",
  "Mental health advocacy",
];

export default function PFATraining2() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center px-8 py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-40 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-100 rounded-full opacity-60 translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-7xl font-extrabold text-blue-100 leading-none select-none">10</span>
          <div>
            <p className="text-yellow-500 uppercase tracking-widest text-xs font-semibold">Annual Report 2025–2026</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-tight">
              Second Psychological First Aid<br />
              <span className="text-blue-600">(PFA) Training</span>
            </h2>
          </div>
        </div>
        <div className="w-16 h-1 bg-yellow-400 rounded-full mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Text */}
          <div className="space-y-5 text-gray-700 text-base leading-relaxed">
            <p>
              Following the success of the initial Psychological First Aid training, a <strong className="text-blue-900">second training session</strong> was organized to accommodate students who were unable to attend the first session.
            </p>
            <p>
              The second training reinforced the RDP community&apos;s commitment to <span className="text-blue-700 font-semibold">mental health awareness, peer support, and emotional well-being</span>.
            </p>
            <p>
              Students were encouraged to participate in order to continue strengthening wellness and emotional support systems within the community.
            </p>
            <p>
              The training contributed to building a <strong className="text-blue-900">stronger and more supportive</strong> refugee student community.
            </p>

            {/* Continuity note */}
            <div className="bg-blue-900 text-white rounded-2xl px-6 py-5 flex items-start gap-4 mt-2">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                <span className="text-blue-900 font-extrabold text-base">2</span>
              </div>
              <p className="text-sm text-blue-100 leading-relaxed">
                This was the <strong className="text-white">second in a series</strong> of PFA trainings, reflecting the community&apos;s ongoing investment in student mental health and peer care capacity.
              </p>
            </div>
          </div>

          {/* Focus areas */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <p className="text-blue-900 font-bold mb-6 text-sm uppercase tracking-wide">Key Focus Areas</p>
            <ul className="space-y-4">
              {focusAreas.map((area, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-blue-900 text-yellow-400 font-extrabold text-sm flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-gray-800 font-semibold text-sm">{area}</p>
                    <div className="h-0.5 w-full bg-blue-50 mt-1 rounded-full" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
