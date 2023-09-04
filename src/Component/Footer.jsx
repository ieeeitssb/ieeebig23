import React from "react";
import { BsInstagram, BsLinkedin, BsYoutube, BsGithub } from "react-icons/bs";
import logo from "../img/logo_ieeebig.png";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="flex font-oswald bg-slate-200 dark:bg-blue-950 md:flex-row px-5 py-10 md:p-0 sm:px-20 flex-col-reverse md:px-36">
        <div className="py-5 basis-1/2 text-black dark:text-white md:ml-14 md:p-10">
          <img src={logo} alt="ieee img" width={150} />
          <p className="py-3 font-extrabold uppercase dark:text-white tracking-widest ">
            IEEEBIG 2023
          </p>
          <div className="flex pb-2">
            <a
              href="https://www.instagram.com/ieeeitssb/"
              className="pr-3 hover:text-teal-500 dark:text-white"
              target="blank"
            >
              <BsInstagram />
            </a>
            <a
              href="https://github.com/ieeeitssb"
              className="pr-3 hover:text-teal-500 dark:text-white"
              target="blank"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/company/ieee-its-sb/"
              className="pr-3 hover:text-teal-500 dark:text-white"
              target="blank"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@ieeeitssb428"
              className="pr-3 hover:text-teal-500 dark:text-white"
              target="blank"
            >
              <BsYoutube />
            </a>
          </div>

          <p className="dark:text-white">
            © 2023 By <span className="font-semibold tracking-wide">IEEE</span>{" "}
            ITS SB
          </p>
        </div>

        <div className="text-black dark:text-white basis-1/2 md:p-10">
          <div>
            <p className="font-bold dark:text-white">Our Address</p>
            <p className="dark:text-white">
              Sekretariat IEEE ITS, Jl. Teknik Kimia, Kampus ITS Sukolilo,
              Surabaya, 60111
            </p>
          </div>

          <div className="py-3">
            <p className="font-bold dark:text-white">Contact</p>
            <p className="dark:text-white">
              Email:{" "}
              <a
                href="mailto:ieee.sepuluhnopember@gmail.com"
                target="blank"
                className="hover:text-teal-500"
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
