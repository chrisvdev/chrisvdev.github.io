import React from "react";
import Button from "../button/Button";
import "./ModalProject.css"

export default function ModalProject({ modal, closeModal }) {
  return (
    <section className="fixed top-0 left-0 w-[100svw] h-[100svh] flex justify-center items-center bg-transparent backdrop-blur">
      <article className="flex flex-col p-6 items-end aspect-square max-h-[calc(100%_-_12rem)] max-w-[calc(100%_-_4rem)] m-4 mt-20 bg-zinc-900 rounded border border-amber-400">
        <Button onClick={closeModal} className="mb-6">Close</Button>
        <div className="h-full w-full overflow-y-auto details p-6 " dangerouslySetInnerHTML={modal} />
      </article>
    </section>
  );
}
