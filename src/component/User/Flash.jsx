import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Flash = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };

  const dailyDutyData = [
    {
      id: 1,
      srNo: 1,
      issueDate: '2023-09-25',
      description: 'Petroling Chart',
      date: '2023-09-25',
    },
    {
      id: 2,
      srNo: 2,
      issueDate: '22-Aug-2018',
      description: 'Ahamadnagar Station Duty Chart',
      date: '2023-09-26',
    },
    {
      id: 3,
      srNo: 3,
      issueDate: '22-Aug-2018',
      description: 'Train petroling chart',
      date: '2023-09-26',
    },
    // Add more items as needed
  ];

  const medicalBillData = [
    {
      id: 1,
      srNo: 1,
      issueDate: '2023-09-27',
      description: 'Test',
      date: '2023-09-28',
    },
    {
      id: 2,
      srNo: 2,
      issueDate: '14-Jun-2018',
      description: 'Sasson Hospital',
      date: '2023-09-30',
    },
    {
      id: 3,
      srNo: 3,
      issueDate: '14-Jun-2018',
      description: 'Medical Bill List',
      date: '2023-09-30',
    },
  ];

  const incrementListData = [
    {
      id: 1,
      srNo: 1,
      issueDate: '2023-09-28',
      description: 'Employee A Increment',
      date: '2023-09-30',
    },
    {
      id: 2,
      srNo: 2,
      issueDate: '2023-09-29',
      description: 'Employee B Increment',
      date: '2023-10-01',
    },
    {
      id: 3,
      srNo: 3,
      issueDate: '2023-09-30',
      description: 'Employee C Increment',
      date: '2023-10-02',
    },
  
  ];
  const compassionListData = [
    {
      id: 1,
      srNo: 1,
      issueDate: '2023-09-28',
      description: 'Compassion List Item 1',
      date: '2023-09-30',
    },
    {
      id: 2,
      srNo: 2,
      issueDate: '2023-09-29',
      description: 'Compassion List Item 2',
      date: '2023-10-01',
    },
    
    {
      id: 3,
      srNo: 3,
      issueDate: '2023-09-30',
      description: 'Compassion List Item 3',
      date: '2023-10-02',
    },
    // Add more items as needed
  ];

  const retirementListData = [
    {
      id: 1,
      srNo: 1,
      issueDate: '2023-09-28',
      employeeName: 'John Doe',
      retirementDate: '2023-12-31',
      pensionAmount: '$2,500',
    },
    {
      id: 2,
      srNo: 2,
      issueDate: '2023-09-29',
      employeeName: 'Jane Smith',
      retirementDate: '2023-10-15',
      pensionAmount: '$3,000',
    },
    // Add more items as needed
  ];
  return (
   <>
   <Header/>

   <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center">Flash</h2>
          <div className="d-flex flex-wrap mb-2">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <button
                className={`btn btn-primary btn-block btn-lg ${
                  activeTab === 1 ? 'active' : ''
                }`}
                onClick={() => toggleTab(1)}
              >
                Daily Duty Chart
              </button>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <button
                className={`btn btn-primary btn-block btn-lg ${
                  activeTab === 2 ? 'active' : ''
                }`}
                onClick={() => toggleTab(2)}
              >
                Medical Bill List
              </button>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <button
                className={`btn btn-primary btn-block btn-lg ${
                  activeTab === 3 ? 'active' : ''
                }`}
                onClick={() => toggleTab(3)}
              >
                Increment List
              </button>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <button
                className={`btn btn-primary btn-block btn-lg ${
                  activeTab === 4 ? 'active' : ''
                }`}
                onClick={() => toggleTab(4)}
              >
                Compassion List
              </button>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
              <button
                className={`btn btn-primary btn-block btn-lg ${
                  activeTab === 5 ? 'active' : ''
                }`}
                onClick={() => toggleTab(5)}
              >
                Retirement List
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div style={{ marginTop: '20px' }}>
                {activeTab === 1 && (
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>Sr No</th>
                          <th>Issue Date</th>
                          <th>Description</th>
                          <th>Date</th>
                          <th>View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dailyDutyData.map((item) => (
                          <tr key={item.id}>
                            <td>{item.srNo}</td>
                            <td>{item.issueDate}</td>
                            <td>{item.description}</td>
                            <td>{item.date}</td>
                            <td>
                              <button className="btn btn-primary">View</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>Sr No</th>
                          <th>Issue Date</th>
                          <th>Description</th>
                          <th>Date</th>
                          <th>View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {medicalBillData.map((item) => (
                          <tr key={item.id}>
                            <td>{item.srNo}</td>
                            <td>{item.issueDate}</td>
                            <td>{item.description}</td>
                            <td>{item.date}</td>
                            <td>
                              <button className="btn btn-primary">View</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {activeTab === 3 && (
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>Sr No</th>
                          <th>Issue Date</th>
                          <th>Description</th>
                          <th>Date</th>
                          <th>View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {incrementListData.map((item) => (
                          <tr key={item.id}>
                            <td>{item.srNo}</td>
                            <td>{item.issueDate}</td>
                            <td>{item.description}</td>
                            <td>{item.date}</td>
                            <td>
                              <button className="btn btn-primary">View</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {activeTab === 4 && (
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>Sr No</th>
                          <th>Issue Date</th>
                          <th>Description</th>
                          <th>Date</th>
                          <th>View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {compassionListData.map((item) => (
                          <tr key={item.id}>
                            <td>{item.srNo}</td>
                            <td>{item.issueDate}</td>
                            <td>{item.description}</td>
                            <td>{item.date}</td>
                            <td>
                              <button className="btn btn-primary">View</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {activeTab === 5 && (
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>Sr No</th>
                          <th>Issue Date</th>
                          <th>Employee Name</th>
                          <th>Retirement Date</th>
                          <th>Pension Amount</th>
                          <th>View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {retirementListData.map((item) => (
                          <tr key={item.id}>
                            <td>{item.srNo}</td>
                            <td>{item.issueDate}</td>
                            <td>{item.employeeName}</td>
                            <td>{item.retirementDate}</td>
                            <td>{item.pensionAmount}</td>
                            <td>
                              <button className="btn btn-primary">View</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <Footer/>
   </>
  )
}

export default Flash
