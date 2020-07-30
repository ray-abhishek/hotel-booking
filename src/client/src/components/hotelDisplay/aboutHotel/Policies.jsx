import React from "react";
import { connect } from "react-redux";

export default class Policies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, title, location, people, bathrooms, bedrooms } = this.props;
    // console.log(data);
    return (
      <div>
        <div class=" border-0 mt-5">
          
          <div class="">
          <h5 className="card-heading  mb-3 h5">Policies</h5>
          <hr/>
            <ul
              style={{
                listStyle: "none",
                fontFamily: "tiemposText",
                fontSize: "13px",
                paddingLeft : "10px"
              }}
            >
             
              <li className="text-muted mb-2">
                <span className="font-weight-bold">- Cancellation.</span>{" "}
                Provided you book more than 7 days before the start of your
                stay, you can cancel your booking within 24 hours and we’ll
                provide a full refund. Our flexible rate offers more flexibility
                for those who need it. Read our cancellation policy here. Please
                note bookings for Hamptons and French Riviera have a separate
                cancellation policy.
              </li>
              <li className="text-muted  mb-2">
                <span className="font-weight-bold">
                  {" "}
                  - Check-in and check-out.
                </span>{" "}
                We’ll meet you at the home at your convenience any time after
                4PM on your arrival date, and our standard check-out time is
                11AM. Early check-in and late check-out can be arranged in
                advance, subject to availability and a charge.
              </li>
              <li className="text-muted  mb-2">
                <span className="font-weight-bold">- Lead guest.</span> The lead
                guest must be at least 25 years of age.
              </li>
              <li className="text-muted  mb-2">
                <span className="font-weight-bold">
                  {" "}
                  - I.D. check and card authorisation.{" "}
                </span>{" "}
                When you arrive we’ll check the lead guest’s I.D. and secure a
                $1,500 hold on a credit or debit card which will be released
                once we confirm no damage was caused during your stay.
              </li>
              <li className="text-muted mb-2">
                <span className="font-weight-bold">
                  - I.D. check and card authorisation.{" "}
                </span>{" "}
                When you arrive we’ll check the lead guest’s I.D. and secure a
                $1,500 hold on a credit or debit card which will be released
                once we confirm no damage was caused during your stay.
              </li>
              <li className="text-muted mb-2">
                <span className="font-weight-bold">- Smoking.</span>
                Guests are not permitted to smoke inside any onefinestay home.
              </li>
              <li className="text-muted mb-2">
                <span className="font-weight-bold">- Cleaning.</span>
                We carefully clean and prepare each home before you arrive and
                after you depart, and for stays longer than seven days we
                provide a complimentary weekly Housekeeping service. More
                frequent Housekeeping visits can be arranged on request, subject
                to availability and a charge.
              </li>

              <li className="text-muted mb-2">
                <span className="font-weight-bold">- Payment.</span>
                We accept Visa, Mastercard and American Express, and bank
                transfers for stays with at least 7 days’ notice.
              </li>

              <li className="text-muted mb-2">
                For more detail on our policies read the FAQ.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}