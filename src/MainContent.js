import React from "react";
import MainHome from "./Homepage/MainHome";
import MainBCC from "./BCC/MainBCC";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainIIP from "./IIP/MainIIP";
import MainCF from "./CompanyFair/MainCF";
export default function MainContent() {
  return (
    <section className="w-full min-h-screen selection:text-teal-500">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/events/ipc" element={<MainIIP />} />
          <Route path="/events/bpc" element={<MainBCC />} />
          <Route path="/events/companyfair" element={<MainCF />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}
