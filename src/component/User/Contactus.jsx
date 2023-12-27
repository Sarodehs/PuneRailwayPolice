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
      const response = await axios.post('http://localhost:5000/contactus', formData);
      console.log('Form data submitted:', formData);
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
      <div class="row p-5 bg-light">
          <h2 className='text-center'>Location & Jurisdiction Map</h2>
          <div class="col-sm-5 offset-1">
            <div class="card">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7566.013672944764!2d73.8741151!3d18.5285932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c123e61be033%3A0x4cb43d9aabd553c9!2sPune%20Railway%20Police%20Station!5e0!3m2!1sen!2sin!4v1702553301075!5m2!1sen!2sin"
         width="600" height="400" style={{border:0}} class="card-img-top" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     

              <div class="card-body ">
                <h5 class="card-title">Location</h5>
                <p class="card-text">GVHG+G2C, Station Rd, Agarkar Nagar, Pune, Maharashtra 411001</p>
                <a href="https://www.google.com/maps/place/Pune+Railway+Police+Station/@18.5285932,73.8741151,16z/data=!4m6!3m5!1s0x3bc2c123e61be033:0x4cb43d9aabd553c9!8m2!3d18.5288233!4d73.8750283!16s%2Fg%2F11gj0zwfcs?hl=en&entry=ttu" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-5 ">
            <div class="card ">
              <img src="/assets/Image/jurisdiction-map.png" class="card-img-top" alt="profile" />

              <div class="card-body ">
                <h5 class="card-title">Jurisdiction</h5>
                <p class="card-text">pune railways map</p>
                <a href="https://www.mapsofindia.com/maps/maharashtra/railways/pune.htm" class="btn btn-primary">Go somewhere</a>
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
                    <ReCAPTCHA sitekey="6LeEhachAAAAABxK2aBdHNR62PYq1GoUR_M0XUF1" />
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