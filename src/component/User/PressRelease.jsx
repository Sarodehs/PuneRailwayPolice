import Footer from "./Footer";
import Header from "./Header"


import React, { useState } from 'react';

// Define the data arrays outside the component
const page1Cases = [
  {
    srNo: 1,
    issueDate: '2023-09-25',
    description: 'पुणे रेल्वे स्टेशन हद्दीत जबरी चोरी व लॅपटॉप चोऱ्या करणाऱ्या परराज्यातील आरोपीना स्थानिक गुन्हे शाखा लोहमार्ग पुणे यांनी केले जेरबंद',
  },
  {
    srNo: 2,
    issueDate: '2023-09-26',
    description: 'स्वातंत्रदिनाचे औचित्य साधून पुणे लोहमार्ग पोलिसांकडून विविध कार्यक्रमांचे आयोजन , तसेच गहाळ झालेले मोबाइल मूळ मालकांना परत .',
  },
  {
    srNo: 3,
    issueDate: '2023-09-26',
    description: 'पुणे लोहमार्ग पोलिसांनी जप्त केलेले १ हजार किलोचे अमली पदार्थ नष्ट .',
  },
  {
    srNo: 4,
    issueDate: '2023-09-26',
    description: 'कार्यक्रम पत्रिका -दि. ०८/०६/२०२३ रोजी लोहमार्ग पोलीस दलात उत्कृष्ट काम करणारे पोलीस अधिकारी / अंमलदार यांचा सत्कार समारंभ कार्यक्रम पत्रिका',
  },
  // Add more data as needed
];

const page2Cases = [
  {
    srNo: 1,
    issueDate: '2023-05-25',
    description: 'लोहमार्ग पुणे पोलीस अधीक्षक श्री. श्रीकांत धिवरे यांचा संवेदनशील भागात दौरा',
  },
  {
    srNo: 2,
    issueDate: '2023-09-26',
    description: 'कुर्डुवाडी लोहमार्ग पोलिसांची कामगिरी रोख रखमेसह सोने चांदीचे दागिने केले परत',
  },
  {
    srNo: 3,
    issueDate: '2023-09-26',
    description: 'पुणे रेल्वे पोलीसांनी प्रामाणिक कर्तव्य करून मुद्देमाल केला परत',
  },
  {
    srNo: 4,
    issueDate: '2023-09-26',
    description: 'सोलापूर रेल्वे पोलिसांकडून चोरीच्या गुन्ह्यात अटक ०३ आरोपींकडून ०४ गुन्हे उघड व मुद्देमाल जप्त',
  },
  // Add more data as needed
];

const page3Cases = [
  {
    srNo: 1,
    issueDate: '2023-09-25',
    description: 'चोरीच्या गुन्ह्यातील मुद्देमालासह ०२ आरोपीना दौंड रेल्वे पोलिसांकडून अटक',
  },
  {
    srNo: 2,
    issueDate: '2023-09-26',
    description: 'सोलापूर लोहमार्ग पोलीसांची कामगिरी',
  },
  {
    srNo: 3,
    issueDate: '2023-09-26',
    description: 'पुणे लोहमार्ग पोलिसांनी जप्त केलेले १ हजार किलोचे अमली पदार्थ नष्ट .',
  },
  {
    srNo: 4,
    issueDate: '2023-09-26',
    description: 'दौंड लोहमार्ग पोलीसांची कामगिरी',
  },
  // Add more data as needed
];

const page4Cases = [
  {
    srNo: 1,
    issueDate: '2023-09-25',
    description: 'लोणावळा रेल्वे स्टेशन येथे विसरलेली बॅग प्रवाश्याच्या ताब्यात',
  },
  {
    srNo: 2,
    issueDate: '2023-09-26',
    description: '*तीन आरोपितांकडून चार गुन्ह्यातील पाच मोबाईल हस्तगत केलेबाबत.*',
  },
  {
    srNo: 3,
    issueDate: '2023-09-26',
    description: 'कुर्डुवाडी लोहमार्ग पोलिसांच्या माणुसकीचे दर्शन - रेल्वे पोलिसांच्या प्रसंगावधनामुळे प्रवाशी महिलेने दिला गोंडस मुलीला जन्म',
  },
  {
    srNo: 4,
    issueDate: '2023-09-26',
    description: 'पुणे लोहमार्ग पोलिसांच्या अथक प्रयत्नाने अपहरण झालेला मुलगा सुखरूप पालकांच्या ताब्यात',
  },
  // Add more data as needed
];

const PressRelease = () => {
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

  const totalPages = Math.ceil(casesToDisplay.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
    <Header/>
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <div className="text-center">
            <div className="btn btn-primary">
              <h5 className="card-title">Press Release</h5>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>Issue Date</th>
                    <th>Description</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {casesToDisplay.map((item, index) => (
                    <tr key={index}>
                      <td>{item.srNo}</td>
                      <td>{item.issueDate}</td>
                      <td>{item.description}</td>
                      <td>
                        <button className="btn btn-primary">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
    </div>
    <Footer/>
    </div>
  );
};

export default PressRelease;
