import React, { useState, useEffect } from 'react';
import Sidenav from './Sidenav'
import Topnav from './Topnav'

import { useLocation, useNavigate } from 'react-router-dom';
const AdminContactOfficerForm = () => {

  const location = useLocation();
  const { contactofficerToUpdate } = location.state || {};
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    nameInMarathi: '',
    contactNumber: '',
    emailDivision: '',
    policeStationForEmail: '',
    policeStationForEmailInMarathi: '',
    whatsappNumberOne: '',
    whatsappNumberTwo: '',
    whatsappNumberThree: '',
    post: '',
    postInMarathi: '',
    division: '',
    createdAt:'',
    updatedAt:'',
  });

  useEffect(() => {
    if (contactofficerToUpdate) {
      setFormData({
        name: contactofficerToUpdate.name || '',
        nameInMarathi: contactofficerToUpdate.nameInMarathi || '',
        contactNumber: contactofficerToUpdate.contactNumber || '',
        email: contactofficerToUpdate.email || '',
        policeStationForEmail: contactofficerToUpdate.policeStationForEmail || '',
        policeStationForEmailInMarathi: contactofficerToUpdate.policeStationForEmailInMarathi|| '',
        whatsappNumberOne: contactofficerToUpdate.whatsappNumberOne || '',
        whatsappNumberTwo: contactofficerToUpdate.whatsappNumberTwo || '',
        whatsappNumberThree: contactofficerToUpdate.whatsappNumberThree || '',
        post: contactofficerToUpdate.post || '',
        postInMarathi: contactofficerToUpdate.postInMarathi || '',
        division: contactofficerToUpdate.division || '',
        createdAt: contactofficerToUpdate.createdAt || '',
        updatedAt: contactofficerToUpdate.updatedAt || '',
      });
    }
  }, [contactofficerToUpdate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Name: ${name}, Value: ${value}`);
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      let url;
      let method;
      let action;

      console.log('URL:', url);
    console.log('Method:', method);
    console.log('FormData:', formData);

      if (contactofficerToUpdate) {
        // If contactofficerToUpdate exists, perform an update (PUT request)
        url = `http://localhost:5000/contactOfficer/${contactofficerToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        // If contactofficerToUpdate doesn't exist, create a new entry (POST request)
        url = 'http://localhost:5000/contactOfficer';
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
        navigate('/admincontactofficer')
      } else {
        const errorData = await response.json();
        console.error('Server Error:', errorData);
        window.alert(`Server Error: ${errorData.message}`);

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
            <div style={{ overflowX: 'auto', maxWidth: '100%' }}
            className=" col-md-10 col-xl-10 col-sm-10  justify-content-center pe-0 ps-0"
            >
            <div className="row p-3 ">
              <div className="col-xl-12 bg-light rounded">
              <a href="/admincontactofficer" className="text-decoration-none text-dark"> <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                  ContactOfficer</h3>
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
                    <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}

                    />
                  </div>
              
                  <div className="mb-3">
                    <label htmlFor="policeStationForEmail" className="form-label">Email If Select Email Division</label>
                    <input
                      type="email"
                      className="form-control"
                      id="policeStationForEmail"
                      name="policeStationForEmail"
                      value={formData.policeStationForEmail} 
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="policeStationForEmailInMarathi" className="form-label">Police Station for Email Id in marathi</label>
                    <input
                      type="email"
                      className="form-control"
                      id="policeStationForEmailInMarathi"
                      name="policeStationForEmailInMarathi"
                      value={formData.policeStationForEmailInMarathi}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="whatsappNumberOne" className="form-label">Whatsapp Number One</label>
                    <input
                      type="number"
                      className="form-control"
                      id="whatsappNumberOne"
                      name="whatsappNumberOne"
                      value={formData.whatsappNumberOne}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="whatsappNumberTwo" className="form-label">Whatsapp Number Two</label>
                    <input
                      type="number"
                      className="form-control"
                      id="whatsappNumberTwo"
                      name="whatsappNumberTwo"
                      value={formData.whatsappNumberTwo}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="whatsappNumberThree" className="form-label">Whatsapp Number Three </label>
                    <input
                      type="number"
                      className="form-control"
                      id="whatsappNumberThree"
                      name="whatsappNumberThree"
                      value={formData.whatsappNumberThree}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="post" className="form-label">Post </label>
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
                    <label htmlFor="postInMarathi" className="form-label">Post In Marathi</label>
                    <input
                      type="text"
                      className="form-control"
                      id="postInMarathi"
                      name="postInMarathi"
                      value={formData.postInMarathi}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="division" className="form-label">Division</label>
                    <input
                      type="text"
                      className="form-control"
                      id="division"
                      name="division"
                      value={formData.division}
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


<div className="mb-3">
  <label htmlFor="emailDivision" className="form-label">Email Division</label>
  <input
    type="text"
    className="form-control"
    id="emailDivision"
    name="emailDivision"
    value={formData.emailDivision}
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
    </div>
  )
}

export default AdminContactOfficerForm