import React from 'react'
import Header from './Header'
import Footer from './Footer'

const WomenHelpDesk = () => {
    return (
        <div>
            <Header />
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/image/ncw_banners.jpg" class="d-block w-100" alt="Home" />
                    </div>

                    <div class="carousel-item">
                        <img src="/assets/Image/ncw_banners_02.jpg" class="d-block w-100" alt="Home" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>



            <div class=" mb-3 mt-3">
                <div class="row g-0">
                    <div class="col-md-3 offset-2">
                        <img src="/assets/Image/womanpro.png" class="img-fluid rounded-start" alt="profile" />
                    </div>
                    <div class="col-md-5">
                        <div class="card-body">
                            <h5 class="card-title">Dipali More</h5>
                            <p class="card-text">A.P.I.</p>
                            <p class="card-text">9422327131</p>
                            <p class="card-text"><small class="text-muted">Office of Superintendent of Railway Police Shivajinagar Pune - 411005</small></p>
                        </div>
                    </div>
                </div>
            </div>



            <div className=" col-md-10 col-xl-10 col-sm-10 offset-1  justify-content-center pe-0 ps-0" >

                <div className="row p-4">
                    <div className="col-xl-12">
                        <div className="card bgcolortwo">

                            <form className="d-flex row m-3">
                                <div className="col-xl-3"> <h4>Women Help Desk </h4></div>
                                <div className="col-xl-3">  <input className="form-control" type="search" placeholder="Search" aria-label="Search" /></div>
                                <div class="dropdown col-xl-6">
                                    <button class="btn btn-light dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select Division
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="/#">Ahmednagar</a></li>
                                        <li><a class="dropdown-item" href="/#">Daund</a></li>
                                        <li><a class="dropdown-item" href="/#">Kurdwad</a></li>
                                        <li><a class="dropdown-item" href="/#">Mira</a></li>
                                        <li><a class="dropdown-item" href="/#">Pune</a></li>
                                        <li><a class="dropdown-item" href="/#">Solapur</a></li>
                                    </ul>
                                </div>


                                {/* <DateRangePicker appe arance="subtle" placeholder="Subtle" style={{ width: 230 }} />         */}

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
                                            <th scope="col">Sr No.</th>
                                            <th scope="col">Issue Date</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr></tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>11-Jan-2022</td>
                                            <td>पोलीस शिपाई पदावर अस्थायी व तात्पुरत्या स्वरूपात नियुक्तीबाबत</td>
                                            <td>11-Jan-2022</td>
                                            <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> View </button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>11-Jan-2022</td>
                                            <td>पोलीस शिपाई पदावर अस्थायी व तात्पुरत्या स्वरूपात नियुक्तीबाबत</td>
                                            <td>11-Jan-2022</td>
                                            <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> View </button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>11-Jan-2022</td>
                                            <td>पोलीस शिपाई पदावर अस्थायी व तात्पुरत्या स्वरूपात नियुक्तीबाबत</td>
                                            <td>11-Jan-2022</td>
                                            <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> View </button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>11-Jan-2022</td>
                                            <td>पोलीस शिपाई पदावर अस्थायी व तात्पुरत्या स्वरूपात नियुक्तीबाबत</td>
                                            <td>11-Jan-2022</td>
                                            <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> View </button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>11-Jan-2022</td>
                                            <td>पोलीस शिपाई पदावर अस्थायी व तात्पुरत्या स्वरूपात नियुक्तीबाबत</td>
                                            <td>11-Jan-2022</td>
                                            <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> View </button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>11-Jan-2022</td>
                                            <td>पोलीस शिपाई पदावर अस्थायी व तात्पुरत्या स्वरूपात नियुक्तीबाबत</td>
                                            <td>11-Jan-2022</td>
                                            <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> View </button></td>
                                        </tr>

                                    </tbody>
                                </table>




                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="staticBackdropLabel">Recruitment </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <p>22-Aug-2023</p>
                                                <p>पोलीस भरती २०२१ - दि २५/०८/२०२३ पासून पोलीस शिपाई पदावर अस्थायी व तात्पुरत्या स्वरूपात नियुक्तीबाबत .</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">PDF</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

            </div>

            <Footer />
        </div>
    )
}

export default WomenHelpDesk