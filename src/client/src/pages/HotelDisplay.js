import React from "react";
import ImageCarousel from "../components/hotelDisplay/ImageCarousel";
import { Route } from "react-router-dom";
import Description from "../components/hotelDisplay/aboutHotel/Description";
import Features from "../components/hotelDisplay/aboutHotel/Features";
import SimilarHomes from "../components/hotelDisplay/SimilarHomes";
import FindOutMore from "../components/hotelDisplay/aboutHotel/FindOutMore";
import HomeTruths from "../components/hotelDisplay/aboutHotel/HomeTruths";
import Policies from "../components/hotelDisplay/aboutHotel/Policies";
import Rooms from "../components/hotelDisplay/aboutHotel/Rooms";
import { fetchEntityRequest } from "../redux/action";
import { connect } from "react-redux";
import FeaturesDetails from "../components/hotelDisplay/aboutHotel/FeaturesDetails";
import Location from "../components/hotelDisplay/aboutHotel/Location";
import BookingBox from "../components/hotelDisplay/BookingBox";
import StickyBox from "react-sticky-box";
import style from "./HotelDisplay.module.css";
import { StickyContainer, Sticky } from 'react-sticky';
// import './styles1.css';

class HotelDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      isDescBold: false,
      isRoomBold: false,
      isFeatureBold: false,
      isHomeBold: false,
      isPolicyBold: false,
      isLocation: false
    };
  }

  componentDidMount() {
    console.log("this.componentDidMount worked");
    const { fetchEntityRequest, data, location } = this.props;
    let url = `${location.pathname}${location.search}`;
    fetchEntityRequest(url);
    console.log(url, "url hotel Display");

    window.addEventListener('scroll', ()=>{
      const isTop = window.scrollY < 500;
      if( isTop !== true){
        this.setState({ scrolled: true })
      }
      else{
        this.setState({ scrolled: false })
      }
    })

    window.addEventListener('scroll', ()=>{
      const isTop = (window.scrollY > 500 && window.scrollY <900) ;
      if((window.scrollY > 500 && window.scrollY <900)){
        this.setState({ isDescBold: true })
      }
      else if((window.scrollY > 900 && window.scrollY <1400)){
        this.setState({ isDescBold: false, isRoomBold: true })
      }
      else if((window.scrollY > 1400 && window.scrollY <1700)){
        this.setState({ isRoomBold: false, isLocation: true })
      }
      else if((window.scrollY > 1700 && window.scrollY <3000)){
        this.setState({  isLocation: false, isFeatureBold: true })
      }
      else if((window.scrollY > 3000 && window.scrollY <3100)){
        this.setState({ isFeatureBold: false, isHomeBold: true })
      }
      else if((window.scrollY > 3100 && window.scrollY <3300)){
        this.setState({ isHomeBold: false, isPolicyBold: true })
      }
      else{
        this.setState({ 
          isDescBold: false ,
          isRoomBold: false,
          isPolicyBold: false,
          isFeatureBold: false,
          isHomeBold: false,
          isLocation: false
        })
      }
    })
  }

  componentWillUnmount(){
    window.removeEventListener( 'scroll', ()=>{
      console.log("scroll")
    } )
  }


  render() {
    // console.log("match params", this.props.match.params);
    // console.log(this.props.data, "inside homeDisplay");
    const { isDescBold, isRoomBold, isPolicyBold, isLocation, isFeatureBold, isHomeBold } = this.state
    return (
      <>

             <div style={{ zIndex: 2}} className={this.state.scrolled ? 
              `${style.nav} ${style.scrolled}` : `${style.nav}`} >

          <div className={style.nav_text} style={{display: "flex"}} >
 
               
             <h1 className={this.state.isDescBold ? "font-weight-bold":""} style={{marginLeft: 100}}><a href="#section1" className= {this.state.scrolled ? " text-dark text-decoration-none" : "text-decoration-none text-white"}>DESCRIPTION</a></h1>

              <h1 className={this.state.isRoomBold ? "font-weight-bold":""} ><a href="#section2" className= {this.state.scrolled ? "text-dark text-decoration-none" : "text-decoration-none text-white"}>ROOMS</a></h1>

              <h1  className={this.state.isLocation ? "font-weight-bold":""} ><a href="#section3" className= {this.state.scrolled ? "text-dark text-decoration-none" : "text-decoration-none text-white"}>LOCATION</a></h1>

              <h1 className={this.state.isFeatureBold ? "font-weight-bold":""} ><a href="#section4" className= {this.state.scrolled ? "text-dark text-decoration-none" : "text-decoration-none text-white"}>FEATURES</a></h1>

              <h1 className={this.state.isHomeBold ? "font-weight-bold":""} ><a href="#section5" className= {this.state.scrolled ? "text-dark text-decoration-none" : "text-decoration-none text-white"}>HOME TRUTHS</a></h1>

              <h1 className={this.state.isPolicyBold ? "font-weight-bold":""} style={{marginRight: 105}}><a href="#section6" className= {this.state.scrolled ? "text-dark text-decoration-none" : "text-decoration-none text-white"}>POLICIES</a></h1>
              
          </div>
          </div>
  
        <div className="">
          <ImageCarousel />
        </div>

      <div className="container mt-5 " style={{maxWidth:'auto'}}>
        <div className={`${style.hdContainer}`}>      
      
          <div className={`${style.bioBox}`}>
             <Features {...this.props} />
           <div id="section1"><Description {...this.props} /></div> 
           <div id="section2"><Rooms {...this.props} /></div> 
           <div id="section2"><Location {...this.props} /></div> 

           <div id="section4"><FeaturesDetails {...this.props} /></div> 
            <FindOutMore />
            <div id="section5">  <HomeTruths {...this.props} /></div> 
            <div id="section6">  <Policies {...this.props} /></div>   
          </div>
          <div className="">
            <StickyBox offsetTop={20} offsetBottom={20}>
              <BookingBox {...this.props} />
            </StickyBox> 
          </div>
        </div>
         <SimilarHomes paramsId={this.props.match.params.id} /> 
      </div>
      
{/* 
        <div className="">
          <ImageCarousel />
        </div></div>

        <div className="container mt-5" style={{ maxWidth: "auto" }}>
          <div className={`${style.hdContainer}`}>
            <div className={`${style.bioBox}`}>
              <Features {...this.props} />
              <Description {...this.props} />
              <Rooms {...this.props} />

              <Location {...this.props} />

              <FeaturesDetails {...this.props} />
              <FindOutMore />
              <HomeTruths {...this.props} />
              <Policies {...this.props} />
            </div>
            <div className="ml-4">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <BookingBox {...this.props} />
              </StickyBox>
            </div>
          </div>
          <SimilarHomes paramsId={this.props.match.params.id} />
        </div> */}
      </>
    );
  }
}


const nav={
  width: "100%",
  justifyContent: "center",
  transition: "0.25s"
}










const mapStateToProps = (state) => ({
  data: state.dataReducer.entityData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEntityRequest: (query) => dispatch(fetchEntityRequest(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelDisplay);

/*
<div className="container">
        <div className="row">
          <div className="col-12">


        <SimilarHomes paramsId={this.props.match.params.id} />
  
          </div>
        </div>
      </div>
*/