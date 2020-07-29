import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Route } from "react-router-dom";
import {} from "../../redux/action";
class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order_id : "",
    };
  }

  //   componentDidMount() {
  //     console.log("params similar page", this.props);
  //     axios
  //       .get("https://c339083f82fb.ngrok.io/get-similar/" + this.props.paramsId)
  //       .then((res) => {
  //         console.log("res data", res.data);
  //         this.setState({
  //           similarHomesData: res.data.data,
  //         });
  //       });
  //   }

  dispalyRazorPay = async (e) => {
    try {
      const apiURL = "https://c339083f82fb.ngrok.io";
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
          response["order_id"] = this.state.order_id
          const res = await axios.post(`${apiURL}/payment`, response);
          const { data } = res;
          console.log(data, "backend");
          data.status === "success"
            ? alert("payment successful")
            : alert("payment fail");
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
