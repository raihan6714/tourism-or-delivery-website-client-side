import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://designarc.biz/demos/hilltown/theme/img/home-slider/slider-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Explour and Enjoy with HillTown Resort</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://designarc.biz/demos/hilltown/theme/img/home-slider/slider-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Enjoy The World of Relaxation & Tranquility</h3>
                        <p>Getting a charge out of a far reaching shoreing along the exuberant.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://designarc.biz/demos/hilltown/theme/img/home-slider/slider-3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                        <h3>Spend Quality Holidays With Us</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>

                    </Carousel.Caption>


                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;