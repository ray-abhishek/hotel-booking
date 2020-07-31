import React from "react";
import { connect } from "react-redux";

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
              <div className="h2 col-4">Our City collection</div>
              <div className="h2 col-4">Our Villa collection</div>
            </div>

            <div className="row mx-5 mb-5">
              <div className="col-3">
                <div className="font-weight-bold my-3"> Europe</div>
                <div>London</div>
                <div>Paris</div>
                <div>Rome</div>
              </div>
              <div className="col-3">
                <div className="font-weight-bold my-3"> Caribbean</div>
                <div>St Barts</div>
                <div>Turks and Caicos</div>
                <div>St John</div>
              </div>
              <div className="col-3">
                <div className="font-weight-bold my-3"> Mexico</div>
                <div>Cabo San Lucas</div>
                <div>Riviera Maya</div>
                <div>Puerto Vallarta</div>
              </div>
              <div className="col-3">
                <div className="font-weight-bold my-3"> USA</div>
                <div>Breckenridge</div>
                <div>Aspen</div>
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
