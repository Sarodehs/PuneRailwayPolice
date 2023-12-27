import React, { useState, useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Home = () => {

  const [Spsmessage, setSpsmessage] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/spsMessage");
        if (response.ok) {
          const data = await response.json();
          setSpsmessage(data); // Update the state with the fetched data
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


  // get all
  const [PositiveStory, setPositiveStory] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/positiveStories");
        if (response.ok) {
          const data = await response.json();
          setPositiveStory(data); // Update the state with the fetched data
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

// get all
const [Headline, setHeadline] = useState([]);

useEffect(() => {
  // Define a function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/headlines");
      if (response.ok) {
        const data = await response.json();
        setHeadline(data); // Update the state with the fetched data
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
      <Header />
      <div>
        <div>
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/assets/image/amrit-banner.jpg" class="d-block w-100" alt="Home" />
              </div>
              <div class="carousel-item">
                <img src="/assets/Image/amrit-banner.jpg" class="d-block w-100" alt="Home" />
              </div>
              <div class="carousel-item">
                <img src="/assets/Image/amrit-banner.jpg" class="d-block w-100" alt="Home" />
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


          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode
            className=""
            containerClass=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 2,
                partialVisibilityGutter: 50
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 1,
                partialVisibilityGutter: 30
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {/* <div class="col m-2 "> */}
            {PositiveStory.map((item) => (
              <div class=" col m-2 mb-3">
             
                <div class="row  g-0 ">
             
                  <div class="col-md-8">
                    <div class="card-body h-100 p-4 bgcolorone">
                      <p class="card-text"><small class="text-muted">{item.title}</small></p>
                    </div>
                  </div>
                   <div class="col-md-4 bgcolorone text-center ">
                   {/* <button  className="btn btn-primary" href={`http://localhost:5000/${item.file}`} target="blank">PDF</button> */}
                   <a href={`http://localhost:5000/${item.file}`} target="blank">
                            
                            {item.file && item.file.toLowerCase().endsWith('.pdf') ? (
                              <i className="material-icons text-dark">picture_as_pdf</i>
                            ) : (
                              <i className="material-icons text-dark">insert_drive_file</i>
                            )}
                        
                        </a>
                  </div>
                   
                </div>
                 
              </div>
          ))}
            {/* </div> */}
         
          </Carousel>

          <div className="row ">

            <div className="col-xl-3 pt-3 ps-3 pe-3">
            {Spsmessage.map((item, index) => (
              <div class="card pt-3" >
                <img key={item._id} src={`http://localhost:5000/${item.photo}`} alt={item._id} class="card-img-top"/>
                {/* <img src="/assets/Image/policeofficer.png" class="card-img-top" alt="profile" /> */}
                <div class="card-body">
                  <h3>{item.name}</h3>
                  <h5>{item.post}</h5>
                  <button class='btn btn-link'>Sadrakshanaya Khalanigrahanay</button>
                  <p class="card-text">"Help us make Railways Police Pune (GRP) passenger-friendly and effective. Stay vigilant, report suspicious activities, and together, we can create a safer railway environment."</p>
                  <b>I wish you Bon Voyage on your future journeys! Remember, if you see something, say something ...!!</b>
                </div>
              </div>
            ))}
            </div>

            <div className="col-xl-6 pt-3">
              <div className='bg-light card p-2'>
                <div class="row row-cols-1 row-cols-md-4 pt-3  g-4">
                  <div class="col ">
                    <div class="card h-100ll text-center">
                    <a href="/citizencorner"className='text-decoration-none text-dark'>
                      <img src="  /assets/Image/User.png" class="card-img-top ps-5 pe-5 pt-1" alt="card" />
                      <div class="card-body">
                        <h5 class="card-title">Citizen Service</h5>
                      </div></a>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100 text-center">
                      <img src="/assets/Image/Like.png" class="card-img-top  ps-5 pe-5 pt-1" alt="card" />
                      <div class="card-body">
                        <h5 class="card-title">Our Work</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100 text-center">
                    <a href="/policerecruitment"className='text-decoration-none text-dark'>
                      <img src="/assets/Image/Insurance.png" class="card-img-top  ps-5 pe-5 pt-1" alt="card" />
                      <div class="card-body">
                        <h5 class="card-title">Recruitment</h5>

                      </div>
                      </a>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100 text-center">
                    <a href="/pressrelease"className='text-decoration-none text-dark'>
                      <img src="/assets/Image/Writing.png" class="card-img-top ps-5 pe-5 pt-1" alt="card" />
                      <div class="card-body">
                        <h5 class="card-title">Press Release</h5>

                      </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row row-cols-1 row-cols-md-4 pt-3 g-4">
                  <div class="col">
                 
                    <div class="card h-100 text-center">
                    <a href="/quicklinks"className='text-decoration-none text-dark'>
                      <img src="/assets/Image/Link.png" class="card-img-top  ps-5 pe-5 pt-1" alt="card" />
                      <div class="card-body">
                        <h5 class="card-title">Useful Links</h5>
                      </div>
                      </a>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100 text-center">
                      <a href="/contactus"className='text-decoration-none text-dark'>
                      <img src="/assets/Image/Phone.png" class="card-img-top  ps-5 pe-5 pt-1" alt="Card" />
                      <div class="card-body">
                        <h5 class="card-title">Contact Us</h5>

                      </div>
                      </a>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100 text-center">
                      <a href="https://www.railyatri.in/time-table" className='text-decoration-none text-dark'>
                      <img src="/assets/Image/Google.png" class="card-img-top  ps-5 pe-5 pt-1" alt="Card" />
                      <div class="card-body">
                        <h5 class="card-title">Train Service</h5>

                      </div>
                      </a>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100 text-center">
                      <a href="https://indiarailinfo.com/atlas/sat?z=5&lat=12.97&lng=77.41" className='text-decoration-none text-dark'>
                      <img src="/assets/Image/Search.png" class="card-img-top  ps-5 pe-5 pt-1" alt="card" />
                      <div class="card-body">
                        <h5 class="card-title">Railway Map</h5>

                      </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row row-cols-1 row-cols-md-3 pt-3 g-4 ">
                  <div class="col">
                    <div class="  mb-3">
                      <div class="row bgcolor rounded-pill g-0">
                        <div class="col-md-4">
                          <img src="/assets/Image/Group1.png" class="img-fluid rounded-start pt-3 ps-2  w-75 " alt="card" />
                        </div>
                        <div class="col-md-8">
                          <a href="https://www.maharashtra.gov.in/"className='text-decoration-none text-white'>
                          <div class="card-body">
                            <h5 class="card-title">Maharashtra Gov.</h5>
                          </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class=" mb-3" >
                      <div class="row  rounded-pill bgcolor g-0">
                        <div class="col-md-4">
                          <img src="/assets/Image/Group1.png" class="img-fluid rounded-start pt-3 ps-2  w-75 " alt="card" />
                        </div>
                        <div class="col-md-8">
                          <a href="https://www.mahapolice.gov.in/" className='text-decoration-none text-white'>
                          <div class="card-body">
                            <h5 class="card-title">Maharashtra Police</h5>
                          </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class=" mb-3">
                      <div class="row  rounded-pill bgcolor g-0">
                        <div class="col-md-4">
                          <img src="/assets/Image/Group1.png" class="img-fluid rounded-start pt-3 ps-2  w-75 " alt="card" />
                        </div>
                        <div class="col-md-8">
                          <a href="https://punepolice.gov.in/" className='text-decoration-none text-white'>
                          <div class="card-body text-decoration-none">
                            <h5 class="card-title  ">Pune Police</h5>
                          </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>


              <div class="card  text-white mt-3 mb-3">
                <img src="/assets/Image/Rectangle1.png" class="card-img" alt="card" />
                <div class="card-img-overlay">
                  {/* <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text">Last updated 3 mins ago</p> */}
                  <a class="btn btn-success  position-absolute bottom-0 end-0" href="/photogallery" role="button">Photo Gallery</a>
                  {/* <button type="button" herf="/photogallery" class="btn btn-success text-end">Photo Gallery</button> */}
                </div>
              </div>




            </div>
            <div className="col-xl-3 ">
              <div class="card mt-3 bg-light" >
                <div class="card-body text-center">
                  <h6 class="card-title">EMERGENCY Helpline Number</h6>
                  <h5 class="card-subtitle mb-2  text-danger">1512 / 1800 22 1512</h5>
                  <p class="card-text text-muted">punerailway.service@punepolice.gov.in</p>
                </div>
              </div>
              <div class="card mt-3 bg-light" >
                <div class="card-body text-center">
                  <h6 class="card-title">Whatsapp Helpline Number</h6>
                  <h5 class="card-subtitle mb-2 ">9422327130</h5>
                  <h5 class="card-subtitle mb-2  ">8425099991</h5>
                </div>
              </div>
              <div class="card mt-3 bg-light">
                <div class="card-body text-center">
                  <h6 class="card-title">Control Room (24 x 7)</h6>
                  <h5 class="card-subtitle mb-2 ">020 25541656</h5>
                  <h5 class="card-subtitle mb-2  ">020 23759283</h5>
                </div>
              </div>

              <div className='mt-3'>
                <a class="btn btn-primary" href="/photogallery" role="button">NEWS FLASH</a>
              </div>
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode
                className=""
                containerClass=""
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 1,
                    partialVisibilityGutter: 50
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                <div class="card mt-3" >
                  <div class="card-body text-center">
                    <h6 class="card-title">Press Conference</h6>
                    <h5 class="card-subtitle mb-2  ">18/04/2023</h5>
                  </div>
                </div>
              </Carousel>
              <div class="card mt-3" >
                <div class="card-body text-center">
                  <h4 class="card-title">886549</h4>
                  <h5 class="card-subtitle mb-2 ">number of viewers  for the website</h5>

                </div>
              </div>
              <div class="card mt-3">
                <div class="card-body text-center">
                  <h4 class="card-title">886549</h4>
                  <h5 class="card-subtitle mb-2 ">number of viewers  for the website</h5>

                </div>
              </div>
            </div>

          </div>


          {/* carousel start */}
          <div className='m-2'>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode
            className=""
            containerClass=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 2,
                partialVisibilityGutter: 50
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 1,
                partialVisibilityGutter: 30
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
              {Headline.map((item, index) => (
               
            <div class="  h-100  " >
              <div class="row  g-0">
               
                <div class="col-md-10 text-center d-flex align-items-center">
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p>{item.createdAt}</p> 
                  </div>
                </div>
              </div>
            </div>
              ))}
          </Carousel>
          </div>
          {/* carousel end */}
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Home

