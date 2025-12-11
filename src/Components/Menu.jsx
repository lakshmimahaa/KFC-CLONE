import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Menu.css'; 
import { AppContext } from '../Context/AppContext';

function Menu() {
   const {handleClose} = useContext(AppContext)
  return (
    <div className="menu-overlay">
      <div className="menu-popup">
        <button className="menuclose-btn" onClick={handleClose}>×</button>
        <ul className="menu-list">
          <li><Link to="/goldedition">Gold Edition</Link></li>
          <li><Link to="/boxmeals">Box Meals</Link></li>
          <li><Link to="/varietybuckets">Variety Buckets</Link></li>
          <li><Link to="/veg">Veg</Link></li>
          <li><Link to="/chickenbuckets">Chicken Buckets</Link></li>
          <li><Link to="/burgers">Burgers</Link></li>
          <li><Link to="/snacks">Snacks</Link></li>
          <li><Link to="/ricebowls">Rice Bowls</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
