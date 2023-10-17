import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';

const OnlineComplaint = () => {
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [description, setDescription] = useState('');
  const [witnessName, setWitnessName] = useState('');
  const [witnessContact, setWitnessContact] = useState('');
  const [witnessStatement, setWitnessStatement] = useState('');
  const [evidence, setEvidence] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submission logic here
    // You can send the form data to the server or perform client-side validation
    // Reset form fields after submission
    // setFullName('');
    // setContactNumber('');
    // setEmail('');
    // setDateTime('');
    // setLocation('');
    // setIncidentType('');
    // setDescription('');
    // setWitnessName('');
    // setWitnessContact('');
    // setWitnessStatement('');
    // setEvidence(null);
  };

  return (
    <>
    <Header/>
    <div className="container">
      <div className="card">
        <div className="card-body" style={{ backgroundColor: '#f3f3f3' }}>
          <div className="text-center">
            <h5 className="card-title">Online Complaint Form</h5>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="contactNumber">Contact Number:</label>
                <input
                  type="tel"
                  id="contactNumber"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="dateTime">Date and Time of Incident:</label>
                <input
                  type="datetime-local"
                  id="dateTime"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="incidentType">Incident Type:</label>
                <input
                  type="text"
                  id="incidentType"
                  value={incidentType}
                  onChange={(e) => setIncidentType(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="evidence">Upload Evidence:</label>
              <input
                type="file"
                id="evidence"
                accept="image/*, video/*, application/pdf"
                onChange={(e) => setEvidence(e.target.files[0])}
                className="form-control-file"
              />
            </div>
            <div className="form-group">
              <label htmlFor="witnessName">Witness Name:</label>
              <input
                type="text"
                id="witnessName"
                value={witnessName}
                onChange={(e) => setWitnessName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="witnessContact">Witness Contact:</label>
                <input
                  type="tel"
                  id="witnessContact"
                  value={witnessContact}
                  onChange={(e) => setWitnessContact(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="witnessStatement">Witness Statement:</label>
                <textarea
                  id="witnessStatement"
                  value={witnessStatement}
                  onChange={(e) => setWitnessStatement(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default OnlineComplaint
