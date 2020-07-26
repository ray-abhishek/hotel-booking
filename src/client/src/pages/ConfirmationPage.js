import React from 'react';
import { connect } from "react-redux";


class ConfirmationPage extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <>
            <h1>Confirmation Page</h1>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
  });

export default connect(null, mapDispatchToProps)(ConfirmationPage);