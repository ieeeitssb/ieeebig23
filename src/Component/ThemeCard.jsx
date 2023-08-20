import React from "react";

export default function ThemeCard(props) {
  return (
    <div className="w-[40%] md:w-1/6 relative group border-4 border-teal-600 rounded-lg overflow-hidden bg-white dark:bg-slate-950 mb-3">
      <img src={props.img} alt="gambar" />
      <span className="absolute duration-500 top-0 bottom-0 w-full h-full flex justify-center items-center bg-hoverCard scale-0 group-hover:scale-150 rounded-full group-hover:rotate-[360deg] text-white dark:bg-hoverCardDark dark:text-slate-900 dark:font-semibold text-sm">
        <p className="w-1/2">{props.children}</p>
      </span>
    </div>
  );
}
