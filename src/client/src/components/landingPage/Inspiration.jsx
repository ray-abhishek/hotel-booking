import React from 'react'
import styles from './Inspiration.module.css'

function Inspiration(){

    return (
        <>
        <h3 className="text-center m-5">INSPIRATION</h3>
        <div className={styles.grid}>
                <div className={styles.A}><div>INSPIRATION <br/> <i>Best Carribean beaches</i></div></div>
                <div className={styles.B}><div>HOMES <br/> <i>Homes with a view you'll love</i></div></div>
                <div className={styles.C}><div>CITY LIFE <br/> <i>Best London brunces</i></div></div>
                <div className={styles.D}></div>
                <div className={styles.E}><div>CITY LIFE <br/> <i>Five tips for discovering Paris</i></div></div>
                <div className={styles.F}><div>HOMES <br/> <i>Top New York townhouses</i></div></div>
                <div className={styles.G}><div>HOMES <br/> <i>Pools with a view</i></div></div>
        </div>
        </>
    )
}




export default Inspiration;

