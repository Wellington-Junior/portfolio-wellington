"use client";

import { useState } from "react";

type ProjectGalleryProps = {
  title: string;
  domain: string;
  caption: string;
  contain?: boolean;
  screens: { label: string; src: string; alt: string }[];
};

export function ProjectGallery({ title, domain, caption, screens, contain = false }: ProjectGalleryProps) {
  const [activeScreen, setActiveScreen] = useState(0);
  const screen = screens[activeScreen];

  return <div className={`case-visual project-gallery${contain ? " is-contain" : ""}`}>
    <div className="gallery-tabs" role="group" aria-label={`Telas do projeto ${title}`}>
      {screens.map((item, index) => <button key={item.label} type="button" aria-pressed={activeScreen === index} className={activeScreen === index ? "is-active" : ""} onClick={() => setActiveScreen(index)}>{item.label}</button>)}
    </div>
    <div className="gallery-browser">
      <div className="gallery-browser-top"><i /><i /><i /><span>{domain}</span></div>
      <img key={screen.src} className="project-shot" src={screen.src} alt={screen.alt} />
    </div>
    <span className="case-label">{caption}</span>
  </div>;
}
