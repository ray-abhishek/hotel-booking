import React from "react";

export default class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, title, location, people, bathrooms, bedrooms } = this.props;
    console.log(data);
    return (
      <div class="card mx-5 my-3">
        <div>
          <h2
            font-family="tiemposText"
            font-weight="400"
            font-size="L"
            color="secondary"
            class="sc-15ch3b2-1 fRbMas"
          >
            Rooms
          </h2>
        </div>
        <div class="sc-98aa4w-0 iMYsnz">
          <h3
            font-size="S"
            font-weight="bold"
            color="secondary"
            class="sc-15ch3b2-2 kjughN"
          >
            Entrance level
          </h3>
          <h4
            font-size="S"
            color="secondaryText"
            font-family="akkuratRegular"
            font-style="italic"
            class="sc-15ch3b2-3 hjqnh"
          >
            2&nbsp;floors up from street level
          </h4>
        </div>
        <div class="row">
          <div className="col-4">
            <img
              height="50%"
              width="100%"
              src="https://onefinestay.imgix.net/media-library/GON300-TAKE-01-25.jpg?auto=format&amp;w=30&amp;dpr=1"
              alt=""
            />
            <p>image discription</p>
          </div>
          <div className="col-4">
            <img
              height="50%"
              width="100%"
              src="https://onefinestay.imgix.net/media-library/GON300-TAKE-01-25.jpg?auto=format&amp;w=30&amp;dpr=1"
              alt=""
            />
            <p>image discription</p>
          </div>
          <div className="col-4">
            <img
              height="50%"
              width="100%"
              src="https://onefinestay.imgix.net/media-library/GON300-TAKE-01-25.jpg?auto=format&amp;w=30&amp;dpr=1"
              alt=""
            />
            <p>image discription</p>
          </div>
          <div className="col-4">
            <img
              height="50%"
              width="100%"
              src="https://onefinestay.imgix.net/media-library/GON300-TAKE-01-25.jpg?auto=format&amp;w=30&amp;dpr=1"
              alt=""
            />
            <p>image discription</p>
          </div>
          <div className="col-4">
            <img
              height="50%"
              width="100%"
              src="https://onefinestay.imgix.net/media-library/GON300-TAKE-01-25.jpg?auto=format&amp;w=30&amp;dpr=1"
              alt=""
            />
            <p>image discription</p>
          </div>
          <div className="col-4">
            <img
              height="50%"
              width="100%"
              src="https://onefinestay.imgix.net/media-library/GON300-TAKE-01-25.jpg?auto=format&amp;w=30&amp;dpr=1"
              alt=""
            />
            <p>image discription</p>
          </div>
          <div
            opacity="1"
            src="https://onefinestay.imgix.net/media-library/GON300-TAKE-01-25.jpg?auto=format&amp;w=30&amp;dpr=1"
            class="sc-4u8lmu-0 jKhIuR"
          ></div>
        </div>
      </div>
    );
  }
}
