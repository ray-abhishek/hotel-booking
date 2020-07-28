import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Route } from "react-router-dom";


class Payment extends React.Component{
  constructor(props) {
    super(props)
    }
  displayRazorPay = async (e) => {
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
      console.log(data," is data sent from /order POST");
      const options = {
        key: "rzp_test_MqHwbPLOYmrkkI",
        amount: "10000",
        currency: "INR",
        name: "test",
        description: "Test Transaction",
        image:
          "https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/2e7c492ee08ad1d2fc5320b0f01e2e25.svg",
        order_id: data.id,
        callback_url : "https://9e93fb84fe29.ngrok.io/payment",
        prefill: {
          name: "test Kumar",
          email: "test.kumar@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#0080FF",
        },
        
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        <div
          className="btn btn-danger"
          onClick={this.displayRazorPay}
          target="_blank"
        >
          Pay
        </div>
      </div>
    );
  }
}

export default connect(null, null)(Payment);





/*

handler: async (response) => {

          console.log(response, "respone");
          const res = await axios.post(`${apiURL}/payment`, response);
          const { data } = res;
          console.log(data, "backend");
          res.status === "success"
            ? alert("payment successful")
            : alert("payment fail");
        },

*/