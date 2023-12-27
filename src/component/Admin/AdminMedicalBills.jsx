import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidenav from './Sidenav';
import Topnav from './Topnav';

const AdminMedicalBills = () => {
  // State for storing medical bills data
  const [medicalBills, setMedicalBills] = useState([]);

  // State for handling pagination
  const [rowsToShow, setRowsToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  // Fetch medical bills data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/medicalBill');
        if (response.ok) {
          const data = await response.json();
          setMedicalBills(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  // Handle delete operation
  const handleDelete = async (id) => {
    if (!id) {
      alert('Invalid ID. Delete request not sent.');
      return;
    }

    const confirmed = window.confirm('Are you sure you want to delete this item?');

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/medicalBill/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMedicalBills((prevMedicalBills) => prevMedicalBills.filter((item) => item._id !== id));
        alert('Data deleted successfully.');
      } else {
        alert('Failed to delete data. Server response: ' + response.status);
        console.error('Failed to delete data');
      }
    } catch (error) {
      alert('Error occurred while deleting data.');
      console.error('Error:', error);
    }
  };

  // Handle update operation
  const handleUpdate = (item) => {
    navigate('/adminmedicalbillsform', { state: { medicalbillsToUpdate: item } });
  };

  // Handle changes in the number of rows to show
  const handleRowsToShowChange = (e) => {
    setRowsToShow(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(medicalBills.length / rowsToShow);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate start and end index for the current page
  const startIndex = (currentPage - 1) * rowsToShow;
  const endIndex = startIndex + rowsToShow;
  const slicedMedicalBills = medicalBills.slice(startIndex, endIndex);


  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleView = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };



  return (
    <div>
      <div className="row">
        <div className="col-md-2 col-xl-2 col-sm-2">
          <Sidenav />
        </div>
        <div className="col-md-10 col-xl-10 col-sm-10 adminbgcolor justify-content-center pe-0 ps-0">
          <Topnav />
          <div className="row p-4">
            <div className="col-xl-12">
              <div className="card">
                <form className="d-flex row m-3 align-items-center">
                  <div className="col-xl-3">
                    <h4>MedicalBills </h4>
                  </div>
                  <div className="col-xl-3">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                  </div>
                  <div className="btn-box col-xl-3">
                    <div className="row align-items-center">
                      <div className="col-auto p-0">
                        <label>Show:</label>
                      </div>
                      <div className="col-auto p-0">
                        <select value={rowsToShow} onChange={handleRowsToShowChange} className="form-control">
                          <option value={10}>10</option>
                          <option value={20}>20</option>
                          <option value={25}>25</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="btn-box col-xl-3">
                    <a href="/adminmedicalbillsform" className="btn btn-primary">
                      <i className="fa-light fa-plus"></i> Add New
                    </a>
                  </div>
                </form>
                <div className="card-body admintablesroll">
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
                        <th scope="col-xl-1 col-md-1 col-sm-1" colSpan="2">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {slicedMedicalBills.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.title}</td>
                          <td>{item.titleInMarathi}</td>
                          <td>{item.date}</td>
                          <td>
                            <a href={`http://localhost:5000/${item.file}`} target="_blank">
                            
                                {item.file && item.file.toLowerCase().endsWith('.pdf') ? (
                                  <i className="material-icons text-dark">picture_as_pdf</i>
                                ) : (
                                  <i className="material-icons text-dark">insert_drive_file</i>
                                )}
                            
                            </a>
                          </td>
                          <td>{item.createdAt}</td>
                          <td>{item.updatedAt}</td>
                          <td><button type="button" onClick={() => handleView(item)} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> View </button></td>
                        
                          <td type="button" onClick={() => handleUpdate(item)}>
                            <span className="material-icons">edit_square</span>
                          </td>
                          <td type="button" onClick={() => handleDelete(item._id)}>
                            <span className="material-icons">delete</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                      <li className={`page-item m-2 ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                          &laquo;
                        </button>
                      </li>
                      {[...Array(totalPages).keys()].map((page) => (
                        <li key={page + 1} className={`page-item m-2 ${currentPage === page + 1 ? 'active' : ''}`}>
                          <button className="page-link" onClick={() => handlePageChange(page + 1)}>
                            {page + 1}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item m-2 ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                          &raquo;
                        </button>
                      </li>
                    </ul>
                  </nav>
                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"  style={{ display: modalOpen ? 'block' : 'none' }}>
                              <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">MedicalBills</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                         <div className="modal-body">
                          {selectedItem && (
                            <>
                              <p>{selectedItem.createdAt}</p>
                              <p>{selectedItem.title}</p>
                              {/* Display other fields of the selectedItem */}
                            </>
                          )}
                        </div> </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          {/* <button type="button" class="btn btn-primary">PDF</button> */}
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
  );
};

export default AdminMedicalBills;
