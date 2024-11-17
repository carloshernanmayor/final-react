import React, { createContext, useState, useContext, useEffect } from 'react';
import { productos } from '../data/productos';

const ProductosContext = createContext();

export const useProductos = () => {
  return useContext(ProductosContext);
};

export const ProductosProvider = ({ children }) => {
  const [productosState, setProductosState] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    setProductosState(productos);
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  const eliminarDelCarrito = (codigo) => {
    setCarrito(carrito.filter((item) => item.code !== codigo));
  };

  return (
    <ProductosContext.Provider value={{ productosState, carrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </ProductosContext.Provider>
  );
};
