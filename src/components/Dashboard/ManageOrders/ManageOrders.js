import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Spinner, Table } from 'react-bootstrap';
import AllOrder from './AllOrder/AllOrder';
const ManageOrders = () => {
    const { isLoading } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-cliffs-30847.herokuapp.com/manageOrders')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrders(data)
            });
    }, [])
    if (isLoading) {
        return <div className="text-center">
            <Spinner animation="border" variant="warning" />
        </div>
    };
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
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => <AllOrder
                                        key={order._id}
                                        order={order}
                                    ></AllOrder>)
                                }
                            </tbody>
                        </Table>



                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;