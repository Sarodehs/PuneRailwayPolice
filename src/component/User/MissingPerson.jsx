import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

// Define the Missing Persons Form component
const MissingPersonsForm = ({ addMissingPerson }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    age: '',
    dateOfBirth: '',
    race: '',
    distinguishingFeatures: '',
    contactInfo: '',
    additionalInfo: '',
    status: '', // New field for status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/forms/missingPerson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Missing person report submitted successfully!');
        // Optionally, you can fetch the updated list of missing persons from the backend
        // and update the state to reflect the latest data.
      } else {
        console.error('Failed to submit missing person report:', await response.json());
      }
    } catch (error) {
      console.error('Error submitting missing person report:', error.message);
    }
  };
  

  return (
    <div className="container ">
    <div className="">
    <div className="row justify-content-center">
      <div className="card-body bgcolortwo mt-5 p-5">
        <h2 className="card-title  text-center">
         
          <button className="btn btn-primary">Missing Persons Report Form</button>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="dateOfBirth" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="race" className="form-label">
                  Race/Ethnicity
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="race"
                  name="race"
                  value={formData.race}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="distinguishingFeatures" className="form-label">
                Distinguishing Features
              </label>
              <textarea
                className="form-control"
                id="distinguishingFeatures"
                name="distinguishingFeatures"
                value={formData.distinguishingFeatures}
                onChange={handleChange}
                rows="4"
              />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <select
                  className="form-select"
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Missing">Missing</option>
                  <option value="Found">Found</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="contactInfo" className="form-label">
                  Contact Information
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contactInfo"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleChange}
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="additionalInfo" className="form-label">
                Additional Information
              </label>
              <textarea
                className="form-control"
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows="4"
              />
            </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

// Define the Missing Persons Table component
const MissingPersonsTable = ({ missingPersonsData }) => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title fs-4">Missing Persons Report</h2>
          <div className="table-responsive">
           <table className="table table-striped">
             <thead className="table-primary">
                  <tr>
                  <th>Full Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Date of Birth</th>
                  <th>Race/Ethnicity</th>
                  <th>Distinguishing Features</th>
                  <th>Contact Information</th>
                  <th>Additional Information</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {missingPersonsData.map((person, index) => (
                  <tr key={index}>
                    <td>{person.fullName}</td>
                    <td>{person.gender}</td>
                    <td>{person.age}</td>
                    <td>{person.dateOfBirth}</td>
                    <td>{person.race}</td>
                    <td>{person.distinguishingFeatures}</td>
                    <td>{person.contactInfo}</td>
                    <td>{person.additionalInfo}</td>
                    <td>{person.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

function MissingPerson() {
  const [missingPersons, setMissingPersons] = useState([]);

  const addMissingPerson = (personData) => {
    setMissingPersons([...missingPersons, personData]);
  };

  useEffect(() => {
    const fetchMissingPersons = async () => {
      try {
        const response = await fetch('http://localhost:5000/forms/missingPerson');
        if (response.ok) {
          const data = await response.json();
          setMissingPersons(data);
        } else {
          console.error('Failed to fetch missing persons:', await response.json());
        }
      } catch (error) {
        console.error('Error fetching missing persons:', error.message);
      }
    };

    fetchMissingPersons();
  }, []); // Run once when the component mounts

  return (
    <div>
      <Header/>
      <MissingPersonsForm addMissingPerson={addMissingPerson} />
      <MissingPersonsTable missingPersonsData={missingPersons} />
      <Footer/>
    </div>
  );
}

export default MissingPerson;

