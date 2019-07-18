import React, { Component } from 'react'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <React.Fragment>
            <div className="footer">
                <div className="part1">
                    <div className="imgf">
                        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/12c47a69e1022b581a7e823e9bd45466.svg"></img>
                        <div className="app">
                            <img className="mr-2" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d0558d91063038236b60e3ef71fdc1fd.svg"></img>
                            <img width="135" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cf6dad406fdfdcd290fd40de9008ae50.png" alt="" className="mr-2"/>
                        </div>
                    </div>
                    <div className="detfoo">
                        <div className="det1">
                            <div className="mt-3 ">About Uber Eats</div>
                            <div className="mt-3 ">Read our blog</div>
                            <div className="mt-3 ">Buy gift cards</div>
                            <div className="mt-3 ">Sign up to deliver</div>
                            <div className="mt-3 ">Add your restaurant</div>
                        </div>
                        
                    </div>

                    <div className="detfoo2">
                    <div className="det2">
                        <div className="mt-3 ">Get Help</div>
                        <div className="mt-3 ">Read FAQs</div>
                        <div className="mt-3 ">View all cities</div>
                        <div className="mt-3 ">English</div>
                            
                     </div>
                    </div>
                </div>
                <div className="hrf"></div>

                <div className="part2">
                    <div className="p1">© 2019 Uber Technologies Inc.</div>
                    <div>
                        <a className="ah mr-5" href="">Privacy Policy</a>
                        <a className="ah mr-5" href="">Terms of Use</a>
                        <a className="ah mr-5" href="">Pricing</a>
                    </div>
                </div>
                <div className="links">
                <a style={{marginLeft:"-150px"}} className="mr-3" href="//www.facebook.com/ubereats">
                    <img width="20px" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ccfc8856107f17665b7c82df307d35ee.svg" class="bw eu"/>

                    </a>
                    <a className="mr-3" href="//www.twitter.com/ubereats">
                        <img width="20px" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/db07894edae0a7dde4b9f7477489eb3f.svg" class="bw eu"/>

                    </a>

                    <a className="mr-3" href="//www.instagram.com/ubereats">
                        <img width="20px" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8c75d9d92274d2f1df48a02f35a7b1f0.svg" class="bw eu"/>

                    </a>
                </div>
            </div>
        </React.Fragment>
         );
    }
}
 
export default Footer;