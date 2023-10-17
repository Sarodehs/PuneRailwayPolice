import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'

const Absconders = () => {
    const [policeStation, setPoliceStation] = useState('');
    const [reportDate, setReportDate] = useState('');
    const [reportedBy, setReportedBy] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [absconderName, setAbsconderName] = useState('');
    const [absconderAge, setAbsconderAge] = useState('');
    const [absconderGender, setAbsconderGender] = useState('');
    const [reasonForAbsconding, setReasonForAbsconding] = useState('');
    const [physicalDescription, setPhysicalDescription] = useState('');
    const [lastKnownLocation, setLastKnownLocation] = useState('');
    const [criminalRecord, setCriminalRecord] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [photo, setPhoto] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      console.log('Absconder Report submitted with data:', {
        policeStation,
        reportDate,
        reportedBy,
        contactNumber,
        email,
        absconderName,
        absconderAge,
        absconderGender,
        reasonForAbsconding,
        photo,
        physicalDescription,
        lastKnownLocation,
        criminalRecord,
        additionalInfo,
      });
    };
  return (
    <div>
        <Header/>
        <div className="container mt-5">~
      <div className="card">
        <div className="card-body">
          <div className="text-center">
          <div className="btn btn-primary">
            <h5 className="card-title">Absconder Report</h5>
          </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                {/* Left Column */}
                <div className="form-group">
                  <label htmlFor="policeStation">Police Station:</label>
                  <select
                    type="text"
                    id="policeStation"
                    className="form-select custom input"
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
                  <label htmlFor="reportDate">Date of Report:</label>
                  <input
                    type="date"
                    id="reportDate"
                    className="form-control"
                    value={reportDate}
                    onChange={(e) => setReportDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="reportedBy">Reported By:</label>
                  <input
                    type="text"
                    id="reportedBy"
                    className="form-control"
                    value={reportedBy}
                    onChange={(e) => setReportedBy(e.target.value)}
                    required
                  />
                </div>
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
                  <label htmlFor="email">Email Address:</label>
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
                  <label htmlFor="reasonForAbsconding">Reason for Absconding:</label>
                  <textarea
                    id="reasonForAbsconding"
                    className="form-control"
                    value={reasonForAbsconding}
                    onChange={(e) => setReasonForAbsconding(e.target.value)}
                    rows="4"
                    required
                  />
                </div>
              </div>mnnm  nn                                                                                                                                                                       nnnnnnnnnnnnn                       nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnf v  
              <div className="col-md-6">
                {/* Right Column */}
                <div className="form-group">
                  <label htmlFor="absconderName">Absconder's Name:</label>
                  <input
                    type="text"
                    id="absconderName"
                    className="form-control"
                    value={absconderName}
                    onChange={(e) => setAbsconderName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="absconderAge">Absconder's Age:</label>
                  <input
                    type="text"
                    id="absconderAge"
                    className="form-control"
                    value={absconderAge}
                    onChange={(e) => setAbsconderAge(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="absconderGender">Absconder's Gender:</label>
                  <select
                    id="absconderGender"
                    className="form-select custom-input"
                    value={absconderGender}
                    onChange={(e) => setAbsconderGender(e.target.value)}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="physicalDescription">Physical Description:</label>
                  <textarea
                    id="physicalDescription"
                    className="form-control"
                    value={physicalDescription}
                    onChange={(e) => setPhysicalDescription(e.target.value)}
                    rows="4"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastKnownLocation">Last Known Location:</label>
                  <input
                    type="text"
                    id="lastKnownLocation"
                    className="form-control"
                    value={lastKnownLocation}
                    onChange={(e) => setLastKnownLocation(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="criminalRecord">Criminal Record:</label>
                  <textarea
                    id="criminalRecord"
                    className="form-control"
                    value={criminalRecord}
                    onChange={(e) => setCriminalRecord(e.target.value)}
                    rows="4"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="photo">Photograph:</label>
              <input
                type="file"
                id="photo"
                className="form-control-file"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>
            <div className="form-group">
              <label htmlFor="additionalInfo">Additional Information:</label>
              <textarea
                id="additionalInfo"
                className="form-control"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                rows="4"
              />
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
    </div>
  )
}

export default Absconders