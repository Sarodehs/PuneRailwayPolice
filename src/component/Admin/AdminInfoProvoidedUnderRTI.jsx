import React from 'react'

import { NavLink } from 'react-router-dom'
import Sidenav from './Sidenav'
import Topnav from './Topnav'


const AdminInfoProvoidedUnderRTI = () => {
  return (
    <div>   <div className="">
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
          {/* Request for service start */}
          <div className="row p-4">
            <div className="col-xl-12">
              <div className="card ">

                <form className="d-flex row m-3">
                  <div className="col-xl-2"> <h4>Info Provoided Under RTI</h4></div>
                  <div className="col-xl-3">  <input className="form-control" type="search" placeholder="Search" aria-label="Search" /></div>
                  {/* <DateRangePicker appearance="subtle" placeholder="Subtle" style={{ width: 230 }} />         */}

                  {/* <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                  /> */}
                </form>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead className='table-primary'>
                      <tr>
                        <th scope="col">Ticket</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Issue</th>
                        <th scope="col">Status</th>
                        <th scope="col">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr></tr>
                      <tr>
                        <th scope="row">12336</th>
                        <td>11-Jan-2022</td>
                        <td>Ames Jackson</td>
                        <td>System Issue</td>
                        <td>Showing page no...</td>
                        <td>Open</td>
                        <td> <NavLink to="/ticketview/" className="text-decoration-none text-dark">View</NavLink></td>
                      </tr>
                      <tr>
                        <th scope="row">12336</th>
                        <td>11-Jan-2022</td>
                        <td>Ames Jackson</td>
                        <td>System Issue</td>
                        <td>Showing page no...</td>
                        <td>Open</td>
                        <td> <NavLink to="/ticketview/" className="text-decoration-none text-dark">View</NavLink></td>
                      </tr>
                     
                     
                    </tbody>
                  </table>
                  <nav aria-label="Page navigation example ">
                    <ul className="pagination justify-content-end">
                    <li className="page-item  m-2 active">
                        <a className="page-link" href="/#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item  m-2"><a className="page-link" href="/#">1</a></li>
                      <li className="page-item  m-2"><a className="page-link" href="/#">2</a></li>
                      <li className="page-item  m-2"><a className="page-link" href="/#">3</a></li>
                      <li className="page-item  m-2 active">
                        <a className="page-link" href="/#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

          </div>
          {/* Request for service end */}
        </div>
        {/* <!-- Content area start --> */}

        {/* <Footer /> */}
      </div>

    </div></div>
  )
}

export default AdminInfoProvoidedUnderRTI

