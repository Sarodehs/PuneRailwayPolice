
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/User/Home';
import Contactus from './component/User/Contactus';
import PoliceRecruitment from './component/User/PoliceRecruitment';
import Aboutus from './component/User/Aboutus';
import QuickLinks from './component/User/QuickLinks';
import PoliceWelfare from './component/User/PoliceWelfare';
import FeedbackEnquiry from './component/User/FeedbackEnquiry';
import LostFound from './component/User/LostFound';
import MobileTheft from './component/User/MobileTheft';
import WalletTheft from './component/User/WalletTheft';
import Absconders from './component/User/Absconders';
import CitizenCorner from './component/User/CitizenCorner';
import MedicaFacilities from './component/User/MedicaFacilities';
import Gazette from './component/User/Gazette';
import PromotionOrders from './component/User/PromotionOrders';
import Bmi from './component/User/Bmi';
import Circulars from './component/User/Circulars';
import GradationList from './component/User/GradationList';
import WomenHelpDesk from './component/User/WomenHelpDesk';
import TouristHelpDesks from './component/User/TouristHelpDesks';
import BeyondCallOfDuty from './component/User/BeyondCallOfDuty';
import BuddyBench from './component/User/BuddyBench';
import Flash from './component/User/Flash';
import CrimeInformation from './component/User/CrimeInformation';
import FIRRegistration from './component/User/FIRRegistration';
import MissingPerson from './component/User/MissingPerson';
import Tender from './component/User/Tender';
import HelpLine from './component/User/HelpLine';
import PhotoGallery from './component/User/PhotoGallery';
import AtrocityCases from './component/User/AtrocityCases';
import OnlineComplaint from './component/User/OnlineComplaint';
import RightToInformation from './component/User/RightToInformation';
import PressRelease from './component/User/PressRelease';


// admin
import AdminDashboard from "./component/Admin/AdminDashboard";
import AdminTicketsView from "./component/Admin/AdminTicketsView";
import AdminUser from './component/Admin/AdminUser';
import AdminHeadline from './component/Admin/AdminHeadline';
import AdminSpsMessage from './component/Admin/AdminSpsMessage';
import AdminSps from './component/Admin/AdminSps';
import AdminPositiveStory from './component/Admin/AdminPositiveStory';
import AdminWomenHelp from './component/Admin/AdminWomenHelp';
import AdminWomenCityTypes from './component/Admin/AdminWomenCityTypes';
import AdminContactOfficer from './component/Admin/AdminContactOfficer';
import AdminContactOfficeDivision from './component/Admin/AdminContactOfficeDivision';
import AdminPoliceStation from './component/Admin/AdminPoliceStation';
import AdminSpecialUnit from './component/Admin/AdminSpecialUnit';
import AdminOfficer from './component/Admin/AdminOfficer';
import AdminOfficerType from './component/Admin/AdminOfficerType';
import AdminSubDivision from './component/Admin/AdminSubDivision';
import AdminPressRelease from './component/Admin/AdminPressRelease';
import AdminTender from './component/Admin/AdminTender';
import AdminCrimeInformation from './component/Admin/AdminCrimeInformation';
import AdminDailyDutyChartFlash from './component/Admin/AdminDailyDutyChartFlash';
import AdminMedicalBills from './component/Admin/AdminMedicalBills';
import AdminRtirementList from './component/Admin/AdminRtirementList';
import AdminIncrementList from './component/Admin/AdminIncrementList';
import AdminCompassionList from './component/Admin/AdminCompassionList';
import AdminRecuirtment from './component/Admin/AdminRecuirtment';
import AdminBMI from './component/Admin/AdminBMI';
import AdminPromotionOrder from './component/Admin/AdminPromotionOrder';
import AdminCrimeStatics from './component/Admin/AdminCrimeStatics';
import AdminTransferOrder from './component/Admin/AdminTransferOrder';
import AdminGradationList from './component/Admin/AdminGradationList';
import AdminGazette from './component/Admin/AdminGazette';
import AdminRightToInformation from './component/Admin/AdminRightToInformation';
import AdminInfoProvoidedUnderRTI from './component/Admin/AdminInfoProvoidedUnderRTI';
import AdminAnnualAdminReport from './component/Admin/AdminAnnualAdminReport';
import AdminImprotantWebsites from './component/Admin/AdminImprotantWebsites';
import AdminCirculars from './component/Admin/AdminCirculars';
import AdminAddPhotosToAlbum from './component/Admin/AdminAddPhotosToAlbum';
import AdminAddAlbumName from './component/Admin/AdminAddAlbumName';
import AdminEmergencyContacts from './component/Admin/AdminEmergencyContacts';
import AdminCitizensAlert from './component/Admin/AdminCitizensAlert';









function App() {
 
  return (
    <>
          <BrowserRouter>
 
          <Routes>
       
          <Route path='/' index element={<Home />} />
          <Route path='/contactus' index element={<Contactus />} />
          <Route path='/policerecruitment' index element={<PoliceRecruitment />} />
          <Route path='/aboutus' index element={<Aboutus />} />
          <Route path='/quicklinks' index element={<QuickLinks />} />
          <Route path='/feedbackenquiry' index element={<FeedbackEnquiry />} />
          <Route path='/lostfound' index element={<LostFound />} />
          <Route path='/mobiletheft' index element={<MobileTheft />} />
          <Route path='/wallettheft' index element={<WalletTheft />} />
          <Route path='/absconders' index element={<Absconders />} />
          <Route path='/policewelfare' index element={<PoliceWelfare />} />
          <Route path='/citizencorner' index element={<CitizenCorner />} />
          <Route path='/medicafacilities' index element={<MedicaFacilities/>} />
          <Route path='/gazette' index element={<Gazette/>} />
          <Route path='/promotionorders' index element={<PromotionOrders/>} />
          <Route path='/bmi' index element={<Bmi/>} />
          <Route path='/circulars' index element={<Circulars/>} />
          <Route path='/gradationlist' index element={<GradationList/>} />
          <Route path='/beyondcallofduty' index element={<BeyondCallOfDuty/>} />
          <Route path='/buddybench' index element={<BuddyBench/>} />
          <Route path='/flash' index element={<Flash/>} />
          <Route path='/crimeinformation' index element={<CrimeInformation/>} />
          <Route path='/firregistration' index element={<FIRRegistration/>} />
          <Route path='/missingperson' index element={<MissingPerson/>} />
          <Route path='/tender' index element={<Tender/>} />
          <Route path='/helpline' index element={<HelpLine/>} />
          <Route path='/photogallery' index element={<PhotoGallery/>} />
          <Route path='/atrocitycases' index element={<AtrocityCases/>} />
          <Route path='/onlinecomplaint' index element={<OnlineComplaint/>} />
          <Route path='/righttoinformation' index element={<RightToInformation/>} />
          <Route path='/pressrelease' index element={<PressRelease/>} />          
          <Route path='/womenhelpdesk' index element={<WomenHelpDesk/>} />
          <Route path='/touristhelpdesks' index element={<TouristHelpDesks/>} />

          

           {/* admin start */}
       <Route path='/admindashboard' element={<AdminDashboard />} />
       <Route path='/adminuser' element={<AdminUser />} />
       <Route path='/adminticketview' element={<AdminTicketsView />} />
       <Route path='/adminheadline' element={<AdminHeadline />} />
       <Route path='/adminspsmessage' element={<AdminSpsMessage />} />
       <Route path='/adminsps' element={<AdminSps/>} />
       <Route path='/adminpositivestory' element={<AdminPositiveStory/>} />
       <Route path='/adminwomenhelp' element={<AdminWomenHelp/>} />
       <Route path='/adminwomencitytypes' element={<AdminWomenCityTypes/>} />
       <Route path='/admincontactofficer' element={<AdminContactOfficer/>} />
       <Route path='/admincontactofficedivision' element={<AdminContactOfficeDivision/>} />
       <Route path='/adminpolicestation' element={<AdminPoliceStation/>} />
       <Route path='/adminspecialunit' element={<AdminSpecialUnit/>} />
       <Route path='/adminofficer' element={<AdminOfficer/>} />
       <Route path='/adminofficertype' element={<AdminOfficerType/>} />
       <Route path='/adminsubdivision' element={<AdminSubDivision/>} />
       <Route path='/adminpressrelease' element={<AdminPressRelease/>} />
       <Route path='/admintender' element={<AdminTender/>} />
       <Route path='/admincrimeinformation' element={<AdminCrimeInformation/>} />
       <Route path='/admindailydutychartflash' element={<AdminDailyDutyChartFlash/>} />
       <Route path='/adminmedicalbills' element={<AdminMedicalBills/>} />
       <Route path='/adminrtirementlist' element={<AdminRtirementList/>} />
       <Route path='/adminincrementlist' element={<AdminIncrementList/>} />
       <Route path='/admincompassionlist' element={<AdminCompassionList/>} />
       <Route path='/adminrecuirtment' element={<AdminRecuirtment/>} />
       <Route path='/adminbmi' element={<AdminBMI/>} />
       <Route path='/adminpromotionorder' element={<AdminPromotionOrder/>} />
       <Route path='/admincrimestatics' element={<AdminCrimeStatics/>} />
       <Route path='/admintransferorder' element={<AdminTransferOrder/>} />
       <Route path='/admingradationlist' element={<AdminGradationList/>} />
       <Route path='/admingazette' element={<AdminGazette/>} />
       <Route path='/adminrighttoinformation' element={<AdminRightToInformation/>} />
       <Route path='/admininfoprovoidedUnderrti' element={<AdminInfoProvoidedUnderRTI/>} />
       <Route path='/adminannualadminreport' element={<AdminAnnualAdminReport/>} />
       <Route path='/adminimprotantwebsites' element={<AdminImprotantWebsites/>} />
       <Route path='/admincirculars' element={<AdminCirculars/>} />
       <Route path='/admincitizensalert' element={<AdminCitizensAlert/>} />
       <Route path='/adminemergencycontacts' element={<AdminEmergencyContacts/>} />
       <Route path='/adminaddalbumname' element={<AdminAddAlbumName/>} />
       <Route path='/adminaddphotostoalbum' element={<AdminAddPhotosToAlbum/>} />
      {/* admin end*/}
        </Routes>

      </BrowserRouter>
     

    
    </>

  );
}

export default App;
