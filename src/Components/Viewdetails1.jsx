import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../Styles/Viewdetails.css';   
import { AppContext } from '../Context/AppContext';

function Viewdetails1() {
  const [detail1, setDetail1] = useState([]);
  const viewdetails1url = "https://kfcjson-1.onrender.com1";
  const {handleClose} = useContext(AppContext)

  useEffect(() => {
    axios.get(viewdetails1url)
      .then((resp) => setDetail1(resp.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='view-container'>
      {detail1.map((view1) => (
        <div key={view1.id} className='view-content'>
          <h1 className='detail-head'>View Details</h1>
          <button className="viewclose-btn" onClick={(handleClose)}>✕</button>
          <img src={view1.image} alt='view-img' className='view-image' />
          <h1 className='view-head'>{view1.name}</h1>
          <p className='view-date'>{view1.date}</p>

         <ul className='view-para'>
            {view1.para.map((line, index) => (
             <li key={index}>{line}</li>
             ))}
         </ul>
 
        </div>
      ))}
    </div>
  );
}

export default Viewdetails1;
