import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const DICTIONARY: Record<Language, Record<string, string>> = {
  es: {
    // Navbar (4 main sections)
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.work': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.services': 'Servicios',
    'nav.process': 'Procesos',
    'nav.testimonials': 'Testimonios',
    'nav.giftKit': 'Kit Gratis',
    'nav.faq': 'Preguntas',
    'nav.freeBadge': 'Gratis',
    'nav.cta': 'Iniciar Proyecto',

    // Hero & Featured Projects
    'hero.headlinePrefix': 'Doy vida a las ideas que ',
    'hero.headlineHighlight': 'tu juego necesita',
    'hero.descriptionHeadline': 'Arte 2D para videojuegos: personajes, mundos, UI, iconos, props y assets preparados para producción.',
    'hero.subtitle': '- Te ayudo a desarrollar el arte de tu juego, desde personajes y escenarios hasta UI y assets.',
    'hero.workTogether': 'Trabajemos juntos',
    'hero.viewWork': 'Ver mi trabajo',
    'hero.myWorld': 'MI MUNDO',
    'hero.myWorldCategory': 'Mundo Creativo & Artista 2D',
    'hero.viewProject': 'Ver Proyecto',
    'hero.featuredLabel': 'Showcase de Proyecto',
    'hero.prevProject': 'Proyecto anterior',
    'hero.nextProject': 'Siguiente proyecto',

    // About
    'about.badge': '02 · Sobre mí',
    'about.titlePrefix': 'No solo hago arte. ',
    'about.titleHighlight': 'Lo preparo para formar parte del juego.',
    'about.bio': 'Llevo más de 10 años trabajando en ilustración, diseño y arte 2D/3D. En videojuegos he creado personajes, escenarios, UI, iconos, props, animaciones y piezas promocionales, adaptándome a distintos estilos y necesidades de producción.',
    'about.quote': '“Me gusta entender cómo va a vivir cada pieza dentro del juego, no solo cómo se ve en una imagen.”',
    'about.p1Title': '10+ años',
    'about.p1Desc': 'Ilustración, diseño y producción visual',
    'about.p2Title': '2D + 3D',
    'about.p2Desc': 'Personajes, mundos, UI, props y assets',
    'about.p3Title': 'De idea a asset',
    'about.p3Desc': 'Boceto → producción → preparación → entrega',
    'about.p3Sub': 'Flujo completo para que los assets lleguen limpios y listos al motor.',
    'about.p4Title': 'Pensado para juegos',
    'about.p4Desc': 'Assets organizados y preparados para producción',
    'about.indieCommitmentTitle': 'Compromiso con el desarrollo indie',
    'about.indieCommitmentText': 'Me sumo a equipos de videojuegos para hacerme cargo de partes concretas de la producción de arte, adaptándome a la dirección de arte establecida y respetando las especificaciones técnicas de cada hito.',
    'about.cameraTag': 'STUDIO MASTER',
    'about.cameraArtist': '✦ 2D GAME ARTIST',
    'about.productionReady': 'Lista para producción',

    // Services
    'services.badge': '✦ 03 • Especialidades & Servicios',
    'services.title': 'Servicios de Arte 2D para tu Juego',
    'services.subtitle': 'Soluciones visuales adaptadas a cada fase de desarrollo: UI, personajes, escenarios, props y animación.',
    'services.deliverablesLabel': 'Entregables:',
    'services.requestArt': 'Solicitar este servicio',
    'services.viewSpec': 'Ver Ficha Técnica',

    // Process
    'process.badge': 'ASÍ TRABAJAMOS JUNTOS',
    'process.titlePrefix': 'De tu idea al ',
    'process.titleHighlight': 'asset listo para tu juego',
    'process.subtitle': 'Trabajo contigo desde la primera idea hasta la entrega final, adaptándome al estilo y las necesidades de tu proyecto.',
    'process.s1Tag': '01 · Me cuentas',
    'process.s1Title': 'Brief & necesidades',
    'process.s1Desc': 'Me compartes qué necesitas resolver, junto con referencias, estilo visual o cualquier información importante de tu juego.',
    'process.s1YouGive': 'Tú me das: Brief · referencias · estilo · necesidades',
    'process.s1IDo': 'Yo hago: Defino el alcance y las entregas.',
    'process.s2Tag': '02 · Definimos',
    'process.s2Title': 'Alcance & dirección',
    'process.s2Desc': 'Acordamos qué voy a producir, la dirección visual, las prioridades y lo que necesitas recibir al final.',
    'process.s2Defined': 'Definimos: Alcance · entregables · fechas · precio',
    'process.s3Tag': '03 · Creo',
    'process.s3Title': 'Arte & feedback',
    'process.s3Desc': 'Desarrollo los assets y comparto avances para que podamos ajustar lo necesario antes de llegar al resultado final.',
    'process.s3Flow': 'Bocetos → revisión → producción → arte final',
    'process.s4Tag': '04 · Entrego',
    'process.s4Title': 'Assets listos para producción',
    'process.s4Desc': 'Recibes los archivos organizados y preparados para que puedas utilizarlos directamente en tu proyecto.',
    'process.s4Deliverables': 'Entregables: PSD · PNG · Sprites · Rigs · Exports · Archivos para engine',
    'process.consultationTitle': '¿Necesitas algo específico?',
    'process.consultationText': 'También podemos trabajar por tareas puntuales o sprints, según lo que tu equipo necesite.',
    'process.consultationBtn': 'Hablemos de tu proyecto',

    // Testimonials
    'testimonials.badge': '05 • Casos de Estudio & Testimonios',
    'testimonials.titlePrefix': 'Lo que dicen quienes han ',
    'testimonials.titleHighlight': 'trabajado conmigo',
    'testimonials.subtitle': 'Una mirada desde dentro de los equipos con los que he colaborado.',
    'testimonials.assetShowcase': 'Asset Showcase',

    // Gift Kit
    'gift.badge': 'KIT GRATUITO · UI PARA VIDEOJUEGOS',
    'gift.title': 'Un pequeño kit para empezar tu UI',
    'gift.description': 'Un conjunto de elementos UI 2D para prototipos y proyectos indie. Descarga los assets y empieza a construir la interfaz de tu juego.',
    'gift.item1Title': '12 Botones UI',
    'gift.item1Desc': 'Estados básicos: Normal, Hover y Pressed.',
    'gift.item2Title': '8 Iconos',
    'gift.item2Desc': 'Elementos esenciales para inventario y gameplay.',
    'gift.item3Title': '3 Marcos UI',
    'gift.item3Desc': 'Diseñados para adaptarse a diferentes proporciones.',
    'gift.item4Title': '2 Barras de recursos',
    'gift.item4Desc': 'Para representar vida, energía o progreso.',
    'gift.downloadTitle': 'Descarga gratuita',
    'gift.downloadSubtitle': 'Sin formularios ni registros. Solo descarga el ZIP y úsalo en tu proyecto.',
    'gift.downloadBtn': 'Descargar Kit Gratis',
    'gift.downloadedBtn': '¡Descargado! Descargar de Nuevo',
    'gift.previewBtn': 'Ver Vista Previa',

    // FAQ
    'faq.badge': '07 • Preguntas Frecuentes',
    'faq.title': 'Preguntas y Respuestas',
    'faq.subtitle': 'Todo lo que necesitas saber sobre cómo me integro a tu pipeline: formas de contratación, formatos de entrega, tarifas y comunicación.',
    'faq.ctaTitle': '¿Tienes un proyecto en mente?',
    'faq.ctaText': 'Cuéntame qué necesitas y vemos cómo puedo integrarme a tu pipeline.',
    'faq.ctaBtn': 'Hablemos de tu juego →',

    // Contact
    'contact.badge': 'Contacto',
    'contact.title': '¿Tienes un proyecto en mente?',
    'contact.text': 'Cuéntame qué necesitas para tu juego y vemos cómo puedo ayudarte.',
    'contact.button': 'Trabajemos juntos →',
    'contact.subphrase': 'Disponible para proyectos, sprints y colaboraciones de arte 2D.',
    'contact.socialsLabel': 'También puedes encontrarme en',

    // Footer
    'footer.copyright': '© 2026 DesiPatty',
    'footer.tagline': '2D Game Artist · Illustration · Game Art',
  },
  en: {
    // Navbar (4 main sections)
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.work': 'Projects',
    'nav.contact': 'Contact',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.testimonials': 'Testimonials',
    'nav.giftKit': 'Free Kit',
    'nav.faq': 'FAQ',
    'nav.freeBadge': 'Free',
    'nav.cta': 'Start a Project',

    // Hero & Featured Projects
    'hero.headlinePrefix': 'Bringing to life the ideas ',
    'hero.headlineHighlight': 'your game needs',
    'hero.descriptionHeadline': '2D Game Art: characters, worlds, UI, icons, props, and production-ready assets.',
    'hero.subtitle': '- Helping you develop your game’s art, from concept & characters to UI and sprites.',
    'hero.workTogether': 'Work Together',
    'hero.viewWork': 'View My Work',
    'hero.myWorld': 'MY WORLD',
    'hero.myWorldCategory': 'Creative World & 2D Artist',
    'hero.viewProject': 'View Project',
    'hero.featuredLabel': 'Featured Project',
    'hero.prevProject': 'Previous project',
    'hero.nextProject': 'Next project',

    // About
    'about.badge': '02 · About Me',
    'about.titlePrefix': 'I don’t just create art. ',
    'about.titleHighlight': 'I prepare it to become part of the game.',
    'about.bio': 'Over 10 years working in illustration, design, and 2D/3D art. In games, I have created characters, environments, UI, icons, props, animations, and promo art, adapting to distinct styles and production pipelines.',
    'about.quote': '“I love understanding how every asset will live inside the game, not just how it looks in a standalone image.”',
    'about.p1Title': '10+ years',
    'about.p1Desc': 'Illustration, design & visual production',
    'about.p2Title': '2D + 3D',
    'about.p2Desc': 'Characters, worlds, UI, props & assets',
    'about.p3Title': 'From idea to asset',
    'about.p3Desc': 'Sketch → production → preparation → delivery',
    'about.p3Sub': 'Complete pipeline so assets arrive clean and engine-ready.',
    'about.p4Title': 'Engine-Ready',
    'about.p4Desc': 'Organized assets ready for production',
    'about.indieCommitmentTitle': 'Commitment to indie game dev',
    'about.indieCommitmentText': 'I join game teams to take charge of concrete art production milestones, matching the established art direction and technical specs.',
    'about.cameraTag': 'STUDIO MASTER',
    'about.cameraArtist': '✦ 2D GAME ARTIST',
    'about.productionReady': 'Production-Ready',

    // Services
    'services.badge': '✦ 03 • Specialized Art Services',
    'services.title': '2D Game Art Services for Your Project',
    'services.subtitle': 'Visual solutions tailored to every phase of development: UI, characters, environments, props, and 2D animation.',
    'services.deliverablesLabel': 'Typical Deliverables:',
    'services.requestArt': 'Request this service',
    'services.viewSpec': 'View Art Specs',

    // Process
    'process.badge': 'HOW WE WORK TOGETHER',
    'process.titlePrefix': 'From your idea to the ',
    'process.titleHighlight': 'production-ready game asset',
    'process.subtitle': 'I work with you from the first spark to final delivery, adapting to your style and production needs.',
    'process.s1Tag': '01 · You share',
    'process.s1Title': 'Brief & requirements',
    'process.s1Desc': 'You share what you need to solve, along with visual references, art style, and core game context.',
    'process.s1YouGive': 'You give: Brief · references · style · requirements',
    'process.s1IDo': 'I do: Define scope, milestones, and deliverables.',
    'process.s2Tag': '02 · We define',
    'process.s2Title': 'Scope & direction',
    'process.s2Desc': 'We agree on what will be produced, visual guidelines, priorities, and final format specs.',
    'process.s2Defined': 'We define: Scope · deliverables · dates · pricing',
    'process.s3Tag': '03 · I create',
    'process.s3Title': 'Art & feedback',
    'process.s3Desc': 'I develop the assets and share progress so we can refine and iterate before final render.',
    'process.s3Flow': 'Sketches → review → production → final art',
    'process.s4Tag': '04 · I deliver',
    'process.s4Title': 'Production-ready assets',
    'process.s4Desc': 'You receive organized, sliced, and named files ready for direct integration into your engine.',
    'process.s4Deliverables': 'Deliverables: PSD · PNG · Sprites · Rigs · Exports · Engine-ready files',
    'process.consultationTitle': 'Need something specific?',
    'process.consultationText': 'We can also work in sprints or targeted milestones according to your team’s schedule.',
    'process.consultationBtn': 'Let’s talk about your project',

    // Testimonials
    'testimonials.badge': '05 • Case Studies & Testimonials',
    'testimonials.titlePrefix': 'What developers say who have ',
    'testimonials.titleHighlight': 'worked with me',
    'testimonials.subtitle': 'An inside look from the teams and solo creators I have collaborated with.',
    'testimonials.assetShowcase': 'Asset Showcase',

    // Gift Kit
    'gift.badge': 'FREE KIT · 2D GAME UI',
    'gift.title': 'A mini starter kit for your game UI',
    'gift.description': 'A collection of 2D UI elements for indie prototypes. Download the assets and start building your game interface.',
    'gift.item1Title': '12 UI Buttons',
    'gift.item1Desc': 'Core states: Normal, Hover & Pressed.',
    'gift.item2Title': '8 Icons',
    'gift.item2Desc': 'Essential inventory and gameplay items.',
    'gift.item3Title': '3 UI Frames',
    'gift.item3Desc': 'Designed to scale to multiple aspect ratios.',
    'gift.item4Title': '2 Resource Bars',
    'gift.item4Desc': 'For health, mana, stamina or progress.',
    'gift.downloadTitle': 'Free download',
    'gift.downloadSubtitle': 'No forms or signups. Just download the ZIP and use it in your game.',
    'gift.downloadBtn': 'Download Free Kit',
    'gift.downloadedBtn': 'Downloaded! Download Again',
    'gift.previewBtn': 'Preview Kit',

    // FAQ
    'faq.badge': '07 • FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about integrating with your pipeline: hiring formats, deliverables, rates, and communication.',
    'faq.ctaTitle': 'Have a project in mind?',
    'faq.ctaText': 'Tell me what you need and let’s see how I can integrate into your pipeline.',
    'faq.ctaBtn': 'Let’s talk about your game →',

    // Contact
    'contact.badge': 'Contact',
    'contact.title': 'Have a project in mind?',
    'contact.text': 'Tell me what you need for your game and let’s see how I can help.',
    'contact.button': 'Let’s work together →',
    'contact.subphrase': 'Available for 2D game art projects, sprints, and collaborations.',
    'contact.socialsLabel': 'You can also find me on',

    // Footer
    'footer.copyright': '© 2026 DesiPatty',
    'footer.tagline': '2D Game Artist · Illustration · Game Art',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem('desipatty_lang') as Language;
      return stored === 'en' ? 'en' : 'es';
    } catch {
      return 'es';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('desipatty_lang', lang);
    } catch {}
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return DICTIONARY[language]?.[key] || DICTIONARY['es']?.[key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
