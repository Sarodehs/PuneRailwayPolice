import React, { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
import Header from './Header';
import Footer from './Footer';

const MobileTheft = () => {
    const [policeStation, setPoliceStation] = useState('');
  const [theftDate, setTheftDate] = useState('');
  const [placeOfTheft, setPlaceOfTheft] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [imei, setIMEI] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [description, setDescription] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [robotChecked, setRobotChecked] = useState(false);
//   const [recaptchaValue, setRecaptchaValue] = useState(null);

  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate reCAPTCHA
            // if (!recaptchaValue) {
            //     alert('Please complete the reCAPTCHA verification.');
            // return;
            //   }

    console.log('Form submitted with data:', {
      policeStation,
      theftDate,
      placeOfTheft,
      name,
      contact,
      email,
      imei,
      brand,
      model,
      mobileNumber,
      description,
      additionalInfo,
      robotChecked,
    });
    
  };
  return (
    <div>
        <Header/>
          <div className="container mt-5">
      <div className="card">
        <div className="card-body">
        <div className="text-center"> 
        <div className="btn btn-primary">
          <h5 className="card-title">Mobile Theft Report Form</h5>
          </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="policeStation">Police Station:</label>
                  <select
                    type="text"
                    id="policeStation"
                    className="form-select custom-input"
                    value={policeStation}
                    onChange={(e) => setPoliceStation(e.target.value)}
                    required
                  >
                    <option value="">Select Police Station</option>
                    <option value="Ahemadnagar">Ahemadnagar</option>
                    <option value="Miraj Railway">Miraj Railway</option>
                    <option value="Kurduwadi Railway">Kurduwadi Railway</option>
                    <option value="Daund Railway">Daund Railway</option>
                    <option value="Pune Railway">Pune Railway</option>
                    <option value="Solapur Railway">Solapur Railway</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="theftDate">Theft Date:</label>
                  <input
                    type="date"
                    id="theftDate"
                    className="form-control"
                    value={theftDate}
                    onChange={(e) => setTheftDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="placeOfTheft">Place of Theft:</label>
                  <input
                    type="text"
                    id="placeOfTheft"
                    className="form-control"
                    value={placeOfTheft}
                    onChange={(e) => setPlaceOfTheft(e.target.value)}
                    required
                  />
                </div>
                {/* Add more left-aligned fields */}
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Contact Number:</label>
                  <input
                    type="tel"
                    id="contact"
                    className="form-control"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="imei">IMEI Number:</label>
              <input
                type="text"
                id="imei"
                className="form-control"
                value={imei}
                onChange={(e) => setIMEI(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="brand">Mobile Brand:</label>
              <input
                type="text"
                id="brand"
                className="form-control"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="model">Mobile Model:</label>
              <input
                type="text"
                id="model"
                className="form-control"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="text"
                id="mobileNumber"
                className="form-control"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description of Mobile:</label>
              <textarea
                id="description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="additionalInfo">Additional Information:</label>
              <textarea
                id="additionalInfo"
                className="form-control"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={robotChecked}
                  onChange={() => setRobotChecked(!robotChecked)}
                />
                I am not a robot
              </label>
            </div>


            {/* <div className="form-group">
              <ReCAPTCHA
                sitekey="6LdiED0oAAAAAHUxS3TrqFpIRV6bpspzVHAdljPX"
                onChange={(value) => setRecaptchaValue(value)}
              />
            </div> */}

            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default MobileTheft