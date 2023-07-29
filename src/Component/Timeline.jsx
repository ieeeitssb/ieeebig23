import React from "react";
import { FaDotCircle } from "react-icons/fa";

export default function Timeline(props) {
  return (
    <div className="flex justify-center items-center">
      <div className="lg:w-1/2 mx-auto flex justify-center">
        <div
          className={`lg:w-1/2 flex ${
            props.reverse ? "" : "flex-row-reverse"
          } items-center rounded-lg px-5 mb-5`}
        >
          <p className="font-semibold text-lg lg:text-xl dark:text-white">
            {props.date}
          </p>
        </div>
        <div
          className={`lg:w-1/2 flex relative p-5 items-center text-justify rounded-lg dark:bg-blue-950 dark:text-white bg-slate-200 dark:shadow-teal-500 shadow-purple-400 shadow-xl mb-5 ${
            props.reverse ? "-order-1" : ""
          }`}
        >
          <div className={`absolute ${props.reverse ? "-right-2" : "-left-2"}`}>
            <FaDotCircle className="dark:text-white" />
          </div>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
}
