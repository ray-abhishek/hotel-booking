import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Route } from "react-router-dom";
import {} from "../../redux/action";
class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: this.props.personDetails,
      order_id: "",
    };
  }


  dispalyRazorPay = async (e) => {
    const { arrivalDate, departureDate } = this.props.location.state.details;
    const {
      email,
      countryCode,
      firstname,
      lastName,
      message,
      mobileNo,
      notification,
      differenceDate,
    } = this.props.personDetails;
    const { id, cost_per_night } = this.props.location.state.hotelData;
    let amount = Number(differenceDate) * Number(cost_per_night);
    console.log(differenceDate, cost_per_night, amount, "cost ,diff");
    let arrival =
      arrivalDate &&
      `${arrivalDate.getFullYear()}-${
        arrivalDate.getMonth() + 1
      }-${arrivalDate.getDate()}`;
    let departure =
      departureDate &&
      `${departureDate.getFullYear()}-${
        departureDate.getMonth() + 1
      }-${departureDate.getDate()}`;
    try {
      const apiURL = "https://3d82b4e9e58f.ngrok.io";
      e.preventDefault();
      // const url = new URLSearchParams();
      // url.append("order_amount", "10000");
      // url.append("currency", "INR");
      //   parser.add_argument('book_from', type=str,required=False)
      //   parser.add_argument('book_to', type=str,required=False)
      const response = await axios.post(apiURL + "/order", {
        name: `${firstname} ${lastName}`,
        email: `${email}`,
        message: `${message}`,
        phone_number: `${mobileNo}`,
        order_amount: `${amount}`,
        order_currency: `INR`,
        order_receipt: `recipi${Date.now()}`,
        book_from: `${arrival}`,
        book_to: `${departure}`,
        hotel_id: `${id}`,
      });

      const { data } = response;
      console.log(data," is data  from /order")
      console.log(data["data"]["order_id"]," is orderID from /order");
      this.setState({order_id : data["data"]["order_id"]})
      const options = {
        key: "rzp_test_MqHwbPLOYmrkkI",
        amount: data["data"]["amount"],
        currency: data["data"]["currency"],
        name: data["data"]["name"],
        description: data["data"]["description"],
        image:
          "https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/2e7c492ee08ad1d2fc5320b0f01e2e25.svg",
        order_id: data["data"]["order_id"],
        prefill: {
          name: data["data"]["name"],
          email: data["data"]["email"],
          contact: data["data"]["contact"],
        },
        theme: {
          color: "#0080FF",
        },
        handler: async (response) => {

          console.log(response, "respone");
          const res = await axios.post(`${apiURL}/payment`, {
            ...response,
            order_id: this.state.order_id,
          });
          const { data } = res;
          ////console.log(data, "backend");
          data.status === "success"
            ? alert("payment successful")
            : alert("payment fail");
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      ////console.log(err);
    }
  };

  render() {
    // console.log(this.state, "state in payment");
    console.log(this.props, "props in payment");

    return (
      <div>
        <div
          className="btn btn-danger"
          onClick={this.dispalyRazorPay}
          target="_blank"
        >
          Request a booking
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//     data: state.dataReducer.entityData,
//   });

// const mapDispatchToProps = (dispatch) => ({
//   fetchEntityRequest: (query) => dispatch(fetchEntityRequest(query)),
// });

export default connect(null, null)(Payment);
