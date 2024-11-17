import React, { useState } from 'react';
import { ProductosProvider } from './context/ProductosContext';
import Requerimientos from './components/Requerimientos';
import Productos from './components/Productos';
import Carrito from './components/Carrito';

const App = () => {
  const [iniciarCompra, setIniciarCompra] = useState(false);

  return (
    <ProductosProvider>
      <div>
        {iniciarCompra ? (
          <>
            <Productos />
            <Carrito />
          </>
        ) : (
          <Requerimientos onIniciarCompra={(data) => setIniciarCompra(true)} />
        )}
      </div>
    </ProductosProvider>
  );
};

export default App;
