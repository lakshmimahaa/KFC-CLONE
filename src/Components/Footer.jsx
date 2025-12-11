import '../Styles/Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
       <div className='footer-section1'>
        <img src='kfclogo.jpg' alt="kfclogo" className="kfclogo-img"/>
       </div>
       <div className='footer-section2'>

          <div className='footer1-column'>
              <h5>Legal</h5>
                <ul>
                  <a>Terms and Conditions</a>
                  <a>Privacy Policy</a>
                  <a>Disclaimer</a>
                  <a>Caution Notice</a>
                </ul>
          </div>
          <div className='footer2-column'>
              <h5>KFC India</h5>
                <ul>
                  <a>About KFC</a>
                  <a>KFC Care</a>
                  <a>Careers</a>
                  <a>Our Golden Past</a>
                  <a>Responsible Disclosure</a>
                </ul>
          </div>
          <div className='footer3-column'>
             <h5>KFC Food</h5>
                <ul>
                   <a>Menu</a>
                   <a>Order Lookup</a>
                   <a>Gift Card</a>
                   <a>Nutrition Allergon</a>
                </ul>
          </div>
          <div className='footer4-column'>
             <h5>Support</h5>
               <ul>
                <a >Get Help</a>
                <a >Contact Us</a>
                <a >KFC Feedback</a>
               </ul>
          </div>
       </div>

       <div className='footer-section3'>
         <p>Copyright © KFC Corporation 2025 All rights reserved build pwa-2504-0-9_53cdc423</p>
         <i class="fa-brands fa-instagram" ></i>
         <i class="fa-brands fa-facebook"></i>
         <i class="fa-brands fa-x-twitter"></i>
       </div>
    </div>
  )
}

export default Footer