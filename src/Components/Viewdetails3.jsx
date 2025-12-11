import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../Styles/Viewdetails.css';   
import { AppContext } from '../Context/AppContext';

function Viewdetails3() {
  const [detail3, setDetail3] = useState([]);
  const viewdetails3url = "https://kfcjson-1.onrender.com";
  const {handleClose} = useContext(AppContext)

  useEffect(() => {
    axios.get(viewdetails3url)
      .then((resp) => setDetail3(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='view-container'>
      {detail3.map((view3) => (
        <div key={view3.id} className='view-content'>
          <h1 className='detail-head'>View Details</h1>
          <button className="viewclose-btn" onClick={(handleClose)}>✕</button>
          <img src={view3.image} alt='view-img' className='view-image' />
          <h1 className='view-head'>{view3.name}</h1>
          <p className='view-date'>{view3.date}</p>

         <ul className='view-para'>
            {view3.para.map((line, index) => (
             <li key={index}>{line}</li>
             ))}
         </ul>
 
        </div>
      ))}
    </div>
  );
}

export default Viewdetails3;
