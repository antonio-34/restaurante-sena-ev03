import { useState } from 'react';
import { createPlato } from '../services/api';

function FormularioPlato({ onCreado }) {
  const [plato, setPlato] = useState({nombre:'', descripcion:'', precio:''});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPlato(plato);
    setPlato({nombre:'', descripcion:'', precio:''});
    if(onCreado) onCreado();
  };

  return (
    <form onSubmit={handleSubmit} style={{margin:'20px'}}>
      <input placeholder="Nombre" value={plato.nombre} onChange={e=>setPlato({...plato, nombre:e.target.value})} required />
      <input placeholder="Descripcion" value={plato.descripcion} onChange={e=>setPlato({...plato, descripcion:e.target.value})} required />
      <input type="number" placeholder="Precio" value={plato.precio} onChange={e=>setPlato({...plato, precio:e.target.value})} required />
      <button type="submit">Agregar Plato</button>
    </form>
  );
}
export default FormularioPlato;