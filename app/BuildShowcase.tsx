"use client";

import { useEffect, useRef, useState } from "react";

export function BuildShowcase() {
  const [run, setRun] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const updateGlow = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--glow-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--glow-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <section ref={sectionRef} className="build-section section-shell" aria-labelledby="build-title">
      <div className="build-copy">
        <p className="kicker">Por trás da interface</p>
        <h2 id="build-title">Código que vira <em>experiência.</em></h2>
        <p>
          Cada decisão visual também é uma decisão de desenvolvimento: estrutura,
          responsividade e clareza trabalhando para o mesmo objetivo.
        </p>
        <div className="build-stack" aria-label="Tecnologias usadas na demonstração">
          <span>React</span><span>TypeScript</span><span>CSS</span>
        </div>
      </div>

      <div className={`build-demo${isVisible ? " is-running" : ""}`} key={`${run}-${isVisible}`} onPointerMove={updateGlow}>
        <div className="build-glow" aria-hidden="true" />
        <div className="build-toolbar">
          <div className="build-status"><i /> Construindo interface</div>
          <button type="button" onClick={() => setRun((value) => value + 1)} aria-label="Repetir animação de desenvolvimento">
            Repetir <span aria-hidden="true">↻</span>
          </button>
        </div>

        <div className="build-workspace">
          <div className="code-editor" aria-label="Código React sendo escrito">
            <div className="editor-tab"><span>●</span> projeto.tsx</div>
            <pre aria-hidden="true">
              <code>
                <span className="code-line code-line-1"><i>01</i><b>const</b> projeto = &#123;</span>
                <span className="code-line code-line-2"><i>02</i>  objetivo: <em>&quot;gerar contatos&quot;</em>,</span>
                <span className="code-line code-line-3"><i>03</i>  experiência: <em>&quot;clara e rápida&quot;</em>,</span>
                <span className="code-line code-line-4"><i>04</i>&#125;;</span>
                <span className="code-line code-line-5"><i>05</i></span>
                <span className="code-line code-line-6"><i>06</i><b>return</b> &lt;<strong>Site</strong> negócio=&#123;projeto&#125; /&gt;;</span>
              </code>
            </pre>
            <div className="editor-cursor" aria-hidden="true" />
          </div>

          <div className="live-preview" aria-label="Interface surgindo a partir do código">
            <div className="preview-browser">
              <span /><span /><span />
              <small>prévia ao vivo</small>
            </div>
            <div className="preview-page">
              <div className="preview-nav"><b>NEGÓCIO.</b><i /><i /><button type="button" tabIndex={-1}>Contato</button></div>
              <div className="preview-hero">
                <small>SUA PRESENÇA DIGITAL</small>
                <h3>Uma ideia.<br /><em>Bem apresentada.</em></h3>
                <p>Estratégia, design e tecnologia em uma experiência clara.</p>
                <span>Conhecer o projeto ↗</span>
              </div>
              <div className="preview-cards"><i /><i /><i /></div>
            </div>
          </div>
        </div>
        <div className="build-progress"><span /></div>
      </div>
    </section>
  );
}
