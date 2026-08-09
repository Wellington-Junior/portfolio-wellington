"use client";

import { useEffect, useState } from "react";

const navigation = [
  ["projeto", "Projeto"],
  ["servicos", "Serviços"],
  ["sobre", "Sobre"],
];

export function SiteNavigation() {
  const [activeSection, setActiveSection] = useState("inicio");

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  useEffect(() => {
    const root = document.documentElement;
    let scrollFrame = 0;
    let pointerFrame = 0;

    const updateProgress = () => {
      if (scrollFrame) return;

      scrollFrame = window.requestAnimationFrame(() => {
        const available = root.scrollHeight - window.innerHeight;
        const progress = available > 0 ? window.scrollY / available : 0;

        root.style.setProperty(
          "--scroll-progress",
          String(Math.min(1, Math.max(0, progress)))
        );

        scrollFrame = 0;
      });
    };

    const updatePointer = (event: PointerEvent) => {
      if (pointerFrame) {
        window.cancelAnimationFrame(pointerFrame);
      }

      const { clientX, clientY } = event;

      pointerFrame = window.requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${clientX}px`);
        root.style.setProperty("--pointer-y", `${clientY}px`);
        pointerFrame = 0;
      });
    };

    const sections = ["inicio", "projeto", "servicos", "sobre"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0, 0.2, 0.6],
      }
    );

    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    document
      .querySelectorAll("[data-reveal-step]")
      .forEach((step) => stepObserver.observe(step));

    updateProgress();

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      sectionObserver.disconnect();
      stepObserver.disconnect();

      window.cancelAnimationFrame(scrollFrame);
      window.cancelAnimationFrame(pointerFrame);

      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span />
      </div>

      <header className="site-header">
        <a
          className="brand"
          href="#inicio"
          onClick={(event) => handleNavigation(event, "inicio")}
          aria-label="Wellington Junior — início"
        >
          WJ<span>.</span>dev
        </a>

        <nav aria-label="Navegação principal">
          {navigation.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(event) => handleNavigation(event, id)}
              className={activeSection === id ? "is-active" : ""}
              aria-current={activeSection === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          className="header-cta"
          href="https://w.app/wellingtonjunior"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vamos conversar <span aria-hidden="true">↗</span>
        </a>
      </header>
    </>
  );
}