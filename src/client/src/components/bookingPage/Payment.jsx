import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Route } from "react-router-dom";
import {} from "../../redux/action";
class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    let amount = Number(differenceDate) * Number(cost_per_night) * 100;
    // console.log(differenceDate, cost_per_night, amount, "cost ,diff");
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
      const apiURL = "https://9e93fb84fe29.ngrok.io";
      e.preventDefault();
      const url = new URLSearchParams();
      url.append("order_amount", "10000");
      url.append("currency", "INR");
      //   parser.add_argument('book_from', type=str,required=False)
      //   parser.add_argument('book_to', type=str,required=False)
      const response = await axios.post(apiURL + "/order", {
        order_amount: "10000",
        order_currency: "INR",
        order_receipt: `recipi${Date.now()}`,
        hotel_id: "1",
      });
      const { data } = response;
      console.log(data, " is data  from /order");
      ////console.log(data["data"]["order_id"], " is orderID from /order");
      this.setState({ order_id: data["data"]["order_id"] });
      const options = {
        key: "rzp_test_MqHwbPLOYmrkkI",
        amount: `${data["data"]["amount"]}`,
        currency: "INR",
        name: `${data["data"]["name"]}`,
        description: `${data["data"]["description"]}`,
        image:
          "https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/2e7c492ee08ad1d2fc5320b0f01e2e25.svg",
        order_id: data["data"]["order_id"],
        prefill: {
          name: `${data["data"]["name"]}`,
          email: `${data["data"]["email"]}`,
          contact: `${data["data"]["contact"]}`,
        },
        theme: {
          color: "#0080FF",
        },
        handler: async (response) => {
          console.log(response, "respone in payment by handler");
          const res = await axios
            .post(`${apiURL}/payment`, {
              ...response,
              order_id: this.state.order_id,
            })
            .then((res) => {
              if (res.status === 200) {
                res.data.status === "success"
                  ? this.props.history.push({
                      pathname: "/request-booking/confirmed",
                      state: {
                        data: res.data,
                        props: this.props,
                        info: {
                          email,
                          countryCode,
                          firstname,
                          lastName,
                          message,
                          mobileNo,
                          notification,
                          differenceDate,
                          amount,
                          arrival,
                          departure,
                        },
                      },
                    })
                  : alert("payment fail");
                return res;
              }
            });
          const { data } = res;
          ////console.log(data, "backend");
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      alert("Something went wrong please fill all the fields correctly");
      ////console.log(err);
    }
  };

  render() {
    // console.log(this.state, "state in payment");
    // console.log(this.props, "props in payment");
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
