import React from 'react'
import { connect } from 'react-redux'
import HotelDisplay from '../../pages/HotelDisplay';
import style from './HotelDetails.module.css';
import data from '../../data.json';
// import Slider from 'react-animated-slider';
import Slider from 'react-slick';


class ImageCarousel extends React.Component{
        constructor(props){
            super(props)
            this.state={
              
            }
            this.next = this.next.bind(this);
            this.previous = this.previous.bind(this);
          }
            next() {
              this.slider.slickNext();
            }
            previous() {
              this.slider.slickPrev();
            }
        render(){
            const { hotelDetails } = this.props;
            const {openModal, currentSlide, showSlides} = this
            console.log("data", data)
            console.log( "image carousel" ,hotelDetails)
            const settings = {
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1
            };

            const mystyle = {
              color: "white",
              backgroundColor: "DodgerBlue",
              padding: "10px",
              fontFamily: "Arial"
            };

            return(
                <div className={style.container}>
                  
        {/* { hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][1]["image"]}  */}
<div class={style.row}>
  <div class={style.column}>
    <img src="./images/1.jpg" onclick={`${openModal} ${currentSlide}`} class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}/>
  </div>
  <div class={style.column}>
    <img src="./images/2.jpg" onclick="openModal();currentSlide(2)" class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}/>
  </div>
  <div class={style.column}>
    <img src="./images/3.jpg" onclick="openModal();currentSlide(3)" class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}/>
  </div>
  <div class={style.column}>
    <img src="./images/1.jpg" onclick="openModal();currentSlide(4)" class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}/>
  </div>
  <div class={style.column}>
    <img src="./images/2.jpg" onclick="openModal();currentSlide(2)" class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}/>
  </div>
  <div class={style.column}>
    <img src="./images/3.jpg" onclick="openModal();currentSlide(3)" class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}/>
  </div>
  <div class={style.column}>
    <img src="./images/1.jpg" onclick={`${openModal} ${currentSlide}`} class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}/>
  </div>
  <div class={style.column}>
    <img src="./images/2.jpg" onclick="openModal();currentSlide(2)" class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}/>
  </div>
  <div class={style.column}>
    <img src="./images/3.jpg" onclick="openModal();currentSlide(3)" class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}/>
  </div>
  <div class={style.column}>
    <img src="./images/1.jpg" onclick="openModal();currentSlide(4)" class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}/>
  </div>
  <div class={style.column}>
    <img src="./images/2.jpg" onclick="openModal();currentSlide(2)" class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}/>
  </div>
  <div class={style.column}>
    <img src="./images/3.jpg" onclick="openModal();currentSlide(3)" class={`${style.hoverShadow} ${style.cursor} ${style.cardImg}`}/>
  </div>


  <a class={style.prev} onclick="plusSlides(-1)">&#10094;</a>
  <a class={style.next} onclick="plusSlides(1)">&#10095;</a>


</div>

















          {/* <h2>Previous and Next methods</h2> */}
        {/* <Slider ref={c => (this.slider = c)} {...settings} >
        {data[1]["hotel_images"].map((item, index) => (
          <div key={1}
         style={mystyle}
          >
          <img src={item} style={{width: 200, height: 200}} />
            </div>))}
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className={style.previousButton} onClick={this.previous}>
            Previous
          </button>
          <button className={style.nextButton} onClick={this.next}>
            Next
          </button>
        </div> */}


        {/* <h2 style={{textAlign:"center"}}>Lightbox</h2> */}







{/* <div id="myModal" class={style.modal}>
  <span class={`${style.close} ${style.cursor}`} onclick="closeModal()">&times;</span>
  <div class={style.modalContent}>

    <div class={style.mySlides}>
      <div class={style.numbertext}>1 / 4</div>
      <img src="./images/1.jpg" style={{width:"100%"}}/>
    </div>
    <div class={style.mySlides}>
      <div class={style.numbertext}>2 / 4</div>
      <img src="./images/1.jpg" style={{width:"100%"}}/>
    </div>

    <div class={style.mySlides}>
      <div class={style.numbertext}>3 / 4</div>
      <img src="./images/1.jpg" style={{width:"100%"}}/>
    </div>
    
    <div class={style.mySlides}>
      <div class={style.numbertext}>4 / 4</div>
      <img src="./images/1.jpg" style={{width:"100%"}}/>
    </div>
    
    <a class={style.prev} onclick="plusSlides(-1)">&#10094;</a>
    <a class={style.next} onclick="plusSlides(1)">&#10095;</a>

    <div class={style.captionContainer}>
      <p id="caption"></p>
    </div> */}


    {/* <div class={style.column}>
      <img class={`${style.demo} ${style.cursor}`} src="./images/1.jpg" style={{width:"100%"}} onclick="currentSlide(1)" alt="Nature and sunrise"/>
    </div>
    <div class={style.column}>
      <img class={`${style.close} ${style.cursor}`} src="./images/1.jpg" style={{width:"100%"}} onclick="currentSlide(2)" alt="Snow"/>
    </div>
    <div class={style.column}>
      <img class={`${style.close} ${style.cursor}`} src="./images/1.jpg" style={{width:"100%"}} onclick="currentSlide(3)" alt="Mountains and fjords"/>
    </div>
    <div class={style.column}>
      <img class={`${style.close} ${style.cursor}`} src="./images/1.jpg" style={{width:"100%"}} onclick="currentSlide(4)" alt="Northern Lights"/>
    </div> */}
  {/* </div>
</div> */}






















              {/* <button height="4" color="default" type="left">
                <img type="chevron_left_white" width="18" src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/c67fca44aa7c054a8d46399496666223.svg" alt="chevron_left_white"/>
              </button>
              <button height="4" color="default" type="left">
                <img type="chevron_left_white" width="18" src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/a93e88d4fd2af4cd90b3d07408e4386e.svg" alt="chevron_left_white"/>
              </button> */}

{/* <Slider className={style.container}   

renderControls={(next, previous)=>[
  <button onClick={previous}>Previous</button>,
  <button onClick={next}>Next</button>,
  
]} */}
{/* 
>
{data[1]["hotel_images"].map((item, index) => (
<div 
  key={index}
  style={{ background: `url('${item}') no-repeat center center` }}
>
<button className={style.previousButton} height="4" color="default" type="left">
                <img type="chevron_left_white" width="18" src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/c67fca44aa7c054a8d46399496666223.svg" alt="chevron_left_white"/>
              </button>
<button className={style.nextButton} height="4" color="default" type="left">
                <img type="chevron_left_white" width="18" src="https://d344sq77q05r9.cloudfront.net/prod-20-07-22-13:01/assets/a93e88d4fd2af4cd90b3d07408e4386e.svg" alt="chevron_left_white"/>
              </button>
  <div className={style.row} >  */}
  {/* <div  style={{ width: "auto", height:300, background: `url('${item}') no-repeat center center` }}> */}

  {/* </div> */}
{/* </div>
</div>
))}
</Slider> */}


{/*                   
<h2 style={{textAlign:"center"}}>Lightbox</h2>

<div class={style.row}>
  <div class={style.column}>
    <img src="./images/1.jpg" style={{width:"70%"}} onclick={`${openModal} ${currentSlide}`} class={`${style.hoverShadow} ${style.cursor}`}/>
  </div>
  <div class={style.column}>
    <img src="./images/1.jpg" style={{width:"70%"}} onclick="openModal();currentSlide(2)" class={`${style.hoverShadow} ${style.cursor}`}/>
  </div>
  <div class={style.column}>
    <img src="./images/1.jpg" style={{width:"70%"}} onclick="openModal();currentSlide(3)" class={`${style.hoverShadow} ${style.cursor}`}/>
  </div>
  <div class={style.column}>
    <img src="./images/1.jpg" style={{width:"70%"}} onclick="openModal();currentSlide(4)" class={`${style.hoverShadow} ${style.cursor}`}/>
  </div>
</div>

<div id="myModal" class={style.modal}>
  <span class={`${style.close} ${style.cursor}`} onclick="closeModal()">&times;</span>
  <div class={style.modalContent}>

    <div class={style.mySlides}>
      <div class={style.numbertext}>1 / 4</div>
      <img src="./images/1.jpg" style={{width:"100%"}}/>
    </div>
    <div class={style.mySlides}>
      <div class={style.numbertext}>2 / 4</div>
      <img src="./images/1.jpg" style={{width:"100%"}}/>
    </div>

    <div class={style.mySlides}>
      <div class={style.numbertext}>3 / 4</div>
      <img src="./images/1.jpg" style={{width:"100%"}}/>
    </div>
    
    <div class={style.mySlides}>
      <div class={style.numbertext}>4 / 4</div>
      <img src="./images/1.jpg" style={{width:"100%"}}/>
    </div>
    
    <a class={style.prev} onclick="plusSlides(-1)">&#10094;</a>
    <a class={style.next} onclick="plusSlides(1)">&#10095;</a>

    <div class={style.captionContainer}>
      <p id="caption"></p>
    </div>


    <div class={style.column}>
      <img class={`${style.demo} ${style.cursor}`} src="./images/1.jpg" style={{width:"100%"}} onclick="currentSlide(1)" alt="Nature and sunrise"/>
    </div>
    <div class={style.column}>
      <img class={`${style.close} ${style.cursor}`} src="./images/1.jpg" style={{width:"100%"}} onclick="currentSlide(2)" alt="Snow"/>
    </div>
    <div class={style.column}>
      <img class={`${style.close} ${style.cursor}`} src="./images/1.jpg" style={{width:"100%"}} onclick="currentSlide(3)" alt="Mountains and fjords"/>
    </div>
    <div class={style.column}>
      <img class={`${style.close} ${style.cursor}`} src="./images/1.jpg" style={{width:"100%"}} onclick="currentSlide(4)" alt="Northern Lights"/>
    </div>
  </div>
</div>

 */}


{/*                
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel" style={{width: 3200}}>
                {data[1]["hotel_images"].map((item)=>(
                <div class="carousel-inner">
                
                  <div class="carousel-item active img-fluid" data-interval="10000">
                    <img src={item} class="d-block" style={{width:100}} alt="..."/>
                  </div>
                  <div class="carousel-item img-fluid float-left" data-interval="2000">
                    <img src={item} class="d-block w-5" style={{width:100}} alt="..."/>
                  </div>
                  <div class="carousel-item img-fluid float-left">
                    <img src={item} class="d-block w-5" style={{width:100}} alt="..."/>
                  </div>
                  <div class="carousel-item img-fluid float-left">
                    <img src={item} class="d-block w-5" style={{width:100}} alt="..."/>
                  </div>
                  <div class="carousel-item img-fluid float-left">
                    <img src={item} class="d-block w-5" style={{width:100}} alt="..."/>
                  </div>
                  <div class="carousel-item img-fluid float-left">
                    <img src={item} class="d-block w-5" style={{width:100}} alt="..."/>
                  </div>
                  <div class="carousel-item img-fluid float-left">
                    <img src={item} class="d-block w-5" alt="..."/>
                  </div>
                </div>
                ))} 
                <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div> */}
           
               </div>






        //         <div className="ml-5" >
        //         <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel" style={{ display: "flex", flexDirection: "row", left: -230, textAlign:"center"}}>
        //   <div class="carousel-inner">
        //     <div class="carousel-item active" data-interval="10000" style={{display:"block"}}>
        //     <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][0]["image"]} className="img-fluid d-block" alt="image1" style={{width:"auto", height: 400, position: 'center'}} />
        //     </div>
        //     <div class="carousel-item" data-interval="2000" style={{display:"block"}}>
        //     <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][1]["image"]} className="img-fluid d-block" alt="image2" style={{width:"auto", height:400}} />
        //     </div>
        //     <div class="carousel-item" data-interval="2000" style={{display:"block"}}>
        //     <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][1]["image"]} className="img-fluid d-block" alt="image2" style={{width:"auto", height:400}} />
        //     </div>
        //     <div class="carousel-item" data-interval="2000" style={{display:"block"}}>
        //     <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][1]["image"]} className="img-fluid d-block" alt="image2" style={{width:"auto", height:400}} />
        //     </div>
        //     <div class="carousel-item" data-interval="2000" style={{display:"block"}}>
        //     <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][1]["image"]} className="img-fluid d-block" alt="image2" style={{width:"auto", height:400}} />
        //     </div>
        //     <div class="carousel-item" data-interval="2000" style={{display:"block"}}>
        //     <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][1]["image"]} className="img-fluid d-block" alt="image2" style={{width:"auto", height:400}} />
        //     </div>
        //     <div class="carousel-item" data-interval="2000" style={{display:"block"}}>
        //     <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][1]["image"]} className="img-fluid d-block" alt="image2" style={{width:"auto", height:400}} />
        //     </div>
        //     <div class="carousel-item" data-interval="2000" style={{display:"block"}}>
        //     <img src={ hotelDetails.hotel_images && hotelDetails.hotel_images["entrance"][1]["image"]} className="img-fluid d-block" alt="image2" style={{width:"auto", height:400}} />
        //     </div>
       
        //   </div>
        //   <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
        //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //     <span class="sr-only">Previous</span>
        //   </a>
        //   <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
        //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //     <span class="sr-only">Next</span>
        //   </a>
        // </div>
        // </div>




            )
        }
}

const mapStateToProps=(state)=>({
    hotelDetails: state.dataReducer.data
})

export default connect(mapStateToProps, null) (ImageCarousel)