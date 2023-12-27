import React, { useState, useEffect, useRef } from 'react';
import Sidenav from './Sidenav';
import Topnav from './Topnav';
import { useLocation, useNavigate } from 'react-router-dom';

const AdminCircularsForm = () => {
  const location = useLocation();
  const { circularsToUpdate } = location.state || {};
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: '',
    titleInMarathi: '',
    date: '',
    file: null,
    createdAt: '',
    updatedAt: '',
  });

  useEffect(() => {
    if (circularsToUpdate) {
      setFormData({
        title: circularsToUpdate.title || '',
        titleInMarathi: circularsToUpdate.titleInMarathi || '',
        date: circularsToUpdate.date || '',
        file: circularsToUpdate.file || null,
        createdAt: circularsToUpdate.createdAt || '',
        updatedAt: circularsToUpdate.updatedAt || '',
      });
    }
  }, [circularsToUpdate]);

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

      if (circularsToUpdate) {
        url = `http://localhost:5000/circulars/${circularsToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        url = 'http://localhost:5000/circulars';
        method = 'POST';
        action = 'created';
      }

      const formDataForUpload = new FormData();
      formDataForUpload.append('title', formData.title);
      formDataForUpload.append('titleInMarathi', formData.titleInMarathi);
      formDataForUpload.append('date', formData.date);
      formDataForUpload.append('pdf', formData.file);
      formDataForUpload.append('createdAt', formData.createdAt);
      formDataForUpload.append('updatedAt', formData.updatedAt);

      console.log('Request Payload:', formDataForUpload);

      const response = await fetch(url, {
        method: method,
        body: formDataForUpload,
        // Add headers if needed, especially for handling file uploads
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server Error:', errorText);
        throw new Error(`${response.status} - ${errorText}`);
      }

      const responseData = await response.json();
      console.log('Response Data:', responseData);

      window.alert(`Data ${action} successfully`);
      navigate('/admincirculars');
    } catch (error) {
      console.error('Error:', error.message);
      window.alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <div className="">
        <div className="row">
          <div className="col-md-2 col-xl-2 col-sm-2 ">
            <Sidenav />
          </div>
          <div className=" col-md-10 col-xl-10 col-sm-10  justify-content-center pe-0 ps-0">
            <Topnav />
            <div className="row p-3 ">
              <div className="col-xl-12 bg-light rounded">
                <a href="/admincirculars" className="text-decoration-none text-dark">
                  {' '}
                  <h3 className="m-3">
                    {' '}
                    <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                    Circulars
                  </h3>
                </a>
                <hr />

                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
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
                    <label htmlFor="titleInMarathi" className="form-label">
                      Title In Marathi
                    </label>
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
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>
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
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="createdAt" className="form-label">
                      Created At
                    </label>
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
                    <label htmlFor="updatedAt" className="form-label">
                      Updated At
                    </label>
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
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCircularsForm;
