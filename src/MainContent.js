import React from "react";
import Jumbotron from "./Homepage/Jumbotron";
import Navbar from "./Component/Navbar";
import About from "./Homepage/About";
export default function MainContent() {
  return (
    <section className="w-full min-h-screen">
      <Navbar />
      <Jumbotron />
      <About />
    </section>
  );
}
