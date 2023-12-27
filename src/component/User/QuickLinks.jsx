import React, { useState, useEffect } from 'react';
import { TaggedContentCard, FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from './Header';
import Footer from './Footer';


const QuickLinks = () => {
  const [AddAlbumName, setAddAlbumName] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/addAlbumName");
        if (response.ok) {
          const data = await response.json();
          setAddAlbumName(data); // Update the state with the fetched data
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




  const [pressReleaseData, setPressReleaseData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/pressRelease');
        if (response.ok) {
          const data = await response.json();
          // Prepend the base URL to the file paths
          const pressReleaseDataWithAbsoluteUrls = data.map(item => ({
            ...item,
            file: `http://localhost:5000/${item.file}`,
          }));
          setPressReleaseData(pressReleaseDataWithAbsoluteUrls);
        } else {
          console.error('Failed to fetch Press Release data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleView = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const downloadPdf = () => {
    const pdfUrl = selectedItem?.file;

    if (pdfUrl) {
      console.log('PDF URL:', pdfUrl);
      window.open(pdfUrl, '_blank');
    } else {
      console.error('No PDF URL available');
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowPopup(false);
  };

  const filteredData = pressReleaseData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderModalBody = () => {
    if (selectedItem) {
      return (
        <div className="modal-body">
          <p><strong>Created At:</strong> {selectedItem.createdAt}</p>
          <p><strong>Title:</strong> {selectedItem.title}</p>
          <p><strong>Updated At:</strong> {selectedItem.updatedAt}</p>
        </div>
      );
    } else {
      return (
        <div className="modal-body">
          <p>No details available</p>
        </div>
      );
    }
  };

  const handleSearchSubmit = () => {
    const foundItems = pressReleaseData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setShowPopup(foundItems.length === 0);
  };


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
              {AddAlbumName.map((item, index) => (
                <div className='m-1'>
                  <TaggedContentCard
                    href='https://punerailwaypolice.gov.in/'
                    thumbnail={`http://localhost:5000/${item.albumCoverPhoto}`}
                    title={item.albumNameInEnglish}
                    description={item.createdAt}
                    tags={[
                      // 'food',
                      // 'cake',
                      // 'fruits'
                    ]}
                  />
                </div>
              ))}

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
              <div class="row row-cols-4 row-cols-md-4 quiclink">

                {PositiveStory.map((item, index) => (

                  <FlippingCard>
                    <FlippingCardBack>
                      <div class="col">
                        <div class="bgcolortwo rounded">
                          <div class="card-body text-center">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.date}</p>
                            <button    className="btn btn-primary" href={`http://localhost:5000/${item.file}`} target="blank">PDF</button>
                          </div>
                        </div>
                      </div>
                    </FlippingCardBack>
                    <FlippingCardFront>
                      <div class="col">
                        <div class="bgcolortwo rounded">
                          <div class="card-body text-center">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.date}</p>
                            <button    className="btn btn-primary" href={`http://localhost:5000/${item.file}`} target="blank">PDF</button>
                          </div>
                        </div>
                      </div>
                    </FlippingCardFront>
                  </FlippingCard>
                ))}



              </div>
            </div>
          </div>
          <div className="row p-4">
            <div className="col-xl-12">
              <div className="card bgcolortwo">
                <form className="d-flex row m-3">
                  <div className="col-xl-2">
                    <h4>Press Release</h4>
                  </div>
                  <div className="col-xl-3">
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search by Title"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                      />
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSearchSubmit}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead className="table-primary">
                      <tr>
                        <th scope="col">Sr No.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Title in Marathi</th>
                        <th scope="col">Date</th>
                        <th scope="col">File</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.title}</td>
                          <td>{item.titleInMarathi}</td>
                          <td>{item.date}</td>
                          <td>
                            {item.file && item.file.toLowerCase().endsWith('.pdf') ? (
                              <i className="material-icons">picture_as_pdf</i>
                            ) : (
                              <i className="material-icons">insert_drive_file</i>
                            )}
                          </td>
                          <td>{item.createdAt}</td>
                          <td>{item.updatedAt}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => handleView(item)}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Modal */}
                  {selectedItem && (
                    <div
                      className={`modal fade ${modalOpen ? 'show' : ''}`}
                      tabIndex="-1"
                      role="dialog"
                      style={{ display: modalOpen ? 'block' : 'none' }}
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Press Release</h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={closeModal}
                            />
                          </div>
                          {renderModalBody()}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={closeModal}
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={downloadPdf}
                            >
                              PDF
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pop-up for no matching entry */}
                  {showPopup && (
                    <div className="alert alert-warning" role="alert">
                      No matching entry found!
                    </div>
                  )}


                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    </div>
  )
}

export default QuickLinks