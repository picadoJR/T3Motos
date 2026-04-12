import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Articles = () => {

  const { agregarFavorito, quitarFavorito, favoritos, agregarCarrito } = useContext(ShopContext);

  const articulos = [
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
      precio: 210000000,
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
      rating: 4
    },
    {
      id: 5,
      nombre: "BMW GS1200",
      precio: 17000000,
      descuento: 820000,
      imagen: "/img/gs1200.webp",
      rating: 5
    },
    {
      id: 6,
      nombre: "Ducati Panigale V4",
      precio: 120000000,
      descuento: 98000,
      imagen: "/img/panigale.webp",
      rating: 4
    },
    {
      id: 7,
      nombre: "Ducati streetfigter",
      precio: 180000000,
      descuento: 150000,
      imagen: "/img/streetfighter.webp",
      rating: 4
    },
    {
      id: 8,
      nombre: "Honda x-adv 750",
      precio: 95000000,
      descuento: 299000,
      imagen: "/img/x-adv.webp",
      rating: 5
    },
    {
      id: 9,
      nombre: "Yamaha yz450f",
      precio: 52000000,
      descuento: 4700000,
      imagen: "/img/yz450f.webp",
      rating: 5
    },
    {
      id: 10,
      nombre: "Kawasaki zx10r",
      precio: 280000000,
      descuento: 240000,
      imagen: "/img/zx10r.webp",
      rating: 4
    }
  ];

  return (
    <section className="py-5">

      <div className="container">

        <h2 className="text-center mb-5">
          Todas nuestras SuperBikers
        </h2>

        <div className="row g-4">

          {articulos.map((articulo) => {

            const esFavorito = favoritos.some(f => f.id === articulo.id);

            const descuentoPorcentaje =
              Math.round(((articulo.precio - articulo.descuento) / articulo.precio) * 100);

            return (

              <div className="col-md-6 col-lg-3" key={articulo.id}>

                <div className="card h-100 shadow-sm border-0">

                  <div className="position-relative">

                    {/* etiqueta descuento */}
                    <span className="badge bg-danger position-absolute m-2">
                      -{descuentoPorcentaje}%
                    </span>

                    {/* BOTÓN FAVORITO */}
                    <button
                      onClick={() =>
                        esFavorito
                          ? quitarFavorito(articulo.id)
                          : agregarFavorito(articulo)
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
                      src={articulo.imagen}
                      className="card-img-top"
                      style={{ height: "220px", objectFit: "cover" }}
                      alt={articulo.nombre}
                    />

                  </div>

                  <div className="card-body d-flex flex-column">

                    <h5 className="card-title">
                      {articulo.nombre}
                    </h5>

                    <p className="card-text text-muted">
                      {articulo.descripcion}
                    </p>

                    {/* rating dinámico */}
                    <div className="text-warning mb-2">
                      {"⭐".repeat(articulo.rating)}
                      {"☆".repeat(5 - articulo.rating)}
                    </div>

                    <div className="mt-auto">

                      <p className="text-muted mb-1">
                        <del>${articulo.precio.toLocaleString()}</del>
                      </p>

                      <h5 className="text-primary">
                        ${articulo.descuento.toLocaleString()}
                      </h5>

                      <button
                        className="btn btn-primary w-100 mt-2"
                        onClick={() => agregarCarrito(articulo)}
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
  );
};