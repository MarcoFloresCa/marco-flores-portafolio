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
    caseStudy: "/proyectos/orion",
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
          {projects.map((project) => {
            const card = (
              <article className="project-card">
                <div className="project-number">{project.index}</div>
                <div className="project-content">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  {project.caseStudy && (
                    <span className="project-case-link">
                      Ver case study <ArrowIcon />
                    </span>
                  )}
                  {project.link && !project.caseStudy && (
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
            );

            if (project.caseStudy) {
              return (
                <a
                  className="project-card-link"
                  href={project.caseStudy}
                  key={project.index}
                  aria-label={`Ver el case study de ${project.title}`}
                >
                  {card}
                </a>
              );
            }

            return <Fragment key={project.index}>{card}</Fragment>;
          })}
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
