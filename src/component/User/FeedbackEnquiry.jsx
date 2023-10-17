import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Footer from './Footer';
import Header from './Header';

const FeedbackEnquiry  = () => {
    const [activeForm, setActiveForm] = useState('Feedback');
    const [feedbackName, setFeedbackName] = useState('');
    const [feedbackContact, setFeedbackContact] = useState('');
    const [feedbackEmail, setFeedbackEmail] = useState('');
    const [feedbackSubject, setFeedbackSubject] = useState('');
    const [feedbackAddress, setFeedbackAddress] = useState('');
    const [feedbackPincode, setFeedbackPincode] = useState('');
    const [feedbackDescription, setFeedbackDescription] = useState('');
    const [feedbackRobotChecked, setFeedbackRobotChecked] = useState(false);
  
    const [enquiryName, setEnquiryName] = useState('');
    const [enquiryContact, setEnquiryContact] = useState('');
    const [enquiryEmail, setEnquiryEmail] = useState('');
    const [enquirySubject, setEnquirySubject] = useState('');
    const [enquiryAddress, setEnquiryAddress] = useState('');
    const [enquiryPincode, setEnquiryPincode] = useState('');
    const [enquiryDescription, setEnquiryDescription] = useState('');
    const [enquiryRobotChecked, setEnquiryRobotChecked] = useState(false);
  
    const [recaptchaValue, setRecaptchaValue] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (activeForm === 'Feedback') {
        console.log('Feedback Form submitted with data:', {
          name: feedbackName,
          contact: feedbackContact,
          email: feedbackEmail,
          subject: feedbackSubject,
          address: feedbackAddress,
          pincode: feedbackPincode,
          description: feedbackDescription,
          robotChecked: feedbackRobotChecked,
        });
      } else if (activeForm === 'Enquiry') {
        console.log('Enquiry Form submitted with data:', {
          name: enquiryName,
          contact: enquiryContact,
          email: enquiryEmail,
          subject: enquirySubject,
          address: enquiryAddress,
          pincode: enquiryPincode,
          description: enquiryDescription,
          robotChecked: enquiryRobotChecked,
        });
      }
  
      clearFormFields();
    };
  
    const clearFormFields = () => {
      if (activeForm === 'Feedback') {
        setFeedbackName('');
        setFeedbackContact('');
        setFeedbackEmail('');
        setFeedbackSubject('');
        setFeedbackAddress('');
        setFeedbackPincode('');
        setFeedbackDescription('');
        setFeedbackRobotChecked(false);
      } else if (activeForm === 'Enquiry') {
        setEnquiryName('');
        setEnquiryContact('');
        setEnquiryEmail('');
        setEnquirySubject('');
        setEnquiryAddress('');
        setEnquiryPincode('');
        setEnquiryDescription('');
        setEnquiryRobotChecked(false);
      }
    };
  
    const toggleInfo = (infoName) => {
      setActiveForm(infoName === activeForm ? null : infoName);
    };
  
    const handleRecaptchaChange = (value) => {
      setRecaptchaValue(value);
  
      if (activeForm === 'Feedback') {
        setFeedbackRobotChecked(true);
      } else if (activeForm === 'Enquiry') {
        setEnquiryRobotChecked(true);
      }
    };
  
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      document.head.appendChild(script);
  
      const timeout = setTimeout(() => {
        console.error('ReCAPTCHA loading timed out');
      }, 10000);
  
      script.onload = () => { 
        clearTimeout(timeout);
      };
    }, []);
  return (
    <div> <div>
    <Header />
    <div className="container mt-5">
        <div className="row justify-content-center">
        <div className="col-md-9">
        <div className="card">
          <div className="card-body">
              <div className="text-center mb-3">
      <div className="text-center">
        <button className="btn btn-primary m-3" onClick={() => toggleInfo('Feedback')}>
          Feedback
        </button>
        <button className="btn btn-primary m-3" onClick={() => toggleInfo('Enquiry')}>
          Enquiry
        </button>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="feedback-container p-4">
            {activeForm === 'Feedback' && (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" >Name:</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control custom-input"
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control custom-input"
                    value={feedbackSubject}
                    onChange={(e) => setFeedbackSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group" style={{ display: 'flex' }}>
                  <div style={{ flex: 1, marginRight: '40px' }}>
                    <label htmlFor="contact">Contact Number:</label>
                    <input
                      type="text"
                      id="contact"
                      className="form-control custom-input"
                      value={feedbackContact}
                      onChange={(e) => setFeedbackContact(e.target.value)}
                      required
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control custom-input"
                      value={feedbackEmail}
                      onChange={(e) => setFeedbackEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group" style={{ display: 'flex' }}>
                  <div style={{ flex: 1, marginRight: '40px' }}>
                    <label htmlFor="address">Address:</label>
                    <input
                      type="text"
                      id="address"
                      className="form-control custom-input"
                      value={feedbackAddress}
                      onChange={(e) => setFeedbackAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="pincode">Pincode:</label>
                    <input
                      type="text"
                      id="pincode"
                      className="form-control custom-input"
                      value={feedbackPincode}
                      onChange={(e) => setFeedbackPincode(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    className="form-control custom-input"
                    value={feedbackDescription}
                    onChange={(e) => setFeedbackDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                {/* <div className="form-group col-md-3">
                  <label>
                    <input
                      type="checkbox"
                      id="robotCheckbox"
                      checked={feedbackRobotChecked}
                      onChange={() => setFeedbackRobotChecked(!feedbackRobotChecked)}
                      required
                    />
                    I am not a robot
                    {feedbackRobotChecked && (
                      <span style={{ marginLeft: '5px', color: 'green' }}>✓</span>
                    )}
                  </label>
                </div> */}
                <div id='recapcha'>
              <ReCAPTCHA  sitekey="6LeEhachAAAAABxK2aBdHNR62PYq1GoUR_M0XUF1"/>
                </div>
                {/* <div className="form-group">
                  <ReCAPTCHA
                    sitekey="6LdiED0oAAAAAHUxS3TrqFpIRV6bpspzVHAdljPX"
                    onChange={handleRecaptchaChange}
                  />
                
                </div> */}
                <button type="send" className="btn btn-primary">
                  Submit
                </button>
              </form>
            )}

            {activeForm === 'Enquiry' && (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control custom-input"
                    value={enquiryName}
                    onChange={(e) => setEnquiryName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control custom-input"
                    value={enquirySubject}
                    onChange={(e) => setEnquirySubject(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group" style={{ display: 'flex' }}>
                  <div style={{ flex: 1, marginRight: '10px' }}>
                    <label htmlFor="contact">Contact Number:</label>
                    <input
                      type="text"
                      id="contact"
                      className="form-control custom-input"
                      value={enquiryContact}
                      onChange={(e) => setEnquiryContact(e.target.value)}
                      required
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control custom-input"
                      value={enquiryEmail}
                      onChange={(e) => setEnquiryEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group" style={{ display: 'flex' }}>
                  <div style={{ flex: 1, marginRight: '10px' }}>
                    <label htmlFor="address">Address:</label>
                    <input
                      type="text"
                      id="address"
                      className="form-control custom-input"
                      value={enquiryAddress}
                      onChange={(e) => setEnquiryAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="pincode">Pincode:</label>
                    <input
                      type="text"
                      id="pincode"
                      className="form-control custom-input"
                      value={enquiryPincode}
                      onChange={(e) => setEnquiryPincode(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    className="form-control custom-input"
                    value={enquiryDescription}
                    onChange={(e) => setEnquiryDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                {/* <div className="form-group col-md-6">
                  <label>
                    <input
                      type="checkbox"
                      id="robotCheckbox"
                      checked={enquiryRobotChecked}
                      onChange={() => setEnquiryRobotChecked(!enquiryRobotChecked)}
                      required
                    />
                    I am not a robot
                    {enquiryRobotChecked && (
                      <span style={{ marginLeft: '5px', color: 'green' }}>✓</span>
                    )}
                  </label>
                </div>
                <div className="form-group">
                  <ReCAPTCHA
                    sitekey="6LdiED0oAAAAAHUxS3TrqFpIRV6bpspzVHAdljPX"
                    onChange={handleRecaptchaChange}
                  />
                </div> */}
                 <div id='recapcha'>
              <ReCAPTCHA  sitekey="6LeEhachAAAAABxK2aBdHNR62PYq1GoUR_M0XUF1"/>
                </div>
                <button type="send" className="btn btn-primary">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="col-md-6">
          {/* ... ReCAPTCHA Component ... */}
          
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <Footer />

  </div>
      
    </div>
  )
}

export default FeedbackEnquiry 