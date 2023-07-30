import React from "react";
import Accordion from "../Component/Accordion";

export default function AboutIIP() {
  return (
    <section className="w-full p-5 min-h-[600px] bg-light dark:bg-dark bg-cover font-oswald">
      <div className="container">
        <h1 className="text-center uppercase text-slate-900 dark:text-white text-3xl font-semibold">
          About IIP
        </h1>
        <hr className="w-[250px] border-t-4 border-teal-600 mx-auto mt-5" />
        {/* accordion */}
        <Accordion
          question="What is IIP ?"
          answer='In this context, IEEE
          Innovation Project Competition exists as a platform
          that encourages participants to design and develop
          new innovations with the theme "TechnoSustainable: Empowering a BIG Future"'
        />
        <Accordion
          question="Who can join the IIP?"
          answer="D4/S1 students from various universities throughout Indonesia which consist of members
          3 people in 1 team. Team members are only allowed from the same university and
          allowed from different majors."
        />
        <Accordion
          question="what is the impact by joining IIP?"
          answer="it is hoped that there will be innovations that are efficient, sustainable, and can have a positive impact in driving a better future. This competition is also expected to inspire participants to continue to innovate and contribute in advancing technology towards a brighter future."
        />
        <Accordion
          question="How can I regist this event?"
          answer="Click login button or menu in this website. For more information check this guidebook"
        />
      </div>
    </section>
  );
}
