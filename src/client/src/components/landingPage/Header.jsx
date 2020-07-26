import React from "react";
import SearchBar from "../common/SearchBar";

function Header(props) {
  return (
    <div className="w-100">
      <div style={imgStyle} className="img-fluid">
        <h1 style={h1Style}>
          Enjoy the <i>finest</i> homes and service all around the world
        </h1>
        <SearchBar {...props} />
      </div>
    </div>
  );
}

const imgStyle = {
  backgroundImage:
    'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), URL("https://onefinestay.imgix.net/media-library/ofs-home-page.jpg?auto=format&w=1280&dpr=2&fit=crop&q=80&rect=0%2C883%2C5813%2C2067")',
  width: "100%",
  height: "auto",
  padding: "1rem 1rem 1rem 1rem",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  transition: "opacity 0.2s ease 0s",
};

const h1Style = {
  maxWidth: "550px",
  fontSize: "32px",
  lineHeight: "45px",
  margin: "5rem auto",
  textAlign: "center",
  color: "white",
};

export default Header;
