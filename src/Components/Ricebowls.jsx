import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import '../Styles/Menucommon.css';   

function Ricebowls() {
  const [riceBowls, setRiceBowls] = useState([]);
  const ricebowlsurl = "https://kfcjson-1.onrender.com/ricebowls";
  const {addToCart} =useContext(AppContext)

  useEffect(() => {
    axios.get(ricebowlsurl)
      .then((resp) => setRiceBowls(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='menu-container'>
        <h1 className='menu-heading'>RICE BOWLS</h1>
      <div className='menu-grid'>
        {riceBowls.map((rice) => (
          <div key={rice.id} className='menu-card'>
            <img src={rice.image} alt={rice.name} className='menu-img' />

            <h4 className='menu-title'>{rice.name}</h4>

            <div className='menu-row'>
              <img src={rice.subimg} alt={rice.subname} className='menu-subimg' />
              <p className='menu-subname'>{rice.subname}</p>
            </div>

            <p className='menu-price'>{rice.price}</p>
            <p className='menu-description'>{rice.para}</p>

            <button className='menu-btn' onClick={()=> addToCart(rice)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ricebowls;
