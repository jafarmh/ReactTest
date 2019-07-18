import React, { Component } from 'react'
class Citys extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <React.Fragment>
            <div className="contci">
                <div className="headci">
                    <h4>Cities Near You</h4>
                    <a className="tag" href="/en-US/cities/">View all 500+ cities</a>
                </div>

            </div>
            <div className="row">
                <div className="col-4 mt-3">Atlanta</div>
                <div className="col-4 mt-3">Dallas-Fort Worth</div>
                <div className="col-4 mt-3">New York City</div>
                <div className="col-4 mt-3">Sacramento</div>
                <div className="col-4 mt-3">Austin</div>
                <div className="col-4 mt-3">Denver</div>
                <div className="col-4 mt-3">Orange County</div>
                <div className="col-4 mt-3">San Diego</div>
                <div className="col-4 mt-3">Baltimore-Maryland</div>
                <div className="col-4 mt-3">Las Vegas</div>
                <div className="col-4 mt-3">Palm Springs</div>
                <div className="col-4 mt-3">San Francisco Bay Area</div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default Citys;