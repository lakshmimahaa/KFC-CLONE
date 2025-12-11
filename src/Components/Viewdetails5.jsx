import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../Styles/Viewdetails.css';   
import { AppContext } from '../Context/AppContext';

function Viewdetails5() {
  const [detail5, setDetail5] = useState([]);
  const viewdetails5url = "https://kfcjson-1.onrender.com/viewdetails5";
  const {handleClose} = useContext(AppContext)

  useEffect(() => {
    axios.get(viewdetails5url)
      .then((resp) => setDetail5(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='view-container'>
      {detail5.map((view5) => (
        <div key={view5.id} className='view-content'>
          <h1 className='detail-head'>View Details</h1>
          <button className="close-btn" onClick={(handleClose)}>✕</button>
          <img src={view5.image} alt='view-img' className='view-image' />
          <h1 className='view-head'>{view5.name}</h1>
          <p className='view-date'>{view5.date}</p>

         <ul className='view-para'>
            {view5.para.map((line, index) => (
             <li key={index}>{line}</li>
             ))}
         </ul>
 
        </div>
      ))}
    </div>
  );
}

export default Viewdetails5;
