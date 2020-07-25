import React from "react";

export default class Features extends React.Component {
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
          <div class="card-body">
            <h3>
              <span class="badge badge-secondary">City</span>{" "}
              <small className="text-muted">Find out more</small>{" "}
            </h3>
            <h1 class="card-title">title</h1>
            <h6 class="mt-2 text-muted">location</h6>
            <div className="row">
              <div className="col-md-2 offset-3">people</div>
              <div className="col-md-2">bedrooms</div>
              <div className="col-md-2">bathrooms</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   data: state.dataReducer.data,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchRequest: (query) => dispatch(fetchRequest(query)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Features);
