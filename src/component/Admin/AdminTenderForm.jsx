import React, { useState, useEffect } from 'react';
import Sidenav from './Sidenav'
import Topnav from './Topnav'

import { useLocation, useNavigate } from 'react-router-dom';
const AdminTenderForm = () => {

  const location = useLocation();
  const { tenderToUpdate } = location.state || {};
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
  title:'',
  titleInMarathi:'',
  uploadDate:'',
  lastDateOfSubmission:'',
  file:'',
  createdAt:'',
  updatedAt:'',
  });

  useEffect(() => {
    if (tenderToUpdate) {
      setFormData({
        title: tenderToUpdate.title || '',
        titleInMarathi: tenderToUpdate.titleInMarathi || '',
        uploadDate: tenderToUpdate.uploadDate || '',
        lastDateOfSubmission: tenderToUpdate.lastDateOfSubmission || '',
        file: tenderToUpdate.file || '',
        createdAt: tenderToUpdate.createdAt || '',
        updatedAt: tenderToUpdate.updatedAt || '',
      });
    }
  }, [tenderToUpdate]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
        // Handle file input differently for edit
        const updatedFormData = { ...formData };
        if (e.target.files.length > 0) {
            updatedFormData['pdf'] = e.target.files[0];
        } else {
            delete updatedFormData['pdf'];
        }
        setFormData(updatedFormData);
        
    } else {
        // Handle other inputs
        setFormData({ ...formData, [name]: value });
    }
};
  
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      let url;
      let method;
      let action;
  
      if (tenderToUpdate) {
        // If tenderToUpdate exists, perform an update (PUT request)
        url = `http://localhost:5000/tender/${tenderToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        // If tenderToUpdate doesn't exist, create a new entry (POST request)
        url = 'http://localhost:5000/tender';
        method = 'POST';
        action = 'created';
      }
  
      const formDataWithFile = new FormData();
      
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'pdf' && value instanceof File) {  // Change this to 'pdf'
            formDataWithFile.append(key, value);
        } else if (value !== undefined) {
            formDataWithFile.append(key, value);
        }
    });
  
      
    console.log('Request Payload:', Object.fromEntries(formDataWithFile.entries()));

      const response = await fetch(url, {
        method: method,
        body: formDataWithFile,
      });
  
      if (response.ok) {
        console.log(`Data ${action} successfully`);
        window.alert(`Data ${action} successfully`);
        navigate('/admintender');
      } else {
        const errorText = await response.text();
        console.error('Error:', response.status, errorText); // Log status code and response text
        window.alert(`Error: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
      window.alert(`Error: ${error.message}`);
    }
  };
  
  return (
    <div>
      <div className="">
        {/* <Topnav/> */}
        <div className="row">
          {/* <!-- side nav start --> */}
          <div className="col-md-2 col-xl-2 col-sm-2 " >
            <Sidenav />
          </div>
          {/* <!-- side nav end --> */}

          {/* <!-- Content area start --> */}
          <div className=" col-md-10 col-xl-10 col-sm-10  justify-content-center pe-0 ps-0" >
            {/* Topnav start*/}
            <Topnav />
            {/* topnav end*/}

            <div className="row p-3 ">
              <div className="col-xl-12 bg-light rounded">
              <a href="/admintender" className="text-decoration-none text-dark"> <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                  Tender</h3>
                  </a>
                <hr />

                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                    />
                  </div>


                  <div className="mb-3">
                    <label htmlFor="titleInMarathi" className="form-label">Title In Marathi</label>
                    <input
                      type="text"
                      className="form-control"
                      id="titleInMarathi"
                      name="titleInMarathi"
                      value={formData.titleInMarathi}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="uploadDate" className="form-label">Upload Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="uploadDate"
                      name="uploadDate"
                      value={formData.uploadDate}
                      onChange={handleInputChange}

                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastDateOfSubmission" className="form-label">Last Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="lastDateOfSubmission"
                      name="lastDateOfSubmission"
                      value={formData.lastDateOfSubmission} 
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="file" className="form-label">
                      File
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="file"
                      name="file"
                   
                      accept=".pdf"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="createdAt" className="form-label">Created At</label>
                    <input
                      type="date"
                      className="form-control"
                      id="createdAt"
                      name="createdAt"
                      value={formData.createdAt}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="updatedAt" className="form-label">UpdatedAt</label>
                    <input
                      type="date"
                      className="form-control"
                      id="updatedAt"
                      name="updatedAt"
                      value={formData.updatedAt}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </form>



              </div>




            </div>

            {/* <!-- Content area start --> */}
          </div>
          {/* <Footer /> */}
        </div>

      </div>
    </div>
  )
}

export default AdminTenderForm