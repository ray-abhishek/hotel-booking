import React from "react";
import { connect } from "react-redux";
import ConfirmationMessage from "../components/confirmationPage/ConfirmationMessage";

class ConfirmationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <ConfirmationMessage {...this.props} />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(ConfirmationPage);
