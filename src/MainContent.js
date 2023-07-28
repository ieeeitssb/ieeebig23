import React from "react";
import MainHome from "./Homepage/MainHome";
import MainBCC from "./BCC/MainBCC";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function MainContent() {
  return (
    <section className="w-full min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/event/bcc" element={<MainBCC />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}
