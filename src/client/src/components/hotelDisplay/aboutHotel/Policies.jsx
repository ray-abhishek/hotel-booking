import React from "react";

export default class Policies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, title, location, people, bathrooms, bedrooms } = this.props;
    console.log(data);
    return (
      <div>
        <div class="card">
          <div className="card-heading">Policies</div>
          <div class="card-body">
            <ul>
              -
              <li>
                <span className="font-weight-bold"> Cancellation.</span>{" "}
                Provided you book more than 7 days before the start of your
                stay, you can cancel your booking within 24 hours and we’ll
                provide a full refund. Our flexible rate offers more flexibility
                for those who need it. Read our cancellation policy here. Please
                note bookings for Hamptons and French Riviera have a separate
                cancellation policy.
              </li>
              -
              <li>
                <span className="font-weight-bold">
                  {" "}
                  Check-in and check-out.
                </span>{" "}
                We’ll meet you at the home at your convenience any time after
                4PM on your arrival date, and our standard check-out time is
                11AM. Early check-in and late check-out can be arranged in
                advance, subject to availability and a charge.
              </li>
              -
              <li>
                <span className="font-weight-bold"> Lead guest.</span> The lead
                guest must be at least 25 years of age.
              </li>
              -
              <li>
                <span className="font-weight-bold">
                  {" "}
                  I.D. check and card authorisation.{" "}
                </span>{" "}
                When you arrive we’ll check the lead guest’s I.D. and secure a
                $1,500 hold on a credit or debit card which will be released
                once we confirm no damage was caused during your stay.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
