import React, { useState, useEffect } from "react";
import useGithubRepos from "../hooks/useGithubRepos.js";
import useFilteredRepos from "../hooks/useFilteredRepos.js";
import useModal from "../hooks/useModal.js";
import ProjectCard from "./ProjectCard.jsx";
import ModalProject from "./ModalProject.jsx";

export default function Portfolio() {
  const [filters, setFilters] = useState({ byLangs: [], byTech: [] });
  const { modal, setModal, closeModal } = useModal();
  useEffect(() => console.log(modal), [modal]);
  const { projects, langs, technologies } = useFilteredRepos(filters);
  const applyFilter = (filterType) => ((e) => {
    setFilters((state) => {
      if (e.target.checked)
        return {
          ...state,
          [filterType]: [...state[filterType], e.target.name],
        };
      if (!e.target.checked)
        return {
          ...state,
          [filterType]: state[filterType].filter((x) => x !== e.target.name),
        };
    });
  })

  console.log(projects)

  return (
    <>
      <div className="flex justify-around mt-20">
        <div className="flex flex-col">
          {langs.map((lang) => (
            <label key={lang}>
              <input
                type="checkbox"
                name={lang}
                defaultChecked={filters.byLangs.includes(lang)}
                onChange={applyFilter("byLangs")}
              />{" "}
              {lang}
            </label>
          ))}
        </div>
        <div className="flex flex-col">
          {technologies.map((technology) => (
            <label key={technology}>
              <input
                type="checkbox"
                name={technology}
                defaultChecked={filters.byTech.includes(technology)}
                onChange={applyFilter("byTech")}
              />{" "}
              {technology}
            </label>
          ))}
        </div>
      </div>
      <section className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-7xl m-auto gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            setModal={setModal}
            project={project}
            key={`project_${index}`}
          />
        ))}
        {modal && <ModalProject modal={modal} closeModal={closeModal} />}
      </section>
    </>
  );
}
