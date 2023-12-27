import React, { useState, useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'

const PoliceRecruitment = () => {
  const [Recuirtment, setRecuirtment] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/recuirtment");
        if (response.ok) {
          const data = await response.json();
          setRecuirtment(data); // Update the state with the fetched data
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the function when the component mounts
    fetchData();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleView = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };
  return (
    <div> <div>
      <Header />
      <div>
        <div className=" col-md-10 col-xl-10 col-sm-10 offset-1  justify-content-center pe-0 ps-0" >
       
          <div className="row p-4">
            <div className="col-xl-12">
              <div className="card bgcolortwo">

                <form className="d-flex row m-3">
                  <div className="col-xl-2"> <h4>Recruitment </h4></div>
                  <div className="col-xl-3">  <input className="form-control" type="search" placeholder="Search" aria-label="Search" /></div>
                  {/* <DateRangePicker appe arance="subtle" placeholder="Subtle" style={{ width: 230 }} />         */}

                  {/* <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                  /> */}
                </form>
                <div className="card-body">
                <table className="table table-striped">
                    <thead className='table-primary'>
                      <tr>
                      <th scope="col">Sr No.</th>
                      <th scope="col">Title</th>
                        <th scope="col">Title in Marathi</th>
                        <th scope="col">Date</th>
                        <th scope="col">File</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">View</th>
                       <th scope="col-xl-1 col-md-1 col-sm-1" colspan="2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr></tr>
                      {Recuirtment.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.title}</td>
                          <td>{item.titleInMarathi}</td>
                          <td>{item.date}</td>
                          <td>
                            <a href={`http://localhost:5000/${item.file}`} target="blank">
                            
                                {item.file && item.file.toLowerCase().endsWith('.pdf') ? (
                                  <i className="material-icons text-dark">picture_as_pdf</i>
                                ) : (
                                  <i className="material-icons text-dark">insert_drive_file</i>
                                )}
                            
                            </a>
                          </td>
                          <td>{item.createdAt}</td>
                          <td>{item.updatedAt}</td>
                          <td><button type="button" onClick={() => handleView(item)} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> View </button></td>
                       
                        </tr>
                      ))}

                    </tbody>
                  </table> 




                  {/* <!-- Modal --> */}
                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"  style={{ display: modalOpen ? 'block' : 'none' }}>
                              <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">RtirementList</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                         <div className="modal-body">
                          {selectedItem && (
                            <>
                              <p>{selectedItem.createdAt}</p>
                              <p>{selectedItem.title}</p>
                              {/* Display other fields of the selectedItem */}
                            </>
                          )}
                        </div> </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          {/* <button type="button" class="btn btn-primary">PDF</button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <Footer />

    </div></div>
  )
}

export default PoliceRecruitment