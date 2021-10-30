import React from 'react';
import { Link } from 'react-router-dom';

const ManageOrders = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="mt-4">
                        <ul className="nav flex-row justify-content-center">
                            <li className="nav-item">
                                <Link className=" text-decoration-none me-2" to="/addnew">Add New Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-decoration-none  me-2" to="/mnageorder">Manage Bookings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-decoration-none  me-2 p-2" to="/myorder">My Orders</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center mt-4">
                        <h2>Manage Bookings</h2>
                    </div>

                    <div className="col"></div>
                    <div className="col-12 add-register">
                        <table className="table table-striped table-hover">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <tr>
                                            <td>
                                                <button className="btn btn-warning me-4">Edit</button>
                                                <button className="btn btn-danger">Deete</button>
                                            </td>
                                        </tr>
                                    </tr>
                                </tbody>
                            </table>
                        </table>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;