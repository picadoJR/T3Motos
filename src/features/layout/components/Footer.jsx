import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Marca */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">SuperBikes</h5>
            <p style={{ fontSize: "14px" }}>
              Pasión por las motos y la velocidad. Encuentra las mejores opciones del mercado.
            </p>
          </div>

          {/* Navegación */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Enlaces</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Inicio</a></li>
              <li><a href="/productos" className="text-white text-decoration-none">Motos</a></li>
              <li><a href="/contacto" className="text-white text-decoration-none">Contacto</a></li>
            </ul>
          </div>

          {/* Redes */}
          <div className="col-md-4 mb-3 text-center">
            <h6 className="fw-bold">Síguenos</h6>
            <div className="d-flex justify-content-center gap-3 fs-4">

              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white"
              >
                <FaFacebook />
              </a>

              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white"
              >
                <FaInstagram />
              </a>

              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

        </div>

        <hr className="border-light" />
        <div className="text-center">
          <small>
            © 2026 | SuperBikes | Reinaldo Picado | 3006264600
          </small>
        </div>
      </div>
    </footer>
  );
};