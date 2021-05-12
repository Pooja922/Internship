import React,{Component} from 'react';
import Carousel from "react-bootstrap/carousel";
import classes from "./home.module.css"

class Home extends Component{
    render(){
        return(
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className={classes.CarouselImage}
                            src="/carousel4.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={classes.CarouselImage}
                            src="/carousel2.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={classes.CarouselImage}
                            src="/carousel3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className={classes.OuterCard}>
                    <div className={classes.InnerCard}>
                        <p className={classes.CardTitle}>Laptop</p>
                        <img className={classes.CardImage}
                            src="/laptopcard.jpg"
                            alt="First slide"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
