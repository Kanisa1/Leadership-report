import React from 'react';

const PROPOSAL_URL =
  'https://docs.google.com/document/d/1NpPSfgkcwLwDRbsfeUVjuW937xTb9yWZuce2jnN0_5Y/edit?usp=sharing';

const StrategicPriorities = () => {
  return (
    <section className="bg-blue-900 min-h-screen py-20 px-8 md:px-20 relative overflow-hidden">
      {/* Decorative top bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400" />

      {/* Section number watermark */}
      <div className="absolute top-12 right-16 text-9xl font-black text-blue-800 select-none leading-none">
        17
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section header */}
        <div className="mb-14">
          <p className="text-yellow-400 font-bold text-sm tracking-widest uppercase mb-2">
            Section 17
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Strategic Priorities<br />for 2026–2027
          </h2>
          <div className="h-1 w-24 bg-yellow-400 mb-6" />
          <p className="text-blue-200 text-lg leading-relaxed max-w-3xl">
            Looking ahead to the 2026–2027 academic year, the Refugees &amp; IDPs community at ALU Rwanda
            has identified key strategic directions to deepen its impact, expand its programming, and
            strengthen institutional partnerships.
          </p>
        </div>

        {/* Proposal callout card */}
        <div className="bg-white rounded-3xl p-10 md:p-14 mb-10 text-center shadow-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-6">
            <svg className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-blue-900 mb-4">
            Full Strategic Proposal
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-4">
            A detailed proposal outlining the strategic priorities for the 2026–2027 academic year was
            developed by the RDP leadership. The proposal covers programmatic goals, partnership
            strategies, and community development plans.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto mb-8">
            Due to time constraints during the reporting period, the proposal remained in development
            and was not fully implemented. It represents the community&apos;s forward-looking vision and
            serves as a foundation for the year ahead.
          </p>

          <a
            href={PROPOSAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-base px-10 py-4 rounded-xl transition-colors duration-200 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Full Strategic Proposal
          </a>
        </div>

        {/* Note card */}
        <div className="border border-blue-700 rounded-2xl p-6 flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5">
            <svg className="w-4 h-4 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20A10 10 0 0112 2z" />
            </svg>
          </div>
          <div>
            <p className="text-yellow-400 font-bold text-sm mb-1">Note</p>
            <p className="text-blue-200 text-sm leading-relaxed">
              The strategic priorities document linked above was prepared as a proposal for future programming
              and has not yet been formally adopted. It reflects the leadership team&apos;s aspirations and
              recommended directions for the RDP community in the coming academic year.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StrategicPriorities;
