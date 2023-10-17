import React, { useState } from 'react';

const PublishedFIR = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    dateFrom: '',
    dateTo: '',
    policeStation: '',
    firNumber: '',
  });

  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSearch = () => {
    // In a real application, you would make an API call to fetch the data
    // For this example, we'll use mock data
    const mockData = [
      // Replace with your actual FIR data
    ];

    // Filter the data based on search criteria
    const filteredData = mockData.filter((fir) => {
      const dateFromValid = !searchCriteria.dateFrom || fir.firRegistrationDate >= searchCriteria.dateFrom;
      const dateToValid = !searchCriteria.dateTo || fir.firRegistrationDate <= searchCriteria.dateTo;
      const policeStationValid = !searchCriteria.policeStation || fir.firRegistrationLocation === searchCriteria.policeStation;
      const firNumberValid = !searchCriteria.firNumber || fir.firNumber.includes(searchCriteria.firNumber);

      return dateFromValid && dateToValid && policeStationValid && firNumberValid;
    });

    setSearchResults(filteredData);
  };

 
 
  return (
   <>
   
   <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card my-4">
            <div className="card-body"style={{backgroundColor:'lightgray'}}>
              <h1 className="card-title fs-6 text-center">
              <button className="btn btn-primary">Search & View Published FIR</button>
                </h1>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Date From:</label>
                    <input type="date" className="form-control" name="dateFrom" value={searchCriteria.dateFrom} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Date To:</label>
                    <input type="date" className="form-control" name="dateTo" value={searchCriteria.dateTo} onChange={handleInputChange} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>FIR Number:</label>
                    <input type="text" className="form-control" name="firNumber" value={searchCriteria.firNumber} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Police Station Division:</label>
                    <select className="form-select custom-input" name="policeStation" value={searchCriteria.policeStation} onChange={handleInputChange}>
                    <option value="">Select Police Station</option>
                          <option value="Ahemadnagar">Ahemadnagar</option>
                          <option value="Miraj Railway">Miraj Railway</option>
                          <option value="Kurduwadi Railway">Kurduwadi Railway</option>
                          <option value="Daund Railway">Daund Railway</option>
                          <option value="Pune Railway">Pune Railway</option>
                          <option value="Solapur Railway">Solapur Railway</option> 
                    </select>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-primary" onClick={handleSearch}>Search</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                    <th>FIR Number</th>
                  <th>Complainant's Details</th>
                  <th>Incident Date and Time</th>
                  <th>Location</th>
                  <th>Incident Description</th>
                  <th>Accused/Offender Details</th>
                  <th>Sections of Law</th>
                  <th>Investigating Officer</th>
                  <th>Status of Investigation</th>
                  <th>Attachments</th>
                  <th>FIR Registration Date</th>
                  <th>Updates and Progress</th>
                  <th>Victim/Witness Statements</th>
                  <th>FIR Registration Location</th>
                  <th>Case History</th>
                  <th>Legal Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((fir, index) => (
                      <tr key={index}>
                         <td>{fir.firNumber}</td>
                    <td>{fir.complainantsDetails}</td>
                    <td>{fir.incidentDateTime}</td>
                    <td>{fir.location}</td>
                    <td>{fir.incidentDescription}</td>
                    <td>{fir.accusedDetails}</td>
                    <td>{fir.sectionsOfLaw}</td>
                    <td>{fir.investigatingOfficer}</td>
                    <td>{fir.statusOfInvestigation}</td>
                    <td>{fir.attachments}</td>
                    <td>{fir.firRegistrationDate}</td>
                    <td>{fir.updatesAndProgress}</td>
                    <td>{fir.victimWitnessStatements}</td>
                    <td>{fir.firRegistrationLocation}</td>
                    <td>{fir.caseHistory}</td>
                    <td>{fir.legalStatus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   </>
  )
}

export default PublishedFIR
