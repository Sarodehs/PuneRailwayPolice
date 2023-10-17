import Footer from "./Footer";
import Header from "./Header"
import React, { useState } from 'react';

const RightToInformation = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };
 
 
  return (
  <>  
  <Header/>
  
  <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center">Right To Information</h2>
          <div className="d-flex mb-2">
            <button
              className={`btn btn-primary btn-block btn-lg mr-2 ${
                activeTab === 1 ? 'active' : ''
              }`}
              onClick={() => toggleTab(1)}
            >
              RTI
            </button>
            <button
              className={`btn btn-primary btn-block btn-lg mr-2 ${
                activeTab === 2 ? 'active' : ''
              }`}
              onClick={() => toggleTab(2)}
            >
              Information Provided By RTI
            </button>
            <button
              className={`btn btn-primary btn-block btn-lg mr-2 ${
                activeTab === 3 ? 'active' : ''
              }`}
              onClick={() => toggleTab(3)}
            >
              Annual Report
            </button>
          </div>
          <div className="row">
            <div className="col-12">
              <div style={{ marginTop: '20px' }}>
                {activeTab === 1 && (
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Sr No</th>
                          <th scope="col">Issue Date</th>
                          <th scope="col">Description</th>
                          <th scope="col">Date</th>
                          <th scope="col">View</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>2022-08-24</td>
                          <td>अटक कायदा आणि माननिय सर्वोच्च न्यायालयाच्या मार्गदर्शक तत्वांचे पालन करण्याबाबतचे आदेश</td>
                          <td>2023-09-30</td>
                          <td><button className="btn btn-primary">View</button></td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>2022-09-29</td>
                          <td>Right to Information</td>
                          <td>2023-09-29</td>
                          <td><button className="btn btn-primary">View</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Request ID</th>
                          <th scope="col">Request Date</th>
                          <th scope="col">Response Date</th>
                          <th scope="col">Response</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>2023-09-30</td>
                          <td>2023-10-05</td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
                            consectetur odio. Nulla ac efficitur libero. Donec in justo quis purus
                            tincidunt feugiat.
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>2023-09-28</td>
                          <td>2023-10-02</td>
                          <td>
                            Phasellus eget commodo tellus. Curabitur eu augue in nisi tempor
                            hendrerit nec eget erat. Nam blandit quam ut massa bibendum, at
                            accumsan quam ultrices.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Year</th>
                          <th scope="col">Highlights</th>
                          <th scope="col">Financial Data</th>
                          <th scope="col">Projects</th>
                          <th scope="col">Future Plans</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2023</td>
                          <td>
                            In 2023, we achieved significant milestones and made remarkable
                            progress in various projects.
                          </td>
                          <td>
                            <ul>
                              <li>Revenue: $1,200,000</li>
                              <li>Expenditure: $800,000</li>
                              <li>Profit: $400,000</li>
                            </ul>
                          </td>
                          <td>
                            <ul>
                              <li>Project A: Completed</li>
                              <li>Project B: Ongoing</li>
                              <li>Project C: Planned for 2024</li>
                            </ul>
                          </td>
                          <td>
                            Our future plans for 2024 include expanding our services to new
                            regions and launching innovative initiatives.
                          </td>
                        </tr>
                        <tr>
                          <td>2022</td>
                          <td>
                            In 2022, we focused on improving our existing services and
                            enhancing customer satisfaction.
                          </td>
                          <td>
                            <ul>
                              <li>Revenue: $1,000,000</li>
                              <li>Expenditure: $700,000</li>
                              <li>Profit: $300,000</li>
                            </ul>
                          </td>
                          <td>
                            <ul>
                              <li>Project X: Completed</li>
                              <li>Project Y: Completed</li>
                              <li>Project Z: Completed</li>
                            </ul>
                          </td>
                          <td>
                            For 2023, we plan to launch new projects and expand our reach to
                            serve more communities.
                          </td>
                        </tr>
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

export default RightToInformation
