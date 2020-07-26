import React from 'react'


function Header(){

    return (
        <div className="w-100">
            <div style={imgStyle} className="img-fluid">
                <h1 style={h1Style}>Enjoy the <i>finest</i> homes and service all around the world</h1>
            </div>
        </div>
    )
}

const imgStyle = {
    backgroundImage : 'URL("https://onefinestay.imgix.net/media-library/ofs-home-page.jpg?auto=format&w=1280&dpr=2&fit=crop&q=80&rect=0%2C883%2C5813%2C2067")',
    width : '100%',
    height : 'auto',
    padding : '1rem 1rem 1rem 1rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    transition: 'opacity 0.2s ease 0s'
}

const h1Style = {
    maxWidth : '630px',
    fontSize: '37px',
    lineHeight: '50px',
    margin : '0 auto',
    textAlign : 'center'
}


export default Header;

