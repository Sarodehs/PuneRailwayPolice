import React, { useState, useEffect } from 'react';
import Sidenav from './Sidenav'
import Topnav from './Topnav'

import { useLocation, useNavigate } from 'react-router-dom';
const AdminWomenCityTypesForm = () => {

  const location = useLocation();
  const { womencitytypesToUpdate } = location.state || {};
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cityTitle: '',
   cityTitleInMarathi: '',
   createdAt:'',
   updatedAt:'',
  });

  useEffect(() => {
    if (womencitytypesToUpdate) {
      setFormData({
        cityTitle: womencitytypesToUpdate.cityTitle || '',
       cityTitleInMarathi: womencitytypesToUpdate.nameinmarathi || '',
        createdAt: womencitytypesToUpdate.createdAt || '',
        updatedAt: womencitytypesToUpdate.updatedAt || '',
       
      });
    }
  }, [womencitytypesToUpdate]);

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

      if (womencitytypesToUpdate) {
        // If womencitytypesToUpdate exists, perform an update (PUT request)
        url = `http://localhost:5000/womenCityType/${womencitytypesToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        // If womencitytypesToUpdate doesn't exist, create a new entry (POST request)
        url = 'http://localhost:5000/womenCityType';
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
        navigate('/adminwomencitytypes')
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
              <a href="/adminwomencitytypes" className="text-decoration-none text-dark"> <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                  WomenCityTypes</h3>
                  </a>
                <hr />

                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="cityTitle" className="form-label">City Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cityTitle"
                      name="cityTitle"
                      value={formData.cityTitle}
                      onChange={handleInputChange}
                    />
                  </div>


                  <div className="mb-3">
                    <label htmlFor="cityTitleInMarathi" className="form-label">City in Marathi</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cityTitleInMarathi"
                      name="cityTitleInMarathi"
                      value={formData.cityTitleInMarathi}
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

export default AdminWomenCityTypesForm