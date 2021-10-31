import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddServices.css';
const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://aqueous-cliffs-30847.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('successfully data added');
                    reset();
                }
            })
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
                                <Link className=" text-decoration-none  me-2" to="/mnageorder">Manage Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" text-decoration-none  me-2 p-2" to="/myorder">My Orders</Link>
                            </li>
                        </ul>
                    </div><div className="text-center mt-4">
                        <h2>Add a New Services</h2>
                    </div>

                    <div className="col"></div>
                    <div className="col-5 add-register">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name")} placeholder="name" />
                            <input  {...register("title", { required: true })} placeholder="title" />
                            <input {...register("img")} placeholder="img url" />
                            <input {...register("price")} placeholder="price" />
                            <textarea {...register("desc")} placeholder="desicription" />
                            <input type="submit" />
                        </form>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    );
};

export default AddServices;