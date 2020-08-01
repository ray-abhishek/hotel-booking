import React from "react";
import SearchBar from "../common/SearchBar";
import FindOutMoreModal from "./FindOutMoreModal";
import FindOutMoreVilla from "./FindOutMoreVilla";
import { Link } from "react-router-dom";

function Collections() {
  return (
    <>
      <FindOutMoreModal />
      <FindOutMoreVilla />

      <h3 className="text-center m-5">OUR COLLECTIONS</h3>
      <div style={containerStyle}>
        <div className="card mr-3" style={cityCollection}>
          <img
            style={imgStyle}
            className="card-img-top"
            src="https://onefinestay.imgix.net/media-library/city_collection_cain_image.jpg?auto=format&w=420&dpr=1"
            alt="City Collection Card Image"
          />
          <div className="card-body" style={cardBodyStyle}>
            <span
              className="badge"
              style={{
                backgroundColor: "darkblue",
                fontSize: "12px",
                color: "white",
                margin: "0 auto",
              }}
            >
              City
            </span>
            <h3
              style={{
                textAlign: "center",
                margin: "1rem",
                fontSize: "1.5rem",
              }}
            >
              Our <i>City</i> Collection
            </h3>
            <p className="card-text" style={{ fontSize: "13px" }}>
              Our City Collection features a wide range of carefully curated
              homes in world-class cities - exclusive to onefinestay. These
              private homes are personally vetted and managed by our local
              teams.
            </p>

            <div style={locationStyle}>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/search/london"
              >
                London
              </Link>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/search/paris"
              >
                Paris{" "}
              </Link>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/search/new york"
              >
                {" "}
                New York{" "}
              </Link>
              <p> See all </p>
            </div>
            <button
              className="btn btn-light border-light"
              data-toggle="modal"
              data-target="#findOutMore"
            >
              Find out more
            </button>
          </div>
        </div>
        <div className="card " style={cityCollection}>
          <img
            style={imgStyle}
            className="card-img-top"
            src="https://onefinestay.imgix.net/media-library/villa_collection_main_image.jpg?auto=format&w=420&dpr=1"
            alt="City Collection Card Image"
          />
          <div className="card-body" style={cardBodyStyle}>
            <span
              className="badge badge-info"
              style={{ fontSize: "12px", color: "white", margin: "0 auto" }}
            >
              Villa
            </span>
            <h3 style={{ textAlign: "center", margin: "1rem" }}>
              Our <i>Villa</i> Collection
            </h3>
            <p className="card-text" style={{ fontSize: "13px" }}>
              Our City Collection features a wide range of carefully curated
              homes in world-class cities - exclusive to onefinestay. These
              private homes are personally vetted and managed by our local
              teams.
            </p>
            <div style={locationStyle}>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/seach/St Barts"
              >
                St Barts{" "}
              </Link>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/seach/St John"
              >
                {" "}
                St John{" "}
              </Link>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/seach/Turks and Caicos"
              >
                Turks and Caicos{" "}
              </Link>
              <p>See all</p>
            </div>
            <button
              className="btn btn-light border-light"
              data-toggle="modal"
              data-target="#villa"
            >
              Find out more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const cardBodyStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "2.5rem",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
};

const cityCollection = {
  maxWidth: "450px",
};

const locationStyle = {
  margin: "10px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  fontSize: "15px",
};

const findoutMoreButton = {
  backgroundColor: "white",
  border: "1 solid",
};

const imgStyle = {
  maxWidth: "450px",
  maxHeight: "240px",
};

export default Collections;
