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
            <path d="M0 0 L10 5 L0 10 z" fill="#7f9cf5" />
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