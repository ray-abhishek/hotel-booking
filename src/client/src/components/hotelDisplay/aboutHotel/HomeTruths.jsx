import React from "react";
import { connect } from "react-redux";

class HomeTruths extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, title, location, people, bathrooms, bedrooms } = this.props;
    // ////console.log(data);
    return (
      <div>
        <div class="border-0 mt-5">
          <div class="">
            <h5 className="card-heading h5">Home truths</h5>
            <hr />
            <ul
              style={{
                listStyle: "none",
                fontFamily: "tiemposText",
                fontSize: "14px",
                paddingLeft : "10px"
              }}
            >
              <li className="text-muted">
                - The bunk bed in the second bedroom will comfortably sleep two
                adults on the bottom double, and has room for a further one
                adult on the top bunk.
              </li>
            </ul>
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
