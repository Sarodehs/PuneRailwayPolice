import React from 'react'
import { TaggedContentCard } from 'react-ui-cards';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from './Header';
import Footer from './Footer';


const QuickLinks = () => {
  return (
<div>
      <div>
        <Header />
        <div>
        <div>

         
           {/* carousel start */}
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
                items: 3,
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
            <div className='m-1'>
              <TaggedContentCard
                href='https://punerailwaypolice.gov.in/'
                thumbnail='/assets/Image/Album/1.png'
                title='पेट्रोल पंप भूमीपूजन समारंभ'
                description='PUNE'
                tags={[
                  // 'food',
                  // 'cake',
                  // 'fruits'
                ]}
              />
            </div>
            <div className='m-1'>
              <TaggedContentCard
                href='https://punerailwaypolice.gov.in/'
                thumbnail='/assets/Image/Album/1.png'
                title='Yoga Day 2019'
                description='PUNE'
                tags={[
                  // 'food',
                  // 'cake',
                  // 'fruits'
                ]}
              />
            </div>
            <div className='m-1'>
              <TaggedContentCard
                href='https://punerailwaypolice.gov.in/'
                thumbnail='/assets/Image/Album/6.png'
                title='World Drugs Day 26th Jun 2019'
                description='PUNE'
                tags={[
                  // 'food',
                  // 'cake',
                  // 'fruits'
                ]}
              />
            </div>
            <div className='m-1'>
              <TaggedContentCard
                href='https://punerailwaypolice.gov.in/'
                thumbnail='/assets/Image/Album/7.png'
                title='In Service career development training for police man'
                description='PUNE'
                tags={[
                  // 'food',
                  // 'cake',
                  // 'fruits'
                ]}
              />
            </div>
          </Carousel>
          {/* carousel end */}
        </div>
        <div className='bgcolorone pt-5'>
        <div class="row row-cols-1 row-cols-md-4 pt-3  g-4">
                <div class="col ">
                  <div class=" h-100 text-center">
                    <img src="  /assets/Image/cctnsLogoNew.png" class="card-img-top w-25 mx-auto pt-3" alt="card" />
                    <div class="card-body">
                      <h5 class="card-title">CCTNS PUBLIC PORTAL</h5>
                      <a href="www.mhpolice.maharashtra.gov.in" class="card-link">View Website</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class=" h-100 text-center">
                    <img src="/assets/Image/r_logo.png" class="card-img-top w-50 mx-auto pt-3" alt="card" />
                    <div class="card-body">
                      <h5 class="card-title">R-Track Vehicle Tracking System</h5>
                      <a href="http://grp.rtracksystem.com/www/Index.aspx" class="card-link">View Website</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class=" h-100 text-center">
                    <img src="/assets/Image/logoindia.png" class="card-img-top w-75 mx-auto pt-3" alt="card" />
                    <div class="card-body">
                      <h5 class="card-title">Indian Government</h5>
                      <a href="https://www.india.gov.in/" class="card-link">View Website</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class=" h-100 text-center">
                    <img src="/assets/Image/ourLogo.png" class="card-img-top w-25 mx-auto pt-3" alt="card" />
                    <div class="card-body">
                      <h5 class="card-title">Mumbai Police</h5>
                      <a href="https://mumbaipolice.maharashtra.gov.in/index.asp" class="card-link">View Website</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row row-cols-1 row-cols-md-4 pt-3 g-4">
                <div class="col">
                  <div class=" h-100 text-center">
                    <img src="/assets/Image/logopunepolice.png" class="card-img-top w-25 mx-auto pt-3" alt="card" />
                    <div class="card-body">
                      <h5 class="card-title">Pune Police</h5>
                      <a href="https://punepolice.gov.in/" class="card-link">View Website</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class=" h-100 text-center">
                    <img src="/assets/Image/logo-bigdd.png" class="card-img-top w-25 mx-auto pt-3" alt="Card" />
                    <div class="card-body">
                      <h5 class="card-title">CBI</h5>
                      <a href="https://cbi.gov.in/" class="card-link">View Website</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class=" h-100 text-center">
                    <img src="/assets/Image/logomahacid.png" class="card-img-top w-25 mx-auto pt-3" alt="Card" />
                    <div class="card-body">
                      <h5 class="card-title">Maharashtra CID</h5>
                      <a href="https://mahacid.gov.in/" class="card-link">View Website</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class=" h-100 text-center">
                    <img src="/assets/Image/mahaPolicelLogo.png" class="card-img-top w-25 mx-auto pt-3" alt="card" />
                    <div class="card-body">
                      <h5 class="card-title">Maharashtra Police</h5>
                      <a href="https://www.mahapolice.gov.in/" class="card-link">View Website</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row row-cols-1 row-cols-md-4 pt-3 g-4">
                <div class="col">
                  <div class=" h-100 text-center">
                    <img src="/assets/Image/ourLogo.png" class="card-img-top w-25 mx-auto pt-3" alt="card" />
                    <div class="card-body">
                      <h5 class="card-title">Cyber Cell Mumbai</h5>
                      <a href="http://cybercellmumbai.gov.in/" class="card-link">View Website</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class=" h-100 text-center">
                    <img src="/assets/Image/logoindianrail.png" class="card-img-top w-25 mx-auto pt-3" alt="Card" />
                    <div class="card-body">
                      <h5 class="card-title">Indian Rail Booking</h5>
                      <a href="https://www.irctc.co.in/eticketing/loginHome.jsf" class="card-link">View Website</a>
                    </div>
                  </div>
                </div>
              
              </div>
        </div>


        <div>
        <div>
            <div class="row row-cols-1 row-cols-md-2 pt-3 g-4">
              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <Footer />

      </div>
    </div>
  )
}

export default QuickLinks