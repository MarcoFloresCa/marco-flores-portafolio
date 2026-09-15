import Link from "next/link";

const navigation = [
  { label: "Salesforce", href: "/salesforce", key: "salesforce" },
  { label: "Proyectos", href: "/proyectos", key: "projects" },
  { label: "Artículos", href: "/blog", key: "articles" },
] as const;

type NavigationKey = (typeof navigation)[number]["key"];
type BreadcrumbItem = { label: string; href?: string };

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function NavigationLinks({ active }: { active?: NavigationKey }) {
  return navigation.map((item) => (
    <Link
      className={item.key === active ? "nav-featured" : undefined}
      href={item.href}
      aria-current={item.key === active ? "page" : undefined}
      key={item.href}
    >
      {item.label}
    </Link>
  ));
}

export function SiteHeader({ active }: { active?: NavigationKey }) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Marco Flores, inicio">Marco Flores</Link>
      <nav className="desktop-nav" aria-label="Navegación principal">
        <NavigationLinks active={active} />
      </nav>
      <details className="mobile-nav">
        <summary>Menú</summary>
        <nav aria-label="Navegación móvil">
          <NavigationLinks active={active} />
        </nav>
      </details>
      <Link className="header-contact" href="/#contacto">Hablemos <ArrowIcon /></Link>
    </header>
  );
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: "Inicio", href: "/" }, ...items];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `https://marcoflores.cl${item.href === "/" ? "" : item.href}` : undefined,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <nav className="breadcrumbs" aria-label="Migas de pan">
        {allItems.map((item, index) => (
          <span className="breadcrumb-item" key={`${item.label}-${index}`}>
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </span>
        ))}
      </nav>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand" href="/">Marco Flores</Link>
      <p>Salesforce Developer · Mostazal, Región de O&apos;Higgins, Chile</p>
      <nav className="site-footer-nav" aria-label="Enlaces del sitio">
        <Link href="/salesforce">Salesforce</Link>
        <Link href="/proyectos">Proyectos</Link>
        <Link href="/blog">Artículos</Link>
        <Link href="/privacy">Privacidad</Link>
        <a href="https://www.linkedin.com/in/marco-flores-7b40b62a8/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </footer>
  );
}
