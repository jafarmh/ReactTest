import React, { Component } from 'react'
class Categ extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <React.Fragment>
            <h3>Explore Popular Categories</h3>
            <div className="row mt-3">
                <div className="concat mr-5 ">
                    <div>
                        <img style={{width:"180px",height:"180px",borderRadius:"50%"}} src="https://duyt4h9nfnj50.cloudfront.net/sku/a84dc69cee307fba4f559b1e825d8e9e"></img>
                        
                    </div>
                    <div style={{textAlign:"center"}}>
                    Chinese
                    </div>
                </div>
                <div className="concat mr-5 ">
                    <div>
                        <img style={{width:"180px",height:"180px",borderRadius:"50%"}} src="https://duyt4h9nfnj50.cloudfront.net/sku/3962b16c350438a56fd7794ba4a15b9c"></img>
                        
                    </div>
                    <div style={{textAlign:"center"}}>
                    Desserts
                    </div>
                </div>
                <div className="concat mr-5 ">
                    <div>
                        <img style={{width:"180px",height:"180px",borderRadius:"50%"}} src="https://duyt4h9nfnj50.cloudfront.net/sku/f6e04e64903c3207e68c649e24cc2f32"></img>
                        
                    </div>
                    <div style={{textAlign:"center"}}>
                    Fast Food
                    </div>
                </div>
                <div className="concat mr-5 ">
                    <div>
                        <img style={{width:"180px",height:"180px",borderRadius:"50%"}} src="https://duyt4h9nfnj50.cloudfront.net/sku/7b2a32908c050e6b07252ffcbe651e8c"></img>
                        
                    </div>
                    <div style={{textAlign:"center"}}>
                    Mexican
                    </div>
                </div>
                <div className="concat mr-5 ">
                    <div>
                        <img style={{width:"180px",height:"180px",borderRadius:"50%"}} src="https://duyt4h9nfnj50.cloudfront.net/sku/971d80f9ccce0c8eab98014650ee97eb"></img>
                        
                    </div>
                    <div style={{textAlign:"center"}}>
                    Pizza
                    </div>
                </div>
                <div className="concat mr-5" >
                    <div>
                        <img style={{width:"180px",height:"180px",borderRadius:"50%"}} src="https://duyt4h9nfnj50.cloudfront.net/sku/062faadce31ecb80703eb7d4d273bc22"></img>
                        
                    </div>
                    <div style={{textAlign:"center"}}>
                    Wings
                    </div>
                </div>
            </div>
        </React.Fragment>
         );
    }
}
 
export default Categ;