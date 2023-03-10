import React, { useEffect } from "react";
import useGithubRepos from "../hooks/useGithubRepos.js";
import useModal from "../hooks/useModal.js";
import ProjectCard from "./ProjectCard.jsx";
import ModalProject from "./ModalProject.jsx";

export default function Portfolio() {
  const { modal, setModal, closeModal } = useModal();
  useEffect(() => console.log(modal), [modal]);
  const [projects, updateProjects] = useGithubRepos();
  console.log(projects);
  return (
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
  );
}
