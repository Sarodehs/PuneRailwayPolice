import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Header from './Header'
import Footer from './Footer'

const LostFound = () => {

    const [reportType, setReportType] = useState('Lost');
    const [policeStation, setPoliceStation] = useState('');
    const [lostDate, setLostDate] = useState('');
    const [placeOfLost, setPlaceOfLost] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [articleType, setArticleType] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [articleDescription, setArticleDescription] = useState('');
    const [robotChecked, setRobotChecked] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted with data:', {
        reportType,
        policeStation,
        lostDate,
        placeOfLost,
        name,
        contact,
        email,
        articleType,
        address,
        pincode,
        articleDescription,
        robotChecked,
      });
    };
  
  return (
    <div>
  <Header/>
  <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <div className="text-center mb-3">
                <button
                  className={`btn btn-primary m-3 ${reportType === 'Lost' ? 'active' : ''}`}
                  onClick={() => setReportType('Lost')}
                >
                  Lost Item Report
                </button>
                <button
                  className={`btn btn-primary m-3 ${reportType === 'Found' ? 'active' : ''}`}
                  onClick={() => setReportType('Found')}
                >
                  Found Item Report
                </button>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="report-container p-4">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          id="name"
                          className="form-control custom-input"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="policeStation">Police Station:</label>
                        <select
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
                        <label htmlFor="lostDate">Lost Date & Time:</label>
                        <input
                          type="datetime-local"
                          id="lostDate"
                          className="form-control custom-input"
                          value={lostDate}
                          onChange={(e) => setLostDate(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="placeOfLost">
                          Place of {reportType === 'Lost' ? 'Lost' : 'Found'} & Other Details:
                        </label>
                        <textarea
                          id="placeOfLost"
                          className="form-control custom-input"
                          value={placeOfLost}
                          onChange={(e) => setPlaceOfLost(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="contact">Contact Number:</label>
                            <input
                              type="text"
                              id="contact"
                              className="form-control custom-input"
                              value={contact}
                              onChange={(e) => setContact(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="email">Email:</label>
                            <input
                              type="email"
                              id="email"
                              className="form-control custom-input"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="articleType">Article Type:</label>
                        <select
                          id="articleType"
                          className="form-select custom-input"
                          value={articleType}
                          onChange={(e) => setArticleType(e.target.value)}
                          required
                        >
                          <option value="">Select Type</option>
                          <option value="Driving License">Driving License</option>
                          <option value="Passport">Passport</option>
                          <option value="PAN Card">PAN Card</option>
                          <option value="Aadhar Card ">Aadhar Card</option>
                          <option value="Voter ID Card">Voter ID Card</option>
                          <option value="Ration Card">Ration Card</option>
                          <option value="Educational Documents">Educational Documents</option>
                          <option value="Other Documents">Other Documents</option>
                          <option value="Mobile">Mobile</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="address">Address:</label>
                            <input
                              type="text"
                              id="address"
                              className="form-control custom-input"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="pincode">Pincode:</label>
                            <input
                              type="text"
                              id="pincode"
                              className="form-control custom-input"
                              value={pincode}
                              onChange={(e) => setPincode(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="articleDescription">Article Description:</label>
                        <textarea
                          id="articleDescription"
                          className="form-control custom-input"
                          value={articleDescription}
                          onChange={(e) => setArticleDescription(e.target.value)}
                          required
                        />
                      </div>

                      <p>Report lodged with this application is not a subject matter of enquiry investigation.In case loss is due to theft or any other crime, contact nearest police station.False report to police is a punishable offence as per IPC IT Act.

                      </p>
                      <p>मी प्रमाणित करतो की, माझ्या द्वारे प्रदान केलेली वरील माहिती अचूक आणि योग्य आहे. मला समजते की, माहिती लपविणे किंवा चुकीची माहिती पुरविणे हा दखलपात्र गुन्हा आहे आणि तसे केल्यास माझ्यावर योग्य ती कायदेशिर कारवाई करण्यात येऊ शकते.</p>
                      {/* <div className="form-group">
                        <label>
                          <input
                            type="checkbox"
                            checked={robotChecked}
                            onChange={() => setRobotChecked(!robotChecked)}
                          />
                          I am not a robot
                        </label>
                      </div> */}
                       <div id='recapcha'>
              <ReCAPTCHA  sitekey="6LeEhachAAAAABxK2aBdHNR62PYq1GoUR_M0XUF1"/>
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
            </div>
          </div>
        </div>
      </div>
    </div>

<Footer/>
    </div>
  )
}

export default LostFound