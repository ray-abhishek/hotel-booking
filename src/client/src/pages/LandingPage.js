import React from "react";
import Header from "../components/landingPage/Header";
import Collections from "../components/landingPage/Collections";
import { connect } from "react-redux";
import Inspiration from "../components/landingPage/Inspiration";
import AutocompletePlaces from "../components/common/AutocompletePlaces";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("HI FROM LANDING PAGE");
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
        >
          <AutocompletePlaces />
        </div>
        <Collections {...this.props} />
        <Inspiration {...this.props} />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(LandingPage);
