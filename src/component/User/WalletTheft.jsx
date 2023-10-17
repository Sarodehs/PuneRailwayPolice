
import Header from './Header'
import Footer from './Footer'
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
const WalletTheft = () => {

    const [policeStation, setPoliceStation] = useState('');
    const [theftDate, setTheftDate] = useState('');
    const [placeOfTheft, setPlaceOfTheft] = useState('');
    const [complainantName, setComplainantName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [walletDescription, setWalletDescription] = useState('');
    const [walletContents, setWalletContents] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [robotChecked, setRobotChecked] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validate reCAPTCHA
      if (!recaptchaValue) {
        alert('Please complete the reCAPTCHA verification.');
        return;
      }
  
      console.log('Wallet Theft Report submitted with data:', {
        policeStation,
        theftDate,
        placeOfTheft,
        complainantName,
        contactNumber,
        email,
        walletDescription,
        walletContents,
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
              <h5 className="card-title">Wallet Theft Report</h5>
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
                    <option value="Ahmednagar">Ahmednagar</option>
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
                <div className="form-group">
                  <label htmlFor="complainantName">Complainant Name:</label>
                  <input
                    type="text"
                    id="complainantName"
                    className="form-control"
                    value={complainantName}
                    onChange={(e) => setComplainantName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number:</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    className="form-control"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
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
                <div className="form-group">
                  <label htmlFor="walletDescription">Wallet Description:</label>
                  <input
                    type="text"
                    id="walletDescription"
                    className="form-control"
                    value={walletDescription}
                    onChange={(e) => setWalletDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="walletContents">Wallet Contents:</label>
                  <textarea
                    id="walletContents"
                    className="form-control"
                    value={walletContents}
                    onChange={(e) => setWalletContents(e.target.value)}
                    required
                  />
                </div>
              </div>
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
            <div className="form-group">
              <ReCAPTCHA
                sitekey="6LdalkkoAAAAAAr_-JFncEKZv3o5G8TEtin_tSrc"
                onChange={(value) => setRecaptchaValue(value)}
              />
            </div>
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

export default WalletTheft