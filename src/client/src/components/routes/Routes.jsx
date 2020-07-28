import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import Catalog from "../../pages/Catalog";
import BookingPage from "../../pages/BookingPage";
import ConfirmationPage from "../../pages/ConfirmationPage";
import HotelDisplay from "../../pages/HotelDisplay";
// import SearchBar from "../common/SearchBar";
// import ImageCarousel from "../hotelDisplay/ImageCarousel";
// import BookingBox from "../hotelDisplay/BookingBox";

const Routes = (props) => {
  return (
    <>
      <Switch />
      <Route
        // exact
        path="/"
        exact
        render={(props) => <LandingPage {...props} />}
      />
      <Route exact path="/search" render={(props) => <Catalog {...props} />} />
      <Route
        exact
        path="/search/:page"
        render={(props) => <Catalog {...props} />}
      />

      <Route
        exact
        path="/search/:location/:id"
        render={(props) => <Catalog {...props} />}
      />
      {/* <Route
        exact
        path="/search/:location/:id/:page"
        render={(props) => <Catalog {...props} />}
      /> */}

      <Route
        exact
        path="/home-listing/:id/"
        render={(props) => <HotelDisplay {...props} />}
      />
      <Route
        exact
        path="/home-listing/:id/request-booking"
        render={(props) => <BookingPage {...props} />}
      />
      <Route
        exact
        path="/home-listing/:hotel-id/request-booking/confirmed"
        render={(props) => <ConfirmationPage />}
      />
      <Switch />
    </>
  );
};

export default Routes;
