import React, { useState, useEffect, useRef } from 'react';
import Sidenav from './Sidenav';
import Topnav from './Topnav';
import { useLocation, useNavigate } from 'react-router-dom';

const AdminSpsMessageForm = () => {
  const location = useLocation();
  const { spsmessageToUpdate } = location.state || {};
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    nameInMarathi: '',
    postInMarathi: '',
    post: '',
    photo: null,
    CreatedAt: '',
    UpdatedAt: '',
  });

  useEffect(() => {
    if (spsmessageToUpdate) {
      setFormData({
        name: spsmessageToUpdate.name || '',
        nameInMarathi: spsmessageToUpdate.nameInMarathi || '',
        post: spsmessageToUpdate.post || '',
        postInMarathi: spsmessageToUpdate.postInMarathi || '',
        photo: spsmessageToUpdate.photo || null,
        CreatedAt: spsmessageToUpdate.CreatedAt || '',
        UpdatedAt: spsmessageToUpdate.UpdatedAt || '',
      });
    }
  }, [spsmessageToUpdate]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      setFormData({ ...formData, image: e.target.files[0] || null });
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

      if (spsmessageToUpdate) {
        // If spsmessageToUpdate exists, perform an update (PUT request)
        url = `http://localhost:5000/spsMessage/${spsmessageToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        // If spsmessageToUpdate doesn't exist, create a new entry (POST request)
        url = 'http://localhost:5000/spsMessage';
        method = 'POST';
        action = 'created';
      }

      const formDataForUpload = new FormData();
      formDataForUpload.append('name', formData.name);
      formDataForUpload.append('nameInMarathi', formData.nameInMarathi);
      formDataForUpload.append('post', formData.post);
      formDataForUpload.append('postInMarathi', formData.postInMarathi);
      formDataForUpload.append('CreatedAt', formData.CreatedAt);
      formDataForUpload.append('UpdatedAt', formData.UpdatedAt);
     
      formDataForUpload.append('image', formData.image);
      

      const response = await fetch(url, {
        method: method,
        body: formDataForUpload,
      });

      if (response.ok) {
        console.log(`Data ${action} successfully`);
        window.alert(`Data ${action} successfully`);
        navigate('/adminspsmessage');
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

          <div className="col-md-10 col-xl-10 col-sm-10 justify-content-center pe-0 ps-0">
            <Topnav />
            <div className="row p-3">
              <div className="col-xl-12 bg-light rounded">
                <a href="/adminspsmessage" className="text-decoration-none text-dark">
                  <h3 className='m-3'>
                    <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                    Sps Message
                  </h3>
                </a>

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
                    <label htmlFor="post" className="form-label">Post</label>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSpsMessageForm;