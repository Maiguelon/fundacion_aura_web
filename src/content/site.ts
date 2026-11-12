export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const site = {
  name: 'Fundación AURA',
  domain: 'fundacionaura.org.ar',
  email: 'contacto@fundacionaura.org.ar',
  taxId: '30-71964630-8',
  registration: '317/2026-DPJ',
} as const;

export const routes = {
  es: '/',
  en: '/en/',
} as const satisfies Record<Locale, string>;

export const home = {
  es: {
    language: 'es-AR',
    languageNavigation: 'Idioma',
    skip: 'Saltar al contenido',
    title: 'Fundación AURA · Arte para encontrarnos',
    description: 'Fundación AURA promueve la expresión artística a través de talleres y proyectos en espacios educativos y comunitarios.',
    disciplines: 'Arte, educación y comunidad',
    headline: ['El arte nos abre', 'nuevas formas de', 'encontrarnos.'],
    lead: 'Promovemos la expresión artística en espacios educativos y comunitarios. Creemos en el arte como herramienta de desarrollo personal, social y cultural.',
    programsLink: 'Explorá los programas',
    participateLink: 'Cómo participar',
    imageAlt: 'Manos, pinceles y pinturas en una mesa de trabajo',
    imageCaption: 'Un espacio para crear en comunidad',
  },
  en: {
    language: 'en',
    languageNavigation: 'Language',
    skip: 'Skip to content',
    title: 'Fundación AURA · Bringing people together through art',
    description: 'Fundación AURA promotes artistic expression through workshops and projects in schools and community spaces.',
    disciplines: 'Art, education and community',
    headline: ['Art gives us', 'new ways to', 'come together.'],
    lead: 'We promote artistic expression in educational and community settings. We believe art can help people, communities and culture thrive.',
    programsLink: 'Explore our programs',
    participateLink: 'Get involved',
    imageAlt: 'Hands, brushes and paints on a worktable',
    imageCaption: 'A space to create together',
  },
} as const;
