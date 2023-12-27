import React, { useState, useEffect } from 'react';
import Sidenav from './Sidenav'
import Topnav from './Topnav'
// import { NavLink } from 'react-router-dom'



const AdminDashboard = () => {

    // get all
    const [User, setUser] = useState([]);

    useEffect(() => {
        // Define a function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/users");
                if (response.ok) {
                    const data = await response.json();
                    setUser(data); // Update the state with the fetched data
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


    // get all
    const [Headline, setHeadline] = useState([]);

    useEffect(() => {
        // Define a function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/headlines");
                if (response.ok) {
                    const data = await response.json();
                    setHeadline(data); // Update the state with the fetched data
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


    const [Spsmessage, setSpsmessage] = useState([]);

    useEffect(() => {
        // Define a function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/spsMessage");
                if (response.ok) {
                    const data = await response.json();
                    setSpsmessage(data); // Update the state with the fetched data
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

    // get all
    const [Sps, setSps] = useState([]);

    useEffect(() => {
        // Define a function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/sp");
                if (response.ok) {
                    const data = await response.json();
                    setSps(data); // Update the state with the fetched data
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

    const [PositiveStory, setPositiveStory] = useState([]);

    useEffect(() => {
        // Define a function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/positiveStories");
                if (response.ok) {
                    const data = await response.json();
                    setPositiveStory(data); // Update the state with the fetched data
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

    const [WomenCityTypes, setWomenCityTypes] = useState([]);

    useEffect(() => {
        // Define a function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/womenCityType");
                if (response.ok) {
                    const data = await response.json();
                    console.log("Fetched data:", data);
                    setWomenCityTypes(data); // Update the state with the fetched data
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




    const [WomenHelpDesk, setWomenHelpDesk] = useState([]);

    useEffect(() => {
        // Define a function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/womenHelpDesk");
                if (response.ok) {
                    const data = await response.json();
                    setWomenHelpDesk(data); // Update the state with the fetched data
                } else {
                    console.error("Failed to fetch data Status}");
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        // Call the function when the component mounts
        fetchData();
    }, []);


    const [ContactOfficer, setContactOfficer] = useState([]);

    useEffect(() => {
        // Define a function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/contactOfficer");
                if (response.ok) {
                    const data = await response.json();
                    setContactOfficer(data); // Update the state with the fetched data
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

    const [ContactOfficerDivision, setContactOfficerDivision] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/contactOfficerDivision");
          if (response.ok) {
            const data = await response.json();
            setContactOfficerDivision(data); // Update the state with the fetched data
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
  
  
    const [PoliceStation, setPoliceStation] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/policeStation");
          if (response.ok) {
            const data = await response.json();
            setPoliceStation(data); // Update the state with the fetched data
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
  
    const [SpecialUnit, setSpecialUnit] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/specialUnit");
          if (response.ok) {
            const data = await response.json();
            setSpecialUnit(data); // Update the state with the fetched data
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
  
    const [Officer, setOfficer] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/officer");
        if (response.ok) {
          const data = await response.json();
          setOfficer(data); // Update the state with the fetched data
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


  const [OfficerType, setOfficerType] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/officerType");
        if (response.ok) {
          const data = await response.json();
          setOfficerType(data); // Update the state with the fetched data
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

  const [SubDivision, setSubDivision] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/subdivision");
        if (response.ok) {
          const data = await response.json();
          setSubDivision(data); // Update the state with the fetched data
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


  const [PressRelease, setPressRelease] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/pressRelease");
        if (response.ok) {
          const data = await response.json();
          setPressRelease(data);
          console.log(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);


  const [Tender, setTender] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/tender");
        if (response.ok) {
          const data = await response.json();
          setTender(data); // Update the state with the fetched data
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

  const [CrimeInformation, setCrimeInformation] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/crimeInformation");
        if (response.ok) {
          const data = await response.json();
          setCrimeInformation(data); // Update the state with the fetched data
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

  const [DailyDutyChartFlash, setDailyDutyChartFlash] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/dailyDutyChart");
        if (response.ok) {
          const data = await response.json();
          setDailyDutyChartFlash(data); // Update the state with the fetched data
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


  const [medicalBills, setMedicalBills] = useState([]);

 
  // Fetch medical bills data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/medicalBill');
        if (response.ok) {
          const data = await response.json();
          setMedicalBills(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);


  const [RtirementList, setRtirementList] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/retirementList");
        if (response.ok) {
          const data = await response.json();
          setRtirementList(data); // Update the state with the fetched data
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


  const [IncrementList, setIncrementList] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/incrementList");
        if (response.ok) {
          const data = await response.json();
          setIncrementList(data); // Update the state with the fetched data
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

  const [CompassionList, setCompassionList] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/compassionlist");
        if (response.ok) {
          const data = await response.json();
          setCompassionList(data); // Update the state with the fetched data
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

    const [BMI, setBMI] = useState([]);
    useEffect(() => {
        const fetchBMI = async () => {
            try {
                const response = await fetch("http://localhost:5000/bmi");
                if (response.ok) {
                    const data = await response.json();
                    setBMI(data);
                } else {
                    console.error('Failed to fetch BMI data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchBMI();
    }, []);

    const [PromotionOrder, setPromotionOrder] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/promotionOrders");
          if (response.ok) {
            const data = await response.json();
            setPromotionOrder(data); // Update the state with the fetched data
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
  

    const [CrimeStatics, setCrimeStatics] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/crimeStatistics");
          if (response.ok) {
            const data = await response.json();
            setCrimeStatics(data); // Update the state with the fetched data
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
  
    const [TransferOrder, setTransferOrder] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/transferOrders");
          if (response.ok) {
            const data = await response.json();
            setTransferOrder(data); // Update the state with the fetched data
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
  
    const [GradationList, setGradationList] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/gradationlist");
          if (response.ok) {
            const data = await response.json();
            setGradationList(data); // Update the state with the fetched data
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
  
    const [Gazette, setGazette] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/gazette");
          if (response.ok) {
            const data = await response.json();
            setGazette(data); // Update the state with the fetched data
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
  
    const [RightToInformation, setRightToInformation] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/rightToInformation");
          if (response.ok) {
            const data = await response.json();
            setRightToInformation(data); // Update the state with the fetched data
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
  
    const [InfoProvoidedUnderRTI, setInfoProvoidedUnderRTI] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/informationProvidedByRti");
          if (response.ok) {
            const data = await response.json();
            setInfoProvoidedUnderRTI(data); // Update the state with the fetched data
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
  
    const [AnnualAdminReport, setAnnualAdminReport] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/annualadminreport");
          if (response.ok) {
            const data = await response.json();
            setAnnualAdminReport(data); // Update the state with the fetched data
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
  
    const [ImprotantWebsites, setImprotantWebsites] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/importantWebsites");
          if (response.ok) {
            const data = await response.json();
            setImprotantWebsites(data); // Update the state with the fetched data
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
    
    const [Circulars, setCirculars] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/circulars");
          if (response.ok) {
            const data = await response.json();
            setCirculars(data); // Update the state with the fetched data
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
  
    const [CitizensAlert, setCitizensAlert] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/citizensAlert");
          if (response.ok) {
            const data = await response.json();
            setCitizensAlert(data); // Update the state with the fetched data
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

    const [Contact, setContact] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/emergencyContacts");
          if (response.ok) {
            const data = await response.json();
            setContact(data); // Update the state with the fetched data
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

    
    const [AddAlbumName, setAddAlbumName] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/addAlbumName");
          if (response.ok) {
            const data = await response.json();
            setAddAlbumName(data); // Update the state with the fetched data
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
  

    const [AddPhotos, setAddPhotos] = useState([]);

    useEffect(() => {
      // Define a function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/addPhotosToAlbum");
          if (response.ok) {
            const data = await response.json();
            setAddPhotos(data); // Update the state with the fetched data
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
  
    return (
        <div>

            <div className="">
                {/* <Topnav/> */}
                <div className="row">
                    {/* <!-- side nav start --> */}
                    <div className="col-md-2 col-xl-2 col-sm-2" >
                        <Sidenav />
                    </div>
                    {/* <!-- side nav end --> */}

                    {/* <!-- Content area start --> */}
                    <div className=" col-md-10 col-xl-10 col-sm-10 adminbgcolor justify-content-center pe-0 ps-0" >
                        {/* Topnav start*/}
                        <Topnav />
                        {/* topnav end*/}


                        {/* <!-- dashboard card one start --> */}
                        <div className="row text-center p-3 bg">

                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">

                                    <div>
                                        <h6>User </h6>
                                        <h3>{User.length}</h3>
                                    </div>
                                </div>

                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    <div>
                                        <h6>Headline </h6>
                                        <h3>{Headline.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">

                                    <div >
                                        <h6>Sps Message</h6>
                                        <h3>{Spsmessage.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Sps</h6>
                                        <h3>{Sps.length}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row text-center p-3 bg">

                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-success">business_center</span> */}
                                    <div >
                                        <h6>Positive Story</h6>
                                        <h3>{PositiveStory.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-warning">stars</span> */}
                                    <div >
                                        <h6>Women Help Desk</h6>
                                        <h3>{WomenHelpDesk.length}</h3>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>WomenCityTypes</h6>
                                        <h3>{WomenCityTypes.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>ContactOfficer</h6>
                                        <h3>{ContactOfficer.length}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row text-center p-3 bg">

                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-success">business_center</span> */}
                                    <div >
                                        <h6>Contact Officer Division</h6>
                                        <h3>{ContactOfficerDivision.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-warning">stars</span> */}
                                    <div >
                                        <h6>Police Station</h6>
                                        <h3>{PoliceStation.length}</h3>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Special Unit</h6>
                                        <h3>{SpecialUnit.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Officer</h6>
                                        <h3>{Officer.length}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row text-center p-3 bg">

                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-success">business_center</span> */}
                                    <div >
                                        <h6>Officer Type</h6>
                                        <h3>{OfficerType.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-warning">stars</span> */}
                                    <div >
                                        <h6>Sub Division</h6>
                                        <h3>{SubDivision.length}</h3>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Press Release</h6>
                                        <h3>{PressRelease.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Tender</h6>
                                        <h3>{Tender.length}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row text-center p-3 bg">

                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-success">business_center</span> */}
                                    <div >
                                        <h6>Crime Information</h6>
                                        <h3>{CrimeInformation.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-warning">stars</span> */}
                                    <div >
                                        <h6>Daily Duty Chart Flash</h6>
                                        <h3>{DailyDutyChartFlash.length}</h3>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>medical Bills</h6>
                                        <h3>{medicalBills.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Rtirement List</h6>
                                        <h3>{RtirementList.length}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row text-center p-3 bg">

                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-success">business_center</span> */}
                                    <div >
                                        <h6>Increment List</h6>
                                        <h3>{IncrementList.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-warning">stars</span> */}
                                    <div >
                                        <h6>Compassion List</h6>
                                        <h3>{CompassionList.length}</h3>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Recuirtment</h6>
                                        <h3>{Recuirtment.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>BMI</h6>
                                        <h3>{BMI.length}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row text-center p-3 bg">

                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-success">business_center</span> */}
                                    <div >
                                        <h6>Promotion Order</h6>
                                        <h3>{PromotionOrder.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-warning">stars</span> */}
                                    <div >
                                        <h6>Crime Statics</h6>
                                        <h3>{CrimeStatics.length}</h3>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Transfer Order</h6>
                                        <h3>{TransferOrder.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Gradation List</h6>
                                        <h3>{GradationList.length}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row text-center p-3 bg">

                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-success">business_center</span> */}
                                    <div >
                                        <h6>Gazette</h6>
                                        <h3>{Gazette.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-warning">stars</span> */}
                                    <div >
                                        <h6>Right To Information</h6>
                                        <h3>{RightToInformation.length}</h3>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Info Provoided Under RTI</h6>
                                        <h3>{InfoProvoidedUnderRTI.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Annual Admin Report</h6>
                                        <h3>{AnnualAdminReport.length}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row text-center p-3 bg">

                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-success">business_center</span> */}
                                    <div >
                                        <h6>Improtant Websites</h6>
                                        <h3>{ImprotantWebsites.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-warning">stars</span> */}
                                    <div >
                                        <h6>Circulars</h6>
                                        <h3>{Circulars.length}</h3>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6>Citizens Alert</h6>
                                        <h3>{CitizensAlert.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-danger">person</span> */}
                                    <div >
                                        <h6> Emergency Contact</h6>
                                        <h3>{Contact.length}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row text-center p-3 bg">

                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-success">business_center</span> */}
                                    <div >
                                        <h6>Add Album Name</h6>
                                        <h3>{AddAlbumName.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 pe-3">
                                <div className="card p-3">
                                    {/* <span className="material-icons fs-1 text-warning">stars</span> */}
                                    <div >
                                        <h6>Add Photos</h6>
                                        <h3>{AddPhotos.length}</h3>
                                    </div>

                                </div>
                            </div>
                          
                        </div>


                        {/* <!-- Content area start --> */}
                    </div>
                    {/* <Footer /> */}
                </div>

            </div>
        </div>
    );
}

export default AdminDashboard