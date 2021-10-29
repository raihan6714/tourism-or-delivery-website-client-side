import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Rooms from './Rooms/Rooms';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Rooms></Rooms>
        </div>
    );
};

export default Home;