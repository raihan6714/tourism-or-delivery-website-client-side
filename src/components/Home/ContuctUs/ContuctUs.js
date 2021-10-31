import React from 'react';
import { Link } from 'react-router-dom';
import './ContuctUs.css';
const ContuctUs = () => {
    return (
        <div>
            <section className="contuct-form">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="left_ex_title">
                                <h2>get in <span>touch</span></h2>
                            </div>
                            <form className=" row m0">
                                <div className="form-group col-md-12">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="text" className="form-control" id="number" name="number" placeholder="Phoen no." />
                                </div>
                                <div className="form-group col-md-12">
                                    <textarea className="form-control" name="message" id="message" rows="1" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group col-md-12 mt-4">
                                    <button type="submit" value="submit" className="btn btn-outline-warning form-control">submit now</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="right_contact_info">
                                <div className="contact_info_title">
                                    <h3>Contact info</h3>
                                    <p>Have any Queries? Let us know. We will clear it for you at the best.</p>
                                </div>
                                <div className="contact_info_list">
                                    <div className="media">
                                        <div className="media-left">
                                            <i className="fa fa-map-marker text-warning"></i>
                                        </div>
                                        <div className="media-body">
                                            <h4>Office</h4>
                                            <p>Hill Town Resort, 215, Mallin Street <br /> New Youk, NY 100 254</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <i className="fa fa-envelope-o"></i>
                                        </div>
                                        <div className="media-body">
                                            <h4>Email</h4>
                                            <Link to="/">info@hilltown.contact.com</Link>
                                            <Link to="/">support@hilltown.com</Link>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left">
                                            <i className="fa fa-phone  text-warning"></i>
                                        </div>
                                        <div className="media-body">
                                            <h4>Phone</h4>
                                            <Link to="/">1800 658 4778</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContuctUs;