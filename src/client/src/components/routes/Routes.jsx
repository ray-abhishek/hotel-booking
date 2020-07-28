import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import Catalog from "../../pages/Catalog";
import BookingPage from "../../pages/BookingPage";
import ConfirmationPage from "../../pages/ConfirmationPage";
import HotelDisplay from "../../pages/HotelDisplay";
<<<<<<< HEAD
// import SearchBar from "../common/SearchBar";
// import ImageCarousel from "../hotelDisplay/ImageCarousel";
// import BookingBox from "../hotelDisplay/BookingBox";
=======
import SearchBar from "../common/SearchBar";
import ImageCarousel from "../hotelDisplay/ImageCarousel";
import BookingBox from "../hotelDisplay/BookingBox";
import AboutHotel from '../hotelDisplay/AboutHotel';

>>>>>>> c169085bee52e57986cb83a0c16c3a794b9c2f23

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
<<<<<<< HEAD
=======
      {/* commented route I have uncommented for testing purpose */}
      {/* <Route
        exact
        path="/test"
        render={(props) => <ImageCarousel {...props} />}
      />
      <Route
        exact
        path="/booking"
        render={(props) => <BookingBox {...props} />}
      />
      <Route
        exact
        path="/bookingdate"
        render={(props) => <AboutHotel {...props} />}
      /> */}
      {/* Booking Box demo route above */}
>>>>>>> c169085bee52e57986cb83a0c16c3a794b9c2f23

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

      {/* <Route
        exact
        path="/booked-dates/:id/"
        render={(props) => <HotelDisplay {...props} />}
      /> */}
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
