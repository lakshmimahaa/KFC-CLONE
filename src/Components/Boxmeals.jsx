import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import '../Styles/Menucommon.css';   

function Boxmeals() {
  const [boxmeals, setBoxMeals] = useState([]);
  const boxmealsurl = "https://kfcjson-1.onrender.com";
  const {addToCart} =useContext(AppContext)

  useEffect(() => {
    axios.get(boxmealsurl)
      .then((resp) => setBoxMeals(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='menu-container'>
        <h1 className='menu-heading'>BOX MEALS</h1>
      <div className='menu-grid'>
        {boxmeals.map((box) => (
          <div key={box.id} className='menu-card'>
            <img src={box.image} alt={box.name} className='menu-img' />

            <h4 className='menu-title'>{box.name}</h4>

            <div className='menu-row'>
              <img src={box.subimg} alt={box.subname} className='menu-subimg' />
              <p className='menu-subname'>{box.subname}</p>
            </div>
            <p className='menu-price'>{box.price}</p>
            <p className='menu-description'>{box.para}</p>

           <button className='menu-btn' onClick={()=> addToCart(box)}> Add To Cart </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Boxmeals;
