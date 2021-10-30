import React from 'react';
import { Link } from 'react-router-dom';
import './Video.css';
const Video = () => {
    return (
        <>
            <section className="fun_fact_area">
                <div className="container">
                    <div className="row">
                        <div className="fun_fact_box row m0">
                            <div className="col-md-3 col-sm-6">
                                <div className="media d-flex">
                                    <div className="media-left">
                                        <h3 className="counter">712</h3>
                                    </div>
                                    <div className="media-body">
                                        <h4>new <br /> friendships</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="media d-flex">
                                    <div className="media-left">
                                        <h3 className="counter">254</h3>
                                    </div>
                                    <div className="media-body">
                                        <h4>International <br /> Guests</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="media d-flex">
                                    <div className="media-left">
                                        <h3 className="counter">430</h3>
                                    </div>
                                    <div className="media-body">
                                        <h4>five stars <br /> rating</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="media d-flex">
                                    <div className="media-left">
                                        <h3 className="counter">782</h3>
                                    </div>
                                    <div className="media-body">
                                        <h4>Served <br /> Breakfast</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row fun_subscrib_inner">
                        <div className="col-md-5">
                            <div className="left_text_subs">
                                <p>Subscribe to our brief newsletter to get exclusive discounts and new theme launches right in your inbox.</p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-outline-warning submit_btn" type="button">Subscribtion</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Video;