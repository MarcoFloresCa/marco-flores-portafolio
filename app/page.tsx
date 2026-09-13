import { Fragment } from "react";

const projects = [
  {
    index: "01",
    icon: "/icons/brands/salesforce.svg",
    overlayIcon: "/icons/projects/bot-assistant.svg",
    type: "Salesforce · IA aplicada",
    title: "Asistente para entender la lógica de Salesforce",
    description:
      "Arquitectura de un chatbot de consulta (sin capacidad de modificación) capaz de explicar objetos, campos, relaciones, Flows, Triggers y reglas de validación de una organización Salesforce.",
    tags: ["Apex", "SOQL", "Metadata API", "MCP", "TypeScript"],
    link: null,
  },
  {
    index: "02",
    icon: "/icons/projects/drive-sync.svg",
    overlayIcon: null,
    type: "Integración · Automatización",
    title: "Salesforce conectado con Google Drive",
    description:
      "Integración server-to-server con Service Account y JWT Bearer Flow para crear y organizar carpetas desde Salesforce, cuidando permisos, propiedad y trazabilidad documental.",
    tags: ["Apex", "JWT / RS256", "Google Drive API", "OAuth 2.0"],
    link: null,
  },
  {
    index: "03",
    icon: "/icons/brands/qlik.svg",
    overlayIcon: null,
    type: "Business Intelligence",
    title: "Seguimiento comercial en Qlik Sense",
    description:
      "Modelo de control para comparar resultados reales, presupuesto y forecast por campaña, mes, ejecutivo, zona y grupo, utilizando datos contables y maestros consultados en modo de solo lectura desde SAP.",
    tags: ["Qlik Sense", "SAP · Solo lectura", "Salesforce", "ETL", "QVD", "Modelado de datos"],
    link: null,
  },
  {
    index: "04",
    icon: "/icons/projects/asset-trace.svg",
    overlayIcon: null,
    type: "Salesforce · Procesos internos",
    title: "Inventario y trazabilidad de activos TI",
    description:
      "MVP sobre Salesforce para gestionar equipos y movimientos, con flujos de altas, bajas y traspasos y aprobaciones.",
    tags: ["LWC", "Apex", "Flow", "Automatización"],
    link: null,
  },
  {
    index: "05",
    icon: "/icons/brands/whatsapp.svg",
    overlayIcon: "/icons/projects/bot-assistant.svg",
    type: "Salud · Automatización",
    title: "Confirmación de asistencia hospitalaria por WhatsApp",
    description:
      "Sistema para cargar agendas desde Excel y enviar confirmaciones de asistencia a pacientes mediante whatsapp-web.js, con validación de registros, conexión por código QR y persistencia en MySQL.",
    tags: ["Node.js", "whatsapp-web.js", "MySQL", "JavaScript", "PHP"],
    link: "https://github.com/MarcoFloresCa/Sistema-de-confirmaci-n-de-asistencia-por-Whatsapp-para-hospital",
  },
];

const capabilities = [
  { number: "01", title: "Salesforce", text: "Diseño de objetos, Apex, SOQL, LWC, Flows, reglas de validación, seguridad e integraciones." },
  { number: "02", title: "BI & datos", text: "Qlik Sense, modelado, ETL, reportería, conciliación de datos, lectura de tablas SAP como BSIS, BSAS, BKPF, BSEG y KNA1, e inserción de datos en Salesforce." },
  { number: "03", title: "Integraciones", text: "APIs REST, OAuth 2.0, JWT, Postman, Bruno y automatizaciones entre plataformas corporativas." },
  { number: "04", title: "Entrega técnica", text: "React, TypeScript, Git, CI/CD, Hardis, SFDX, sandboxes, documentación y mejora continua." },
];

const specialties = [
  { number: "01", title: "Salesforce Platform" },
  { number: "02", title: "Business Intelligence" },
  { number: "03", title: "Integraciones" },
  { number: "04", title: "Automatización" },
];

const experience = [
  {
    period: "2025 — Actualidad",
    role: "Analista TI",
    company: "Banagro",
    text: "Desarrollo y automatización sobre Salesforce, soluciones BI en Qlik, integraciones y continuidad de procesos tecnológicos para una compañía financiera.",
  },
  {
    period: "Formación actual",
    role: "Ingeniería en Informática",
    company: "mención Desarrollo de Sistemas",
    text: "Formación complementada con el título de Técnico de Nivel Superior en Programación y Análisis de Sistemas y especialización continua en Salesforce.",
  },
];

const orionPills = [
  "Solo consulta",
  "Metadata API",
  "MCP",
  "Respuesta determinista",
  "Citas a la fuente",
];

const orionSections = [
  {
    num: "02",
    title: "Motor de diagnóstico",
    video: "/videos/motor-de-diagnostico.mp4",
    text: "El corazón del sistema. Al recibir una pregunta, Orion clasifica el tema, consulta la metadata vigente del org y arma la respuesta desde el modelo real: objetos, campos, relaciones, Flows, Triggers y reglas de validación en vigor.",
  },
  {
    num: "04",
    title: "Asistente contextual",
    video: "/videos/asistente-contextual.mp4",
    text: "El chat resuelve preguntas de seguimiento dentro del mismo marco: si preguntaste por un objeto, las siguientes preguntas se entienden en ese contexto sin repetir ambigüedad.",
  },
  {
    num: "05",
    title: "Definiciones de diagnóstico",
    video: "/videos/definiciones-de-diagnostico.mp4",
    text: "Cada respuesta entrega definiciones exactas: API name, tipo de campo, picklist, relación maestro-detalle y reglas aplicables, tomadas directamente de la metadata.",
  },
  {
    num: "06",
    title: "Historial de chat",
    video: "/videos/historial-de-chat.mp4",
    text: "La conversación queda persistida: el usuario retoma hilos anteriores y el asistente conserva el contexto técnico entre sesiones.",
  },
  {
    num: "07",
    title: "Orion Knowledge",
    video: "/videos/orion-knowledge.mp4",
    text: "Capas de conocimiento curado del negocio —flujos activos, validaciones críticas, buenas prácticas— que aumentan la respuesta técnica con contexto operativo real.",
  },
  {
    num: "08",
    title: "Niveles de servicio (SLA)",
    video: "/videos/sla.mp4",
    text: "Metas medibles de disponibilidad y tiempo de respuesta por consulta, con monitoreo para mantener la herramienta confiable en horario de negocio.",
  },
  {
    num: "11",
    title: "Paneles de gobierno",
    video: "/videos/paneles-de-gobierno.mp4",
    text: "El administrador ve el uso real del asistente: preguntas respondidas, términos sin respuesta y cobertura por objeto, para mejorar Orion Knowledge de forma continua.",
  },
];

const orionDistinct = [
  {
    title: "Solo lectura",
    text: "Ninguna rama del proceso modifica el org: no hay DML ni cambios de configuración. El asistente explica, no interviene.",
  },
  {
    title: "Determinista",
    text: "Ante la misma pregunta y el mismo org, la respuesta es la misma. Cada afirmación nace de la metadata o del conocimiento validado.",
  },
  {
    title: "Cita la fuente",
    text: "Cada dato se respalda en el API name del objeto o campo consultado, de modo que cualquier afirmación se puede auditar.",
  },
  {
    title: "Trazable",
    text: "El razonamiento queda registrado en el historial: qué se consultó, desde qué fuente y con qué resultado.",
  },
];

const orionQuestions = [
  {
    q: "¿Qué campos tiene el objeto Opportunity?",
    a: "Devuelve los campos activos con su API name, tipo y descripción de negocio.",
  },
  {
    q: "¿Qué Flows están activos?",
    a: "Lista los procesos activos con su disparador, objeto asociado y versión.",
  },
  {
    q: "¿Por qué falló este guardado?",
    a: "Explica las reglas de validación y Triggers aplicables, citando la regla exacta.",
  },
  {
    q: "¿Qué objetos se relacionan con Cuenta?",
    a: "Muestra las relaciones hijos y maestro-detalle con su cardinalidad.",
  },
];

const orionStack = ["Apex", "SOQL", "Metadata API", "MCP", "TypeScript", "Node.js"];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marco Flores Cantillana",
  givenName: "Marco",
  familyName: "Flores Cantillana",
  url: "https://marcoflores.cl",
  sameAs: ["https://github.com/MarcoFloresCa"],
  jobTitle: ["Desarrollador Salesforce", "Analista TI"],
  description:
    "Desarrollador Salesforce y Analista TI especializado en Apex, LWC, Flow, integraciones, automatización y Business Intelligence.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mostazal",
    addressRegion: "Región de O'Higgins",
    addressCountry: "CL",
  },
  knowsAbout: [
    "Salesforce Platform",
    "Apex",
    "SOQL",
    "Lightning Web Components",
    "Salesforce Flow",
    "REST APIs",
    "OAuth 2.0",
    "Qlik Sense",
    "Business Intelligence",
    "Integración de sistemas",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Desarrollador Salesforce",
    occupationLocation: {
      "@type": "Country",
      name: "Chile",
    },
    skills: "Salesforce, Apex, SOQL, LWC, Flow, integraciones, automatización y APIs REST",
  },
};

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function ExternalIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 16 16 8M9 8h7v7" /></svg>;
}

function DownloadIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m-5-5 5 5 5-5M5 20h14" /></svg>;
}

function ContactConstellation() {
  return (
    <div className="contact-constellation" aria-hidden="true">
      <svg viewBox="0 0 520 520">
        <circle className="constellation-orbit orbit-outer" cx="260" cy="260" r="206" />
        <circle className="constellation-orbit orbit-inner" cx="260" cy="260" r="132" />
        <path className="constellation-line line-one" d="M143 138 260 260l125-120" />
        <path className="constellation-line line-two" d="m260 260 126 125" />
        <path className="constellation-line line-three" d="m260 260-127 119" />

        <g className="constellation-node node-cloud" transform="translate(78 73)">
          <circle cx="64" cy="64" r="62" />
          <image href="/icons/brands/salesforce.svg" x="13" y="24" width="102" height="80" preserveAspectRatio="xMidYMid meet" />
        </g>

        <g className="constellation-node node-chart" transform="translate(321 74)">
          <circle cx="64" cy="64" r="62" />
          <image href="/icons/brands/qlik.svg" x="26" y="26" width="76" height="76" />
        </g>

        <g className="constellation-node node-api" transform="translate(322 321)">
          <image href="/icons/systems/integration-nodes.svg" width="128" height="128" />
        </g>

        <g className="constellation-node node-code" transform="translate(69 315)">
          <image href="/icons/systems/code-automation.svg" width="128" height="128" />
        </g>

        <g className="constellation-core">
          <circle cx="260" cy="260" r="52" />
          <path d="M239 260h42M260 239v42" />
          <circle cx="260" cy="260" r="9" />
        </g>

        <circle className="constellation-spark spark-one" cx="260" cy="54" r="5" />
        <circle className="constellation-spark spark-two" cx="465" cy="260" r="5" />
        <circle className="constellation-spark spark-three" cx="260" cy="466" r="5" />
      </svg>
    </div>
  );
}

function CaseVideoRow({ num, title, text, video }) {
  return (
    <section className="case-row">
      <div className="case-row-head">
        <span className="case-num">{num}</span>
        <h3>{title}</h3>
      </div>
      <figure className="case-frame">
        <video controls preload="metadata" playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </figure>
      <p className="case-row-copy">{text}</p>
    </section>
  );
}

function FlowDiagram() {
  return (
    <div className="diagram-wrap">
      <svg viewBox="0 0 1080 560" role="img" aria-label="Flujo de Orion: de la pregunta a la respuesta determinista">
        <defs>
          <marker id="flow-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#4c7df0" />
          </marker>
        </defs>

        <g className="flow-node">
          <rect x="40" y="70" width="200" height="160" rx="18" />
          <text className="flow-num" x="68" y="106">01</text>
          <text className="flow-title" x="68" y="138">Pregunta</text>
          <text className="flow-sub" x="68" y="168">El usuario consulta</text>
          <text className="flow-sub" x="68" y="192">desde el chat de Orion,</text>
          <text className="flow-sub" x="68" y="216">con contexto previo</text>
        </g>
        <g className="flow-node">
          <rect x="315" y="70" width="200" height="160" rx="18" />
          <text className="flow-num" x="343" y="106">02</text>
          <text className="flow-title" x="343" y="138">Modelo del org</text>
          <text className="flow-sub" x="343" y="168">Metadata API · lectura</text>
          <text className="flow-sub" x="343" y="192">objetos, campos,</text>
          <text className="flow-sub" x="343" y="216">relaciones, Flows</text>
        </g>
        <g className="flow-node">
          <rect x="590" y="70" width="200" height="160" rx="18" />
          <text className="flow-num" x="618" y="106">03</text>
          <text className="flow-title" x="618" y="138">Diagnóstico</text>
          <text className="flow-sub" x="618" y="168">intersección entre la</text>
          <text className="flow-sub" x="618" y="192">pregunta y el modelo,</text>
          <text className="flow-sub" x="618" y="216">interprete determinista</text>
        </g>
        <g className="flow-node">
          <rect x="865" y="70" width="200" height="160" rx="18" />
          <text className="flow-num" x="893" y="106">04</text>
          <text className="flow-title" x="893" y="138">Respuesta</text>
          <text className="flow-sub" x="893" y="168">determinista y auditable,</text>
          <text className="flow-sub" x="893" y="192">cita el API name de la</text>
          <text className="flow-sub" x="893" y="216">metadata consultada</text>
        </g>

        <path className="flow-arrow" d="M248 150 L307 150" markerEnd="url(#flow-arrow)" />
        <path className="flow-arrow" d="M523 150 L582 150" markerEnd="url(#flow-arrow)" />
        <path className="flow-arrow" d="M798 150 L857 150" markerEnd="url(#flow-arrow)" />

        <g className="flow-band">
          <rect x="40" y="300" width="1025" height="160" rx="18" />
          <text className="flow-band-title" x="66" y="332">Redacta el modelo, decide el código</text>
          <text className="flow-band-sub" x="66" y="356">El proceso completo opera en modo lector: describe la metadata, intersecta y arma la respuesta.</text>
        </g>

        <path className="flow-connector" d="M140 230 L140 296" />
        <path className="flow-connector" d="M415 230 L415 296" />
        <path className="flow-connector" d="M690 230 L690 296" />
        <path className="flow-connector" d="M965 230 L965 296" />

        <text className="flow-check" x="66" y="400"><tspan className="flow-check-accent">→ </tspan>Modelo cierto — la respuesta se redacta con datos vigentes de la metadata</text>
        <text className="flow-check" x="66" y="426"><tspan className="flow-check-accent">→ </tspan>Lectura — SOQL y describe operan dentro del org, sin DML</text>
        <text className="flow-check" x="66" y="452"><tspan className="flow-check-accent">→ </tspan>Determinista — misma pregunta y mismo org, misma respuesta</text>
      </svg>
    </div>
  );
}

function OrionCaseStudy() {
  return (
    <article className="case-study">
      <header className="case-hero">
        <p className="eyebrow"><span /> Case study · IA aplicada · Salesforce</p>
        <h2>El asistente que audita lo que dice</h2>
        <p className="case-hero-copy">
          Orion es un chatbot de consulta —solo lectura— que explica la lógica real de una
          organización Salesforce: objetos, campos, relaciones, Flows, Triggers y reglas de
          validación. No responde de memoria: cruza cada pregunta con la metadata vigente y
          cita la fuente de cada afirmación.
        </p>
        <div className="case-pills" aria-label="Características clave">
          {orionPills.map((pill) => <span className="pill" key={pill}>{pill}</span>)}
        </div>
      </header>

      <CaseVideoRow {...orionSections[0]} />

      <section className="case-flow" aria-labelledby="orion-flow-title">
        <div className="case-flow-head">
          <p className="eyebrow light"><span /> Cómo funciona</p>
          <h3 id="orion-flow-title">Redacta el modelo, decide el código.</h3>
        </div>
        <FlowDiagram />
        <p className="flow-note">
          Toda la cadena opera como lector del org: describe objetos, recorre relaciones,
          consulta Flows y validaciones, y devuelve una respuesta determinista con citas a la
          fuente. Ninguna rama del proceso ejecuta cambios en Salesforce.
        </p>
      </section>

      {orionSections.slice(1, 5).map((section) => <CaseVideoRow key={section.num} {...section} />)}
      <CaseVideoRow {...orionSections[5]} />

      <section className="case-distinct">
        <div className="case-row-head">
          <span className="case-num">09</span>
          <h3>Por qué es distinto</h3>
        </div>
        <div className="distinct-grid">
          {orionDistinct.map((item) => (
            <article key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-qa">
        <div className="case-row-head">
          <span className="case-num">10</span>
          <h3>Pregúntale esto</h3>
        </div>
        <div className="qa-grid">
          {orionQuestions.map((item) => (
            <article key={item.q}>
              <h4>{item.q}</h4>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <CaseVideoRow {...orionSections[6]} />

      <section className="case-stack">
        <div className="case-row-head">
          <span className="case-num">12</span>
          <h3>Stack</h3>
        </div>
        <div className="toolkit" aria-label="Stack de Orion">
          {orionStack.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </section>

      <section className="case-note case-status">
        <div className="case-row-head">
          <span className="case-num">13</span>
          <h3>Estado</h3>
        </div>
        <p className="case-row-copy">
          Sistema funcional y en operación: motor de diagnóstico, contexto, historial,
          conocimiento curado y paneles de gobierno. Siguientes hitos: ampliar el conocimiento
          por objeto y profundizar la cobertura de Flows y reglas de validación.
        </p>
      </section>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Marco Flores, inicio">Marco Flores</a>
        <nav aria-label="Navegación principal">
          <a className="nav-featured" href="#proyectos">Proyectos</a>
          <a href="#perfil">Perfil</a>
          <a href="#experiencia">Trayectoria</a>
        </nav>
        <a className="header-contact" href="#contacto">Hablemos <ArrowIcon /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Analista TI & Desarrollador Salesforce</p>
          <h1>Desarrollador Salesforce.<br />Conecto datos y <em>negocio.</em></h1>
          <p className="hero-lead">
            Soy desarrollador Salesforce y Analista TI en Chile. Creo soluciones con Apex, LWC, Flow,
            Qlik e integraciones que simplifican procesos y ayudan a tomar mejores decisiones.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">Ver proyectos <ArrowIcon /></a>
            <a className="button button-ghost" href="https://github.com/MarcoFloresCa" target="_blank" rel="noreferrer">GitHub <ExternalIcon /></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Monograma de Marco Flores">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="monogram">MF</div>
          <div className="status-card">
            <span className="status-dot" />
            <div><small>Ubicación</small><strong>Mostazal, Chile</strong></div>
          </div>
          <div className="code-chip">Apex · React · Qlik · APIs</div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Áreas de especialidad">
        <ul>
          {specialties.map((specialty) => (
            <li key={specialty.number}>
              <span>{specialty.number}</span>
              <strong>{specialty.title}</strong>
              <i aria-hidden="true">✦</i>
            </li>
          ))}
        </ul>
      </section>

      <section className="section projects" id="proyectos">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Trabajo seleccionado</p>
            <h2>Proyectos que resuelven<br />problemas reales.</h2>
          </div>
          <p className="section-intro">
            Una selección de iniciativas donde desarrollo, datos y entendimiento del proceso se encuentran.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, projectIndex) => (
            <Fragment key={project.index}>
              <article className="project-card">
                <div className="project-number">{project.index}</div>
                <div className="project-content">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  {project.link && (
                    <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                      Ver repositorio <ExternalIcon />
                    </a>
                  )}
                </div>
                <div className="project-mark" aria-hidden="true">
                  <svg className="project-icon-svg" viewBox="0 0 64 64">
                    <image
                      className={project.overlayIcon ? "project-brand-layer" : undefined}
                      href={project.icon}
                      x={project.overlayIcon ? 4 : 0}
                      y={project.overlayIcon ? 4 : 0}
                      width={project.overlayIcon ? 46 : 64}
                      height={project.overlayIcon ? 46 : 64}
                      preserveAspectRatio="xMidYMid meet"
                    />
                    {project.overlayIcon && (
                      <image className="project-bot-layer" href={project.overlayIcon} x="30" y="30" width="32" height="32" />
                    )}
                  </svg>
                </div>
              </article>
              {projectIndex === 0 && <OrionCaseStudy />}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="section profile" id="perfil">
        <div className="profile-statement">
          <p className="eyebrow light"><span /> Mi enfoque</p>
          <h2>
            <span className="profile-title-small">No desarrollo por desarrollar.</span>
            <span className="profile-title-large">Entiendo el proceso primero.</span>
          </h2>
          <p>
            Mi fortaleza está en traducir necesidades operativas y financieras en soluciones técnicas claras.
            Me muevo entre el detalle del dato y la visión completa del negocio para construir herramientas
            que las personas realmente puedan usar.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experiencia">
        <div className="section-heading compact">
          <div><p className="eyebrow"><span /> Trayectoria</p><h2>Experiencia y formación.</h2></div>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article key={item.period}>
              <p className="timeline-period">{item.period}</p>
              <div><h3>{item.role}</h3><p className="timeline-company">{item.company}</p></div>
              <p className="timeline-copy">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="toolkit" aria-label="Tecnologías">
          {["Apex", "SOQL", "LWC", "Flow", "React", "Qlik Sense", "JavaScript", "TypeScript", "Python", "Git", "REST APIs", "Postman", "Bruno", "Hardis", "Talend", "SAP"].map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-copy">
          <p className="eyebrow light"><span /> Contacto</p>
          <h2>Construyamos algo<br />que haga la diferencia.</h2>
          <p>Estoy abierto a conversar sobre desarrollo Salesforce, BI, automatización e integración de sistemas.</p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:marcoangeloflorescantillana@gmail.com">Escríbeme <ArrowIcon /></a>
            <a className="button button-outline-light" href="/marco-flores-cv.pdf" download="Marco Flores C.pdf" target="_blank" rel="noopener">Descargar CV <DownloadIcon /></a>
          </div>
          <a className="contact-link" href="https://github.com/MarcoFloresCa" target="_blank" rel="noopener noreferrer">github.com/MarcoFloresCa <ExternalIcon /></a>
        </div>
        <ContactConstellation />
      </section>

      <footer>
        <a className="brand" href="#inicio">Marco Flores</a>
        <p>Marco Flores Cantillana · Mostazal, Chile</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>

      <a
        className="floating-whatsapp"
        href="https://wa.me/56953994713?text=Hola%20Marco%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir a Marco por WhatsApp al +56 9 5399 4713"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <image href="/icons/brands/whatsapp.svg" width="32" height="32" />
        </svg>
        <span>WhatsApp</span>
      </a>
    </main>
  );
}
