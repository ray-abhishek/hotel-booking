import React from 'react';
import { connect } from "react-redux";


class BookingPage extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <>
            <h1>BOOKING PAGE</h1>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
  });

export default connect(null, mapDispatchToProps)(BookingPage);