import React, { useState, useEffect,useRef } from 'react';
import Sidenav from './Sidenav'
import Topnav from './Topnav'

import { useLocation, useNavigate } from 'react-router-dom';
const AdminIncrementListForm = () => {

  const location = useLocation();
  const { incrementlistToUpdate } = location.state || {};
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    title:'',
    titleInMarathi:'',
    date:'',
    file:null,
    createdAt:'',
    updatedAt:'',

  });

  useEffect(() => {
    if (incrementlistToUpdate) {
      setFormData({
        title: incrementlistToUpdate.title || '',
        titleInMarathi: incrementlistToUpdate.titleInMarathi || '',
        date: incrementlistToUpdate.date || '',
        file: incrementlistToUpdate.file || null,
        createdAt: incrementlistToUpdate.createdAt || '',
        updatedAt: incrementlistToUpdate.updatedAt || '',
      });
    }
  }, [incrementlistToUpdate]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      setFormData({ ...formData, file: e.target.files[0] || null });
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
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('titleInMarathi', formData.titleInMarathi);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('createdAt', formData.createdAt);
      formDataToSend.append('updatedAt', formData.updatedAt);

      // Append file only if it exists
      if (formData.file) {
        formDataToSend.append('pdf', formData.file);
      }
      if (incrementlistToUpdate) {
        // If incrementlistToUpdate exists, perform an update (PUT request)
        url = `http://localhost:5000/incrementList/${incrementlistToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        // If incrementlistToUpdate doesn't exist, create a new entry (POST request)
        url = 'http://localhost:5000/incrementList';
        method = 'POST';
        action = 'created';
      }

      const response = await fetch(url, {
        method: method,
        body: formDataToSend,
      });

      if (response.ok) {
        console.log(`Data ${action} successfully`);
        window.alert(`Data ${action} successfully`);
        navigate('/adminincrementlist')
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
              <a href="/adminincrementlist" className="text-decoration-none text-dark"> <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                  IncrementList</h3>
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
                    <label htmlFor="titleInMarathi" className="form-label">Title in Marathi</label>
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
                    <label htmlFor="date" className="form-label">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}

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
                      ref={fileInputRef}
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

export default AdminIncrementListForm