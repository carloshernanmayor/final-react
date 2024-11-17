import React, { useState } from 'react';
import { useProductos } from '../context/ProductosContext';

const Carrito = () => {
  const { carrito, eliminarDelCarrito, presupuesto, nombre } = useProductos();

  // Estados para los campos de la tarjeta
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');
  const [codigoSeguridad, setCodigoSeguridad] = useState('');
  const [nombreTitular, setNombreTitular] = useState('');

  const totalCompra = carrito.reduce((total, producto) => total + producto.price, 0);
  const cargoDomicilio = totalCompra > 1000000 ? 0 : 10000;
  const totalConDomicilio = totalCompra + cargoDomicilio;

  const verificarPresupuesto = () => {
    if (totalConDomicilio > presupuesto) {
      alert('No tienes suficiente presupuesto para realizar esta compra.');
    } else {
      alert('¡Compra realizada con éxito!');
    }
  };

  // Función para limpiar los campos
  const limpiarCampos = () => {
    setNumeroTarjeta('');
    setFechaExpiracion('');
    setCodigoSeguridad('');
    setNombreTitular('');
  };

  return (
    <div id="parent">
      <div className='container'>
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
          <div>
            <p><strong>Nombre: </strong>{nombre}</p>
            <p><strong>Presupuesto: </strong>{presupuesto}</p>
          </div>
          <input 
            type="text" 
            placeholder="Número de tarjeta" 
            value={numeroTarjeta}
            onChange={(e) => setNumeroTarjeta(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Fecha de expiración (MM/AA)" 
            value={fechaExpiracion}
            onChange={(e) => setFechaExpiracion(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Código de seguridad" 
            value={codigoSeguridad}
            onChange={(e) => setCodigoSeguridad(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Nombre del titular" 
            value={nombreTitular}
            onChange={(e) => setNombreTitular(e.target.value)}
          />
          <button onClick={limpiarCampos}>Limpiar Campos</button>
          <button onClick={verificarPresupuesto}>Confirmar Compra</button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
