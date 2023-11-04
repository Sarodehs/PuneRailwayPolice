import React, { useState, useEffect } from 'react';
import Sidenav from './Sidenav'
import Topnav from './Topnav'

import { useLocation, useNavigate } from 'react-router-dom';
const AdminSpsMessageForm = () => {

  const location = useLocation();
  const { spsmessageToUpdate } = location.state || {};
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    nameinmarathi: '',
    message: '',
    FromDate: '',
    ToDate: '',
  });

  useEffect(() => {
    if (spsmessageToUpdate) {
      setFormData({
        name: spsmessageToUpdate.name || '',
        nameinmarathi: spsmessageToUpdate.nameinmarathi || '',
        message: spsmessageToUpdate.message || '',
        FromDate: spsmessageToUpdate.FromDate || '',
        ToDate: spsmessageToUpdate.ToDate || '',
      });
    }
  }, [spsmessageToUpdate]);

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

      if (spsmessageToUpdate) {
        // If spsToUpdate exists, perform an update (PUT request)
        url = `http://localhost:5000/spsmessage/${spsmessageToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        // If spsmessageToUpdate doesn't exist, create a new entry (POST request)
        url = 'http://localhost:5000/spsmessage';
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
        navigate('/adminspsmessage')
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
              <a href="/adminspsmessage" className="text-decoration-none text-dark"> <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                  Sps Message</h3>
                  </a>

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
                    <label htmlFor="nameinmarathi" className="form-label">Name in Marathi</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameinmarathi"
                      name="nameinmarathi"
                      value={formData.nameinmarathi}
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
                      name="photo"
                      value={formData.photo}
                      onChange={handleInputChange}

                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="post" className="form-label">Post</label>
                    <input
                      type="text"
                      className="form-control"
                      id="post"
                      name="post"
                      value={formData.post} 
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="postinmarathi" className="form-label">Post In Marathi</label>
                    <input
                      type="text"
                      className="form-control"
                      id="postinmarathi"
                      name="postinmarathi"
                      value={formData.postinmarathi}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  {/* <div className="mb-3">
                    <label htmlFor="about" className="form-label">About</label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="about"
                      name="about"
                      value={formData.about}
                      onChange={handleInputChange}
                      required
                      rows={3}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="aboutinmarathi" className="form-label">About In Marathi</label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="aboutinmarathi"
                      name="aboutinmarathi"
                      value={formData.aboutinmarathi}
                      onChange={handleInputChange}
                      required
                      rows={3}
                    />
                  </div> */}
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

export default AdminSpsMessageForm