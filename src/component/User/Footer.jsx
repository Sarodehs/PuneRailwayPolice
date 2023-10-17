import React from 'react'
// import { NavLink } from "react-router/-dom";
const Footer = () => {
  return (
    <div>  <div className='bgcolor'>
      <div className="row footer p-5">
        <div className="col-xl-2 col-md-4 col-sm-4">
          <img src="/assets/image/logo.png" className="img-fluid " alt="logo" /><br />
          {/* <img src="/assets/images/google-play-img.png" className="img-fluid w-25 m-3" alt="logo" />
        <img src="/assets/images/App_Store_Badge .png" className="img-fluid w-25" alt="logo" /><br /> */}
          <i className="fa-brands fa-facebook-square fs-3 p-2"></i>
          <i className="fa-brands fa-linkedin  fs-3 p-2"></i>
          <i className="fa-brands fa-twitter-square  fs-3 p-2"></i>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-4">
          <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
          <a class="nav-link text-white" href="/aboutus" >About Us</a>
          <a class="nav-link text-white" href="/quicklinks" >Quick Links</a>
          <a class="nav-link text-white" href="/contactus" >Contact Us</a>


        </div>
        <div className="col-xl-2 col-md-4 col-sm-4">
          <h5> Citizens Corner</h5>
          <a class="nav-link text-white" href="/citizencorner">How To Report Crime</a>
          {/* <a class="nav-link text-white" href="/#">Tips for citizens</a>
             <a class="nav-link text-white" href="/#">Mobile safety</a> */}
          <a class="nav-link text-white" href="/policerecruitment">Police Recruitment</a>
          <a class="nav-link text-white" href="/womenhelpdesk">Woman Help Desk</a>
        </div>
        <div className="col-xl-2 col-md-4 col-sm-4">
          <h5>   Police Corner</h5>
          <a class="nav-link text-white" href="/policewelfare">Police Welfare</a>
          <a class="nav-link text-white" href="/medicafacilities">Medical Facilities</a>
          <a class="nav-link text-white" href="/gazette">Gazette</a>
          <a class="nav-link text-white" href="/promotionorders">Promotion Orders</a>
          <a class="nav-link text-white" href="/gradationlist">Gradation List</a>
          <a class="nav-link text-white" href="/bmi">BMI</a>
          <a class="nav-link text-white" href="/circulars">Circulars</a>

        </div>
        <div className="col-xl-2 col-md-4 col-sm-4">
          <h5>    Report Us</h5>
          <a class="nav-link text-white" href="/lostfound">Found/Lost</a>
          <a class="nav-link text-white" href="/onlinecomplaint">Online Complaints</a>
          <a class="nav-link text-white" href="/feedbackenquiry">Feedback/Enquiry</a>
          <a class="nav-link text-white" href="/pressrelease">Press Release</a>
          <a class="nav-link text-white" href="/tender">Tenders</a>
          <a class="nav-link text-white" href="/photogallery">Photo Gallery</a>
        </div>

        <div className="col-xl-2 col-md-4 col-sm-4">
          <h5> Menu</h5>
           
         <a class="nav-link text-white" href="/flash">Flash</a>
           <a class="nav-link text-white" href="/buddybench">Buddy Bench</a>
           <a class="nav-link text-white" href="/beyondcallofduty">Beyond Call Of Duty</a>
           <a class="nav-link text-white" href="/firregistration">FIR Fegistration</a>
           <a class="nav-link text-white" href="/missingperson">Missing Person</a>
           <a class="nav-link text-white" href="/helpline">Help Line</a>
           <a class="nav-link text-white" href="/crimeinformation">Crime Information</a>
           <a class="nav-link text-white" href="/touristhelpdesks">Tourist Help Desks</a>
           <a class="nav-link text-white" href="/atrocitycases">Atrocity Cases</a>
          
           <a class="nav-link text-white" href="/righttoinformation">Right To Information</a>
           </div>
        {/* <div className="col-xl-2 col-md-4 col-sm-4">
        <h3>Subscribe to Newsletter</h3>
        <input type="text" className="form-control inputfocus bg-light " placeholder="Enter Your Email Address"
         aria-label="Username" aria-describedby="basic-addon1" />
        <div className="d-grid gap-2 col-4 pt-4">
          <button className="btn btn-light buttonfocuscolor2 rounded-pill " type="button">SUBSCRIBE</button>
        </div>
      </div> */}
      </div>
      <div className="footer1 bg-light text-dark justify-content-center align-items-center d-flex p-3">
        {/* <p>Copyright2022.All Rights Reserved</p> */}
        <p>Commissioner of Police, Railways, Pune, Maharashtra, India.</p>
        {/* <p>Designed & Developed by Company name</p> */}
      </div>
    </div></div>
  )
}

export default Footer