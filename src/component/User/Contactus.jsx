import React, { useState } from 'react';
import Footer from './Footer'
import Header from './Header'
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/contactus', formData);
      console.log('Form data submitted:', response.data);
      window.alert('Form data submitted')
    } catch (error) {
      console.error('Error submitting form:', error);
      window.alert('Error data submitted')
    }
  };

  
  return (
    <div> <div>
    <Header />
   <div>
   <div class="row p-5">
  <div class="col-sm-5 offset-1">
    <div class="card">
    <img src="/assets/Image/image1.png" class="card-img-top" alt="profile" />
          
      <div class="card-body bgcolorone">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-5 ">
    <div class="card ">
    <img src="/assets/Image/image1.png" class="card-img-top" alt="profile" />
          
      <div class="card-body bgcolorone">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>



<div>
          {/* <!-- contact area start --> */}
      <div className="row   ">
        <div className="justify-content-center align-items-center d-flex bgcolortwo">
          <div className='col-xl-9 col-md-8 col-sm-12 card m-5 p-5 '>
            <h3 className="   mx-auto ">Contact Us</h3>
          
          <form className="row" onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control form-control-lg inputfocus"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-4">
        <input
          type="email"
          className="form-control form-control-lg inputfocus"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-4">
        <textarea
          className="form-control form-control-lg inputfocus"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div id='recapcha'>
              <ReCAPTCHA  sitekey="6LeEhachAAAAABxK2aBdHNR62PYq1GoUR_M0XUF1"/>
                </div>
      <button className="btn btn-primary bgcolor rounded-pill col-4 m-4">SEND</button>
    </form>
          </div>
        </div>
      </div>
      {/* <!-- contact area start --> */}
</div>
   </div>
    <Footer />

  </div>
        
  </div>
  )
}

export default Contactus