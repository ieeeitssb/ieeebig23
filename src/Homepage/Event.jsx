import React from "react";

import CardEvent from "../Component/CardEvent";
import logoTemp from "../img/logo_ieeebig.png";

export default function Event() {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900">
      <h1 className="text-3xl font-bold text-black dark:text-white text-center mt-10 uppercase tracking-wide mb-3">
        What's in IEEE BIG 2023
      </h1>
      <hr className="border-t-4 w-[250px] md:w-[450px] mx-auto border-t-teal-600 dark:border-t-white" />

      <div className="px-5 py-20 md:px-32">
        <CardEvent
          logo={logoTemp}
          title="IEEE Innovation Project (IIP)"
          description="Deskripsi singkat: Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Minima ex distinctio soluta dolorem eligendi
              voluptate."
          reverse="false"
        />

        <CardEvent
          logo={logoTemp}
          title="Business Case Competition (BCC)"
          description="Deskripsi singkat: Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Minima ex distinctio soluta dolorem eligendi
              voluptate."
          reverse="true"
        />

        <CardEvent
          logo={logoTemp}
          title="Company Fair"
          description="Deskripsi singkat: Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Minima ex distinctio soluta dolorem eligendi
              voluptate."
          reverse="false"
        />
      </div>
    </section>
  );
}
