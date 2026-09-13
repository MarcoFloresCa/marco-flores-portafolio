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

const orionStack = ["Apex", "LWC", "SOQL", "Metadata API", "MCP", "TypeScript", "Node.js"];

const flowSteps = [
  { title: "Motor de diagnóstico", detail: "clasifica y reúne evidencia" },
  { title: "Prompt con evidencia", detail: "contexto + referencias" },
  { title: "Modelo de lenguaje", detail: "redacta la respuesta" },
  { title: "Post-validación", detail: "contrasta cada afirmación", accent: true },
  { title: "Usuario", detail: "respuesta con citas" },
];

function CaseVideoRow({ num, title, text, video }) {
  return (
    <section className="case-row">
      <div className="case-row-head">
        <span className="case-num">{num}</span>
        <h3>{title}</h3>
      </div>
      <figure className="case-frame">
        <video controls preload="metadata" playsInline aria-label={`Demostración: ${title}`}>
          <source src={video} type="video/mp4" />
        </video>
      </figure>
      <p className="case-row-copy">{text}</p>
    </section>
  );
}

function FlowDiagram() {
  return (
    <figure className="flow-figure">
      <div className="flow-canvas" role="group" aria-label="Flujo de Orion: del diagnóstico a la respuesta validada">
        <ol className="flow-track">
          {flowSteps.map((step, index) => (
            <li className={step.accent ? "is-accent" : undefined} key={step.title}>
              <span className="flow-step-index">0{index + 1}</span>
              <strong>{step.title}</strong>
              <small>{step.detail}</small>
            </li>
          ))}
        </ol>

        <div className="flow-fallback">
          <span className="flow-branch-label is-source">evidencia ya reunida</span>
          <div className="flow-result">
            <strong>Respuesta determinista</strong>
            <span>lista antes de llamar al modelo</span>
          </div>
          <span className="flow-branch-label is-return">si el modelo falla, se usa la ruta verificada</span>
        </div>
      </div>

      <figcaption className="flow-note">
        El motor lee el org y prepara primero una respuesta de respaldo. El modelo solo la redacta;
        la post-validación comprueba cada afirmación y descarta lo que no puede sostener con metadata.
      </figcaption>
    </figure>
  );
}

export function OrionCaseStudy() {
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
          <h3 id="orion-flow-title">Redacta el modelo, decide el código</h3>
          <p className="flow-intro">
            Orion no delega la verdad al modelo. El motor reúne metadata y evidencia antes de
            invocarlo; después, una post-validación contrasta la respuesta antes de entregarla.
          </p>
        </div>
        <FlowDiagram />
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
