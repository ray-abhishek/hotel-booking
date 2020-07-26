import React from "react";

export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <>
        <div className="accordion mx-5 my-3" id="accordionExample">
          <h2
            font-family="tiemposText"
            font-weight="400"
            font-size="L"
            color="secondary"
            className="sc-15ch3b2-1 fRbMas"
          >
            Description
          </h2>
          <h4>Title</h4>

          {/* </p> */}
          <div
            id="collapseOne"
            className="collapse show "
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
            style={{ overflowY: "hidden" }}
          >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </div>
          <hr />
          <p
            onClick={(e) => {
              this.setState({
                show: !this.state.show,
              });
            }}
            className="btn btn-link"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {this.state.show ? "show more" : "Hide"}
          </p>
        </div>
      </>
    );
  }
}
