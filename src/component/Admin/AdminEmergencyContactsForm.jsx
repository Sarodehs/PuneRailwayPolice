import React, { useState, useEffect } from 'react';
import Sidenav from './Sidenav'
import Topnav from './Topnav'

import { useLocation, useNavigate } from 'react-router-dom';
const AdminEmergencyContactsForm = () => {

  const location = useLocation();
  const { contactToUpdate } = location.state || {};
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
   officeUnitName:'',
   officeUnitNameMarathi:'',
   officersName:'',
   officersNameMarathi:'',
   number:'',
   whatsapp:'',
   email:'',
   CreatedAt:'',
   UpdatedAt:'',
  });

  useEffect(() => {
    if (contactToUpdate) {
      setFormData({
        officeUnitName: contactToUpdate.officeUnitName || '',
        officeUnitNameMarathi: contactToUpdate.officeUnitNameMarathi || '',
        officersName: contactToUpdate.officersName || '',
        officersNameMarathi: contactToUpdate.officersNameMarathi || '',
        number: contactToUpdate.number || '',
        whatsapp: contactToUpdate.whatsapp || '',
        email: contactToUpdate.email || '',
        CreatedAt: contactToUpdate.CreatedAt || '',
        UpdatedAt: contactToUpdate.UpdatedAt || '',
     
      });
    }
  }, [contactToUpdate]);

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

      if (contactToUpdate) {
        // If contactToUpdate exists, perform an update (PUT request)
        url = `http://localhost:5000/emergencyContacts/${contactToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        // If contactToUpdate doesn't exist, create a new entry (POST request)
        url = 'http://localhost:5000/emergencyContacts';
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
        navigate('/adminemergencycontacts')
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
              <a href="/adminemergencycontacts" className="text-decoration-none text-dark"> <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                 Contacts</h3>
                  </a>
                <hr />
    

                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="officeUnitName" className="form-label">Office Unit Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="officeUnitName"
                      name="officeUnitName"
                      value={formData.officeUnitName}
                      onChange={handleInputChange}
                    />
                  </div>


                  <div className="mb-3">
                    <label htmlFor="officeUnitNameMarathi" className="form-label">Office Unit Name Marathi</label>
                    <input
                      type="text"
                      className="form-control"
                      id="officeUnitNameMarathi"
                      name="officeUnitNameMarathi"
                      value={formData.officeUnitNameMarathi}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="officersName" className="form-label">Officers Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="officersName"
                      name="officersName"
                      value={formData.officersName}
                      onChange={handleInputChange}

                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="officersNameMarathi" className="form-label">Officers Name Marathi</label>
                    <input
                      type="text"
                      className="form-control"
                      id="officersNameMarathi"
                      name="officersNameMarathi"
                      value={formData.officersNameMarathi} 
                      onChange={handleInputChange}
                      required
                    />
                  </div>                  
                  <div className="mb-3">
                    <label htmlFor="number" className="form-label">Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="number"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="whatsapp" className="form-label">Whatsapp</label>
                    <input
                      type="number"
                      className="form-control"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
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

export default AdminEmergencyContactsForm