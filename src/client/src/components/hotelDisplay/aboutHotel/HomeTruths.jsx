import React from "react";

export default class HomeTruths extends React.Component {
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
          <div className="card-heading">Home truths</div>
          <div class="card-body">
            -
            <li>
              The bunk bed in the second bedroom will comfortably sleep two
              adults on the bottom double, and has room for a further one adult
              on the top bunk.
            </li>
          </div>
        </div>
      </div>
    );
  }
}
