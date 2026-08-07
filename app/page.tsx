import { BuildShowcase } from "./BuildShowcase";
import { ProjectGallery } from "./ProjectGallery";
import { SiteNavigation } from "./SiteNavigation";

const services = [
  {
    number: "01",
    title: "Landing pages",
    text: "Páginas objetivas para apresentar uma oferta e transformar visitas em contatos.",
  },
  {
    number: "02",
    title: "Sites institucionais",
    text: "Presença digital profissional para negócios que precisam transmitir confiança.",
  },
  {
    number: "03",
    title: "Interfaces front-end",
    text: "Experiências rápidas, responsivas e fáceis de usar em qualquer tela.",
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

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wellington Junior",
    jobTitle: "Desenvolvedor Front-end",
    sameAs: [
      "https://github.com/Wellington-Junior",
      "https://www.linkedin.com/in/wellington-junior-85ba93221/",
      "https://www.instagram.com/housetech.wj/",
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
            Sou Wellington Junior, desenvolvedor front-end no Rio de Janeiro. Crio sites
            rápidos e profissionais para transformar presença digital em novas oportunidades.
          </p>
          <div className="hero-actions hero-enter hero-enter-two">
            <a className="button button-primary" href="mailto:wellingtonjunior.dev@gmail.com?subject=Orçamento%20para%20criação%20de%20site">
              Solicitar um orçamento <Arrow />
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

      <BuildShowcase />

      <section className="project-section section-shell" id="projeto">
        <div className="section-heading">
          <div>
            <p className="kicker">Projeto selecionado</p>
            <h2>Trabalho real.<br /><em>Resultado visível.</em></h2>
          </div>
          <p>Um site pensado do conteúdo à publicação para apresentar produtos, ocasiões e facilitar o contato com clientes.</p>
        </div>

        <div className="case-study">
          <ProjectGallery />
          <div className="case-copy">
            <p className="case-number">CASE 01</p>
            <h3>Mania de Doce e Cia</h3>
            <p className="case-lead">Uma presença digital doce na aparência e direta na experiência.</p>
            <div className="case-detail">
              <span>Desafio</span>
              <p>Organizar um catálogo variado sem perder a identidade artesanal da marca.</p>
            </div>
            <div className="case-detail">
              <span>Solução</span>
              <p>Arquitetura clara, visual responsivo e caminhos rápidos para conhecer os produtos e pedir informações.</p>
            </div>
            <div className="tag-list"><span>React</span><span>JavaScript</span><span>CSS</span><span>Responsivo</span></div>
            <a className="button button-dark" href="https://maniadedoceecia.com.br/" target="_blank" rel="noreferrer">
              Visitar o site <Arrow />
            </a>
          </div>
        </div>
      </section>

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
              <p>{service.text}</p>
              <div className="service-arrow" aria-hidden="true">↗</div>
            </article>
          ))}
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
          <h2>Desenvolvimento com visão de <em>negócio.</em></h2>
          <p>
            Sou desenvolvedor front-end e tenho formação em andamento em Engenharia de Software.
            Meu trabalho combina código, experiência do usuário e comunicação para criar sites
            que não sejam apenas bonitos — sejam úteis para quem contrata e para quem acessa.
          </p>
          <div className="social-links">
            <a href="https://github.com/Wellington-Junior" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="https://www.linkedin.com/in/wellington-junior-85ba93221/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://www.instagram.com/housetech.wj/" target="_blank" rel="noreferrer">Instagram <Arrow /></a>
          </div>
        </div>
        <div className="tech-panel">
          <span className="tech-caption">Tecnologias selecionadas</span>
          <div className="tech-list">
            {technologies.map((tech, index) => <span key={tech}><i>{String(index + 1).padStart(2, "0")}</i>{tech}</span>)}
          </div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contato">
        <p className="kicker">Tem um projeto em mente?</p>
        <h2>Vamos colocar sua ideia <em>no ar.</em></h2>
        <p>Conte um pouco sobre seu negócio. Eu respondo com os próximos passos.</p>
        <a className="contact-email" href="mailto:wellingtonjunior.dev@gmail.com?subject=Quero%20criar%20um%20site">
          wellingtonjunior.dev@gmail.com <Arrow />
        </a>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#inicio">WJ<span>.</span></a>
        <p>© 2026 Wellington Junior. Desenvolvido com atenção aos detalhes.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
