import React from "react";
import { BsInstagram, BsLinkedin, BsYoutube, BsGithub } from "react-icons/bs";

import footerImg from "../img/ieee-logo.png";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="bg-slate-500 flex md:flex-row px-5 py-10 md:p-0 sm:px-20 flex-col-reverse md:px-36">
        <div className="py-5 basis-1/2 text-white  md:ml-14 md:p-10">
          <img src={footerImg} alt="ieee img" width={300} />
          <p className="py-3 font-extrabold uppercase tracking-widest ">
            IEEE ITS SB
          </p>
          <div className="flex pb-2">
            <a
              href="https://www.instagram.com/ieeeitssb/"
              className="pr-3 hover:text-second"
              target="blank"
            >
              <BsInstagram />
            </a>
            <a
              href="https://github.com/ieeeitssb"
              className="pr-3 hover:text-second"
              target="blank"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/company/ieee-its-sb/"
              className="pr-3 hover:text-second"
              target="blank"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@ieeeitssb428"
              className="pr-3 hover:text-second"
              target="blank"
            >
              <BsYoutube />
            </a>
          </div>

          <p>
            © 2023 By <span className="font-semibold tracking-wide">IEEE</span>{" "}
            ITS SB
          </p>
        </div>

        <div className="text-white basis-1/2 md:p-10">
          <div>
            <p className="font-bold">Our Address</p>
            <p>
              Sekretariat IEEE ITS, Jl. Teknik Kimia, Kampus ITS Sukolilo,
              Surabaya, 60111
            </p>
          </div>

          <div className="py-3">
            <p className="font-bold">Contact</p>
            <p>
              Email:{" "}
              <a
                href="mailto:ieee.sepuluhnopember@gmail.com"
                target="blank"
                className="hover:text-second"
              >
                ieee.sepuluhnopember@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
