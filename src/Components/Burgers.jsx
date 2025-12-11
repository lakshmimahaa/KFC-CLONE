import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../Context/AppContext';
import '../Styles/Menucommon.css';   

function Burgers() {
  const [burgers, setBurgers] = useState([]);
  const burgersurl = "https://kfcjson-1.onrender.com/burgers";
  const {addToCart} =useContext(AppContext)

  useEffect(() => {
    axios.get(burgersurl)
      .then((resp) => setBurgers(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='menu-container'>
          <h1 className='menu-heading'>BURGERS</h1>
      <div className='menu-grid'>
        {burgers.map((burger) => (
          <div key={burger.id} className='menu-card'>
            <img src={burger.image} alt={burger.name} className='menu-img' />

            <h4 className='menu-title'>{burger.name}</h4>

            <div className='menu-row'>
              <img src={burger.subimg} alt={burger.subname} className='menu-subimg' />
              <p className='menu-subname'>{burger.subname}</p>
            </div>
            
            <p className='menu-price'>{burger.price}</p>
            <p className='menu-description'>{burger.para}</p>

            <button className='menu-btn' onClick={()=> addToCart(burger)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Burgers;
