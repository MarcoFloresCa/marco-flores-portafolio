import Link from "next/link";

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export function InteriorHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/#inicio" aria-label="Marco Flores, inicio">Marco Flores</Link>
      <nav aria-label="Navegación principal">
        <Link className="nav-featured" href="/salesforce">Salesforce</Link>
        <Link href="/proyectos">Proyectos</Link>
        <Link href="/blog">Artículos</Link>
      </nav>
      <Link className="header-contact" href="/#contacto">Hablemos <ArrowIcon /></Link>
    </header>
  );
}

export function InteriorFooter() {
  return (
    <footer>
      <Link className="brand" href="/#inicio">Marco Flores</Link>
      <p>Salesforce Developer · Mostazal, Chile</p>
      <nav className="site-footer-nav" aria-label="Enlaces del sitio">
        <Link href="/salesforce">Salesforce</Link>
        <Link href="/proyectos">Proyectos</Link>
        <Link href="/blog">Artículos</Link>
        <a href="https://www.linkedin.com/in/marco-flores-7b40b62a8/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </footer>
  );
}
