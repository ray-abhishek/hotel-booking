import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import Catalog from "../../pages/Catalog";
import BookingPage from "../../pages/BookingPage";
import ConfirmationPage from "../../pages/ConfirmationPage";
import HotelDisplay from "../../pages/HotelDisplay";
import SearchBar from "../common/SearchBar";
import ImageCarousel from "../hotelDisplay/ImageCarousel";
import BookingBox from "../hotelDisplay/BookingBox";
import AboutHotel from "../hotelDisplay/AboutHotel";
import WishList from "../landingPage/WishList";
import ContectUs from "../common/ContectUs";
const Routes = (props) => {
  return (
    <>
      <Switch />
      <Route
        exact
        path="/"
        exact
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        exact
        path="/get-in-touch"
        exact
        render={(props) => <ContectUs />}
      />
      <Route exact path="/wishlist" exact render={(props) => <WishList />} />
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
        path="/request-booking/confirmed"
        render={(props) => <ConfirmationPage {...props} />}
      />
      <Switch />
    </>
  );
};

export default Routes;
