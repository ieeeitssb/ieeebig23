import React from "react";

import CardEvent from "../Component/CardEvent";
import logoTemp from "../img/logo_ieeebig.png";

export default function Event() {
  return (
    <section className="py-20 bg-light bg-cover bg-center dark:bg-dark font-oswald tracking-wider">
      <h1 className="md:text-3xl text-xl font-bold text-black dark:text-white text-center mt-10 uppercase tracking-wide mb-3">
        What's in IEEE BIG 2023
      </h1>
      <hr className="border-t-4 w-[250px] md:w-[450px] mx-auto border-t-teal-600 dark:border-t-white" />

      <div className="px-5 py-20 md:px-32">
        <CardEvent
          logo={logoTemp}
          title="IEEE Innovation Project (IIP)"
          description='Description: In this context, IEEE Innovation Project Competition exists as a platform that encourages participants to design and develop new innovations with the theme "TechnoSustainable: Empowering a BIG Future"'
          reverse="false"
          link="/events/iip"
        />

        <CardEvent
          logo={logoTemp}
          title="Business Case Competition (BCC)"
          description='Description: In this context, IEEE The Business Case Competition exists as a platform that encourages participants to develop innovations and business solutions focused on thematic areas of technology "Technological Solutions for Sustainable Development"'
          reverse="true"
          link="/events/bcc"
        />

        <CardEvent
          logo={logoTemp}
          title="Company Fair"
          description="Description: Company Fair is an IEEE program that focuses on discussions with professional companies on topics related to technology. This discussion is expected to be a reference for students regarding the professional worldview that will be faced later."
          reverse="false"
          link="/events/companyfair"
        />
      </div>
    </section>
  );
}
