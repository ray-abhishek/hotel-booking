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
    

    render(){

        const { data } = this.props;
        console.log(data)
        return(
            <div className="container">
              
                {data?.map((item)=>(
                    <div>
                    <div key={item.id} className="row">
                        <div className="col-6">
                        <img src= {item.hotel_images[0]} className="img-fluid"/>
                        </div>
                        <div className="col-6 mt-5">
                        <h3 className="text-danger">{item.name}</h3>
                        <div>{item.location}</div>
                        <hr/>
                        <div>
                            <small>{item.people+" people "}<i class="fas fa-circle"></i></small>
                            <small>{item.bedrooms+" bedrooms "}<i class="fas fa-circle"></i></small>
                            <small>{item.bathrooms+" bathrooms "}</small>
                        </div>
                        <hr/>
                        <div>{"$"+item.cost_per_night+"/night"}</div>
                        <div>{"approx $"+item.cost_per_bedroom+"/bedroom"}</div>
                        </div>
                       
                    </div>
                       <hr/>
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
