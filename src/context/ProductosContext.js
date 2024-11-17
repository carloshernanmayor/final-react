import React, { createContext, useState, useContext, useEffect } from 'react';
import { productos } from '../data/productos';

const ProductosContext = createContext();

export const useProductos = () => {
  return useContext(ProductosContext);
};

export const ProductosProvider = ({ children }) => {
  const [productosState, setProductosState] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [presupuesto, setPresupuesto] = useState(0);
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    setProductosState(productos);
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  const eliminarDelCarrito = (codigo) => {
    setCarrito(carrito.filter((item) => item.code !== codigo));
  };

  const actualizarPresupuesto = (nuevoPresupuesto) => {
    setPresupuesto(nuevoPresupuesto);
  };

  const actualizarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };

  return (
    <ProductosContext.Provider value={{
      productosState,
      carrito,
      agregarAlCarrito,
      eliminarDelCarrito,
      presupuesto,
      actualizarPresupuesto,
      nombre,
      actualizarNombre
    }}>
      {children}
    </ProductosContext.Provider>
  );
};
