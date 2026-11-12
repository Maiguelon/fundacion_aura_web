import type { Locale } from './site';

const people = [
  { name: 'Eliana Victoria Carretero', portrait: 'eliana' },
  { name: 'Nadia Acosta', portrait: 'nadia' },
  { name: 'Anahí Granillo', portrait: 'anahi' },
  { name: 'Ruth Rojas', portrait: 'ruth' },
  { name: 'Liliana Farit Coca Lazo', portrait: 'liliana' },
] as const;

type Entry = { title: string; body: string };

interface FoundationCopy {
  navLabel: string;
  purpose: Entry & { label: string };
  programs: Entry & { label: string; items: Entry[] };
  focus: { title: string; items: Entry[] };
  partnerships: Entry & { label: string };
  opportunity: Entry & { label: string; action: string };
  participation: Entry & { label: string; items: Entry[]; action: string };
  team: { label: string; title: string; people: { name: string; portrait: string; role: string; bio: string }[] };
  note: string;
}

export const foundation = {
  es: {
    navLabel: 'Navegación principal',
    purpose: {
      label: 'Propósito',
      title: 'Crear también es construir comunidad.',
      body: 'Fundación AURA promueve, fortalece y revaloriza la expresión artística en espacios educativos y comunitarios. Ampliamos el acceso al arte y propiciamos la creatividad, la reflexión crítica y el trabajo colaborativo para que más personas puedan expresarse, aprender y participar en la vida cultural.',
    },
    programs: {
      label: 'Programas',
      title: 'Talleres, encuentros y proyectos',
      body: 'Diseñamos y coordinamos propuestas interdisciplinarias que conectan el arte con la educación y la vida comunitaria.',
      items: [
        {
          title: 'Artes visuales y audiovisuales',
          body: 'Talleres y proyectos para crear imágenes, narrar experiencias y descubrir nuevas miradas.',
        },
        {
          title: 'Música y artes escénicas',
          body: 'Encuentros que invitan a escuchar, actuar, moverse y crear con otras personas.',
        },
        {
          title: 'Literatura y formación',
          body: 'Espacios de lectura, escritura y capacitación para docentes, artistas y agentes comunitarios.',
        },
      ],
    },
    focus: {
      title: 'El arte en diálogo con nuestro entorno.',
      items: [
        { title: 'Muestras y eventos culturales', body: 'Difundimos la producción artística local y comunitaria.' },
        { title: 'Alianzas', body: 'Trabajamos con instituciones educativas, culturales y sociales, y con organismos públicos y privados.' },
        { title: 'Formación', body: 'Capacitamos a docentes, artistas, mediadores culturales y agentes comunitarios en el arte como herramienta pedagógica y social.' },
        { title: 'Investigación y memoria', body: 'Investigamos, documentamos y compartimos materiales sobre educación artística y prácticas culturales locales.' },
        { title: 'Acceso e inclusión', body: 'Ampliamos la participación artística, especialmente entre personas en situación de vulnerabilidad social.' },
        { title: 'Creación colaborativa', body: 'Propiciamos experiencias colectivas que fortalecen los lazos comunitarios y abren lugar a la reflexión crítica.' },
      ],
    },
    partnerships: {
      label: 'Alianzas',
      title: 'Las mejores ideas crecen en conjunto.',
      body: 'Nos interesa construir propuestas con escuelas, espacios culturales, organizaciones sociales, artistas y otros actores de la comunidad.',
    },
    opportunity: {
      label: 'Convocatoria',
      title: 'Un taller de grabado para tu barrio',
      body: 'Buscamos un espacio para dar un taller de grabado. Si contás con un lugar, escribinos.',
      action: 'Proponé un espacio',
    },
    participation: {
      label: 'Participá',
      title: 'Hay muchas formas de ser parte.',
      body: 'Podés sumarte a una actividad, proponer una colaboración o acercar una iniciativa para hacer en conjunto.',
      items: [
        { title: 'Sumate a una actividad', body: 'Participá de talleres, muestras y encuentros de la fundación.' },
        { title: 'Colaborá', body: 'Si formás parte de una institución u organización, podemos armar una propuesta artística y cultural en conjunto.' },
        { title: 'Acercá una idea', body: 'Artistas, docentes y agentes comunitarios pueden compartir proyectos e ideas.' },
      ],
      action: 'Escribinos',
    },
    team: {
      label: 'Equipo',
      title: 'Quiénes hacen AURA',
      people: [
        { ...people[0], role: 'Presidenta', bio: 'Diseñadora gráfica y profesora de Artes Visuales. Impulsa la dirección institucional y desarrolla propuestas que integran el arte, la educación y la comunicación visual.' },
        { ...people[1], role: 'Secretaria', bio: 'Profesora de Artes Visuales con trayectoria en educación primaria y trabajo en comunidades en situación de vulnerabilidad. Promueve propuestas artísticas adaptadas a distintas realidades sociales.' },
        { ...people[2], role: 'Tesorera', bio: 'Profesora de Artes Visuales y promotora barrial de la Dirección de Gestión Cultural de la Secretaría de Cultura. Trabaja en el vínculo entre cultura y comunidad.' },
        { ...people[3], role: 'Vocal', bio: 'Profesora de Artes Visuales con experiencia en el interior de la provincia. Su trabajo busca ampliar el acceso a experiencias artísticas y educativas en distintos territorios.' },
        { ...people[4], role: 'Vocal', bio: 'Profesora de Artes Visuales en escuelas rurales y aulas plurigrado. Aporta su experiencia en educación rural al trabajo de AURA por el acceso a la educación artística.' },
      ],
    },
    note: 'Todas las actividades de Fundación AURA están a cargo de profesionales idóneos o de personal habilitado cuando la actividad lo requiere.',
  },
  en: {
    navLabel: 'Main navigation',
    purpose: {
      label: 'Purpose',
      title: 'Making art builds community.',
      body: 'Fundación AURA promotes and strengthens artistic expression in educational and community settings. We expand access to art and encourage creativity, critical thinking and collaboration so more people can express themselves, learn and take part in cultural life.',
    },
    programs: {
      label: 'Programs',
      title: 'Workshops, gatherings and projects',
      body: 'We design and run interdisciplinary activities that connect art with education and community life.',
      items: [
        {
          title: 'Visual and audiovisual arts',
          body: 'Workshops and projects where participants make images, tell their stories and discover new perspectives.',
        },
        {
          title: 'Music and performing arts',
          body: 'Gatherings where people listen, act, move and make things together.',
        },
        {
          title: 'Literature and training',
          body: 'Reading, writing and training opportunities for teachers, artists and community workers.',
        },
      ],
    },
    focus: {
      title: 'Art in conversation with the places we live.',
      items: [
        { title: 'Exhibitions and cultural events', body: 'We share work by local artists and community members.' },
        { title: 'Partnerships', body: 'We work with educational, cultural and social organizations, as well as public and private institutions.' },
        { title: 'Training', body: 'We help teachers, artists, cultural facilitators and community workers use art in education and community work.' },
        { title: 'Research and documentation', body: 'We research, document and share resources on arts education and local cultural practices.' },
        { title: 'Access and inclusion', body: 'We widen participation in the arts, especially among people facing social disadvantage.' },
        { title: 'Collaborative artmaking', body: 'We create opportunities to make art together, strengthen community ties and reflect critically.' },
      ],
    },
    partnerships: {
      label: 'Partnerships',
      title: 'The best ideas grow together.',
      body: 'We welcome opportunities to work with schools, cultural spaces, community organizations, artists and others in the community.',
    },
    opportunity: {
      label: 'Open call',
      title: 'A printmaking workshop for your neighborhood',
      body: 'We’re looking for a venue for a printmaking workshop. If you have a space, we’d love to hear from you.',
      action: 'Suggest a venue',
    },
    participation: {
      label: 'Get involved',
      title: 'There are many ways to take part.',
      body: 'Join an activity, propose a partnership or bring us an idea we can develop together.',
      items: [
        { title: 'Join an activity', body: 'Take part in our workshops, exhibitions and gatherings.' },
        { title: 'Work with us', body: 'If you represent an institution or organization, we can develop an arts and culture project together.' },
        { title: 'Share an idea', body: 'We welcome projects and ideas from artists, teachers and community workers.' },
      ],
      action: 'Get in touch',
    },
    team: {
      label: 'Team',
      title: 'The people behind AURA',
      people: [
        { ...people[0], role: 'President', bio: 'A graphic designer and visual arts teacher, she leads the foundation and develops projects that bring together art, education and visual communication.' },
        { ...people[1], role: 'Secretary', bio: 'A visual arts teacher with experience in primary education and in underserved communities, she adapts arts programs to different community contexts.' },
        { ...people[2], role: 'Treasurer', bio: 'A visual arts teacher and neighborhood outreach worker with the Secretariat of Culture, she helps connect cultural programs with their communities.' },
        { ...people[3], role: 'Board member', bio: 'A visual arts teacher with experience outside the provincial capital, she works to widen access to arts and educational opportunities in different communities.' },
        { ...people[4], role: 'Board member', bio: 'A visual arts teacher in rural schools and multigrade classrooms, she brings rural education experience to AURA’s work on access to the arts.' },
      ],
    },
    note: 'Fundación AURA activities are led by qualified professionals or licensed personnel where required.',
  },
} satisfies Record<Locale, FoundationCopy>;
