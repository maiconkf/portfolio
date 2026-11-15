const START_YEAR = 2012;
export const yearsOfExperience = new Date().getFullYear() - START_YEAR;

export const contact = {
  email: "contato@maiconfurtado.com.br",
  linkedin: "https://www.linkedin.com/in/maiconkf",
  github: "https://www.github.com/maiconkf",
  instagram: "https://www.instagram.com/maiconkf",
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  link: string;
  linkLabel: string;
  tags: string[];
  visual: "quory" | "leplat";
};

export type Experience = {
  date: string;
  company: string;
  img: string;
  role: string;
  about: string;
};

const projectsBase = {
  quory: {
    name: "Quory",
    link: "https://quoryapp.com",
    linkLabel: "quoryapp.com",
    visual: "quory" as const,
  },
  leplat: {
    name: "LePlat",
    link: "https://leplat.com.br",
    linkLabel: "leplat.com.br",
    visual: "leplat" as const,
  },
};

export const Content = {
  "pt-BR": {
    nav: {
      projects: "Projetos",
      experience: "Experiência",
      skills: "Skills",
      contact: "Contato",
    },
    hero: {
      badge: "Senior Front-end Engineer",
      greeting: "Olá, eu sou Maicon Furtado",
      titleStart: "Crio interfaces",
      titleHighlight: "rápidas, bonitas",
      titleEnd: "e que convertem.",
      description:
        "Senior Front-end Engineer especialista em React, Next.js e apps mobile. Transformo ideias em produtos digitais claros, performáticos e fáceis de usar.",
      ctaPrimary: "Vamos conversar",
      ctaSecondary: "Ver projetos",
      stats: [
        { value: `${yearsOfExperience}+`, label: "anos de experiência" },
        { value: "Web & Mobile", label: "React · Next · Node · Flutter" },
        { value: "PT · EN", label: "Pelotas-RS, Brasil" },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      title: "Produtos que estão no ar",
      visit: "Visitar",
      items: [
        {
          ...projectsBase.leplat,
          tagline: "Ecossistema 3 em 1 para restaurantes · 0% de comissão",
          description:
            "Plataforma SaaS completa com Cardápio Digital interativo, Delivery próprio em tempo real, Links na Bio e painel administrativo.",
          tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Stripe"],
        },
        {
          ...projectsBase.quory,
          tagline: "A rede social dos eventos",
          description:
            "App para descobrir, criar e compartilhar eventos com amigos. Desenvolvido do zero com Flutter e Firebase para iOS e Android.",
          tags: ["Flutter", "Firebase", "Mobile"],
        },
      ] as Project[],
    },
    experience: {
      eyebrow: "Experiência",
      title: "Onde já deixei minha marca",
      items: [
        {
          date: "Mar 2021 — Presente",
          company: "Fleury",
          img: "fleury",
          role: "Senior React Developer",
          about: `Atuo no <a href="https://agende.grupofleury.com.br" target="_blank" rel="noopener noreferrer">Agendamento Digital</a>, onde atualizei bibliotecas legadas (Next.js, React e Material UI), reestruturei partes importantes da aplicação e desenvolvi novas funcionalidades essenciais para a experiência do usuário.`,
        },
        {
          date: "Ago 2020 — Mar 2021",
          company: "Sofa Digital",
          img: "sofa-digital",
          role: "Front-end Developer",
          about: `Desenvolvi o <a href="https://filmelier.com" target="_blank" rel="noopener noreferrer">Filmelier</a> com HTML, SCSS, BEM, JavaScript e WordPress, além de dar suporte no back-end em Laravel.`,
        },
        {
          date: "Set 2017 — Mar 2021",
          company: "Awari",
          img: "awari",
          role: "Senior Front-End Engineer",
          about: `Criei as primeiras versões do site da <a href="https://awari.com.br" target="_blank" rel="noopener noreferrer">Awari</a> e a primeira dashboard para alunos e mentores. Estruturei e iniciei a segunda versão da plataforma com React e hooks.`,
        },
      ] as Experience[],
    },
    skills: {
      eyebrow: "Skills",
      title: "Meu arsenal",
      groups: [
        {
          name: "Core",
          items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
        },
        {
          name: "Estilo & UI",
          items: ["Material UI", "Emotion", "Styled Components", "Gatsby"],
        },
        {
          name: "Mobile & Mais",
          items: ["React Native", "Flutter", "Node.js", "Cypress", "WordPress"],
        },
      ],
    },
    education: {
      eyebrow: "Formação",
      items: [
        { date: "2015 — 2016", institution: "Senac RS", img: "senac", course: "Gerenciamento de Projetos" },
        { date: "2013 — 2014", institution: "TopWay", img: "topway", course: "Proficiência em Inglês" },
        { date: "2010 — 2012", institution: "UCPel", img: "ucpel", course: "Análise e Desenv. de Sistemas" },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Tem um projeto em mente?",
      highlight: "Vamos tirar do papel.",
      description:
        "Me mande uma mensagem e vamos conversar sobre como posso ajudar.",
      cta: "Enviar e-mail",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      badge: "Senior Front-end Engineer",
      greeting: "Hi, I'm Maicon Furtado",
      titleStart: "I build interfaces that are",
      titleHighlight: "fast, beautiful",
      titleEnd: "and convert.",
      description:
        "Senior Front-end Engineer specialized in React, Next.js and mobile apps. I turn ideas into clear, performant and easy-to-use digital products.",
      ctaPrimary: "Let's talk",
      ctaSecondary: "See projects",
      stats: [
        { value: `${yearsOfExperience}+`, label: "years of experience" },
        { value: "Web & Mobile", label: "React · Next · Node · Flutter" },
        { value: "PT · EN", label: "Pelotas, Brazil" },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Products live in production",
      visit: "Visit",
      items: [
        {
          ...projectsBase.leplat,
          tagline: "3-in-1 restaurant ecosystem · 0% commission",
          description:
            "Full SaaS platform featuring an interactive Digital Menu, real-time commission-free Delivery, Link-in-Bio and an admin dashboard.",
          tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Stripe"],
        },
        {
          ...projectsBase.quory,
          tagline: "The social network for events",
          description:
            "An app to discover, create and share events with friends. Built from scratch with Flutter and Firebase for iOS and Android.",
          tags: ["Flutter", "Firebase", "Mobile"],
        },
      ] as Project[],
    },
    experience: {
      eyebrow: "Experience",
      title: "Where I've made an impact",
      items: [
        {
          date: "Mar 2021 — Present",
          company: "Fleury",
          img: "fleury",
          role: "Senior React Developer",
          about: `Working on <a href="https://agende.grupofleury.com.br" target="_blank" rel="noopener noreferrer">Agendamento Digital</a>, where I upgraded legacy libraries (Next.js, React and Material UI), restructured key parts of the application and built impactful user-facing features.`,
        },
        {
          date: "Aug 2020 — Mar 2021",
          company: "Sofa Digital",
          img: "sofa-digital",
          role: "Front-end Developer",
          about: `Built <a href="https://filmelier.com" target="_blank" rel="noopener noreferrer">Filmelier</a> using HTML, SCSS, BEM, JavaScript and WordPress, also supporting the Laravel back-end.`,
        },
        {
          date: "Sep 2017 — Mar 2021",
          company: "Awari",
          img: "awari",
          role: "Senior Front-End Engineer",
          about: `Created the first versions of the <a href="https://awari.com.br" target="_blank" rel="noopener noreferrer">Awari</a> website and the first dashboard for students and mentors. Structured and kicked off the platform's second version with React and hooks.`,
        },
      ] as Experience[],
    },
    skills: {
      eyebrow: "Skills",
      title: "My toolbox",
      groups: [
        {
          name: "Core",
          items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
        },
        {
          name: "Styling & UI",
          items: ["Material UI", "Emotion", "Styled Components", "Gatsby"],
        },
        {
          name: "Mobile & More",
          items: ["React Native", "Flutter", "Node.js", "Cypress", "WordPress"],
        },
      ],
    },
    education: {
      eyebrow: "Education",
      items: [
        { date: "2015 — 2016", institution: "Senac RS", img: "senac", course: "Project Management" },
        { date: "2013 — 2014", institution: "TopWay", img: "topway", course: "English Proficiency" },
        { date: "2010 — 2012", institution: "UCPel", img: "ucpel", course: "Systems Analysis & Development" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Got a project in mind?",
      highlight: "Let's make it happen.",
      description:
        "Send me a message and let's talk about how I can help.",
      cta: "Send an email",
    },
  },
};

export type Locale = keyof typeof Content;

export const getContent = (locale?: string) =>
  Content[(locale as Locale) in Content ? (locale as Locale) : "pt-BR"];
