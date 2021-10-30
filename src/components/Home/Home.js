import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import News from './News/News';
import Rooms from './Rooms/Rooms';
import Service from './Service/Service';
import Video from './Video/Video';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Rooms></Rooms>
            <Service></Service>
            <Gallery></Gallery>
            <News></News>
            <Video></Video>
        </div>
    );
};

export default Home;