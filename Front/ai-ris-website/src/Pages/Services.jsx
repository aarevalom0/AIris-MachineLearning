import { useState } from "react";
import { Eye, Package, CheckCircle, AlertCircle } from "lucide-react";

function Services() {
  const { language } = "es";
  const [showPlans, setShowPlans] = useState(false);

  const content = {
    en: {
      title: "VitaVision Services",
      subtitle: "We offer technological solutions for early glaucoma diagnosis and other eye conditions",
      individualDiagnosis: {
        title: "Individual Diagnosis",
        description: "Get an accurate diagnosis for just $5,000. Ideal for individual users who want to know if they show signs of glaucoma.",
        button: "Request diagnosis"
      },
      diagnosisPacks: {
        title: "Diagnosis Packages",
        description: "Access volume plans for healthcare centers. Preferential rates from $4,800 per diagnosis.",
        button: "View available plans",
        hideButton: "Hide plans"
      },
      deviceSection: {
        title: "Universal Fundus Camera Adapter",
        subtitle: "Transform your smartphone into a powerful diagnostic tool",
        description: "Our universal cell phone support device allows the capture of high-quality retinal images using any smartphone. Perfect for telemedicine and remote diagnosis in areas with limited access to specialized equipment.",
        features: [
          "Compatible with most smartphone models",
          "Easy to use with minimal training",
          "Portable and lightweight design",
          "Durable medical-grade materials",
          "Clear, diagnostic-quality images"
        ],
        cta: "Request more information"
      },
      plans: [
        {
          name: "Basic Plan",
          description: "Includes 20 diagnoses per month. Ideal for small medical offices.",
          price: "$96,000/month",
        },
        {
          name: "Professional Plan",
          description: "Includes 50 diagnoses per month. Perfect for medium-sized clinics.",
          price: "$240,000/month",
        },
        {
          name: "Enterprise Plan",
          description: "Unlimited diagnoses. Aimed at hospitals and large healthcare centers.",
          price: "$320,000/month",
        },
      ]
    },
    es: {
      title: "Servicios VitaVision",
      subtitle: "Ofrecemos soluciones tecnológicas para el diagnóstico temprano del glaucoma y otras condiciones oculares",
      individualDiagnosis: {
        title: "Diagnóstico Individual",
        description: "Obtén un diagnóstico preciso por solo $9.000. Ideal para usuarios individuales que desean saber si presentan signos de glaucoma.",
        button: "Solicitar diagnóstico"
      },
      diagnosisPacks: {
        title: "Paquetes de diagnósticos",
        description: "Accede a planes por volumen para centros de salud. Tarifas preferenciales por diagnóstico próximamente disponibles.",
        button: "Ver planes disponibles",
        hideButton: "Ocultar planes"
      },
      deviceSection: {
        title: "Adaptador Universal para Cámara de Fondo del ojo",
        subtitle: "Transforma tu smartphone en una poderosa herramienta de diagnóstico",
        description: "Nuestro dispositivo de soporte universal para teléfonos móviles permite la captura de imágenes del fondo del ojo de alta calidad usando cualquier smartphone. Perfecto para telemedicina y diagnóstico remoto en áreas con acceso limitado a equipos especializados.",
        features: [
          "Compatible con la mayoría de modelos de smartphones",
          "Fácil de usar con entrenamiento mínimo",
          "Diseño portátil y ligero",
          "Materiales duraderos de grado médico",
          "Imágenes claras de calidad diagnóstica"
        ],
        cta: "Solicitar más información"
      },
      plans: [
        {
          name: "Plan Básico",
          description: "Incluye 20 diagnósticos al mes. Ideal para consultorios pequeños.",
          price: "$96.000/mes",
        },
        {
          name: "Plan Profesional",
          description: "Incluye 50 diagnósticos al mes. Perfecto para clínicas medianas.",
          price: "$240.000/mes",
        },
        {
          name: "Plan Empresarial",
          description: "Diagnósticos ilimitados. Dirigido a hospitales y centros de salud grandes.",
          price: "$320.000/mes",
        },
      ]
    },
    fr: {
      title: "Services VitaVision",
      subtitle: "Nous proposons des solutions technologiques pour le diagnostic précoce du glaucome et d'autres conditions oculaires",
      individualDiagnosis: {
        title: "Diagnostic Individuel",
        description: "Obtenez un diagnostic précis pour seulement 5 000 $. Idéal pour les utilisateurs individuels qui souhaitent savoir s'ils présentent des signes de glaucome.",
        button: "Demander un diagnostic"
      },
      diagnosisPacks: {
        title: "Forfaits de diagnostic",
        description: "Accédez à des forfaits en volume pour les centres de santé. Tarifs préférentiels à partir de 4 800 $ par diagnostic.",
        button: "Voir les forfaits disponibles",
        hideButton: "Masquer les forfaits"
      },
      deviceSection: {
        title: "Adaptateur Universel pour Caméra de Fond d'Œil",
        subtitle: "Transformez votre smartphone en un puissant outil de diagnostic",
        description: "Notre support universel pour smartphone permet la capture d'images rétiniennes de haute qualité à l'aide de n'importe quel smartphone. Parfait pour la télémédecine et le diagnostic à distance dans les zones à accès limité aux équipements spécialisés.",
        features: [
          "Compatible avec la plupart des modèles de smartphones",
          "Facile à utiliser avec une formation minimale",
          "Conception portable et légère",
          "Matériaux durables de qualité médicale",
          "Images claires de qualité diagnostique"
        ],
        cta: "Demander plus d'informations"
      },
      plans: [
        {
          name: "Forfait Basique",
          description: "Comprend 20 diagnostics par mois. Idéal pour les petits cabinets médicaux.",
          price: "96 000 $/mois",
        },
        {
          name: "Forfait Professionnel",
          description: "Comprend 50 diagnostics par mois. Parfait pour les cliniques de taille moyenne.",
          price: "240 000 $/mois",
        },
        {
          name: "Forfait Entreprise",
          description: "Diagnostics illimités. Destiné aux hôpitaux et grands centres de santé.",
          price: "320 000 $/mois",
        },
      ]
    }
  };

  const currentContent = content.es ;

  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">{currentContent.title}</h1>
        <p className="lead">{currentContent.subtitle}</p>
      </div>

      {/* Main Services */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card h-100 shadow border-0">
            <div className="card-body d-flex flex-column text-center p-4">
              <div className="text-dark mb-3">
                <Eye size={48} className="mx-auto" />
              </div>
              <h3 className="card-title fw-bold">{currentContent.individualDiagnosis.title}</h3>
              <p className="card-text flex-grow-1">{currentContent.individualDiagnosis.description}</p>
              <a href="/model" class="btn btn-dark mt-3"role="button" aria-disabled="true">Solicitar diagnóstico </a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow border-0">
            <div className="card-body d-flex flex-column text-center p-4">
              <div className="text-dark mb-3">
                <Package size={48} className="mx-auto" />
              </div>
              <h3 className="card-title fw-bold">{currentContent.diagnosisPacks.title}</h3>
              <p className="card-text flex-grow-1">{currentContent.diagnosisPacks.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      {showPlans && (
        <div className="row g-4 mb-5">
          {currentContent.plans.map((plan, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center p-4">
                  <h4 className="card-title fw-bold mb-3">{plan.name}</h4>
                  <p className="card-text mb-4">{plan.description}</p>
                  <div className="badge bg-dark text-white p-2 fs-5">{plan.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Device Section */}
      <div className="card shadow-lg border-0 overflow-hidden mb-5">
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="p-5">
              <h2 className="fw-bold mb-2">{currentContent.deviceSection.title}</h2>
              <p className="lead mb-4">{currentContent.deviceSection.subtitle}</p>
              <p className="mb-4">{currentContent.deviceSection.description}</p>
              
              <h5 className="fw-bold mb-3">Caracteristicas principales:</h5>
              <ul className="list-unstyled">
                {currentContent.deviceSection.features.map((feature, index) => (
                  <li key={index} className="d-flex align-items-center mb-2">
                    <CheckCircle size={18} className="text-dark me-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="badge bg-dark text-white p-2 fs-5">$360,000</div>
              <a href="/tutorial" class="btn btn-lg btn-dark mt-4"role="button" aria-disabled="true">Solicitar mas información </a>
            </div>
          </div>
          <div className="col-lg-6 bg-light d-flex align-items-center justify-content-center p-5">
            <div className="text-center">
              <img 
                src="/Images/support.png" 
                alt="Universal Fundus Camera" 
                className="img-fluid rounded shadow" 
              />
              
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-light p-4 rounded-3 shadow-sm border-start border-5 border-dark">
        <div className="d-flex">
          <div className="me-3">
            <AlertCircle size={24} className="text-dark" />
          </div>
          <div>
            <h5 className="fw-bold">La detección temprana es crucial</h5>
            <p className="mb-0">El glaucoma se conoce a menudo como el "ladrón silencioso de la vista" porque puede desarrollarse sin síntomas perceptibles hasta que se produce una pérdida significativa de la visión. Nuestras herramientas de diagnóstico avanzadas ayudan a detectar signos tempranos, lo que aumenta las tasas de éxito del tratamiento.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;