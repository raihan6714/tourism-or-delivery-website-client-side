import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './RoomDetails.css';
import { useForm } from "react-hook-form";

const RoomDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
            });
    }, []);
    const selectItem = data.filter(dt => dt._id === id);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
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
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name")} placeholder="name" />
                                <input {...register("email", { required: true })} placeholder="email" />
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