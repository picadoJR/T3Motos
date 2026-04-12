import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Favorites = () => {
  

  const { favoritos, quitarFavorito, agregarCarrito } = useContext(ShopContext);

  return (
    <section className="py-5">

      <div className="container">

        <h2 className="text-center mb-5">
          ❤️ Tus productos favoritos
        </h2>

        {favoritos.length === 0 ? (

          <div className="text-center">
            <h5>No tienes productos en favoritos</h5>
            <p className="text-muted">
              Explora nuestros artículos y agrega los que más te gusten.
            </p>
          </div>

        ) : (

          <div className="row g-4">

            {favoritos.map((producto) => (

              <div key={producto.id} className="col-md-6 col-lg-3">

                <div className="card h-100 shadow-sm">

                  <img
                    src={producto.imagen}
                    className="card-img-top"
                    alt={producto.nombre}
                  />

                  <div className="card-body d-flex flex-column">

                    <h5>{producto.nombre}</h5>

                    <p className="text-muted">
                      {producto.descripcion}
                    </p>

                    <h5 className="text-primary mb-3">
                      ${producto.precio.toLocaleString()}
                    </h5>

                    <div className="mt-auto d-flex gap-2">

                      {/* agregar carrito */}
                      <button
                        className="btn btn-primary w-100"
                        onClick={() => agregarCarrito(producto)}
                      >
                        <ShoppingCartIcon fontSize="small" /> Comprar
                      </button>

                      {/* quitar favorito */}
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => quitarFavorito(producto.id)}
                      >
                        <FavoriteIcon />
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
};