import React from 'react';
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Room from './Room/Room';
import './Rooms.css';
const Rooms = () => {
    const { isLoading } = useAuth();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-cliffs-30847.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setServices(data)
            });
    }, [])
    if (isLoading) {
        return <div className="text-center">
            <Spinner animation="border" variant="warning" />
        </div>
    };
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <h2>EXPLOR OUR ROOMS</h2>
                        <h6>CHOOSE ROOM ACCORDING TO BUDGET</h6>
                    </div>
                    <div className="col-lg-2">

                    </div>
                </div>
            </div>
            <div className="container my-4 ">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <Room
                            key={service._id}
                            service={service}
                        >
                        </Room>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Rooms;