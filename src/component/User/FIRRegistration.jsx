import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const FIRRegistration = () => {
  const [firDetails, setFIRDetails] = useState({
    firNumber: '',
    registrationDateTime: '',
    complainantName: '',
    contactNumber: '',
    emailAddress: '',
    address: '',
    identificationDetails: '',
    incidentDateTime: '',
    incidentLocation: '',
    incidentType: '',
    incidentDescription: '',
    offenderDetails: '',
    witnessName: '',
    witnessContact: '',
    witnessStatement: '',
    stolenPropertyDescription: '',
    stolenPropertyEstimatedValue: '',
    injuredPersonName: '',
    injuredPersonAge: '',
    injuryExtent: '',
    medicalTreatmentReceived: '',
    actionsTaken: '',
    arrestsMade: '',
    stolenPropertyRecovered: '',
    firStatus: '',
    additionalInformation: '',
    officerName: '',
    officerBadgeNumber: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFIRDetails({
      ...firDetails,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to the server or perform actions).
    console.log(firDetails);
  };

  return (
    <div>
      <Header/>
    <div className="container mt-5">
      <div className="card">
        <div className="card-body" style={{ backgroundColor: 'lightgray' }}>
          <h2 className="card-title fs-6 text-center">
            <button className="btn btn-primary">FIR Registration</button>
          </h2>
          <form onSubmit={handleSubmit}>
            {/* FIR Number & Date Time Of Registration */}
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="firNumber">FIR Number</label>
                  <input
                    type="text"
                    id="firNumber"
                    name="firNumber"
                    value={firDetails.firNumber}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="registrationDateTime">Date and Time of Registration</label>
                  <input
                    type="datetime-local"
                    id="registrationDateTime"
                    name="registrationDateTime"
                    value={firDetails.registrationDateTime}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            {/* Complainant's Name & Date Time of Incident */}
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="complainantName">Complainant's Name</label>
                  <input
                    type="text"
                    id="complainantName"
                    name="complainantName"
                    value={firDetails.complainantName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="incidentDateTime">Date and Time of Incident</label>
                  <input
                    type="datetime-local"
                    id="incidentDateTime"
                    name="incidentDateTime"
                    value={firDetails.incidentDateTime}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            {/* Accused/Offender Details */}
            <div className="mb-3">
              <label htmlFor="offenderDetails">Accused/Offender Details</label>
              <textarea
                id="offenderDetails"
                name="offenderDetails"
                value={firDetails.offenderDetails}
                onChange={handleInputChange}
                className="form-control"
              ></textarea>
            </div>

            {/* Witness Name & Injured Person Name */}
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="witnessName">Witness Name</label>
                  <input
                    type="text"
                    id="witnessName"
                    name="witnessName"
                    value={firDetails.witnessName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="injuredPersonName">Injured Person Name</label>
                  <input
                    type="text"
                    id="injuredPersonName"
                    name="injuredPersonName"
                    value={firDetails.injuredPersonName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            {/* Stolen/Lost Property Description */}
            <div className="mb-3">
              <label htmlFor="stolenPropertyDescription">Stolen/Lost Property Description</label>
              <textarea
                id="stolenPropertyDescription"
                name="stolenPropertyDescription"
                value={firDetails.stolenPropertyDescription}
                onChange={handleInputChange}
                className="form-control"
              ></textarea>
            </div>

            {/* Actions Taken & FIR Officer Name */}
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="actionsTaken">Actions Taken</label>
                  <textarea
                    id="actionsTaken"
                    name="actionsTaken"
                    value={firDetails.actionsTaken}
                    onChange={handleInputChange}
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="officerName">FIR Officer's Name</label>
                  <input
                    type="text"
                    id="officerName"
                    name="officerName"
                    value={firDetails.officerName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            
            {/* Other Fields (Add Dropdowns and Alignment as Needed) */}
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="incidentType">Incident Type</label>
                  <select
                    id="incidentType"
                    name="incidentType"
                    value={firDetails.incidentType}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select Type</option>
                    <option value="Type1">Type 1</option>
                    <option value="Type2">Type 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default FIRRegistration;
