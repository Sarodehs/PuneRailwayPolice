import React, { useState, useEffect } from 'react';
import Sidenav from './Sidenav'
import Topnav from './Topnav'

import { useLocation, useNavigate } from 'react-router-dom';
const AdminWomenHelpDeskForm = () => {

  const location = useLocation();
  const { womenhelpdeskToUpdate } = location.state || {};
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
                        name:'',
                        nameInMarathi:'',
                        whatsappNumber:'',
                         city:'',
                         createdAt:'',
                         updatedAt:'',

  });

  useEffect(() => {
    if (womenhelpdeskToUpdate) {
      setFormData({
        name: womenhelpdeskToUpdate.name || '',
        nameInMarathi: womenhelpdeskToUpdate.nameInMarathi || '',
        whatsappNumber: womenhelpdeskToUpdate.whatsappNumber || '',
        city: womenhelpdeskToUpdate.city || '',
        createdAt: womenhelpdeskToUpdate.createdAt || '',
        updatedAt: womenhelpdeskToUpdate.updatedAt || '',

      });
    }
  }, [womenhelpdeskToUpdate]);

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

      if (womenhelpdeskToUpdate) {
        // If womenhelpdeskToUpdate exists, perform an update (PUT request)
        url = `http://localhost:5000/womenHelpDesk/${womenhelpdeskToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        // If womenhelpdeskToUpdate doesn't exist, create a new entry (POST request)
        url = 'http://localhost:5000/womenHelpDesk';
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
        navigate('/adminwomenhelpdesk')
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
              <a href="/adminwomenhelpdesk" className="text-decoration-none text-dark"> <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                  WomenHelpDesk</h3>
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
                    <label htmlFor="whatsappNumber" className="form-label">Whatsapp Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="whatsappNumber"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
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
                    <label htmlFor="city" className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      value={formData.city}
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

export default AdminWomenHelpDeskForm