import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../Styles/Viewdetails.css';   
import { AppContext } from '../Context/AppContext';

function Viewdetails7() {
  const [detail7, setDetail7] = useState([]);
  const viewdetails7url = "https://kfcjson-1.onrender.com";
  const {handleClose} = useContext(AppContext)

  useEffect(() => {
    axios.get(viewdetails7url)
      .then((resp) => setDetail7(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='view-container'>
      {detail7.map((view7) => (
        <div key={view7.id} className='view-content'>
          <h1 className='detail-head'>View Details</h1>
          <button className="viewclose-btn" onClick={(handleClose)}>✕</button>
          <img src={view7.image} alt='view-img' className='view-image' />
          <h1 className='view-head'>{view7.name}</h1>
          <p className='view-date'>{view7.date}</p>

         <ul className='view-para'>
            {view7.para.map((line, index) => (
             <li key={index}>{line}</li>
             ))}
         </ul>
 
        </div>
      ))}
    </div>
  );
}

export default Viewdetails7;
