import React from "react";
import Timeline from "../Component/Timeline";
export default function TimelineCF() {
  return (
    <section className="w-full min-h-screen p-5 bg-light bg-cover dark:bg-dark font-oswald">
      <h1 className="text-center uppercase text-slate-900 dark:text-white text-3xl font-semibold">
        Timeline
      </h1>
      <hr className="w-[250px] border-t-4 border-teal-600 mx-auto mt-5" />
      <div className="container">
        <div className="mt-5">
          <Timeline date="20 October 2023">Participant Registration</Timeline>
          <Timeline date="10 October 2023" reverse="true">
            Close Registration
          </Timeline>
          <Timeline date="21 October 2023">Start Finalizing</Timeline>
          <Timeline date="25 October 2023" reverse="true">
            Close Finalizing
          </Timeline>
          <Timeline date="1 November 2023">Start Company Fair</Timeline>
          <Timeline date="31 November 2023" reverse="true">
            End Company Fair
          </Timeline>
        </div>
      </div>
    </section>
  );
}
