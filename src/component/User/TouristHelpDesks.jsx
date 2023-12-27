import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const TouristHelpDesks = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItemDetails, setSelectedItemDetails] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/touristHelpDesk');
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
    const selectedItem = tableData.find((item) => item.division === event.target.value);
    setSelectedItemDetails(selectedItem);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = tableData.filter((item) => {
    const matchesDivision = selectedDivision ? item.division === selectedDivision : true;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDivision && matchesSearch;
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
            <i className="bi bi-person"></i> {selectedViewItem.division}
          </p>
          <p className="card-text">
            <i className="bi bi-person"></i> {selectedViewItem.email}
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
          <td colSpan="6" style={noEntriesStyle}>
            No entries found
          </td>
        </tr>
      );
    }

    return filteredData.map((item, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{item.name}</td>
        <td>{item.contactNumber}</td>
        <td>{item.email}</td>
        <td>{item.whatsappNumbers.join(', ')}</td>
        <td>{item.division}</td>
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
    
      <div className="mb-3 mt-3">
        <div className="row g-0">
          <div className="col-md-3 offset-2">
            <img src="/assets/Image/help-desk.png" className="img-fluid rounded-start" alt="profile" />
          </div>
          <div className="col-md-5">
            {selectedDivision && (
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">{selectedDivision} Division</h5>
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
                              <i className="bi bi-telephone"></i> {item.contactNumber}
                            </p>
                            <p className="card-text">
                              <i className="bi bi-person"></i> {item.division}
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
              <form className="d-flex row m-3 align-items-center">
                <div className="col-xl-3">
                  <h4>Tourist Help Desk</h4>
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
                        setSelectedDivision('');
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="dropdown col-xl-3">
                  <label htmlFor="divisionSelect">Select Division:</label>
                  <select
                    className="form-select"
                    id="divisionSelect"
                    value={selectedDivision}
                    onChange={handleDivisionChange}
                  >
                    <option value="" disabled selected>
                      Select Division
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
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">Sr No.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Contact Number</th>
                      <th scope="col">Email</th>
                      <th scope="col">Whatsapp Number</th>
                      <th scope="col">Division</th>
                      <th scope="col">Post</th>
                      <th scope="col">View</th>
                    </tr>
                  </thead>
                  <tbody>{renderTableBody()}</tbody>
                </table>

                {/* Modal */}
                {selectedViewItem && (
                  <div  className={`modal fade ${viewModalOpen ? 'show' : ''}`}
                    tabIndex="-1"
                    role="dialog"
                    style={{ display: viewModalOpen ? 'block' : 'none' }}
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Tourist Help Desk</h5>
                          <button type="button" className="btn-close" onClick={closeViewModal} />
                        </div>
                        {renderViewModalBody()}
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" onClick={closeViewModal}>
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
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item m-2">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item m-2">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item m-2">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item m-2 active">
                      <a className="page-link" href="#" aria-label="Next">
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
};

export default TouristHelpDesks;