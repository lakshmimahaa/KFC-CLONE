import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../Styles/Viewdetails.css';   
import { AppContext } from '../Context/AppContext';

function Viewdetails6() {
  const [detail6, setDetail6] = useState([]);
  const viewdetails6url = "https://kfcjson-1.onrender.com/viewdetails6";
  const {handleClose} = useContext(AppContext)

  useEffect(() => {
    axios.get(viewdetails6url)
      .then((resp) => setDetail6(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='view-container'>
      {detail6.map((view6) => (
        <div key={view6.id} className='view-content'>
          <h1 className='detail-head'>View Details</h1>
          <button className="viewclose-btn" onClick={(handleClose)}>✕</button>
          <img src={view6.image} alt='view-img' className='view-image' />
          <h1 className='view-head'>{view6.name}</h1>
          <p className='view-date'>{view6.date}</p>

         <ul className='view-para'>
            {view6.para.map((line, index) => (
             <li key={index}>{line}</li>
             ))}
         </ul>
 
        </div>
      ))}
    </div>
  );
}

export default Viewdetails6;
