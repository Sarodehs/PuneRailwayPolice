import React, { useState, useEffect } from 'react';
import Sidenav from './Sidenav'
import Topnav from './Topnav'

import { useLocation, useNavigate } from 'react-router-dom';
const AdminCitizensAlertForm = () => {

  const location = useLocation();
  const { citizensalertToUpdate } = location.state || {};
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
  title:'',
  titleInMarathi:'',
  photo:'',
  date:'',
  fileTitle:'',
  file:'',
  audioFile:'',
  youtubeVideoLink:'',
  otherLink:'',
  CreatedAt:'',
  UpdatedAt:'',
  });

  useEffect(() => {
    if (citizensalertToUpdate) {
      setFormData({
        title: citizensalertToUpdate.title || '',
        titleInMarathi: citizensalertToUpdate.titleInMarathi || '',
        photo: citizensalertToUpdate.photo || '',
        date: citizensalertToUpdate.date || '',
        fileTitle: citizensalertToUpdate.fileTitle || '',
        file: citizensalertToUpdate.file || '',
        audioFile: citizensalertToUpdate.audioFile || '',
        youtubeVideoLink: citizensalertToUpdate.youtubeVideoLink || '',
        otherLink: citizensalertToUpdate.otherLink || '',

      });
    }
  }, [citizensalertToUpdate]);

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

      if (citizensalertToUpdate) {
        // If citizensalertToUpdate exists, perform an update (PUT request)
        url = `http://localhost:5000/citizensalert/${citizensalertToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        // If citizensalertToUpdate doesn't exist, create a new entry (POST request)
        url = 'http://localhost:5000/citizensalert';
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
        navigate('/admincitizensalert')
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
                      name="photo"
                      value={formData.photo}
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
                      value={formData.date} 
                      onChange={handleInputChange}
                      required
                    />
                  </div>               
                  <div className="mb-3">
                    <label htmlFor="file" className="form-label">File</label>
                    <input
                      type="file"
                      className="form-control"
                      id="file"
                      name="file"
                      value={formData.file}
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
                      value={formData.audioFile}
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

export default AdminCitizensAlertForm