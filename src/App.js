import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-bootstrap";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Header from "./components/common/Header";
import Home from "./components/Home";
import Recomended from "./components/Recomended";
import NewFlinsta from "./components/NewFlinsta";
import Review from "./components/Review";
import AppointmentHome from "./components/AppointmentHome";                                                                                                                                                                                                                                                                                                                                                                                                            
import Footer from "./components/common/Footer";
import Decadence from "./components/Decadence";
import CardSlider from "./components/common/CardSlider";
import Demo from "./components/Demo";
import PartnerForm from "./components/PartnerForm";
import ColorHighlights from "./components/ColorHighlights";
import CuttingStyling from "./components/CuttingStyling";
import Face from "./components/Face";
import Feet from "./components/Feet";
import HairExtension from "./components/HairExtension";
import HairRemoval from "./components/HairRemoval";
import HairTreatments from "./components/HairTreatments";
import Hands from "./components/Hands";
import LashesBrows from "./components/LashesBrows";
import Massage from "./components/Massage";
import PackagesOffers from "./components/PackagesOffers";
import ServicesPage2 from "./components/ServicesPage2";
import All_Login from "./components/common/All_Login";
import LoginForm from "./components/common/Login2";
import Signup from "./components/common/Signup";
import ServiceDisplayRightSection from "./components/common/ServiceDisplayRightSection";
import SelectServicePage from "./components/SelectServicePage";
import ServiceMenuSlider from "./components/common/ServiceMenuSlider";
import SelectServiceContent from "./components/SelectServiceContent";
import SelectServiceMain from "./components/SelectserviceMain";
import RightSidepage from "./components/RightSidepage";
import ForgetPage from "./components/common/ForgetPage";
import ForgetPassword from "./components/common/ForgetPassword";
import Otp from "./components/common/Otp";
import ResetPassword from "./components/common/ResetPassword";
import For_Business from "./components/common/For_Business";
import SelectStaf from "./components/SelectStaf";
import ArtistCalendar from "./components/ArtistCalendar";
import Reviewconfirm from "./components/ReviewConfirm";
import ReviewInconfirmation from "./components/ReviewInconfirmation";



function App() {
  return (
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
        <Route path="/allLogin" element={<All_Login />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signUp" element={<Signup />}></Route>
        <Route path="/forgetPage" element={<ForgetPage />}></Route>
        <Route path="/forgetPassword" element={<ForgetPassword />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/resetPassword" element={<ResetPassword />}></Route>
        <Route path="/forBusiness" element={<For_Business />}></Route>
        <Route path="/serviceDisplayRightSection" element={<ServiceDisplayRightSection />}></Route>
        <Route path="/selectServicePage" element={<SelectServicePage />}></Route>
        <Route path="/servicesPage2" element={<ServicesPage2 />}></Route>
        <Route path="/serviceMenuSlider" element={<ServiceMenuSlider />}></Route>
        <Route path="/selectServiceContent" element={<SelectServiceContent />}></Route>
        <Route path="/selectServiceMain" element={<SelectServiceMain />}></Route>
        <Route path="/rightSidepage" element={<RightSidepage />}></Route>
        <Route path="/selectStaf" element={<SelectStaf />}></Route>
        <Route path="/artistCalendar" element={<ArtistCalendar />}></Route>
        <Route path="/reviewconfirm" element={<Reviewconfirm />}></Route>
        <Route path="/reviewInconfirmation" element={<ReviewInconfirmation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
