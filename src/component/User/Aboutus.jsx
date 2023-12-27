import React, { useState, useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'




const Aboutus = () => {

  const [Sps, setSps] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/sp");
        if (response.ok) {
          const data = await response.json();
          setSps(data); // Update the state with the fetched data
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the function when the component mounts
    fetchData();
  }, []);


  const [Officer, setOfficer] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/officer");
        if (response.ok) {
          const data = await response.json();
          setOfficer(data); // Update the state with the fetched data
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the function when the component mounts
    fetchData();
  }, []);

  return (
    <div>
      <div> <div>
        <Header />
        <div>
          {/* carousel start */}
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/assets/image/head/d1.jpg" class="d-block w-100" alt="Home" />
              </div>
              <div class="carousel-item">
                <img src="/assets/Image/head/d2.jpg" class="d-block w-100" alt="Home" />
              </div>
              <div class="carousel-item">
                <img src="/assets/Image/head/d3.jpg" class="d-block w-100" alt="Home" />
              </div>
              <div class="carousel-item">
                <img src="/assets/Image/head/d4.jpg" class="d-block w-100" alt="Home" />
              </div>
              <div class="carousel-item">
                <img src="/assets/Image/head/d5.jpg" class="d-block w-100" alt="Home" />
              </div>
              <div class="carousel-item">
                <img src="/assets/Image/head/d6.jpg" class="d-block w-100" alt="Home" />
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
          {/* carousel end */}
       

          {/* Officer′s Profile start */}
          <div class="row p-5 ">
            <div class="col-sm-4 card bg-light aboutcardscroll pt-3 ">
              <h2 className='text-center'>SPs Till Date</h2>
              {Sps.map((item, index) => (
              <div class="card " >
                <div class="card-body bgcolorone">
                  <h5 class="card-title">{item.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">From : {item.fromDate}  TO  {item.toDate} </h6>
                </div>
              </div>
              ))}

            </div>
            <div class="col-sm-7 card ms-2 bg-light">
              <h2 className='text-center '>Officer′s Profile</h2>

              <div class="row row-cols-1 row-cols-md-4 g-4">
              {Officer.map((item, index) => (
                <div class="col ">
                  <div class="card h-100 text-center">
                  {/* <img key={item._id} src={`http://localhost:5000/${item.image}`} alt="Albumimage" className="img-fluid w-25"/> */}
                    <img src={`http://localhost:5000/${item.image}`}  class="card-img-top ps-3 pe-3 pt-1" alt="card" />
                    <div class="card-body">
                      <h5 class="card-title">{item.name}</h5>
                    </div>
                  </div>
                </div>
                ))}
              </div>
          

            </div>
          </div>
          {/* Officer′s Profile end */}


          {/* accordion start */}
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Superintendent of Police Pune Railway
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">

                  <div class="accordion" id="sub-accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="sub-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#sub-collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Addl. Superintendent of Police, Pune Railway
                        </button>
                      </h2>
                      <div id="sub-collapseOne" class="accordion-collapse collapse show" aria-labelledby="sub-headingOne" data-bs-parent="#sub-accordionExample">
                        <div class="accordion-body">
                          <div class="accordion" id="sub-accordionExample">
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="sub-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#sub-collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Sub Divisional Police Officer, Pune
                                </button>
                              </h2>
                              <div id="sub-collapseOne" class="accordion-collapse collapse show" aria-labelledby="sub-headingOne" data-bs-parent="#sub-accordionExample">
                                <div class="accordion-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Pune Railway Police Station</li>
                                    <li class="list-group-item">Daund Railway Police Station</li>
                                    <li class="list-group-item">Ahmednagar Railway Police Station</li>
                                  </ul>
                                 </div>
                              </div>
                            </div>

                          </div>
                          <div class="accordion" id="sub-accordionExample">
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="sub-headingTwo">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#sub-collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Deputy Superintendent of Police (Home)
                                </button>
                              </h2>
                              <div id="sub-collapseOne" class="accordion-collapse collapse show" aria-labelledby="sub-headingOne" data-bs-parent="#sub-accordionExample">
                                <div class="accordion-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Control Room, Pune Railway</li>
                                    <li class="list-group-item">Local Crime Branch, Pune Railway</li>
                                    <li class="list-group-item">Ahmednagar Railway Police Station</li>
                                    <li class="list-group-item">Reader Branch, Pune Railway</li>
                                    <li class="list-group-item">Security Branch, Pune Railway</li>
                                    <li class="list-group-item">Women Help Cell, Pune Railway</li>
                                    <li class="list-group-item">Police Headquarter, Pune Railway </li>
                               
                                  </ul>
                              
                                   </div>
                              </div>
                            </div>

                          </div>
                          <div class="accordion" id="sub-accordionExample">
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="sub-headingTwo">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#sub-collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Sub Divisional Police Officer, Solapur
                                </button>
                              </h2>
                              <div id="sub-collapseOne" class="accordion-collapse collapse show" aria-labelledby="sub-headingOne" data-bs-parent="#sub-accordionExample">
                                <div class="accordion-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Kurdwadi Railway Police Station</li>
                                    <li class="list-group-item">Solapur Railway Police Station</li>
                                    <li class="list-group-item">Miraj Railway Police Station</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* accordion end */}

        </div>

       
          {/* Location & Jurisdiction Map start */}
        <div class="row p-5 bg-light">
          <h2 className='text-center'>Location & Jurisdiction Map</h2>
          <div class="col-sm-5 offset-1">
            <div class="card">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7566.013672944764!2d73.8741151!3d18.5285932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c123e61be033%3A0x4cb43d9aabd553c9!2sPune%20Railway%20Police%20Station!5e0!3m2!1sen!2sin!4v1702553301075!5m2!1sen!2sin"
              width="600" height="400" style={{border:0}} class="card-img-top" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     

              <div class="card-body ">
                <h5 class="card-title">Location</h5>
                <p class="card-text">GVHG+G2C, Station Rd, Agarkar Nagar, Pune, Maharashtra 411001</p>
                <a href="https://www.google.com/maps/place/Pune+Railway+Police+Station/@18.5285932,73.8741151,16z/data=!4m6!3m5!1s0x3bc2c123e61be033:0x4cb43d9aabd553c9!8m2!3d18.5288233!4d73.8750283!16s%2Fg%2F11gj0zwfcs?hl=en&entry=ttu" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-5 ">
            <div class="card ">
              <img src="/assets/Image/jurisdiction-map.png" class="card-img-top" alt="profile" />

              <div class="card-body ">
                <h5 class="card-title">Jurisdiction</h5>
                <p class="card-text">pune railways map</p>
                <a href="https://www.mapsofindia.com/maps/maharashtra/railways/pune.htm" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
        {/* Location & Jurisdiction Map end */}
      </div>
        <Footer />

      </div>

    </div >
    // </div >
  )
}

export default Aboutus