import React, { useState, useEffect } from 'react';
import Filtro from './Filtro';
import { useProductos } from '../context/ProductosContext';
import '../styles.css';

const Productos = () => {
  const { productosState, agregarAlCarrito } = useProductos();
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(productosState);

  useEffect(() => {
    if (filtroCategoria) {
      setProductosFiltrados(productosState.filter((p) => p.category === filtroCategoria));
    } else {
      setProductosFiltrados(productosState);
    }
  }, [filtroCategoria, productosState]);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <Filtro setFiltroCategoria={setFiltroCategoria} />
      <div className="productos-container">
        {productosFiltrados.map((producto) => (
          <div key={producto.code} className="producto-card">
            <h3>{producto.name}</h3>
            <p>${producto.price}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
