import React from "react";

export default function CardEvent(props) {
  return (
    <div
      className={`bg-green-100 py-5 dark:bg-slate-500 dark:text-white mb-8 flex flex-col rounded-2xl ${
        props.reverse === "true" ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="p-5 basis-1/3">
        <img src={props.logo} alt="logo" width={200} className="mx-auto" />
      </div>
      <div className="p-3 basis-2/3 md:px-10 md:py-8">
        <p className="text-2xl font-bold">{props.title}</p>
        <p className="py-2">{props.description}</p>
        <div className="py-4 mt-2">
          <a
            href={props.link}
            className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 hover:opacity-80 py-2 font-medium rounded-2xl"
          >
            See more
          </a>
        </div>
      </div>
    </div>
  );
}
