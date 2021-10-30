import React from 'react';
import { Link } from 'react-router-dom';

const Room = ({ service }) => {
    const { _id, title, name, desc, price, img } = service;
    return (
        <>
            <div className="col">
                <div className="card h-100 bg-dark ">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-warning">{name}</h5>
                        <h6 className="text-warning">{title}</h6>
                        <p className="card-text text-light">{desc}</p>
                        <div className="d-flex justify-content-between">
                            <h4 className="text-warning">$ {price} / Night</h4>
                            <Link to={`/serviceDetails/${_id}`}>
                                <button type="button" className="btn btn-outline-warning">See Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Room;