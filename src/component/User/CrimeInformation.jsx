
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const CrimeInformation = () => {
  const [searchType, setSearchType] = useState('accident');
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    let mockData = [];

    // Replace with actual data for each search type
    if (searchType === 'accident') {
      mockData = [
        {
          id: 1,
          victimName: 'John Doe',
          date: '2023-09-20',
          location: 'Accident Site A',
        },
        {
          id: 2,
          victimName: 'Jane Smith',
          date: '2023-09-22',
          location: 'Accident Site B',
        },
        // Add more accident victim data as needed
      ];
    } else if (searchType === 'missing') {
      mockData = [
        {
          id: 3,
          personName: 'Michael Johnson',
          status: 'Missing',
          dateFound: '2023-09-15',
        },
        {
          id: 4,
          personName: 'Emily Davis',
          status: 'Found',
          dateFound: '2023-09-18',
        },
        // Add more missing/found persons data as needed
      ];
    } else if (searchType === 'unidentified') {
      mockData = [
        {
          id: 5,
          location: 'Unidentified Location X',
          dateFound: '2023-09-25',
        },
        // Add more unidentified dead bodies data as needed
      ];
    }

    const filteredData = mockData.filter((result) => {
      return (
        (searchType === 'accident' && result.victimName.toLowerCase().includes(keyword.toLowerCase())) ||
        (searchType === 'missing' && result.personName && result.personName.toLowerCase().includes(keyword.toLowerCase())) ||
        (searchType === 'unidentified' && result.location && result.location.toLowerCase().includes(keyword.toLowerCase()))
      );
    });

    setSearchResults(filteredData);
  };

  return (
    <div>
      <Header/>
 <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card my-4">
            <div className="card-body">
              <h1 className="card-title fs-4 text-center">Accidental Deaths Search</h1>
              <form onSubmit={handleSearch}>
                <div className="mb-3">
                  <label htmlFor="searchType" className="form-label">Search Type:</label>
                  <select id="searchType" className="form-select" name="searchType" value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                    <option value="accident">Accident Victims</option>
                    <option value="missing">Missing/Found Persons</option>
                    <option value="unidentified">Unidentified Dead Bodies</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="keyword" className="form-label">Keyword:</label>
                  <input type="text" id="keyword" className="form-control" name="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary btn-block">Search</button>
                </div>
              </form>
              <h2 className="text-center">Search Results</h2>
              <div className="table-responsive">
                {searchResults.length === 0 ? (
                  <p className="text-center">No results found.</p>
                ) : (
                  <table className="table table-striped table-bordered">
                    {searchType === 'accident' && (
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Victim Name</th>
                          <th>Date</th>
                          <th>Location</th>
                        </tr>
                      </thead>
                    )}
                    {searchType === 'missing' && (
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Person Name</th>
                          <th>Status</th>
                          <th>Date Found</th>
                        </tr>
                      </thead>
                    )}
                    {searchType === 'unidentified' && (
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Location</th>
                          <th>Date Found</th>
                        </tr>
                      </thead>
                    )}
                    <tbody>
                      {searchResults.map((result) => (
                        <tr key={result.id}>
                          <td>{result.id}</td>
                          {searchType === 'accident' && (
                            <>
                              <td>{result.victimName}</td>
                              <td>{result.date}</td>
                              <td>{result.location}</td>
                            </>
                          )}
                          {searchType === 'missing' && (
                            <>
                              <td>{result.personName}</td>
                              <td>{result.status}</td>
                              <td>{result.dateFound}</td>
                            </>
                          )}
                          {searchType === 'unidentified' && (
                            <>
                              <td>{result.location}</td>
                              <td>{result.dateFound}</td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
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

export default CrimeInformation