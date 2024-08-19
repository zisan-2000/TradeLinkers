import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Clients from "./pages/Clients";
import Partners from "./pages/Partners";
import Media from "./pages/Media";
import Contacts from "./pages/Contacts";



const App = () => {
  return (
    
    <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/about/team" element={<About />} />
            <Route path="/about/mission" element={<About />} />
            <Route path="/about/vision" element={<About />} />
            <Route path="/about/unique" element={<About />} />
            <Route path="/about/founder" element={<About />} />


            <Route path="/solutions/hvac/commercial" element={<Solutions />} />
            <Route path="solutions/hvac/industrial" element={<Solutions />} />
            <Route path="/solutions/hvac/precision" element={<Solutions />} />
            <Route path="/solutions/hvac/food" element={<Solutions />} />

            <Route path="/solutions/cold/coldstorage" element={<Solutions />} />
            <Route path="/solutions/cold/ca" element={<Solutions />} />
            <Route path="/solutions/cold/walk" element={<Solutions />} />
            <Route path="/solutions/cold/move" element={<Solutions />} />

            <Route path="/solutions/dairy/ice" element={<Solutions />} />
            <Route path="/solutions/dairy/milk" element={<Solutions />} />
            <Route path="/solutions/dairy/condense" element={<Solutions />} />
            <Route path="/solutions/dairy/cheese" element={<Solutions />} />

            <Route path="/solutions/marine/fish" element={<Solutions />} />
            <Route path="/solutions/marine/ice" element={<Solutions />} />
            <Route path="/solutions/marine/plate" element={<Solutions />} />
            <Route path="/solutions/marine/fishproces" element={<Solutions />} />

            <Route path="/solutions/meat/meat" element={<Solutions />} />
            <Route path="/solutions/meat/slaught" element={<Solutions />} />
            <Route path="/solutions/meat/blast" element={<Solutions />} />
            <Route path="/solutions/meat/meatprocess" element={<Solutions />} />

            <Route path="//solutions/grain/silo" element={<Solutions />} />
            <Route path="/solutions/grain/handel" element={<Solutions />} />
            <Route path="/solutions/grain/milling" element={<Solutions />} />

            <Route path="/solutions/building/bms" element={<Solutions />} />
            <Route path="/solutions/building/fire" element={<Solutions />} />
            <Route path="/solutions/building/access" element={<Solutions />} />


            <Route path="/client/testimonials" element={<Clients />} />
            <Route path="/client/case-studies" element={<Clients />} />
            <Route path="/client/reviews" element={<Clients />} />

            <Route path="/partners/tech" element={<Partners />} />
            <Route path="/partners/business" element={<Partners />} />
            <Route path="/partners/community" element={<Partners />} />

            <Route path="/media/news" element={<Media />} />
            <Route path="/media/blog" element={<Media />} />
            <Route path="/media/videos" element={<Media />} />

            <Route path="/contact/email" element={<Contacts />} />
            <Route path="/contact/locations" element={<Contacts />} />
            <Route path="/contact/support" element={<Contacts />} />
          </Routes>
    </Router>
    
  );
};

export default App;