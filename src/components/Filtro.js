import React from 'react';
import '../styles.css';

const Filtro = ({ setFiltroCategoria }) => {
  return (
    <div className="filtro-container">
      <label>Filtrar por categoría:</label>
      <select onChange={(e) => setFiltroCategoria(e.target.value)} defaultValue="">
        <option value="">Todas</option>
        <option value="technology">Tecnología</option>
        <option value="tools">Herramientas</option>
        <option value="service">Servicios</option>
        <option value="furniture">Muebles</option>
        <option value="supplies">Suministros</option>
        <option value="electronics">Electronicos</option>
      </select>
    </div>
  );
};

export default Filtro;
