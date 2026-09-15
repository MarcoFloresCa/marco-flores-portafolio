import { Fragment } from "react";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const projects = [
  {
    index: "01",
    icon: "/icons/brands/salesforce.svg",
    overlayIcon: "/icons/projects/bot-assistant.svg",
    type: "Salesforce · IA aplicada",
    title: "Asistente para entender la lógica de Salesforce",
    description:
      "Arquitectura de un chatbot de consulta (sin capacidad de modificación) capaz de explicar objetos, campos, relaciones, Flows, Triggers y reglas de validación de una organización Salesforce.",
    tags: ["Apex", "LWC", "SOQL", "Metadata API", "MCP", "TypeScript"],
    impact:
      "Cada respuesta cita la evidencia consultada (objeto, campo, Flow, Trigger o regla de validación), reduciendo el tiempo de rastreo manual dentro de la organización.",
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
    impact:
      "Organización automática de carpetas y documentos desde Salesforce con autenticación de servicio (JWT), sin credenciales embebidas ni intervención manual.",
    link: null,
    caseStudy: "/proyectos/google-drive-salesforce",
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
  { number: "02", title: "IA aplicada", text: "LLMs, MCP (Model Context Protocol), agentes de IA, chatbots con evidencia y post-validación determinista sobre datos de Salesforce." },
  { number: "03", title: "BI & datos", text: "Qlik Sense, modelado, ETL, reportería, conciliación de datos, lectura de tablas SAP como BSIS, BSAS, BKPF, BSEG y KNA1, e inserción de datos en Salesforce." },
  { number: "04", title: "Integraciones", text: "APIs REST, OAuth 2.0, JWT, Postman, Bruno y automatizaciones entre plataformas corporativas." },
  { number: "05", title: "Entrega técnica", text: "React, TypeScript, Git, CI/CD, Hardis, SFDX, sandboxes, documentación y mejora continua." },
];

const specialties = [
  { number: "01", title: "Salesforce Platform" },
  { number: "02", title: "IA aplicada" },
  { number: "03", title: "Business Intelligence" },
  { number: "04", title: "Integraciones" },
];

const experience = [
  {
    period: "2025 — Actualidad",
    dateTime: "2025",
    role: "Analista TI",
    company: "Banagro",
    companyUrl: "https://banagro.cl",
    text: "Desarrollo y automatización sobre Salesforce, soluciones BI en Qlik, integraciones y continuidad de procesos tecnológicos para una compañía financiera.",
  },
  {
    period: "dic. 2023 — feb. 2024",
    dateTime: "2023-12",
    role: "Desarrollador Backend",
    company: "CESFAM Codegua · Contrato de prácticas",
    companyUrl: "https://municipalidaddecodegua.cl",
    text: "Desarrollo del backend para un chatbot de WhatsApp con Node.js y JavaScript, junto con PHP y otras tecnologías web, en modalidad híbrida para el centro de salud familiar CESFAM de Codegua.",
  },
];

const credentials = [
  {
    title: "Ingeniería de Ejecución en Informática",
    institution: "Instituto Profesional AIEP",
    year: "Titulado en abril de 2026",
  },
  {
    title: "Técnico de Nivel Superior en Programación y Análisis de Sistemas",
    institution: "Instituto Profesional AIEP",
    year: "Título complementario",
  },
];

const quickFacts = [
  { label: "Rol", value: "Salesforce Developer y Analista TI" },
  { label: "Ubicación", value: "Mostazal, Región de O'Higgins (Sexta Región), Chile" },
  { label: "Trabajo actual", value: "Analista TI en Banagro, financiamiento agrícola chileno de Empresas Sutil" },
  { label: "Ingeniería", value: "Ingeniería de Ejecución en Informática · AIEP" },
  { label: "Proyectos", value: "5 proyectos seleccionados publicados" },
  { label: "Stack principal", items: ["Apex", "LWC", "SOQL", "Flow", "IA aplicada", "Qlik Sense"] },
];

const faqs = [
  {
    question: "¿Quién es Marco Flores?",
    answer:
      "Marco Flores es un Salesforce Developer y Analista TI en Mostazal, Región de O'Higgins, Chile, especializado en Apex, Lightning Web Components (LWC), SOQL, Salesforce Flow, integraciones REST API, IA aplicada con LLMs y MCP, y Qlik Sense.",
  },
  {
    question: "¿Dónde trabaja Marco Flores?",
    answer:
      "Trabaja como Analista TI en Banagro, la división financiera de Empresas Sutil dedicada al financiamiento agrícola en Chile, desarrollando sobre Salesforce, Qlik Sense y automatizaciones.",
  },
  {
    question: "¿Qué tecnologías usa como Salesforce Developer?",
    answer:
      "Apex, Lightning Web Components (LWC), SOQL, Salesforce Flow, reglas de validación, Metadata API, integraciones REST con OAuth 2.0 y JWT, MCP (Model Context Protocol), LLMs, Git y Qlik Sense.",
  },
  {
    question: "¿Ha trabajado con IA aplicada a Salesforce?",
    answer:
      "Sí. Diseñó y desarrolló un asistente que consulta metadata viva de Salesforce utilizando LLMs con respuestas ancladas en evidencia y post-validación determinista, implementado con MCP (Model Context Protocol) y TypeScript.",
  },
  {
    question: "¿Cómo contactar a Marco Flores?",
    answer:
      "Se le puede contactar por LinkedIn, GitHub, WhatsApp o correo electrónico desde la sección de contacto de marcoflores.cl.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://marcoflores.cl/#profile-page",
  url: "https://marcoflores.cl",
  name: "Marco Flores — Salesforce Developer en Chile",
  description:
    "Perfil profesional de Marco Flores, Salesforce Developer y Analista TI en Chile con experiencia en IA aplicada.",
  mainEntity: {
    "@type": "Person",
    "@id": "https://marcoflores.cl/#marco-flores",
    name: "Marco Flores",
    alternateName: "Marco Flores Cantillana",
    givenName: "Marco",
    familyName: "Flores",
    url: "https://marcoflores.cl",
    sameAs: [
      "https://github.com/MarcoFloresCa",
      "https://www.linkedin.com/in/marco-flores-7b40b62a8/",
    ],
    email: "marcoangeloflorescantillana@gmail.com",
    jobTitle: ["Salesforce Developer", "Analista TI"],
    worksFor: {
      "@type": "Organization",
      "@id": "https://banagro.cl",
      name: "Banagro",
      url: "https://banagro.cl",
      description:
        "División financiera de Empresas Sutil, especializada en financiamiento agrícola en Chile.",
    },
    description:
      "Desarrollador Salesforce y Analista TI en Chile con experiencia profesional en Apex, Lightning Web Components, SOQL, Salesforce Flow, integraciones REST API, IA aplicada (LLMs, MCP, agentes de IA), Git y Qlik Sense.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mostazal",
      addressRegion: "Región de O'Higgins",
      addressCountry: "CL",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Instituto Profesional AIEP",
      url: "https://www.aiep.cl",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Ingeniería de Ejecución en Informática",
        description: "Mención en Desarrollo de Sistemas",
        dateIssued: "2026-04",
        recognizedBy: { "@type": "EducationalOrganization", name: "Instituto Profesional AIEP" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Técnico de Nivel Superior en Programación y Análisis de Sistemas",
        recognizedBy: { "@type": "EducationalOrganization", name: "Instituto Profesional AIEP" },
      },
    ],
    inLanguage: "es-CL",
    knowsAbout: [
      "Salesforce",
      "Apex",
      "Lightning Web Components",
      "SOQL",
      "Salesforce Flow",
      "IA aplicada",
      "Large Language Models",
      "Model Context Protocol",
      "AI Agents",
      "REST APIs",
      "Git",
      "Qlik Sense",
      "Business Intelligence",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Salesforce Developer",
      occupationLocation: {
        "@type": "AdministrativeArea",
        name: "Región de O'Higgins, Chile",
      },
      skills: "Salesforce, Apex, LWC, SOQL, Flow, IA aplicada (LLMs, MCP), integraciones REST API, Git y Qlik Sense",
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Apex · LWC · SOQL · Flow · Integraciones · IA aplicada</p>
          <h1 className="entity-title">Marco Flores — <em>Salesforce Developer</em> en Chile</h1>
          <p className="hero-lead">
            Salesforce Developer y Analista TI en Mostazal, Región de O&apos;Higgins, Chile, con experiencia en Apex, Lightning Web Components (LWC), SOQL, Salesforce Flow, integraciones REST API, IA aplicada con LLMs y MCP, y Qlik Sense.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/salesforce">Experiencia Salesforce <ArrowIcon /></a>
            <a className="button button-ghost" href="/proyectos">Ver proyectos <ArrowIcon /></a>
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
          <ul className="code-chip">
            <li>Apex</li>
            <li>LWC</li>
            <li>SOQL</li>
            <li>IA aplicada</li>
          </ul>
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

      <section className="quick-facts" aria-label="Datos rápidos de Marco Flores">
        <div className="quick-facts-heading">
          <div>
            <p className="section-kicker">Perfil profesional</p>
            <h2>Datos rápidos de Marco Flores</h2>
          </div>
          <nav className="home-section-nav" aria-label="Secciones de la portada">
            <a href="#perfil">Perfil</a>
            <a href="#experiencia">Trayectoria</a>
            <a href="#faq">Preguntas</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
        <dl className="quick-facts-grid">
          {quickFacts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              {fact.items
                ? <dd><ul>{fact.items.map((item) => <li key={item}>{item}</li>)}</ul></dd>
                : <dd>{fact.value}</dd>
              }
            </div>
          ))}
        </dl>
      </section>

      <section className="section projects" id="proyectos">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Trabajo seleccionado</p>
            <h2>Proyectos que resuelven problemas reales.</h2>
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
                  <ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  {project.impact && <p className="project-impact">{project.impact}</p>}
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
              <p className="timeline-period"><time dateTime={item.dateTime}>{item.period}</time></p>
              <div>
                <h3>{item.role}</h3>
                <p className="timeline-company">
                  {item.companyUrl
                    ? <a href={item.companyUrl} target="_blank" rel="noopener noreferrer">{item.company}</a>
                    : item.company
                  }
                </p>
              </div>
              <p className="timeline-copy">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="credentials">
          <h3>Formación y credenciales</h3>
          <ul className="credentials-grid">
            {credentials.map((item, index) => (
              <li className="credentials-card" key={item.title}>
                <span className="credentials-badge">0{index + 1}</span>
                <strong>{item.title}</strong>
                <span>{item.institution}{item.year ? ` · ${item.year}` : ""}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="toolkit" aria-label="Tecnologías">
          {["Apex", "SOQL", "LWC", "Flow", "IA aplicada", "React", "Qlik Sense", "JavaScript", "TypeScript", "Python", "Git", "REST APIs", "Postman", "Bruno", "Hardis", "Talend", "SAP"].map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
      </section>

      <section className="section faq" id="faq">
        <div className="section-heading compact">
          <div><p className="eyebrow"><span /> Preguntas frecuentes</p><h2>Respuestas directas.</h2></div>
        </div>
        <dl className="entity-faq">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt>{faq.question}</dt>
              <dd>{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-copy">
          <p className="eyebrow light"><span /> Contacto</p>
          <h2>Construyamos algo que haga la diferencia.</h2>
          <p>Estoy abierto a conversar sobre desarrollo Salesforce, IA aplicada, BI, automatización e integración de sistemas.</p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:marcoangeloflorescantillana@gmail.com">Escríbeme <ArrowIcon /></a>
            <a className="button button-outline-light" href="/marco-flores-cv.pdf" download="CV Marco Flores.pdf" target="_blank" rel="noopener">Descargar CV <DownloadIcon /></a>
          </div>
          <ul className="contact-methods">
            <li><a className="contact-link" href="https://www.linkedin.com/in/marco-flores-7b40b62a8/" target="_blank" rel="noopener noreferrer">LinkedIn · Marco Flores <ExternalIcon /></a></li>
            <li><a className="contact-link" href="https://github.com/MarcoFloresCa" target="_blank" rel="noopener noreferrer">GitHub · MarcoFloresCa <ExternalIcon /></a></li>
          </ul>
        </div>
        <ContactConstellation />
      </section>

      <SiteFooter />

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
