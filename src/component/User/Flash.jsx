import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Flash = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [dailyDutyData, setDailyDutyData] = useState([]);
  const [medicalBillsData, setMedicalBillsData] = useState([]);
  const [incrementListData, setIncrementListData] = useState([]);
  const [compassionListData, setCompassionListData] = useState([]);
  const [retirementListData, setRetirementListData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dailyDutyResponse = await fetch('http://localhost:5000/dailyDutyChart');
        const medicalBillsResponse = await fetch('http://localhost:5000/medicalBill');
        const incrementListResponse = await fetch('http://localhost:5000/incrementList');
        const compassionListResponse = await fetch('http://localhost:5000/compassionList');
        const retirementListResponse = await fetch('http://localhost:5000/retirementList');

        if (dailyDutyResponse.ok) {
          const dailyDutyData = await dailyDutyResponse.json();
          const dailyDutyDataWithAbsoluteUrls = dailyDutyData.map(item => ({
            ...item,
            file: `http://localhost:5000/${item.file}`,
          }));
          setDailyDutyData(dailyDutyDataWithAbsoluteUrls);
        } else {
          console.error('Failed to fetch Daily Duty Flash data');
        }

        if (medicalBillsResponse.ok) {
          const medicalBillsData = await medicalBillsResponse.json();
          const medicalBillsDataWithAbsoluteUrls = medicalBillsData.map(item => ({
            ...item,
            file: `http://localhost:5000/${item.file}`,
          }));
          setMedicalBillsData(medicalBillsDataWithAbsoluteUrls);
        } else {
          console.error('Failed to fetch Medical Bills data');
        }

        if (incrementListResponse.ok) {
          const incrementListData = await incrementListResponse.json();
          const incrementListDataWithAbsoluteUrls = incrementListData.map(item => ({
            ...item,
            file: `http://localhost:5000/${item.file}`,
          }));
          setIncrementListData(incrementListDataWithAbsoluteUrls);
        } else {
          console.error('Failed to fetch Increment List data');
        }

        if (compassionListResponse.ok) {
          const compassionListData = await compassionListResponse.json();
          const compassionListDataWithAbsoluteUrls = compassionListData.map(item => ({
            ...item,
            file: `http://localhost:5000/${item.file}`,
          }));
          setCompassionListData(compassionListDataWithAbsoluteUrls);
        } else {
          console.error('Failed to fetch Compassion List data');
        }

        if (retirementListResponse.ok) {
          const retirementListData = await retirementListResponse.json();
          const retirementListDataWithAbsoluteUrls = retirementListData.map(item => ({
            ...item,
            file: `http://localhost:5000/${item.file}`,
          }));
          setRetirementListData(retirementListDataWithAbsoluteUrls);
        } else {
          console.error('Failed to fetch Retirement List data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // Remove dependencies to avoid unnecessary re-fetching

  useEffect(() => {
    // Update filteredData when searchQuery changes
    handleSearchSubmit();
  }, [searchQuery]);

  const handleView = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
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

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };

  const handleSearchSubmit = () => {
    let filteredData = [];

    switch (activeTab) {
      case 1:
        filteredData = dailyDutyData.filter((item) =>
          item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      case 2:
        filteredData = medicalBillsData.filter((item) =>
          item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      case 3:
        filteredData = incrementListData.filter((item) =>
          item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      case 4:
        filteredData = compassionListData.filter((item) =>
          item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      case 5:
        filteredData = retirementListData.filter((item) =>
          item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      default:
        break;
    }

    setFilteredData(filteredData);
    // Assuming you want to show the popup when no items are found
    const foundItem = (searchQuery ? filteredData : dailyDutyData).length > 0;
    setShowPopup(!foundItem);
  };
  return (
    <>
      <Header />

      <div className="container mt-4">
        <div className="">
          <div className="card-body">
            <h2 className="card-title text-center">Flash</h2>
           
            <div className="col-xl-6 mx-auto mb-3">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search by title"
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

            <div className="d-flex flex-wrap mb-2">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                <button
                  className={`btn btn-primary btn-block btn-lg ${
                    activeTab === 1 ? 'active' : ''
                  }`}
                  onClick={() => toggleTab(1)}
                >
                  Daily Duty Chart
                </button>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                <button
                  className={`btn btn-primary btn-block btn-lg ${
                    activeTab === 2 ? 'active' : ''
                  }`}
                  onClick={() => toggleTab(2)}
                >
                  Medical Bill List
                </button>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                <button
                  className={`btn btn-primary btn-block btn-lg ${
                    activeTab === 3 ? 'active' : ''
                  }`}
                  onClick={() => toggleTab(3)}
                >
                  Increment List
                </button>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                <button
                  className={`btn btn-primary btn-block btn-lg ${
                    activeTab === 4 ? 'active' : ''
                  }`}
                  onClick={() => toggleTab(4)}
                >
                  Compassion List
                </button>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                <button
                  className={`btn btn-primary btn-block btn-lg ${
                    activeTab === 5 ? 'active' : ''
                  }`}
                  onClick={() => toggleTab(5)}
                >
                  Retirement List
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div style={{ marginTop: '20px' }}>
                {activeTab === 1 && (searchQuery ? filteredData : dailyDutyData).length > 0 && (
           <div className="table-responsive">
           <table className="table table-striped">
             <thead className="table-primary">
                        
                          <tr>
                            <th scope="col">Sr No</th>
                            <th scope="col">Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">File</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Updated At</th>
                            <th scope="col">View</th>
                          </tr>
                        </thead>
                        <tbody>
                        {(searchQuery ? filteredData : dailyDutyData).map((item, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.title}</td>
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
                    </div>
                  )}

                  {activeTab === 2 && (searchQuery ? filteredData : medicalBillsData).length > 0 && (
                    <div className="table-responsive">
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
                          { (searchQuery ? filteredData : medicalBillsData) .map((item, index) => (
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
                    </div>
                  )}

                  {activeTab === 3 && (searchQuery ? filteredData :incrementListData).length > 0 && (
                    <div className="table-responsive">
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
                          {(searchQuery ? filteredData : incrementListData).map((item, index) => (
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
                    </div>
                  )}

                  {activeTab === 4 && (searchQuery ? filteredData :compassionListData).length > 0 && (
                    <div className="table-responsive">
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
                          {(searchQuery ? filteredData : compassionListData) .map((item, index) => (
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
                    </div>
                  )}

{activeTab === 5 && (searchQuery ? filteredData :retirementListData).length > 0 && (
                    <div className="table-responsive">
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
                          {(searchQuery ? filteredData : retirementListData) .map((item, index) => (
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
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <h5 className="modal-title">Right to information</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                />
              </div>
              <div className="modal-body">
                {selectedItem && (
                  <>
                    <p>{selectedItem.createdAt}</p>
                    <p>{selectedItem.title}</p>
                    <p>{selectedItem.updatedAt}</p>
                    {/* Display other fields of the selectedItem */}
                  </>
                )}
              </div>
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
      
         {showPopup && (
                  <div className="alert alert-warning" role="alert">
                    No matching entry found!
                  </div>
                )}

                    
      <Footer />
    </>
  );
};

export default Flash;

                         
