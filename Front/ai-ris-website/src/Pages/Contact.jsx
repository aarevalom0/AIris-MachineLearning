

function Contact() {
  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Get in touch with our team",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message"
      },
      info: {
        address: "123 Medical Center, Bogotá, Colombia",
        email: "contact@vitavision.com",
        phone: "+57 123 456 7890"
      }
    },
    es: {
      title: "Contáctanos",
      subtitle: "Ponte en contacto con nuestro equipo",
      form: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        submit: "Enviar Mensaje"
      },
      info: {
        address: "123 Centro Médico, Bogotá, Colombia",
        email: "contacto@vitavision.com",
        phone: "+57 123 456 7890"
      }
    },
    fr: {
      title: "Contactez-nous",
      subtitle: "Entrez en contact avec notre équipe",
      form: {
        name: "Nom",
        email: "Email",
        message: "Message",
        submit: "Envoyer le message"
      },
      info: {
        address: "123 Centre Médical, Bogotá, Colombie",
        email: "contact@vitavision.com",
        phone: "+57 123 456 7890"
      }
    }
  };
  const currentContent =  content.es;
  const Mensaje = () => {
    alert("Mensaje Enviado, pronto nos contactaremos contigo");
  };
  return (
    <div class="container py-5">
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="mb-4">
            <h1 class="display-4 fw-bold">{currentContent.title}</h1>
            <p class="text-muted mt-2">{currentContent.subtitle}</p>
          </div>

          <div class="card">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-geo-alt-fill me-3"></i> 
                <div class="text-sm">{currentContent.info.address}</div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-envelope-fill me-3"></i>
                <div class="text-sm">{currentContent.info.email}</div>
              </div>
              <div class="d-flex align-items-center">
                <i class="bi bi-telephone-fill me-3"></i> 
                <div class="text-sm">{currentContent.info.phone}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">{currentContent.form.name}</h5>
              <small class="text-muted">Dejanos todos tus datos. En la menor brevedad te contactaremos</small>
            </div>
            <div class="card-body p-4">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder={currentContent.form.name} />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" placeholder={currentContent.form.email} />
              </div>
              <div class="mb-3">
                <textarea class="form-control" rows="4" placeholder={currentContent.form.message}></textarea>
              </div>
              <button type="button" class="btn btn-dark" onClick={Mensaje}>{currentContent.form.submit}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Contact;