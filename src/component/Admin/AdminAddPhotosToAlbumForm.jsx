import React, { useState, useEffect } from 'react';
import Sidenav from './Sidenav'
import Topnav from './Topnav'

import { useLocation, useNavigate } from 'react-router-dom';
const AdminAddPhotosToAlbumForm = () => {

  const location = useLocation();
  const {addphotosToUpdate } = location.state || {};
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image:'',
    selectAlbum:'',
  
  });
  
  useEffect(() => {
    if (addphotosToUpdate) {
      setFormData({
        image: addphotosToUpdate.image || '',
        selectAlbum: addphotosToUpdate.selectAlbum || '',
       
      });
    }
  }, [addphotosToUpdate]);

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

      if (addphotosToUpdate) {
        // If addphotosToUpdate exists, perform an update (PUT request)
        url = `http://localhost:5000/addphotos/${addphotosToUpdate._id}`;
        method = 'PUT';
        action = 'updated';
      } else {
        // If addphotosToUpdate doesn't exist, create a new entry (POST request)
        url = 'http://localhost:5000/addphotos';
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
        navigate('/adminaddphotostoalbum')
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
              <a href="/adminaddphotostoalbum" className="text-decoration-none text-dark"> <h3 className='m-3'> <span className="material-icons-outlined pe-3 p-2">arrow_back</span>
              Add Photos To Album</h3>
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
                      value={formData.image}
                      onChange={handleInputChange}
                    />
                  </div>


                  <div className="mb-3">
                    <label htmlFor="selectAlbum" className="form-label">select Album</label>
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

export default AdminAddPhotosToAlbumForm