import React from 'react';

export default function ExecutiveSummary() {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center px-8 py-16 relative">
      {/* Left blue accent bar */}
      <div className="absolute top-0 left-0 h-full w-2 bg-blue-900" />

      <div className="max-w-3xl mx-auto w-full pl-6">
        {/* Section number + label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-6xl font-extrabold text-blue-100 leading-none select-none">01</span>
          <div>
            <p className="text-yellow-500 uppercase tracking-widest text-xs font-semibold">Annual Report 2025–2026</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Executive Summary</h2>
          </div>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-yellow-400 rounded-full mb-8" />

        {/* Content */}
        <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            The 2025–2026 academic year marked a <strong className="text-blue-900">transformative and impactful period</strong> for the Refugees and Internally Displaced Persons (RDP) community at African Leadership University Rwanda. Throughout the year, the community organized and participated in initiatives centered around leadership development, mental health awareness, storytelling, professional development, refugee advocacy, wellness, outreach, and community empowerment.
          </p>
          <p>
            The RDP community remained committed to creating <strong className="text-blue-900">safe and inclusive spaces</strong> where refugee and displaced students could connect, heal, grow, and thrive. Through strategic collaborations with organizations such as <span className="text-blue-700 font-semibold">Solid Minds</span>, <span className="text-blue-700 font-semibold">UNHCR</span>, the <span className="text-blue-700 font-semibold">Amahoro Coalition</span>, and the <span className="text-blue-700 font-semibold">ALU Wellness Center</span>, students were equipped with opportunities for personal growth, emotional support, professional exposure, and leadership recognition.
          </p>
          <p>
            One of the major highlights of the year was the successful celebration of <strong className="text-blue-900">World Refugee Day 2025</strong> under the theme <em className="text-blue-700">&ldquo;Voices of Resilience: A Healing Dinner Dialogue.&rdquo;</em> The celebration brought together refugee scholars, community leaders, faculty, and partners to celebrate resilience, amplify refugee voices, and promote healing and belonging.
          </p>
          <p>
            The year also reflected <strong className="text-blue-900">increased collaboration</strong>, stronger peer support systems, and a growing commitment to refugee-centered leadership and inclusion at African Leadership University Rwanda.
          </p>
        </div>

        {/* Highlight box */}
        <div className="mt-10 bg-blue-900 text-white rounded-2xl px-8 py-6 flex items-start gap-4 shadow-lg">
          <div className="w-1 h-full bg-yellow-400 rounded-full shrink-0 self-stretch" />
          <p className="text-base md:text-lg italic font-light leading-relaxed">
            &ldquo;Increased collaboration, stronger peer support systems, and a growing commitment to refugee-centered leadership and inclusion.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
