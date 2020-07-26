import React from 'react'
import { connect } from 'react-redux'
import { fetchRequest } from '../../redux/action';

class Gallery extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    /// componentDidMount(){
         ///this.props.fetchRequest(this.props.location.pathname)
    ///}
    

    handleSearch=(id)=>{
        const { fetchRequest, data } = this.props
        this.props.history.push('/home-listing/'+id)
        fetchRequest("/home-listing/"+id)
    }


    render(){

        const { data } = this.props;
        console.log(data)
        return(
            <div className="container">

                {data?.map((item)=>(
                    <div onClick={()=>this.handleSearch(item.id)} className="card mb-3 border-0">
                       
                    <div key={item.id} className="row no-gutters" >
                        <div className="col-md-4 carousel slide" id="carouselExampleControls"  data-ride="carousel" >
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src= {item.hotel_images[0]} className="card-img d-block w-100 img-fluid" alt={item.name}/>
                        </div>
                        <div class="carousel-item">
                        <img src={item.hotel_images[1]} className="card-img d-block w-100 img-fluid" alt={item.name}/>
                            </div>
                        </div>

                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="false"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="false"></span>
                            <span class="sr-only">Next</span>
                        </a>


                        </div>
                        <div className="col-md-4 mt-4 pl-4">
                            <div className="cart-body"> 
                        <h4 className="cart-title text-danger">{item.name}</h4>
                            
                           
                        <div className="text-muted">{item.location}</div>
                        <hr/>
                        <div>
                            <small>{item.people+" people "}<i class="fas fa-circle"></i></small>
                            <small>{item.bedrooms+" bedrooms "}<i class="fas fa-circle"></i></small>
                            <small>{item.bathrooms+" bathrooms "}</small>
                        </div>
                        <hr/>
                        <div className="text-muted">{"$"+item.cost_per_night+"/night"}</div>
                        <div  className="text-muted">{"approx $"+item.cost_per_bedroom+"/bedroom"}</div>
                        </div>
                        </div>
                       <hr/>
                    </div>
                       </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    data: state.dataReducer.data
})

const mapDispatchToProps=dispatch=>({
    fetchRequest: query=>(dispatch(fetchRequest(query)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
