import { createContext, useState, useEffect } from "react";

// ✅ CREAR EL CONTEXTO
export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {

  // ✅ INICIALIZAR DESDE localStorage (PERSISTENCIA)
  const [favoritos, setFavoritos] = useState(() => {
    const saved = localStorage.getItem("favoritos");
    return saved ? JSON.parse(saved) : [];
  });

  const [carrito, setCarrito] = useState(() => {
    const saved = localStorage.getItem("carrito");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ GUARDAR EN localStorage CUANDO CAMBIEN
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // ✅ AGREGAR A FAVORITOS (evita duplicados)
  const agregarFavorito = (producto) => {
    setFavoritos((prev) => {
      const existe = prev.some(p => p.id === producto.id);
      if (existe) return prev; // Ya existe, no agregar
      return [...prev, producto];
    });
  };

  // ✅ AGREGAR AL CARRITO (acumula cantidades)
  const agregarCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find(p => p.id === producto.id);
      if (existe) {
        return prev.map(p =>
          p.id === producto.id
            ? { ...p, cantidad: (p.cantidad || 1) + 1 }
            : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  // ✅ ELIMINAR FAVORITO
  const quitarFavorito = (id) => {
    setFavoritos((prev) => prev.filter(p => p.id !== id));
  };

  // ✅ ELIMINAR DEL CARRITO
  const quitarCarrito = (id) => {
    setCarrito((prev) => prev.filter(p => p.id !== id));
  };

  // ✅ ACTUALIZAR CANTIDAD (nueva función)
  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      quitarCarrito(id);
      return;
    }
    setCarrito((prev) =>
      prev.map(p =>
        p.id === id ? { ...p, cantidad: nuevaCantidad } : p
      )
    );
  };

  // ✅ TOTAL DEL CARRITO (con cantidades)
  const totalCarrito = carrito.reduce(
    (total, producto) => total + (producto.descuento || producto.precio) * (producto.cantidad || 1),
    0
  );

  // ✅ CANTIDAD TOTAL DE PRODUCTOS EN CARRITO
  const cantidadCarrito = carrito.reduce(
    (total, producto) => total + (producto.cantidad || 1),
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
        actualizarCantidad,
        totalCarrito,
        cantidadCarrito
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};