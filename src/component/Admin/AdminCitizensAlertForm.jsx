import React, { useState, useEffect, useRef } from 'react';
import Sidenav from './Sidenav';
import Topnav from './Topnav';
import { useLocation, useNavigate } from 'react-router-dom';

const AdminCitizensAlertForm = () => {
  const location = useLocation();
  const { citizensalertToUpdate } = location.state || {};
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const photoInputRef = useRef(null);
  const audioInputRef = useRef(null); 
  const [formData, setFormData] = useState({
    title: '',
    titleInMarathi: '',
    photo: null,
    date: '',
    fileTitle: '',
    pdfFile: null,
    audioFile: null,
    youtubeVideoLink: '',
    otherLink: '',
    createdAt: '',
    updatedAt: '',
  });

  useEffect(() => {
    if (citizensalertToUpdate) {
      setFormData({
        title: citizensalertToUpdate.title || '',
        titleInMarathi: citizensalertToUpdate.titleInMarathi || '',
        photo: citizensalertToUpdate.photo || null,
        date: citizensalertToUpdate.date || '',
        fileTitle: citizensalertToUpdate.fileTitle || '',
        pdfFile: citizensalertToUpdate.pdfFile || null,
        audioFile: citizensalertToUpdate.audioFile || null,
        youtubeVideoLink: citizensalertToUpdate.youtubeVideoLink || '',
        otherLink: citizensalertToUpdate.otherLink || '',
        createdAt: citizensalertToUpdate.createdAt || '',
        updatedAt: citizensalertToUpdate.updatedAt || '',
      });
    }
  }, [citizensalertToUpdate]);

  const handleInputChange = (e) => {
    const { name, type } = e.target;

    if (type === 'file') {
      // Handle audio file input separately
      if (name === 'audioFile') {
        setFormData({ ...formData, [name]: e.target.files[0] || null });
      } else {
        // For other file inputs (photo, pdf), clear the input
        clearFileInput(e.target);
      }
    } else {
      setFormData({ ...formData, [name]: e.target.value });
    }
  };

  
  const clearFileInput = (input) => {
    try {
      const newInput = document.createElement('input');
      newInput.type = 'file';
      input.parentNode.replaceChild(newInput, input);
    } catch (error) {
      console.error('Error clearing file input:', error.message);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      let url;
      let method;
      let action;
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('titleInMarathi', formData.titleInMarathi);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('fileTitle', formData.fileTitle);
      // formDataToSend.append('audioFile', formData.audioFile);
      formDataToSend.append('youtubeVideoLink', formData.youtubeVideoLink);
      formDataToSend.append('otherLink', formData.otherLink);
      formDataToSend.append('createdAt', formData.createdAt);
      formDataToSend.append('updatedAt', formData.updatedAt);


      if (photoInputRef.current && photoInputRef.current.files.length > 0) {
        formDataToSend.append('image', photoInputRef.current.files[0]);
      }
      if (fileInputRef.current && fileInputRef.current.files.length > 0) {
        formDataToSend.append('pdf', fileInputRef.current.files[0]);
      }
      
      if (audioInputRef.current && audioInputRef.current.files.length > 0) {
        formDataToSend.append('audio', audioInputRef.current.files[0]);
      }

      if (citizensalertToUpdate) {
        url = `http://localhost:5000/citizensAlert/${citizensalertToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        url = 'http://localhost:5000/citizensAlert';
        method = 'POST';
        action = 'created';
      }

      const response = await fetch(url, {
        method: method,
        body: formDataToSend,
      });
      
      if (response.ok) {
        const errorData = await response.json();
        console.log(`Data ${action} successfully`);
        window.alert(`Data ${action} successfully`);
        navigate('/admincitizensalert');
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
              <a href="/admincitizensalert" className="text-decoration-none text-dark"> <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
              Citizens Alert</h3>
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
                    <label htmlFor="titleInMarathi" className="form-label">Title In Marathi</label>
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
                    <label htmlFor="date" className="form-label"> Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                     
                      onChange={handleInputChange}
                      required
                    />
                  </div> 
                  <div className="mb-3">
                    <label htmlFor="fileTitle" className="form-label"> File Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fileTitle"
                      name="fileTitle"
                      value={formData.fileTitle}
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
                    <label htmlFor="audioFile" className="form-label">Audio File</label>
                    <input
                      type="file"
                      className="form-control"
                      id="audioFile"
                      name="audioFile"
                      ref={audioInputRef}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                   <div className="mb-3">
                    <label htmlFor="youtubeVideoLink" className="form-label">Youtube Video Link</label>
                    <input
                      type="text"
                      className="form-control"
                      id="youtubeVideoLink"
                      name="youtubeVideoLink"
                      value={formData.youtubeVideoLink}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="otherLink" className="form-label">Other Link</label>
                    <input
                      type="text"
                      className="form-control"
                      id="otherLink"
                      name="otherLink"
                      value={formData.otherLink}
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

export default AdminCitizensAlertForm