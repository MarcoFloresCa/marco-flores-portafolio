import Link from "next/link";
import { Breadcrumbs, SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Experiencia Salesforce · Apex, LWC, SOQL y Flow",
  description:
    "Experiencia Salesforce de Marco Flores en Mostazal, Región de O'Higgins, Chile: Apex, LWC, SOQL, Flow, integraciones REST y metadata.",
  path: "/salesforce",
});

const skills = [
  { title: "Apex y SOQL", text: "Lógica de negocio, servicios, Triggers, clases de prueba y consultas diseñadas dentro de los límites de la plataforma." },
  { title: "Lightning Web Components", text: "Interfaces LWC conectadas con Apex para resolver procesos internos con componentes claros y reutilizables." },
  { title: "Flow y reglas", text: "Automatización declarativa con Salesforce Flow, Validation Rules, Custom Permissions y configuración mantenible." },
  { title: "Integraciones REST", text: "Consumo de APIs desde Apex, OAuth 2.0, JWT Bearer, manejo de respuestas, trazabilidad y pruebas de callouts." },
  { title: "Modelo y metadata", text: "Custom Objects, campos, relaciones, Custom Metadata, Permission Sets y lectura de metadata para diagnóstico." },
  { title: "Entrega técnica", text: "Git, Salesforce CLI, sandboxes, despliegues controlados, documentación y revisión antes de producción." },
];

const questions = [
  {
    question: "¿Quién es Marco Flores?",
    answer: "Marco Flores es un Salesforce Developer y Analista TI chileno, radicado en Mostazal, Región de O'Higgins, especializado en desarrollo, automatización e integración de soluciones Salesforce.",
  },
  {
    question: "¿En qué tecnologías Salesforce trabaja Marco Flores?",
    answer: "Trabaja con Apex, Lightning Web Components (LWC), SOQL, Salesforce Flow, Triggers, Validation Rules, Custom Metadata, Custom Permissions, Permission Sets y Salesforce CLI.",
  },
  {
    question: "¿Tiene experiencia con integraciones Salesforce?",
    answer: "Sí. Ha trabajado con APIs REST, OAuth 2.0, autenticación JWT, integración con Google Drive y conexión de Salesforce con procesos y fuentes de datos externas.",
  },
  {
    question: "¿Qué combina con Salesforce?",
    answer: "Combina Salesforce con Qlik Sense, SAP en modo de lectura, SQL, APIs y automatización para conectar la implementación técnica con procesos operativos y financieros.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function SalesforcePage() {
  return (
    <main className="case-page topic-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeader active="salesforce" />

      <div className="topic-page-body">
        <Breadcrumbs items={[{ label: "Salesforce" }]} />
        <header className="topic-hero">
          <p className="eyebrow"><span /> Especialidad principal</p>
          <h1>Experiencia Salesforce de Marco Flores</h1>
          <p>
            Desarrollador Salesforce y Analista TI en Mostazal, Región de O&apos;Higgins, Chile, con experiencia profesional en Apex,
            Lightning Web Components, SOQL, Salesforce Flow, Validation Rules, integraciones REST
            y administración de metadata.
          </p>
          <div className="topic-actions">
            <Link className="button button-primary" href="/proyectos">Ver proyectos Salesforce →</Link>
            <a className="text-link" href="/marco-flores-cv.pdf" target="_blank" rel="noopener">Revisar CV actualizado</a>
          </div>
        </header>

        <section className="topic-section" aria-labelledby="salesforce-capabilities">
          <div className="topic-section-heading">
            <p className="section-kicker">Capacidades</p>
            <h2 id="salesforce-capabilities">Desarrollo de extremo a extremo</h2>
            <p>Desde el modelo de datos hasta la interfaz, la integración y el despliegue.</p>
          </div>
          <div className="knowledge-grid">
            {skills.map((skill, index) => (
              <article key={skill.title}>
                <span>0{index + 1}</span>
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="topic-band">
          <p className="section-kicker">Enfoque</p>
          <h2>Entender el proceso antes de automatizarlo</h2>
          <p>
            La solución empieza por reglas de negocio, permisos, datos y casos límite. Después se
            decide qué corresponde resolver con configuración, Flow, LWC o Apex, evitando código
            innecesario y dejando trazabilidad para el equipo que mantendrá la plataforma.
          </p>
        </section>

        <section className="topic-section" aria-labelledby="salesforce-faq">
          <div className="topic-section-heading">
            <p className="section-kicker">Respuestas directas</p>
            <h2 id="salesforce-faq">Sobre Marco Flores y Salesforce</h2>
          </div>
          <dl className="entity-faq">
            {questions.map((item) => (
              <div key={item.question}>
                <dt>{item.question}</dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <aside className="topic-cta">
          <p>¿Quieres ver cómo se aplica esta experiencia?</p>
          <Link href="/proyectos/orion">Explorar el case study de Orion →</Link>
        </aside>
      </div>

      <SiteFooter />
    </main>
  );
}
