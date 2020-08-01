import React from "react";
import { connect } from "react-redux";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    const { hotelDetails } = this.props;
    return (
      <>
        <div
          className="accordion mt-5"
          id="accordionExample"
          style={{
            fontFamily: "tiemposText",
            fontSize: ".9em",
          }}
        >
          <h5 className="card-heading font-weight-bold mb-3 h5">Description</h5>
          <hr />
          {hotelDetails && hotelDetails["description"] && (
            <p style={{ fontSize: "16px" }} className="font-weight-bold ">
              {hotelDetails["description"][0]}
            </p>
          )}

          {hotelDetails && hotelDetails["description"] && (
            <p
              id="collapseOne"
              className="collapse show "
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
              style={{ overflowY: "hidden", fontSize: "15px" }}
            >
              <div> {hotelDetails["description"][1]}</div>
              <br />
              <div>{hotelDetails["description"][2]}</div>
            </p>
          )}
          {this.state.show && hotelDetails && hotelDetails["description"] && (
            <p style={{ overflowY: "hidden", fontSize: "15px" }}>
              {hotelDetails["description"][1]}
            </p>
          )}
          <p
            onClick={(e) => {
              this.setState({
                show: !this.state.show,
              });
            }}
            className="btn btn-link"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <p style={{ fontSize: "12px", padding: "0px" }}>
              <i class="fa fa-caret-down lg" aria-hidden="true"></i>
              {this.state.show ? ` show more` : ` hide`}
            </p>
          </p>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelDetails: state.dataReducer.entityData,
});

export default connect(mapStateToProps, null)(Description);
