import React from 'react';
import useFirebase from '../../../hooks/useFirebae';
import './Login.css';
const Login = () => {
    const { SignInWithGoogle } = useFirebase();


    return (
        <div className="section bg-secondary pb-5">
            <div className="d-flex justify-content-center py-4">
                <img
                    src="http://designarc.biz/demos/hilltown/theme/img/logo.png"
                    width="250"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <h2 className="ms-4">Please Login</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 border">
                        <div className="text-center d-flex flex-column w-50 mx-auto">
                            <button onClick={SignInWithGoogle} className="btn btn-success my-4"><i className="fab fa-google"></i> LOGIN WITH GOOGLE</button>
                            <button className="btn btn-warning mb-4"><i className="fab fa-github"></i> LOGIN WITH GIT HUB</button>
                            <button className="btn btn-primary"><i className="fab fa-facebook"></i> LOGIN WITH FACEBOOK</button>
                            <button className="btn btn-info my-4"><i className="fab fa-twitter"></i> LOGIN WITH TWITTER</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center">
                            <img className="img-fluid" src="http://designarc.biz/demos/hilltown/theme/img/room/room-details.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;