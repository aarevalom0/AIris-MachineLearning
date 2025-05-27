import { Link } from "react-router-dom";
import { useState } from "react"; // Importamos useState para manejar el estado del menú

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true); // Estado para controlar si el menú está colapsado
  
  // Función para manejar el clic en el botón toggler
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  const content = {
    en: {
      home: "Home",
      model: "AI-ris Diagnosis",
      team: "Team",
      contact: "Contact",
      services: "Services"
    },
    es: {
      home: "Inicio",
      model: "Diagnóstico AI-ris",
      team: "Equipo",
      contact: "Contacto",
      services: "Servicios"
    },
    fr: {
      home: "Accueil",
      model: "À Propos",
      team: "Équipe",
      contact: "Contact",
      services: "Services"
    }
  };

  const currentContent = content.es;
  
  return (
    <div className="fixed-top border-bottom bg-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <span className="fw-bold fs-4">VitaVision</span>
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded={!isNavCollapsed ? true : false} 
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
    
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={() => setIsNavCollapsed(true)}>
                  {currentContent.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/model" className="nav-link" onClick={() => setIsNavCollapsed(true)}>
                  {currentContent.model}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tutorial" className="nav-link" onClick={() => setIsNavCollapsed(true)}>
                  Tutorial
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="nav-link" onClick={() => setIsNavCollapsed(true)}>
                  {currentContent.team}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link" onClick={() => setIsNavCollapsed(true)}>
                  {currentContent.services}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={() => setIsNavCollapsed(true)}>
                  {currentContent.contact}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;