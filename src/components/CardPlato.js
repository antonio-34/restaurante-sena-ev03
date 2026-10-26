function CardPlato({ plato, onEliminar }) {
  return (
    <div style={{border:'1px solid #ccc', padding:'10px', margin:'10px', borderRadius:'8px'}}>
      <h3>{plato.nombre}</h3>
      <p>{plato.descripcion}</p>
      <p><b>${plato.precio}</b></p>
      {onEliminar && <button onClick={() => onEliminar(plato.id)}>Eliminar</button>}
    </div>
  );
}
export default CardPlato;