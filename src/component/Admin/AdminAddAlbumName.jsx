import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidenav from './Sidenav'
import Topnav from './Topnav'

const AdminAddAlbumName = () => {

  // get all
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



  // deleted
  const [data, setData] = useState([]);
  const handleDelete = async (id) => {
    if (!id) {
      alert('Invalid ID. Delete request not sent.');
      return;
    }

    // Display a confirmation dialog
    const confirmed = window.confirm('Are you sure you want to delete this item?');

    if (!confirmed) {
      return; // User canceled the operation
    }

    try {
      const response = await fetch(`http://localhost:5000/addAlbumName/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the deleted item from the state
        setData(data.filter(item => item.id !== id));
        alert('Data deleted successfully.');
      } else {
        alert('Failed to delete data.');
        console.error('Failed to delete data');
      }
    } catch (error) {
      alert('Error occurred while deleting data.');
      console.error('Error:', error);
    }
  };


  // update
  const navigate = useNavigate();

  const handleUpdate = (item) => {
    navigate('/adminaddalbumnameform', { state: { addalbumnameToUpdate: item } });
  };



  // pagination
  const [rowsToShow, setRowsToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleRowsToShowChange = (e) => {
    setRowsToShow(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to the first page when changing the number of rows
  };

  const totalPages = Math.ceil(AddAlbumName.length / rowsToShow);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * rowsToShow;
  const endIndex = startIndex + rowsToShow;
  const slicedAddAlbumName = AddAlbumName.slice(startIndex, endIndex);



  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleView = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <div>   <div className="">
      {/* <Topnav/> */}
      <div className="row">
        {/* <!-- side nav start --> */}
        <div className="col-md-2 col-xl-2 col-sm-2" >
          <Sidenav />
        </div>
        {/* <!-- side nav end --> */}

        {/* <!-- Content area start --> */}
        <div className=" col-md-10 col-xl-10 col-sm-10 adminbgcolor justify-content-center pe-0 ps-0" >
          {/* Topnav start*/}
          <Topnav />
          {/* topnav end*/}
          {/* Request for service start */}
          <div className="row p-4">
            <div className="col-xl-12">
              <div className="card ">

                <form className="d-flex row m-3 align-items-center">
                  <div className="col-xl-3"> <h4>Add Album Name </h4></div>
                  <div className="col-xl-3"> 
                   <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                   </div>

                  <div className="btn-box col-xl-3">
                    <div className="row align-items-center">
                      <div className="col-auto p-0">
                        <label >Show:</label>
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
                    <a href="/adminaddalbumnameform" className="btn btn-primary"><i className="fa-light fa-plus"></i> Add New</a>
                  </div>
                </form>
                <div className="card-body admintablesroll">
                  <table className="table table-striped">
                    <thead className='table-primary'>
                      <tr>
                        <th scope="col">Sr No.</th>
                        <th scope="col">Album Name In English</th>
                        <th scope="col">Album Name In Marathi</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Album Cover Photo</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">View</th>
                        <th scope="col-xl-1 col-md-1 col-sm-1" colspan="2">Actions</th>
                      </tr>
                    </thead>
                    <tbody> 
                      <tr></tr>
                      {slicedAddAlbumName.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.albumNameInEnglish}</td>
                          <td>{item.albumNameInMarathi}</td>
                          <td>{item.priority}</td>
                          {/* <td>{item.albumCoverPhoto}</td> */}
                          <td><img key={item._id} src={`http://localhost:5000/${item.albumCoverPhoto}`} alt="albumCoverPhoto" className="img-fluid w-25"/></td>
                          <td>{item.createdAt}</td>
                          <td>{item.updatedAt}</td>
                          <td><button type="button" onClick={() => handleView(item)} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> View </button></td>
                           <td type="button" onClick={() => handleUpdate(item)}><span class="material-icons ">edit_square </span></td>
                          <td type="button" onClick={() => handleDelete(item._id)}><span class="material-icons">delete</span></td>

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
                          <h5 class="modal-title" id="staticBackdropLabel">Add Album Name</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                         <div className="modal-body">
                          {selectedItem && (
                            <>
                              <p>{selectedItem.createdAt}</p>
                              <p>{selectedItem.albumNameInEnglish}</p>
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
          {/* Request for service end */}
        </div>
        {/* <!-- Content area start --> */}

        {/* <Footer /> */}
      </div>

    </div></div>
  )
}

export default AdminAddAlbumName

