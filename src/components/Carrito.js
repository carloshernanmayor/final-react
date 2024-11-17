import React from 'react';
import { useProductos } from '../context/ProductosContext';

const Carrito = () => {
  const { carrito, eliminarDelCarrito } = useProductos();

  const totalCompra = carrito.reduce((total, producto) => total + producto.price, 0);
  const cargoDomicilio = totalCompra > 1000000 ? 0 : 10000;
  const totalConDomicilio = totalCompra + cargoDomicilio;

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((producto) => (
            <tr key={producto.code}>
              <td>{producto.name}</td>
              <td>{producto.price}</td>
              <td>
                <button onClick={() => eliminarDelCarrito(producto.code)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Total: {totalCompra}</p>
        <p>Cargo por Domicilio: {cargoDomicilio}</p>
        <p>Total con Domicilio: {totalConDomicilio}</p>
      </div>
      <div>
        <h2>Información de la Tarjeta</h2>
        <input type="text" placeholder="Número de tarjeta" />
        <input type="text" placeholder="Fecha de expiración (MM/AA)" />
        <input type="text" placeholder="Código de seguridad" />
        <input type="text" placeholder="Nombre del titular" />
        <button>Limpiar Campos</button>
        <button>Confirmar Compra</button>
      </div>
    </div>
  );
};

export default Carrito;
