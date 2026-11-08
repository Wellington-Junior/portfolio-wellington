export type CaseStudy = {
  name: string;
  domain: string;
  caption: string;
  contain: boolean;
  screens: [{ label: string; src: string; alt: string }, ...{ label: string; src: string; alt: string }[]];
  lead: string;
  challenge: string;
  solution: string;
  technologies: string[];
  href: string;
};

export const caseStudies = [
  {
    contain: false,
    domain: "maniadedoceecia.com.br",
    caption: "Web design · Front-end · 2026",
    screens: [
      { label: "Início", src: "/mania-hero.png", alt: "Página inicial do site Mania de Doce e Cia" },
      { label: "Catálogo", src: "/mania-catalogo.png", alt: "Catálogo de produtos do site Mania de Doce e Cia" },
      { label: "Contato", src: "/mania-contato.png", alt: "Área de contato do site Mania de Doce e Cia" },
    ],
    name: "Mania de Doce e Cia",
    lead: "Uma presença digital doce na aparência e direta na experiência.",
    challenge: "Organizar um catálogo variado sem perder a identidade artesanal da marca.",
    solution: "Catálogo de produtos com mensagens de WhatsApp específicas, apresentação da confeitaria, perguntas frequentes e orientações para encomendas.",
    technologies: ["React", "JavaScript", "CSS", "Responsivo"],
    href: "https://maniadedoceecia.com.br/",
  },
  {
    contain: true,
    domain: "arte-pra-viver-expositores.vercel.app",
    caption: "Front-end · Back-end · Supabase",
    screens: [
      { label: "Início", src: "/arte-case-inicio.png", alt: "Página inicial do Espaço Arte pra Viver" },
      { label: "Cadastro", src: "/arte-case-cadastro.png", alt: "Primeira etapa do cadastro de expositores do Espaço Arte pra Viver" },
    ],
    name: "Espaço Arte pra Viver",
    lead: "Uma plataforma para aproximar marcas autorais de feiras e encontros criativos.",
    challenge: "Apresentar o espaço e tornar mais claro o caminho para marcas interessadas em participar.",
    solution: "Desenvolvimento do front-end e do back-end com Supabase, apresentação do espaço e cadastro em etapas para novas marcas e expositores já cadastrados.",
    technologies: ["Front-end", "Back-end", "Supabase"],
    href: "https://arte-pra-viver-expositores.vercel.app/",
  },
] satisfies CaseStudy[];
