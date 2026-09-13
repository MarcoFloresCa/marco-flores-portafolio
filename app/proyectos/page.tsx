import type { Metadata } from "next";
import Link from "next/link";
import { InteriorFooter, InteriorHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Proyectos Salesforce, integraciones y BI",
  description:
    "Proyectos de Marco Flores en Salesforce, Apex, LWC, integraciones REST, Google Drive, inteligencia artificial, Qlik Sense y automatización.",
  alternates: { canonical: "/proyectos" },
};

const projectIndex = [
  {
    number: "01",
    type: "Salesforce · IA aplicada",
    title: "Orion: asistente para entender la lógica de Salesforce",
    text: "Chatbot de solo consulta que cruza preguntas con la metadata vigente del org y post-valida cada afirmación antes de responder.",
    tags: ["Apex", "LWC", "SOQL", "Metadata API", "IA"],
    href: "/proyectos/orion",
    action: "Ver case study",
  },
  {
    number: "02",
    type: "Salesforce · Integración",
    title: "Google Drive conectado con Salesforce mediante JWT",
    text: "Integración server-to-server para crear y organizar carpetas desde Salesforce con OAuth 2.0, firma RS256 y trazabilidad documental.",
    tags: ["Apex", "JWT Bearer", "Google Drive API", "OAuth 2.0"],
    href: "/proyectos/google-drive-salesforce",
    action: "Leer caso técnico",
  },
  {
    number: "03",
    type: "Business Intelligence",
    title: "Seguimiento comercial en Qlik Sense",
    text: "Modelo de control para comparar resultados, presupuesto y forecast usando datos contables y maestros consultados desde SAP.",
    tags: ["Qlik Sense", "SAP", "ETL", "QVD"],
  },
  {
    number: "04",
    type: "Salesforce · Procesos internos",
    title: "Inventario y trazabilidad de activos TI",
    text: "MVP sobre Salesforce para administrar equipos, movimientos, altas, bajas, traspasos y aprobaciones.",
    tags: ["LWC", "Apex", "Flow", "Automatización"],
  },
  {
    number: "05",
    type: "Salud · Automatización",
    title: "Confirmación hospitalaria por WhatsApp",
    text: "Carga de agendas y confirmaciones de asistencia con validación de registros, conexión QR y persistencia en MySQL.",
    tags: ["Node.js", "WhatsApp", "MySQL", "JavaScript"],
    href: "https://github.com/MarcoFloresCa/Sistema-de-confirmaci-n-de-asistencia-por-Whatsapp-para-hospital",
    action: "Ver repositorio",
    external: true,
  },
];

export default function ProjectsPage() {
  return (
    <main className="case-page topic-page">
      <InteriorHeader />
      <div className="topic-page-body">
        <nav className="breadcrumbs" aria-label="Migas de pan"><Link href="/">Inicio</Link><span>/</span><span>Proyectos</span></nav>
        <header className="topic-hero compact">
          <p className="eyebrow"><span /> Trabajo seleccionado</p>
          <h1>Proyectos Salesforce, integraciones y datos</h1>
          <p>Casos reales explicados por problema, decisiones técnicas y resultado, sin exponer información privada de las organizaciones.</p>
        </header>

        <section className="project-index" aria-label="Listado de proyectos">
          {projectIndex.map((project) => (
            <article className="project-index-card" key={project.number}>
              <span className="project-index-number">{project.number}</span>
              <div>
                <p className="section-kicker">{project.type}</p>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
                <div className="topic-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {project.href && (
                  <Link href={project.href} target={project.external ? "_blank" : undefined} rel={project.external ? "noopener noreferrer" : undefined}>
                    {project.action} →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
      <InteriorFooter />
    </main>
  );
}
