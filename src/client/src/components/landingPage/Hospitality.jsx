import React from 'react'

function Hospitality(){


    return (
        <>

        <div style={strip}>
            <div style={{margin: "0 150px"}}>
            <img src="https://d344sq77q05r9.cloudfront.net/prod-20-07-27-13:03/assets/b621d6ca2249b631796db0620e65d5f3.svg" className="img-fluid mx-4"/></div>
            <p style={stripContent} > <em > Stay safe with our professional hospitality.&nbsp; Learn about our commitment to <a href="" style={{color:"#B77A64"}}  >guest safety and enhanced housekeeping</a></em> </p>
        </div>
        
        <h4 className="text-center">HANDMADE HOSPITALITY</h4>
        <div className="container my-5" style={{maxWidth: 1000}}>
        
            <div className="row">
           
            <div class="card mb-3 border-0">
  <div class="row no-gutters">
    <div class="col-md-5">
      <img src="https://onefinestay.imgix.net/media-library/handmade_hospitality.jpg" class="card-img" alt="..." style={{height: 450}} />
    </div>
    <div class="col-md-7">
      <div class="card-body mt-3 ml-3">
        <h5 class="card-title"><strong>Opening doors to the finest homes and villas in the most desirable destinations.</strong></h5>
        <p class="card-text text-dark">A beachside estate in the Caribbean, a townhouse in New York or an apartment in one of Europe’s culture capitals – wherever you’re headed, every home is handpicked for space, character and comfort. Only 1 in 10 homes make the cut.</p>

        <div class="row">
  <div class="col-sm-6">
    <div class="card border-0">
      <div class="card-body">
        <h5 class="card-title">Personal service</h5>
        <p class="card-text text-dark">Our advisors help find a beautiful home that’s right for you. Enjoy a warm welcome with tailored amenities and 24/7 support.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card border-0">
      <div class="card-body">
        <h5 class="card-title">Professional hospitality</h5>
        <p class="card-text text-dark">When you book with us, the entire experience is professionally managed to ensure the highest quality stay.</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</div></div> 
        </div>
        </>
    )
}

const strip = {
    display: "flex",
    marginTop: 100,
    padding: 55,
    backgroundColor: "#fef3ef",
    marginBottom: 50
}

const stripContent = {
    color: "#B77A64", 
    fontSize: 24,
    marginRight: 180,
    textDecoration: "none",
    fontWeight: "bold"
}

export default Hospitality;

