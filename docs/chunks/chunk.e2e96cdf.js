/* empty css                */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from './chunk.4e26b078.js';
import { u as useFilteredRepos, P as PortfolioBG, $ as $$Footer, a as $$MainLayout } from './chunk.dc0b499b.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MarkdownIt from 'markdown-it';
/* empty css                *//* empty css                *//* empty css                */
function useModal () {
    const md = new MarkdownIt(); //Gracias ManzDev por la Librería y por estar!
    const [project, _setProject] = useState(undefined);
    const [modal, _setModal] = useState(undefined);
    const setModal = (project) => (_setProject(project));
    const closeModal = () => {
        _setModal(undefined);
        _setProject(undefined);
    };
    useEffect(() => {
        if (project) {
            axios.get(`https://raw.githubusercontent.com/${project.userName}/${project.name}/main/README.md`)
                .then((response) => { _setModal({ __html: md.render(response.data) }); })
                .catch(() => { closeModal(); });
        }
    }, [project]);
    return { modal, setModal, closeModal }
}

function LinkButton({ href, className = "", children }) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      className: `border h-8 w-fit border-transparent hover:border-b-amber-400 hover:border-t-transparent hover:text-slate-50 px-2 transition-all text-lg ${className}`,
      target: "_blank",
      rel: "noopener noreferrer",
      children
    }
  );
}

function Button({ onClick, children, className, mark }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: `border cur h-8 w-fit rounded border-transparent hover:border-b-amber-400 hover:border-t-transparent hover:text-slate-50 px-1 mx-1 transition-all text-lg ${className}${mark ? " button" : ""}`,
      target: "_blank",
      rel: "noopener noreferrer",
      children
    }
  );
}

function ProjectCard({ project, setModal }) {
  const { userName, preview, name, description, deploy, github } = project;
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: "flex flex-col md:flex-row max-w-xs md:max-w-4xl max-h-fit justify-start items-center m-2 p-2 border border-amber-400 rounded shadow-lg  hover:border-slate-100 backdrop-blur bg-[#18181b80] bg-zinc-900 transition-all",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: preview,
            alt: `${name}_preview`,
            className: "aspect-video mb-4"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:items-start md:ml-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-2 text-xl font-bold text-center", children: name }),
          /* @__PURE__ */ jsx("p", { className: "mb-4 text-center md:text-left", children: description }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-fit flex justify-around mb-2", children: [
            /* @__PURE__ */ jsx(LinkButton, { href: github, children: "GitHub" }),
            deploy !== "" && /* @__PURE__ */ jsx(LinkButton, { href: deploy, children: "Visit" }),
            userName == "chrisvill2312" ? /* @__PURE__ */ jsx(Button, { onClick: () => setModal(project), children: "Details" }) : void 0
          ] })
        ] })
      ]
    }
  );
}

function ModalProject({ modal, closeModal }) {
  return /* @__PURE__ */ jsx("section", { className: "fixed top-0 left-0 w-[100svw] h-[100svh] flex justify-center items-center bg-transparent backdrop-blur", children: /* @__PURE__ */ jsxs("article", { className: "flex flex-col p-6 items-end aspect-square max-h-[calc(100%_-_12rem)] max-w-[calc(100%_-_4rem)] m-4 mt-20 bg-zinc-900 rounded border border-amber-400", children: [
    /* @__PURE__ */ jsx(Button, { onClick: closeModal, className: "mb-6", children: "Close" }),
    /* @__PURE__ */ jsx("div", { className: "h-full w-full overflow-y-auto details p-6 ", dangerouslySetInnerHTML: modal })
  ] }) });
}

function Portfolio() {
  const [viewFilterList, setViewFilterList] = useState(void 0);
  const cleanFilters = { byLangs: [], byTech: [] };
  const [filters, setFilters] = useState(cleanFilters);
  const { modal, setModal, closeModal } = useModal();
  const { projects, projectsReady, langs, technologies } = useFilteredRepos(filters);
  const applyFilter = (filterType) => (e) => {
    setFilters((state) => {
      if (e.target.checked)
        return {
          ...state,
          [filterType]: [...state[filterType], e.target.name]
        };
      if (!e.target.checked)
        return {
          ...state,
          [filterType]: state[filterType].filter((x) => x !== e.target.name)
        };
    });
  };
  return projectsReady ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mb-16", children: [
    /* @__PURE__ */ jsx(PortfolioBG, { langs, techs: technologies }),
    /* @__PURE__ */ jsxs("menu", { className: "flex flex-wrap justify-center items-center mt-20 mb-2 max-w-4xl", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          className: "flex justify-center items-center",
          onClick: () => setViewFilterList({ list: langs, filter: "byLangs" }),
          children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                width: "2rem",
                height: "2rem",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx("g", { id: "Interface / Filter", children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    id: "Vector",
                    d: "M20 5.6001C20 5.04005 19.9996 4.75981 19.8906 4.5459C19.7948 4.35774 19.6423 4.20487 19.4542 4.10899C19.2403 4 18.9597 4 18.3996 4H5.59961C5.03956 4 4.75981 4 4.5459 4.10899C4.35774 4.20487 4.20487 4.35774 4.10899 4.5459C4 4.75981 4 5.04005 4 5.6001V6.33736C4 6.58195 4 6.70433 4.02763 6.81942C4.05213 6.92146 4.09263 7.01893 4.14746 7.1084C4.20928 7.20928 4.29591 7.29591 4.46875 7.46875L9.53149 12.5315C9.70443 12.7044 9.79044 12.7904 9.85228 12.8914C9.90711 12.9808 9.94816 13.0786 9.97266 13.1807C10 13.2946 10 13.4155 10 13.6552V18.411C10 19.2682 10 19.6971 10.1805 19.9552C10.3382 20.1806 10.5814 20.331 10.8535 20.3712C11.1651 20.4172 11.5487 20.2257 12.3154 19.8424L13.1154 19.4424C13.4365 19.2819 13.5966 19.2013 13.7139 19.0815C13.8176 18.9756 13.897 18.8485 13.9453 18.7084C14 18.5499 14 18.37 14 18.011V13.6626C14 13.418 14 13.2958 14.0276 13.1807C14.0521 13.0786 14.0926 12.9808 14.1475 12.8914C14.2089 12.7911 14.2947 12.7053 14.4653 12.5347L14.4688 12.5315L19.5315 7.46875C19.7044 7.2958 19.7904 7.20932 19.8523 7.1084C19.9071 7.01893 19.9482 6.92146 19.9727 6.81942C20 6.70551 20 6.58444 20 6.3448V5.6001Z",
                    stroke: "#FBBF24",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                ) })
              }
            ),
            /* @__PURE__ */ jsx("label", { className: "ml-2", children: "Languages" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Button,
        {
          className: "flex justify-center items-center",
          onClick: () => setViewFilterList({ list: technologies, filter: "byTech" }),
          children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                width: "2rem",
                height: "2rem",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx("g", { id: "Interface / Filter", children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    id: "Vector",
                    d: "M20 5.6001C20 5.04005 19.9996 4.75981 19.8906 4.5459C19.7948 4.35774 19.6423 4.20487 19.4542 4.10899C19.2403 4 18.9597 4 18.3996 4H5.59961C5.03956 4 4.75981 4 4.5459 4.10899C4.35774 4.20487 4.20487 4.35774 4.10899 4.5459C4 4.75981 4 5.04005 4 5.6001V6.33736C4 6.58195 4 6.70433 4.02763 6.81942C4.05213 6.92146 4.09263 7.01893 4.14746 7.1084C4.20928 7.20928 4.29591 7.29591 4.46875 7.46875L9.53149 12.5315C9.70443 12.7044 9.79044 12.7904 9.85228 12.8914C9.90711 12.9808 9.94816 13.0786 9.97266 13.1807C10 13.2946 10 13.4155 10 13.6552V18.411C10 19.2682 10 19.6971 10.1805 19.9552C10.3382 20.1806 10.5814 20.331 10.8535 20.3712C11.1651 20.4172 11.5487 20.2257 12.3154 19.8424L13.1154 19.4424C13.4365 19.2819 13.5966 19.2013 13.7139 19.0815C13.8176 18.9756 13.897 18.8485 13.9453 18.7084C14 18.5499 14 18.37 14 18.011V13.6626C14 13.418 14 13.2958 14.0276 13.1807C14.0521 13.0786 14.0926 12.9808 14.1475 12.8914C14.2089 12.7911 14.2947 12.7053 14.4653 12.5347L14.4688 12.5315L19.5315 7.46875C19.7044 7.2958 19.7904 7.20932 19.8523 7.1084C19.9071 7.01893 19.9482 6.92146 19.9727 6.81942C20 6.70551 20 6.58444 20 6.3448V5.6001Z",
                    stroke: "#FBBF24",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                ) })
              }
            ),
            /* @__PURE__ */ jsx("label", { className: "ml-2", children: "Technologies and more" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Button,
        {
          className: "flex justify-center items-center",
          onClick: () => setFilters(cleanFilters),
          children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                width: "2rem",
                height: "2rem",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx("g", { id: "Interface / Filter_Off", children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    id: "Vector",
                    d: "M13 4H18.4C18.9601 4 19.2409 4 19.4548 4.10899C19.6429 4.20487 19.7948 4.35774 19.8906 4.5459C19.9996 4.75981 20 5.04005 20 5.6001V6.3448C20 6.58444 20 6.70551 19.9727 6.81942C19.9482 6.92146 19.9072 7.01893 19.8524 7.1084C19.7906 7.20931 19.7043 7.2958 19.5314 7.46875L18 9.00012M7.49961 4H5.59961C5.03956 4 4.75981 4 4.5459 4.10899C4.35774 4.20487 4.20487 4.35774 4.10899 4.5459C4 4.75981 4 5.04005 4 5.6001V6.33736C4 6.58195 4 6.70433 4.02763 6.81942C4.05213 6.92146 4.09263 7.01893 4.14746 7.1084C4.20928 7.20928 4.29591 7.29591 4.46875 7.46875L9.53149 12.5315C9.70443 12.7044 9.79044 12.7904 9.85228 12.8914C9.90711 12.9808 9.94816 13.0786 9.97266 13.1807C10 13.2946 10 13.4155 10 13.6552V18.411C10 19.2682 10 19.6971 10.1805 19.9552C10.3382 20.1806 10.5814 20.331 10.8535 20.3712C11.1651 20.4172 11.5487 20.2257 12.3154 19.8424L13.1154 19.4424C13.4365 19.2819 13.5966 19.2013 13.7139 19.0815C13.8176 18.9756 13.897 18.8485 13.9453 18.7083C14 18.5499 14 18.37 14 18.011V13.6626C14 13.418 14 13.2958 14.0276 13.1807C14.0521 13.0786 14.0926 12.9809 14.1475 12.8915C14.2091 12.7909 14.2952 12.7048 14.4669 12.5331L14.4688 12.5314L15.5001 11.5001M15.5001 11.5001L5 1M15.5001 11.5001L19 15",
                    stroke: "#FBBF24",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                ) })
              }
            ),
            /* @__PURE__ */ jsx("label", { className: "ml-2", children: "Clean the filters" })
          ]
        }
      )
    ] }),
    viewFilterList && /* @__PURE__ */ jsx("div", { className: "fixed top-0 left-0 flex flex-col justify-center items-center h-[100svh] w-[100svw] backdrop-blur z-10", children: /* @__PURE__ */ jsxs("article", { className: "flex flex-col items-end bg-zinc-900 p-6 border border-amber-400 rounded ", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: () => setViewFilterList(void 0),
          className: "mb-4",
          mark: true,
          children: "Close"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 m-auto gap-4 max-h-[70svh] max-w-[50svw] overflow-y-auto", children: viewFilterList.list.map((item) => /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            name: item,
            defaultChecked: filters.byLangs.includes(item),
            onChange: applyFilter(viewFilterList.filter)
          }
        ),
        " ",
        item.toUpperCase()
      ] }, item)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "flex flex-col", children: [
      projects.map((project, index) => /* @__PURE__ */ jsx(
        ProjectCard,
        {
          setModal,
          project
        },
        `project_${index}`
      )),
      modal && /* @__PURE__ */ jsx(ModalProject, { modal, closeModal })
    ] })
  ] }) : /* @__PURE__ */ jsx("h2", { className: "mt-[10svh] sm:text-base md:text-lg xl:text-xl 2xl:text-2xl ", children: "Loading data from Github, please be patient..." });
}

const $$Astro = createAstro();
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portfolio;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="min-h-[100svh] w-full grid place-content-center">${renderComponent($$result2, "Portfolio", Portfolio, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Documents/Proyectos/chrisvdev.github.io/src/components/Portfolio.jsx", "client:component-export": "default" })}</section>${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "D:/Documents/Proyectos/chrisvdev.github.io/src/pages/portfolio.astro", void 0);

const $$file = "D:/Documents/Proyectos/chrisvdev.github.io/src/pages/portfolio.astro";
const $$url = "/portfolio";

export { $$Portfolio as default, $$file as file, $$url as url };
