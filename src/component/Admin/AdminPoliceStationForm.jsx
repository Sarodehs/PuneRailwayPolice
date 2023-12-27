import React, { useState, useEffect } from 'react';
import Sidenav from './Sidenav'
import Topnav from './Topnav'

import { useLocation, useNavigate } from 'react-router-dom';
const AdminPoliceStationForm = () => {

  const location = useLocation();
  const { policestationToUpdate } = location.state || {};
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
   name:'',
   nameInMarathi:'',
   photo:'',
   staticVillageMap:'',
   contactNumber:'',
   whatsappNumber:'',
   email:'',
   subDivision:'',
   googleMapLink:'',
   policePatilFile:'',
   createdAt:'',
   updatedAt:'',
  });

  useEffect(() => {
    if (policestationToUpdate) {
      setFormData({
        name: policestationToUpdate.name || '',
        nameInMarathi: policestationToUpdate.nameInMarathi || '',
        photo: policestationToUpdate.photo || '',
        staticVillageMap: policestationToUpdate.staticVillageMap || '',
        contactNumber: policestationToUpdate.contactNumber || '',
        whatsappNumber: policestationToUpdate.whatsappNumber || '',
        email: policestationToUpdate.email || '',
        subDivision: policestationToUpdate.subDivision || '',
        googleMapLink: policestationToUpdate.googleMapLink || '',
        policePatilFile: policestationToUpdate.policePatilFile || '',
        createdAt: policestationToUpdate.createdAt || '',
        updatedAt: policestationToUpdate.updatedAt || '',
      });
    }
  }, [policestationToUpdate]);

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

      if (policestationToUpdate) {
        // If policestationToUpdate exists, perform an update (PUT request)
        url = `http://localhost:5000/policeStation/${policestationToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        // If policestationToUpdate doesn't exist, create a new entry (POST request)
        url = 'http://localhost:5000/policeStation';
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
        navigate('/adminpolicestation')
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
              <a href="/adminpolicestation" className="text-decoration-none text-dark"> <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                  PoliceStation</h3>
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
                    <label htmlFor="staticVillageMap" className="form-label">Static Village Map</label>
                    <input
                      type="text"
                      className="form-control"
                      id="staticVillageMap"
                      name="staticVillageMap"
                      value={formData.staticVillageMap} 
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
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
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
                    <label htmlFor="subDivision" className="form-label">Sub Division</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subDivision"
                      name="subDivision"
                      value={formData.subDivision}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="googleMapLink" className="form-label">Google Map Link</label>
                    <input
                      type="text"
                      className="form-control"
                      id="googleMapLink"
                      name="googleMapLink"
                      value={formData.googleMapLink}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="policePatilFile" className="form-label">Police Patil File</label>
                    <input
                      type="file"
                      className="form-control"
                      id="policePatilFile"
                      name="policePatilFile"
                      value={formData.policePatilFile}
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

export default AdminPoliceStationForm