import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div>
            <div className="container">
                <div className="row introduction_inner">
                    <div className="col-md-6">
                        <Link to="aboutUs" className="introduction_img">
                            <img src="https://i.ibb.co/ctB3BJv/resort-story-img.jpg" alt="" className="img-fluid" />
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <div className="introduction_left_text">
                            <div className="resort_title">
                                <h2 className="text-warning">Our Resort <span>Story</span></h2>
                                <h5>give best service to our customers</h5>
                            </div>
                            <h6>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</h6>
                            <h4>We are Available for business</h4>
                            <p>Later when assigning the guest room before the arrival of the guest the front desk agent must be aware of guest room characteristics for each room type available in the hotel. Also not to forget any guest specific request or room specific request requested by the guest for eg:- room away from the elevator, King bedded room, twin bedroom, non-smoking room etc.</p>
                            <Link to="/contact">
                                <button className="btn btn-outline-warning">contact us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;