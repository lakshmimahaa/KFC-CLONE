import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import '../Styles/Menucommon.css';   

function Snacks() {
  const [snacks, setSnacks] = useState([]);
  const snacksurl = "https://kfcjson-1.onrender.com/snacks";
  const {addToCart} =useContext(AppContext)

  useEffect(() => {
    axios.get(snacksurl)
      .then((resp) => setSnacks(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='menu-container'>
        <h1 className='menu-heading'>SNACKS</h1>
      <div className='menu-grid'>
        {snacks.map((snack) => (
          <div key={snack.id} className='menu-card'>
            <img src={snack.image} alt={snack.name} className='menu-img' />

            <h4 className='menu-title'>{snack.name}</h4>

            <div className='menu-row'>
              <img src={snack.subimg} alt={snack.subname} className='menu-subimg' />
              <p className='menu-subname'>{snack.subname}</p>
            </div>

            <p className='menu-price'>{snack.price}</p>
            <p className='menu-description'>{snack.para}</p>

            <button className='menu-btn' onClick={()=> addToCart(snack)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Snacks;
