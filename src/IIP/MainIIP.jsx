import React from "react";
import JumbotronIIP from "./JumbotronIIP";
import AboutIIP from "./AboutIIP";
import TimelineIIP from "./TimelineIIP";
import Theme from "./Theme";
import FormIIP from "./FormIIP";

export default function MainIIP() {
  return (
    <>
      <JumbotronIIP />
      <AboutIIP />
      <Theme />
      <TimelineIIP />
      {/* <FormIIP /> */}
    </>
  );
}
