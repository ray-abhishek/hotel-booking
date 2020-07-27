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
          className="accordion mx-5 my-3"
          id="accordionExample"
          style={{
            fontFamily: "tiemposText",
            fontSize: ".9em",
          }}
        >
          <h2
            font-family="tiemposText"
            font-weight="400"
            font-size="L"
            color="secondary"
            className="sc-15ch3b2-1 fRbMas"
          >
            Description
          </h2>
          {hotelDetails && hotelDetails["description"] && (
            <h4>{hotelDetails["description"][0]}</h4>
          )}

          {hotelDetails && hotelDetails["description"] && (
            <p
              id="collapseOne"
              className="collapse show "
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
              style={{ overflowY: "hidden" }}
            >
              <div> {hotelDetails["description"][1]}</div>
              <div>{hotelDetails["description"][2]}</div>
            </p>
          )}
          {this.state.show && hotelDetails && hotelDetails["description"] && (
            <p>{hotelDetails["description"][1]}</p>
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
            {this.state.show ? `v show more` : `^ hide`}
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
