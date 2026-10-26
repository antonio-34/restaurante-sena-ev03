import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{padding: '10px', background: '#222', color: 'white'}}>
      <Link to="/" style={{color:'white', marginRight:'10px'}}>Menú</Link>
      <Link to="/admin" style={{color:'white'}}>Admin</Link>
    </nav>
  );
}
export default Navbar;