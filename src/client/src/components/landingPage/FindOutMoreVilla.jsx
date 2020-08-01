import React from "react";

function FindOutMoreModal() {
  return (
    <div
      className="my-5"
      style={{
        fontFamily: "tiemposText",
        fontSize: "14px",
      }}
    >
      <div
        class="modal fade"
        id="villa"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalScrollableTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable" role="document">
          <div class="modal-content">
            <div class="">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h5 className="my-3 text-center">
                <span
                  class="badge text-light h6 p-2"
                  style={{ background: "rgb(142, 208, 203)" }}
                >
                  Villa
                </span>
              </h5>
              <h5
                class="modal-title text-center"
                id="exampleModalScrollableTitle"
              >
                Our Villa Collection
              </h5>
              <div>&mdash;</div>
              <div className="font-weight-bold">
                Managed to the highest degree
              </div>
              <div className="my-4">
                Our Villa Collection presents the highest quality villas in
                dreamy destinations. This collection is personally vetted and
                expertly managed by established local professionals.
              </div>
              <div>&mdash;</div>
              <div className="font-weight-bold">Destination experts</div>
              <div className="my-4">
                Leave all the details to us and spend more time doing the things
                you enjoy. Our own destination experts can customize your entire
                vacation, from car rentals, flights and fully-staffed villas to
                boating trips, hot air balloon rides, helicopter tours and more.
              </div>
              <div>&mdash;</div>
              <div className="font-weight-bold">
                A personal welcome and support
              </div>
              <div className="my-4">
                You will be welcomed into the villa by a local representative
                and you will have a local contact for any support needed
                throughout your stay.
              </div>
            </div>
            <div class="text-center my-2 ">
              <button
                type="button"
                class="btn  px-5 text-light h6 p-2"
                data-dismiss="modal"
                style={{ background: "rgb(246, 99, 68)" }}
              >
                ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindOutMoreModal;
