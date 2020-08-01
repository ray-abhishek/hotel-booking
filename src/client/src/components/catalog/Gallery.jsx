import React from "react";
import { connect } from "react-redux";
import { fetchEntityRequest } from "../../redux/action";
import style from "./Gallery.module.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /// componentDidMount(){
  ///this.props.fetchEntityRequest(this.props.location.pathname)
  ///}

  handleSearch = (id) => {
    const { fetchEntityRequest, data } = this.props;
    this.props.history.push("/home-listing/" + id);
    fetchEntityRequest("/home-listing/" + id);
  };

  render() {
    const { data } = this.props;
    // console.log(data);
    return (
      <div className="">
        {data?.map((item) => (
          <>
            <div className="card mb-3 border-0">
              <div key={item.id} className="row no-gutters">
                <div
                  className="col-md-6 carousel slide"
                  id={`carouselExampleControls${item.id}`}
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={item.hotel_images[0]}
                        className="card-img d-block w-100 img-fluid"
                        alt={item.name}
                        style={{ height: 230 }}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={item.hotel_images[1]}
                        className="card-img d-block w-100 img-fluid"
                        alt={item.name}
                        style={{ height: 230 }}
                      />
                    </div>
                  </div>

                  <a
                    class="carousel-control-prev"
                    href={`#carouselExampleControls${item.id}`}
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="false"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href={`#carouselExampleControls${item.id}`}
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="false"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <div className="col-md-6 mt-4 pl-4">
                  <div
                    onClick={() => this.handleSearch(item.id)}
                    className="cart-body"
                  >
                    <h4 className={`${style.hotelName}`}>{item.name}</h4>

                    <div className="text-muted">{item.location}</div>
                    <hr />
                    <div>
                      <small>{item.people + " people "}</small>
                      <small className={`${style.dot}`}>
                        {item.bedrooms + " bedrooms "}
                      </small>
                      <small className={`${style.dot}`}>
                        {item.bathrooms + " bathrooms "}
                      </small>
                    </div>
                    <hr />
                    <div className="text-muted">
                      from{" "}
                      <b className={`${style.largerText}`}>
                        ${item.cost_per_night}
                      </b>{" "}
                      / night
                    </div>
                    <div className="text-muted">
                      {"approx $" + item.cost_per_bedroom + " / bedroom"}
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.dataReducer.catalogData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEntityRequest: (query) => dispatch(fetchEntityRequest(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
