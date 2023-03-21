import React, { useState, useEffect } from "react";
import useFilteredRepos from "../hooks/useFilteredRepos.js";
import useModal from "../hooks/useModal.js";
import ProjectCard from "./ProjectCard.jsx";
import ModalProject from "./ModalProject.jsx";
import Button from "./button/Button.jsx";
import PortfolioBG from "./portfolioBG/PortfolioBG.jsx";

export default function Portfolio() {
  const [viewFilterList, setViewFilterList] = useState(undefined);
  const cleanFilters = { byLangs: [], byTech: [] };
  const [filters, setFilters] = useState(cleanFilters);
  const { modal, setModal, closeModal } = useModal();
  useEffect(() => console.log(filters), [filters]);
  const { projects, projectsReady, langs, technologies } =
    useFilteredRepos(filters);
  const applyFilter = (filterType) => (e) => {
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
  };

  console.log(projects);

  return projectsReady ? (
    <div className="flex flex-col items-center mb-16">
      <PortfolioBG langs={langs} techs={technologies} />
      <menu className="flex flex-wrap justify-center items-center my-24 max-w-4xl">
        <p className="text-lg mr-1">This portfolio was generated</p>
        <p className="text-lg mr-1">dynamically getting the</p>
        <p className="text-lg mr-1">data from my Github account.</p>
        <p className="text-lg">You could filter this portfolio by</p>
        <Button
          onClick={() => setViewFilterList({ list: langs, filter: "byLangs" })}
          mark
        >
          Programming languages
        </Button>
        <p className="text-lg"> or/and </p>
        <Button
          onClick={() =>
            setViewFilterList({ list: technologies, filter: "byTech" })
          }
          mark
        >
          Technologies and more.
        </Button>
        <p className="text-lg"> Also you could </p>
        <Button onClick={() => setFilters(cleanFilters)} mark>
          Clean the filters.
        </Button>
        <p className="text-lg mr-1"> By default the list is sorted to</p>
        <p className="text-lg"> show the last project that I made first.</p>
      </menu>
      {viewFilterList && (
        <div className="fixed top-0 left-0 flex flex-col justify-center items-center h-[100svh] w-[100svw] backdrop-blur z-10">
          <article className="flex flex-col items-end bg-zinc-900 p-6 border border-amber-400 rounded ">
            <Button
              onClick={() => setViewFilterList(undefined)}
              className={"mb-4"}
              mark
            >
              Close
            </Button>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-7xl m-auto gap-4 max-h-[70svh] overflow-y-auto">
              {viewFilterList.list.map((item) => (
                <label key={item}>
                  <input
                    type="checkbox"
                    name={item}
                    defaultChecked={filters.byLangs.includes(item)}
                    onChange={applyFilter(viewFilterList.filter)}
                  />{" "}
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </article>
        </div>
      )}
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
    </div>
  ) : (
    <h2 className="mt-[10svh] sm:text-base md:text-lg xl:text-xl 2xl:text-2xl ">
      Loading data from Github, please be patient...
    </h2>
  );
}
