import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/common/Header';
import Home from './components/Home';
import Recomended from './components/Recomended';
import NewFlinsta from './components/NewFlinsta';
import Review from './components/Review';
import AppointmentHome from './components/AppointmentHome';
import Footer from './components/common/Footer';
import Decadence from './components/Decadence';

function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/header" element={<Header />}></Route>
     <Route path="/footer" element={<Footer />}></Route>
     <Route path="/home" element={<Home />}></Route>
     <Route path="/recomended" element={<Recomended />}></Route>
     <Route path="/newFlinsta" element={<NewFlinsta />}></Route>
     <Route path="/review" element={<Review />}></Route>
     <Route path="/appointmentHome" element={<AppointmentHome />}></Route>
     <Route path="/" element={<Decadence />}></Route>
     
     </Routes>
    </BrowserRouter>
   
  );
}

export default App;
