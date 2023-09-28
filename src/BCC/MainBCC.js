import React from "react";
import Jumbotron from "./JumbotronBCC";
import AboutBCC from "./AboutBCC";
import TimelineBCC from "./TimelineBCC";
import Theme from "./Theme";
import FormBCC from "./FormBCC";
export default function MainBCC() {
  return (
    <>
      <Jumbotron />
      <AboutBCC />
      <Theme />
      <TimelineBCC />
      {/* <FormBCC /> */}
    </>
  );
}
