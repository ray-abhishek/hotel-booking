import React from "react";
import { connect } from "react-redux";
import BookingForm from "../components/bookingPage/BookingForm";

class BookingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-12 col-md-8 offset-md-2">
        <BookingForm {...this.props} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(BookingPage);
