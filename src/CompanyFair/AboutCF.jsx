import React from "react";
import Accordion from "../Component/Accordion";

export default function AboutCF() {
  return (
    <section className="w-full p-5 min-h-[600px] bg-light dark:bg-dark bg-cover">
      <div className="container">
        <h1 className="text-center uppercase text-slate-900 dark:text-white text-3xl font-semibold">
          About Company Fair
        </h1>
        <hr className="w-[250px] border-t-4 border-teal-600 mx-auto mt-5" />
        {/* accordion */}
        <Accordion
          question="What is Company Fair?"
          answer="Company Fair is an IEEE program that focuses on discussions with professional companies on topics related to technology. This discussion is expected to be a reference for students regarding the professional worldview that will be faced later."
        />
        <Accordion
          question="what is the impact by joining Company Fair"
          answer="It is hoped that this program can provide knowledge about the technology industry directly from professionals to students."
        />
      </div>
    </section>
  );
}
