import React from 'react';

const objectives = [
  "Introduce students to the Amahoro Skills Hub platform",
  "Guide students on navigating digital opportunity platforms effectively",
  "Increase awareness of internships, fellowships, and training opportunities",
  "Promote career readiness and professional development",
  "Encourage active student engagement with online professional platforms",
  "Strengthen digital literacy and opportunity accessibility among refugee students",
];

const activities = [
  "Introduction to the Amahoro Skills Hub platform",
  "Demonstration of platform features and navigation tools",
  "Guidance on accessing opportunities and submitting applications",
  "Discussions on career readiness and professional growth",
  "Interactive engagement and question-and-answer sessions",
  "Student reflections and participation activities",
];

const highlights = [
  "Interactive platform navigation demonstrations",
  "Career development and opportunity awareness discussions",
  "Increased student understanding of digital opportunity platforms",
  "Active student participation and engagement",
  "Encouraged applications for internships, fellowships, and training programs",
  "Strengthened awareness of professional development pathways for refugee students",
];

const outcomes = [
  "Increased awareness of internships and fellowship opportunities",
  "Improved understanding of digital career platforms",
  "Enhanced student readiness for professional opportunities",
  "Increased confidence in navigating online applications and opportunities",
  "Strengthened digital literacy and career readiness among refugee students",
];

export default function AmahoroSkillsHub() {
  return (
    <section className="bg-blue-900 text-white flex flex-col justify-center px-8 py-16 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-700 opacity-30" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-yellow-400 opacity-10 translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-7xl font-extrabold text-blue-700 leading-none select-none">13</span>
          <div>
            <p className="text-yellow-400 uppercase tracking-widest text-xs font-semibold">Annual Report 2025–2026</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Amahoro Coalition<br />
              <span className="text-yellow-300">Skills Hub Information Session</span>
            </h2>
          </div>
        </div>
        <div className="w-16 h-1 bg-yellow-400 rounded-full mb-10" />

        {/* Intro */}
        <div className="space-y-4 text-blue-100 text-base leading-relaxed mb-10 max-w-3xl">
          <p>
            Following the Introduction &amp; Onboarding Session, the RDP community organized a second engagement session with the <strong className="text-white">Amahoro Coalition</strong> focused specifically on the <span className="text-yellow-300 font-semibold">Skills Hub platform</span> and digital opportunity access.
          </p>
          <p>
            The initiative strengthened <strong className="text-white">digital literacy, career readiness, and student engagement</strong> with professional development opportunities designed to support refugee empowerment and inclusion.
          </p>
        </div>

        {/* Intro image */}
        <div className="mb-8 max-w-5xl">
          <img src="/images/amahoro.jpeg" alt="Amahoro Skills Hub session" className="w-full h-56 object-cover rounded-lg shadow-sm" />
        </div>

        {/* Event details */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Date", value: "27th February 2026" },
            { label: "Time", value: "10:00 AM – 11:30 AM" },
            { label: "Format", value: "Virtual (Zoom)" },
            { label: "Audience", value: "Refugee & Displaced Students" },
          ].map((item) => (
            <div key={item.label} className="bg-blue-800 border border-blue-600 rounded-2xl p-4 text-center">
              <p className="text-yellow-400 text-xs uppercase tracking-widest mb-1 font-semibold">{item.label}</p>
              <p className="text-white font-semibold text-sm leading-snug">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Objectives + Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-blue-800 border border-blue-600 rounded-2xl p-6">
            <p className="text-yellow-400 font-bold mb-4 text-sm uppercase tracking-wide">Session Objectives</p>
            <ul className="space-y-2">
              {objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-blue-100">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-800 border border-blue-600 rounded-2xl p-6">
            <p className="text-yellow-400 font-bold mb-4 text-sm uppercase tracking-wide">Session Activities</p>
            <ul className="space-y-2">
              {activities.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-blue-100">
                  <span className="w-6 h-6 rounded-full bg-yellow-400 text-blue-900 font-extrabold text-xs flex items-center justify-center shrink-0">{i + 1}</span>
                  {a}
                </li>
              ))}
            </ul>
            <p className="text-blue-300 text-xs mt-4 italic">
              Students were guided through practical steps on how to create accounts, explore opportunities, and improve engagement with digital professional platforms.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-white text-blue-900 rounded-2xl p-6 mb-10 shadow-lg">
          <p className="text-blue-900 font-bold mb-4 text-sm uppercase tracking-wide">Key Highlights</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                <span className="text-gray-700 text-sm">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes + Significance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-800 border border-blue-600 rounded-2xl p-6">
            <p className="text-yellow-400 font-bold mb-4 text-sm uppercase tracking-wide">Outcomes &amp; Impact</p>
            <ul className="space-y-2">
              {outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-blue-100">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-800 border border-blue-600 rounded-2xl p-6 flex flex-col justify-between">
            <p className="text-yellow-400 font-bold mb-4 text-sm uppercase tracking-wide">Significance</p>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              The Skills Hub session highlighted the importance of connecting refugee students with accessible professional development resources and digital opportunity ecosystems.
            </p>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              By equipping students with practical skills and guidance on navigating online opportunities, the initiative strengthened <strong className="text-white">inclusion, empowerment, and career preparedness</strong> within the refugee student community.
            </p>
            <p className="text-blue-200 text-sm leading-relaxed">
              The session also reinforced the growing collaboration between the RDP community and the Amahoro Coalition in promoting <strong className="text-white">leadership, employability, and long-term professional growth</strong> for refugee and displaced students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
