import React from "react";
import ThemeCard from "../Component/ThemeCard";
import tema_bcc from "../img/theme/Tech Solutions for Sustainable Business Development.png";
export default function Theme() {
  return (
    <section className="w-full p-5 py-8 min-h-[600px] bg-patternLight dark:bg-patternDark bg-center bg-fixed bg-cover font-oswald">
      <h1 className="text-center text-3xl text-slate-950 uppercase font-semibold dark:text-slate-200">
        Bussiness Case Competition Themes
      </h1>
      <hr className="w-[250px] mx-auto mt-5 border-t-4 border-teal-600" />
      <div className="w-full container md:gap-2 flex-wrap flex justify-between md:justify-center mt-5">
        <ThemeCard img={tema_bcc}>
          Tech Solutions for Sustainable Business Development
        </ThemeCard>
      </div>
    </section>
  );
}
