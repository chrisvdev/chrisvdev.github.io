import React from "react";
import LinkButton from "./LinkButton.jsx";
import Button from "./button/Button.jsx";

export default function ProjectCard({ project, setModal }) {
  const { preview, name, description, deploy, github } = project;
  return (
    <article
      className="flex flex-col max-w-xs max-h-fit justify-start items-center m-2 p-2 border border-amber-400 rounded shadow-lg  hover:border-slate-100 hover:scale-105 backdrop-blur bg-[#18181b80] bg-zinc-900 transition-all" //shadow-slate-600 hover:shadow-slate-50
    >
      <img
        src={preview}
        alt={`${name}_preview`}
        className="aspect-video mb-4"
      />
      <h2 className="mb-2 text-xl font-bold text-center">{name}</h2>
      <p className="mb-4 text-center">{description}</p>
      <div className="w-full flex justify-around mb-2">
        <LinkButton href={github}>GitHub</LinkButton>
        {deploy !== "" && <LinkButton href={deploy}>Visit</LinkButton>}
        <Button onClick={() => setModal(project)}>Details</Button>
      </div>
    </article>
  );
}
