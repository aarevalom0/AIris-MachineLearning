import { useState } from "react";


function Model() {
  
  const { language } = "es";
  const [previewUrl, setPreviewUrl] = useState(null);
  const content = {
    en: {
      title: "Eye Disease Prediction",
      description: "Upload your retinal scan image and let our AI assist in detecting potential eye conditions.",
      uploadTitle: "Upload Photo",
      uploadDescription: "Upload a photo for analysis",
      upload: "Upload Photo",
      or: "or",
      drag: "drag and drop",
      formats: "Supported formats: JPG, PNG",
      analysisTitle: "Analysis Result",
      analysisDescription: "AI-powered analysis of your retinal scan",
      confidence: "Confidence",
      recommendation: "Recommendation",
      loading: "Analyzing image...",
      error: "Error",
      errorMessage: "An error occurred while analyzing the image. Please try again."
    },
    es: {
      title: "Predicción de Sintomas de Glaucoma",
      description: "Sube tu imagen del fondo del ojo y deja que nuestra IA ayude a detectar condiciones oculares potenciales de glaucoma.",
      uploadTitle: "Subir Foto",
      uploadDescription: "Sube una foto para análisis",
      upload: "Subir Foto",
      or: "o",
      drag: "arrastra y suelta",
      formats: "Formatos soportados: JPG, PNG",
      analysisTitle: "Resultado del Análisis",
      analysisDescription: "Análisis de tu escaneo retinal con IA",
      confidence: "Confianza",
      recommendation: "Recomendación",
      loading: "Analizando imagen...",
      error: "Error",
      errorMessage: "Ocurrió un error al analizar la imagen. Por favor intenta de nuevo."
    },
    fr: {
      title: "Prédiction des Maladies Oculaires",
      description: "Téléchargez votre image de scan rétinien et laissez notre IA aider à détecter les conditions oculaires potentielles.",
      uploadTitle: "Télécharger Photo",
      uploadDescription: "Téléchargez une photo pour l'analyse",
      upload: "Télécharger Photo",
      or: "ou",
      drag: "glisser-déposer",
      formats: "Formats supportés: JPG, PNG",
      analysisTitle: "Résultat d'Analyse",
      analysisDescription: "Analyse de votre scan rétinien par IA",
      confidence: "Confiance",
      recommendation: "Recommandation",
      loading: "Analyse de l'image...",
      error: "Erreur",
      errorMessage: "Une erreur s'est produite lors de l'analyse de l'image. Veuillez réessayer."
    }
  };

  const currentContent = content[language] || content.es;

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4">{currentContent.title}</h1>
        <p className="text-muted">{currentContent.description}</p>
      </div>

      <div className="row justify-content-center g-4">
        {/* Upload Photo Section */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="card-title mb-0">{currentContent.uploadTitle}</h5>
              <small className="text-muted">{currentContent.uploadDescription}</small>
            </div>
            <div className="card-body text-center">
              {previewUrl ? (
                <div className="ratio ratio-16x9 mb-3">
                  <img src={previewUrl} alt="Preview" className="img-fluid rounded" style={{ objectFit: "cover" }} />
                </div>
              ) : (
                <div className="border border-2 border-dashed p-4 rounded mb-3">
                  <i className="bi bi-image" style={{ fontSize: "2rem", color: "#6c757d" }}></i>
                  <p className="mt-3">{currentContent.or} {currentContent.drag}</p>
                  <p className="small text-muted">{currentContent.formats}</p>
                </div>
              )}
              <div className="d-grid">
                <button className="btn btn-outline-dark mt-3">
                  <i className="bi bi-upload me-2"></i>{currentContent.upload}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Result Section */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="card-title mb-0">{currentContent.analysisTitle}</h5>
              <small className="text-muted">{currentContent.analysisDescription}</small>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <span>{currentContent.confidence}</span>
                <span className="badge bg-secondary">95%</span>
              </div>
              <div className="alert alert-primary" role="alert">
                <h6 className="alert-heading">{currentContent.recommendation}</h6>
                <p className="mb-0">Pendiente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Model;
