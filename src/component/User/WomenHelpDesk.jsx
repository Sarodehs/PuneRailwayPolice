import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const WomenHelpDesk = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItemDetails, setSelectedItemDetails] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/womenHelpDesk');
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    const selectedItem = tableData.find((item) => item.city === event.target.value);
    setSelectedItemDetails(selectedItem);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = tableData.filter((item) => {
    const matchesCity = selectedCity ? item.city === selectedCity : true;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedViewItem, setSelectedViewItem] = useState(null);

  const handleViewDetails = (item) => {
    setSelectedViewItem(item);
    setViewModalOpen(true);
  };

  const closeViewModal = () => {
    setSelectedViewItem(null);
    setViewModalOpen(false);
  };

  const renderViewModalBody = () => {
    if (selectedViewItem) {
      return (
        <div className="modal-body">
          <h5 className="card-title fw-bold">{selectedViewItem.name}</h5>
          <p className="card-text">
            <i className="bi bi-telephone"></i> {selectedViewItem.whatsappNumber}
          </p>
          <p className="card-text">
            <i className="bi bi-person"></i> {selectedViewItem.city}
          </p>
          <p className="card-text">
            <i className="bi bi-person-fill"></i> {selectedViewItem.post}
          </p>
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

  const renderTableBody = () => {
    if (filteredData.length === 0) {
      return (
        <tr>
          <td colSpan="6" style={noEntriesStyle}>No entries found</td>
        </tr>
      );
    }

    return filteredData.map((item, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{item.name}</td>
        <td>{item.whatsappNumber}</td>
        <td>{item.city}</td>
        <td>{item.post}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={() => handleViewDetails(item)}
          >
            View
          </button>
        </td>
      </tr>
    ));
  };

  const noEntriesStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'blue',
    padding: '10px',
  };

  return (
    <div>
      <Header />
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/image/ncw_banners.jpg" className="d-block w-100" alt="Home" />
          </div>
          <div className="carousel-item">
            <img src="/assets/Image/ncw_banners_02.jpg" className="d-block w-100" alt="Home" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="mb-3 mt-3">
        <div className="row g-0">
          <div className="col-md-3 offset-2">
            <img src="/assets/Image/womanpro.png" className="img-fluid rounded-start" alt="profile" />
          </div>
          <div className="col-md-5">
            {selectedCity && (
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">{selectedCity} Division</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    {filteredData.map((item, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title fw-bold">{item.name}</h5>
                            <p className="card-text">
                              <i className="bi bi-telephone"></i> {item.whatsappNumber}
                            </p>
                            <p className="card-text">
                              <i className="bi bi-person"></i> {item.city}
                            </p>
                            <p className="card-text">
                              <i className="bi bi-person-fill"></i> {item.post}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-md-10 col-xl-10 col-sm-10 offset-1 justify-content-center pe-0 ps-0">
        <div className="row p-4">
          <div className="col-xl-12">
            <div className="card bgcolortwo">
              <form className="d-flex row m-3  align-items-center">
                <div className="col-xl-3">
                  <h4>Women Help Desk</h4>
                </div>
                <div className="col-xl-3">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search by Name"
                      aria-label="Search"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setSelectedCity('');
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="dropdown col-xl-3">
                  <label htmlFor="divisionSelect">Select City:</label>
                  <select
                    className="form-select"
                    id="divisionSelect"
                    value={selectedCity}
                    onChange={handleCityChange}
                  >
                    <option value="" disabled selected>
                      Select City
                    </option>
                    <option value="Ahmednagar">Ahmednagar</option>
                    <option value="Daund">Daund</option>
                    <option value="Kurdwad">Kurdwad</option>
                    <option value="Miraj">Miraj</option>
                    <option value="Pune">Pune</option>
                    <option value="Solapur">Solapur</option>
                  </select>
                </div>
              </form>
              <div className="card-body">
                <table className="table table-striped">
                  <thead className='table-primary'>
                    <tr>
                      <th scope="col">Sr No.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Whatsapp Number</th>
                      <th scope="col">City</th>
                      <th scope="col">Post</th>
                      <th scope="col">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderTableBody()}
                  </tbody>
                </table>
               
                {/* Modal */}
                {selectedViewItem && (
                  <div className={`modal fade ${viewModalOpen ? 'show' : ''}`}
                    tabIndex="-1"
                    role="dialog"
                    style={{ display: viewModalOpen ? 'block' : 'none' }}
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Women Help Desk</h5>
                          <button
                            type="button"
                            className="btn-close"
                            onClick={closeViewModal}
                          />
                        </div>
                        {renderViewModalBody()}
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={closeViewModal}
                          >
                            Close
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

                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end">
                    <li className="page-item m-2 active">
                      <a className="page-link" href="/#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item m-2"><a className="page-link" href="/#">1</a></li>
                    <li className="page-item m-2"><a className="page-link" href="/#">2</a></li>
                    <li className="page-item m-2"><a className="page-link" href="/#">3</a></li>
                    <li className="page-item m-2 active">
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
  );
}

export default WomenHelpDesk;