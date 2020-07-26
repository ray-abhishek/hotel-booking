import React from "react";
import { connect } from "react-redux";

class HomeTruths extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, title, location, people, bathrooms, bedrooms } = this.props;
    console.log(data);
    return (
      <div class="card mx-5 my-3">
        <div className="text-center mt-4 mb-2">
          <h1 class="badge badge-info p-2">City Collection</h1>{" "}
        </div>
        <dir className="row">
          <dir className="col-3 px-5">
            <i class="display-1 fas fa-home"></i>
            <div>
              <p>
                Exclusively
                <br />
                onefinestay
              </p>
            </div>
          </dir>
          <dir className="col-3 px-5">
            <i class="display-1 fas fa-handshake"></i>
            <div>
              <p>
                Personal
                <br />
                Meet &amp; Greet
              </p>
            </div>
          </dir>
          <dir className="col-3 px-5">
            <i class="display-1 fas fa-toilet-paper"></i>
            <div>
              <p>
                Toiletries
                <br /> &amp; linens
              </p>
            </div>
          </dir>
          <dir className="col-3 px-5">
            <i class="display-1 far fa-clock"></i>
            <div>
              <p>
                24/7
                <br />
                support
              </p>
            </div>
          </dir>
        </dir>
        <div className="text-center mb-3">
          <div className="btn btn-outline-dark">Find Out More</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelDetails: state.dataReducer.data,
});

export default connect(mapStateToProps, null)(HomeTruths);
