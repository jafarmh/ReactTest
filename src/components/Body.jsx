import React, { Component } from 'react';
import get_json from './json';
import Carousel from './Carousel';
import Baner from './Baner';
import Citys from './Citys';
import Categ from './Categ';
import Footer from './Footer';
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(get_json(),'==data')
        return ( 
        <React.Fragment>
            <div >
                <br></br>
            <div className="bodys ">
                <div className="mt-3">
                    <h3>Lunch & Dinner</h3>
                <Carousel data={get_json()} type="Lunch & Dinner"></Carousel>
            
                </div>
                <hr className="mt-5"></hr>
                    <div className="mt-3">
                        <Baner></Baner>

                    </div>
                    <hr className="mt-5"></hr>
                    <div className="mt-3">
                    <h3>Breakfast</h3>
                    <Carousel data={get_json()} type="Breakfast"></Carousel>            
                    </div>
                    <hr className="mt-5"></hr>
                    <div className="mt-3">
                        <Citys></Citys>
                    </div>
                    <hr className="mt-5"></hr>
                    <div className="mt-3">
                        <Categ></Categ>
                    </div>
            </div>

            <div className="mt-5">
                <Footer></Footer>
            </div>
            </div>
            
        </React.Fragment>
         );
    }
}
 
export default Body;