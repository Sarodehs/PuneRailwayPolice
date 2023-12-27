import React, { useState, useEffect, useRef } from 'react';
import Sidenav from './Sidenav';
import Topnav from './Topnav';

import { useLocation, useNavigate } from 'react-router-dom';

const AdminAnnualAdminReportForm = () => {
  const location = useLocation();
  const { annualAdminReportToUpdate } = location.state || {};
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
    if (annualAdminReportToUpdate) {
      setFormData({
        title: annualAdminReportToUpdate.title || '',
        titleInMarathi: annualAdminReportToUpdate.titleInMarathi || '',
        date: annualAdminReportToUpdate.date || '',
        file: annualAdminReportToUpdate.file || null,
        createdAt: annualAdminReportToUpdate.createdAt || '',
        updatedAt: annualAdminReportToUpdate.updatedAt || '',
      });
    }
  }, [annualAdminReportToUpdate]);

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

      if (annualAdminReportToUpdate) {
        // If annualAdminReportToUpdate exists, perform an update (PUT request)
        url = `http://localhost:5000/annualAdminReport/${annualAdminReportToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        // If annualAdminReportToUpdate doesn't exist, create a new entry (POST request)
        url = 'http://localhost:5000/annualAdminReport';
        method = 'POST';
        action = 'created';
      }

      const formDataForUpload = new FormData();
      formDataForUpload.append('title', formData.title);
      formDataForUpload.append('titleInMarathi', formData.titleInMarathi);
      formDataForUpload.append('date', formData.date);
      formDataForUpload.append('createdAt', formData.createdAt);
      formDataForUpload.append('updatedAt', formData.updatedAt);
      // Append file only if it exists
      if (formData.file) {
       formDataForUpload.append('pdf', formData.file);
     }

      const response = await fetch(url, {
        method: method,
        body: formDataForUpload,
      });
      if (response.ok) {
        console.log(`Data ${action} successfully`);
        window.alert(`Data ${action} successfully`);
        navigate('/adminannualadminreport');
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
        <div className="row">
          <div className="col-md-2 col-xl-2 col-sm-2 ">
            <Sidenav />
          </div>

          <div className=" col-md-10 col-xl-10 col-sm-10  justify-content-center pe-0 ps-0">
            <Topnav />

            <div className="row p-3 ">
              <div className="col-xl-12 bg-light rounded">
                <a
                  href="/adminannualadminreport"
                  className="text-decoration-none text-dark"
                >
                  <h3 className="m-3">
                    <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                    Annual Admin Report
                  </h3>
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
                      name="pdf"
                      ref={fileInputRef}
                      accept=".pdf"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnnualAdminReportForm;