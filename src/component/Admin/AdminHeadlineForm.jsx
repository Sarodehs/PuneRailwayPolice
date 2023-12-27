import React, { useState, useEffect } from 'react';
import Sidenav from './Sidenav'
import Topnav from './Topnav'

import { useLocation, useNavigate } from 'react-router-dom';
const AdminHeadlineForm = () => {

  const location = useLocation();
  const { headlineToUpdate } = location.state || {};
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    titleInMarathi: '',
    priority: '',
    createdAt:'',
  
   
  });

  useEffect(() => {
    if (headlineToUpdate) {
      setFormData({
        title: headlineToUpdate.title || '',
        titleInMarathi: headlineToUpdate.titleInMarathi || '',
        link: headlineToUpdate.link || '',
        file: headlineToUpdate.file || '',
        priority: headlineToUpdate.priority || '',
      });
    }
  }, [headlineToUpdate]);

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

      if (headlineToUpdate) {
        // If headlineToUpdate exists, perform an update (PUT request)
        url = `http://localhost:5000/headlines/${headlineToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        // If headlineToUpdate doesn't exist, create a new entry (POST request)
        url = 'http://localhost:5000/headlines';
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
        navigate('/adminheadline')
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
              <a href="/adminheadline" className="text-decoration-none text-dark"> <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
              Headline</h3>
                  </a>
                <hr />

                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Name</label>
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
                    <label htmlFor="titleInMarathi" className="form-label">Name in Marathi</label>
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
                    <label htmlFor="priority" className="form-label">Priority</label>
                    <input
                      type="text"
                      className="form-control"
                      id="priority"
                      name="priority"
                      value={formData.priority}
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

export default AdminHeadlineForm