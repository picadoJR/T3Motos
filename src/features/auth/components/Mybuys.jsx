import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const Mybuys = () => {

  const {
    carrito,
    quitarCarrito,
    agregarFavorito,
    quitarFavorito,
    favoritos,
    totalCarrito,
    actualizarCantidad
  } = useContext(ShopContext);

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">🛒 Tu carrito</h2>

        {carrito.length === 0 ? (
          <div className="text-center">
            <h5>Tu carrito está vacío</h5>
            <p className="text-muted">
              Agrega algunos productos para comenzar tu compra.
            </p>
          </div>
        ) : (
          <>
            <div className="row g-4">
              {carrito.map((producto) => {
                const esFavorito = favoritos.some(f => f.id === producto.id);
                const descuento = producto.descuento || producto.precio;
                const porcentaje = producto.descuento
                  ? Math.round(((producto.precio - producto.descuento) / producto.precio) * 100)
                  : 0;
                const cantidad = producto.cantidad || 1;

                return (
                  <div key={producto.id} className="col-md-6 col-lg-4">
                    <div className="card h-100 shadow-sm border-0">
                      <div className="position-relative">
                        {porcentaje > 0 && (
                          <span className="badge bg-danger position-absolute m-2">
                            -{porcentaje}%
                          </span>
                        )}
                        <button
                          onClick={() =>
                            esFavorito
                              ? quitarFavorito(producto.id)
                              : agregarFavorito(producto)
                          }
                          className="btn btn-light position-absolute"
                          style={{ top: "10px", right: "10px", borderRadius: "50%", zIndex: 2 }}
                        >
                          {esFavorito ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                        </button>
                        <img
                          src={producto.imagen}
                          className="card-img-top"
                          style={{ height: "220px", objectFit: "cover" }}
                          alt={producto.nombre}
                        />
                      </div>

                      <div className="card-body d-flex flex-column">
                        <h5>{producto.nombre}</h5>
                        <p className="text-muted small">{producto.descripcion}</p>

                        {/* Selector de cantidad */}
                        <div className="d-flex align-items-center gap-2 my-2">
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => actualizarCantidad(producto.id, cantidad - 1)}
                          >
                            <RemoveIcon fontSize="small" />
                          </button>
                          <span className="fw-bold" style={{ minWidth: "30px", textAlign: "center" }}>
                            {cantidad}
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => actualizarCantidad(producto.id, cantidad + 1)}
                          >
                            <AddIcon fontSize="small" />
                          </button>
                        </div>

                        <div className="mt-auto">
                          {producto.descuento && (
                            <p className="text-muted mb-1">
                              <del>${producto.precio.toLocaleString()}</del>
                            </p>
                          )}
                          <h5 className="text-primary mb-3">
                            ${descuento.toLocaleString()} c/u
                          </h5>
                          <div className="d-flex gap-2">
                            <button
                              className="btn btn-outline-danger w-100"
                              onClick={() => quitarCarrito(producto.id)}
                            >
                              <DeleteIcon fontSize="small" /> Eliminar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RESUMEN DEL CARRITO */}
            <div className="mt-5 p-4 bg-light rounded">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <h4>Total del carrito</h4>
                <h3 className="text-success">${totalCarrito.toLocaleString()}</h3>
              </div>
              <div className="text-end mt-3">
                <button className="btn btn-success btn-lg">Finalizar compra</button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};