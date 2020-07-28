import React from 'react'
import Stick from 'react-slick';
import DatePicker from 'react-datepicker';
import {StickyContainer, Sticky} from 'react-sticky';
import style from './HotelDetails.module.css';
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addDays } from 'date-fns' ;
import axios from 'axios';
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
      arrivalDate: new Date(),
      departureDate: new Date(),
      bookedDates: ''
    };
  }

  handleArrivalDateChange = (date) => {
    this.setState({
      arrivalDate: date,
    }
    );
    
  };
  handledepartureDateChange = (date) => {
    this.setState({
      departureDate: date,
    });
  };

    async componentDidMount (){
      // var { id } = this.props.match.params.id
      // var hotelId = Number(id) 
      console.log("id", this.props.match.params.id)
      const res= await axios.get("https://1280c16124f0.ngrok.io/booked-dates/"+this.props.match.params.id)
      console.log("booked dates" ,res.data)
        this.setState({
          bookedDates: res.data
        })
      
      
    }


    render(){
        const {arrivalDate , departureDate, bookedDates} = this.state;
        const { setStartDate, getFullYear, getMonth, getDate } = this;
        
        // bookedDates && console.log("bookded ates arra data",  bookedDates.data["ahead"])
        let arrival = 
        `${arrivalDate.getFullYear()}-${arrivalDate.getMonth() + 1}-${arrivalDate.getDate()}`;
          
        let departure = `${departureDate.getFullYear()}-${departureDate.getMonth() + 1}-${departureDate.getDate()}
          `;

          // console.log( "date" ,arrival, departure)

        return(
            <div className="clearfix">
              <div className="card p-5 mr-5 float-right" style={{width:350, height:"auto"}}>
             <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-row row mb-5">              
            <div className="form-group" style={{width: 250, height: 33}}>
                <div> Arrival Date</div>
                <div className="border border-dark pl-3 p-1 pr-3 mt-2 rounded d-flex">
               
                  <DatePicker
                  style
                    className="datepicker"
                    selected={this.state.arrivalDate}
                    onChange={(date) => this.handleArrivalDateChange(date)}

                    excludeDates={
                      [new Date(), 
                        subDays(new Date(), 4), 
                        subDays(new Date(), 2),
                        subDays(new Date(), 1),
                        subDays(new Date(), 2),
                        subDays(new Date(), 3), 
                        addDays(new Date(),  1), 
                        addDays(new Date(),  2), 
                        addDays(new Date(),  3), 
                        addDays(new Date(),  4), 
                        addDays(new Date(),  5), 
                      
                      ]}

                    placeholderText="Arrival date"
                    selectsStart
                    startDate={this.state.arrivalDate}
                    endDate={this.state.departureDate}                 
                    customInput={<ExampleCustomArrival />}                
                  > 
                  <div className="clearfix">
                   <div style={reqCol}></div>  
                   <div style={book}></div> 
                   <div style={{ margin:10}}>Book Now</div>  

                   <div style={book}></div> 
                   <div style={reqCol}>
                   <div style={request}></div> 
                   <div style={{ margin:10 }}>Request Booking</div>   
                   </div></div>
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
                  <div>Departure Date </div>
              {/* <div style={child3}> */}
              
                <div  className="border border-dark pl-3 p-1 pr-3 mt-2 d-flex rounded">
               
                  <DatePicker
                    className="datepicker"
                    selected={this.state.departureDate}
                    onChange={(date) => this.handledepartureDateChange(date)}
                    // disabledKeyboardNavigation
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
                 <p className="text-danger">The minimum length of stay for this home is 30 nights</p>
                 <p className="text-muted">Please enquire about these dates and a Travel Advisor will get back to you</p>
            <button className= "btn btn-danger btn-lg btn-block mb-3">Request a Booking</button>
            <hr/>
            <div className="card mt-3 pl-3 pt-2 pb-2">
                    <div className="text-center"><strong> Ask a Question </strong></div>
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

export default BookingBox;