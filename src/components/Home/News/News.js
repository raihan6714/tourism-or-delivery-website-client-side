import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';
const News = () => {
    return (
        <>
            <section className="latest_news_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row latest_news_left">
                                <div className="left_ex_title">
                                    <h2>Latest <span>News</span></h2>
                                </div>
                                <div className="col-sm-6">
                                    <div className="l_news_item">
                                        <Link to="/blog" className="news_img">
                                            <img src="https://i.ibb.co/870f6Nr/l-news-2.jpg" alt="" />
                                        </Link>
                                        <div className="news_text">
                                            <Link className="l_date" to="/">26 Aug 2017</Link>
                                            <h4>A Night in Resort with Family</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque ...</p>
                                            <Link className="news_more" to="/">Read more</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="l_news_item">
                                        <Link to="/" className="news_img">
                                            <img src="https://i.ibb.co/JyLXQ2x/l-news-1.jpg" alt="" />
                                        </Link>
                                        <div className="news_text">
                                            <Link className="l_date" to="/">26 Aug 2017</Link>
                                            <h4>A Night in Resort with Family</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa nt ium dolor emque ...</p>
                                            <Link className="news_more" to="/">Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="right_event">
                                <div className="left_ex_title">
                                    <h2>Upcoming <span>Events</span></h2>
                                </div>
                                <div className="right_event_area">
                                    <div className="media d-flex">
                                        <div className="media-left">
                                            <h3>17<span>Aug</span></h3>
                                        </div>
                                        <div className="media-body">
                                            <h4>Anneversay of our resort</h4>
                                        </div>
                                    </div>
                                    <div className="media d-flex">
                                        <div className="media-left">
                                            <h3>25<span>Dec</span></h3>
                                        </div>
                                        <div className="media-body">
                                            <h4>Anneversay of our resort</h4>
                                        </div>
                                    </div>
                                    <Link className="all_s_btn" to="/">view all events</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default News;