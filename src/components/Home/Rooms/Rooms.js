import React from 'react';
import { Link } from 'react-router-dom';
import './Rooms.css';
const Rooms = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <h2>EXPLOR OUR ROOMS</h2>
                        <h6>CHOOSE ROOM ACCORDING TO BUDGET</h6>
                    </div>
                    <div className="col-lg-2">
                        <button>View All Rooms</button>
                    </div>
                </div>
            </div>
            <div className="container my-4 ">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="http://designarc.biz/demos/hilltown/theme/img/room/room-details.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">BUDGET ROOM</h5>
                                <h6>10x15 Mountain view 2 Balcony</h6>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between">
                                    <h4>$170 / Night</h4>
                                    <Link to="/allservices">
                                        <button type="button" className="btn btn-outline-warning">Warning</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="http://designarc.biz/demos/hilltown/theme/img/room/room-details.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">BUDGET ROOM</h5>
                                <h6>10x15 Mountain view 2 Balcony</h6>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between">
                                    <h4>$170 / Night</h4>
                                    <div className="btn btn-warning">BOOK NOW</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="http://designarc.biz/demos/hilltown/theme/img/room/room-details.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">BUDGET ROOM</h5>
                                <h6>10x15 Mountain view 2 Balcony</h6>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between">
                                    <h4>$170 / Night</h4>
                                    <div className="btn btn-warning">BOOK NOW</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rooms;