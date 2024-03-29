/* empty css                */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, e as renderComponent, f as renderHead } from './chunk.4e26b078.js';
/* empty css                */import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import axios from 'axios';
/* empty css                */
const $$Astro$a = createAstro();
const $$NavBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$NavBtn;
  const { to } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(to, "href")} class="flex border h-6 border-transparent hover:border-b-amber-400 hover:border-t-transparent hover:text-slate-50 px-2 transition-all navBtn" data-astro-cid-fqxutwbz>${renderSlot($$result, $$slots["default"])}</a>`;
}, "D:/Documents/Proyectos/chrisvdev.github.io/src/components/nav/NavBtn.astro", void 0);

const $$Astro$9 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav class="fixed flex justify-center top-5 h-fit w-full z-50 nav" data-astro-cid-l3rxwkef><div class="h-10 w-[.15rem] bg-gradient-to-b from-transparent via-amber-300 to-transparent" data-astro-cid-l3rxwkef></div><div class="navBtns flex justify-around items-center overflow-hidden w-64 md:w-96 bg-[#f8fafc15] filter backdrop-blur-sm" data-astro-cid-l3rxwkef>${renderComponent($$result, "NavBtn", $$NavBtn, { "to": "/#", "data-astro-cid-l3rxwkef": true }, { "default": ($$result2) => renderTemplate`Home` })}${renderComponent($$result, "NavBtn", $$NavBtn, { "to": "/#about", "data-astro-cid-l3rxwkef": true }, { "default": ($$result2) => renderTemplate`About me` })}${renderComponent($$result, "NavBtn", $$NavBtn, { "to": "/portfolio", "data-astro-cid-l3rxwkef": true }, { "default": ($$result2) => renderTemplate`Portfolio` })}${renderComponent($$result, "NavBtn", $$NavBtn, { "to": "/#contact", "data-astro-cid-l3rxwkef": true }, { "default": ($$result2) => renderTemplate`Contact` })}</div><div class="h-10 w-[.15rem] bg-gradient-to-b from-transparent via-amber-300 to-transparent" data-astro-cid-l3rxwkef></div></nav>`;
}, "D:/Documents/Proyectos/chrisvdev.github.io/src/components/nav/Nav.astro", void 0);

const $$Astro$8 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MainLayout;
  return renderTemplate`<html lang="en" data-astro-cid-ouamjn2i><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Hi! My name is Christian, a full stack developer skilled in both front-end and back-end web development. Proficient in a variety of programming languages and experienced with deploying web applications to the cloud."><link rel="preload" href="https://use.typekit.net/yij4raz.css" as="style"><link rel="stylesheet" href="https://use.typekit.net/yij4raz.css"><title>Christian's web site...</title>${renderHead()}</head><body class="bg-zinc-950 text-zinc-300 font-futura-pt subpixel-antialiased scroll-smooth noMobile:snap-y noMobile:snap-mandatory" data-astro-cid-ouamjn2i>${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-ouamjn2i": true })}${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "D:/Documents/Proyectos/chrisvdev.github.io/src/layouts/MainLayout.astro", void 0);

const $$Astro$7 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Title;
  const SVGSize = 24;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col w-max h-max" data-astro-cid-zfufvvig><h1 class="text-center text-6xl sm:text-4xl md:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-500 py-2" data-astro-cid-zfufvvig>
Christian Villegas
</h1><div class="flex flex-row justify-center items-center sm:mb-2 md:mb-3" data-astro-cid-zfufvvig><div class="border border-amber-600 h-[2px] w-[var(--barSize)] mx-2 barAnimation" data-astro-cid-zfufvvig></div><h2 class="text-center sm:text-base md:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-amber-700" data-astro-cid-zfufvvig>
FULL STACK DEVELOPER
</h2><div class="border border-amber-600 h-[2px] w-[var(--barSize)] mx-2 barAnimation" data-astro-cid-zfufvvig></div></div><div class="flex w-full place-content-center" data-astro-cid-zfufvvig><a href="https://www.linkedin.com/in/chrisvdev/?locale=en_US" target="_blank" rel="noopener noreferrer" class="flex place-content-center place-items-center" data-astro-cid-zfufvvig><svg${addAttribute(SVGSize, "width")}${addAttribute(SVGSize, "height")} version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="fill-zinc-400 stroke-zinc-500 hover:fill-sky-600 hover:stroke-sky-600 hover:scale-110 active:scale-95 transition-all iconGlow" data-astro-cid-zfufvvig><title>linkedin</title><path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z" data-astro-cid-zfufvvig></path></svg></a><a href="https://github.com/chrisvdev" target="_blank" rel="noopener noreferrer" class="flex place-content-center place-items-center ml-8" data-astro-cid-zfufvvig><svg${addAttribute(SVGSize, "width")}${addAttribute(SVGSize, "height")} version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="fill-zinc-400 stroke-zinc-500 hover:fill-white hover:stroke-white hover:scale-110 active:scale-95 transition-all iconGlow" data-astro-cid-zfufvvig><title>github</title><path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z" data-astro-cid-zfufvvig></path></svg></a><a href="/CV-English.pdf" target="_blank" rel="noopener noreferrer" class="flex place-content-center place-items-center ml-8" data-astro-cid-zfufvvig><p class="font-medium text-2xl text-zinc-400 hover:text-zinc-300 hover:scale-110 active:scale-95 transition-all iconGlow" title="My CV" data-astro-cid-zfufvvig>
CV
</p></a><a href="https://www.twitch.tv/chrisvdev" target="_blank" rel="noopener noreferrer" class="flex place-content-center place-items-center ml-8" data-astro-cid-zfufvvig><svg${addAttribute(SVGSize, "width")}${addAttribute(SVGSize, "height")} version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="fill-zinc-400 stroke-zinc-500 hover:fill-violet-700 hover:stroke-violet-700 hover:scale-110 active:scale-95 transition-all iconGlow" data-astro-cid-zfufvvig><title>Twitch</title><path xmlns="http://www.w3.org/2000/svg" d="M26.711 14.929l-4.284 4.284h-4.285l-3.749 3.749v-3.749h-4.82v-16.067h17.138zM8.502 1.004l-5.356 5.356v19.279h6.427v5.356l5.356-5.356h4.284l9.641-9.64v-14.996zM21.356 6.895h2.142v6.427h-2.142zM15.464 6.895h2.143v6.427h-2.144z" data-astro-cid-zfufvvig></path></svg></a></div></div>`;
}, "D:/Documents/Proyectos/chrisvdev.github.io/src/components/Title.astro", void 0);

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<div id="header" class="h-screen w-full overflow-hidden section" data-astro-cid-3ef6ksr2><div class="flex w-[100svw] h-[100svh] place-items-center -z-10 b opacity-25 bg-cover bg-fixed headerBg" data-astro-cid-3ef6ksr2></div><header class="grid grid-cols-1 w-screen h-screen place-items-center relative -top-full bg-transparent z-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" data-astro-cid-3ef6ksr2>${renderComponent($$result, "Title", $$Title, { "data-astro-cid-3ef6ksr2": true })}</header></div>`;
}, "D:/Documents/Proyectos/chrisvdev.github.io/src/components/Header.astro", void 0);

const $$Astro$5 = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Container;
  const { id, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`min-h-[100svh] w-full noMobile:snap-start ${className}`, "class")}>${renderSlot($$result, $$slots["default"])}</section>`;
}, "D:/Documents/Proyectos/chrisvdev.github.io/src/components/Container.astro", void 0);

const $$Astro$4 = createAstro();
const $$LinkButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`border h-8 w-fit border-transparent hover:border-b-amber-400 hover:border-t-transparent hover:text-slate-50 px-2 transition-all text-lg ${className}`, "class")} target="_blank" rel="noopener noreferrer">${renderSlot($$result, $$slots["default"])}</a>`;
}, "D:/Documents/Proyectos/chrisvdev.github.io/src/components/LinkButton.astro", void 0);

const $$Astro$3 = createAstro();
const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AboutMe;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "id": "about", "className": "grid grid-cols-1 place-items-center" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<article class="flex flex-col h-full w-fit"><div class="h-full grid sm:grid-cols-1 xl:grid-cols-2 place-items-center"><div><div class="flex h-0"><div class="relative h-[12.73svh] w-[12.73svw] bg-teal-200 blur-3xl opacity-40"></div><div class="relative sm:top-[14rem] md:top-[22rem] sm:left-[10rem] md:left-[18rem] h-[12.73svh] w-[12.73svw] -translate-x-[calc(12.73svw_*_1)] bg-teal-500 blur-3xl opacity-40"></div></div><div class="flex sm:w-64 sm:h-64 md:w-96 md:h-96 overflow-hidden m-10 rounded shadow-md shadow-orange-400 hover:shadow-orange-300 rotate-6 hover:rotate-0 transition-all"><img class="object-cover" src="https://res.cloudinary.com/dgg07ocbn/image/upload/fl_awebp/w_480,h_480,c_fill/v1674355663/Landing/me_mjun2q.png" alt=""></div></div><div class="m-10 h-full flex flex-col justify-center"><div class="flex -z-10 h-0"><div class="relative left-[100%] h-[19.09svh] w-[19.09svw] -translate-x-[calc(12.73svw_*_2)] bg-orange-400 blur-3xl opacity-25"></div><div class="relative top-[5rem] left-[75%] h-[19.09svh] w-[19.09svw] -translate-x-[calc(12.73svw_*_3)] bg-teal-600 blur-3xl opacity-25"></div></div><p class="dwarf:text-base sm:text-lg 2xl:text-xl mb-2">
I am a Full Stack Web Developer specializing in the development of
          applications using JavaScript, TypeScript, React, Node, and both
          relational databases like PostgreSQL and non-relational databases like
          MongoDB.
</p><p class="dwarf:text-base sm:text-lg 2xl:text-xl mb-2">
I am deeply passionate about technology. I enjoy continually expanding
          my stack by incorporating new tools to build better solutions and
          honing my soft skills such as communication, active listening, etc.,
          in order to enhance my teamwork beyond the knowledge provided by agile
          methodologies.
</p><p class="dwarf:text-base sm:text-lg 2xl:text-xl mb-2">
In my future endeavors, I plan to delve into areas of interest such as
          Machine Learning, CI/CD, Cloud, etc.
</p><p class="dwarf:text-base sm:text-lg 2xl:text-xl mb-2">
I host my own Twitch channel at ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "https://twitch.tv/chrisvdev", "className": "px-0" }, { "default": ($$result3) => renderTemplate`
twitch.tv/chrisvdev
` })}, where viewers can see me working on projects alongside
          the community.
</p><p class="dwarf:text-base sm:text-lg 2xl:text-xl mb-2">
As an IT professional, I also possess a solid understanding of and can
          develop infrastructures that support applications. Additionally, as a
          hobbyist photographer, I strive to comprehend how to create improved
          UI/UX experiences.
</p></div></div></article>` })}`;
}, "D:/Documents/Proyectos/chrisvdev.github.io/src/components/AboutMe.astro", void 0);

const $$Astro$2 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "id": "contact", "className": "flex flex-col justify-center items-center" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex -z-10 h-0"><div class="relative left-10 top-32 h-[61.8svh] lg:h-[12.73svh] w-[12.73svw] bg-orange-700 blur-3xl opacity-40"></div><div class="relative left-8 top-32 h-[61.8svh] lg:h-[12.73svh] w-[12.73svw] bg-orange-500 blur-3xl opacity-40"></div><div class="relative right-8 top-32 h-[61.8svh] lg:h-[12.73svh] w-[12.73svw] bg-teal-500 blur-3xl opacity-40"></div><div class="relative right-10 top-32 h-[61.8svh] lg:h-[12.73svh] w-[12.73svw] bg-teal-700 blur-3xl opacity-40"></div></div><h2 class="mb-12 font-medium text-2xl text-center mt-20">
You can contact me through the following ways
</h2><div class="flex mb-12 sm:flex-col md:flex-col lg:flex-row flex-wrap gap-8 justify-center items-center"><article class="flex flex-col items-center border border-amber-400 hover:border-slate-50 rounded my-4 p-6 w-full lg:w-fit transition-all"><div class="flex items-center justify-around content-center h-fit w-fit mb-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg><h4 class="flex font-bold text-lg">Email</h4></div>${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "mailto:chrisvill.2312@gmail.com" }, { "default": ($$result3) => renderTemplate`
chrisvill.2312@gmail.com
` })}</article><article class="flex flex-col items-center border border-amber-400 hover:border-slate-50 rounded my-4 p-6 w-full lg:w-fit transition-all"><div class="flex items-center justify-around content-center h-fit w-fit mb-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M22 3.47059V20.5294C22 20.9194 21.8451 21.2935 21.5693 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47059C3.08056 22 2.70651 21.8451 2.43073 21.5693C2.15494 21.2935 2 20.9194 2 20.5294V3.47059C2 3.08056 2.15494 2.70651 2.43073 2.43073C2.70651 2.15494 3.08056 2 3.47059 2H20.5294C20.9194 2 21.2935 2.15494 21.5693 2.43073C21.8451 2.70651 22 3.08056 22 3.47059ZM7.88235 9.64706H4.94118V19.0588H7.88235V9.64706ZM8.14706 6.41177C8.14861 6.18929 8.10632 5.96869 8.02261 5.76255C7.93891 5.55642 7.81542 5.36879 7.65919 5.21039C7.50297 5.05198 7.31708 4.92589 7.11213 4.83933C6.90718 4.75277 6.68718 4.70742 6.46471 4.70588H6.41177C5.95934 4.70588 5.52544 4.88561 5.20552 5.20552C4.88561 5.52544 4.70588 5.95934 4.70588 6.41177C4.70588 6.86419 4.88561 7.29809 5.20552 7.61801C5.52544 7.93792 5.95934 8.11765 6.41177 8.11765C6.63426 8.12312 6.85565 8.0847 7.06328 8.00458C7.27092 7.92447 7.46074 7.80422 7.62189 7.65072C7.78304 7.49722 7.91237 7.31346 8.00248 7.10996C8.09259 6.90646 8.14172 6.6872 8.14706 6.46471V6.41177ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7799 9.77345C13.2576 10.0397 12.8143 10.4383 12.4941 10.9294H12.4118V9.64706H9.64706V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.3681 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"></path></svg><h4 class="flex font-bold text-lg">LinkedIn</h4></div>${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "https://www.linkedin.com/in/chrisvill2312/" }, { "default": ($$result3) => renderTemplate`
/chrisvill2312
` })}</article><article class="flex flex-col items-center border border-amber-400 hover:border-slate-50 rounded my-4 p-6 w-full lg:w-fit transition-all"><div class="flex items-center justify-around content-center h-fit w-fit mb-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path></svg><h4 class="flex font-bold text-lg">Telegram</h4></div>${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "https://t.me/chrisvill23" }, { "default": ($$result3) => renderTemplate`@chrisvill23` })}</article><article class="flex flex-col items-center border border-amber-400 hover:border-slate-50 rounded my-4 p-6 w-full lg:w-fit transition-all"><div class="flex items-center justify-around content-center h-fit w-fit mb-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"></path></svg><h4 class="flex font-bold text-lg">WhatsApp</h4></div>${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "https://api.whatsapp.com/send?phone=5492235306180" }, { "default": ($$result3) => renderTemplate`
Send a message
` })}</article></div>` })}`;
}, "D:/Documents/Proyectos/chrisvdev.github.io/src/components/Contact.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`bg-zinc-800 min-h-[25svh] w-full flex flex-wrap justify-evenly items-center gap-12 p-8 ${className}`, "class")}><article class="flex flex-col justify-center items-center"><a href="#" class="mb-1 font-semibold">Christian Villegas</a><h4 class="mb-1 text-sm text-center">Full stack developer</h4><a href="https://twitch.com/chrisvdev" target="_blank" rel="noopener noreferrer" class="flex justify-center content-center items-center my-1"><svg width="1.15rem" height="1.15rem" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" class="fill-zinc-300"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>twitch</title><path d="M26.711 14.929l-4.284 4.284h-4.285l-3.749 3.749v-3.749h-4.82v-16.067h17.138zM8.502 1.004l-5.356 5.356v19.279h6.427v5.356l5.356-5.356h4.284l9.641-9.64v-14.996zM21.356 6.895h2.142v6.427h-2.142zM15.464 6.895h2.143v6.427h-2.144z"></path></g></svg><p class="ml-2 text-sm">/ChrisVDev</p></a><a href="https://www.linkedin.com/in/chrisvill2312/" target="_blank" rel="noopener noreferrer" class="flex justify-center content-center items-center my-1"><svg width="1.15rem" height="1.15rem" viewBox="0 0 24 24" id="meteor-icon-kit__solid-linkedin" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-zinc-300"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z"></path></svg><p class="ml-2 text-sm">/chrisvill2312</p></a><a href="https://github.com/chrisvill2312" target="_blank" rel="noopener noreferrer" class="flex justify-center content-center items-center my-1"><svg width="1.15rem" height="1.15rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="fill-zinc-300"><path fill-rule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clip-rule="evenodd"></path></svg><p class="ml-2 text-sm">/chrisvill2312</p></a></article></section>`;
}, "D:/Documents/Proyectos/chrisvdev.github.io/src/components/Footer.astro", void 0);

const filterProjects = (repos) =>
    repos.filter((repo) => repo.tags.includes("portfolio"));

function useGithubRepos (userName = "chrisvdev") {
    const [projects, setProjects] = useState([]);
    const [externalProjects, setExternalProjects] = useState([]);
    useEffect(() => {
        if (projects.length === 0) {
            axios
                .get(`https://api.github.com/users/${userName}/repos`)
                .then((response) => {
                    const processing = response.data.map((e) => {
                        const clon = structuredClone(e);
                        return axios.get(clon.languages_url).then((response) => ({
                            userName: userName,
                            langs: response.data,
                            name: clon.name,
                            description: clon.description,
                            updated: clon.created_at,
                            tags: clon.topics,
                            deploy: clon.homepage,
                            github: clon.html_url,
                            preview: `https://res.cloudinary.com/dgg07ocbn/image/upload/fl_awebp/w_384,h_216,c_scale/v1/Landing/Projects/${clon.name + (clon.name.includes(".") ? ".jpg" : "")
                                }`,
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
    useEffect(() => {
        if (externalProjects.length === 0) {
            axios
                .get(`https://raw.githubusercontent.com/chrisvill2312/chrisvill2312.github.io/Content/content.json`)
                .then((response) => {
                    setExternalProjects(response.data);
                })
                .catch(() => (setExternalProjects([])));
        }
    }, [externalProjects]);

    const updateProjects = () => setProjects([]);

    return [[...projects, ...externalProjects], updateProjects];
}

// https://raw.githubusercontent.com/chrisvill2312/chrisvill2312.github.io/Content/content.json

function useFilteredRepos(
  filters = { byLangs: [], byTech: [] }
) {
  const { byLangs, byTech } = filters;
  const technologies = {};
  const langs = {};
  const [repos] = useGithubRepos();
  console.log(repos);
  repos.forEach((element) => {
    Object.keys(element.langs).forEach((lang) => (langs[lang] = true));
    element.tags
      .filter((element) => element !== "portfolio")
      .forEach((element) => (technologies[element] = true));
  });
  return {
    technologies: Object.keys(technologies).sort(),
    langs: Object.keys(langs).sort(),
    projects: (byLangs.length > 0 || byTech.length > 0 // Si hay algun tipo de filtro activo
      ? repos.filter(
          (repo) =>
            Object.keys(repo.langs).some((element) =>
              byLangs.includes(element)
            ) || // Filtra los repos segun los filtros
            repo.tags.some((element) => byTech.includes(element))
        )
      : repos
    ) // Sino devuelve todo
      .sort((pr1, pr2) => Date.parse(pr2.updated) - Date.parse(pr1.updated)), // siempre ordenado por repo mas nuevo.
    projectsReady: repos.length > 0,
  };
}

function PortfolioBG({ langs, techs, noFixed, className }) {
  const bgItems = [...langs, ...techs].map((item) => item.toUpperCase()).sort(() => Math.ceil(Math.random() * 3) - 2);
  const animations = ["bgA1", "bgA2", "bgA3", "bgA4", "bgA5"];
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `${noFixed ? "" : "fixed top-0 left-0"} h-[100svh] w-[100svw] flex justify-center items-center -z-50 ${className ? className : ""}`,
      children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-24", children: bgItems.map((item, i) => /* @__PURE__ */ jsx(
        "p",
        {
          className: `text-center font-medium text-4xl opacity-0 ${animations[Math.floor(Math.random() * 5)]}`,
          children: item
        },
        `bg-${i}`
      )) })
    }
  );
}

function PortfolioPortal() {
  const { projectsReady, langs, technologies } = useFilteredRepos();
  return /* @__PURE__ */ jsxs("section", { className: "h-[100svh] w-full noMobile:snap-start flex flex-col justify-center items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "/portfolio",
        className: "m-4 cursor-pointer flex flex-col max-w-sm justify-center items-center p-4 border rounded border-amber-500 bg-[#18181bc5] backdrop-blur z-10",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex h-0 -z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "relative -top-8 left-[120%] h-[5rem] w-[5rem] bg-orange-400 blur-3xl opacity-40 animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "relative -left-4 h-[5rem] w-[5rem] -translate-x-[-5rem] bg-teal-600 blur-3xl opacity-40 animate-pulse" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl my-2", children: "Look at my portfolio!" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-center my-2", children: "Click here for a full view of my projects and the technologies that i've used" })
        ]
      }
    ),
    projectsReady ? /* @__PURE__ */ jsx("div", { className: "h-0", children: /* @__PURE__ */ jsx(
      PortfolioBG,
      {
        className: "relative -top-[50svh]",
        langs,
        techs: technologies,
        noFixed: true
      }
    ) }) : void 0
  ] });
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}${renderComponent($$result2, "AboutMe", $$AboutMe, {})}${renderComponent($$result2, "PortfolioPortal", PortfolioPortal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Documents/Proyectos/chrisvdev.github.io/src/components/PortfolioPortal", "client:component-export": "default" })}${renderComponent($$result2, "Contact", $$Contact, {})}${renderComponent($$result2, "Footer", $$Footer, { "className": "noMobile:snap-start" })}` })}`;
}, "D:/Documents/Proyectos/chrisvdev.github.io/src/pages/index.astro", void 0);

const $$file = "D:/Documents/Proyectos/chrisvdev.github.io/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Footer as $, PortfolioBG as P, $$MainLayout as a, index as i, useFilteredRepos as u };
