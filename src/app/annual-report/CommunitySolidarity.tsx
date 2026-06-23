import React from 'react';

const CommunitySolidarity = () => {
  const values = [
    {
      title: 'Ubuntu & Collective Responsibility',
      description:
        'The support effort demonstrated the belief that community members should stand together during moments of hardship and vulnerability. The initiative reinforced the understanding that success and resilience are strengthened through collective support.',
    },
    {
      title: 'Compassion & Empathy',
      description:
        'The contribution reflected the community\'s commitment to caring for fellow students beyond formal programs and activities. Students recognized the emotional and academic impact that financial challenges can have on an individual\'s educational journey.',
    },
    {
      title: 'Student Solidarity & Peer Support',
      description:
        'The initiative highlighted the importance of peer-led support systems and student solidarity within university communities. The RDP community demonstrated that meaningful support can emerge through collective action, even when individual contributions may seem small.',
    },
    {
      title: 'Inclusion & Belonging',
      description:
        'The support initiative reinforced the idea that all students deserve an opportunity to continue their education regardless of financial background or personal hardship. The community emphasized that refugee and displaced students should feel supported, valued, and included.',
    },
  ];

  const purposes = [
    'Prevent interruption of the student\'s academic journey',
    'Demonstrate solidarity and compassion within the student community',
    'Support vulnerable students facing financial hardship',
    'Promote a culture of empathy and collective responsibility',
    'Reinforce the values of Ubuntu and community care',
  ];

  const outcomes = [
    'Community support extends beyond events and formal programming',
    'Student-led solidarity initiatives can create meaningful impact',
    'Small collective contributions can help sustain educational opportunities',
    'Compassion and empathy remain essential components of leadership and community building',
  ];

  return (
    <section className="bg-white min-h-screen py-20 px-8 md:px-20 relative overflow-hidden">
      {/* Blue left accent bar */}
      <div className="absolute left-0 top-0 h-full w-2 bg-blue-900" />

      {/* Section number watermark */}
      <div className="absolute top-12 right-16 text-9xl font-black text-gray-100 select-none leading-none">
        16
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section header */}
        <div className="mb-12">
          <p className="text-yellow-500 font-bold text-sm tracking-widest uppercase mb-2">
            Section 16
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight mb-4">
            Community Solidarity &amp;<br />Student Support
          </h2>
          <div className="h-1 w-24 bg-yellow-400 mb-6" />
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            During the 2025–2026 academic year, the RDP community continued to demonstrate the values of
            empathy, compassion, solidarity, and collective responsibility — extending support to fellow
            students during moments of personal and financial hardship.
          </p>
        </div>

        {/* Background + Community Response — two columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Background */}
          <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-900">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Background</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              A student at African Leadership University faced a financial challenge that threatened her
              ability to continue with the trimester. She had an outstanding tuition balance and was
              required to raise a minimum payment to register and resume classes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Failure to meet the payment deadline would have resulted in missing the entire trimester and
              delaying graduation by an additional academic year — highlighting the financial vulnerabilities
              many refugee and displaced students face in higher education.
            </p>
          </div>

          {/* Community Response */}
          <div className="bg-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Community Response</h3>
            <p className="leading-relaxed mb-4 text-blue-100">
              As part of the World Refugee Day 2025 Give Back initiative, members of the RDP community had
              previously contributed funds aimed at supporting vulnerable members of the student community.
            </p>
            <p className="leading-relaxed mb-6 text-blue-100">
              In the spirit of Ubuntu and collective responsibility, the RDP leadership and student community
              agreed to contribute toward the emergency fundraising effort.
            </p>
            {/* Contribution highlight */}
            <div className="bg-yellow-400 rounded-xl p-5 text-center">
              <p className="text-blue-900 text-3xl font-black tracking-tight">60,000 RWF</p>
              <p className="text-blue-900 text-sm font-semibold mt-1">
                Contributed from RDP community funds
              </p>
            </div>
          </div>
        </div>

        {/* Purpose of the initiative */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Purpose of the Support Initiative</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {purposes.map((purpose, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-5">
                <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-blue-900 font-black text-sm rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{purpose}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Values */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Community Values Demonstrated</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0" />
                  <h4 className="text-blue-900 font-bold text-base">{v.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="bg-blue-900 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6">Outcomes &amp; Impact</h3>
          <p className="text-blue-100 leading-relaxed mb-6">
            The initiative strengthened community connection and reinforced the culture of empathy and
            support within the RDP community. The contribution demonstrated that:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {outcomes.map((o, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">{o}</p>
              </div>
            ))}
          </div>
          <p className="text-blue-200 text-sm leading-relaxed mt-6">
            The initiative also strengthened awareness around the importance of emergency student support
            systems and the role of community care within higher education spaces.
          </p>
        </div>

        {/* Significance */}
        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-12 bg-yellow-400 rounded-full" />
            <h3 className="text-2xl font-bold text-blue-900">Significance of the Initiative</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Community Solidarity &amp; Student Support initiative represented more than financial
            assistance — it reflected the identity and values of the Refugees &amp; IDPs community at
            ALU Rwanda.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The effort demonstrated that leadership is not only expressed through programs and events,
            but also through practical acts of compassion, empathy, and solidarity.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            The initiative reinforced the belief that education should not be interrupted because of
            temporary hardship, and that communities grow stronger when members support one another
            during difficult moments.
          </p>

          {/* Ubuntu quote */}
          <div className="border-l-4 border-yellow-400 pl-6">
            <p className="text-blue-900 text-xl font-bold italic">
              &ldquo;Ubuntu — I am because we are.&rdquo;
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommunitySolidarity;
