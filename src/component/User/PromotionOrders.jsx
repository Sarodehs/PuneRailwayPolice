import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const PromotionOrders = () => {
  const [promotionOrdersData, setPromotionOrdersData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/promotionOrders');
        if (response.ok) {
          const data = await response.json();
          // Prepend the base URL to the file paths if needed
          const promotionOrdersDataWithAbsoluteUrls = data.map(item => ({
            ...item,
            file: `http://localhost:5000/${item.file}`,
          }));
          setPromotionOrdersData(promotionOrdersDataWithAbsoluteUrls);
        } else {
          console.error('Failed to fetch Promotion Orders data');
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

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
    setShowPopup(false);
  };

  const filteredData = promotionOrdersData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderModalBody = () => {
    if (selectedItem) {
      return (
        <div className="modal-body">
         
          <p>{selectedItem.title}</p>
         
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
    const foundItems = promotionOrdersData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setShowPopup(foundItems.length === 0);
  };

  return (
    <div>
      <Header />

      <div className="col-md-10 col-xl-10 col-sm-10 offset-1 justify-content-center pe-0 ps-0">
        <div className="row p-4">
          <div className="col-xl-12">
            <div className="card bgcolortwo">
              <form className="d-flex row m-3">
                <div className="col-xl-2">
                  <h4>Promotion Orders</h4>
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
                          <h5 className="modal-title">Promotion Orders</h5>
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
  );
};

export default PromotionOrders;
