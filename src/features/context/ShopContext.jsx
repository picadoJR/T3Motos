import { createContext, useState } from "react";

// ✅ CREAR EL CONTEXTO (IMPORTANTE, ESTO ERA LO QUE FALTABA)
export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {

  const [favoritos, setFavoritos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  // ✅ AGREGAR A FAVORITOS
  const agregarFavorito = (producto) => {
    setFavoritos((prev) => [...prev, producto]);
  };

  // ✅ AGREGAR AL CARRITO
  const agregarCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  // ✅ ELIMINAR FAVORITO
  const quitarFavorito = (id) => {
    setFavoritos((prev) => prev.filter(p => p.id !== id));
  };

  // ✅ ELIMINAR DEL CARRITO
  const quitarCarrito = (id) => {
    setCarrito((prev) => prev.filter(p => p.id !== id));
  };

  // ✅ TOTAL DEL CARRITO
  const totalCarrito = carrito.reduce(
    (total, producto) => total + producto.precio,
    0
  );

  return (
    <ShopContext.Provider
      value={{
        favoritos,
        carrito,
        agregarFavorito,
        agregarCarrito,
        quitarFavorito,
        quitarCarrito,
        totalCarrito
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};