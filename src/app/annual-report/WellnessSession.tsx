import React from 'react';

const objectives = [
  "Create a safe and supportive space for refugee students",
  "Encourage open dialogue around mental health and emotional well-being",
  "Promote self-care and stress management strategies",
  "Strengthen peer support systems within the RDP community",
  "Encourage reflection, healing, and emotional resilience",
  "Increase awareness of available wellness support systems",
];

const highlights = [
  "Interactive wellness and reflection discussions",
  "Guided conversations on emotional well-being and self-care",
  "Safe space for sharing experiences and personal reflections",
  "Increased student engagement and peer connection",
  "Collaboration between the RDP community, Wellness Center, and UNHCR representatives",
];

const outcomes = [
  "Increased awareness around mental health and emotional well-being",
  "Encouraged open conversations around stress, healing, and self-care",
  "Strengthened peer support and community connection",
  "Promoted emotional resilience among refugee students",
  "Reinforced collaboration between the RDP community and wellness-focused partners",
];

const acknowledgements = [
  "ALU Wellness Center",
  "Jennifer Kyalo",
  "Belyse Mukayiranga",
  "Dr. Alphonse Nkurunziza",
  "Mastercard Foundation Financial Aid Team",
  "Kevin Muchemiz",
  "Benjamin Abujuru",
  "Emmanuel Rwagasore",
  "Community Partners",
  "UNHCR Representative – Mediatrice",
];

export default function WellnessSession() {
  return (
    <section className="bg-white flex flex-col justify-center px-8 py-16 relative">
      <div className="absolute top-0 left-0 h-full w-2 bg-blue-900" />

      <div className="relative z-10 max-w-5xl mx-auto w-full pl-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-7xl font-extrabold text-blue-100 leading-none select-none">11</span>
          <div>
            <p className="text-yellow-500 uppercase tracking-widest text-xs font-semibold">Annual Report 2025–2026</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Wellness Session for RDP Community</h2>
          </div>
        </div>
        <div className="w-16 h-1 bg-yellow-400 rounded-full mb-10" />

        {/* Intro */}
        <div className="space-y-4 text-gray-700 text-base leading-relaxed mb-10 max-w-3xl">
          <p>
            The RDP Wellness Session was organized as part of the community&apos;s continued commitment to promoting <strong className="text-blue-900">mental health awareness, emotional well-being, peer support, and safe spaces</strong> for refugee and displaced students at African Leadership University Rwanda.
          </p>
          <p>
            The session provided students with a supportive environment to reflect, connect, and engage in conversations around emotional wellness, stress management, self-care, healing, and resilience.
          </p>
          <p>
            The session was organized in collaboration with the <span className="text-blue-700 font-semibold">ALU Wellness Center</span> and featured participation from wellness professionals and a <span className="text-blue-700 font-semibold">UNHCR representative</span>.
          </p>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-5xl">
          <img src="/images/wellness1.png" alt="Wellness 1" className="w-full h-40 object-cover rounded-lg shadow-sm" />
          <img src="/images/wellness.png" alt="Wellness main" className="w-full h-40 object-cover rounded-lg shadow-sm" />
          <img src="/images/wellness%202.png" alt="Wellness 2" className="w-full h-40 object-cover rounded-lg shadow-sm" />
          <img src="/images/wellness%203.png" alt="Wellness 3" className="w-full h-40 object-cover rounded-lg shadow-sm" />
        </div>

        {/* Event details + Facilitation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Event details */}
          <div className="bg-blue-900 text-white rounded-2xl p-6 shadow-lg">
            <p className="text-yellow-400 font-bold mb-5 text-sm uppercase tracking-wide">Event Details</p>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Date", value: "Thursday, 12th March 2026" },
                { label: "Time", value: "2:30 PM (Kigali Time)" },
                { label: "Duration", value: "1 Hour" },
                { label: "Location", value: "Learning Commons – Malawi" },
                { label: "Attendance", value: "20 students" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="text-yellow-400 font-semibold w-20 shrink-0">{item.label}</span>
                  <span className="text-blue-100">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilitation */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <p className="text-blue-900 font-bold mb-5 text-sm uppercase tracking-wide">Session Facilitation &amp; Guest Participation</p>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                <p>Facilitated by <strong className="text-blue-900">Kanisa Rebecca Majok Thiak</strong> in collaboration with the ALU Wellness Center.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                <p>Wellness discussions and guided reflective activities led by <strong className="text-blue-900">Jennifer Kyalo</strong> from the Wellness Center.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                <p>Enriched by the participation of <strong className="text-blue-900">Mediatrice from UNHCR</strong>, who contributed insights on refugee well-being, emotional support, and community care.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Objectives + Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <p className="text-blue-900 font-bold mb-4 text-sm uppercase tracking-wide">Session Objectives</p>
            <ul className="space-y-2">
              {objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <p className="text-blue-900 font-bold mb-4 text-sm uppercase tracking-wide">Key Highlights</p>
            <ul className="space-y-2">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-900 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Outcomes */}
        <div className="bg-blue-900 text-white rounded-2xl p-6 mb-10 shadow-lg">
          <p className="text-yellow-400 font-bold mb-4 text-sm uppercase tracking-wide">Outcomes &amp; Impact</p>
          <p className="text-blue-200 text-sm mb-4 leading-relaxed">
            The session contributed significantly to strengthening emotional wellness and community support within the RDP community. The smaller and more intimate nature of the session allowed participants to engage deeply and meaningfully, creating a stronger sense of <strong className="text-white">belonging, empathy, and support</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                <span className="text-blue-100 text-sm">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Acknowledgements */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
          <p className="text-blue-900 font-bold mb-2 text-sm uppercase tracking-wide">Acknowledgements</p>
          <p className="text-gray-500 text-sm mb-5">
            The RDP community extends sincere appreciation to all facilitators, partners, and participants who contributed to creating a safe and meaningful wellness experience.
          </p>
          <div className="flex flex-col gap-4">
            {/* ALU Wellness Center group */}
            <div>
              <span className="text-blue-700 font-bold text-sm uppercase tracking-wide block mb-2">ALU Wellness Center</span>
              <div className="flex flex-wrap gap-2">
                {["Jennifer Kyalo", "Belyse Mukayiranga", "Dr. Alphonse Nkurunziza"].map((name) => (
                  <span key={name} className="bg-blue-900 text-white text-xs font-medium px-3 py-1.5 rounded-full">{name}</span>
                ))}
              </div>
            </div>
            {/* Mastercard Foundation group */}
            <div>
              <span className="text-blue-700 font-bold text-sm uppercase tracking-wide block mb-2">Mastercard Foundation Financial Aid Team</span>
              <div className="flex flex-wrap gap-2">
                {["Kevin Muchemiz", "Benjamin Abujuru", "Emmanuel Rwagasore"].map((name) => (
                  <span key={name} className="bg-blue-900 text-white text-xs font-medium px-3 py-1.5 rounded-full">{name}</span>
                ))}
              </div>
            </div>
            {/* Others */}
            <div>
              <span className="text-blue-700 font-bold text-sm uppercase tracking-wide block mb-2">Community Partners / UNHCR Representative</span>
              <div className="flex flex-wrap gap-2">
                {["UNHCR Representative – Mediatrice Uwera"].map((name) => (
                  <span key={name} className="bg-blue-900 text-white text-xs font-medium px-3 py-1.5 rounded-full">{name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
