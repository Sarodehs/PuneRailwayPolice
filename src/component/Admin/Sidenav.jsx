import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div> <div className=" adminsidebarscroll">
    <div className=" row admin_bg-light">
        {/* <!-- side nav start --> */}
        <div className=" col-md-12 col-xl-12 col-sm-12 pe-0" >
            <div className="d-flex flex-column  w-100 ">
            <div className="navbar-nav  d-flex justify-content-center p-3 ">
                            <img src="/assets/image/logo.png" className="img-fluid w-25" alt="logo" />
                        </div>
                <ul className="nav  flex-column mb-sm-auto mb-0 sidebar align-items-center align-items-sm-start " id="menu">
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/admindashboard" className="text-decoration-none " > <a href="/#" className="nav-link align-middle  d-flex ">
                        <span className="material-icons">space_dashboard</span><span className="ms-3 d-none d-md-inline "> Dashboard </span>
                        </a></NavLink>
                    </li>
                   
                   
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminuser" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span> <span className="ms-3 d-none d-md-inline"> User</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminheadline" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span> <span className="ms-3 d-none d-md-inline"> Headline</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminspsmessage" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline"> SpsMessage</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminsps" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline"> Sps</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminpositivestory" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline"> Positive Story</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminwomenhelp" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline"> Women Help</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminwomencitytypes" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Women City Types</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/admincontactofficer" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Contact Officer</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/admincontactofficedivision" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Contact Officer Division</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminpolicestation" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Police Station</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminspecialunit" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Special Unit</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminofficer" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Officer</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminofficertype" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Officer Type</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminsubdivision" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Sub Division</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminpressrelease" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Press Release</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/admintender" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Tender</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/admincrimeinformation" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Crime Information</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/admindailydutychartflash" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Daily Duty Chart Flash</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminmedicalbills" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Medical Bills</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminrtirementlist" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Rtirement List</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminincrementlist" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Increment List</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/admincompassionlist" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Compassion List</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminrecuirtment" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Recuirtment</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminbmi" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">BMI</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminpromotionorder" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Promotion Order</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/admincrimestatics" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Crime Statics</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/admintransferorder" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Transfer Order</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/admingradationlist" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Gradation List</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/admingazette" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Gazette</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminrighttoinformation" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Right To Information</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/admininfoprovoidedunderrti" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Info Provoided Under RTI</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminannualadminreport" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Annual Admin Report</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminimprotantwebsites" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Improtant Websites</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/admincirculars" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Circulars</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/admincitizensalert" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Citizens Alert</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminemergencycontacts" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Emergency Contacts</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminaddalbumname" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Add Album Name</span>
                        </a></NavLink>
                    </li>
                    <li className={({ isActive }) => (isActive ? 'main-nav-active' : 'inactive')}>
                        <NavLink to="/adminaddphotostoalbum" className="text-decoration-none "><a href="/#" className="nav-link  align-middle d-flex">
                        <span className="material-icons">east</span><span className="ms-3 d-none d-md-inline">Add Photos To Album</span>
                        </a></NavLink>
                    </li>





                </ul>
            </div>
        </div>
        {/* <!-- side nav end --> */}
    </div>
   
</div>
</div>
  )
}

export default Sidenav