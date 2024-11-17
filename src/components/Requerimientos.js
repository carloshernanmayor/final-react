import React, { useState } from 'react';

const Requerimientos = ({ onIniciarCompra }) => {
  const [nombre, setNombre] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tipoEntrega, setTipoEntrega] = useState('normal');

  const handleSubmit = () => {
    if (!nombre || !presupuesto || !direccion) {
      alert('Por favor, complete todos los campos.');
      return;
    }
    onIniciarCompra({ nombre, presupuesto, direccion, tipoEntrega });
  };

  return (
    <div id='reque'>
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
  );
};

export default Requerimientos;
