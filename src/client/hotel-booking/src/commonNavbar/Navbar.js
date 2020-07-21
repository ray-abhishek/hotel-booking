import React from 'react';
import style from './Navbar.module.css';

function Navbar(){

    return(
        <>
        <nav className ="navbar navbar-light bg-white">
            <img src="./logo.svg" width="155px" height="30px" />
            <div className="d-flex flex-row bd-highlight">
  <div className="p-2 bd-highlight p-3">Destinations <span className={style.line}>|</span></div>
  <div className="p-2 bd-highlight p-3">Wishlist <span className={style.line}>|</span></div>
  <div className="p-2 bd-highlight p-3">Get in Touch <span className={style.line}>|</span></div>
  <div className="p-2 bd-highlight p-3">Log in <span className={style.line}></span></div>
  <div className="p-2 bd-highlight p-2">
  <button className="btn btn-outline-secondary">List your Home</button>
  </div>
</div>
        </nav>
    
</>

                
    );
}

export default Navbar;