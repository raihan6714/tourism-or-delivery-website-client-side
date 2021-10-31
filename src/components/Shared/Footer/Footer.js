import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        //Footer Area
        <footer className="footer_area">
            <div className="footer_widget_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-xs-6">
                            <aside className="f_widget about_widget">
                                <img src="https://i.ibb.co/v3NmKHr/logo-1.png" alt="" />
                                <div className="ab_wd_list">
                                    <div className="f-media">
                                        <div className="f-media-left">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="f-media-body">
                                            <h4>54B, Tailstoi Town 5238 MT, La city, IA 522364</h4>
                                        </div>
                                    </div>
                                    <div className="f-media">
                                        <div className="f-media-left">
                                            {/* <i className="fa fa-phone"></i> */}
                                        </div>
                                        <div className="f-media-body">
                                            <h4>+ 547 5895 621</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="book_now_area">
                                    <Link className="book_now_btn" to="#">Book now</Link>
                                </div>
                            </aside>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <aside className="f_widget link_widget">
                                <div className="f_title">
                                    <h3>Extra Links</h3>
                                </div>
                                <ul>
                                    <li><Link to="/aboutus">About Us</Link></li>
                                    <li><Link to="/">Faq’s</Link></li>
                                    <li><Link to="/">Blog</Link></li>
                                    <li><Link to="/">Testimonials</Link></li>
                                    <li><Link to="/">Reservation Now</Link></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <aside className="f_widget link_widget">
                                <div className="f_title">
                                    <h3>our services</h3>
                                </div>
                                <ul>
                                    <li><Link to="/">Food & Drinks</Link></li>
                                    <li><Link to="/">Rooms</Link></li>
                                    <li><Link to="/">Amenities</Link></li>
                                    <li><Link to="/">Spa & Gym</Link></li>
                                    <li><Link to="/">Hill Tours</Link></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <aside className="f_widget instagram_widget">
                                <div className="f_title">
                                    <h3>Instagram</h3>
                                </div>
                                <ul className="instagram_list" id="instafeed"></ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_copyright_area">
                <div className="container d-flex justify-content-between">
                    <div className="pull-left">
                        <h4>Copyright © HillTown Resort  <script>document.write(new Date().getFullYear());</script>. All rights reserved. </h4>
                    </div>
                    <div className="pull-right">
                        <h4>Created by: <Link to="/">Raihan</Link></h4>
                    </div>
                </div>
            </div>
            {/* ================End Footer Area ================= */}
        </footer>
    );
};

export default Footer;