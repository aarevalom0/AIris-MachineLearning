import { useState, useRef } from "react";
import { Upload, Image as ImageIcon, X } from "lucide-react";

export default function Model() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const language = "es"; // Cambiar dinámicamente según contexto o props
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
      loading: "Analyzing image...",
      clearImage: "Clear Image",
      invalidFormat: "Invalid file format. Please upload a JPG or PNG image.",
    },
    es: {
      title: "Predicción de Síntomas de Glaucoma",
      description: "Sube tu imagen del fondo del ojo y deja que nuestra IA ayude a detectar condiciones oculares potenciales de glaucoma.",
      uploadTitle: "Subir Foto",
      uploadDescription: "Sube una foto para análisis",
      upload: "Subir Foto",
      or: "o",
      drag: "arrastra y suelta",
      formats: "Formatos soportados: JPG, PNG",
      loading: "Analizando imagen...",
      clearImage: "Borrar Imagen",
      invalidFormat: "Formato inválido. Sube una imagen JPG o PNG.",
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
      loading: "Analyse de l'image...",
      clearImage: "Effacer l'image",
      invalidFormat: "Format invalide. Veuillez télécharger une image JPG ou PNG.",
    }
  };

  const t = content[language] || content.es;

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
      alert(t.invalidFormat);
      return;
    }
    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target.result);
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  return (
    <div className="container py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">{t.title}</h1>
        <p className="text-muted-foreground">{t.description}</p>
      </div>

      <div className="max-w-md mx-auto bg-white border rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">{t.uploadTitle}</h2>
          <p className="text-sm text-muted-foreground">{t.uploadDescription}</p>
        </div>

        <div className="p-6">
          {previewUrl ? (
            <div className="relative">
              <div className="aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
                <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
              </div>
              <button
                onClick={clearImage}
                className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div
              onClick={handleClick}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`text-center p-6 border-2 rounded-lg transition-colors duration-200 cursor-pointer ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-dashed border-gray-300'}`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png"
                className="hidden"
                onChange={handleFileChange}
              />
              <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-4 text-sm">{t.or} <strong>{t.drag}</strong></p>
              <p className="text-xs text-gray-500">{t.formats}</p>
              <button
                className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium border rounded hover:bg-gray-100"
                disabled={isUploading}
              >
                <Upload className="mr-2 h-4 w-4" />
                {isUploading ? t.loading : t.upload}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
