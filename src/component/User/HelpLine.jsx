import React from 'react'
import Header from './Header';
import Footer from './Footer';

const HelpLine = () => {
    const emergencyContacts = [
        {
          id: 1,
          type: 'Election',
          number: '1950',
        },
        {
          id: 2,
          type: 'Ambulance',
          number: '108',
        },
        {
          id: 3,
          type: 'Pune Municipal Corporation',
          number: '1800-1030-222',
        },
        {
          id: 4,
          type: 'Child Helpline',
          number: '1098',
        },
        {
          id: 5,
          type: 'NIC Service Desk',
          number: '1800-111-555',
        },
        {
          id: 6,
          type: 'Coronavirus Central Helpline',
          number: '011-23978043/46',
        },
        {
          id: 7,
          type: 'Police',
          number: '100',
        },
        {
          id: 8,
          type: 'Fire Brigade',
          number: '104',
        },
        {
          id: 9,
          type: 'Disaster Management Control Room',
          number: '1077',
        },
        {
          id: 10,
          type: 'Women Helpline',
          number: '1091',
        },
        // Add more emergency contacts as needed
      ];
    
      const cardStyle = {
        background: '#f3f3f3', 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        padding: '15px',
        height: '100%', 
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
      };
      
      // Style for the images
      const imageStyle = {
        maxWidth: '50px', // Adjust the maximum width of the image
        height: 'auto', // Automatically adjust the height to maintain aspect ratio
      };
    
      const getPlaceholderImage = (type) => {
        // Replace with your actual image paths
        switch (type.toLowerCase()) {
          case 'police':
            return '/assets/image/images/Police-Helpline.jpg'; // Example path
          case 'ambulance':
            return '/assets/image/images/Ambulance-Helpline.png'; // Example path
          case 'disaster management control room':
            return '/assets/image/images/Disaster-Management.webp'; // Corrected case
          case 'fire brigade':
            return '/assets/image/images/Fire-Brigade.png'; // Corrected case
          case 'women helpline':
            return '/assets/image/images/Women-Helpline.png'; // Corrected case
          case 'child helpline':
              return '/assets/image/images/Child-Helpline.png'; 
          case 'pune municipal corporation':
                return '/assets/image/images/Pune-Railway-Police.png';
          case 'nic service desk':
                return '/assets/image/images/NIC-Service-Desk.jpeg';
          case 'coronavirus central helpline':
                return '/assets/image/images/Corona-Virus-Helpline.webp'; 
          case 'election':
                return '/assets/image/images/Election.png';      
            default:
            return '/assets/image/images/default.png'; // Default image
        }
      };
  return (
    <div>
        <Header/>
        <div className="container">
      <div className="">
        <h1 className="card-title text-center mt-5">Railway Police Helpline</h1>
        <div className="card-body">
          <div className="row justify-content-center">
            {/* Left Column */}
            <div className="col-md-8 col-lg-8">
              <div className="row">
                {emergencyContacts.slice(0, 6).map((contact) => (
                  <div key={contact.id} className="col-md-6 mb-3">
                    <div className="card" style={cardStyle}>
                      <img
                        src={getPlaceholderImage(contact.type)}
                        alt={contact.type}
                        className="card-img-top"
                        style={imageStyle} // Apply the image style here
                      />
                      <div className="card-body">
                        <h5 className="card-title">{contact.type}</h5>
                        <p className="card-text">Contact Number: {contact.number}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-8 col-lg-8">
              <div className="row">
                {emergencyContacts.slice(6, 12).map((contact) => (
                  <div key={contact.id} className="col-md-6 mb-3">
                    <div className="card" style={cardStyle}>
                      <img
                        src={getPlaceholderImage(contact.type)}
                        alt={contact.type}
                        className="card-img-top"
                        style={imageStyle} // Apply the image style here
                      />
                      <div className="card-body">
                        <h5 className="card-title">{contact.type}</h5>
                        <p className="card-text">Contact Number: {contact.number}</p>
                      </div>
                    </div>
                  </div>
                ))}
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

export default HelpLine