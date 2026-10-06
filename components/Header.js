import Link from 'next/link';

export default function Header() {
  return (
    <header className="topbar">
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Dobra, página inicial">
          <span>Dobra</span>
        </Link>
        <nav className="topnav" aria-label="Tipos de sólido">
          <Link href="/#poliedros">Poliedros</Link>
          <Link href="/#redondos">Corpos redondos</Link>
        </nav>
      </div>
    </header>
  );
}
