import React from "react";
import { connect } from "react-redux";

class HomeTruths extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, title, location, people, bathrooms, bedrooms } = this.props;
    let round = {
      height: "80px",
      width: "80px",
      borderRadius: "100%",
      background: "rgba(230, 230, 235, 0.897)",
      padding: "16px ",
      marginLeft: "25%",
    };
    let font = { fontSize: ".8em" };
    console.log(data);
    return (
      <div
        class="card my-3 text-center"
        style={{ fontFamily: "tiemposText" }}
      >
        <div className="text-center mt-4 mb-2">
          <h1 class="badge badge-info p-2" style={{ background: "darkblue" }}>
            City Collection
          </h1>{" "}
        </div>
        <dir className="row" style={{paddingLeft:'0px', marginRight:'20px', marginLeft:'0px'}}>
          <dir className="col-3 text-center">
            <div style={round}>
              <i class="h1 fas fa-home"></i>
              <svg
                viewBox="0 0 200 207.14285714285714"
                style={{ display: "block", width: "100%", height: "100%" }}
              ></svg>
            </div>
            {/* <div> */}
            <p style={font}>
              Exclusively
              <br />
              onefinestay
            </p>
            {/* </div> */}
          </dir>
          <dir className="col-3 text-center">
            <div style={round}>
              <i class="h1 fas fa-handshake"></i>
              <svg
                viewBox="0 0 200 180.64516129032256"
                style={{ display: "block", width: "100%", height: "100%" }}
              ></svg>
            </div>
            {/* <div> */}
            <p style={font}>
              Personal
              <br />
              Meet &amp; Greet
            </p>
            {/* </div> */}
          </dir>
          <dir className="col-3 text-center">
            <div style={round}>
              <i class="h1 fas fa-toilet-paper"></i>
              <svg
                viewBox="0 0 200 181.8181818181818"
                style={{ display: "block", width: "100%", height: "100%" }}
              ></svg>
            </div>
            <div>
              <p style={font}>
                Toiletries
                <br /> &amp; linens
              </p>
            </div>
          </dir>
          <dir className="col-3 text-center">
            <div style={round}>
              <i class="h1 far fa-clock"></i>
              <svg
                viewBox="0 0 200 193.54838709677418"
                style={{ display: "block", width: "100%", height: "100%" }}
              ></svg>
            </div>
            <div>
              <p style={font}>
                24/7
                <br />
                support
              </p>
            </div>
          </dir>
        </dir>
        <div className="text-center mb-3">
          <div className="btn btn-outline-dark">Find Out More</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelDetails: state.dataReducer.entityData,
});

export default connect(mapStateToProps, null)(HomeTruths);