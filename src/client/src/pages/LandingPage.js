import React from 'react';
import Header from '../components/landingPage/Header';
import { connect } from "react-redux";


class LandingPage extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        console.log("HI FROM LANDING PAGE")
        return(
            <>
            <Header />
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
  });

export default connect(null, mapDispatchToProps)(LandingPage);