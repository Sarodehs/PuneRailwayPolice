import React from 'react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
// import { NavLink } from 'react-router-dom'



const AdminDashboard = () => {
    return (
        <div>

            <div className="">
                {/* <Topnav/> */}
                <div className="row">
                    {/* <!-- side nav start --> */}
                    <div className="col-md-2 col-xl-2 col-sm-2" >
                        <Sidenav />
                    </div>
                    {/* <!-- side nav end --> */}

                    {/* <!-- Content area start --> */}
                    <div className=" col-md-10 col-xl-10 col-sm-10 adminbgcolor justify-content-center pe-0 ps-0" >
                        {/* Topnav start*/}
                        <Topnav />
                        {/* topnav end*/}


                        {/* <!-- dashboard card one start --> */}
                        <div className="row text-center p-3 bg">

                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-success">business_center</span> */}
                                    <div >
                                        <h6>User</h6>
                                        <h3>5</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-warning">stars</span> */}
                                    <div >
                                        <h6>Professional</h6>
                                        <h3>1000</h3>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Sp</h6>
                                        <h3>500</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Basic</h6>
                                        <h3>500</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row text-center p-3 bg">

                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-success">business_center</span> */}
                                    <div >
                                        <h6>User</h6>
                                        <h3>5</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-warning">stars</span> */}
                                    <div >
                                        <h6>Professional</h6>
                                        <h3>1000</h3>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Sp</h6>
                                        <h3>500</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Basic</h6>
                                        <h3>500</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row text-center p-3 bg">

                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-success">business_center</span> */}
                                    <div >
                                        <h6>User</h6>
                                        <h3>5</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-warning">stars</span> */}
                                    <div >
                                        <h6>Professional</h6>
                                        <h3>1000</h3>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Sp</h6>
                                        <h3>500</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Basic</h6>
                                        <h3>500</h3>
                                    </div>
                                </div>
                            </div>
                        </div>



                     
                        {/* <!-- Content area start --> */}
                    </div>
                    {/* <Footer /> */}
                </div>

            </div>
        </div>
    );
}

export default AdminDashboard