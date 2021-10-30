import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Gallery = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className="section bg-warning py-5">
                <div className="text-dark text-center pb-2">
                    <h2>OUR RESORT GALLERY</h2>
                    <p>Natural View! if you want to see it please visit our resort</p>
                </div>

                <div className="">
                    <Carousel responsive={responsive}>
                        <div className="col">
                            <div className="card h-100">
                                <img src="http://designarc.biz/demos/hilltown/theme/img/gallery/resort-g-4.jpg" className="card-img-top" alt="..." height="300" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="http://designarc.biz/demos/hilltown/theme/img/gallery/resort-g-2.jpg" className="card-img-top" alt="..." height="300" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="http://designarc.biz/demos/hilltown/theme/img/gallery/resort-g-3.jpg" className="card-img-top" alt="..." height="300" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="http://designarc.biz/demos/hilltown/theme/img/gallery/resort-g-1.jpg" className="card-img-top" alt="..." height="300" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." height="300" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." height="300" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." height="300" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." height="300" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." height="300" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." height="300" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>


        </>
    );
};

export default Gallery;