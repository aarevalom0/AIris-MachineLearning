import { Link } from "react-router-dom";


function Navbar() {
  
  const content = {
    en: {
      home: "Home",
      model: "About",
      team: "Team",
      contact: "Contact",
      services: "Services"
    },
    es: {
      home: "Inicio",
      model: "Diagnostico AI-ris",
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

  const currentContent =  content.es;
  
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
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  {currentContent.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/model" className="nav-link">
                  {currentContent.model}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="nav-link">
                  {currentContent.team}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  {currentContent.services}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
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