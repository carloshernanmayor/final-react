import React, { useState } from 'react';
import '../styles.css';
import { useProductos } from '../context/ProductosContext';

const Requerimientos = ({ onIniciarCompra }) => {
  const { actualizarNombre, actualizarPresupuesto } = useProductos();
  const [nombre, setNombre] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tipoEntrega, setTipoEntrega] = useState('normal');

  const handleSubmit = () => {
    if (!nombre || !presupuesto || !direccion) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (isNaN(presupuesto) || presupuesto <= 0) {
      alert('Por favor, ingrese un presupuesto válido.');
      return;
    }

    actualizarNombre(nombre);
    actualizarPresupuesto(parseFloat(presupuesto));

    onIniciarCompra({ nombre, presupuesto: parseFloat(presupuesto), direccion, tipoEntrega });
  };

  return (
    <div className='contenedor'>
      <div className='contenedor-centrado'>
        <h1>Requerimientos de Compra</h1>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Presupuesto"
          value={presupuesto}
          onChange={(e) => setPresupuesto(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <select value={tipoEntrega} onChange={(e) => setTipoEntrega(e.target.value)}>
          <option value="normal">Normal</option>
          <option value="express">Express</option>
        </select>
        <button onClick={handleSubmit}>Iniciar Compra</button>
        <button onClick={() => { setNombre(''); setPresupuesto(''); setDireccion(''); setTipoEntrega('normal'); }}>Limpiar Campos</button>
      </div>
    </div>
  );
};

export default Requerimientos;
