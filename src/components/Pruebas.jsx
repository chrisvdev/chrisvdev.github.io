import React, { useState, useEffect } from "react";
import axios from "axios";
import LinkButton from "./LinkButton.jsx";

export default function Pruebas() {
  const [projects, setProjects] = useState([]);
  const filterProjects = (repos) =>
    repos.filter((repo) => repo.tags.includes("portfolio"));
  useEffect(() => {
    if (projects.length === 0) {
      axios
        .get("https://api.github.com/users/chrisvill2312/repos")
        .then((response) => {
          const processing = response.data.map((e) => {
            const clon = structuredClone(e);
            return axios.get(clon.languages_url).then((response) => ({
              langs: response.data,
              name: clon.name,
              description: clon.description,
              updated: clon.updated_at,
              tags: clon.topics,
              deploy: clon.homepage,
              github: clon.html_url,
              preview: `https://res.cloudinary.com/dgg07ocbn/image/upload/w_384,h_216,c_scale/v1/Landing/Projects/${clon.name}`
            }));
          });
          try {
            Promise.all(processing).then((repos) =>
              setProjects(filterProjects(repos))
            );
          } catch (error) {
            setProjects([]);
          }
        })
        .catch(() => {
          setProjects([]);
        });
    }
  }, [projects]);
  console.log(projects);
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-7xl m-auto gap-4">
      {projects.map(({ preview, name, description, deploy, github }, index) => (
        <article
          key={`project_${index}`}
          className="flex flex-col max-w-xs max-h-fit justify-start items-center m-2 p-2 border border-amber-400 rounded shadow-lg  hover:border-slate-100 hover:scale-105 transition-all" //shadow-slate-600 hover:shadow-slate-50
        >
          <img src={preview} alt={`${name}_preview`} className="aspect-video mb-4" />
          <h2 className="mb-2 text-xl font-bold text-center">{name}</h2>
          <p className="mb-4 text-center">{description}</p>
          <div className="w-full flex justify-around mb-2">
            <LinkButton href={github}>GitHub</LinkButton>
            {deploy !== "" && <LinkButton href={deploy}>Visit</LinkButton>}
          </div>
        </article>
      ))}
    </section>
  );
}
