import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../Styles/Viewdetails.css';   
import { AppContext } from '../Context/AppContext';

function Viewdetails8() {
  const [detail8, setDetail8] = useState([]);
  const viewdetails8url = "https://kfcjson-1.onrender.com/viewdetails8";
  const {handleClose} = useContext(AppContext)

  useEffect(() => {
    axios.get(viewdetails8url)
      .then((resp) => setDetail8(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='view-container'>
      {detail8.map((view8) => (
        <div key={view8.id} className='view-content'>
          <h1 className='detail-head'>View Details</h1>
          <button className="viewclose-btn" onClick={(handleClose)}>✕</button>
          <img src={view8.image} alt='view-img' className='view-image' />
          <h1 className='view-head'>{view8.name}</h1>
          <p className='view-date'>{view8.date}</p>

         <ul className='view-para'>
            {view8.para.map((line, index) => (
             <li key={index}>{line}</li>
             ))}
         </ul>
 
        </div>
      ))}
    </div>
  );
}

export default Viewdetails8;
