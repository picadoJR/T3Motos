import React, { useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ShopContext } from "../../context/ShopContext";

export const Content = () => {

  const { agregarFavorito, quitarFavorito, favoritos, agregarCarrito } = useContext(ShopContext);

  const productos = [
    {
      id: 1,
      nombre: "Yamaha MT09SP",
      precio: 72000000,
      descuento: 120000,
      imagen: "/img/mt09sp.webp",
      rating: 4
    },
    {
      id: 2,
      nombre: "Kawasaki ZH2",
      precio: 120000000,
      descuento: 69000,
      imagen: "/img/ZH2.webp",
      rating: 5
    },
    {
      id: 3,
      nombre: "Hayabusa",
      precio: 21000000,
      descuento: 179000,
      imagen: "/img/hayabusa.webp",
      rating: 4
    },
    {
      id: 4,
      nombre: "BMW M1000RR",
      precio: 280000000,
      descuento: 240000,
      imagen: "/img/m1000rr.webp",
      rating: 3
    }
  ];

  return (
    <>

      {/* HERO */}
      <section className="bg-light py-5">
        <div className="container text-center">

          <h1 className="display-4 fw-bold mb-3">
            Las mejores SuperBikers en Colombia
          </h1>

          <p className="lead text-muted mb-4">
            Confiabilidad, calidad y los mejores precios.
          </p>

          <a href="#articulos" className="btn btn-primary btn-lg">
            Explorar ahora
          </a>

          {/* BOTÓN GITHUB */}
          <a
            href="https://github.com/picadoJR/T3Motos.git"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-lg ms-3"
          >
            Ver en GitHub 🚀
          </a>

        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="articulos" className="py-5">

        <div className="container">

          <h2 className="text-center mb-5">
            Artículos destacados
          </h2>

          <div className="row g-4">

            {productos.map((producto) => {

              const esFavorito = favoritos?.some(f => f.id === producto.id);

              const descuentoPorcentaje =
                Math.round(((producto.precio - producto.descuento) / producto.precio) * 100);

              return (

                <div key={producto.id} className="col-md-6 col-lg-3">

                  <div className="card h-100 shadow-sm border-0">

                    <div className="position-relative">

                      {/* etiqueta descuento */}
                      <span className="badge bg-danger position-absolute m-2">
                        -{descuentoPorcentaje}%
                      </span>

                      {/* BOTÓN FAVORITOS */}
                      <button
                        onClick={() =>
                          esFavorito
                            ? quitarFavorito(producto.id)
                            : agregarFavorito(producto)
                        }
                        className="btn btn-light position-absolute"
                        style={{
                          top: "10px",
                          right: "10px",
                          borderRadius: "50%"
                        }}
                      >
                        {esFavorito
                          ? <FavoriteIcon color="error" />
                          : <FavoriteBorderIcon />}
                      </button>

                      <img
                        src={producto.imagen}
                        className="card-img-top"
                        style={{ height: "220px", objectFit: "cover" }}
                        alt={producto.nombre}
                      />

                    </div>

                    <div className="card-body d-flex flex-column">

                      <h5 className="card-title">
                        {producto.nombre}
                      </h5>

                      {/* Rating dinámico */}
                      <div className="text-warning mb-2">
                        {"⭐".repeat(producto.rating)}
                        {"☆".repeat(5 - producto.rating)}
                      </div>

                      {/* precios */}
                      <div className="mt-auto">

                        <p className="text-muted mb-1">
                          <del>${producto.precio.toLocaleString()}</del>
                        </p>

                        <h5 className="text-primary">
                          ${producto.descuento.toLocaleString()}
                        </h5>

                        <button
                          className="btn btn-primary w-100 mt-2"
                          onClick={() => agregarCarrito(producto)}
                        >
                          🛒 Añadir al carrito
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              )

            })}

          </div>

        </div>

      </section>

    </>
  );
};