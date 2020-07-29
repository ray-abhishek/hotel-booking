import React from 'react'
import Stick from 'react-slick';
import DatePicker from 'react-datepicker';
import {StickyContainer, Sticky} from 'react-sticky';
import style from './HotelDetails.module.css';
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addDays } from 'date-fns' ;
import axios from 'axios';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// import dates from './dates.json';

const ExampleCustomArrival = ({ value, onClick }) => (
  <button style={{ border: "none", background: "white" }} onClick={onClick}>
    {value ? value : "Arrival Date"}
  </button>
);

const ExampleCustomDeparture = ({ value, onClick }) => (
  <button style={{ border: "none", background: "white" }} onClick={onClick}>
    {value ? value : "Departure"}
  </button>
);


class BookingBox extends React.Component{
    constructor(props){
        super(props)
        const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    this.state = {
      arrivalDate: null,
      departureDate: null,
      bookedDates: '',
      
    };
  }

  handleArrivalDateChange = (date) => {
    this.setState({
      arrivalDate: date,
    }
   
    );
    this.handledepartureDateChange()
  };
  handledepartureDateChange = (date) => {
    this.setState({
      departureDate: date,
    });
  };

     componentDidMount (){
      console.log("id", this.props.match.params.id)
      const res=  axios.get("https://c339083f82fb.ngrok.io/booked-dates/"+this.props.match.params.id)
      console.log("booked dates" ,res.data)
        this.setState({
          bookedDates: res.data
        })        
    }

    handleBooking=()=>{
      this.props.history.push("/home-listing/"+this.props.match.params.id+"/request-booking")
    }


    render(){
        const {arrivalDate , departureDate, bookedDates} = this.state;
        const { setStartDate, getFullYear, getMonth, getDate, handleBooking } = this;
        const { hotelData } = this.props
        console.log("hotelData", hotelData)
        let arrival = 
        `${arrivalDate && arrivalDate.getFullYear()}-${arrivalDate && arrivalDate.getMonth() + 1}-${arrivalDate && arrivalDate.getDate()}`;
          
        let departure = `${ departureDate && departureDate.getFullYear()}-${ departureDate && departureDate.getMonth() + 1}-${ departureDate && departureDate.getDate()}
          `;

        // differencce of date
         let differenceDate = Math.floor((Date.UTC( departureDate &&  departureDate.getFullYear(), departureDate &&  departureDate.getMonth(),departureDate &&  departureDate.getDate()) - Date.UTC( departureDate &&  arrivalDate.getFullYear(), departureDate &&  arrivalDate.getMonth(), departureDate &&  arrivalDate.getDate()) ) /(1000 * 60 * 60 * 24))




          // console.log( "arrival" ,arrival)
          // console.log( "departure" ,departure)

        return(
            <div className="clearfix" style={{fontSize:'15px'}}>
              <div className="card p-3" style={{width:300, height:"auto"}}>
             <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-row row mb-5">              

            <div className="form-group" style={{fontSize:'15px',width: 250, height: 33}}>
                <div style={{fontSize:'14px'}}> Arrival Date</div>
                <div className="border border-medium pl-3 p-1 pr-3 mt-1 rounded d-flex">
               
                  <DatePicker
                  style
                    className="datepicker"
                    selected={this.state.arrivalDate}
                    onChange={(date) => this.handleArrivalDateChange(date)}
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 60)}
                    excludeDates={
                        bookedDates && bookedDates
                       .data["ahead"]?.map(item=>(
                          new Date(), addDays(new Date(), item)                         
                        )                        
                        )                     
                    }

                    placeholderText="Arrival date"
                    selectsStart
                    startDate={this.state.arrivalDate}
                    endDate={this.state.departureDate}                 
                    customInput={<ExampleCustomArrival />}                
                  > 
                 
                  </DatePicker>
                  <img
                    type="calendar"
                    height="18px"
                    width="18px"
                    src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/69db739b45ad31493bdf934e1715f135.svg"
                    alt="calendar"
                    class="sc-1ny7b47-0 jhFEmf mt-1"
                  />
                </div>
            </div>
          </div>
          <div className="form-row row mb-5">    
            <div className="form-group" style={{width: 250, height: 33}}>

                  <div style={{fontSize:'14px'}}>Departure Date </div>
              {/* <div style={child3}> */}
              
                <div  className="border border-medium pl-3 pl-1 pr-3 mt-1 d-flex rounded">
               
                  <DatePicker
                    className="datepicker"
                    selected={this.state.departureDate}
                    onChange={(date) => this.handledepartureDateChange(date)}
                    minDate={arrivalDate}
                    maxDate={addDays(new Date(), 150)}

                    excludeDates={
                      bookedDates && bookedDates
                      .data["ahead"]?.map(item=>(
                        new Date(), addDays(new Date(), item)))                                             
                  }
                    placeholderText="Departure date "
                    selectsStart
                    startDate={this.state.arrivalDate}
                    endDate={this.state.departureDate}
                    customInput={<ExampleCustomDeparture />}
                    
                  />
                  <img
                    type="calendar"
                    height="18px"
                    width="18px"
                    src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/69db739b45ad31493bdf934e1715f135.svg"
                    alt="calendar"
                    class="sc-1ny7b47-0 jhFEmf mt-1"
                  />
              </div>
            </div>
                  </div>
                  </form>
                  {departureDate?
                 <div>
                 <div className="d-flex justify-content-between" style={{width: 250}}>
                   <div className="text-muted">
                     {differenceDate+" Nights"}
                   </div>
                    <strong >  {hotelData && hotelData["cost_per_night"] } $/Nights </strong> 
                    </div>
                    <div className="d-flex justify-content-between mt-3 mb-3" style={{width: 250}}>
                      <div className="text-muted">
                        Total
                      </div>
                     
                      <strong > $  {hotelData && hotelData["cost_per_night"]* differenceDate }</strong>
                     
                    </div>
                    </div>
                    :
                 <p className="text-danger">The minimum length of stay for this home is 30 nights</p>}
                 
                    
                 <p className="text-muted">Please enquire about these dates and a Travel Advisor will get back to you</p>
            <button className= "btn btn-danger btn-lg btn-block mb-3" onClick={(arrival, departure)=>handleBooking(arrival, departure)}>Request a Booking</button>

            <hr/>
            <div className="card mt-3 pl-3 pt-2 pb-2">
                    <div className="text-center" style={{fontSize:'15px', fontWeight: '500'}}>Ask a Question </div>
                  </div>
                  <div className="mt-5 clearfix">
                    <small style={contact} >Contact us</small>
                    <small className="float-right" style={{fontSize: 16}}>+91-8051665056</small>
                    </div>
                    <hr/>
                    <div className="clearfix mt-3">
                      
                    <i class="far fa-heart pr-3"></i><small style={{display: 'inlineBlock'}}>Add to Wishlist</small>
                      <small className="float-right pl-3">Share</small>
                      <img type="share" src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/5ea8b6bf30a043bb85d0e2e10bb0f192.svg" alt="share" class="sc-1ny7b47-0 jhFEmf float-right" style={{verticalAlign: "middle"}}/>
                      
                    </div>
                  </div>
                 
          </div>
        )
    }
}
const contact ={

      fontSize: 16,
      textDecoration: "underline"
}

const book={
  width: 16, 
  height: 16, 
  marginBottom: 2, 
  marginRight: 5,
  backgroundColor: "green"
}
const request ={

  width: 16,
      height: 16,
      marginBottom: 2,
      marginRight: 5,
      backgroundColor: "SkyBlue"
}

const reqCol={
  display: "flex"
}

// const bookingCalculate={
//   margin-top: 26px;
//     -webkit-box-pack: justify;
//     justify-content: space-between;
// }

const mapStateToProps =(state)=>({
  hotelData : state.dataReducer.entityData
})

// const mapDispatchToProps=(hotelId)=({
//   handleBooking: hotelId=>(dispatch(fetch))
// })

export default connect(mapStateToProps, null)(BookingBox);