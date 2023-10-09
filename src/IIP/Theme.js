import React from "react";
import tema_1 from "../img/theme/1. Sustainable Energy Solutions.png";
import tema_2 from "../img/theme/2. Smart Cities and Urban Development.png";
import tema_3 from "../img/theme/3. Assistive Technologies.png";
import tema_4 from "../img/theme/4. Education Technology.png";
import tema_5 from "../img/theme/5. Environmental Conservation and Sustainability.png";
import tema_6 from "../img/theme/6. Data Analytics and AI for Social Good.png";
import tema_7 from "../img/theme/7. Access to Information and Connectivity.png";
import ThemeCard from "../Component/ThemeCard";
export default function Theme() {
  const themes = [tema_1, tema_2, tema_3, tema_4, tema_5, tema_6, tema_7];
  const title_themes = [
    "Sustainable Energy Solutions",
    "Smart Cities and Urban Development",
    "Assistive Technologies",
    "Education Technology",
    ",Environmental Conservation and Sustainability",
    "Data Analytics and AI for Social Good",
    "Access to Information and Connectivity",
  ];
  return (
    <section className="w-full p-5 py-8 min-h-[600px] bg-patternLight dark:bg-patternDark bg-center bg-fixed bg-cover font-oswald">
      <h1 className="text-center text-3xl text-slate-950 uppercase font-semibold dark:text-slate-200">
        IPC Themes
      </h1>
      <hr className="w-[250px] mx-auto mt-5 border-t-4 border-teal-600" />
      <div className="w-full container md:gap-2 flex-wrap flex justify-between md:justify-center mt-5">
        {themes.map((key, value) => (
          <ThemeCard img={key}>{title_themes[value]}</ThemeCard>
        ))}
      </div>
    </section>
  );
}
