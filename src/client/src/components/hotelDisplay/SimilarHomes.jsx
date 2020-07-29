import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Route } from "react-router-dom";
import style from './SimilarHomes.module.css'

class SimilarHomes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      similarHomesData: [],
    };
  }

  componentDidMount() {
    ////console.log("params similar page", this.props);
    axios
      .get("https://c339083f82fb.ngrok.io/get-similar/" + this.props.paramsId)
      .then((res) => {
        ////console.log("res data", res.data);
        this.setState({
          similarHomesData: res.data.data,
        });
      });
  }

  render() {
    // const { similarHomesData } = this.props;
    const { similarHomesData } = this.state;
    // ////console.log("params similar below", this.props.paramsId);
    // ////console.log("params similar hioes", this.state.similarHomesData);
    return (
      <div>
        <h4 className="mt-5 mb-4 pl-3">Similar Homes</h4>
        <div class="row row-cols-1 row-cols-md-3 m-1 p-0">
          {similarHomesData?.map((item) => (
            <div class="col mb-4">
              <div class="card h-100">
                <img
                  src={item && item.hotel_images[0]}
                  class="card-img-top img-fluid"
                  alt="..."
                  style={{ height: 200 }}
                />
                <div class="card-body">
                  <h5 class="card-title text-danger">{item && item.name}</h5>
                  <p class="card-text text-muted">{item && item.location}</p>
                  <hr />
                  <p className="card-text" style={{fontSize:'13px'}}>
                    <small className={`${style.dot}`}> {item && item.people} people</small>
                    <small className={`${style.dot}`}> {item && item.bedrooms} bedrooms</small>
                    <small className={`${style.dot}`}> {item && item.bathrooms} bathrooms</small>
                  </p>
                  <p className="card-text" style={{fontSize:'13px'}}>
                    from $ {item && item.cost_per_night} / night
                  </p>
                  <p className="card-text" style={{fontSize:'13px'}}>
                    approx $ {item && item.cost_per_bedroom} /bedroom
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   similarHomesData: state.dataReducer.data
// });

export default connect(null, null)(SimilarHomes);
