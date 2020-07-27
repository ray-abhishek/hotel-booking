import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Route } from "react-router-dom";
import {} from "../../redux/action";
class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      similarHomesData: [],
    };
  }

  //   componentDidMount() {
  //     console.log("params similar page", this.props);
  //     axios
  //       .get("https://1280c16124f0.ngrok.io/get-similar/" + this.props.paramsId)
  //       .then((res) => {
  //         console.log("res data", res.data);
  //         this.setState({
  //           similarHomesData: res.data.data,
  //         });
  //       });
  //   }

  dispalyRazorPay = async (e) => {
    try {
      const apiURL = "https://1280c16124f0.ngrok.io";
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
      console.log(data);
      const options = {
        key: "rzp_test_MqHwbPLOYmrkkI",
        amount: "10000",
        currency: "INR",
        name: "test",
        description: "Test Transaction",
        image:
          "https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/2e7c492ee08ad1d2fc5320b0f01e2e25.svg",
        order_id: data.id,
        prefill: {
          name: "test Kumar",
          email: "test.kumar@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#0080FF",
        },
        handler: async (response) => {
          console.log(response, "respone");
          const res = await axios.post(`${apiURL}/payment`, response);
          const { data } = res;
          console.log(data, "backend");
          res.status === "success"
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
