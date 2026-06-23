'use client';
import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from 'recharts';

const rdpData = [
  { name: 'ALU RDP Scholars', value: 19 },
  { name: 'Non-RDP Students', value: 3 },
];

const registrationData = [
  { name: 'No Account', value: 19 },
  { name: 'Registered', value: 3 },
];

const usageData = [
  { name: 'Internships', students: 3 },
  { name: 'Fellowships & Programs', students: 3 },
  { name: 'Job Opportunities', students: 2 },
  { name: 'Networking', students: 2 },
];

const PIE_COLORS_1 = ['#1e3a8a', '#fbbf24'];
const PIE_COLORS_2 = ['#1e3a8a', '#34d399'];

const recommendations = [
  "Increase awareness campaigns around the Amahoro Coalition platform",
  "Organize additional onboarding and training sessions",
  "Support students in navigating opportunities effectively",
  "Expand mentorship and career readiness support systems",
  "Advocate for more inclusive opportunities targeting newly admitted students",
  "Strengthen follow-up support for students applying to opportunities",
  "Encourage continuous engagement with digital professional development platforms",
];

export default function AmahoroSurvey() {
  return (
    <section className="bg-white flex flex-col justify-center px-8 py-16 relative">
      <div className="absolute top-0 left-0 h-full w-2 bg-blue-900" />

      <div className="relative z-10 max-w-5xl mx-auto w-full pl-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-7xl font-extrabold text-blue-100 leading-none select-none">14</span>
          <div>
            <p className="text-yellow-500 uppercase tracking-widest text-xs font-semibold">Annual Report 2025–2026</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-tight">
              Amahoro Coalition<br />
              <span className="text-blue-600">Platform Engagement Survey</span>
            </h2>
          </div>
        </div>
        <div className="w-16 h-1 bg-yellow-400 rounded-full mb-10" />

        {/* Intro */}
        <div className="space-y-4 text-gray-700 text-base leading-relaxed mb-10 max-w-3xl">
          <p>
            On <strong className="text-blue-900">4th February 2026</strong>, the RDP community conducted a Platform Engagement Survey to assess student awareness, engagement, and experiences with the Amahoro Coalition platform.
          </p>
          <p>
            The findings provided valuable insights into student needs and helped guide future planning for onboarding initiatives, mentorship support, and professional development programming.
          </p>
        </div>

        {/* Survey detail cards */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { label: "Survey Date", value: "4th February 2026" },
            { label: "Total Responses", value: "22 students" },
            { label: "Target Audience", value: "RDP Students at ALU Rwanda" },
          ].map((item) => (
            <div key={item.label} className="bg-blue-900 text-white rounded-2xl p-5 text-center shadow">
              <p className="text-yellow-400 text-xs uppercase tracking-widest mb-1 font-semibold">{item.label}</p>
              <p className="text-white font-bold text-base">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Pie: Scholar Representation */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
            <p className="text-blue-900 font-bold mb-1 text-sm uppercase tracking-wide">RDP Scholar Representation</p>
            <p className="text-gray-400 text-xs mb-4">Out of 22 respondents</p>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={rdpData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                  label={({ percent }) => `${((percent ?? 0) * 100).toFixed(1)}%`}
                  labelLine={false}
                >
                  {rdpData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS_1[i]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => [`${v} students`]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Pie: Platform Registration */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
            <p className="text-blue-900 font-bold mb-1 text-sm uppercase tracking-wide">Platform Registration Status</p>
            <p className="text-gray-400 text-xs mb-4">Out of 22 respondents</p>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={registrationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                  label={({ percent }) => `${((percent ?? 0) * 100).toFixed(1)}%`}
                  labelLine={false}
                >
                  {registrationData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS_2[i]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => [`${v} students`]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart: Platform Usage */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm mb-12">
          <p className="text-blue-900 font-bold mb-1 text-sm uppercase tracking-wide">Platform Usage by Category</p>
          <p className="text-gray-400 text-xs mb-6">Among registered users (3 students)</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={usageData} margin={{ top: 0, right: 20, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#374151' }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: '#374151' }} />
              <Tooltip formatter={(v) => [`${v} students`]} />
              <Bar dataKey="students" fill="#1e3a8a" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Key findings + Feedback */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Positive feedback */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <p className="text-blue-900 font-bold mb-4 text-sm uppercase tracking-wide">Positive Feedback</p>
            <ul className="space-y-2">
              {[
                "Easy navigation and platform accessibility",
                "Exposure to internship and fellowship opportunities",
                "Improved awareness of professional development opportunities",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <p className="text-blue-900 font-bold mb-4 text-sm uppercase tracking-wide">Challenges Identified</p>
            <ul className="space-y-2">
              {[
                "Limited awareness of available opportunities",
                "Difficulty identifying opportunities relevant to their interests",
                "Need for more opportunities targeting newly admitted students",
                "Limited engagement with the platform after registration",
              ].map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-900 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
            {/* Quote */}
            <div className="mt-4 bg-blue-900 rounded-xl px-4 py-3">
              <p className="text-blue-100 text-xs italic">
                &ldquo;Considering new students as well for opportunities.&rdquo;
              </p>
              <p className="text-yellow-400 text-xs mt-1">— Survey Participant</p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-blue-900 text-white rounded-2xl p-6 mb-10 shadow-lg">
          <p className="text-yellow-400 font-bold mb-4 text-sm uppercase tracking-wide">Recommendations</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {recommendations.map((r, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-yellow-400 text-blue-900 font-extrabold text-xs flex items-center justify-center shrink-0">{i + 1}</span>
                <span className="text-blue-100 text-sm">{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Significance */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
          <p className="text-blue-900 font-bold mb-3 text-sm uppercase tracking-wide">Significance of the Survey</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            The survey represented an important step toward understanding the professional development experiences and digital engagement needs of refugee students at ALU Rwanda. The findings will continue guiding future collaboration between the RDP community and the Amahoro Coalition while supporting efforts toward greater <strong className="text-blue-900">inclusion, accessibility, mentorship, and professional empowerment</strong> for refugee and displaced students.
          </p>
        </div>
      </div>
    </section>
  );
}
