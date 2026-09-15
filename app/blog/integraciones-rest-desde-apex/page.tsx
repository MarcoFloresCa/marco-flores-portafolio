import Link from "next/link";
import { Breadcrumbs, SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { createPageMetadata } from "../../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Cómo organizar integraciones REST desde Apex",
  description: "Guía práctica para estructurar integraciones REST en Salesforce Apex: autenticación, servicios, DTOs, errores, límites y pruebas de callouts.",
  path: "/blog/integraciones-rest-desde-apex",
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Cómo organizar integraciones REST desde Apex",
  description: "Patrón mantenible para callouts, autenticación, DTOs, errores y pruebas en Salesforce Apex.",
  datePublished: "2026-09-13",
  dateModified: "2026-09-13",
  author: { "@id": "https://marcoflores.cl/#marco-flores" },
  mainEntityOfPage: "https://marcoflores.cl/blog/integraciones-rest-desde-apex",
  proficiencyLevel: "Intermediate",
};

export default function ApexRestArticlePage() {
  return (
    <main className="case-page topic-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <SiteHeader active="articles" />
      <article className="article-page">
        <Breadcrumbs items={[{ label: "Artículos", href: "/blog" }, { label: "Apex REST" }]} />
        <header className="article-hero">
          <p className="eyebrow"><span /> Apex · Integraciones REST</p>
          <h1>Cómo organizar integraciones REST desde Apex</h1>
          <p>Una integración mantenible separa autenticación, transporte, modelo de datos y reglas de negocio. El objetivo no es solo completar el callout: es poder probarlo, observarlo y cambiarlo sin romper el proceso.</p>
        </header>

        <section className="article-section"><h2>1. Separa responsabilidades</h2><p>La clase que conoce el proceso de negocio no debería construir URLs, serializar JSON y traducir todos los códigos HTTP. Un cliente se encarga del transporte; DTOs tipados representan solicitudes y respuestas; el servicio de negocio decide qué hacer con el resultado.</p></section>
        <section className="article-section"><h2>2. Mantén la autenticación fuera del código</h2><p>Cuando el escenario lo permite, las credenciales y endpoints deben administrarse con mecanismos de plataforma como Named Credentials. Evita tokens, secretos o URLs sensibles escritos directamente en Apex y facilita diferencias entre sandbox y producción.</p></section>
        <section className="article-section"><h2>3. Trata el contrato HTTP explícitamente</h2><p>Define método, headers, timeout y cuerpo según el contrato de la API. No asumas que cualquier respuesta 2xx contiene el mismo JSON: valida el status code, el content type y los campos mínimos antes de continuar.</p></section>

        <blockquote className="article-quote">Una respuesta HTTP válida no garantiza una respuesta de negocio válida.</blockquote>

        <section className="article-section"><h2>4. Diseña errores observables</h2><p>Registra el sistema remoto, operación, status code y un identificador de correlación, pero nunca secretos ni datos personales innecesarios. Distingue errores recuperables, como un timeout, de errores funcionales que requieren corregir los datos.</p></section>
        <section className="article-section"><h2>5. Respeta límites y transacciones</h2><p>Los callouts comparten transacción con el resto de Apex. Evalúa Queueable o procesamiento asíncrono cuando la operación no necesita respuesta inmediata, y evita mezclar DML previo con callouts de una forma que bloquee la transacción.</p></section>
        <section className="article-section"><h2>6. Prueba escenarios, no solo cobertura</h2><p>Con <code>HttpCalloutMock</code> prueba éxito, respuesta incompleta, 4xx, 5xx, timeout lógico y JSON inválido. Verifica tanto el request enviado como la decisión posterior del servicio. El porcentaje de cobertura no reemplaza esos casos.</p></section>

        <section className="article-checklist"><h2>Checklist antes de desplegar</h2><ul><li>Endpoint y autenticación configurables.</li><li>DTOs separados del transporte.</li><li>Status codes y cuerpo validados.</li><li>Errores trazables sin filtrar secretos.</li><li>Límites y asincronía evaluados.</li><li>Mocks para éxito y fallos relevantes.</li></ul></section>

        <section className="article-sources">
          <h2>Fuentes y referencias</h2>
          <ul>
            <li>
              <a href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http.htm" target="_blank" rel="noopener noreferrer">Salesforce · HTTP (Outbound Callout)</a>
              <span>Clases Http, HttpRequest y HttpResponse para callouts en Apex.</span>
            </li>
            <li>
              <a href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm" target="_blank" rel="noopener noreferrer">Salesforce · Named Credentials</a>
              <span>Mecanismo de plataforma para administrar endpoints y autenticación fuera del código.</span>
            </li>
            <li>
              <a href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_interface_System_HttpCalloutMock.htm" target="_blank" rel="noopener noreferrer">Salesforce · HttpCalloutMock</a>
              <span>Interface para simular respuestas y probar distintos escenarios de callout.</span>
            </li>
            <li>
              <a href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm" target="_blank" rel="noopener noreferrer">Salesforce · Execution Governors and Limits</a>
              <span>Límites de callouts y transacciones compartidas en Apex.</span>
            </li>
            <li>
              <a href="https://www.rfc-editor.org/rfc/rfc9110" target="_blank" rel="noopener noreferrer">RFC 9110 · HTTP Semantics</a>
              <span>Definición del contrato HTTP: métodos, status codes y headers.</span>
            </li>
          </ul>
        </section>

        <div className="article-next"><Link href="/proyectos/google-drive-salesforce">Ver este patrón aplicado a Google Drive y Salesforce →</Link></div>
      </article>
      <SiteFooter />
    </main>
  );
}
