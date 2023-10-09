import React from "react";
import Timeline from "../Component/Timeline";
export default function TimelineIIP() {
  return (
    <section className="w-full min-h-screen p-5 bg-light bg-cover dark:bg-dark font-oswald">
      <h1 className="text-center uppercase text-slate-900 dark:text-white text-3xl font-semibold">
        Timeline
      </h1>
      <hr className="w-[250px] border-t-4 border-teal-600 mx-auto mt-5" />
      <div className="container">
        <div className="mt-5">
          <Timeline date="15 October - 13 November 2023">
            Open Registration & Pre-Eliminary
          </Timeline>
          <Timeline date="17 November 2023" reverse="true">
            Semifinal Anouncement
          </Timeline>
          <Timeline date="17 November - 3 December 2023">Semifinal</Timeline>
          <Timeline date="10 December 2023" reverse="true">
            Final Anouncement
          </Timeline>
          <Timeline date="13 December 2023">Technical Meeting</Timeline>
          <Timeline date="16 December 2023" reverse="true">
            Pitching top 6 Teams
          </Timeline>
          <Timeline date="16 December 2023">Awarding</Timeline>
        </div>
      </div>
    </section>
  );
}
