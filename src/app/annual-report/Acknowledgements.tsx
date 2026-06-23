import React from 'react';

const groups = [
  {
    title: 'ALU Wellness Center',
    color: 'bg-blue-900',
    accent: 'text-yellow-400',
    people: [
      { name: 'Jennifer Kyalo', role: 'Wellness Center Representative & Co-facilitator, Wellness Session' },
      { name: 'Belyse Mukayiranga', role: 'Wellness Center Support' },
      { name: 'Dr. Alphonse Nkurunziza', role: 'Wellness Center Support' },
    ],
  },
  {
    title: 'Mastercard Foundation Financial Aid Team',
    color: 'bg-yellow-400',
    accent: 'text-blue-900',
    people: [
      { name: 'Kevin Muchemiz', role: 'Financial Aid Team' },
      { name: 'Benjamin Abujuru', role: 'Financial Aid Team' },
      { name: 'Emmanuel Rwagasore', role: 'Financial Aid Team' },
    ],
  },
  {
    title: 'Amahoro Coalition Team',
    color: 'bg-blue-900',
    accent: 'text-yellow-400',
    people: [
      { name: 'Julius Muriuki', role: 'Lead Facilitator, Amahoro Coalition Onboarding Session' },
      { name: 'Hellen Konyango', role: 'Session Coordination, Amahoro Coalition' },
      { name: 'Emmanuel Ekosse', role: 'Session Coordination, Amahoro Coalition' },
    ],
  },
  {
    title: 'Community Partners',
    color: 'bg-yellow-400',
    accent: 'text-blue-900',
    people: [
      { name: 'Mediatrice Uwera', role: 'UNHCR Representative & Co-facilitator, Wellness Session' },
      { name: 'Solid Minds', role: 'PFA Training Partner & World Refugee Day Give Back Collaboration' },
      { name: 'African Careers Network', role: 'Organizer, Refugee Meetup on Innovation, Technology & Disability' },
    ],
  },
];

const institutions = [
  {
    name: 'African Leadership University Rwanda',
    note: 'For providing institutional support, spaces, and resources that enabled the RDP community to organize, grow, and serve its members throughout the academic year.',
  },
  {
    name: 'Mastercard Foundation Scholars Program',
    note: 'For the scholarship and support framework that makes higher education accessible to refugee and displaced students, and for ongoing financial aid support to the RDP community.',
  },
  {
    name: 'UNHCR Rwanda',
    note: 'For continued partnership, advocacy, and engagement with the refugee and displaced student community at ALU Rwanda.',
  },
  {
    name: 'University of Rwanda',
    note: 'For collaboration during the World Refugee Day Give Back initiative at Nyabiheke Camp, exemplifying cross-institutional solidarity.',
  },
];

const Acknowledgements = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-20 px-8 md:px-20 relative overflow-hidden">
      {/* Section number watermark */}
      <div className="absolute top-12 right-16 text-9xl font-black text-gray-200 select-none leading-none">
        18
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section header */}
        <div className="mb-14">
          <p className="text-yellow-500 font-bold text-sm tracking-widest uppercase mb-2">
            Section 18
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight mb-4">
            Acknowledgements
          </h2>
          <div className="h-1 w-24 bg-yellow-400 mb-6" />
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            This report and the work it reflects would not have been possible without the dedication,
            generosity, and partnership of many individuals and organisations. We extend our heartfelt
            gratitude to all who contributed to the success of the Refugees &amp; IDPs community at
            ALU Rwanda during the 2025–2026 academic year.
          </p>
        </div>

        {/* Institutional acknowledgements */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Institutional Partners</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {institutions.map((inst, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0" />
                  <h4 className="text-blue-900 font-bold text-base">{inst.name}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{inst.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Individual acknowledgements by group */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Individuals &amp; Teams</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {groups.map((group, gi) => (
              <div key={gi} className={`${group.color} rounded-2xl p-6`}>
                <h4 className={`${group.accent} font-bold text-sm tracking-widest uppercase mb-4`}>
                  {group.title}
                </h4>
                <div className="space-y-4">
                  {group.people.map((person, pi) => (
                    <div key={pi} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${
                          group.color === 'bg-blue-900'
                            ? 'bg-white text-blue-900'
                            : 'bg-blue-900 text-white'
                        }`}
                      >
                        {person.name.charAt(0)}
                      </div>
                      <div>
                        <p
                          className={`font-bold text-sm ${
                            group.color === 'bg-blue-900' ? 'text-white' : 'text-blue-900'
                          }`}
                        >
                          {person.name}
                        </p>
                        <p
                          className={`text-xs leading-snug mt-0.5 ${
                            group.color === 'bg-blue-900' ? 'text-blue-200' : 'text-blue-800'
                          }`}
                        >
                          {person.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student community */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-12 bg-yellow-400 rounded-full" />
            <h3 className="text-2xl font-bold text-blue-900">The RDP Student Community</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Most importantly, we acknowledge every refugee and internally displaced student at African
            Leadership University Rwanda. Your resilience, courage, and commitment to learning in the
            face of adversity are the foundation and inspiration behind everything this community does.
            This report is a testament to what you have built together.
          </p>
        </div>

        {/* Closing note */}
        <div className="text-center mb-16">
          <div className="inline-block border-t-2 border-yellow-400 pt-6 px-4">
            <p className="text-gray-500 text-sm italic">
              Any individual not mentioned by name who contributed time, energy, or support to the
              RDP community during 2025–2026 is equally valued and appreciated.
            </p>
          </div>
        </div>

        {/* Appendix */}
        <div id="appendix" className="border-t-2 border-gray-200 pt-12">
          <p className="text-yellow-500 font-bold text-sm tracking-widest uppercase mb-2">
            Appendix
          </p>
          <h3 className="text-3xl font-black text-blue-900 mb-2">Photo Gallery</h3>
          <div className="h-1 w-16 bg-yellow-400 mb-6" />
          <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
            A full collection of photographs from events, sessions, and community activities
            documented throughout the 2025–2026 academic year is available in our shared galleries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://drive.google.com/drive/folders/1oDasCGtocEjuCNqlq4a3iSTUXZhbuEbZ?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-900 hover:bg-blue-800 text-white font-bold px-7 py-4 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg group"
            >
              {/* Google Drive icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 87.3 78" fill="none">
                <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066DA"/>
                <path d="M43.65 25L29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3L1.2 49.5C.4 50.9 0 52.45 0 54h27.5z" fill="#00AC47"/>
                <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.5c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 11.65z" fill="#EA4335"/>
                <path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.95 0H34.35c-1.55 0-3.1.45-4.45 1.2z" fill="#00832D"/>
                <path d="M59.8 54H27.5L13.75 77.8c1.35.8 2.9 1.2 4.45 1.2h50.9c1.55 0 3.1-.45 4.45-1.2z" fill="#2684FC"/>
                <path d="M73.4 26.5l-13.2-22.8c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 54h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#FFBA00"/>
              </svg>
              View Gallery on Google Drive
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="https://www.flickr.com/photos/200220459@N06/albums/72177720327002951/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-pink-600 hover:bg-pink-500 text-white font-bold px-7 py-4 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg group"
            >
              {/* Flickr icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="7" cy="12" r="5" fill="#fff"/>
                <circle cx="17" cy="12" r="5" fill="#0063dc"/>
                <circle cx="7" cy="12" r="3.5" fill="#ff0084"/>
              </svg>
              View Album on Flickr
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="mt-4 space-y-1 text-xs text-gray-400">
            <p className="break-all">Google Drive: https://drive.google.com/drive/folders/1oDasCGtocEjuCNqlq4a3iSTUXZhbuEbZ?usp=sharing</p>
            <p className="break-all">Flickr: https://www.flickr.com/photos/200220459@N06/albums/72177720327002951/</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Acknowledgements;
