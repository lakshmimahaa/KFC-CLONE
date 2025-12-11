import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../Styles/Menucommon.css';   
import { AppContext } from '../Context/AppContext';

function Goldedition() {
  const [goldEdition, setGoldEdition] = useState([]);
  const goldeditionurl = "https://kfcjson-1.onrender.com";
  const {addToCart} =useContext(AppContext)

  useEffect(() => {
    axios.get(goldeditionurl)
      .then((resp) => setGoldEdition(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='menu-container'>
          <h1 className='menu-heading'>GOLD EDITION</h1>
      <div className='menu-grid'>
        {goldEdition.map((gold) => (
          <div key={gold.id} className='menu-card'>
            <img src={gold.image} alt={gold.name} className='menu-img' />

            <h4 className='menu-title'>{gold.name}</h4>

            <div className='menu-row'>
              <img src={gold.subimg} alt={gold.subname} className='menu-subimg' />
              <p className='menu-subname'>{gold.subname}</p>
            </div>

            <h3 className='menu-price'>{gold.price}</h3>
            <p className='menu-description'>{gold.para}</p>

            <button className='menu-btn' onClick={()=> addToCart(gold)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Goldedition;
