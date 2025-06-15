import { ArrowRight, Eye, Brain, Clock } from "lucide-react";


const Home = () => {
  const { language } = "es";

  const content = {
    en: {
      hero: {
        title: "AI-Powered Glaucoma Detection",
        subtitle: "Early detection through advanced artificial intelligence, protecting your vision for the future",
        cta: "Try AI Detection"
      },
      features: {
        title: "Why Choose VitaVision",
        subtitle: "Advanced technology meets medical expertise for accurate glaucoma detection"
      },
      about: {
        title: "About VitaVision",
        content: "VitaVision is at the forefront of revolutionizing eye care through artificial intelligence. Our mission is to make early glaucoma detection accessible to everyone, combining cutting-edge technology with medical expertise.",
      },
      impact: {
        title: "Our Impact",
        stats: [
          { number: "85%", label: "Accuracy Rate" },
          { number: "10k+", label: "Screenings Performed" },
          { number: "24/7", label: "Available Support" }
        ]
      }
    },
    es: {
      hero: {
        title: "Detección de Glaucoma con IA",
        subtitle: "Detección temprana mediante inteligencia artificial avanzada, protegiendo tu visión para el futuro",
        cta: "Probar Detección IA"
      },
      features: {
        title: "Por Qué Elegir VitaVision",
        subtitle: "Tecnología avanzada se une a la experiencia médica para una detección precisa del glaucoma"
      },
      about: {
        title: "Sobre VitaVision",
        content: "VitaVision está a la vanguardia en la revolución del cuidado ocular mediante inteligencia artificial. Nuestra misión es hacer que la detección temprana del glaucoma sea accesible para todos, combinando tecnología de punta con experiencia médica.",
      },
      impact: {
        title: "Nuestro Impacto",
        stats: [
          { number: "1", label: "Países Alcanzados" },
          { number: "24/7", label: "Soporte Disponible" }
        ]
      }
    },
    fr: {
      hero: {
        title: "Détection du Glaucome par IA",
        subtitle: "Détection précoce grâce à l'intelligence artificielle avancée, protégeant votre vision pour l'avenir",
        cta: "Essayer la Détection IA"
      },
      features: {
        title: "Pourquoi Choisir VitaVision",
        subtitle: "La technologie avancée rencontre l'expertise médicale pour une détection précise du glaucome"
      },
      about: {
        title: "À Propos de VitaVision",
        content: "VitaVision est à l'avant-garde de la révolution des soins oculaires grâce à l'intelligence artificielle. Notre mission est de rendre la détection précoce du glaucome accessible à tous, en combinant une technologie de pointe avec une expertise médicale.",
      },
      impact: {
        title: "Notre Impact",
        stats: [
          { number: "98%", label: "Taux de Précision" },
          { number: "10k+", label: "Dépistages Effectués" },
          { number: "24/7", label: "Support Disponible" }
        ]
      }
    }
  };

  const currentContent = content[language] || content.es;

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center px-3">
        <h1 className="display-3 fw-bold mb-4">{currentContent.hero.title}</h1>
        <p className="lead text-muted mb-5">{currentContent.hero.subtitle}</p>
        <a href="/model" class="btn btn-dark btn-lg d-flex align-items-center"role="button" aria-disabled="true">
            {currentContent.hero.cta}
          <ArrowRight className="ms-2" size={20} />
        </a>
        
      </section>
            {/* Pitch section */}
      <section className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center seccion-2">
        <br />
        <h2 className="display-6 fw-bold mb-3">Potencia tu Diagnóstico con AI-RIS</h2>
        <p className="lead text-muted mb-5">Descubre cómo nuestra tecnología puede mejorar la precisión y eficiencia en el diagnóstico del glaucoma.
          <iframe 
            src="https://www.youtube.com/embed/8QwFK0Tb33Q?autoplay=1&mute=0" 
            title="YouTube video player"
            className="video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe></p>
          <br />
      </section>

      {/* About Section */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">{currentContent.about.title}</h2>
          <p className="lead mb-5">{currentContent.about.content}</p>
          <div className="row">
            {currentContent.impact.stats.map((stat, index) => (
              <div className="col" key={index}>
                <h3 className="fw-bold">{stat.number}</h3>
                <p className="text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="display-6 fw-bold mb-3">{currentContent.features.title}</h2>
          <p className="text-muted mb-5">{currentContent.features.subtitle}</p>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div className="col-12 col-md-4" key={index}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body d-flex flex-column align-items-center text-center">
                    <feature.icon size={48} className="mb-3 text-black" />
                    <h5 className="card-title mb-2">{feature.title.es}</h5>
                    <p className="card-text text-muted">{feature.description.es}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="seccion-2 py-5">
        <div className="container text-center">
          <h2 className="display-6 fw-bold mb-4">Unete al Futuro del Cuidado Ocular</h2>
          <p className="lead mb-5">Experimenta el poder de la IA en la detección del glaucoma. Comienza tu viaje con VitaVision hoy.</p>
          <a href="/model" class="btn btn-dark btn-lg align-items-center"role="button" aria-disabled="true">
            {currentContent.hero.cta}
          <ArrowRight className="ms-2" size={20} />
        </a>
        </div>
      </section>



    </div>
  );

};

const features = [
  {
    icon: Eye,
    title: {
      en: "Early Detection",
      es: "Detección Temprana",
      fr: "Détection Précoce"
    },
    description: {
      en: "Advanced AI algorithms detect early signs of glaucoma with high accuracy.",
      es: "Algoritmos avanzados de IA detectan signos tempranos de glaucoma con alta precisión.",
      fr: "Les algorithmes d'IA avancés détectent les signes précoces du glaucome avec une grande précision."
    }
  },
  {
    icon: Brain,
    title: {
      en: "AI-Powered Analysis",
      es: "Análisis con IA",
      fr: "Analyse Propulsée par l'IA"
    },
    description: {
      en: "State-of-the-art machine learning for precise and reliable results.",
      es: "Aprendizaje automático de última generación para resultados precisos y confiables.",
      fr: "Apprentissage automatique de pointe pour des résultats précis et fiables."
    }
  },
  {
    icon: Clock,
    title: {
      en: "Instant Results",
      es: "Resultados Instantáneos",
      fr: "Résultats Instantanés"
    },
    description: {
      en: "Get detailed analysis and recommendations in seconds.",
      es: "Obtén análisis detallados y recomendaciones en segundos.",
      fr: "Obtenez une analyse détaillée et des recommandations en quelques secondes."
    }
  }
];

export default Home;
