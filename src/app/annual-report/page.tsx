"use client";
import React from "react";
import Cover from './Cover';
import TitlePage from './TitlePage';
import TableOfContents from './TableOfContents';
import ExecutiveSummary from './ExecutiveSummary';
import ImpactAtAGlance from './ImpactAtAGlance';
import Introduction from './Introduction';
import WorldRefugeeDay from './WorldRefugeeDay';
import PFATraining from './PFATraining';
import PFATraining2 from './PFATraining2';
import WellnessSession from './WellnessSession';
import AmahoroOnboarding from './AmahoroOnboarding';
import AmahoroSkillsHub from './AmahoroSkillsHub';
import AmahoroSurvey from './AmahoroSurvey';
import RefugeeMeetup from './RefugeeMeetup';
import CommunitySolidarity from './CommunitySolidarity';
import StrategicPriorities from './StrategicPriorities';
import Acknowledgements from './Acknowledgements';
import { downloadReportPDF } from './download-pdf';

const AnnualReportPage = () => {
  return (
    <>
      {/* Floating download button — excluded from PDF */}
      <div className="no-print fixed bottom-8 right-8 z-50">
        <button
          onClick={downloadReportPDF}
          className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-full shadow-xl transition-all duration-200 hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
          </svg>
          Download PDF
        </button>
      </div>

      {/* All report content captured for PDF */}
      <main id="report-container">
        <Cover />
        <TitlePage />
        <TableOfContents />
        <ExecutiveSummary />
        <ImpactAtAGlance />
        <Introduction />
        <WorldRefugeeDay />
        <PFATraining />
        <PFATraining2 />
        <WellnessSession />
        <AmahoroOnboarding />
        <AmahoroSkillsHub />
        <AmahoroSurvey />
        <RefugeeMeetup />
        <CommunitySolidarity />
        <StrategicPriorities />
        <Acknowledgements />
      </main>
    </>
  );
};

export default AnnualReportPage;
