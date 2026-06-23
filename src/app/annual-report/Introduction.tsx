import React from 'react';
import Image from 'next/image';

const values = ["Resilience", "Empathy", "Belonging", "Collaboration", "Ubuntu"];

export default function Introduction() {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center px-8 py-16 relative overflow-hidden">
      {/* Blue left accent */}
      <div className="absolute top-0 left-0 h-full w-2 bg-blue-900" />

      <div className="relative z-10 max-w-5xl mx-auto w-full pl-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-7xl font-extrabold text-blue-100 leading-none select-none">03</span>
          <div>
            <p className="text-yellow-500 uppercase tracking-widest text-xs font-semibold">Annual Report 2025–2026</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Introduction</h2>
          </div>
        </div>
        <div className="w-16 h-1 bg-yellow-400 rounded-full mb-10" />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text column */}
          <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              The <strong className="text-blue-900">Refugees and Internally Displaced Persons (RDP) community</strong> at African Leadership University Rwanda exists to create a supportive, inclusive, and empowering environment for refugee and displaced students.
            </p>
            <p>
              Throughout the 2025–2026 academic year, the RDP community focused on strengthening <span className="text-blue-700 font-semibold">wellness initiatives, leadership development, storytelling platforms, career readiness, peer support systems,</span> and community outreach programs.
            </p>
            <p>
              The community continued to advocate for refugee inclusion while creating meaningful opportunities for students to engage in leadership, healing, mentorship, and social impact initiatives.
            </p>
            <p>
              The activities conducted during the year reflected the community&apos;s core values:
            </p>

            {/* Values pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {values.map((value) => (
                <span
                  key={value}
                  className="bg-blue-900 text-white text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/dial.jpg"
              alt="RDP Community Dialogue"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent px-5 py-4">
              <p className="text-white text-sm font-medium">RDP Community — ALU Rwanda, 2025–2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
