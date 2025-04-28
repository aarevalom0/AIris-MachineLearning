/* eslint-disable react/style-prop-object */
import React from "react";
import { Mail, Instagram, Globe, Github } from "lucide-react";


const integrantes = [
  {
    nombre: "Ing. Valentina Salamanca",
    descripcion: "Creativa y proactiva, con fuerte compromiso hacia el trabajo en equipo e innovación.",
    imagen: "/Images/VS.png",
    linkedin: "http://linkedin.com/in/valentina-salamanca-bautista-072214320",
    github: "",
    instagram: "",
    web: "",
    email: "",
  },
  {
    nombre: "Ing. Anderson Arevalo",
    descripcion: "Arquitecto del modelo IA y responsable del desarrollo web y despliegue en la nube.",
    imagen: "/Images/AAM.jpeg",
    linkedin: "https://www.linkedin.com/in/aarevalom/",
    github: "https://github.com/aarevalom0",
    instagram: "https://www.instagram.com/a.arevalom01/",
    web: "https://aarevalom0.github.io/",
    email: "",
  },
  {
    nombre: "Ing. Sara Sanchez",
    descripcion: "Apoyo en diseño y desarrollo de modelos 3D para el dispositivo.",
    imagen: "/Images/Sara.png",
    linkedin: "https://www.linkedin.com/in/sj-sanchezf",
    github: "",
    instagram: "",
    web: "",
    email: "",
  },
  {
    nombre: "Ing. Maria del Mar Urrea",
    descripcion: "Creativa y comprometida en el diseño de prototipos de impacto positivo.",
    imagen: "/Images/Maria.png",
    linkedin: "",
    github: "",
    instagram: "",
    web: "",
    email: "",
  },
  {
    nombre: "Ing. Sebastian Melo",
    descripcion: "Enfocado en diseño de dispositivo y construcción de prototipos funcionales.",
    imagen: "/Images/Sebastian.png",
    linkedin: "",
    github: "",
    instagram: "",
    web: "",
    email: "",
  },
];

const asesores = [
  {
    nombre: "Oftalmólogo Gerardo Salamanca",
    descripcion: "Especialista con 25+ años en diagnóstico y cirugía ocular, director del Instituto Oftalmológico Salamanca.",
    imagen: "./Images/gerardo.png",
    linkedin: "",
    github: "",
    instagram: "",
    web: "",
    email: "gerardo@vitavision.com",
  }
];

const translations = {
  es: {
    teamTitle: "Nuestro Equipo",
    teamSubtitle: "Conoce a las personas detrás de VitaVision AI-ris",
    advisorsTitle: "Asesores Científicos",
    membersTitle: "Equipo Principal",
  },
  en: {
    teamTitle: "Our Team",
    teamSubtitle: "Meet the people behind VitaVision AI-ris",
    advisorsTitle: "Scientific Advisors",
    membersTitle: "Core Team",
  },
  fr: {
    teamTitle: "Notre Équipe",
    teamSubtitle: "Rencontrez les experts derrière VitaVision AI-ris",
    advisorsTitle: "Conseillers Scientifiques",
    membersTitle: "Équipe Principale",
  },
};

function Team() {
  const { language } = "es";
  const t = translations[language] || translations["es"];

  const renderIcons = (person) => (
    <div className="d-flex justify-content-center gap-2 mt-2">
      {person.linkedin && (
  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-dark">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
      <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.4 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.724A.723.723 0 0 1 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.356-.554 1.356-1.248-.015-.708-.52-1.248-1.342-1.248-.822 0-1.356.54-1.356 1.248 0 .694.52 1.248 1.327 1.248h.015zm4.908 8.212V9.359c0-.213.015-.426.079-.578.174-.426.571-.87 1.238-.87.872 0 1.22.656 1.22 1.619v3.864h2.401V9.312c0-2.227-1.184-3.26-2.765-3.26-1.276 0-1.845.7-2.165 1.193v.025h-.015a5.374 5.374 0 0 1 .015-.025V6.169H6.542c.03.7 0 7.225 0 7.225h2.401z"/>
    </svg>
  </a>
)}
      {person.github && (
        <a href={person.github} target="_blank" rel="noopener noreferrer" className="text-dark">
          <Github size={20} />
        </a>
      )}
      {person.instagram && (
        <a href={person.instagram} target="_blank" rel="noopener noreferrer" className="text-dark">
          <Instagram size={20} />
        </a>
      )}
      {person.web && (
        <a href={person.web} target="_blank" rel="noopener noreferrer" className="text-dark">
          <Globe size={20} />
        </a>
      )}
      {person.email && (
        <a href={`mailto:${person.email}`} className="text-dark">
          <Mail size={20} />
        </a>
      )}
    </div>
  );

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4">{t.teamTitle}</h1>
        <p className="lead">{t.teamSubtitle}</p>
      </div>

      <h2 className="text-center mb-4">{t.advisorsTitle}</h2>
      <div className="row justify-content-center mb-5">
        {asesores.map((asesor, index) => (
          <div key={index} className="col-md-4 d-flex align-items-stretch mb-4">
            <div className="card border-0 shadow-sm text-center">
              <img src={asesor.imagen} className="card-img-top" alt={asesor.nombre} />
              <div className="card-body">
                <h5 className="card-title">{asesor.nombre}</h5>
                <p className="card-text">{asesor.descripcion}</p>
                {renderIcons(asesor)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center mb-4">{t.membersTitle}</h2>
      <div className="row">
        {integrantes.map((integrante, index) => (
          <div key={index} className="col-md-4 d-flex align-items-stretch mb-4">
            <div className="card border-0 shadow-sm text-center">
              <img src={integrante.imagen} alt="Miembro" class="img-fluid" style={{width: "100%", height: "100%", objectFit: "cover"}} />
              <div className="card-body">
                <h5 className="card-title">{integrante.nombre}</h5>
                <p className="card-text">{integrante.descripcion}</p>
                {renderIcons(integrante)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
