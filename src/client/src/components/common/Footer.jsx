import React from 'react';
import style from './Footer.module.css';

function Footer(){

    return (
        <>
        <div class={style.container}>
        <div class="row mt-5 text-center mb-5">
          <div class="col-sm">
            <img src="./images/footer-logos.svg" class="img-fluid" style={{width: "57px", height: "64px"}}/>
          </div>
         
          <div class="col-4 mt-4">
           <i class="fab fa-facebook" style={{marginRight: "10px"}}></i>
            <i class="fab fa-twitter" style={{marginRight: "10px"}}></i>
            <i class="fab fa-instagram" style={{marginRight: "10px"}}></i>
            <i class="fab fa-pinterest-p" style={{marginRight: "10px"}}></i>
          </div>
          <div class="col-4">
            <img src="./images/logo2.svg" class="img-fluid" style={{width: "78px", height: "64px"}}/>
          </div>
        </div> 
        <hr class={style.new1}/>
         <div class="row mt-5 text-center mb-4 ml-5 pl-5">
          <div class="col-3">
            <div class="d-flex align-items-start flex-column bd-highlight mb-3" style={{height: "180px"}}>
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
          <div class="col-3">
                <div class="d-flex align-items-start flex-column bd-highlight mb-3" style={{height: "180px"}}>
                  <h6>Villa Destinations</h6>
              <div>Saint-Tropez</div>
              <div>Turks and Caicos</div>
              <div>St John</div>
              <div>St Thomas</div>
              <div>St Barts</div>
            </div>     
      
            <div class="d-flex align-items-start flex-column bd-highlight mb-3" style={{height: "100px"}}>
              <h6>Experience</h6>
              <div>Our service</div>
              <div>Guest testimonials</div>
            </div>
            
          </div>
          <div class="col-3">
            <div class="d-flex align-items-start flex-column bd-highlight mb-3" style={{height: "180px"}}>
              <h6>Work with us</h6>
               <div>Jobs</div>
              <div>Press room</div>
              <div>Travel agency partners</div>
              <div>List your home</div>
              </div>
            <div class="d-flex align-items-start flex-column bd-highlight mb-3" style={{height: "100px"}}>
              <h6>About</h6>
              <div>About onefinestay</div>
              <div>Our team</div>
          </div>
           </div>
          <div class="col-3">
            <div class="d-flex align-items-start flex-column bd-highlight mb-3" style={{height: "180px"}}>
              <h6>Policies</h6>
              <div>Housekeeping commitment</div>
              <div>Cancellation policy</div>
              <div>Website terms of use</div>
              <div>Terms and conditions</div>
              <div>Privacy policy</div>
            </div>
      
            <div class="d-flex align-items-start flex-column bd-highlight mb-3" style={{height: "100px"}}>
              <h6>Get in touch</h6>
              <div>Enquires</div>
              <div>+91-8051665056</div>
              <div>Contact Us</div>
            </div>
          </div>
        </div>
        <hr class={style.new1}/>
        <div className="row">
          <div className="col-6">
            <h6>Set your currency</h6>
          </div>
        </div>

          <div class="row mb-2">
              <div class="col-6">
                  <select class={style.customSelect}>
                    <option value= "1">USD</option>
                    <option value= "1">$USD</option>
                    <option value= "1">GBP</option>
                    <option value= "1">EUR</option>
                    <option value= "1">INR</option>
                    <option value= "1">AUD</option>
                  </select>
              </div>
              <div class="col-2">
                    <img src="./images/signature.png" class="img-fluid"/>
              </div>
              <div class="col-2">
                    <img src="./images/travel_made_white.png" class="img-fluid" />
              </div>
              <div class="col-2">
                    <img src="/images/ensemble.png" class="img-fluid" />
              </div>
              </div>
            <small>Prices shown here are approximate conversions from local currency</small>
            <hr class={style.new1}/>
              
              <small>‘onefinestay’ and ‘unhotel’ are registered trademarks of Lifealike Limited, UK company number 06554630. © 2017, all rights reserved.</small>  
          </div>
    
      
       </>
      
    )
}

export default Footer;