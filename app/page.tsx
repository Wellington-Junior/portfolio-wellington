import { ProjectGallery } from "./ProjectGallery";
import { BuildShowcase } from "./BuildShowcase";
import { SiteNavigation } from "./SiteNavigation";

const services = [
  {
    number: "01",
    title: "Landing pages",
    text: "Para negócios e profissionais que querem divulgar uma oferta, campanha ou lançamento e receber contatos.",
    includes: "Pode incluir apresentação da oferta, benefícios, chamadas para ação e contato pelo WhatsApp.",
  },
  {
    number: "02",
    title: "Sites institucionais",
    text: "Para empresas e profissionais que precisam apresentar seus serviços e transmitir confiança online.",
    includes: "Pode incluir informações sobre o negócio, serviços, portfólio e canais de contato.",
  },
  {
    number: "03",
    title: "Interfaces front-end",
    text: "Para projetos que precisam transformar uma ideia ou um layout em uma interface para a web.",
    includes: "Pode incluir desenvolvimento com React, adaptação para celular e atenção à navegação e à acessibilidade.",
  },
];

const process = [
  ["01", "Descoberta", "Entendo o negócio, o público e o objetivo principal do site."],
  ["02", "Direção", "Organizo conteúdo e visual para comunicar valor com clareza."],
  ["03", "Desenvolvimento", "Construo uma experiência rápida, responsiva e acessível."],
  ["04", "Publicação", "Reviso os detalhes e coloco o projeto no ar."],
];

const technologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git & GitHub",
];

const caseStudies = [
  {
    number: "CASE 01",
    name: "Mania de Doce e Cia",
    lead: "Uma presença digital doce na aparência e direta na experiência.",
    challenge: "Organizar um catálogo variado sem perder a identidade artesanal da marca.",
    solution: "Arquitetura clara, visual responsivo e caminhos rápidos para conhecer os produtos e pedir informações.",
    technologies: ["React", "JavaScript", "CSS", "Responsivo"],
    href: "https://maniadedoceecia.com.br/",
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wellington Junior",
    url: "https://www.wellingtonjunior.dev/",
    jobTitle: "Desenvolvedor Front-end",
    sameAs: [
      "https://github.com/Wellington-Junior",
      "https://www.linkedin.com/in/wellington-junior-85ba93221/",
      "https://www.instagram.com/wj.dev/",
    ],
    knowsAbout: ["React", "Next.js", "TypeScript", "Web Design", "Front-end Development"],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <SiteNavigation />

      <section className="hero section-shell" id="inicio">
        <div className="hero-atmosphere" aria-hidden="true">
          <div className="hero-grid" />
          <div className="hero-cursor-glow" />
          <div className="hero-monogram">WJ</div>
          <i className="blueprint-node node-one" /><i className="blueprint-node node-two" /><i className="blueprint-node node-three" />
          <span className="blueprint-line line-one" /><span className="blueprint-line line-two" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow"><span /> Disponível para novos projetos</p>
          <h1>
            <span className="hero-line"><span>Sites que fazem seu</span></span>
            <span className="hero-line hero-line-second"><span>negócio ser <em>escolhido.</em></span></span>
          </h1>
          <p className="hero-intro hero-enter hero-enter-one">
            Sou Wellington Junior, desenvolvedor front-end no Rio de Janeiro. Planejo e construo
            sites e interfaces para empresas e profissionais, unindo comunicação clara,
            design e desenvolvimento responsivo.
          </p>
          <div className="hero-actions hero-enter hero-enter-two">
            <a
              className="button button-primary"
              href="https://w.app/wellingtonjunior"
              target="_blank"
              rel="noopener noreferrer"
            >
              Orçar pelo WhatsApp <Arrow />
            </a>
            <a className="text-link" href="#projeto">Conhecer meu trabalho <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <a className="hero-project" href="https://maniadedoceecia.com.br/" target="_blank" rel="noreferrer">
          <div className="browser-frame">
            <div className="browser-top"><i /><i /><i /><span>maniadedoceecia.com.br</span></div>
            <img src="/mania-hero.png" alt="Página inicial do site Mania de Doce e Cia" />
          </div>
          <div className="project-float">
            <span>Projeto em produção</span>
            <strong>Mania de Doce e Cia <Arrow /></strong>
          </div>
        </a>
      </section>

      <section className="proof-strip" aria-label="Destaques profissionais">
        <div><strong>01</strong><span>Projeto real<br />publicado</span></div>
        <div><strong>100%</strong><span>Responsivo<br />e sob medida</span></div>
        <div><strong>RJ</strong><span>Atendimento local<br />e remoto</span></div>
      </section>

      <section className="project-section section-shell" id="projeto">
        <div className="section-heading">
          <div>
            <p className="kicker">Projeto selecionado</p>
            <h2>Trabalho real.<br /><em>Resultado visível.</em></h2>
          </div>
          <p>Um site pensado do conteúdo à publicação para apresentar produtos, ocasiões e facilitar o contato com clientes.</p>
        </div>

        {caseStudies.map((study) => <article className="case-study" key={study.name}>
          <ProjectGallery />
          <div className="case-copy">
            <p className="case-number">{study.number}</p>
            <h3>{study.name}</h3>
            <p className="case-lead">{study.lead}</p>
            <div className="case-detail">
              <span>Desafio</span>
              <p>{study.challenge}</p>
            </div>
            <div className="case-detail">
              <span>Solução</span>
              <p>{study.solution}</p>
            </div>
            <div className="tag-list">{study.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <a className="button button-dark" href={study.href} target="_blank" rel="noreferrer">
              Visitar o site <Arrow />
            </a>
          </div>
        </article>)}
      </section>

      <BuildShowcase />

      <section className="services-section section-shell" id="servicos">
        <div className="section-heading compact">
          <div>
            <p className="kicker">Como posso ajudar</p>
            <h2>Do seu negócio<br /><em>para a tela.</em></h2>
          </div>
          <p>Design e desenvolvimento trabalhando juntos para comunicar bem e gerar confiança.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p><strong>Para quem:</strong> {service.text}</p>
              <p><strong>O que pode incluir:</strong> {service.includes}</p>
              <div className="service-arrow" aria-hidden="true">↗</div>
            </article>
          ))}
        </div>
        <div className="services-contact">
          <div>
            <h3>Como começamos?</h3>
            <p>Me conte pelo WhatsApp sobre seu negócio, o que você precisa e o objetivo do projeto. A partir dessa conversa, alinhamos o escopo e os próximos passos para uma proposta.</p>
          </div>
          <a className="text-link" href="https://w.app/wellingtonjunior" target="_blank" rel="noopener noreferrer">Conversar sobre meu projeto <Arrow /></a>
        </div>
      </section>

      <div className="kinetic-strip" aria-hidden="true">
        <div>DESIGN · CÓDIGO · NEGÓCIOS · EXPERIÊNCIA · DESIGN · CÓDIGO · NEGÓCIOS · EXPERIÊNCIA ·</div>
      </div>

      <section className="process-section section-shell">
        <div className="process-intro">
          <p className="kicker">Meu processo</p>
          <h2>Clareza em<br />cada <em>etapa.</em></h2>
          <p>Você acompanha o projeto do início ao lançamento, sabendo o que acontece e por quê.</p>
        </div>
        <ol className="process-list">
          {process.map(([number, title, text]) => (
            <li key={number} data-reveal-step>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-section section-shell" id="sobre">
        <div className="about-main">
          <p className="kicker light">Sobre mim</p>
          <div className="about-identity">
            <img className="about-photo" src="/wellington-junior.jpg" alt="Wellington Junior" />
            <h2>Desenvolvimento com visão de <em>negócio.</em></h2>
          </div>
          <p>Sou Wellington Junior, desenvolvedor front-end no Rio de Janeiro. Crio landing pages, sites institucionais e interfaces web usando React, Next.js, TypeScript e JavaScript. No projeto Mania de Doce e Cia, cuidei da interface até a publicação do site.</p>
          <div className="social-links">
            <a href="https://github.com/Wellington-Junior" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="https://www.linkedin.com/in/wellington-junior-85ba93221/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://www.instagram.com/wj.dev/" target="_blank" rel="noreferrer">Instagram <Arrow /></a>
          </div>
        </div>
        <div className="tech-panel">
          <span className="tech-caption">Tecnologias selecionadas</span>
          <div className="tech-list">
            {technologies.map((tech, index) => <span key={tech}><i>{String(index + 1).padStart(2, "0")}</i>{tech}</span>)}
          </div>
        </div>
      </section>

      <section className="faq-section section-shell" aria-labelledby="faq-title">
        <div>
          <p className="kicker">Dúvidas comuns</p>
          <h2 id="faq-title">Antes de <em>começar.</em></h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>Que tipo de projeto você desenvolve?</summary>
            <p>Landing pages, sites institucionais e interfaces front-end para negócios e profissionais.</p>
          </details>
          <details>
            <summary>Como começa um projeto?</summary>
            <p>Conversamos sobre o negócio, o que você precisa e o objetivo do projeto. Em seguida, alinhamos o escopo e os próximos passos para uma proposta.</p>
          </details>
          <details>
            <summary>Quais tecnologias você utiliza?</summary>
            <p>Entre as tecnologias com que trabalho estão React, Next.js, TypeScript, JavaScript, HTML, CSS e Tailwind CSS.</p>
          </details>
        </div>
      </section>

      <section className="contact-section section-shell" id="contato">
        <p className="kicker">Tem um projeto em mente?</p>
        <h2>Vamos colocar sua ideia <em>no ar.</em></h2>
        <p>Conte um pouco sobre seu negócio. Eu respondo com os próximos passos.</p>
        <a className="button button-primary contact-whatsapp" href="https://w.app/wellingtonjunior" target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp <Arrow /></a>
        <a className="contact-email" href="mailto:wellingtonjunior.dev@gmail.com?subject=Quero%20criar%20um%20site">
          wellingtonjunior.dev@gmail.com <Arrow />
        </a>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#inicio">WJ<span>.</span>dev</a>
        <p>© 2026 Wellington Junior. Desenvolvido com atenção aos detalhes.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
