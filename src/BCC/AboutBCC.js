import React from "react";
import Accordion from "../Component/Accordion";

export default function AboutBCC() {
  return (
    <section className="w-full p-5 min-h-[600px] bg-light dark:bg-dark bg-cover font-oswald">
      <div className="container">
        <h1 className="text-center uppercase text-slate-900 dark:text-white text-3xl font-semibold">
          About
        </h1>
        <hr className="w-[250px] border-t-4 border-teal-600 mx-auto mt-5" />
        {/* accordion */}
        <Accordion
          question="What is BPC ?"
          answer='In this context, IEEE
          The Business Plan Competition exists as a platform that encourages participants to
          develop innovations and business solutions focused on thematic areas of technology
          "Technological Solutions for Sustainable Development"'
        />
        <Accordion
          question="Who can join the BPC?"
          answer="D4/S1 students from various universities throughout Indonesia which consist of members
          3 people in 1 team. Team members are only allowed from the same university and
          allowed from different majors."
        />
        <Accordion
          question="What is the impact by joining BPC?"
          answer="It is hoped that various innovative ideas and concepts will emerge
          can overcome the challenges of sustainable development and advance the world's business. competition
          it also aims to inspire the participants in creating technological solutions that are
          positive impact, sustainable, and can make a real contribution in realizing
          a better future."
        />
      </div>
    </section>
  );
}
