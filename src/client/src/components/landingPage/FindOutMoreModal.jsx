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
        id="findOutMore"
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
                  style={{ background: "rgb(31, 46, 98)" }}
                >
                  city
                </span>
              </h5>
              <h5
                class="modal-title text-center"
                id="exampleModalScrollableTitle"
              >
                Our City Collection
              </h5>
              <div>&mdash;</div>
              <div className="font-weight-bold">Exclusively onefinestay</div>
              <div className="my-4">
                Our City Collection features a wide range of carefully curated
                homes in world-class cities - exclusive to onefinestay. These
                private homes are personally vetted and professionally managed
                by our local teams.
              </div>
              <div>&mdash;</div>
              <div className="font-weight-bold">Here for you - anytime</div>
              <div className="my-4">
                We’re here for you anytime you need us, 24/7. Our local Service
                team can also assist with your day-to-day needs, from airport
                transfers, grocery deliveries and restaurant reservations to
                babysitting, entertainment tickets and bespoke city experiences.
              </div>
              <div>&mdash;</div>
              <div className="font-weight-bold">A onefinestay welcome</div>
              <div className="my-4">
                Our Meet &#38; Greeter will welcome you into the home and
                explain all the practical and unique features.
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
