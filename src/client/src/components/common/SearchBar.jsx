// import React, { Component } from "react";
// import style from "./SearchBar.module.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export default class SearchBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       city: null,
//       arrivalDate: null,
//       departureDate: null,
//       guests: null,
//     };
//   }

//   handleArrivalDateChange = (date) => {
//     this.setState({
//       arrivalDate: date,
//     });
//   };
//   handledepartureDateChange = (date) => {
//     this.setState({
//       departureDate: date,
//     });
//   };

//   render() {
//     const ExampleCustomInput = ({ value, onClick }) => (
//       <button style={{ border: "none", background: "white" }} onClick={onClick}>
//         {value ? value : "Arrival"}
//       </button>
//     );
//     return (
//       <div>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//           }}
//         >
//           <div className="form-row">
//             <div className="form-group col-sm-10 offset-sm-1 col-md-3 offset-md-1">
//               <select
//                 // className="form-control border-0"
//                 className={style.myDropdownToggle}
//                 id="cityName"
//               >
//                 <option selected>Where to next?</option>
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//                 <option>6</option>
//                 <option>7</option>
//                 <option>8</option>
//                 <option>9</option>
//                 <option>10</option>
//               </select>
//             </div>
//             <div className="form-group col-sm-10 offset-sm-1 col-md-2 offset-md-0 pr-4">
//               <div className="row">
//                 <div className="col-10">
//                   <DatePicker
//                     selected={this.state.arrivalDate}
//                     onChange={(date) => this.handleArrivalDateChange(date)}
//                     // disabledKeyboardNavigation
//                     // placeholderText="Arrival"
//                     customInput={<ExampleCustomInput />}
//                   />
//                 </div>
//                 <div className="col-1">
//                   <img
//                     type="calendar"
//                     height="18px"
//                     width="18px"
//                     src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/69db739b45ad31493bdf934e1715f135.svg"
//                     alt="calendar"
//                     class="sc-1ny7b47-0 jhFEmf"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="form-group col-sm-10 offset-sm-1 col-md-2 offset-md-0 pr-4">
//               <div className="row">
//                 <div className="col-10">
//                   <DatePicker
//                     selected={this.state.departureDate}
//                     onChange={(date) => this.handledepartureDateChange(date)}
//                     // disabledKeyboardNavigation
//                     placeholderText="Departure"
//                     customInput={<ExampleCustomInput />}
//                   />
//                 </div>
//                 <div className="col-1">
//                   <img
//                     type="calendar"
//                     height="18px"
//                     width="18px"
//                     src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/69db739b45ad31493bdf934e1715f135.svg"
//                     alt="calendar"
//                     class="sc-1ny7b47-0 jhFEmf"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="form-group col-sm-10 offset-sm-1 col-md-2 offset-md-0">
//               <select
//                 className="form-control border-0"
//                 id="guests"
//                 placeholder=""
//               >
//                 <option selected>Guests</option>
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//                 <option>6</option>
//                 <option>7</option>
//                 <option>8</option>
//                 <option>9</option>
//                 <option>10</option>
//               </select>
//             </div>

//             <button
//               onClick={(e) => {
//                 console.log("worked");
//               }}
//               type="submit"
//               className="btn btn-danger col-sm-10 offset-1 col-md-1 offset-md-0"
//             >
//               Search
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
