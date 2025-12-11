import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../Styles/Deals.css';
import { AppContext } from '../Context/AppContext';

function Deals() {
   const[deals,setDeals]=useState([]);
   const dealsurl="https://kfcjson-1.onrender.com/deals"
   const {addToCart} = useContext(AppContext)

    useEffect(() => {
    axios.get(dealsurl)
      .then((resp) => setDeals(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='deals-container'>
        
       <div className='deals-card'>
          {deals.map((deal) => (
            <div key={deal.id} className='deals-row'>
                <img src={deal.image} alt='deals' className='deals-image'/>
                <h3 className='deals-title'>{deal.name}</h3>
                <p className='deals-price'>{deal.price}</p>
               <Link to={deal.path} className='deal-item'> 
                  <p className='deals-details'>{deal.details}</p>
               </Link> 
                <button  className='offer-btn' onClick={() => addToCart(deal)}>Apply Offer</button>

            </div>
          ))}
        </div>
    </div>
  )
}

export default Deals
