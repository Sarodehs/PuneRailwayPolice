import React, { useState, useEffect,useRef } from 'react';
import Sidenav from './Sidenav'
import Topnav from './Topnav'

import { useLocation, useNavigate } from 'react-router-dom';
const AdminSpsForm = () => {

  const location = useLocation();
  const { spsToUpdate } = location.state || {};
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    srNumber:'',
    nameInMarathi: '',
    photo: null,
    fromDate: '',
    toDate: '',
    createdAt:'',
    updatedAt:'',
  });

  useEffect(() => {
    if (spsToUpdate) {
      setFormData({
        srNumber: spsToUpdate.srNumber || '',
        name: spsToUpdate.name || '',
        nameInMarathi: spsToUpdate.nameInMarathi || '',
        photo: spsToUpdate.photo || null,
        fromDate: spsToUpdate.fromDate || '',
        toDate: spsToUpdate.toDate || '',
        createdAt: spsToUpdate.createdAt || '',
        updatedAt: spsToUpdate.updatedAt || '',
      });
    }
  }, [spsToUpdate]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      setFormData({ ...formData, image: e.target.files[0] || null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      let url;
      let method;
      let action;

      if (spsToUpdate) {
        // If spsToUpdate exists, perform an update (PUT request)
        url = `http://localhost:5000/sp/${spsToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        // If spsToUpdate doesn't exist, create a new entry (POST request)
        url = 'http://localhost:5000/sp';
        method = 'POST';
        action = 'created';
      }
     
      const formDataForUpload = new FormData();
formDataForUpload.append('name', formData.name);
formDataForUpload.append('srNumber', formData.srNumber);
formDataForUpload.append('nameInMarathi', formData.nameInMarathi);
formDataForUpload.append('fromDate', formData.fromDate);
formDataForUpload.append('toDate', formData.toDate);
formDataForUpload.append('createdAt', formData.createdAt);
formDataForUpload.append('updatedAt', formData.updatedAt);


  formDataForUpload.append('image', formData.image);

      const response = await fetch(url, {
        method: method,
        body: formDataForUpload,
      });

      if (response.ok) {
        console.log(`Data ${action} successfully`);
        window.alert(`Data ${action} successfully`);
        navigate('/adminsps')
      } else {
        const errorData = await response.json();
        throw new Error(`${response.status} - ${errorData.message}`);

      }
    } catch (error) {
      console.error('Error:', error.message);
      window.alert('Error:', error.message);
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
              <a href="/adminsps" className="text-decoration-none text-dark"> <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                  Sps</h3>
                  </a>
                <hr />

                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="srNumber" className="form-label"> Sr Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="srNumber"
                      name="srNumber"
                      value={formData.srNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="nameInMarathi" className="form-label">Name in Marathi</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameInMarathi"
                      name="nameInMarathi"
                      value={formData.nameInMarathi}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                 
                  <div className="mb-3">
                    <label htmlFor="photo" className="form-label">Photo</label>
                    <input
                      type="file"
                      className="form-control"
                      id="photo"
                      name="image"
                      ref={fileInputRef}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="fromDate" className="form-label">From Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="fromDate"
                      name="fromDate"
                      value={formData.fromDate} 
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="toDate" className="form-label">To Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="toDate"
                      name="toDate"
                      value={formData.toDate}
                      onChange={handleInputChange}
                      required
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
                    <label htmlFor="updatedAt" className="form-label">Updated At</label>
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

export default AdminSpsForm