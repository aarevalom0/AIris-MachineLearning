import { Mail, Phone, Instagram, Facebook, Twitter, Linkedin, Globe, Copyright,Github  } from "lucide-react";

export function Footer() {
  
  const content = {
    en: {
      company: "VitaVision",
      rights: "All rights reserved",
      contact: "Contact Us",
      address: "123 Medical Center, Bogotá, Colombia",
      email: "contact@vitavision.com",
      phone: "+57 123 456 7890",
      follow: "Follow Us"
    },
    es: {
      company: "VitaVision",
      rights: "Todos los derechos reservados",
      contact: "Contáctanos",
      address: "123 Centro Médico, Bogotá, Colombia",
      email: "contacto@vitavision.com",
      phone: "+57 123 456 7890",
      follow: "Síguenos"
    },
    fr: {
      company: "VitaVision",
      rights: "Tous droits réservés",
      contact: "Contactez-nous",
      address: "123 Centre Médical, Bogotá, Colombie",
      email: "contact@vitavision.com",
      phone: "+57 123 456 7890",
      follow: "Suivez-nous"
    }
  };

  const currentContent = content.es;

  return (
    <footer className="bg-light border-top">
      <div className="container py-5">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-md-4">
            <h5 className="fw-bold">{currentContent.company}</h5>
            <p className="text-muted d-flex align-items-center mt-3">
              <Globe size={18} className="me-2" />
              {currentContent.address}
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="fw-bold">{currentContent.contact}</h5>
            <div className="mt-3">
              <p className="text-muted d-flex align-items-center mb-2">
                <Mail size={18} className="me-2" />
                {currentContent.email}
              </p>
              <p className="text-muted d-flex align-items-center">
                <Phone size={18} className="me-2" />
                {currentContent.phone}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-md-4">
            <h5 className="fw-bold">{currentContent.follow}</h5>
            <div className="d-flex mt-3">
              <a href="https://www.instagram.com/a.arevalom01/" target="_blank" rel="noopener noreferrer" className="text-muted me-3">
                <Instagram size={20} />
              </a>
              <a href="https://github.com/aarevalom0" target="_blank" rel="noopener noreferrer" className="text-muted me-3">
                <Github size={20} />
              </a>

              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted me-3">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted me-3">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aarevalom/" target="_blank" rel="noopener noreferrer" className="text-muted">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-5 pt-4 border-top">
          <small className="text-muted d-flex align-items-center justify-content-center gap-1">
            <Copyright size={16} />
            {new Date().getFullYear()} {currentContent.company}. {currentContent.rights}
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;  
