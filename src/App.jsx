import "./App.css";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BookingForm from "./components/BookingForm";
import SearchResult from "./components/SearchResult";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-neutral-800">
      <Routes>
      
        <Route
          path="/"
          element={
            <>
              <Home />
              <Doctors />
              <Testimonials />
              <Footer />
            </>
          }
        />

        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/search-result" element={<SearchResult />} />
      </Routes>
    </div>
  );
}

export default App;
