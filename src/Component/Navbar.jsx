import React, { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../img/logo_ieeebig.png";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = () => {
    localStorage.setItem("theme", "dark");
    setDarkMode(!darkMode);
    const html = document.querySelector("html");
    if (!darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <header>
      <div className="fixed z-[100] h-20 w-full bg-slate-200 dark:bg-blue-950 dark:shadow-slate-800 shadow-xl">
        <div className="flex h-full w-full items-center justify-between px-5 2xl:px-16">
          <a href="/">
            <h1 className="text-black dark:text-white text-3xl font-bold">
              <img src={logo} className="w-[50px]" alt="gambar" />
            </h1>
          </a>
          <div>
            <ul className="hidden font-medium text-black dark:text-white lg:flex">
              <a href="/">
                <li className="ml-10 text-sm uppercase hover:text-pink-500">
                  Home
                </li>
              </a>
              <a href="#about" scroll={false}>
                <li className="ml-10 text-sm uppercase hover:text-pink-500">
                  About
                </li>
              </a>
              <a href="/events" scroll={false}>
                <li className="ml-10 text-sm uppercase hover:text-pink-500">
                  Events
                </li>
              </a>
              <a href="/teams" scroll={false}>
                <li className="ml-10 text-sm uppercase hover:text-pink-500">
                  Teams
                </li>
              </a>
              <li className="ml-10">
                <div className="cursor-pointer" onClick={handleToggle}>
                  {!darkMode ? <BsSunFill /> : <BsMoonFill />}
                </div>
              </li>
            </ul>
            <div
              onClick={handleNav}
              className="text-black dark:text-white lg:hidden cursor-pointer"
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
        {/* Mobile Version */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 h-screen w-full bg-black/60 text-white lg:hidden"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 h-screen w-[75%] bg-blue-950 p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]"
                : "fixed left-[-100%] top-0 h-screen p-10 duration-500 ease-in"
            }
          >
            <div>
              <div className="flex items-center justify-between">
                <a href="/">IEEEBIG</a>
                <div
                  onClick={handleNav}
                  className="cursor-pointer rounded-full bg-slate-300 p-2 text-black shadow-md shadow-gray-400"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="my-5 border-b border-gray-300"></div>
            </div>
            <div className="flex-col py-4 font-[400]">
              <ul className="uppercase">
                <a href="/">
                  <li className="py-4 text-sm hover:text-pink-500">Home</li>
                </a>
                <a href="#about" scroll={false}>
                  <li className="py-4 text-sm hover:text-pink-500">About</li>
                </a>
                <a href="/events" scroll={false}>
                  <li className="py-4 text-sm hover:text-pink-500">Events</li>
                </a>
                <a href="/teams" scroll={false}>
                  <li className="py-4 text-sm hover:text-pink-500">Teams</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
