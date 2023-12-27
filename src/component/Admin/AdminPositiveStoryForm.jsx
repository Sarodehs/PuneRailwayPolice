import React, { useState, useEffect, useRef } from 'react';
import Sidenav from './Sidenav';
import Topnav from './Topnav';
import { useLocation, useNavigate } from 'react-router-dom';

const AdminPositiveStoryForm = () => {
  const location = useLocation();
  const { positivestoryToUpdate } = location.state || {};
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const photoInputRef = useRef(null);
  const [formData, setFormData] = useState({
    title: '',
    titleInMarathi: '',
    date: '',
    link: '',
    pdfFile: null,
    photo: null,
    createdAt: '',
    updatedAt: '',
  });

  useEffect(() => {
    if (positivestoryToUpdate) {
      setFormData({
        title: positivestoryToUpdate.title || '',
        titleInMarathi: positivestoryToUpdate.titleInMarathi || '',
        date: positivestoryToUpdate.date || '',
        link: positivestoryToUpdate.link || '',
        pdfFile: positivestoryToUpdate.pdfFile || null,
        photo: positivestoryToUpdate.photo || null,
        createdAt: positivestoryToUpdate.createdAt || '',
        updatedAt: positivestoryToUpdate.updatedAt || '',
      });
    }
  }, [positivestoryToUpdate]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
  
    if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] || null });
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
  
      if (positivestoryToUpdate?._id) {
        url = `http://localhost:5000/PositiveStories/${positivestoryToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        url = 'http://localhost:5000/PositiveStories';
        method = 'POST';
        action = 'created';
      }
  
      const formDataForUpload = new FormData();
      formDataForUpload.append('title', formData.title);
      formDataForUpload.append('titleInMarathi', formData.titleInMarathi);
      formDataForUpload.append('date', formData.date);
      formDataForUpload.append('link', formData.link);
      formDataForUpload.append('createdAt', formData.createdAt);
      formDataForUpload.append('updatedAt', formData.updatedAt);
  
      // Use refs to get files
      if (fileInputRef.current && fileInputRef.current.files.length > 0) {
        formDataForUpload.append('pdf', fileInputRef.current.files[0]);
      }
  
      if (photoInputRef.current && photoInputRef.current.files.length > 0) {
        formDataForUpload.append('image', photoInputRef.current.files[0]);
      }
      console.log("URL:", url);
      const response = await fetch(url, {
        method: method,
        body: formDataForUpload,
      });
  
      if (response.ok) {
        console.log(`Data ${action} successfully`);
        window.alert(`Data ${action} successfully`);
        navigate('/adminpositivestory');
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
            <div style={{ overflowX: 'auto', maxWidth: '100%', whiteSpace: 'nowrap', display: 'block' }}
            className=" col-md-10 col-xl-10 col-sm-10  justify-content-center pe-0 ps-0"
            >
            <div className="row p-3 ">
              <div className="col-xl-12 bg-light rounded">
              <a href="/adminpositivestory" className="text-decoration-none text-dark"> <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                  PositiveStory</h3>
                  </a>
                <hr />
                <form onSubmit={handleFormSubmit} encType="multipart/form-data">
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
                    <label htmlFor="link" className="form-label">Link</label>
                    <input
                      type="text"
                      className="form-control"
                      id="link"
                      name="link"
                      value={formData.link} 
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pdfFile" className="form-label">
                      File
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="pdfFile"
                      name="pdf"
                      ref={fileInputRef}
                      accept=".pdf"
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
                      ref={photoInputRef}
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
                  <button className="btn btn-primary">Save Changes</button>

                </form>

              </div>
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

export default AdminPositiveStoryForm