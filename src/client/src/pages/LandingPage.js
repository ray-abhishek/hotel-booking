import React from "react";
import Header from "../components/landingPage/Header";
import Collections from "../components/landingPage/Collections";
import { connect } from "react-redux";
import Inspiration from "../components/landingPage/Inspiration";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    ////console.log("HI FROM LANDING PAGE");
    return (
      <>
        <Header {...this.props} />
        <Collections {...this.props} />
        <Inspiration {...this.props} />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(LandingPage);
