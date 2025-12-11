import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Homepage.css';
import { useRef } from "react";

function Homepage() {
  const [homepage, setHomepage] = useState([]);
  const [homepage1, setHomepage1] = useState([]);
  const [homepage2, setHomepage2] = useState([]);

  const homepageurl = "https://kfcjson-1.onrender.com/homepage";
  const homepageurl1 = "https://kfcjson-1.onrender.com/homepage1";
  const homepageurl2 = "https://kfcjson-1.onrender.com/homepage2";

  const navigate=useNavigate('')

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    axios.get(homepageurl)
      .then((resp) => setHomepage(resp.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios.get(homepageurl1)
      .then((resp) => setHomepage1(resp.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios.get(homepageurl2)
      .then((resp) => setHomepage2(resp.data))
      .catch((error) => console.error(error));
  }, []);


  return (
    <div className="total-homepage">

      <div className='homepage-container'>

        <div className='homepage-content1'> 
          <h1>BROWSE MENU CATEGORIES</h1>
          <img src='bucketoftheday.jpg'alt="bucketoftheday" className="bucket-img" />
          <h2>EPIC BUCKET OF THE DAY</h2>
        </div>

        <div className='homepage'>
          {homepage.map((home) => (
            <div key={home.id} className='homepage-item'>

              <Link to={home.path} className="link-item"  >
                <img src={home.image} alt={home.image} className='items-img' />
                <h3 className='image1-name'>{home.name}</h3>
              </Link>

            </div>
          ))}
        </div>
      </div>

      <div className="homepage1-container">
        <div className="homepage1">
          {homepage1.map((home1) => (
            <div key={home1.id} className='homepage1-item'>

              <Link
                to={home1.path}
                className="link1-item"
                onClick={(e) => {
                  e.stopPropagation();
                  imageClick(home1.section);
                }}
              >
                <img src={home1.image} alt={home1.image} className='items1-img' />
                <h3 className='image-name'>{home1.name}</h3>
              </Link>

            </div>
          ))}
        </div>
      </div>

      <div className='homepage2-container'>
         <div className='head'>
    <h1>SAVE MORE AS YOU ORDER</h1>
         </div>

        <div className="carousel-wrapper">
           <button className="arrow left" onClick={scrollLeft}>‹</button>

           <div className="carousel-container" ref={sliderRef}>
               <div className="carousel-track">
                  {homepage2.map((home2) => (
               <div key={home2.id} className='homepage2-item'>
               <div className="demo">
                 <img src={home2.image} alt={home2.image} className='items2-img' />
                 <h4 className='image-name'>{home2.name}</h4>
                 <p className="price-name">{home2.price}</p>

                 <Link to={home2.path} className='deal-item'>
                    <h6 className="details-name">{home2.details}</h6>
                 </Link>

                 <button className='demo-button'  onClick={() => navigate("/orderoptions")}>
                      Apply Offer
                 </button>
               </div>
               </div>
                  ))}
               </div>
           </div>

            <button className="arrow right" onClick={scrollRight}>›</button>
        </div>
      </div>


    </div>
  );
}

export default Homepage;
