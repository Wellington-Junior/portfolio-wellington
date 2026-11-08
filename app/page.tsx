import { caseStudies } from "./caseStudies";
import { ArrowIcon } from "./ArrowIcon";
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
    title: "Aplicações web",
    text: "Para negócios que precisam de uma aplicação web, como um sistema de cadastro ou uma área para organizar informações.",
    includes: "Pode incluir interface responsiva, desenvolvimento do back-end e integração com banco de dados, conforme o projeto.",
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
  "Supabase",
  "Git & GitHub",
];




export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wellington Junior",
    url: "https://www.wellingtonjunior.dev/",
    jobTitle: "Desenvolvedor de sites e aplicações web",
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
            Sou Wellington Junior, desenvolvedor web no Rio de Janeiro. Crio sites e aplicações
            para empresas e profissionais, da interface ao back-end e à integração com banco de dados.
          </p>
          <div className="hero-actions hero-enter hero-enter-two">
            <a
              className="button button-primary"
              href="https://wa.me/5521990935410"
              target="_blank"
              rel="noopener noreferrer"
            >
              Orçar pelo WhatsApp <ArrowIcon />
            </a>
            <a className="text-link" href="#projeto">Conhecer meu trabalho <ArrowIcon direction="down" /></a>
          </div>
        </div>

        <a className="hero-project" href="https://maniadedoceecia.com.br/" target="_blank" rel="noreferrer">
          <div className="browser-frame">
            <div className="browser-top"><i /><i /><i /><span>maniadedoceecia.com.br</span></div>
            <img src="/mania-hero.png" alt="Página inicial do site Mania de Doce e Cia" />
          </div>
          <div className="project-float">
            <span>Projeto em produção</span>
            <strong>Mania de Doce e Cia <ArrowIcon /></strong>
          </div>
        </a>
      </section>

      <section className="proof-strip" aria-label="Destaques profissionais">
        <div><strong>{String(caseStudies.length).padStart(2, "0")}</strong><span>{caseStudies.length === 1 ? "Projeto real" : "Projetos reais"}<br />online</span></div>
        <div><strong>100%</strong><span>Responsivo<br />e sob medida</span></div>
        <div><strong>RJ</strong><span>Atendimento local<br />e remoto</span></div>
      </section>

      <section className="project-section section-shell" id="projeto">
        <div className="section-heading">
          <div>
            <p className="kicker">Projetos selecionados</p>
            <h2>Trabalho real.<br /><em>Resultado visível.</em></h2>
          </div>
          <p>Projetos criados para apresentar negócios, conectar pessoas e facilitar o contato.</p>
        </div>

        {caseStudies.map((study, index) => <article className="case-study" key={study.name}>
          <ProjectGallery title={study.name} domain={study.domain} caption={study.caption} screens={study.screens} contain={study.contain} />
          <div className="case-copy">
            <p className="case-number">CASE {String(index + 1).padStart(2, "0")}</p>
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
              Visitar o site <ArrowIcon />
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
              <div className="service-arrow" aria-hidden="true"><ArrowIcon /></div>
            </article>
          ))}
        </div>
        <div className="services-contact">
          <div>
            <h3>Como começamos?</h3>
            <p>Me conte pelo WhatsApp sobre seu negócio, o que você precisa e o objetivo do projeto. A partir dessa conversa, alinhamos o escopo e os próximos passos para uma proposta.</p>
          </div>
          <a className="text-link" href="https://wa.me/5521990935410" target="_blank" rel="noopener noreferrer">Conversar sobre meu projeto <ArrowIcon /></a>
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
          <p>Sou Wellington Junior, desenvolvedor web no Rio de Janeiro. Crio sites e aplicações que ajudam negócios a se apresentar e se conectar com pessoas. Na Mania de Doce e Cia, cuidei da interface até a publicação; no Arte pra Viver, desenvolvi o front-end, o back-end e a integração com Supabase.</p>
          <div className="social-links">
            <a href="https://github.com/Wellington-Junior" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
            <a href="https://www.linkedin.com/in/wellington-junior-85ba93221/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            <a href="https://www.instagram.com/wj.dev/" target="_blank" rel="noreferrer">Instagram <ArrowIcon /></a>
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
            <p>Landing pages, sites institucionais e aplicações web para negócios e profissionais.</p>
          </details>
          <details>
            <summary>Como começa um projeto?</summary>
            <p>Conversamos sobre o negócio, o que você precisa e o objetivo do projeto. Em seguida, alinhamos o escopo e os próximos passos para uma proposta.</p>
          </details>
          <details>
            <summary>O que preciso enviar para começar?</summary>
            <p>Conte sobre seu negócio, o objetivo do projeto e o que você já tem em mente. Na conversa, alinhamos quais conteúdos e informações serão necessários.</p>
          </details>
          <details>
            <summary>O site vai funcionar no celular?</summary>
            <p>Os projetos são desenvolvidos com atenção à adaptação para diferentes tamanhos de tela, incluindo celulares.</p>
          </details>
        </div>
      </section>

      <section className="contact-section section-shell" id="contato">
        <p className="kicker">Tem um projeto em mente?</p>
        <h2>Vamos colocar sua ideia <em>no ar.</em></h2>
        <p>Conte um pouco sobre seu negócio. Eu respondo com os próximos passos.</p>
        <a className="button button-primary contact-whatsapp" href="https://wa.me/5521990935410" target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp <ArrowIcon /></a>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#inicio">WJ<span>.</span>dev</a>
        <p>© 2026 Wellington Junior. Desenvolvido com atenção aos detalhes.</p>
        <a href="#inicio">Voltar ao topo <ArrowIcon direction="up" /></a>
      </footer>
    </main>
  );
}
