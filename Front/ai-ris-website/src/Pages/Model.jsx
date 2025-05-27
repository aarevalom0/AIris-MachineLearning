import { useState, useRef } from "react";
import axios from 'axios';
import { Upload, Image as ImageIcon, X } from "lucide-react";

function Model() {
  const { language } = "es";
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [nameImage, setNameImage] = useState('');
  const [prediccion, setPrediccion] = useState(null);
  
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
  
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    processFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    processFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const processFile = (file) => {
    if (!file) return;
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      alert(currentContent.invalidFormat);
      return;
    }
    setNameImage(file.name);
    const formData = new FormData();
    formData.append('file', file);

    const reader = new FileReader();
    reader.onloadend = async () => {
        
        try {
            await axios.post('http://35.232.127.177:8000/upload', formData);
            console.log("Imagen subida con éxito:", file.name);
        } catch (error) {
            console.error("Error subiendo la imagen:", error);
        }
    };
    setIsUploading(true);
    reader.onload = (e) => {
      setPreviewUrl(e.target.result);
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handlePredict = async () => {
    if (!nameImage) {
        alert("Sube una imagen primero.");
        return;
    }

    console.log("Solicitando predicción para:", nameImage);

    try {
        const response = await axios.get(`http://35.232.127.177:8000/predecir/${nameImage}`);
        console.log("Respuesta de la API:", response.data);

        let data = response.data;
        if (typeof data === 'string') {
            data = JSON.parse(data);
        }

        setPrediccion(data);
    } catch (error) {
        console.error("Error en la predicción:", error);
    }
};

  const clearImage = () => {
    setPreviewUrl(null);
    setPrediccion(null);
    setNameImage('');
    setIsUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4">{currentContent.title}</h1>
        <p className="text-muted">{currentContent.description}</p>
      </div>

      <div className="row justify-content-center g-4">
        {/* Upload Photo Section - Improved UI */}
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white py-3">
              <h5 className="card-title mb-1">{currentContent.uploadTitle}</h5>
              <small className="text-muted">{currentContent.uploadDescription}</small>
            </div>
            
            <div className="card-body p-4">
              {previewUrl ? (
                <div className="position-relative upload-container">
                  <div className="upload-preview rounded overflow-hidden mb-2" style={{height: "250px"}}>
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="w-100 h-100 object-fit-contain" 
                    />
                  </div>
                  <button
                    onClick={clearImage}
                    className="btn btn-sm btn-light position-absolute top-0 end-0 m-2 rounded-circle"
                    style={{width: "32px", height: "32px", padding: "4px"}}
                  >
                    <X className="w-100 h-100" />
                  </button>
                </div>
              ) : (
                <div
                  onClick={handleClick}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`d-flex flex-column align-items-center justify-content-center border-2 rounded p-5 upload-dropzone ${
                    isDragging ? 'border-primary bg-light border-primary' : 'border-dashed border-secondary-subtle'
                  }`}
                  style={{height: "250px", transition: "all 0.3s ease", cursor: "pointer"}}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png"
                    className="d-none"
                    onChange={handleFileChange}
                  />
                  <div className={`upload-icon-container ${isDragging ? 'animate-bounce' : ''}`}>
                    <ImageIcon className="mb-3" size={48} style={{color: isDragging ? "#000000" : "#adb5bd"}} />
                  </div>
                  
                  <p className="mb-1 fw-medium">
                    {currentContent.upload} {currentContent.or} <span className="fw-bold">{currentContent.drag}</span>
                  </p>
                  <p className="text-muted small mb-3">{currentContent.formats}</p>
                  
                  <button
                    className="btn btn-dark"
                    disabled={isUploading}
                  >
                    <Upload className="me-2" size={16} />
                    {isUploading ? currentContent.loading : currentContent.upload}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Analysis Result Section */}
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white py-3 text-center">
              <h5 className="card-title mb-1">{currentContent.analysisTitle}</h5>
              <small className="text-muted">{currentContent.analysisDescription}</small>
              <br></br>
              <button className="btn btn-lg btn-dark mt-4" onClick={handlePredict}>Analizar Imagen</button>
            </div>
            <div className="card-body p-4">
              <div className="d-flex justify-content-between mb-3">
                <span>{currentContent.confidence}</span>
                {prediccion && (
                <span className="badge bg-secondary">{prediccion.Probabilidad}</span>)}
                {!prediccion && (
                <span className="badge bg-secondary">0.00%</span>)}
              </div>
              {!prediccion && (
              <div className="alert alert-secondary" role="alert">
                <h6 className="alert-heading">{currentContent.recommendation}</h6>
                <p className="mb-0">Cuida tu salud visual. Utiliza AI-ris hoy</p>
              </div>
              )}
              {prediccion && (
                <div className="alert alert-secondary" role="alert">
                  <h6 className="alert-heading">{currentContent.recommendation}</h6>
                  <p className="mb-0">{prediccion.Recomendacion}</p>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 1s ease infinite;
        }
        .object-fit-contain {
          object-fit: contain;
        }
      `}</style>
    </div>
  );
}

export default Model;