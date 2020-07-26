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
      <div>
        <div class="card border-0 mx-5 my-3">
          <div class="card-body">
            <ul style={{ listStyle: "none" }}>
              <h5 className="card-heading text-muted h5">Home truths</h5>
              <hr />
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
  hotelDetails: state.dataReducer.data,
});

export default connect(mapStateToProps, null)(HomeTruths);
