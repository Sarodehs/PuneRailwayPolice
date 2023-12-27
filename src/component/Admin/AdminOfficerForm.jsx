import React, { useState, useEffect, useRef } from 'react';
import Sidenav from './Sidenav';
import Topnav from './Topnav';
import { useLocation, useNavigate } from 'react-router-dom';

const AdminOfficerForm = () => {
  const location = useLocation();
  const { officerToUpdate } = location.state || {};
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    priority: '',
    name: '',
    nameInMarathi: '',
    post: '',
    postInMarathi: '',
    serviceType: '',
    serviceTypeInMarathi: '',
    joinDate: '',
    contactNumber: '',
    email: '',
    officerType: '',
    incharge: '',
    facebookLink: '',
    specialUnit: '',
    policeStation: '',
    womenhelpdesk: '',
    createdAt: '',
    updatedAt: '',
    photo: null,
  });

  useEffect(() => {
    // Only set form data if officerToUpdate exists
    if (officerToUpdate) {
      setFormData({
        priority: officerToUpdate.priority || '',
        name: officerToUpdate.name || '',
        nameInMarathi: officerToUpdate.nameInMarathi || '',
        post: officerToUpdate.post || '',
        postInMarathi: officerToUpdate.postInMarathi || '',
        serviceType: officerToUpdate.serviceType || '',
        serviceTypeInMarathi: officerToUpdate.serviceTypeInMarathi || '',
        joinDate: officerToUpdate.joinDate || '',
        contactNumber: officerToUpdate.contactNumber || '',
        email: officerToUpdate.email || '',
        officerType: officerToUpdate.officerType || '',
        incharge: officerToUpdate.incharge || '',
        facebookLink: officerToUpdate.facebookLink || '',
        specialUnit: officerToUpdate.specialUnit || '',
        policeStation: officerToUpdate.policeStation || '',
        womenhelpdesk: officerToUpdate.womenhelpdesk || '',
        createdAt: officerToUpdate.createdAt || '',
        updatedAt: officerToUpdate.updatedAt || '',
        photo: officerToUpdate.photo || null,
      });
    }
  }, [officerToUpdate]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      setFormData({ ...formData, photo: e.target.files[0] || null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const url = officerToUpdate
        ? `http://localhost:5000/officer/${officerToUpdate._id}`
        : 'http://localhost:5000/officer';
  
      const method = officerToUpdate ? 'PUT' : 'POST';
      const action = officerToUpdate ? 'updated' : 'created';
  
      const formDataForUpload = new FormData();
      formDataForUpload.append('priority', formData.priority);
      formDataForUpload.append('name', formData.name);
      formDataForUpload.append('nameInMarathi', formData.nameInMarathi);
      formDataForUpload.append('post', formData.post);
      formDataForUpload.append('postInMarathi', formData.postInMarathi);
      formDataForUpload.append('serviceType', formData.serviceType);
      formDataForUpload.append('serviceTypeInMarathi', formData.serviceTypeInMarathi);
      formDataForUpload.append('joinDate', formData.joinDate);
      formDataForUpload.append('contactNumber', formData.contactNumber);
      formDataForUpload.append('email', formData.email);
      formDataForUpload.append('officerType', formData.officerType);
      formDataForUpload.append('incharge', formData.incharge);
      formDataForUpload.append('facebookLink', formData.facebookLink);
      formDataForUpload.append('specialUnit', formData.specialUnit);
      formDataForUpload.append('policeStation', formData.policeStation);
      formDataForUpload.append('womenhelpdesk', formData.womenhelpdesk);
      formDataForUpload.append('createdAt', formData.createdAt);
      formDataForUpload.append('updatedAt', formData.updatedAt);
      formDataForUpload.append('image', formData.photo);
  
      const response = await fetch(url, {
        method,
        body: formDataForUpload,
        headers: {},
      });
  
      if (response.ok) {
        console.log(`Data ${action} successfully`);
        window.alert(`Data ${action} successfully`);
        navigate('/adminofficer');
      } else {
        const errorData = await response.json();
        throw new Error(`${response.status} - ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
      window.alert(`Error: ${error.message}`);
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
              <a href="/adminofficer" className="text-decoration-none text-dark"> <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
              officer</h3>
                  </a>
                <hr />
   
                <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                <div className="mb-3">
                    <label htmlFor="priority" className="form-label">Priority</label>
                    <input
                      type="number"
                      className="form-control"
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                    />
                  </div>
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

                  {/* <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div> */}

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
                    <label htmlFor="post" className="form-label">Post</label>
                    <input
                      type="text"
                      className="form-control"
                      id="post"
                      name="post"
                      value={formData.post}
                      onChange={handleInputChange}

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
                    <label htmlFor="serviceType" className="form-label">Service Type</label>
                    <input
                      type="text"
                      className="form-control"
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="serviceTypeInMarathi" className="form-label">Service Type in marathi</label>
                    <input
                      type="text"
                      className="form-control"
                      id="serviceTypeInMarathi"
                      name="serviceTypeInMarathi"
                      value={formData.serviceTypeInMarathi}
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
                    <label htmlFor="joinDate" className="form-label">Join Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="joinDate"
                      name="joinDate"
                      value={formData.joinDate}
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
                    <label htmlFor="officerType" className="form-label">Officer Type</label>
                    <input
                      type="text"
                      className="form-control"
                      id="officerType"
                      name="officerType"
                      value={formData.officerType}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="incharge" className="form-label">Incharge</label>
                    <input
                      type="text"
                      className="form-control"
                      id="incharge"
                      name="incharge"
                      value={formData.incharge}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="facebookLink" className="form-label">facebookLink</label>
                    <input
                      type="text"
                      className="form-control"
                      id="facebookLink"
                      name="facebookLink"
                      value={formData.facebookLink}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="specialUnit" className="form-label">Special Unit</label>
                    <input
                      type="text"
                      className="form-control"
                      id="specialUnit"
                      name="specialUnit"
                      value={formData.specialUnit}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="policeStation" className="form-label">Police Station</label>
                    <input
                      type="text"
                      className="form-control"
                      id="policeStation"
                      name="policeStation"
                      value={formData.policeStation}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="womenhelpdesk" className="form-label">Women Help Desk</label>
                    <input
                      type="text"
                      className="form-control"
                      id="womenhelpdesk"
                      name="womenhelpdesk"
                      value={formData.womenhelpdesk}
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

export default AdminOfficerForm