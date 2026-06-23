import React from 'react';

export default function TitlePage() {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center items-center px-8 py-16 relative">
      {/* Blue top bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-blue-900" />

      <div className="max-w-3xl w-full text-center flex flex-col items-center gap-6">
        {/* Section label */}
        <span className="text-blue-700 uppercase tracking-[0.3em] text-sm font-semibold">
          African Leadership University Rwanda
        </span>

        {/* Main title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
          Refugees &amp; IDPs at ALU Rwanda
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full justify-center">
          <div className="h-px flex-1 bg-blue-200 max-w-[120px]" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="h-px flex-1 bg-blue-200 max-w-[120px]" />
        </div>

        {/* Report title */}
        <p className="text-2xl md:text-3xl font-bold text-gray-700">
          Annual Report 2025–2026
        </p>

        {/* Theme */}
        <p className="text-lg md:text-xl italic text-blue-600 font-medium">
          &ldquo;Voices of Resilience: A Healing Dinner Dialogue&rdquo;
        </p>

        {/* Divider bar */}
        <div className="w-20 h-1 bg-yellow-400 rounded-full my-2" />

        {/* Prepared by */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl px-10 py-8 mt-4 text-center shadow-sm w-full max-w-md">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-3 font-semibold">Prepared by</p>
          <p className="text-xl font-bold text-blue-900 mb-1">Kanisa Rebecca Majok Thiak</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Refugee &amp; Displaced Persons Community Lead<br />
            African Leadership University Rwanda<br />
            <span className="text-yellow-600 font-medium">Mastercard Foundation Scholars Program</span>
          </p>
        </div>
      </div>

      {/* Blue bottom bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-900" />
    </section>
  );
}
