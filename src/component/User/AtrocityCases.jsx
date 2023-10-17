import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AtrocityCases = () => {
  // Sample data for cases on page 1
  const page1Cases = [
    {
      srNo: 1,
      title: 'September 2023, Cases registered under SC & ST Prevention of Atrocity Act 1989 ',
    },
    {
      srNo: 2,
      title: 'August 2023, Cases registered under SC & ST Prevention of Atrocity Act 1989 ',
    },
    {
        srNo: 3,
        title: 'July 2023, Cases registered under SC & ST Prevention of Atrocity Act 1989 ',
      },
      {
        srNo: 4,
        title: 'June 2023, Cases registered under SC & ST Prevention of Atrocity Act 1989 ',
      },
      {
        srNo: 5,
        title: 'May 2023, Cases registered under SC & ST Prevention of Atrocity Act 1989 ',
      },
    // Add more cases as needed for page 1
  ];

  // Sample data for cases on page 2
  const page2Cases = [
    {
      srNo: 1,
      title: 'September 2023, Cases registered under SC & ST Prevention of Atrocity Act 1989 ',
    },
    {
      srNo: 2,
      title: 'August 2023, Cases registered under SC & ST Prevention of Atrocity Act 1989 ',
    },
    // Add more cases as needed for page 2
  ];

  // Sample data for cases on page 3
  const page3Cases = [
    {
      srNo: 1,
      title: 'September 2023, Cases registered under SC & ST Prevention of Atrocity Act 1989 ',
    },
    {
      srNo: 2,
      title: 'August 2023, Cases registered under SC & ST Prevention of Atrocity Act 1989 ',
    },
    // Add more cases as needed for page 3
  ];

  // Sample data for cases on page 4
  const page4Cases = [
    {
      srNo: 1,
      title: 'July 2022, Cases registered under SC & ST Prevention of Atrocity Act 1989 - ',
    },
    {
      srNo: 2,
      title: 'August 2022, Cases registered under SC & ST Prevention of Atrocity Act 1989 - ',
    },
    {
        srNo: 3,
        title: ' September 2022, Cases registered under SC & ST Prevention of Atrocity Act 1989 - ',
      },
      {
        srNo: 3,
        title: ' October 2022, Cases registered under SC & ST Prevention of Atrocity Act 1989 - ',
      },
      {
        srNo: 4,
        title: 'November 2022, Cases registered under SC & ST Prevention of Atrocity Act 1989 - ',
      },
    // Add more cases as needed for page 4
  ];

  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of items to display per page

  // Create an object to map page numbers to their respective cases
  const pagesData = {
    1: page1Cases,
    2: page2Cases,
    3: page3Cases,
    4: page4Cases,
  };

  // Get the cases to display on the current page
  const casesToDisplay = pagesData[currentPage] || [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
    <Header/>
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <div className="text-center">
            <div className="btn btn-primary">
              <h5 className="card-title">
                Cases registered under SC & ST (Prevention of Atrocity) Act 1989 - Page {currentPage}
              </h5>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">SR No</th>
                    <th scope="col">Title</th>
                    <th scope="col">Info</th>
                  </tr>
                </thead>
                <tbody>
                  {casesToDisplay.map((caseItem, index) => (
                    <tr key={index}>
                      <td>{caseItem.srNo}</td>
                      <td>{caseItem.title}</td>
                      <td>
                        <Link to={`/Atrocity/${caseItem.srNo}`} className="btn btn-primary">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination" style={{ backgroundColor: '#f2f2f2', marginTop: '20px', padding: '10px' }}>
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="btn btn-primary"
          >
            Previous
          </button>
        )}
        {Object.keys(pagesData).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`btn btn-primary ${currentPage === parseInt(pageNumber) ? 'active' : ''}`}
            onClick={() => handlePageChange(parseInt(pageNumber))}
          >
            {pageNumber}
          </button>
        ))}
        {currentPage < Object.keys(pagesData).length && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="btn btn-primary"
          >
            Next
          </button>
        )}
      </div>
    </div>


    <Footer/>
    </>
  )
}

export default AtrocityCases
