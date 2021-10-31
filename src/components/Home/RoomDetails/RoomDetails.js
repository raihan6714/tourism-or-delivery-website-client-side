import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './RoomDetails.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './RoomDetails.css';

const RoomDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    //load single data
    useEffect(() => {
        fetch('https://aqueous-cliffs-30847.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
            });
    }, []);
    const selectItem = data.filter(dt => dt._id === id);

    const { register, handleSubmit, reset } = useForm();

    //booking
    const onSubmit = data => {
        axios.post('https://aqueous-cliffs-30847.herokuapp.com/addOrders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('successfully data added');
                    reset();
                }
            })
    };
    return (
        <>
            <div className="container py-4">
                <div className="row">
                    <h1 className=" text-center text-warning pb-2">Our Premium Room</h1>
                    <div className="col-lg-8">
                        <img src={selectItem[0]?.img} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-4">
                        <h2>{selectItem[0]?.name}</h2>
                        <h4>${selectItem[0]?.price} / NIGHT</h4>
                        <p>{selectItem[0]?.desc}</p>
                        <div className="details-form ">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name")} placeholder="name" />
                                <input {...register("email", { required: true })} placeholder="email" />
                                <input {...register("phone", { required: true })} placeholder="number" />
                                <br />
                                <input className="btn btn-outline-warning" type="submit" value="BOOK NOW" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoomDetails;