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
    return (
      <>
        <Header {...this.props} />
        <div
          style={{
            padding: "5px",
            background: "#4DE1FF",
            justifyContent: "center",
            display: "flex",
            // padding: " 5px auto",
          }}
        ></div>
        <Collections {...this.props} />
        <Inspiration {...this.props} />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(LandingPage);
