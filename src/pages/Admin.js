import { useEffect, useState } from 'react';
import { getPlatos, deletePlato } from '../services/api';
import FormularioPlato from '../components/FormularioPlato';
import CardPlato from '../components/CardPlato';

function Admin() {
  const [platos, setPlatos] = useState([]);
  const cargar = () => getPlatos().then(res => setPlatos(res.data)).catch(()=>{});
  useEffect(() => { cargar(); }, []);
  const eliminar = async (id) => { await deletePlato(id); cargar(); };

  return (
    <div>
      <h1>Admin - Restaurante</h1>
      <FormularioPlato onCreado={cargar} />
      <p>Si el backend está apagado, los datos no se guardarán, pero el formulario funciona.</p>
      {platos.map(p => <CardPlato key={p.id} plato={p} onEliminar={eliminar} />)}
    </div>
  );
}
export default Admin;