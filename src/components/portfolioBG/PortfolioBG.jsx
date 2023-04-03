import React from "react";
import "./portfolioBG.css";

export default function PortfolioBG({ langs, techs, noFixed, className }) {
  const bgItems = [...langs, ...techs]
    .map((item) => item.toUpperCase())
    .sort(() => Math.ceil(Math.random() * 3) - 2);
  const animations = ["bgA1", "bgA2", "bgA3", "bgA4", "bgA5"];
  return (
    <div
      className={`${
        noFixed ? "" : "fixed top-0 left-0"
      } h-[100svh] w-[100svw] flex justify-center items-center -z-50 ${
        className ? className : ""
      }`}
    >
      <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-24">
        {bgItems.map((item, i) => (
          <p
            key={`bg-${i}`}
            className={`text-center font-medium text-4xl opacity-0 ${
              animations[Math.floor(Math.random() * 5)]
            }`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
