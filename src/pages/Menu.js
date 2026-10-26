import { useEffect, useState } from 'react';
import { getPlatos } from '../services/api';
import CardPlato from '../components/CardPlato';

function Menu() {
  const [platos, setPlatos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPlatos()
      .then(res => setPlatos(res.data))
      .catch(() => setError(true));
  }, []);

  if (error) return <div><h1>Menú del Restaurante</h1><p>Backend apagado - inicia tu proyecto de Java en el puerto 8080</p><p>El frontend está funcionando correctamente.</p></div>;

  return (
    <div>
      <h1>Menú del Restaurante</h1>
      <div style={{display:'flex', flexWrap:'wrap'}}>
        {platos.length === 0 ? <p>No hay platos aún</p> : platos.map(p => <CardPlato key={p.id} plato={p} />)}
      </div>
    </div>
  );
}
export default Menu;