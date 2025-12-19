import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutAdvanced from "./pages/Aboutadvanced";
import Footer from "./components/Footer";
import CS from "./pages/Cs";
import Mechanical from "./pages/Mechanical";
import Civil from "./pages/Civil";
import Electrical from "./pages/Electrical";
import Help from "./pages/Help";
import FAQ from "./pages/Faq";
import PrivacyPolicy from "./pages/Privacypolicy";
import Terms from "./pages/Terms";
import Btech from "./pages/Btech";
import Mtech from "./pages/Mtech";
import Phd from "./pages/Phd";
import Diploma from "./pages/Diploma";


function App() {
  return (
    <>
      <Navbar />

      <div>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <AboutAdvanced />  {/* <-- Now appears only on home */}
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/department/cs" element={<CS />} />
          <Route path="/department/mech" element={<Mechanical />} />
          <Route path="/department/civil" element={<Civil />} />
          <Route path="/department/ee" element={<Electrical />} />
          <Route path="/help" element={<Help />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/courses/btech" element={<Btech />} />
          <Route path="/courses/mtech" element={<Mtech />} />
          <Route path="/courses/phd" element={<Phd />} />
          <Route path="/courses/diploma" element={<Diploma/>} />









        </Routes>

        {/* Footer stays on all pages */}
        <Footer />
      </div>
    </>
  );
}

export default App;
