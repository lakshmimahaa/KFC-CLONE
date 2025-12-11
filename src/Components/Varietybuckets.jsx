import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import '../Styles/Menucommon.css';   

function Varietybuckets() {
  const [varietybuckets, setVarietyBuckets] = useState([]);
  const varietybucketsurl = "https://kfcjson-1.onrender.com/varietybuckets";
  const {addToCart} =useContext(AppContext)

  useEffect(() => {
    axios.get(varietybucketsurl)
      .then((resp) => setVarietyBuckets(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='menu-container'>
          <h1 className='menu-heading'>VARIETY BUCKETS</h1>
      <div className='menu-grid'>
        {varietybuckets.map((bucket) => (
          <div key={bucket.id} className='menu-card'>
            <img src={bucket.image} alt={bucket.name} className='menu-img' />

            <h4 className='menu-title'>{bucket.name}</h4>

            <div className='menu-row'>
              <img src={bucket.subimg} alt={bucket.subname} className='menu-subimg' />
              <p className='menu-subname'>{bucket.subname}</p>
            </div>

            <p className='menu-price'>{bucket.price}</p>
            <p className='menu-description'>{bucket.para}</p>

            <button className='menu-btn' onClick={()=> addToCart(bucket)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Varietybuckets;
