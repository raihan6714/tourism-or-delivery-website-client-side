import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="section bg-gray py-5">
            <div className="container fluid ">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <h2><span>INTRODUCTION</span> OF RESORT</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                        </div>
                        <div className="row">
                            <h4>WE ARE AVAILABLE FOR BUSINESS</h4>
                            <p>quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam. quis nostrum exerci-tationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi con-sequatur? Quis autem vel eum iure reprehenderit qui in ea volup.</p>
                        </div>
                        <Link to="/aboutus">
                            <button className="btn btn-outline-warning">More About Us</button>
                        </Link>

                    </div>
                    <div className="col-lg-6">
                        <div className="col">
                            <img src="https://i.ibb.co/rctPQrZ/introduction-img.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;