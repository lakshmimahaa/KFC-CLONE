import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../Styles/Viewdetails.css';   
import { AppContext } from '../Context/AppContext';

function Viewdetails4() {
  const [detail4, setDetail4] = useState([]);
  const viewdetails4url = "https://kfcjson-1.onrender.com";
  const {handleClose} = useContext(AppContext)

  useEffect(() => {
    axios.get(viewdetails4url)
      .then((resp) => setDetail4(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='view-container'>
      {detail4.map((view4) => (
        <div key={view4.id} className='view-content'>
          <h1 className='detail-head'>View Details</h1>
          <button className="viewclose-btn" onClick={(handleClose)}>✕</button>
          <img src={view4.image} alt='view-img' className='view-image' />
          <h1 className='view-head'>{view4.name}</h1>
          <p className='view-date'>{view4.date}</p>

         <ul className='view-para'>
            {view4.para.map((line, index) => (
             <li key={index}>{line}</li>
             ))}
         </ul>
 
        </div>
      ))}
    </div>
  );
}

export default Viewdetails4;
