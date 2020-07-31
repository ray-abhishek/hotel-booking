import React from 'react';
import style from './Footer.module.css';

function Footer(){

    return (
        <>
        <div className={style.container}>
        <div className="row mt-5 text-center mb-5">
          <div className="col-sm">
            <img src="https://d344sq77q05r9.cloudfront.net/prod-20-07-27-13:03/assets/671b5ff55023846ec4151c2220349b3f.svg" className="img-fluid" style={{width: "57px", height: "64px"}}/>
          </div>
         
          <div className="col-4 mt-4">
           <i className="fab fa-facebook" style={{marginRight: "10px"}}></i>
            <i className="fab fa-twitter" style={{marginRight: "10px"}}></i>
            <i className="fab fa-instagram" style={{marginRight: "10px"}}></i>
            <i className="fab fa-pinterest-p" style={{marginRight: "10px"}}></i>
          </div>
          <div className="col-4">
            <img src="https://d344sq77q05r9.cloudfront.net/prod-20-07-27-13:03/assets/9e675920e1c0d5fd9522c2a49b663280.svg" className="img-fluid" style={{width: "78px", height: "64px"}}/>
          </div>
        </div> 
        <hr className={style.new1}/>
         <div className="row mt-5 text-center mb-4 ml-5 pl-5">
          <div className="col-3">
            <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={{height: "180px"}}>
              <h6>City Destinations</h6>
              <div>London</div>
              <div>Paris</div>
              <div>New York</div>
              <div>Los Angles</div>
              <div>San Francisco</div>
              <div>Rome</div>
              <div>Milan</div>
              <div>Florence</div>
              <div>Sydney</div>
            </div>
            
          </div>
          <div className="col-3">
                <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={{height: "180px"}}>
                  <h6>Villa Destinations</h6>
              <div>Saint-Tropez</div>
              <div>Turks and Caicos</div>
              <div>St John</div>
              <div>St Thomas</div>
              <div>St Barts</div>
            </div>     
      
            <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={{height: "100px"}}>
              <h6>Experience</h6>
              <div>Our service</div>
              <div>Guest testimonials</div>
            </div>
            
          </div>
          <div className="col-3">
            <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={{height: "180px"}}>
              <h6>Work with us</h6>
               <div>Jobs</div>
              <div>Press room</div>
              <div>Travel agency partners</div>
              <div>List your home</div>
              </div>
            <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={{height: "100px"}}>
              <h6>About</h6>
              <div>About onefinestay</div>
              <div>Our team</div>
          </div>
           </div>
          <div className="col-3">
            <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={{height: "180px"}}>
              <h6>Policies</h6>
              <div>Housekeeping commitment</div>
              <div>Cancellation policy</div>
              <div>Website terms of use</div>
              <div>Terms and conditions</div>
              <div>Privacy policy</div>
            </div>
      
            <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={{height: "100px"}}>
              <h6>Get in touch</h6>
              <div>Enquires</div>
              <div>+91-8051665056</div>
              <div>Contact Us</div>
            </div>
          </div>
        </div>
        <hr className={style.new1}/>
        <div className="row">
          <div className="col-6">
            <h6>Set your currency</h6>
          </div>
        </div>

          <div className="row mb-2">
              <div className="col-6">
                  <select className={style.customSelect}>
                    <option value= "1">USD</option>
                    <option value= "1">$USD</option>
                    <option value= "1">GBP</option>
                    <option value= "1">EUR</option>
                    <option value= "1">INR</option>
                    <option value= "1">AUD</option>
                  </select>
              </div>
              <div className="col-2">
                    <img src="https://onefinestay.imgix.net/media-library/signature.png" className="img-fluid"/>
              </div>
              <div className="col-2">
                    <img src="https://onefinestay.imgix.net/media-library/ensemble.png" className="img-fluid" />
              </div>
              <div className="col-2">
                    <img src="https://onefinestay.imgix.net/media-library/travel_made_white.png" className="img-fluid" />
              </div>
              </div>
            <small>Prices shown here are approximate conversions from local currency</small>
            <hr className={style.new1}/>
              
              <small>‘onefinestay’ and ‘unhotel’ are registered trademarks of Lifealike Limited, UK company number 06554630. © 2017, all rights reserved.</small>  
          </div>
    
      
       </>
      
    )
}

export default Footer;