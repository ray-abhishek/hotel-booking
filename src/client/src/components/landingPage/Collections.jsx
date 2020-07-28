import React from 'react'
import SearchBar from '../common/SearchBar'

function Collections(){

    return (
        <>
        <h3 className="text-center m-5">OUR COLLECTIONS</h3>
        <div style={containerStyle}>
        <div className="card mr-3" style={cityCollection}>
            <img style={imgStyle} className="card-img-top" src="https://onefinestay.imgix.net/media-library/city_collection_cain_image.jpg?auto=format&w=420&dpr=1" alt="City Collection Card Image"/>
            <div className="card-body" style={cardBodyStyle}>
                <span className="badge" style={{backgroundColor : 'darkblue',fontSize:'12px', color : 'white', margin : '0 auto'}}>City</span>
                <h3 style={{textAlign : 'center', margin : '1rem', fontSize : '1.5rem'}}>Our <i>City</i> Collection</h3>
                <p className="card-text" style={{fontSize : '13px'}}>Our City Collection features a wide range of carefully curated homes in world-class cities - exclusive to onefinestay. These private homes are personally vetted and managed by our local teams.</p>
                <div style={locationStyle}>
                    <p>London</p>
                    <p>Paris</p>
                    <p>New York</p>
                    <p>See all</p>
                </div>
                <button style={findoutMoreButton}>
                    Find out more
                </button>
            </div>
        </div>
        <div className="card" style={cityCollection}>
            <img style={imgStyle} className="card-img-top" src="https://onefinestay.imgix.net/media-library/villa_collection_main_image.jpg?auto=format&w=420&dpr=1" alt="City Collection Card Image"/>
            <div className="card-body" style={cardBodyStyle}>
                <span className="badge badge-info" style={{fontSize:'12px', color : 'white', margin : '0 auto'}}>Villa</span>
                <h3 style={{textAlign : 'center', margin : '1rem'}}>Our <i>Villa</i> Collection</h3>
                <p className="card-text" style={{fontSize : '13px'}}>Our City Collection features a wide range of carefully curated homes in world-class cities - exclusive to onefinestay. These private homes are personally vetted and managed by our local teams.</p>
                <div style={locationStyle}>
                    <p>St Barts</p>
                    <p>St John</p>
                    <p>Turks and Caicos</p>
                    <p>See all</p>
                </div>
                <button style={findoutMoreButton}>
                    Find out more
                </button>
            </div>
        </div>
        </div>
        </>
    )
}

const cardBodyStyle = { 
    display : 'flex',
    flexDirection : 'column',
    padding : '2.5rem',
}

const containerStyle = {
    display : 'flex',
    justifyContent : 'center'
}

const cityCollection = {
    maxWidth : '400px'
}

const locationStyle = {
    margin : '10px',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between',
    fontSize : '15px',
}

const findoutMoreButton = {
    backgroundColor : 'white',
    
}

const imgStyle = {
    maxWidth : '400px',
    maxHeight : '223px'
}


export default Collections;

