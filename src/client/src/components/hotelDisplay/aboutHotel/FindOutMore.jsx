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
      height: "70px",
      width: "70px",
      borderRadius: "100%",
      background: "rgb(199, 199, 192)",
      padding: "14px",
    };
    let font = { fontSize: "1.5vw" };
    console.log(data);
    return (
      <div class="card mx-5 my-3">
        <div className="text-center mt-4 mb-2">
          <h1 class="badge badge-info p-2">City Collection</h1>{" "}
        </div>
        <dir className="row">
          <dir className="col-3 px-5">
            <div style={round}>
              <i class="h1 fas fa-home"></i>
            </div>
            <div>
              <p style={font}>
                Exclusively
                <br />
                onefinestay
              </p>
            </div>
          </dir>
          <dir className="col-3 px-5">
            <div style={round}>
              <i class="h1 fas fa-handshake"></i>
            </div>
            {/* <div> */}
            <p style={font}>
              Personal
              <br />
              Meet &amp; Greet
            </p>
            {/* </div> */}
          </dir>
          <dir className="col-3 px-5">
            <div style={round}>
              <i class="h1 fas fa-toilet-paper"></i>
            </div>
            <div>
              <p style={font}>
                Toiletries
                <br /> &amp; linens
              </p>
            </div>
          </dir>
          <dir className="col-3 px-5">
            <div style={round}>
              <i class="h1 far fa-clock"></i>
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
  hotelDetails: state.dataReducer.data,
});

export default connect(mapStateToProps, null)(HomeTruths);
