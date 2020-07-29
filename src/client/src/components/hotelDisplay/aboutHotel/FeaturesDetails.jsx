// const data = {
//   data: {
//     amenities: [
//       "Childrens toys",
//       "Satellite or cable",
//       "Hob electric",
//       "Hob gas",
//       "Hob induction",
//       "Oven",
//       "Microwave",
//       "Dishwasher",
//       "Swimming Pool",
//       "Air-conditioning",
//       "Balcony terrace",
//       "Elevator",
//       "Garden",
//       "Off Road Parking",
//       "Roof Terrace Garden",
//       "Secure Parking",
//     ],
//     bathroom: ["2 bathrooms", "1 bath", "2 showers", "2 toilets"],
//     bathrooms: 2,
//     bedrooms: 3,
//     cost_per_bedroom: 266,
//     cost_per_night: 799,
//     description: [
//       "A Luxury Vacation Stay",
//       "Rather like gallery-studded Chelsea, Clement Place II is all about the art. You enter from the elevator, into a hallway that leads first to the master bedroom. This soft-grey room has a queen-size bed (with an intriguing canvas above it), a windowside sofa and a marble ensuite bathroom with both a bath and a shower. The next doorway leads to the second bedroom \u2013 yellow-painted, and lined with books as well as paintings \u2013 and the neighbouring bathroom, which has a shower.",
//       "And then at the end of the hallway there\u2019s the open-plan living area. To the right here you\u2019ll find the kitchen \u2013 a smart, contemporary space. Just opposite is the dining area, its table surrounded by paintings and sculptures, and then beyond that there\u2019s a glass-walled sitting area with a designer sofa and a matching armchair. From there, a door opens onto the lofty terrace.",
//     ],
//     families: ["Pets Welcome", "Babies welcome", "Children welcome"],
//     highlights: ["Ensuite", "Gym"],
//     hotel_images: {
//       entrance: [
//         {
//           image:
//             "https://onefinestay.imgix.net/media-library/2017-03-27-22-00-15-461248-EMM354-TAKE-01-19.jpg?auto=format&w=900&dpr=1",
//           type: "Master Bedroom",
//         },
//         {
//           image:
//             "https://onefinestay.imgix.net/media-library/JAB750-TAKE-02-49-HDR.jpg?auto=format&w=900&dpr=1",
//           type: "Second Bedroom",
//         },
//       ],
//       outside: [
//         {
//           image:
//             "https://onefinestay.imgix.net/media-library/GON300-TAKE-01-34.jpg?auto=format&w=900&dpr=1",
//           type: "Terrace",
//         },
//       ],
//     },
//     id: 1,
//     location: "Tokyo , Prefecture",
//     name: "Hashimoto Street",
//     people: 4,
//     sleeps: ["4 people", "3 bedrooms", "2 Queen Size Beds"],
//   },
//   status: "success",
// };

import React from "react";
import { connect } from "react-redux";

class FeaturesDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, hotelDetails } = this.props;
    // ////console.log(hotelDetails, "features");
    const right =
      "https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/cc59a9d49bc343ec25e90bf214deb2c7.svg";
    const wrong =
      "https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/222e9776dc839243129487baf509bca5.svg";
    const checkSlate = {
      marginRight: "9px",
    };
    const font = {
      fontFamily: "tiemposText",
      fontSize: ".9em",
    };
    return (
      <div className="card border-0" style={font}>
        <h3>Features</h3>
        <hr />
        <h6 className="mb-4 font-weight-bold">Families</h6>
        <div className="row" style={{fontSize:'15px'}}>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.families &&
            hotelDetails.families.includes("Babies welcome") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Babies welcome
          </div>
          <div className="clo-6 col-md-4 my-2" style={{fontSize:'15px'}}>
            {hotelDetails &&
            hotelDetails.families &&
            hotelDetails.families.includes("Children welcome") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Children welcome
          </div>
          <div className="clo-6 col-md-4 my-2" style={{fontSize:'15px'}}>
            {hotelDetails &&
            hotelDetails.families &&
            hotelDetails.families.includes("Toddlers welcome") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Toddlers welcome
          </div>
          <div className="clo-6 col-md-4 my-2" style={{fontSize:'15px'}}>
            {hotelDetails &&
            hotelDetails.families &&
            hotelDetails.families.includes("Pets Welcome") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Pets welcome
          </div>
        </div>
        <hr />
        <h6 className="mb-4 font-weight-bold">Sleeps</h6>
        {hotelDetails && hotelDetails["sleeps"] && (
          <div className="row">
            <div className="col-4 ">
              <img
                className="pr-3"
                type="guests"
                src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/036f324cf34b32f5778266f61328bacf.svg"
                alt="guests"
              />
              <span style={{ fontSize: "15px" }}>
                {hotelDetails["sleeps"][0]}
              </span>
            </div>
            <div className="col-4">
              <img
                className="pr-3"
                type="bed"
                src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/902f8e1ce2c97d1c7566c8ab22432d01.svg"
                alt="bed"
              />
              <span style={{ fontSize: "15px" }}>
                {hotelDetails["sleeps"][1]}
              </span>
            </div>
            <div className="mt-4 mx-3">
              {hotelDetails["sleeps"][2]},
              {hotelDetails["sleeps"][3] && `${hotelDetails["sleeps"][3]}`}{" "}
              <u>Bed size chart </u>
            </div>
          </div>
        )}
        <hr />
        {/* <br/> */}
        <h6 className="my-4 font-weight-bold">Bathroom facilities</h6>
        {hotelDetails && hotelDetails["bathroom"] && (
          <div>
            <div className="col-4 ">
              <div className="row">
                <div>
                  <img
                    className="pr-3"
                    type="bathtub"
                    src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/ca2e12a1baad71ca75c5b64ab8e6ea41.svg"
                    alt="bathtub"
                  />
                </div>
                <div style={{ fontSize: "15px" }}>
                  {hotelDetails["bathroom"][0]}
                </div>
              </div>
            </div>
            <div className="my-3">
              {hotelDetails["bathroom"][1] && ` ${hotelDetails["bathroom"][1]}`}
              ,
              {hotelDetails["bathroom"][2] && ` ${hotelDetails["bathroom"][2]}`}
              ,
              {hotelDetails["bathroom"][3] && ` ${hotelDetails["bathroom"][3]}`}
              ,
            </div>
          </div>
        )}
        <hr />
        <h6 className="mb-4 font-weight-bold">Highlights</h6>
        <div className="row">
          <div className="col-6 col-md-4 my-2">
            {hotelDetails &&
              hotelDetails["highlights"] &&
              hotelDetails["highlights"].map((ele) => (
                <span style={{ marginRight: "10px" }}>
                  <img
                    type="check_slate"
                    style={checkSlate}
                    src={right}
                    alt="check_slate"
                    width="9px"
                  />
                  <span style={{fontSize:'15px'}}>{ele}</span>
                </span>
              ))}
          </div>
        </div>

        <br />
        <h6 className="my-4 font-weight-bold">Amenities</h6>
        <div className="row" style={{fontSize:'15px'}}>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.families &&
            hotelDetails.families.includes("Babies welcome") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Air-conditioning
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.families &&
            hotelDetails.families.includes("Coffee machine") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Coffee machine
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Dishwasher") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Dishwasher
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Freezer") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Freezer
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Fridge") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Fridge
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Hairdryer") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Hairdryer
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Hob") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Hob
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Iron and ironing board") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Iron and ironing board
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Kettle") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Kettle
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Microwave") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Microwave
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Music player") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Music player
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Oven") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Oven
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Satellite or cable") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Satellite or cable
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Toaster") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Toaster
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Towels") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Towels
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("TV") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            TV
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Wifi") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Wifi
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Built-in fans") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Built-in fans
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Safe") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Safe
          </div>
          <div className="clo-6 col-md-4 my-2">
            {hotelDetails &&
            hotelDetails.amenities &&
            hotelDetails.amenities.includes("Washing machine") ? (
              <img
                type="check_slate"
                style={checkSlate}
                src={right}
                alt="check_slate"
                width="9px"
              />
            ) : (
              <img
                type="cross"
                style={checkSlate}
                src={wrong}
                alt="cross"
                width="9px"
              />
            )}
            Washing machine
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotelDetails: state.dataReducer.entityData,
});

export default connect(mapStateToProps, null)(FeaturesDetails);
