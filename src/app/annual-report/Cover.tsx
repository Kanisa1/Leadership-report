import React from 'react';
import { downloadReportPDF } from './download-pdf';

export default function Cover() {
  return (
    <section className="cover-section bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white min-h-[70vh] flex flex-col justify-center items-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900 opacity-80 z-0" />
      {/* Logos Row */}
      <div className="relative z-10 w-full flex justify-between items-center max-w-2xl mb-8">
        <img src="/images/ALU&MFC.png" alt="ALU & MFC Logo" className="h-16 md:h-20 object-contain bg-white rounded-lg p-2 shadow-md" />
        <img src="/images/RDP.jpg" alt="RDP Logo" className="h-16 md:h-20 object-contain bg-white rounded-lg p-2 shadow-md" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 uppercase">Annual Report</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-2 tracking-widest">2025/2026</p>
        <div className="w-24 h-1 bg-yellow-400 rounded-full mb-6" />
        <p className="text-lg md:text-xl font-light mb-8">A comprehensive overview of our vision, achievements, and financial performance.</p>
        <button
          onClick={downloadReportPDF}
          className="no-print bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          Download PDF
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-1/2 h-32 bg-gradient-to-tr from-yellow-400 to-transparent opacity-30 rounded-tr-full z-0" />
    </section>
  );
}
