function Header() {
  return (
    <>
      <header className="cab">
        <div className="logo">
          <img src="/escudo.png" alt="Logo de la pagina" />
        </div>
        <nav className="menu">
          <ul>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Contacto</li>
            <li>Servicio</li>
          </ul>
        </nav>
        <nav className="menu-s">
          <ul>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Contacto</li>
            <li>Servicio</li>
          </ul>
        </nav>
        <form className="browser">
          <input placeholder="Buscar" />
          <span className="bt-browser">
            <img src="./magnifying-glass.svg" />
          </span>
          <span className="mark-x">
            <img src="./x-mark.svg" />
          </span>
        </form>
      </header>
    </>
  );
}

export default Header;
