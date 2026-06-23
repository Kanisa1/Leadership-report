import React from 'react';

const objectives = [
  "Explore how innovation and technology can empower displaced communities",
  "Promote conversations around disability inclusion and accessibility",
  "Encourage leadership and innovation among refugee students",
  "Expand student exposure to global conversations on refugee empowerment",
  "Strengthen networking opportunities with professionals and organizations",
  "Promote inclusive and accessible opportunities for refugee and displaced persons",
  "Encourage students to think critically about technology-driven social impact solutions",
];

const discussionAreas = [
  {
    title: "Technology & Refugee Empowerment",
    color: "bg-blue-900",
    accent: "text-yellow-400",
    body: "Discussions focused on how digital tools, online platforms, AI, and innovation can help improve access to education, healthcare, professional opportunities, communication, and leadership development for refugee communities. Participants reflected on the growing importance of digital inclusion for displaced populations.",
  },
  {
    title: "Innovation & Social Impact",
    color: "bg-blue-700",
    accent: "text-yellow-300",
    body: "The session highlighted the role of innovation in addressing social challenges affecting displaced communities. Speakers emphasized youth-led innovation, entrepreneurship, and community-driven solutions in creating sustainable impact for refugee populations.",
  },
  {
    title: "Disability Inclusion & Accessibility",
    color: "bg-blue-800",
    accent: "text-yellow-400",
    points: [
      "Accessible digital platforms",
      "Inclusive leadership opportunities",
      "Disability-sensitive innovation",
      "Equal access to education and professional development resources",
      "Building environments where all individuals can participate fully",
    ],
  },
  {
    title: "Leadership & Digital Transformation",
    color: "bg-blue-900",
    accent: "text-yellow-400",
    points: [
      "Build digital skills",
      "Engage in innovation and leadership programs",
      "Explore technology-driven opportunities",
      "Use storytelling and advocacy to amplify refugee voices",
      "Participate actively in professional and innovation ecosystems",
    ],
    note: "Refugee students are not only beneficiaries of innovation — they can become creators, leaders, and changemakers.",
  },
];

const outcomes = [
  "Increased global exposure for refugee students",
  "Strengthened networking opportunities",
  "Encouraged leadership and innovation thinking",
  "Increased awareness of disability inclusion and accessibility",
  "Promoted conversations around digital transformation and social impact",
  "Encouraged students to explore technology-driven opportunities",
  "Strengthened confidence in engaging with innovation ecosystems",
];

export default function RefugeeMeetup() {
  return (
    <section className="bg-blue-900 text-white flex flex-col justify-center px-8 py-16 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-700 opacity-30" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-yellow-400 opacity-10 translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-7xl font-extrabold text-blue-700 leading-none select-none">15</span>
          <div>
            <p className="text-yellow-400 uppercase tracking-widest text-xs font-semibold">Annual Report 2025–2026</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Refugee Meetup on Innovation,<br />
              <span className="text-yellow-300">Technology, Disability &amp; the Refugee Experience</span>
            </h2>
          </div>
        </div>
        <div className="w-16 h-1 bg-yellow-400 rounded-full mb-10" />

        {/* Intro */}
        <div className="space-y-4 text-blue-100 text-base leading-relaxed mb-10 max-w-3xl">
          <p>
            Members of the RDP community participated in a high-impact virtual dialogue session organized by <strong className="text-white">African Careers Network</strong>, creating a platform to engage in conversations around innovation, digital transformation, disability inclusion, and the future of refugee empowerment.
          </p>
          <p>
            The session emphasized how <span className="text-yellow-300 font-semibold">technology can serve as a powerful tool</span> for empowerment, accessibility, leadership development, education, and social transformation for displaced communities.
          </p>
        </div>

        {/* Event detail cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Date", value: "19th November 2025" },
            { label: "Time", value: "4:00 PM" },
            { label: "Format", value: "Virtual (Zoom)" },
            { label: "Organised by", value: "African Careers Network" },
          ].map((item) => (
            <div key={item.label} className="bg-blue-800 border border-blue-600 rounded-2xl p-4 text-center">
              <p className="text-yellow-400 text-xs uppercase tracking-widest mb-1 font-semibold">{item.label}</p>
              <p className="text-white font-semibold text-sm leading-snug">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Objectives */}
        <div className="bg-white text-blue-900 rounded-2xl p-6 mb-10 shadow-lg">
          <p className="text-blue-900 font-bold mb-4 text-sm uppercase tracking-wide">Session Objectives</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-900 text-yellow-400 font-extrabold text-xs flex items-center justify-center shrink-0">{i + 1}</span>
                <span className="text-gray-700 text-sm">{obj}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Discussion Areas */}
        <p className="text-yellow-400 font-bold mb-5 text-sm uppercase tracking-wide">Key Discussion Areas</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {discussionAreas.map((area, i) => (
            <div key={i} className={`${area.color} border border-blue-600 rounded-2xl p-6`}>
              <p className={`${area.accent} font-bold mb-3 text-sm uppercase tracking-wide`}>{area.title}</p>
              {area.body && <p className="text-blue-100 text-sm leading-relaxed">{area.body}</p>}
              {area.points && (
                <ul className="space-y-2 mt-1">
                  {area.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-blue-100">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
              {area.note && (
                <p className="mt-3 text-yellow-200 text-xs italic border-t border-blue-600 pt-3">{area.note}</p>
              )}
            </div>
          ))}
        </div>

        {/* Student Engagement */}
        <div className="bg-blue-800 border border-blue-600 rounded-2xl p-6 mb-10">
          <p className="text-yellow-400 font-bold mb-4 text-sm uppercase tracking-wide">Student Engagement &amp; Participation</p>
          <div className="flex flex-wrap gap-3 mb-4">
            {["Interactive Discussions", "Reflection Activities", "Q&A Engagement", "Networking Opportunities", "Shared Experiences"].map((tag) => (
              <span key={tag} className="bg-blue-900 border border-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">{tag}</span>
            ))}
          </div>
          <p className="text-blue-100 text-sm leading-relaxed">
            Students engaged in conversations around their lived experiences, barriers to accessibility, digital opportunities, and the future of refugee inclusion within innovation ecosystems — creating a safe and inclusive space for learning, reflection, and professional exposure.
          </p>
        </div>

        {/* Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white text-blue-900 rounded-2xl p-6 shadow-lg">
            <p className="text-blue-900 font-bold mb-4 text-sm uppercase tracking-wide">Outcomes &amp; Impact</p>
            <ul className="space-y-2">
              {outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-800 border border-blue-600 rounded-2xl p-6 flex flex-col justify-between">
            <p className="text-yellow-400 font-bold mb-4 text-sm uppercase tracking-wide">Significance</p>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              The Refugee Meetup represented an important opportunity for refugee students to participate in broader global conversations around <strong className="text-white">innovation, accessibility, and leadership</strong>.
            </p>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              The session highlighted the importance of ensuring refugee and displaced communities are included in discussions around technology, innovation, and digital transformation.
            </p>
            <div className="bg-blue-900 rounded-xl px-4 py-4 border border-blue-600">
              <p className="text-yellow-300 text-sm italic font-medium leading-relaxed">
                &ldquo;Refugee students possess the creativity, leadership potential, and lived experiences necessary to contribute meaningfully to innovation and social impact spaces.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
