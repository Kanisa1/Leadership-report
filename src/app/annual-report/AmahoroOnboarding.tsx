import React from 'react';

const objectives = [
  "Introduce students to the Amahoro Coalition platform",
  "Increase awareness of internships, fellowships, and employment opportunities",
  "Promote professional development and career readiness among refugee students",
  "Strengthen refugee student access to networking opportunities",
  "Encourage active student participation in digital opportunity platforms",
  "Create pathways for leadership, mentorship, and professional growth",
];

const activities = [
  "Introduction to the Amahoro Coalition and its mission",
  "Demonstration of the Amahoro platform and available opportunities",
  "Career readiness and professional development discussions",
  "Interactive question-and-answer engagement with students",
  "Networking and student engagement activities",
  "Post-session interviews and reflections with selected students",
];

const highlights = [
  "Strong student participation and engagement",
  "Interactive discussions between facilitators and students",
  "Increased awareness of global opportunities for refugee students",
  "Student networking and career conversations",
  "Strengthened collaboration between ALU and the Amahoro Coalition",
  "Increased visibility of refugee student professional development needs",
];

const outcomes = [
  "Internship opportunities",
  "Fellowship programs",
  "Professional networking platforms",
  "Career readiness resources",
  "Leadership and personal development pathways",
  "Digital opportunity access and engagement",
];

const significance = [
  "Increased student confidence in pursuing opportunities",
  "Expanded access to career and leadership pathways",
  "Greater awareness of refugee-focused professional platforms",
  "Strengthened community engagement and empowerment",
];

export default function AmahoroOnboarding() {
  return (
    <section className="bg-gray-50 flex flex-col justify-center px-8 py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-yellow-100 rounded-full opacity-40 translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-7xl font-extrabold text-blue-100 leading-none select-none">12</span>
          <div>
            <p className="text-yellow-500 uppercase tracking-widest text-xs font-semibold">Annual Report 2025–2026</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-tight">
              Amahoro Coalition<br />
              <span className="text-blue-600">Introduction &amp; Onboarding Session</span>
            </h2>
          </div>
        </div>
        <div className="w-16 h-1 bg-yellow-400 rounded-full mb-10" />

        {/* Intro */}
        <div className="space-y-4 text-gray-700 text-base leading-relaxed mb-10 max-w-3xl">
          <p>
            The RDP community organized an Introduction &amp; Onboarding Session in partnership with the <strong className="text-blue-900">Amahoro Coalition</strong> to connect refugee and displaced students with professional development opportunities, internships, fellowships, networking platforms, and career readiness resources.
          </p>
          <p>
            The session was conducted in a <span className="text-blue-700 font-semibold">hybrid format</span> to maximize accessibility and participation for students both on campus and online.
          </p>
        </div>

        {/* Event details + Attendance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Event details */}
          <div className="bg-blue-900 text-white rounded-2xl p-6 shadow-lg">
            <p className="text-yellow-400 font-bold mb-5 text-sm uppercase tracking-wide">Event Details</p>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Date", value: "Friday, 25th October 2025" },
                { label: "Time", value: "10:00 AM" },
                { label: "Location", value: "ALU Campus – Kenya/Burundi Classroom" },
                { label: "Format", value: "Hybrid (Physical & Zoom)" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="text-yellow-400 font-semibold w-20 shrink-0">{item.label}</span>
                  <span className="text-blue-100">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Attendance breakdown */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col justify-center">
            <p className="text-blue-900 font-bold mb-5 text-sm uppercase tracking-wide">Attendance</p>
            <div className="flex items-end gap-4 mb-4">
              <div className="text-center flex-1">
                <p className="text-5xl font-extrabold text-blue-900">58</p>
                <p className="text-gray-500 text-xs mt-1">Total Students</p>
              </div>
              <div className="text-center flex-1 border-l border-gray-100 pl-4">
                <p className="text-3xl font-extrabold text-blue-700">31</p>
                <p className="text-gray-500 text-xs mt-1">Attended Physically</p>
              </div>
              <div className="text-center flex-1 border-l border-gray-100 pl-4">
                <p className="text-3xl font-extrabold text-blue-500">27</p>
                <p className="text-gray-500 text-xs mt-1">Attended Virtually</p>
              </div>
            </div>
            {/* Visual bar */}
            <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-blue-900 to-blue-400" style={{ width: '100%' }} />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>Physical 53%</span>
              <span>Virtual 47%</span>
            </div>
          </div>
        </div>

        {/* Facilitation */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
          <p className="text-blue-900 font-bold mb-4 text-sm uppercase tracking-wide">Session Facilitation &amp; Coordination</p>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
              <p>Facilitated by <strong className="text-blue-900">Julius Muriuki</strong>, Strategy Developer for Client Sourcing and Engagement at the Amahoro Coalition, together with members of the Amahoro Coalition team.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
              <p>Logistical and coordination support from <strong className="text-blue-900">Hellen Konyango</strong> and <strong className="text-blue-900">Emmanuel Ekosse</strong>.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
              <p>Student mobilization, facilitation support, and engagement coordination led by <strong className="text-blue-900">Kanisa Rebecca Majok Thiak</strong> as the RDP Community Lead.</p>
            </div>
          </div>
        </div>

        {/* Objectives + Activities */}
        {/* Intro image */}
        <div className="mb-8 max-w-5xl">
          <img src="/images/image.png" alt="Amahoro onboarding" className="w-full h-56 object-cover rounded-lg shadow-sm" />
        </div>
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
            <p className="text-blue-900 font-bold mb-4 text-sm uppercase tracking-wide">Key Session Activities</p>
            <ul className="space-y-2">
              {activities.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-900 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-blue-900 text-white rounded-2xl p-6 mb-10 shadow-lg">
          <p className="text-yellow-400 font-bold mb-4 text-sm uppercase tracking-wide">Key Highlights</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                <span className="text-blue-100 text-sm">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes + Significance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <p className="text-blue-900 font-bold mb-3 text-sm uppercase tracking-wide">Outcomes &amp; Impact</p>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">Students gained exposure to:</p>
            <ul className="space-y-2">
              {outcomes.map((o, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-blue-900 text-yellow-400 font-bold text-xs flex items-center justify-center shrink-0">{i + 1}</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <p className="text-blue-900 font-bold mb-3 text-sm uppercase tracking-wide">Significance of the Initiative</p>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              The session represented an important step toward bridging the gap between refugee students and professional development ecosystems, contributing to:
            </p>
            <ul className="space-y-2">
              {significance.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
