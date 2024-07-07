import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CircleCardSlider from "./Components/Common/CircleCardSlider";
import { HeroCardData } from "./StaticData/HomePageData";
import Navbar from "./Components/Common/Navbar/Navbar";

// Import the necessary components for the routes
import AboutUs from "./Components/AboutUs/AboutUs";
import SignIn from "./Components/SignIn/SignIn";
import Cart from "./Components/Cart/Cart";
import Offers from "./Components/Offers/Offers";
import Reviews from "./Components/Reviews/Reviews";
import FAQs from "./Components/FAQs/FAQs";
import Blogs from "./Components/Blogs/Blogs";
import ContactExpert from "./Components/Contact Expert/ContactExpert";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CircleCardSlider sliderData={HeroCardData} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <ContactExpert/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
