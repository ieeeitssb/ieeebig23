import React from "react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function Accordion(props) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="lg:w-2/3 w-full mx-auto mt-5 shadow-lg mb-3">
      <div
        className="flex sticky top-0 hover:cursor-pointer p-3 bg-slate-300 rounded-md dark:bg-blue-950 dark:text-white justify-between"
        onClick={toggle}
      >
        <p className="text-lg font-semibold">{props.question}</p>
        <div className="w-8 h-8 flex flex-col justify-between relative">
          <div className="w-full h-full">
            <BsChevronDown
              className={`text-3xl duration-500 transition ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>
          <input
            type="checkbox"
            onClick={toggle}
            className="absolute w-full h-full top-0 opacity-0 hover:cursor-pointer"
          />
        </div>
      </div>
      <div
        className={`duration-500 px-5 bg-slate-200 dark:text-white dark:bg-blue-950 rounded-b-lg transition-all ${
          open ? "py-5 h-[100px] overflow-y-auto" : "h-0"
        } overflow-hidden transition`}
      >
        <p>{props.answer}</p>
      </div>
    </div>
  );
}
