import React from "react";
import { connect } from "react-redux";

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, hotelDetails } = this.props;
    console.log(hotelDetails, "features");
    return (
      <div>
        {hotelDetails && (
          <div class="card border-0 mx-5 my-3">
            <div class="card-body text-center text-md-left">
              <h5>
                <span class="badge badge-secondary">City</span>{" "}
                <small className="text-muted">Find out more</small>{" "}
              </h5>
              <h1 class="card-subtitle d-sm-none d-block">
                {hotelDetails["name"]}
              </h1>
              <h1 class="card-subtitle d-sm-block d-none">
                {hotelDetails["name"]}
              </h1>
              <h6 class="mt-2 text-muted">
                <img
                  type="marker_slate"
                  style={{ marginRight: "10px", verticalAlign: "-2px" }}
                  src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/f246559b593b29a6498ee1a72d2aa446.svg"
                  alt="marker_slate"
                  height="14px"
                />{" "}
                {hotelDetails["location"]}
              </h6>
              <div className="row offset-2 offset-md-0">
                <div className="col-4 col-md-3 ">
                  <div className="row">
                    <img
                      className="pr-3"
                      type="guests"
                      src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/036f324cf34b32f5778266f61328bacf.svg"
                      alt="guests"
                    />
                    {hotelDetails["people"]}
                    <span className=" d-none d-sm-block pl-1">people</span>
                  </div>
                </div>
                <div className="col-3 col-md-3">
                  <div className="row">
                    <img
                      className="pr-3"
                      type="bed"
                      src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/902f8e1ce2c97d1c7566c8ab22432d01.svg"
                      alt="bed"
                    />
                    {hotelDetails["bedrooms"]}
                    <span className=" d-none d-sm-block pl-1">bedrooms</span>
                  </div>
                </div>
                <div className="col-3 col-md-3">
                  <div className="row">
                    <img
                      className="pr-3"
                      type="bathtub"
                      src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/ca2e12a1baad71ca75c5b64ab8e6ea41.svg"
                      alt="bathtub"
                    />
                    {hotelDetails["bathrooms"]}
                    <span className=" d-none d-sm-block pl-1">bathrooms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelDetails: state.dataReducer.data,
});

export default connect(mapStateToProps, null)(Features);
