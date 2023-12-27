import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const RightToInformation = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [rtiData, setRtiData] = useState([]);
  const [infoProvidedUnderRTIData, setInfoProvidedUnderRTIData] = useState([]);
  const [annualReportData, setAnnualReportData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rtiResponse = await fetch('http://localhost:5000/rightToInformation');
        const infoProvidedResponse = await fetch('http://localhost:5000/informationProvidedByRti');
        const annualReportResponse = await fetch('http://localhost:5000/annualAdminReport');
        
        if (rtiResponse.ok) {
          const rtiData = await rtiResponse.json();
          // Prepend the base URL to the file paths
          const rtiDataUrls = rtiData.map(item => ({
            ...item,
            file: `http://localhost:5000/${item.file}`,
          }));
          setRtiData(rtiDataUrls);
        } else {
          console.error('Failed to fetch RTI data');
        }

        if (infoProvidedResponse.ok) {
          const infoProvidedData = await infoProvidedResponse.json();
          setInfoProvidedUnderRTIData(infoProvidedData);
        } else {
          console.error('Failed to fetch Information Provided By RTI data');
        }

        if (annualReportResponse.ok) {
          const annualReportData = await annualReportResponse.json();
          setAnnualReportData(annualReportData);
        } else {
          console.error('Failed to fetch Annual Report data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

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

  return (
    <>
      <Header />

      <div className="container mt-4">
        <div className="">
          <div className="card-body">
            <h2 className="card-title ">Right To Information</h2>
            <div className="d-grid gap-2 col-6  d-flex mb-2 mx-auto">
              <button
                className={`btn btn-primary btn-block btn-lg mr-2 ${
                  activeTab === 1 ? 'active' : ''
                }`}
                onClick={() => toggleTab(1)}
              >
                RTI
              </button>
              <button
                className={`btn btn-primary btn-block btn-lg mr-2 ${
                  activeTab === 2 ? 'active' : ''
                }`}
                onClick={() => toggleTab(2)}
              >
                Information Provided By RTI
              </button>
              <button
                className={`btn btn-primary btn-block btn-lg mr-2 ${
                  activeTab === 3 ? 'active' : ''
                }`}
                onClick={() => toggleTab(3)}
              >
                Annual Report
              </button>
            </div>
            <div className="row">
              <div className="col-12">
                <div style={{ marginTop: '20px' }}>
                  {activeTab === 1 && (
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
                          {rtiData.map((item, index) => (
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
                                  onClick={() => handleView(item)}
                                  className="btn btn-primary"
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

                  {activeTab === 2 && (
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
                          {infoProvidedUnderRTIData.map((item, index) => (
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
                                  onClick={() => handleView(item)}
                                  className="btn btn-primary"
                                  data-bs-toggle="modal"
                                  data-bs-target="#staticBackdrop"
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

                  {activeTab === 3 && (
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
                          {annualReportData.map((item, index) => (
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
                                  onClick={() => handleView(item)}
                                  className="btn btn-primary"
                                  data-bs-toggle="modal"
                                  data-bs-target="#staticBackdrop"
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
    

      <Footer />
    </>
  );
};

export default RightToInformation;
