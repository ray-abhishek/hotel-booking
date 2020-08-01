import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import { fetchEntityRequest } from '../../redux/action';
import style from "./SimilarHomes.module.css";

class SimilarHomes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      similarHomesData: [],
    };
  }

  componentDidMount() {
    console.log("params similar page", this.props);
    axios
      .get("https://b2535470cbf1.ngrok.io/get-similar/" + this.props.paramsId)
      .then((res) => {
        console.log("res data", res.data);
        this.setState({
          similarHomesData: res.data.data,
        });
      });
  }
  handleClick=(id)=>{
    const { fetchEntityRequest } = this.props;
    fetchEntityRequest("/home-listing/"+id);
  };

  render() {
    // const { similarHomesData } = this.props;
    const { similarHomesData } = this.state;
    // console.log("params similar below", this.props.paramsId);
    console.log("params similar hioes", this.state.similarHomesData);
    return (
      <div>
        <h4 className="mt-5 mb-4 pl-3">Similar Homes</h4>
        <div class="row row-cols-1 row-cols-md-3 m-1 p-0">
          {similarHomesData?.map((item) => (
            <div class="col mb-4" key={item.id}>
              <div class="card h-100">
                <img
                  src={item && item.hotel_images[0]}
                  class="card-img-top img-fluid"
                  alt="..."
                  style={{ height: 200 }}
                />
                <div class="card-body">
                <Link to={`/home-listing/${item.id}`}>
                  <h5 class="card-title" 
                style={{cursor: "pointer", color: "#ff8065"}} 
                  onClick={()=>this.handleClick(item.id)}>
                    {item && item.name}</h5>
                    </Link>
                  <p class="card-text text-muted">{item && item.location}</p>
                  <hr />
                  <p className="card-text" style={{ fontSize: "13px" }}>
                    <small className={`${style.dot}`}>
                      {" "}
                      {item && item.people} people
                    </small>
                    <small className={`${style.dot}`}>
                      {" "}
                      {item && item.bedrooms} bedrooms
                    </small>
                    <small className={`${style.dot}`}>
                      {" "}
                      {item && item.bathrooms} bathrooms
                    </small>
                  </p>
                  <p className="card-text" style={{ fontSize: "13px" }}>
                    from $ {item && item.cost_per_night} / night
                  </p>
                  <p className="card-text" style={{ fontSize: "13px" }}>
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
//   data: state.dataReducer.catalogData,
// });

const mapDispatchToProps = (dispatch) => ({
  fetchEntityRequest: (query) => dispatch(fetchEntityRequest(query)),
});

export default connect(null, mapDispatchToProps)(SimilarHomes);
