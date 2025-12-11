import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../Styles/Viewdetails.css';   
import { AppContext } from '../Context/AppContext';

function Viewdetails2() {
  const [detail2, setDetail2] = useState([]);
  const viewdetails2url = "https://kfcjson-1.onrender.com";
  const {handleClose} = useContext(AppContext)

  useEffect(() => {
    axios.get(viewdetails2url)
      .then((resp) => setDetail2(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='view-container'>
      {detail2.map((view2) => (
        <div key={view2.id} className='view-content'>
          <h1 className='detail-head'>View Details</h1>
          <button className="viewclose-btn" onClick={(handleClose)}>✕</button>
          <img src={view2.image} alt='view-img' className='view-image' />
          <h1 className='view-head'>{view2.name}</h1>
          <p className='view-date'>{view2.date}</p>

         <ul className='view-para'>
            {view2.para.map((line, index) => (
             <li key={index}>{line}</li>
             ))}
         </ul>
 
        </div>
      ))}
    </div>
  );
}

export default Viewdetails2;
