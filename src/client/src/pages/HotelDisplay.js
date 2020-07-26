import React from 'react';
import { connect } from "react-redux";


class HotelDisplayPage extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <>
            <h1>Hotel Display Page</h1>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
  });

export default connect(null, mapDispatchToProps)(HotelDisplayPage);