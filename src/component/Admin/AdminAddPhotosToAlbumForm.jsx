import React, { useState, useEffect, useRef } from 'react';
import Sidenav from './Sidenav';
import Topnav from './Topnav';

import { useLocation, useNavigate } from 'react-router-dom';

const AdminAddPhotosToAlbumForm = () => {
  const location = useLocation();
  const { addphotosToUpdate } = location.state || {};
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    image: null,
    selectAlbum: '',
    createdAt: '',
    updatedAt: '',
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [previewLogo, setPreviewLogo] = useState(null); // New state for logo preview

  useEffect(() => {
    if (formData.image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(formData.image);
    } else {
      setPreviewImage(null);
    }
  }, [formData.image]);

  // Use effect to update logo preview when item.photo changes
  useEffect(() => {
    if (addphotosToUpdate && addphotosToUpdate.photo) {
      setPreviewLogo(addphotosToUpdate.photo);
    } else {
      setPreviewLogo(null);
    }
  }, [addphotosToUpdate]);

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

      if (addphotosToUpdate) {
        url = `http://localhost:5000/addPhotosToAlbum/${addphotosToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        url = 'http://localhost:5000/addPhotosToAlbum';
        method = 'POST';
        action = 'created';
      }

      console.log('Backend URL:', url);

      const formDataWithFile = new FormData();
      formDataWithFile.append('image', formData.image);
      formDataWithFile.append('selectAlbum', formData.selectAlbum);
      formDataWithFile.append('createdAt', formData.createdAt);
      formDataWithFile.append('updatedAt', formData.updatedAt);

      const response = await fetch(url, {
        method: method,
        body: formDataWithFile,
      });

      if (response.ok) {
        console.log(`Data ${action} successfully`);
        window.alert(`Data ${action} successfully`);
        navigate('/adminaddphotostoalbum');
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
                <a href="/adminaddphotostoalbum" className="text-decoration-none text-dark">
                  <h3 className='m-3'>
                    <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
                    Add Photos To Album
                  </h3>
                </a>
                <hr />

                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">Album Photo</label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      name="image"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleInputChange}
                    />
                  </div>

                  
                  <div className="mb-3">
                    <label htmlFor="selectAlbum" className="form-label">Select Album</label>
                    <input
                      type="text"
                      className="form-control"
                      id="selectAlbum"
                      name="selectAlbum"
                      value={formData.selectAlbum}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Display the logo preview in a table cell */}
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          {previewLogo && (
                            <img src={previewLogo} className="img-fluid w-25" alt="logo" />
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>

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

export default AdminAddPhotosToAlbumForm;
