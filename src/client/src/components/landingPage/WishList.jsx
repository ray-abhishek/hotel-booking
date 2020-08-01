import React from "react";

function WishList() {
  return (
    <div
      className="my-5 text-center"
      style={{
        fontFamily: "tiemposText",
        fontSize: "14px",
      }}
    >
      <h2 className="mb-5"> Wishlist</h2>

      <div className="my-5">
        <div className="text-wrap">
          You don't have any homes on your wishlist yet.
        </div>
        <div className="text-wrap">
          Tap the heart symbol on your favourite homes to add them to your list.
        </div>
      </div>
      <h3 className="text-wrap mb-5">
        Log in now in order to save your <br /> wishlist across all devices
      </h3>
      <div>New to onefinestay? Sign up</div>
    </div>
  );
}

export default WishList;
