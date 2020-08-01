import React from "react";
import { connect } from "react-redux";

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, hotelDetails } = this.props;
    // console.log(hotelDetails, "features");
    return (
      <div>
        {hotelDetails && (
          <div class="card border-0">
            <div class="card-body text-center text-md-left" style={{padding:'0px'}}>
              <h5>
                <span
                  class="badge badge-secondary mb-3"
                  style={{ background: "darkblue" }}
                >
                  City
                </span>{" "}
                <small className="text-muted" style={{fontSize:'12px'}}>
                <i class="fa fa-info-circle lg mr-1 ml-2" aria-hidden="true"></i>
                Find out more
                </small>{" "}
              </h5>
              <h1 class="d-sm-none d-block" style={{fontSize:'25px'}}>
                {hotelDetails["name"]}
              </h1>
              <h1 class="d-sm-block d-none mb-3" style={{fontSize:'2rem'}}>
                {hotelDetails["name"]}
              </h1>
              <h6 class="mt-2 text-muted" style={{fontSize : '15px'}}>
                <img
                  type="marker_slate"
                  style={{ marginRight: "10px", verticalAlign: "-2px"}}
                  src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/f246559b593b29a6498ee1a72d2aa446.svg"
                  alt="marker_slate"
                  height="14px"
                />{" "}
                {hotelDetails["location"]}
              </h6>
              <div style={{display:'flex',flexDirection:'row', justifyContent:'flex-start', marginTop : '10px'}}>
                  
                  <div className="d-flex align-items-center mr-5">
                    <img
                      className="mr-1"
                      type="guests"
                      src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/036f324cf34b32f5778266f61328bacf.svg"
                      alt="guests"
                    />
                    {hotelDetails["people"]}
                    <span className=" d-none d-sm-block pl-1">people</span>
                  </div>

                  <div className="d-flex align-items-center mr-5">
                    <img
                      className="mr-1"
                      type="bed"
                      src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/902f8e1ce2c97d1c7566c8ab22432d01.svg"
                      alt="bed"
                    />
                    {hotelDetails["bedrooms"]}
                    <span className=" d-none d-sm-block pl-1">bedrooms</span>
                  </div>

                  <div className="d-flex align-items-center">
                    <img
                      className="mr-1"
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
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelDetails: state.dataReducer.entityData,
});

export default connect(mapStateToProps, null)(Features);