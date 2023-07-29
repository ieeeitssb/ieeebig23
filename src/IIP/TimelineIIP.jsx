import React from "react";
import Timeline from "../Component/Timeline";
export default function TimelineIIP() {
  return (
    <section className="w-full min-h-screen p-5 bg-light bg-cover dark:bg-dark">
      <h1 className="text-center uppercase text-slate-900 dark:text-white text-3xl font-semibold">
        Timeline
      </h1>
      <hr className="w-[250px] border-t-4 border-teal-600 mx-auto mt-5" />
      <div className="container">
        <div className="mt-5">
          <Timeline date="August 2023">Open Registration</Timeline>
          <Timeline date="September 2023" reverse="true">
            Close Registration & Preliminary
          </Timeline>
          <Timeline date="Last August 2023">Semifinal Anouncement</Timeline>
          <Timeline date="October 2023" reverse="true">
            Semifinal
          </Timeline>
          <Timeline date="November 2023">
            Submission for semifinal and final anouncement
          </Timeline>
        </div>
      </div>
    </section>
  );
}
