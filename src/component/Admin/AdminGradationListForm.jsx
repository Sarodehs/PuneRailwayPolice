import React, { useState, useEffect } from 'react';
import Sidenav from './Sidenav'
import Topnav from './Topnav'

import { useLocation, useNavigate } from 'react-router-dom';
const AdminGradationListForm = () => {

  const location = useLocation();
  const { gradationListToUpdate } = location.state || {};
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title:'',
   titleInMarathi:'',
   date:'',
   file:'',
   CreatedAt:'',
   UpdatedAt:'',
  });

  useEffect(() => {
    if (gradationListToUpdate) {
      setFormData({
        title: gradationListToUpdate.title || '',
        titleInMarathi : gradationListToUpdate.titleInMarathi || '',
        date: gradationListToUpdate.date || '',
        file: gradationListToUpdate.file || '',
        CreatedAt: gradationListToUpdate.CreatedAt || '',
        UpdatedAt: gradationListToUpdate.UpdatedAt || '',
      });
    }
  }, [gradationListToUpdate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      let url;
      let method;
      let action;

      if (gradationListToUpdate) {
        // If gradationListToUpdate exists, perform an update (PUT request)
        url = `http://localhost:5000/gradationlist/${gradationListToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        // If gradationListToUpdate doesn't exist, create a new entry (POST request)
        url = 'http://localhost:5000/gradationlist';
        method = 'POST';
        action = 'created';
      }

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(`Data ${action} successfully`);
        window.alert(`Data ${action} successfully`);
        navigate('/admingradationlist')
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
              <a href="/admingradationlist" className="text-decoration-none text-dark"> <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                  Gradation List</h3>
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
                    <label htmlFor="file" className="form-label">File</label>
                    <input
                      type="file"
                      className="form-control"
                      id="file"
                      name="file"
                      value={formData.file} 
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="CreatedAt" className="form-label">Created At</label>
                    <input
                      type="date"
                      className="form-control"
                      id="CreatedAt"
                      name="CreatedAt"
                      value={formData.CreatedAt}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="UpdatedAt" className="form-label">Updated At</label>
                    <input
                      type="date"
                      className="form-control"
                      id="UpdatedAt"
                      name="UpdatedAt"
                      value={formData.UpdatedAt}
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

export default AdminGradationListForm