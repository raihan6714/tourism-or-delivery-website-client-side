import React from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
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
                                <Link className=" text-decoration-none  me-2" to="/mnageorder">Manage Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-decoration-none  me-2 p-2" to="/myorder">My Orders</Link>
                            </li>
                        </ul>
                    </div><div className="text-center mt-4">
                        <h2>My Orders</h2>
                    </div>

                    <div className="col"></div>
                    <div className="col-12 add-register">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Items</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;