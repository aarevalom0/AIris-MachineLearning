import { Mail, Phone, MapPin, Instagram, Linkedin,  Globe, Github  } from "lucide-react";


export function Footer() {
  const { language } = "es";

  const content = {
    en: {
      about: "About VitaVision",
      aboutText: "VitaVision uses advanced AI technology to detect early signs of glaucoma, helping to preserve vision and improve eye care accessibility worldwide.",
      contact: "Contact Us",
      address: "123 Innovation Drive, San Francisco, CA 94107",
      email: "contact@vitavision.com",
      phone: "+1 (234) 567-890",
      links: "Quick Links",
      linkItems: ["Home", "Services", "Team", "AI-ris Diagnosis", "Contact Us"],
      subscribe: "Stay Updated",
      subscribeText: "Subscribe to our newsletter for the latest updates",
      subscribeButton: "Subscribe",
      emailPlaceholder: "Your email",
      copyright: "© 2024 VitaVision. All rights reserved."
    },
    es: {
      about: "Acerca de VitaVision",
      aboutText: "VitaVision utiliza tecnología avanzada de IA para detectar signos tempranos de glaucoma, ayudando a preservar la visión y mejorar el acceso al cuidado ocular en todo el mundo.",
      contact: "Contáctanos",
      address: "123 Centro Médico, Bogotá, Colombia",
      email: "contacto@vitavision.com",
      phone: "+57 123 456 7890",
      links: "Enlaces Rápidos",
      linkItems: ["Inicio", "Servicios", "Equipo", "Diagnostico AI-ris", "Contactenos"],
      subscribe: "Mantente Actualizado",
      subscribeText: "Suscríbete a nuestro boletín para recibir las últimas actualizaciones",
      subscribeButton: "Suscribirse",
      emailPlaceholder: "Tu correo",
      copyright: "© 2024 VitaVision. Todos los derechos reservados."
    },
    fr: {
      about: "À Propos de VitaVision",
      aboutText: "VitaVision utilise une technologie d'IA avancée pour détecter les signes précoces de glaucome, aidant à préserver la vision et à améliorer l'accessibilité aux soins oculaires dans le monde entier.",
      contact: "Contactez-Nous",
      address: "123 Centre Médical, Paris, France",
      email: "contact@vitavision.com",
      phone: "+33 123 456 789",
      links: "Liens Rapides",
      linkItems: ["Accueil", "Services", "Équipe", "Recherche", "Politique de Confidentialité"],
      subscribe: "Restez Informé",
      subscribeText: "Abonnez-vous à notre newsletter pour les dernières mises à jour",
      subscribeButton: "S'abonner",
      emailPlaceholder: "Votre email",
      copyright: "© 2024 VitaVision. Tous droits réservés."
    }
  };
  
  const currentContent = content[language] || content.es;
  const routeMap = {
    0: "/",
    1: "/services",
    2: "/team",
    3: "model",
    4: "/contact"
  };
  const Mensaje = () => {
    alert("Ya te encuestras suscrito a nuestro boletín, pronto recibirás novedades.");
  };
  return (
    
    <footer className="bg-black text-white pt-16 pb-8">
      <br></br>
      <div className="container mx-auto px-4">
        <div className="row mb-5">
          {/* About */}
          <div className="col-md-3 mb-4">
            <h3 className="h5 mb-3 font-weight-bold">{currentContent.about}</h3>
            <p className="text-gray-300 small">{currentContent.aboutText}</p>
            <div className="d-flex mt-3">
            <a href="https://www.instagram.com/a.arevalom01/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <Instagram size={20} />
              </a>
              <a href="https://aarevalom0.github.io/" aria-label="Web" className="me-3 text-white hover-text-primary">
                <Globe size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aarevalom/" aria-label="LinkedIn" className="me-3 text-white hover-text-primary">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/aarevalom0" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h3 className="h5 mb-3 font-weight-bold">{currentContent.contact}</h3>
            <div className="mb-2">
              <div className="d-flex align-items-center mb-2">
                <Mail className="me-2" size={16} />
                <a href={`mailto:${currentContent.email}`} className="text-white text-decoration-none small">
                  {currentContent.email}
                </a>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Phone className="me-2" size={16} />
                <a href={`tel:${currentContent.phone}`} className="text-white text-decoration-none small">
                  {currentContent.phone}
                </a>
              </div>
              <div className="d-flex align-items-start">
                <MapPin className="me-2 mt-1" size={16} />
                <span className="small">{currentContent.address}</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h3 className="h5 mb-3 font-weight-bold">{currentContent.links}</h3>
            <ul className="list-unstyled">
              {currentContent.linkItems.map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={routeMap[index]} className="text-white text-decoration-none small hover-text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h3 className="h5 mb-3 font-weight-bold">{currentContent.subscribe}</h3>
            <p className="text-gray-300 small mb-3">{currentContent.subscribeText}</p>
            <form className="d-flex flex-column">
              <div className="mb-2">
                <input
                  type="email"
                  placeholder={currentContent.emailPlaceholder}
                  className="form-control form-control-sm bg-dark text-white border-secondary"
                />
              </div>
              <button
                type="submit"
                className="btn btn btn-light btn-sm"
                onClick={Mensaje}
              >
                {currentContent.subscribeButton}
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-top border-secondary pt-4 text-center text-gray-400 small">
          <p className="mb-0">{currentContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;