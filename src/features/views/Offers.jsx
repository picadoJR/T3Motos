import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Offers = () => {

  const {
    agregarCarrito,
    agregarFavorito,
    quitarFavorito,
    favoritos
  } = useContext(ShopContext);

  const ofertas = [
     {
      id: 101,
      nombre: "Yamaha MT09SP",
      precio: 72000000,
      descuento: 120000,
      imagen: "/img/mt09sp.webp",
      rating: 4
    },
    {
      id: 102,
      nombre: "Kawasaki ZH2",
      precio: 120000000,
      descuento: 69000,
      imagen: "/img/ZH2.webp",
      rating: 5
    },
    {
      id: 103,
      nombre: "Hayabusa",
      precio: 21000000,
      descuento: 179000,
      imagen: "/img/hayabusa.webp",
      rating: 4
    },
    {
      id: 104,
      nombre: "BMW M1000RR",
      precio: 280000000,
      descuento: 240000,
      imagen: "/img/m1000rr.webp",
      rating: 3
    }
  ];

  return (

    <section className="py-5 bg-light">

      <div className="container">

        <h2 className="text-center mb-5">
          🔥 Ofertas especiales
        </h2>

        <div className="row g-4">

          {ofertas.map((producto) => {

            const esFavorito = favoritos.some(f => f.id === producto.id);

            const porcentaje = Math.round(
              ((producto.precio - producto.descuento) / producto.precio) * 100
            );

            return (

              <div key={producto.id} className="col-md-6 col-lg-3">

                <div className="card h-100 shadow-sm border-0">

                  <div className="position-relative">

                    {/* descuento */}
                    <span className="badge bg-danger position-absolute m-2">
                      -{porcentaje}%
                    </span>

                    {/* favorito */}
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
                        ? <FavoriteIcon color="error"/>
                        : <FavoriteBorderIcon/>
                      }
                    </button>

                    <img
                      src={producto.imagen}
                      loading="lazy"
                      className="card-img-top"
                      style={{height:"220px", objectFit:"cover"}}
                      alt={producto.nombre}
                    />

                  </div>

                  <div className="card-body d-flex flex-column">

                    <h5>{producto.nombre}</h5>

                    <p className="text-muted">
                      {producto.descripcion}
                    </p>

                    {/* rating */}
                    <div className="text-warning mb-2">
                      {"⭐".repeat(producto.rating)}
                      {"☆".repeat(5 - producto.rating)}
                    </div>

                    <div className="mt-auto">

                      <p className="text-muted mb-1">
                        <del>${producto.precio.toLocaleString()}</del>
                      </p>

                      <h5 className="text-primary">
                        ${producto.descuento.toLocaleString()}
                      </h5>

                      <button
                        className="btn btn-danger w-100 mt-2"
                        onClick={() => agregarCarrito(producto)}
                      >
                        🛒 Comprar oferta
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

  );
};