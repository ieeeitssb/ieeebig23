import React from "react";
import Jumbotron from "./Homepage/Jumbotron";
import Navbar from "./Component/Navbar";
import About from "./Homepage/About";
import Event from "./Homepage/Event";
export default function MainContent() {
  return (
    <section className="w-full min-h-screen">
      <Navbar />
      <Jumbotron />
      <About />
      <Event />
    </section>
  );
}
