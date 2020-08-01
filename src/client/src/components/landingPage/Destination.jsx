import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class HomeTruths extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, title, location, people, bathrooms, bedrooms } = this.props;
    // console.log(data);
    return (
      <div
        class="modal fade bd-example-modal-xl"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myExtraLargeModalLabel"
        aria-hidden="true"
        id="destination"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div className="row mx-5 mt-5 mb-3">
              <div className="h4 col-3">Our City collection</div>
              <div className="h4 col-3">Our Villa collection</div>
            </div>

            <div className="row mx-5 mb-5">
              <div className="col-3">
                <div className="font-weight-bold my-3"> Europe</div>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/search/London"
                  //   data-dismiss="modal"
                >
                  London
                </Link>
                <br />
                <Link
                  //   data-dismiss="modal"
                  style={{ color: "black", textDecoration: "none" }}
                  to="/search/Paris"
                >
                  Paris
                </Link>
                <br />
                <Link
                  //   data-dismiss="modal"
                  style={{ color: "black", textDecoration: "none" }}
                  to="/search/Rome"
                >
                  Rome
                </Link>
                <br />
              </div>
              <div className="col-3">
                <div className="font-weight-bold my-3"> Caribbean</div>
                <Link
                  //   data-dismiss="modal"
                  style={{ color: "black", textDecoration: "none" }}
                  to="/search/St Barts"
                >
                  St Barts
                </Link>
                <br />
                <Link
                  //   data-dismiss="modal"
                  style={{ color: "black", textDecoration: "none" }}
                  to="/search/Turks and Caicos"
                >
                  Turks and Caicos
                </Link>
                <br />
                <Link
                  //   data-dismiss="modal"
                  style={{ color: "black", textDecoration: "none" }}
                  to="/search/St John"
                >
                  St John
                </Link>
                <br />
              </div>
              <div className="col-3">
                <div className="font-weight-bold my-3"> Mexico</div>
                <Link
                  //   data-dismiss="modal"
                  style={{ color: "black", textDecoration: "none" }}
                  to="/search/Cabo San Lucas"
                >
                  Cabo San Lucas
                </Link>
                <br />
                <Link
                  //   data-dismiss="modal"
                  style={{ color: "black", textDecoration: "none" }}
                  to="/search/Riviera Maya"
                >
                  Riviera Maya
                </Link>
                <br />
                <Link
                  //   data-dismiss="modal"
                  style={{ color: "black", textDecoration: "none" }}
                  to="/search/Puerto Vallarta"
                >
                  Puerto Vallarta
                </Link>
                <br />
              </div>
              <div className="col-3">
                <div className="font-weight-bold my-3"> USA</div>
                <Link
                  //   data-dismiss="modal"
                  style={{ color: "black", textDecoration: "none" }}
                  to="/search/Breckenridge"
                >
                  Breckenridge
                </Link>
                <br />
                <Link
                  //   data-dismiss="modal"
                  style={{ color: "black", textDecoration: "none" }}
                  to="/search/Aspen"
                >
                  Aspen
                </Link>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelDetails: state.dataReducer.entityData,
});

export default connect(mapStateToProps, null)(HomeTruths);
