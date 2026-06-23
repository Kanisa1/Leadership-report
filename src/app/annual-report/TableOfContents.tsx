import React from 'react';

const tocItems = [
  "Executive Summary",
  "Impact at a Glance",
  "Introduction",
  "World Refugee Day 2025",
  "Healing Dinner Dialogue",
  "Gala Dinner & Awards Ceremony",
  "Recognition of Refugee Scholars",
  "Community Outreach Initiative – Nyabiheke Refugee Camp",
  "Psychological First Aid (PFA) Training Initiative",
  "Second Psychological First Aid (PFA) Training",
  "Wellness Session for RDP Community",
  "Amahoro Coalition Introduction & Onboarding Session",
  "Amahoro Coalition Skills Hub Information Session",
  "Amahoro Coalition Platform Engagement Survey",
  "Refugee Meetup on Innovation, Technology, Disability & the Refugee Experience",
  "Community Solidarity & Student Support",
  "Strategic Priorities for 2026–2027",
  "Acknowledgements",
  "Conclusion",
  "Appendix",
];

export default function TableOfContents() {
  return (
    <section className="min-h-screen bg-blue-900 text-white flex flex-col justify-center px-8 py-16 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-700 opacity-40" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-yellow-400 opacity-10" />

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-2">Annual Report 2025–2026</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Table of<br />Contents</h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mt-4" />
        </div>

        {/* TOC list */}
        <ol className="space-y-0 divide-y divide-blue-700">
          {tocItems.map((item, index) => (
            <li key={index} className="flex items-center gap-4 py-3 group">
              <span className="text-yellow-400 font-bold text-sm w-7 shrink-0 text-right">{String(index + 1).padStart(2, '0')}</span>
              <span className="text-white text-base font-medium group-hover:text-yellow-300 transition">{item}</span>
              <span className="ml-auto text-blue-500 text-xs hidden md:block">&mdash;&mdash;</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
