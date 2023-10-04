import { useEffect, useState } from "react";
import "./App.css";
import "./assets/css/Style.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "react-bootstrap";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Header from "./components/common/Header";
import Home from "./components/Customer Flow/Home";
import Recomended from "./components/Customer Flow/Recomended";
import NewFlinsta from "./components/Customer Flow/NewFlinsta";
import Review from "./components/Customer Flow/Review";
import AppointmentHome from "./components/Customer Flow/AppointmentHome";
import Footer from "./components/common/Footer";
import Decadence from "./components/Customer Flow/Decadence";
import CardSlider from "./components/common/CardSlider";
import Demo from "./components/Customer Flow/Demo";
import PartnerForm from "./components/Customer Flow/PartnerForm";
import ColorHighlights from "./components/Customer Flow/ColorHighlights";
import CuttingStyling from "./components/Customer Flow/CuttingStyling";
import Face from "./components/Customer Flow/Face";
import Feet from "./components/Customer Flow/Feet";
import HairExtension from "./components/Customer Flow/HairExtension";
import HairRemoval from "./components/Customer Flow/HairRemoval";
import HairTreatments from "./components/Customer Flow/HairTreatments";
import Hands from "./components/Customer Flow/Hands";
import LashesBrows from "./components/Customer Flow/LashesBrows";
import Massage from "./components/Customer Flow/Massage";
import PackagesOffers from "./components/Customer Flow/PackagesOffers";
import ServicesPage2 from "./components/Customer Flow/ServicesPage2";
import ServiceDisplayRightSection from "./components/common/ServiceDisplayRightSection";
import SelectServicePage from "./components/Customer Flow/SelectServicePage";
import ServiceMenuSlider from "./components/common/ServiceMenuSlider";
import SelectServiceContent from "./components/Customer Flow/SelectServiceContent";
import SelectServiceMain from "./components/Customer Flow/SelectserviceMain";
import RightSidepage from "./components/Customer Flow/RightSidepage";
import SelectStaf from "./components/Customer Flow/SelectStaf";
import ArtistCalendar from "./components/Customer Flow/ArtistCalendar";
import Reviewconfirm from "./components/Customer Flow/ReviewConfirm";
import ReviewInconfirmation from "./components/Customer Flow/ReviewInconfirmation";
import Splash from "./components/common/Splash";
import BookingMainPage from "./components/Customer Flow/BookingMainPage";
import ScrollAllImages from "./components/Customer Flow/Scrollall_Images";
import SeeallImagesGrid from "./components/Customer Flow/SeeallImages";
import All_Login from "./components/Login/All_Login";
import LoginForm from "./components/Login/Customer login/Login2";
import Signup from "./components/Login/Customer login/Signup";
import ForgetPage from "./components/Login/Customer login/ForgetPage";
import ForgetPassword from "./components/Login/Customer login/ForgetPassword";
import Otp from "./components/Login/Customer login/Otp";
import ResetPassword from "./components/Login/Customer login/ResetPassword";
import For_Business from "./components/Login/Business Login/For_Business";
import Create_account from "./components/Login/Business Login/Create_account";
import BusinessName from "./components/Login/Business Login/BusinessName";
import BusinessServices from "./components/Login/Business Login/BusinessServices";
import SetLocation from "./components/Login/Business Login/SetLocation";
import MobileNumber from "./components/Login/Business Login/MobileNumber";
import BusinessMobileVerification from "./components/Login/Business Login/BusinessMobileVerification";
import BusinessTeamSize from "./components/Login/Business Login/BusinessTeamSize";
import BusinessSoftware from "./components/Login/Business Login/BusinessSoftware";
import HearFlinsta from "./components/Login/Business Login/HearFlinsta";
import SearchBar from "./components/Customer Flow/SearchBar";
import { OptionProvider } from "./components/Customer Flow/OptionContext";
import Membership from "./components/Customer Flow/Membership";
import MembershipAddQuantity from "./components/Customer Flow/MembershipAddQuantity";
import MembershipLogin from "./components/Customer Flow/MembershipLogin";
import MembershipSignup from "./components/Customer Flow/MembershipSignup";
import MembershipRightside from "./components/Customer Flow/MembershipRightside";
import MembershipSignupEmail from "./components/Customer Flow/MembershipSignupEmail";
import Voucher from "./components/Customer Flow/Voucher";
import VoucherAddQuantity from "./components/Customer Flow/VoucherAddQuantity";
import VoucherChooserecipitent from "./components/Customer Flow/VoucherChooserecipitent";
import VoucherRightside from "./components/Customer Flow/VoucherRightside";
import Emailasgiftvoucher from "./components/Customer Flow/Emailasgiftvoucher";
import PrintasgiftVoucher from "./components/Customer Flow/PrintasgiftVoucher";


function App() {
  // splash screen
  const [loading, setLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState(null);

  // Simulate a delay to represent the app loading process
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2600); // Adjust the delay time as needed
  }, []);

  const handleSidebarItemClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <>
      <OptionProvider>
        {loading ? (
          <Splash />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/demo" element={<Demo />}></Route>
              <Route path="/header" element={<Header />}></Route>
              <Route path="/footer" element={<Footer />}></Route>
              <Route path="/flinsta" element={<Home />}></Route>
              <Route path="/recomended" element={<Recomended />}></Route>
              <Route path="/newFlinsta" element={<NewFlinsta />}></Route>
              <Route path="/review" element={<Review />}></Route>
              <Route path="/appointmentHome" element={<AppointmentHome />}></Route>
              {/* Decadence */}
              <Route path="/decadence" element={<Decadence />}>
                <Route path="" element={<ColorHighlights />}></Route>
                <Route path="colorHighlights" element={<ColorHighlights />}></Route>
                <Route path="cuttingStyling" element={<CuttingStyling />}></Route>
                <Route path="face" element={<Face />}></Route>
                <Route path="feet" element={<Feet />}></Route>
                <Route path="hairExtension" element={<HairExtension />}></Route>
                <Route path="hairRemoval" element={<HairRemoval />}></Route>
                <Route path="hairTreatments" element={<HairTreatments />}></Route>
                <Route path="hands" element={<Hands />}></Route>
                <Route path="lashesBrows" element={<LashesBrows />}></Route>
                <Route path="massage" element={<Massage />}></Route>
                <Route path="packagesOffers" element={<PackagesOffers />}></Route>
              </Route>
              <Route path="/partnerForm" element={<PartnerForm />}></Route>
              {/* login flow */}
              <Route path="/allLogin" element={<All_Login />}></Route>
              <Route path="/login" element={<LoginForm />}></Route>
              <Route path="/signUp" element={<Signup />}></Route>
              <Route path="/forgetPage" element={<ForgetPage />}></Route>
              <Route path="/forgetPassword" element={<ForgetPassword />}></Route>
              <Route path="/otp" element={<Otp />}></Route>
              <Route path="/resetPassword" element={<ResetPassword />}></Route>
              <Route path="/forBusiness" element={<For_Business />}></Route>
              <Route path="/createBusinessAccount" element={<Create_account />}></Route>
              <Route path="/businessName" element={<BusinessName />}></Route>
              <Route path="/businessServices" element={<BusinessServices />}></Route>
              <Route path="/setLocation" element={<SetLocation />}></Route>
              <Route path="/mobileNumber" element={<MobileNumber />}></Route>
              <Route path="/businessMobileVerification" element={<BusinessMobileVerification />}></Route>
              <Route path="/businessTeamSize" element={<BusinessTeamSize />}></Route>
              <Route path="/businessSoftware" element={<BusinessSoftware />}></Route>
              <Route path="/hearFlinsta" element={<HearFlinsta />}></Route>

              {/* customer flow */}
              <Route path="/serviceDisplayRightSection" element={<ServiceDisplayRightSection />}></Route>
              <Route path="/selectServicePage" element={<SelectServicePage />}></Route>
              <Route path="/servicesPage2" element={<ServicesPage2 />}></Route>
              <Route path="/serviceMenuSlider" element={<ServiceMenuSlider />}></Route>

              <Route path="/selectServiceContent" element={<SelectServiceContent />}></Route>
              <Route
                path="/selectServiceMain"
                element={<SelectServiceMain />}
              ></Route>

              <Route path="/rightSidepage" element={<RightSidepage />}></Route>
              <Route path="/selectStaf" element={<SelectStaf />}></Route>
              <Route path="/artistCalendar" element={<ArtistCalendar />}></Route>
              <Route path="/reviewconfirm" element={<Reviewconfirm />}></Route>
              <Route path="/reviewInconfirmation" element={<ReviewInconfirmation />}></Route>
              <Route path="/splash" element={<Splash />}></Route>
              <Route path="/bookingMainPage" element={<BookingMainPage />}></Route>
              <Route path="/scrollAllImages" element={<ScrollAllImages />}></Route>
              <Route path="/seeallImagesGrid" element={<SeeallImagesGrid />}></Route>
              <Route path="/searchBar" element={<SearchBar />}></Route>

              {/* membership */}
              <Route path="/membership" element={<Membership />}></Route>
              <Route path="/membershipAddQuantity" element={<MembershipAddQuantity />}></Route>
              <Route path="/membershipLogin" element={<MembershipLogin />}></Route>
              <Route path="/membershipSignup" element={<MembershipSignup />}></Route>
              <Route path="/membershipRightside" element={<MembershipRightside />}></Route>
              <Route path="/membershipSignupEmail" element={<MembershipSignupEmail />}></Route>

              {/* voucher */}
              <Route path="/voucher" element={<Voucher />}></Route>
              <Route path="/voucherAddQuantity" element={<VoucherAddQuantity />}></Route>
              <Route path="/voucherChooserecipitent" element={<VoucherChooserecipitent />}></Route>
              <Route path="/voucherRightside" element={<VoucherRightside />}></Route>
              <Route path="/emailasgiftvoucher" element={<Emailasgiftvoucher />}></Route>
              <Route path="/printasgiftVoucher" element={<PrintasgiftVoucher />}></Route>   
              {/* <Route path="/AllAdminPages" element={<AllAdminPages />}></Route>    */}

                 
              </Routes>

           

          </BrowserRouter>

        )}
      </OptionProvider>

    </>
  );
}

export default App;
