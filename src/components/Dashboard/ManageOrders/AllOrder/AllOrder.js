import React from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const AllOrder = (props) => {
    const [orders, setOrders] = useState([]);
    const { isLoading } = useAuth();
    const { _id, name, email, phone } = props.order;

    if (isLoading) {
        return <div className="text-center">
            <Spinner animation="border" variant="warning" />
        </div>
    };
    const handleDelete = id => {
        const url = `https://aqueous-cliffs-30847.herokuapp.com/deleteOrder/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted Successfully');
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                    setOrders('');
                }
            })
    }
    return (

        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <td>
                    <button className="btn btn-warning me-4">Edit</button>
                    <Link to="/">
                        <button onClick={() => handleDelete(_id)} className="btn btn-danger">Delete</button>
                    </Link>

                </td>
            </td>
        </tr>
    );
};

export default AllOrder;