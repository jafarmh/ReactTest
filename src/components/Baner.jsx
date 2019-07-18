import React, { Component } from 'react'
class Baner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <React.Fragment>
            <div className="cont">
                <div className="baner">
                    <div className="imgb">
                        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/816084874de4267a8e89c881db968ed2.svg"></img>
                        </div>
                    <div className="titleb"><h4>There's more to love in the app.</h4></div>
                    <div className="desb">Get the app</div>
                </div>

                <div className="baner">
                    <div className="imgb">
                        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/bd4c2537aa3799e345a397e7e4c9cbac.svg"></img>
                        </div>
                    <div className="titleb"><h4>Your restaurant, delivered</h4></div>
                    <div className="desb">Add your restaurant</div>
                </div>


                <div className="baner">
                    <div className="imgb">
                        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b96045d2e2b2989e7b09200b1c40ab73.svg"></img>
                        </div>
                    <div className="titleb"><h4>Deliver the Eats</h4></div>
                    <div className="desb">Sign up to deliver</div>
                </div>
            </div>
        </React.Fragment>
         );
    }
}
 
export default Baner;