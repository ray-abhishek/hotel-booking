import React from 'react'
import styles from './LandingPage.module.css';

function Header(){

    return(
        <div className={styles.homeImg}>
            <div>
                Hello Imdia
            <img src="../images/home-page.jpg"  className="img-fluid "/>
            </div>
        </div>
    )
}

export default Header;