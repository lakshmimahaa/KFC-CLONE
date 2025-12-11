import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import '../Styles/Menucommon.css';   

function Chickenbuckets() {
  const [chickenBuckets, setChickenBuckets] = useState([]);
  const chickenbucketsurl = "https://kfcjson-1.onrender.com/chickenbuckets";
  const {addToCart} =useContext(AppContext)

  useEffect(() => {
    axios.get(chickenbucketsurl)
      .then((resp) => setChickenBuckets(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='menu-container'>
          <h1 className='menu-heading'>CHICKEN BUCKETS</h1>
      <div className='menu-grid'>
        {chickenBuckets.map((chicken) => (
          <div key={chicken.id} className='menu-card'>
            <img src={chicken.image} alt={chicken.name} className='menu-img' />

            <h4 className='menu-title'>{chicken.name}</h4>

            <div className='menu-row'>
              <img src={chicken.subimg} alt={chicken.subname} className='menu-subimg' />
              <p className='menu-subname'>{chicken.subname}</p>
            </div>

            <p className='menu-price'>{chicken.price}</p>
            <p className='menu-description'>{chicken.para}</p>

            <button className='menu-btn' onClick={()=> addToCart(chicken)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Chickenbuckets;
