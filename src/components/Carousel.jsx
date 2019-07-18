import React, { Component } from 'react'
import Slider from "react-slick";


class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        datas:[]
        }
    }
    componentWillMount(){

        let data=this.props.data;
        let datas=[];
        for(let i=0;i<data.length;i++)
        {
            if(data[i].mealType.title===this.props.type)
           {
               datas.push({
                 image:data[i].mealType.image,
                 title:data[i].title,
                 description:data[i].description,
                 prepa:this.get_preparation(data[i].preparation,data[i].fee),
                 rate:data[i].rate,
                 delivery:"$"+data[i].delivery+" Delivery Fee"
               })
           }
        }
 
        let newstate=[this.state];
        newstate[0].datas=datas;
        this.setState({ newstate });
    }
    componentDidMount(){

        var ele =document.getElementsByClassName("slick-arrow");
        let prev=document.getElementsByClassName("slick-prev");
        for (let j = 0; j < prev.length; j++ ) {
            prev[j].classList.add("prvbtn");
      
          }
        
        
        let next=document.getElementsByClassName("slick-next");
        for (let j = 0; j <next.length; j++ ) {
            next[j].classList.add("nextbtn");
      
          }
        
      
        let listul=document.getElementsByClassName("slick-dots");
        for (var j = 0; j < listul.length; j++ ) {
          listul[j].style.display = "none";
    
        }

       
      }

      get_preparation=(preparation,fee)=>{
          return "30-40 min";
      }
    render() { 
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };
        let cards=[];
        cards=this.state.datas.map((d,index)=>(
            <div key={index} >
            <img className="c_img" src={d.image} />
            <div className="mt-2">
            {d.title}
            </div>
            <div className="text-muted">
            {d.description}
            </div>
            <div className="details">
                <div className="prepa">{d.prepa}</div>
                <div className="rate">{d.rate} 
                <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/972e1cb487b3a5c72c30a6635596f477.svg"></img>
                </div>
                <div className="delivery">{d.delivery}</div>
            </div>
            </div>
        ));
        return ( 
        <React.Fragment>
             <Slider {...settings}>
                 {cards}
      </Slider>
        </React.Fragment> 
        );
    }
}
 
export default Carousel;