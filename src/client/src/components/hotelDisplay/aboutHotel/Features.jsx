import React from "react";

export default class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, title, location, people, bathrooms, bedrooms } = this.props;
    console.log(data);
    return (
      <div>
        <div class="card mx-5 my-3">
          <div class="card-body text-center text-md-left">
            <h5>
              <span class="badge badge-secondary">City</span>{" "}
              <small className="text-muted">Find out more</small>{" "}
            </h5>
            <h1 class="card-subtitle d-sm-none d-block">title</h1>
            <h1 class="card-subtitle d-sm-block d-none">title</h1>
            <h6 class="mt-2 text-muted">location</h6>
            <div className="row offset-2 offset-md-0">
              <div className="col-4 col-md-3 ">
                <div className="row">
                  <img
                    className="pr-3"
                    type="guests"
                    src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/036f324cf34b32f5778266f61328bacf.svg"
                    alt="guests"
                  />
                  4<span className=" d-none d-sm-block pl-1">people</span>
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
                  2<span className=" d-none d-sm-block pl-1">bedrooms</span>
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
                  2<span className=" d-none d-sm-block pl-1">bathrooms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   data: state.dataReducer.data,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchRequest: (query) => dispatch(fetchRequest(query)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Features);
