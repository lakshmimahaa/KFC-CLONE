import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import '../Styles/Menucommon.css';   

function Veg() {
  const [veg, setVeg] = useState([]);
  const vegurl = "https://kfcjson-1.onrender.com/veg";
  const {addToCart} =useContext(AppContext)

  useEffect(() => {
    axios.get(vegurl)
      .then((resp) => setVeg(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='menu-container'>
         <h1 className='menu-heading'>VEG</h1>
      <div className='menu-grid'>
        {veg.map((veggie) => (
          <div key={veggie.id} className='menu-card'>
            <img src={veggie.image} alt={veggie.name} className='menu-img' />

            <h4 className='menu-title'>{veggie.name}</h4>

            <div className='menu-row'>
              <img src={veggie.subimg} alt={veggie.subname} className='menu-subimg' />
              <p className='menu-subname'>{veggie.subname}</p>
            </div>

            <p className='menu-price'>{veggie.price}</p>
            <p className='menu-description'>{veggie.para}</p>

            <button className='menu-btn' onClick={()=> addToCart(veggie)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Veg;
