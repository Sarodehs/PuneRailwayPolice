import React from 'react';
import Sidenav from './Sidenav'
import Topnav from './Topnav'

const AdminTicketsView = () => {

    return (
        <div>
            <div className="">
                {/* <Topnav/> */}
                <div className="row">
                    {/* <!-- side nav start --> */}
                    <div className="col-md-2 col-xl-2 col-sm-2 " >
                        <Sidenav />
                    </div>
                    {/* <!-- side nav end --> */}

                    {/* <!-- Content area start --> */}
                    <div className=" col-md-10 col-xl-10 col-sm-10  justify-content-center pe-0 ps-0" >
                        {/* Topnav start*/}
                        <Topnav />
                        {/* topnav end*/}

                        <div className="row p-3 ">
                            <div className="col-xl-12 bg-light rounded">
                                <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                                    Ticket</h3>
                                <hr />
                                <form className='p-5 '>
                                    <div className="row mb-3">
                                        <label for="inputname" className="col-sm-2 col-form-label">Customer Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputname"  />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label for="inputcreated" className="col-sm-2 col-form-label">Created Date</label>
                                        <div className="col-sm-10">
                                            <input type="date" className="form-control" id="inputcreated" />
                                       
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label for="inputReason" className="col-sm-2 col-form-label">Reason</label>
                                        <div className="col-sm-10">
                                            <input type="taxt" className="form-control" id="inputReason"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label for="inputIssue" className="col-sm-2 col-form-label">Issue</label>
                                        <div className="col-sm-10">
                                            <textarea  type="taxt" className="form-control" id="inputIssue" rows={4} />
                                        </div>
                                    </div>

                                   
                                    <div className="row mb-3">
                                        <label for="inputIssue" className="col-sm-2 col-form-label">Status</label>
                                        <div className="col-sm-10">
                                        <select className="form-select" aria-label="Default select example"  >
                                            <option selected>Select Status</option>
                                            <option value="One">One</option>
                                            <option value="Two">Two</option>
                                            <option value="Three">Three</option>
                                            </select><br/><br/><br/>                                            
                                        </div>

                                    </div>
                                   
                                    <button type="submit" className="btn btn-primary buttonfocuscolor me-5">SAVE CHANGES</button>
                                    <button className='btn  buttonfocuscolor1'>CANCEL</button>   
                                        
                                </form>



                            </div>




                        </div>

                        {/* <!-- Content area start --> */}
                    </div>
                    {/* <Footer /> */}
                </div>

            </div>
        </div>
    )
}

export default AdminTicketsView