import React from "react";

function ContectUs() {
  return (
    <div
      style={{
        fontFamily: "tiemposText",
        fontSize: "14px",
        margin: "0 15%",
      }}
    >
      <h3 className="text-center m-5">Contact us</h3>
      <h4 className="font-weight-bold">How can we help?</h4>
      <hr />
      <h5 className="font-weight-bold">Reservations</h5>
      <div className="row">
        <div className="col-4">
          <div className="my-4">UK</div>
          <div className="my-4">FR</div>
          <div className="my-4">United States</div>
          <div className="my-4">Asia-Pacific</div>
        </div>
        <div className="col-4">
          <div className="my-4">+44 800 808 5830</div>
          <div className="my-4">+33 1 77 51 32 37</div>
          <div className="my-4">+1-855-553-4954</div>
          <div className="my-4">+61 2 5505 4022</div>
        </div>
        <div className="col-4">
          <div className="my-4">advisors@onefinestay.com</div>
        </div>
      </div>
      <hr />
      <h5 className="font-weight-bold">
        Are you a guest? Speak to the local team.
      </h5>
      <div className="row">
        <div className="col-4">
          <div className="my-4">UK</div>
          <div className="my-4">FR</div>
          <div className="my-4">IT</div>
          <div className="my-4">Australia</div>
        </div>
        <div className="col-4">
          <div className="my-4">+44 203 588 0600</div>
          <div className="my-4">+33 1 84 17 71 89</div>
          <div className="my-4">+39 069 480 8230</div>
          <div className="my-4">+61 1300 489 254</div>
        </div>
        <div className="col-4">
          <div className="my-4">concierge@onefinestay.com</div>
        </div>
      </div>
      <hr />
      <h5 className="font-weight-bold">Become a homeowner</h5>
      <div className="row">
        <div className="col-4">
          <div className="my-4">UK</div>
          <div className="my-4">FR</div>
          <div className="my-4">US Rest of the world</div>
          <div className="my-4">Australia</div>
        </div>
        <div className="col-4">
          <div className="my-4">+44 800 808 5830</div>
          <div className="my-4">+33 1 84 17 71 87</div>
          <div className="my-4">+1 844-402-3306</div>
          <div className="my-4">+61 1300 489 254</div>
        </div>
        <div className="col-4">
          <div className="my-4">homes@onefinestay.com</div>
        </div>
      </div>
    </div>
  );
}

export default ContectUs;
