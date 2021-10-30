import React from 'react';
import './Services.css';
const Service = () => {
    return (
        <>
            <section className="our_service_area">
                <div className="container">
                    <div className="row our_service_inner">
                        <div className="col-md-3 col-sm-6">
                            <div className="our_service_first">
                                <h3>our services</h3>
                                <p>quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
                                <a className="all_s_btn" href="#">view all services</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="our_service_item">
                                <i className="fas fa-wifi"></i>
                                <h4>Free wifi</h4>
                                <p>Incidunt ut labore et dolore magnam aliquam quaerat volup tatem. Utad minima.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="our_service_item">
                                <i className="fas fa-mug-hot"></i>
                                <h4>Breakfast</h4>
                                <p>Incidunt ut labore et dolore magnam aliquam quaerat volup tatem. Utad minima.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="our_service_item">
                                <i className="fas fa-car-side"></i>
                                <h4>Transport</h4>
                                <p>Incidunt ut labore et dolore magnam aliquam quaerat volup tatem. Utad minima.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;