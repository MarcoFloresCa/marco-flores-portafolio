const projects = [
  {
    index: "01",
    type: "Salesforce · IA aplicada",
    title: "Asistente para entender la lógica de Salesforce",
    description:
      "Arquitectura de un chatbot de consulta —no modificación— capaz de explicar objetos, campos, relaciones, Flows, Triggers y reglas de validación de una organización Salesforce.",
    tags: ["Apex", "SOQL", "Metadata API", "MCP", "TypeScript"],
  },
  {
    index: "02",
    type: "Integración · Automatización",
    title: "Salesforce conectado con Google Drive",
    description:
      "Integración server-to-server con Service Account y JWT Bearer Flow para crear y organizar carpetas desde Salesforce, cuidando permisos, propiedad y trazabilidad documental.",
    tags: ["Apex", "JWT / RS256", "Google Drive API", "OAuth 2.0"],
  },
  {
    index: "03",
    type: "Business Intelligence",
    title: "Seguimiento comercial en Qlik Sense",
    description:
      "Modelo de control para comparar resultados reales, presupuesto y forecast por campaña, mes, ejecutivo, zona y grupo, utilizando datos contables y maestros consultados en modo de solo lectura desde SAP.",
    tags: ["Qlik Sense", "SAP · Solo lectura", "Salesforce", "ETL", "QVD", "Modelado de datos"],
  },
  {
    index: "04",
    type: "Salesforce · Procesos internos",
    title: "Inventario y trazabilidad de activos TI",
    description:
      "MVP sobre Salesforce para gestionar equipos y movimientos, con flujos de altas, bajas y traspasos y aprobaciones.",
    tags: ["LWC", "Apex", "Flow", "Automatización"],
  },
  {
    index: "05",
    type: "Automatización · Atención digital",
    title: "Chatbot de asistencia por WhatsApp",
    description:
      "Canal automatizado para atender consultas frecuentes, orientar a los usuarios y derivar solicitudes que requieren atención humana, manteniendo el contexto de cada conversación.",
    tags: ["WhatsApp Business API", "Webhooks", "REST APIs", "Automatización"],
  },
];

const capabilities = [
  { number: "01", title: "Salesforce", text: "Diseño de objetos, Apex, SOQL, LWC, Flows, reglas de validación, seguridad e integraciones." },
  { number: "02", title: "BI & datos", text: "Qlik Sense, modelado, ETL, reportería, conciliación de datos, lectura de tablas SAP como BSIS, BSAS, BKPF, BSEG y KNA1, e inserción de datos en Salesforce." },
  { number: "03", title: "Integraciones", text: "APIs REST, OAuth 2.0, JWT, Postman y automatizaciones entre plataformas corporativas." },
  { number: "04", title: "Entrega técnica", text: "Git, CI/CD, SFDX, sandboxes, documentación y mejora continua de soluciones existentes." },
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

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Marco Flores, inicio">MF<span>.</span></a>
        <nav aria-label="Navegación principal">
          <a href="#proyectos">Proyectos</a>
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
          <div className="code-chip">Apex · Qlik · APIs</div>
        </div>

        <div className="scroll-cue"><span>Scroll</span><div /></div>
      </section>

      <section className="proof-strip" aria-label="Áreas de especialidad">
        <span>Salesforce Platform</span><i>✦</i><span>Business Intelligence</span><i>✦</i>
        <span>Integraciones</span><i>✦</i><span>Automatización</span>
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
          {projects.map((project) => (
            <article className="project-card" key={project.index}>
              <div className="project-number">{project.index}</div>
              <div className="project-content">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="project-mark" aria-hidden="true">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section profile" id="perfil">
        <div className="profile-statement">
          <p className="eyebrow light"><span /> Mi enfoque</p>
          <h2>No desarrollo por desarrollar.<br /><em>Entiendo el proceso primero.</em></h2>
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
          {["Apex", "SOQL", "LWC", "Flow", "Qlik Sense", "JavaScript", "TypeScript", "Python", "Git", "REST APIs", "Postman", "Talend", "SAP"].map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </section>

      <section className="contact" id="contacto">
        <p className="eyebrow light"><span /> Contacto</p>
        <h2>¿Construimos algo<br />que haga la diferencia?</h2>
        <p>Estoy abierto a conversar sobre desarrollo Salesforce, BI, automatización e integración de sistemas.</p>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:marcoangeloflorescantillana@gmail.com">Escríbeme <ArrowIcon /></a>
          <a className="contact-link" href="https://github.com/MarcoFloresCa" target="_blank" rel="noreferrer">github.com/MarcoFloresCa <ExternalIcon /></a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#inicio">MF<span>.</span></a>
        <p>Marco Flores Cantillana · Mostazal, Chile</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
