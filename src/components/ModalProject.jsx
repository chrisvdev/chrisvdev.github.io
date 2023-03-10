import React from "react";
import Button from "./Button";
import "./ModalProject.css"

export default function ModalProject({ modal, closeModal }) {
  return (
    <section className="fixed top-0 left-0 w-[100svw] h-[100svh] bg-transparent backdrop-blur">
      <article className="flex h-[calc(100%_-_6rem)] w-[calc(100%_-_2rem)] m-4 mt-20 bg-zinc-900 rounded border border-amber-400">
        <Button onClick={closeModal}>Close</Button>
        <div className="h-full w-full overflow-y-scroll details" dangerouslySetInnerHTML={modal} />
      </article>
    </section>
  );
}
