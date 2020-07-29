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
          className="accordion"
          id="accordionExample"
          style={{
            fontFamily: "tiemposText",
            fontSize: ".9em",
          }}
        >
          <h5
            font-family="tiemposText"
            font-weight="800"
            font-size="L"
            color="secondary"
            className="sc-15ch3b2-1 fRbMas mt-5"
          >
            Description
          </h5>
          <hr/>
          {hotelDetails && hotelDetails["description"] && (
            <p style={{fontSize:'16px'}}>{hotelDetails["description"][0]}</p>
          )}

          {hotelDetails && hotelDetails["description"] && (
            <p
              id="collapseOne"
              className="collapse show "
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
              style={{ overflowY: "hidden", fontSize: "15px" }}
            >
              <div> {hotelDetails["description"][1]}</div><br/>
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
            <p style={{fontSize:'12px', padding: '0px'}}><i class="fa fa-caret-down lg" aria-hidden="true"></i>{this.state.show ? ` show more` : ` hide`}</p>
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