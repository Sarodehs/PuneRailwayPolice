import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Bmi = () => {
  return (
    <div>
       <Header/>

       <div>
        <div className=" col-md-10 col-xl-10 col-sm-10 offset-1  justify-content-center pe-0 ps-0" >
       
          <div className="row p-4">
            <div className="col-xl-12">
              <div className="card bgcolortwo">

                <form className="d-flex row m-3">
                  <div className="col-xl-2"> <h4>BMI </h4></div>
                  <div className="col-xl-3">  <input className="form-control" type="search" placeholder="Search" aria-label="Search" /></div>
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
      </div>

       <Footer/> 
    </div>
  )
}

export default Bmi