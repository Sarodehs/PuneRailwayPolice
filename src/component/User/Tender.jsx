import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Tender = () => {
  const tenderData = [
    {
      id: 1,
      dateOfUpload: '2023-09-15',
      title: 'Supply of Police Equipment',
      lastDateOfSubmission: '2023-10-10',
      info: 'This tender is for the supply of various police equipment and accessories.'
    },
    {
      id: 2,
      dateOfUpload: '2023-09-10',
      title: 'Construction of New Police Station',
      lastDateOfSubmission: '2023-10-05',
      info: 'Tender for the construction of a new police station building at XYZ location.'
    },
    {
      id: 3,
      dateOfUpload: '2023-09-05',
      title: 'Security Services Contract',
      lastDateOfSubmission: '2023-09-30',
      info: 'Tender for the provision of security services at railway stations.'
    },
    {
      id: 4,
      dateOfUpload: '2023-09-01',
      title: 'Maintenance of Railway Tracks',
      lastDateOfSubmission: '2023-09-25',
      info: 'Tender for the maintenance and repair of railway tracks.'
    },
    
    {
      id: 5,
      dateOfUpload: '2023-08-25',
      title: 'Purchase of Vehicles',
      lastDateOfSubmission: '2023-09-20',
      info: 'Tender for the purchase of vehicles for the railway police department.'
    },
    // Add more tender entries as needed
  ];
  return (
<>
<Header/>
<div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card my-4">
            <div className="card-body">
              <h1 className="card-title fs-6 text-center">
                <button className="btn btn-primary">Tender's</button>
              </h1>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Date of Upload</th>
                    <th>Title</th>
                    <th>Last Date of Submission</th>
                    <th>Info</th>
                  </tr>
                </thead>
                <tbody>
                  {tenderData.map((tender) => (
                    <tr key={tender.id}>
                      <td>{tender.dateOfUpload}</td>
                      <td>{tender.title}</td>
                      <td>{tender.lastDateOfSubmission}</td>
                      <td>
                        {tender.info}
                        <button className="btn btn-info btn-sm ml-2">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
<Footer/>
</>
  )
}

export default Tender
