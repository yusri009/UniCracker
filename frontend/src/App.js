import "./App.css";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import CourseOrder from "./pages/CourseOrder";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courseorder" element={<CourseOrder />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
          <ChatBot />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
