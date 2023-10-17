import React from 'react'

const Header = () => {
  return (
    <div>
      
      <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-text">
      punerailway.service@punepolice.gov.in
      </span>
      <span class="navbar-text">
      EMERGENCY Response Support System : 112
      </span>
      <span class="navbar-text">
      Follow Us on : 
        <i className="fa-brands fa-facebook-square fs-3 p-2"></i>
        <i className="fa-brands fa-linkedin  fs-3 p-2"></i>
        <i className="fa-brands fa-twitter-square  fs-3 p-2"></i>
      </span>
      <span class="navbar-text">
      English / Hindi
      </span>
    </div>
  </nav>





      <nav class="navbar navbar-expand-lg navbar-light bgcolor">
    <div class="container-fluid ">
      <a class="navbar-brand" href="/#"> <img src="/assets/image/logo.png" alt="Home" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
          </li>
          
         
          <li class="nav-item">
            <a class="nav-link text-white" href="/aboutus" tabindex="-1" aria-disabled="true">About Us</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Citizens Corner
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/citizencorner">How To Report Crime</a></li>
              {/* <li><a class="dropdown-item" href="/#">Tips for citizens</a></li>
              <li><a class="dropdown-item" href="/#">Mobile safety</a></li> */}
              <li><a class="dropdown-item" href="/policerecruitment">Police Recruitment</a></li>
              <li><a class="dropdown-item" href="/womenhelpdesk">Woman Help Desk</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Police Corner
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/policewelfare">Police Welfare</a></li>
              <li><a class="dropdown-item" href="/medicafacilities">Medical Facilities</a></li>
              <li><a class="dropdown-item" href="/gazette">Gazette</a></li>
              <li><a class="dropdown-item" href="/promotionorders">Promotion Orders</a></li>
              <li><a class="dropdown-item" href="/gradationlist">Gradation List</a></li>
              <li><a class="dropdown-item" href="/bmi">BMI</a></li>
              <li><a class="dropdown-item" href="/circulars">Circulars</a></li>
            </ul>
          </li>
         
          <li class="nav-item">
            <a class="nav-link text-white" href="/quicklinks" tabindex="-1" aria-disabled="true">Quick Links</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Report Us
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/lostfound">Found/Lost</a></li>
              <li><a class="dropdown-item" href="/onlinecomplaint">Online Complaints</a></li>
              <li><a class="dropdown-item" href="/feedbackenquiry">Feedback/Enquiry</a></li>
              <li><a class="dropdown-item" href="/pressrelease">Press Release</a></li>
              <li><a class="dropdown-item" href="/tender">Tenders</a></li>
              <li><a class="dropdown-item" href="/photogallery">Photo Gallery</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/contactus" tabindex="-1" aria-disabled="true">Contact Us</a>
          </li>

          <li class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle  text-white" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul class="dropdown-menu  text-white" aria-labelledby="navbarDropdown">
          
            <li><a class="dropdown-item" href="/flash">Flash</a></li>
            <li><a class="dropdown-item" href="/buddybench">Buddy Bench</a></li>
            <li><a class="dropdown-item" href="/beyondcallofduty">Beyond Call Of Duty</a></li>
            <li><a class="dropdown-item" href="/firregistration">FIR Fegistration</a></li>
            <li><a class="dropdown-item" href="/missingperson">Missing Person</a></li>
            <li><a class="dropdown-item" href="/helpline">Help Line</a></li>
            <li><a class="dropdown-item" href="/crimeinformation">Crime Information</a></li>
            <li><a class="dropdown-item" href="/touristhelpdesks">Tourist Help Desks</a></li>
            <li><a class="dropdown-item" href="/atrocitycases">Atrocity Cases</a></li>
          
            <li><a class="dropdown-item" href="/righttoinformation">Right To Information</a></li>
          
            
           </ul>
        </li>

        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav></div>
  )
}

export default Header