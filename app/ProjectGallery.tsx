"use client";

import { useState } from "react";

const screens = [
  { label: "Início", src: "/mania-hero.png", alt: "Página inicial do site Mania de Doce e Cia" },
  { label: "Catálogo", src: "/mania-catalogo.png", alt: "Catálogo de produtos do site Mania de Doce e Cia" },
  { label: "Contato", src: "/mania-contato.png", alt: "Área de contato do site Mania de Doce e Cia" },
];

export function ProjectGallery() {
  const [activeScreen, setActiveScreen] = useState(0);
  const screen = screens[activeScreen];

  return <div className="case-visual project-gallery">
    <div className="gallery-tabs" role="tablist" aria-label="Telas do projeto Mania de Doce e Cia">
      {screens.map((item, index) => <button key={item.label} type="button" role="tab" aria-selected={activeScreen === index} className={activeScreen === index ? "is-active" : ""} onClick={() => setActiveScreen(index)}>{item.label}</button>)}
    </div>
    <div className="gallery-browser">
      <div className="gallery-browser-top"><i /><i /><i /><span>maniadedoceecia.com.br</span></div>
      <img key={screen.src} className="project-shot" src={screen.src} alt={screen.alt} />
    </div>
    <span className="case-label">Web design · Front-end · 2026</span>
  </div>;
}
