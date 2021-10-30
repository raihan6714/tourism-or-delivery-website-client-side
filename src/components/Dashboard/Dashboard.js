import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
const Dashboard = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
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
                            <input  {...register("email", { required: true })} placeholder="email" />
                            <input {...register("date")} placeholder="date" />
                            <input {...register("text")} placeholder="organize book at the libary" />
                            <textarea {...register("desicription")} placeholder="desicription" />
                            <input type="submit" />
                        </form>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;